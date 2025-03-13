import { ERRORS } from "@/config/error.config"
import { ErrorInfo } from "../../../interfaces/error-info.interface"
/**
 * function to get errors description for api errors
 * @param {object} errorConfig error configurations for app
 */
export function getErrorMessage(
  errorConfig: any,
): (status: number, errorCode: string, container: string, serviceName?: string) => ErrorInfo {
  return (
    status: number,
    errorCode: string,
    container: string,
    serviceName = "DEFAULT",
  ): ErrorInfo => {
    // handle error containers or DEFAULT container
    console.log("status", status)
    console.log("errorCode", errorCode)
    console.log("container", container)
    console.log("serviceName", serviceName)
    let error =
      container &&
      errorConfig[container] &&
      errorConfig[container][serviceName] &&
      errorConfig[container][serviceName][status] &&
      errorConfig[container][serviceName][status][errorCode]
        ? errorConfig[container][serviceName][status][errorCode]
        : null
    if (error) {
      return {
        ...error,
        code: errorCode,
        status,
        container,
        serviceName,
      }
    } else {
      error = errorConfig.DEFAULT[status]
        ? errorConfig.DEFAULT[status]
        : errorConfig.DEFAULT.DEFAULT
    }
    return {
      ...error,
      code: errorCode,
      status,
      container,
      serviceName,
    }
  }
}

const errorHelper = getErrorMessage(ERRORS)

export default errorHelper
