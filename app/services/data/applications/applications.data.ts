import { DocumentTypeDataModel } from "@/data-models/document-type.data-model"
import { FinanceApplicationStatusDataModel } from "@/data-models/finance-application-status.data-model"
import { FinanceApplicationDataModel } from "@/data-models/finance-application.data-model"
import { SearchFinanceApplicationsDataModel } from "@/data-models/search-finance-applications.data-model"
import { ErrorInfo } from "@/interfaces/error-info.interface"
import { ResponseModel } from "@/interfaces/response-model.interface"
import applicationDocsMapper from "@/mappers/customer/application-docs.mapper"
import customersApplicationsTableMapper from "@/mappers/customer/application-table.mapper"
import customerApplicationMapper from "@/mappers/customer/customer-application.mapper"
import { customerApi } from "@/services/api/customer-apis/customer-api.service"
import errorHelper from "@/services/helpers/error-helper/error-helper.service"
import {
  ApplicationDocsUIModel,
  ApplicationDocumentsDataUIModel,
} from "@/ui-models/application-document.ui-model"
import { FinanceApplicationUIModel } from "@/ui-models/finance-application.ui-model"
import { ApiResponse } from "apisauce"

export async function searchCustomersApplications(
  customerApplicationDataPayoload: SearchFinanceApplicationsDataModel,
  containerName: string,
): Promise<ResponseModel<FinanceApplicationUIModel[]> | ErrorInfo> {
  return customerApi
    .searchCustomersApplications(customerApplicationDataPayoload)
    .then((response: ApiResponse<ResponseModel<FinanceApplicationDataModel[]>, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        if (data) {
          const mappedData = {
            ...data,
            data: data.data.map((data) => customersApplicationsTableMapper.mapToUI(data)),
            total_count: data.total_count,
          }
          return mappedData
        } else {
          const error: ErrorInfo = errorHelper(
            0,
            "",
            containerName,
            (customerApi.searchCustomersApplications as any).name,
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
          (customerApi.searchCustomersApplications as any).name,
        )
        return error
      }
    })
}

export async function getCustomerApplicationById(
  applicationId: string,
  containerName: string,
): Promise<FinanceApplicationUIModel | ErrorInfo> {
  return customerApi
    .getCustomerApplicationById(applicationId)
    .then((response: ApiResponse<ResponseModel<FinanceApplicationDataModel>, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        if (data) {
          const mappedData = customerApplicationMapper.mapToUI(data.data)
          return mappedData
        } else {
          const error: ErrorInfo = errorHelper(
            0,
            "",
            containerName,
            (customerApi.getCustomerApplicationById as any).name,
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
          (customerApi.getCustomerApplicationById as any).name,
        )
        return error
      }
    })
}

export async function updateApplicationStatus(
  applicationId: string,
  status: FinanceApplicationStatusDataModel,
  containerName: string,
) {
  return customerApi
    .updateApplicationStatus(applicationId, status)
    .then((response: ApiResponse<ResponseModel<any>, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        if (data) {
          return data
        } else {
          const error: ErrorInfo = errorHelper(
            0,
            "",
            containerName,
            (customerApi.updateApplicationStatus as any).name,
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
          (customerApi.updateApplicationStatus as any).name,
        )
        return error
      }
    })
}

export async function getSignedUrl(
  key: string,
  containerName: string,
): Promise<ResponseModel<{ url: string }> | ErrorInfo | undefined> {
  return customerApi
    .getSignedUrl(key)
    .then((response: ApiResponse<ResponseModel<{ url: string }>, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        return data
      } else {
        const error: ErrorInfo = errorHelper(
          Number(response.status),
          response.data && response.data.errorCode
            ? String(response.data.errorCode || "")
            : response.problem,
          containerName,
          (customerApi.getSignedUrl as any).name,
        )
        return error
      }
    })
}

export async function createApplicationDocuments(
  applicationDocuments: ApplicationDocumentsDataUIModel,
  containerName: string,
): Promise<{ message: string } | ErrorInfo> {
  const data = new FormData()

  const mappedData = applicationDocsMapper.mapToModel(applicationDocuments)

  data.append("applicationId", mappedData.applicationId)
  let hasFiles = false
  for (const property in mappedData) {
    if (property !== "applicationId") {
      ;(mappedData[property as keyof ApplicationDocsUIModel] as DocumentTypeDataModel[]).forEach(
        (file: DocumentTypeDataModel) => {
          if ((file as unknown as Blob).size) {
            hasFiles = true
            data.append(property, file as unknown as Blob)
          }
        },
      )
    }
  }
  if (!hasFiles) return { message: "" }

  return customerApi
    .createApplicationDocuments(data)
    .then((response: ApiResponse<{ message: string }, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        if (data) {
          return data
        } else {
          const error: ErrorInfo = errorHelper(
            0,
            "",
            containerName,
            (customerApi.createApplicationDocuments as any).name,
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
          (customerApi.createApplicationDocuments as any).name,
        )
        return error
      }
    })
}

// export async function getApplicationDocumentsById(
//   id: string,
//   containerName: string,
// ): Promise<ApplicationDocumentsDataUIModel | ErrorInfo> {
//   return customerApi
//     .getApplicationDocumentsById(id)
//     .then((response: ApiResponse<ResponseModel<ApplicationDocumentsDataUIModel>, ErrorInfo>) => {
//       if (response.ok) {
//         const { data } = response
//         if (data) {
//           const mappedData = applicationDocsMapper.mapToUI(data.data)
//           return mappedData
//         } else {
//           const error: ErrorInfo = errorHelper(
//             0,
//             "",
//             containerName,
//             (customerApi.getApplicationDocumentsById as any).name,
//           )
//           return error
//         }
//       } else {
//         const error: ErrorInfo = errorHelper(
//           Number(response.status),
//           response.data && response.data.errorCode
//             ? String(response.data.errorCode || "")
//             : response.problem,
//           containerName,
//           (customerApi.getApplicationDocumentsById as any).name,
//         )
//         return error
//       }
//     })
// }

export async function getApplicationSignedUrl(
  key: string,
  containerName: string,
): Promise<ResponseModel<{ url: string }> | ErrorInfo | undefined> {
  return customerApi
    .getApplicationSignedUrl(key)
    .then((response: ApiResponse<ResponseModel<{ url: string }>, ErrorInfo>) => {
      if (response.ok) {
        const { data } = response
        return data
      } else {
        const error: ErrorInfo = errorHelper(
          Number(response.status),
          response.data && response.data.errorCode
            ? String(response.data.errorCode || "")
            : response.problem,
          containerName,
          (customerApi.getApplicationSignedUrl as any).name,
        )
        return error
      }
    })
}
