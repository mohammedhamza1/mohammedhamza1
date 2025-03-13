import { ApiResponse } from "apisauce"
import { api } from ".."
import { UserAuthDataModel } from "@/data-models/user-auth.data-model"
import { ErrorInfo } from "@/interfaces/error-info.interface"
import { AddUserDataModel, UserDataModel } from "@/data-models/user.data-model"
import { ResponseModel } from "@/interfaces/response-model.interface"

const apis = {
  registerUser: (
    email: string,
    password: string,
  ): Promise<ApiResponse<UserAuthDataModel, ErrorInfo>> =>
    api.apisauce.post("/auth/register", { email, password }),
  loginUser: (
    email: string,
    password: string,
  ): Promise<ApiResponse<UserAuthDataModel, ErrorInfo>> =>
    api.apisauce.post("/auth/login", { email, password }),
  changePassword: (
    token: string,
    password: string,
  ): Promise<ApiResponse<UserAuthDataModel, ErrorInfo>> =>
    api.apisauce.post("/auth/changePassword", { token, password }),
  forgotPassword: (email: string): Promise<ApiResponse<{}, ErrorInfo>> =>
    api.apisauce.post("/auth/forgotPassword", { email }),
  validateToken: (): Promise<ApiResponse<{}, ErrorInfo>> => api.apisauce.get("/auth/verifyToken"),
  refreshToken: (refreshToken: string): Promise<ApiResponse<UserAuthDataModel, ErrorInfo>> =>
    api.apisauce.post("/auth/refreshToken", { refreshToken }),
  getAllUsers: (): Promise<ApiResponse<ResponseModel<UserDataModel[]>, ErrorInfo>> =>
    api.apisauce.get("/users/"),
  addUser: (
    userModel: UserDataModel,
  ): Promise<ApiResponse<ResponseModel<UserDataModel>, ErrorInfo>> =>
    api.apisauce.post("/users/", userModel),
  getUserByPhoneNumber: (
    phone: string,
  ): Promise<ApiResponse<ResponseModel<UserDataModel>, ErrorInfo>> =>
    api.apisauce.post("/users/searchOne", { phone }),
  addUnverifiedUser: (
    userData: AddUserDataModel,
  ): Promise<ApiResponse<ResponseModel<AddUserDataModel>, ErrorInfo>> =>
    api.apisauce.post("/users/addUser", userData),
}

// TODO: Enhance the way of mocking APIs
// export const userApi = debugConfig.useFixtures ? userApiFixtureService : apis

export const authApi = apis
