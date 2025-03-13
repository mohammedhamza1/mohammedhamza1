/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://docs.infinite.red/ignite-cli/boilerplate/app/services/#backend-api-integration)
 * documentation for more details.
 */
import { ApiResponse, ApisauceInstance, create } from "apisauce"
import Config from "../../config"
import { AxiosRequestConfig } from "axios"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem"
import type { ApiConfig, ApiFeedResponse } from "./api.types"
import type { EpisodeSnapshotIn } from "../../models/Episode"
import { isErrorInfo } from "@/interfaces/error-info.interface"
import { userRefreshToken } from "../data/user-data/auth.data"
import { loadUserData, removeUserData, saveUserData } from "@/utils/storage/userData.storage"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 240000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "Accept-Language": "*",
      },
    })

    this.apisauce.addRequestTransform(async (request: AxiosRequestConfig) => {
      request.httpsAgent = {
        rejectUnauthorized: false,
      }

      const userData = loadUserData()
      const jwt = userData?.accessToken || null
      if (jwt) {
        request.headers = request.headers || {}
        request.headers.Authorization = `Bearer ${jwt}`
      }
    })

    this.apisauce.addAsyncResponseTransform(async (response) => {
      if (
        response.status === 401 &&
        response.config?.url &&
        response.config?.url?.indexOf("/auth/refreshToken") === -1
      ) {
        const savedUserData = loadUserData()
        const refreshToken = savedUserData?.refreshToken
        if (refreshToken) {
          const userData = await userRefreshToken(refreshToken)

          if (isErrorInfo(userData)) {
            removeUserData()
          } else {
            saveUserData({ ...userData, refreshToken })

            const accessToken = userData?.accessToken
            if (accessToken) this.apisauce.setHeader("Authorization", `Bearer ${accessToken}`)
            // retry
            const data = await this.apisauce.any(response.config as any)
            // replace data
            response.data = data.data
            response.status = data.status
            response.problem = data.problem
            response.headers = data.headers
            response.ok = data.ok
          }
        } else {
          removeUserData()
        }
      }
    })
  }

  /**
   * Gets a list of recent React Native Radio episodes.
   */
  async getEpisodes(): Promise<{ kind: "ok"; episodes: EpisodeSnapshotIn[] } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<ApiFeedResponse> = await this.apisauce.get(
      `api.json?rss_url=https%3A%2F%2Ffeeds.simplecast.com%2FhEI_f9Dx`,
    )

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data

      // This is where we transform the data into the shape we expect for our MST model.
      const episodes: EpisodeSnapshotIn[] =
        rawData?.items.map((raw) => ({
          ...raw,
        })) ?? []

      return { kind: "ok", episodes }
    } catch (e) {
      if (__DEV__ && e instanceof Error) {
        console.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
