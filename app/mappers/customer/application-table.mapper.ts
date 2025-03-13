import { FinanceApplicationDataModel } from "@/data-models/finance-application.data-model"
import { FinanceApplicationUIModel } from "@/ui-models/finance-application.ui-model"

function mapToUI(applicationData: FinanceApplicationDataModel): FinanceApplicationUIModel {
  return {
    id: applicationData.id,
    shortId: applicationData.shortId,
    createdAt: applicationData.createdAt,
    lastUpdatedAt: applicationData.lastUpdatedAt,
    customerName: applicationData.customer?.personalData?.idNameArabic ?? "",
    financialMerchant: applicationData.financialMerchant?.companyName?.en ?? "",
    financialProduct: applicationData.financialProduct?.productName?.en ?? "",
    autoProduct: `${applicationData.product?.carBrand?.name?.en} - ${
      (applicationData.product?.carModel as LanguageField)?.en ??
      (applicationData.product?.carModel as { name: LanguageField })?.name?.en
    }`,
    status: applicationData.status,
  }
}

const customersApplicationsTableMapper = { mapToUI }

export default customersApplicationsTableMapper
