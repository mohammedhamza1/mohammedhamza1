import { UserDataModel } from "@/data-models/user.data-model"
import { ErrorInfo } from "@/interfaces/error-info.interface"
import { ResponseModel } from "@/interfaces/response-model.interface"
import userMapper from "@/mappers/auth/user.mapper"
import { authApi } from "@/services/api/auth-apis/auth-api.service"
import errorHelper from "@/services/helpers/error-helper/error-helper.service"
import { UserUIModel } from "@/ui-models/user.ui-model"
import { ApiResponse } from "apisauce"

export function getAllUsers(containerName: string): Promise<UserUIModel[] | ErrorInfo> {
  return authApi
    .getAllUsers()
    .then((response: ApiResponse<ResponseModel<UserDataModel[]>, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        if (data && data.data) {
          return userMapper.mapToUIList(data.data)
        } else {
          return errorHelper(0, "", containerName, (authApi.getAllUsers as any).displayName)
        }
      } else {
        return errorHelper(
          Number(response.status),
          response.data && response.data.errorCode
            ? String(response.data.errorCode || "")
            : response.problem,
          containerName,
          (authApi.getAllUsers as any).displayName,
        )
      }
    })
}

export function getUserByPhoneNumber(
  phone: string,
  containerName: string,
): Promise<UserDataModel | ErrorInfo> {
  return authApi
    .getUserByPhoneNumber(phone)
    .then((response: ApiResponse<ResponseModel<UserDataModel>, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        if (data && data.data) {
          return data.data
        } else {
          return errorHelper(
            0,
            "",
            containerName,
            (authApi.getUserByPhoneNumber as any).displayName,
          )
        }
      } else {
        return errorHelper(
          Number(response.status),
          response.data && response.data.errorCode
            ? String(response.data.errorCode || "")
            : response.problem,
          containerName,
          (authApi.getUserByPhoneNumber as any).displayName,
        )
      }
    })
}
