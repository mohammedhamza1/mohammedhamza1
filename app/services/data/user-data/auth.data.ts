import { UserAuthDataModel } from "@/data-models/user-auth.data-model"
import { ErrorInfo } from "@/interfaces/error-info.interface"
import userAuthMapper from "@/mappers/auth/user-auth.mapper"
import { authApi } from "@/services/api/auth-apis/auth-api.service"
import errorHelper from "@/services/helpers/error-helper/error-helper.service"
import { UserAuthUIModel } from "@/ui-models/user-auth.ui-model"
import { ApiResponse } from "apisauce"

/**
 * function to check use token validity
 */
// export function checkTokenValidity(): Promise<boolean> {
//   return authApi
//     .validateToken()
//     .then(
//       (response) => {
//         if (response.status === 202) {
//           return true
//         } else {
//           cleanupUserData()
//           return false
//         }
//       },
//       (rejected) => {
//         console.error(rejected)
//         cleanupUserData()
//         return false
//       },
//     )
//     .catch((error) => {
//       console.error(error)
//       cleanupUserData()
//       return false
//     })
// }

/**
 * function to check use token validity
 */
// export function refreshUserSession(): Promise<AuthStatus> {
//   const userData = refreshUserToken()
//   if (userData === null) {
//     cleanupUserData()
//     return new Promise((resolve) => resolve(AuthStatus.UNAUTHENTICATED))
//   } else {
//     return authApi
//       .validateToken()
//       .then(
//         (response) => {
//           if (response.status === 202) {
//             setUserProperties(userData.userId, userData.email, userData.role?.toString() || "guest")
//             return AuthStatus.AUTHENTICATED
//           } else if (response.status === 403) {
//             return AuthStatus.UNAUTHORIZED
//           } else if (response.status === 401) {
//             cleanupUserData()
//             return AuthStatus.UNAUTHENTICATED
//           } else {
//             return AuthStatus.UNKNOWN
//           }
//         },
//         (rejected) => {
//           console.error("rejected>>>>", rejected)

//           cleanupUserData()
//           return AuthStatus.UNAUTHENTICATED
//         },
//       )
//       .catch((error) => {
//         console.error(error)
//         cleanupUserData()
//         return AuthStatus.UNAUTHENTICATED
//       })
//   }
// }

/**
 * function to sign up user
 * @param email {string} user email
 * @param password {string} user password
 * @param containerName {string} UI container
 */
export function registerUser(
  email: string,
  password: string,
  containerName: string,
): Promise<UserAuthUIModel | ErrorInfo> {
  return authApi
    .registerUser(email, password)
    .then((response: ApiResponse<UserAuthDataModel, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        if (data) {
          const mappedData = userAuthMapper.mapToUI(data)
          // setUserProperties(
          //   mappedData.userId,
          //   mappedData.email,
          //   mappedData.role?.toString() || "guest",
          // )
          return mappedData
        } else {
          const error: ErrorInfo = errorHelper(
            0,
            "",
            containerName,
            (authApi.registerUser as any).displayName,
          )
          return error
        }
      } else {
        const error: ErrorInfo = errorHelper(
          Number(response.status),
          response.data && response.data.errorCode
            ? String(response.data.errorCode || "")
            : response.problem,
          containerName,
          (authApi.registerUser as any).displayName,
        )

        return error
      }
    })
}

/**
 * function to login user
 * @param email {string} user email
 * @param password {string} user password
 * @param containerName {string} UI container
 */
export function loginUser(
  email: string,
  password: string,
  containerName: string,
): Promise<UserAuthUIModel | ErrorInfo> {
  return authApi
    .loginUser(email, password)
    .then((response: ApiResponse<UserAuthDataModel, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        if (data) {
          const mappedData = userAuthMapper.mapToUI(data)
          // setUserProperties(
          //   mappedData.userId,
          //   mappedData.email,
          //   mappedData?.role?.toString() || "guest",
          // )
          return mappedData
        } else {
          const error: ErrorInfo = errorHelper(
            0,
            "",
            containerName,
            (authApi.loginUser as any).displayName,
          )
          return error
        }
      } else {
        const error: ErrorInfo = errorHelper(
          Number(response.status),
          response.data && response.data.errorCode
            ? String(response.data.errorCode || "")
            : response.problem,
          containerName,
          (authApi.loginUser as any).displayName,
        )

        return error
      }
    })
}

export function userRefreshToken(
  refreshToken: string,
  containerName?: string,
): Promise<UserAuthUIModel | ErrorInfo> {
  return authApi
    .refreshToken(refreshToken)
    .then((response: ApiResponse<UserAuthDataModel, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        if (data) {
          const mappedData = userAuthMapper.mapToUI(data)
          // setUserProperties(
          //   mappedData.userId,
          //   mappedData.email,
          //   mappedData.role?.toString() || "guest",
          // )
          return mappedData
        } else {
          const error: ErrorInfo = errorHelper(
            0,
            "",
            containerName || "APPLICATIONS_MODULE",
            (authApi.refreshToken as any).displayName,
          )
          return error
        }
      } else {
        const error: ErrorInfo = errorHelper(
          Number(response.status),
          response.data && response.data.errorCode
            ? String(response.data.errorCode || "")
            : response.problem,
          containerName || "APPLICATIONS_MODULE",
          (authApi.refreshToken as any).displayName,
        )

        return error
      }
    })
}

/**
 * function to change user password
 * @param token {string} server side generated token
 * @param password {string} user new password
 * @param containerName {string} UI container
 */
export function changeUserPassword(
  token: string,
  password: string,
  containerName: string,
): Promise<UserAuthUIModel | ErrorInfo> {
  return authApi
    .changePassword(token, password)
    .then((response: ApiResponse<UserAuthDataModel, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        if (data) {
          const mappedData = userAuthMapper.mapToUI(data)
          // setUserProperties(
          //   mappedData.userId,
          //   mappedData.email,
          //   mappedData.role?.toString() || "guest",
          // )
          return mappedData
        } else {
          const error: ErrorInfo = errorHelper(
            0,
            "",
            containerName,
            (authApi.loginUser as any).displayName,
          )
          return error
        }
      } else {
        const error: ErrorInfo = errorHelper(
          Number(response.status),
          response.data && response.data.errorCode
            ? String(response.data.errorCode || "")
            : response.problem,
          containerName,
          (authApi.loginUser as any).displayName,
        )

        return error
      }
    })
}

/**
 * function to forgot user password
 * @param email {string} user email
 * @param containerName {string} UI container
 */
export function forgotUserPassword(email: string, containerName: string): Promise<{} | ErrorInfo> {
  return authApi.forgotPassword(email).then((response: ApiResponse<{}, ErrorInfo>) => {
    if (response.ok) {
      const { data } = response
      if (data) {
        return data
      } else {
        const error: ErrorInfo = errorHelper(
          0,
          "",
          containerName,
          (authApi.loginUser as any).displayName,
        )
        return error
      }
    } else {
      const error: ErrorInfo = errorHelper(
        Number(response.status),
        response.data && response.data.errorCode
          ? String(response.data.errorCode || "")
          : response.problem,
        containerName,
        (authApi.loginUser as any).displayName,
      )

      return error
    }
  })
}
