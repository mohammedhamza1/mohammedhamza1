import { FinanceApplicationDataModel } from "@/data-models/finance-application.data-model"
import { FinanceApplicationStatus } from "@/enums/finance-application-status.enum"
import { JobType } from "@/enums/job-type.enum"
import { LanguageType } from "@/types/language-field.type"
import { FinanceApplicationUIModel } from "@/ui-models/finance-application.ui-model"
import moment from "moment"

const mapToUI = (applicationData: FinanceApplicationDataModel): FinanceApplicationUIModel => {
  const getCompanyName = () => {
    const personalData = applicationData.customer?.personalData
    const financialData = applicationData.customer?.financialData

    if (financialData?.jobType === JobType.EMPLOYEE) {
      return financialData?.isCurrentOrgSameAsIdOrg
        ? personalData?.occupationOrgName
        : financialData?.currentOrg
    } else if (financialData?.jobType === JobType.SELF_EMPLOYEE) {
      return financialData.orgName ?? personalData?.occupationOrgName
    } else if (financialData?.jobType === JobType.FREE_PROFESSIONS) {
      return financialData.isCurrentOfficeClinicSameAsId
        ? personalData?.occupationOrgName
        : financialData.currentOfficeClinic
    } else if (financialData?.jobType === JobType.FREELANCE) {
      return personalData?.occupationOrgName
    }
  }

  return {
    userId: {
      id: applicationData.userId ?? "",
      label: applicationData?.user?.name ?? "",
    },
    agent: applicationData.agent,
    customer: {
      name: applicationData.customer?.personalData.idNameArabic ?? "",
      nationalId: applicationData?.customer?.personalData.idNumber ?? "",
      mobileNumber: applicationData.customer?.personalData.mobileNumber ?? "",
      livingAddress: applicationData.customer?.personalData.isResidentialAddressSameAsIdCard
        ? applicationData.customer?.personalData.address
        : applicationData.customer?.personalData.residentialAddressAddress,
      houseOwnership: applicationData.customer?.personalData.residenceType ?? "",
      employmentStatus: applicationData.customer?.financialData.jobType ?? "",
      companyName: getCompanyName(),
      hasHRLetter: applicationData.customer?.attachments?.hrLetter ? true : false,
      hasBankStatment: applicationData.customer?.attachments?.bankStatement ? true : false,
      refrenceRelation: applicationData.customer?.personalData.referenceRelation ?? "",
      refrenceName: applicationData.customer?.personalData.referenceFullName ?? "",
      refrenceNumber: applicationData.customer?.personalData.referenceMobileNumber ?? "",
      attachments: applicationData.customer?.attachments,
      anotherIncome: applicationData.customer?.financialData.anotherIncome,
      workAddress: applicationData.customer?.financialData?.orgAddress
        ? applicationData.customer?.financialData.orgAddress
        : applicationData.customer?.financialData?.currentOrgAddress
          ? applicationData.customer?.financialData.currentOrgAddress
          : applicationData.customer?.financialData?.officeClinicAddress
            ? applicationData.customer?.financialData.officeClinicAddress
            : "",
      maritalStatus: applicationData.customer?.personalData.maritalStatus ?? "",
    },
    financialMerchantId: {
      id: applicationData.financialMerchantId ?? "",
      label: applicationData.financialMerchant?.name?.en ?? "",
      imageUrl: applicationData.financialMerchant?.url,
    },
    financialProductId: {
      id: applicationData.financialProductId ?? "",
      label: applicationData.financialProduct?.productName?.en ?? "",
    },
    merchantAgentId: {
      id: applicationData.merchantAgent?.id ?? "",
      label: applicationData.merchantAgent?.name ?? "",
    },
    availability: applicationData.availability,
    productId: {
      id: applicationData.productId ?? "",
      label: `${applicationData.product?.carBrand?.name?.en ?? ""} - ${
        (applicationData.product?.carModel as LanguageType)?.en ?? ""
      }`,
      imageUrl: applicationData.product?.productImages?.[0]?.url,
    },
    productType: applicationData.product?.productType ?? "",
    carBrandId: {
      id: applicationData.product?.carBrandId ?? "",
      label: `${applicationData.product?.carBrand?.name?.en} - ${applicationData.product?.carBrand?.name?.ar}`,
      imageUrl: applicationData.product?.carBrand?.url,
    },
    carModelId: {
      id: applicationData.product?.carModelId ?? "",
      label: `${
        (applicationData.product?.carModel as { name: LanguageType })?.name?.en ??
        (applicationData.product?.carModel as LanguageType)?.en
      } - ${
        (applicationData.product?.carModel as { name: LanguageType })?.name?.ar ??
        (applicationData.product?.carModel as LanguageType)?.ar
      } `,
    },
    carCategoryId: {
      id: applicationData.product?.carCategoryId ?? "",
      label: `${
        (applicationData.product?.carCategory as { name: LanguageType })?.name?.en ??
        (applicationData.product?.carCategory as LanguageType)?.en
      } - ${
        (applicationData.product?.carCategory as { name: LanguageType })?.name?.ar ??
        (applicationData.product?.carCategory as LanguageType)?.ar
      }`,
    },
    engineCapacity: {
      id: applicationData.product?.engineCapacity?.toString() ?? "",
      label: applicationData.product?.engineCapacity?.toString() ?? "",
    },
    motorType: applicationData.product?.motorType?.en,
    manufactureYear: moment(applicationData.product?.manufactureYear, "Y") ?? "",
    carPrice: applicationData.product?.carPrice ? applicationData.product?.carPrice.toString() : "",

    timeline: applicationData.timeline,
    downPayment: applicationData.downPayment ?? "",
    financedAmount: applicationData.financedAmount ?? "",
    monthlyIncome: applicationData.monthlyIncome ?? "",
    customerCommunication: applicationData.customerCommunication ?? "",
    tenor: { id: String(applicationData.tenor), label: String(applicationData.tenor) },
    status: applicationData.status ?? FinanceApplicationStatus.DRAFT,
    createdAt: applicationData.createdAt,
    lastUpdatedAt: applicationData.lastUpdatedAt,
    lastUpdatedByUser: applicationData.lastUpdatedByUser,
    shortId: applicationData.shortId,
  }
}
const customerApplicationMapper = { mapToUI }

export default customerApplicationMapper
