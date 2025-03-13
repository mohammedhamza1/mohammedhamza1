import { AddUserDataModel } from "@/data-models/user.data-model"
import { ErrorInfo } from "@/interfaces/error-info.interface"
import { ResponseModel } from "@/interfaces/response-model.interface"
import { authApi } from "@/services/api/auth-apis/auth-api.service"
import errorHelper from "@/services/helpers/error-helper/error-helper.service"
import { ApiResponse } from "apisauce"

export function addUnverifiedUser(
  userData: AddUserDataModel,
  containerName: string,
): Promise<AddUserDataModel | ErrorInfo> {
  return authApi
    .addUnverifiedUser(userData)
    .then((response: ApiResponse<ResponseModel<AddUserDataModel>, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        if (data && data.data) {
          return data.data
        } else {
          return errorHelper(0, "", containerName, (authApi.addUnverifiedUser as any).displayName)
        }
      } else {
        return errorHelper(
          Number(response.status),
          response.data && response.data.errorCode
            ? String(response.data.errorCode || "")
            : response.problem,
          containerName,
          (authApi.addUnverifiedUser as any).displayName,
        )
      }
    })
}
