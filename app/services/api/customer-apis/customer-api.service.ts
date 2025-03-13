import { ResponseModel } from "@/interfaces/response-model.interface"
import { ApiResponse } from "apisauce"
import { api } from ".."
import { SearchFinanceApplicationsDataModel } from "@/data-models/search-finance-applications.data-model"
import { FinanceApplicationDataModel } from "@/data-models/finance-application.data-model"
import { ApplicationDocumentsDataUIModel } from "@/ui-models/application-document.ui-model"
import { ErrorInfo } from "@/interfaces/error-info.interface"
import { FinanceApplicationStatusDataModel } from "@/data-models/finance-application-status.data-model"

const apis = {
  // ------------------------------- customer applications endpoints -------------------------------
  searchCustomersApplications: (
    customerApplicationDataPayoload: SearchFinanceApplicationsDataModel,
  ): Promise<ApiResponse<ResponseModel<FinanceApplicationDataModel[]>, ErrorInfo>> =>
    api.apisauce.post("/customerApplicationData/search", customerApplicationDataPayoload),

  getCustomerApplicationById: (
    applicationId: string,
  ): Promise<ApiResponse<ResponseModel<FinanceApplicationDataModel>, ErrorInfo>> =>
    api.apisauce.get(`/customerApplicationData/${applicationId}`),

  updateApplicationStatus: (
    applicationId: string,
    status: FinanceApplicationStatusDataModel,
  ): Promise<ApiResponse<ResponseModel<any>, ErrorInfo>> =>
    api.apisauce.put(`/customerApplicationData/status/${applicationId}`, status),

  getSignedUrl: (key: string): Promise<ApiResponse<ResponseModel<{ url: string }>, ErrorInfo>> =>
    api.apisauce.post("/customerUploadAsset/getSignedUrl", {}, { data: { key } }),

  // ------------------------------- applications documents endpoints -------------------------------
  createApplicationDocuments: (
    applicationDocuments: FormData,
  ): Promise<ApiResponse<{ message: string }, ErrorInfo>> =>
    api.apisauce.post("/applicationUploadAsset", applicationDocuments, {
      headers: { Accept: "multipart/form-data" },
    }),

  getApplicationDocumentsById: (
    applicationId: string,
  ): Promise<ApiResponse<ResponseModel<ApplicationDocumentsDataUIModel>, ErrorInfo>> =>
    api.apisauce.get(`/applicationUploadAsset/${applicationId}`),

  getApplicationSignedUrl: (
    key: string,
  ): Promise<ApiResponse<ResponseModel<{ url: string }>, ErrorInfo>> =>
    api.apisauce.post("/applicationUploadAsset/getSignedUrl", {}, { data: { key } }),
}

export const customerApi = apis
// TODO: Enhance the way of mocking APIs
// export const customerApi = Config.useFixtures ? customerFixtureService : apis
