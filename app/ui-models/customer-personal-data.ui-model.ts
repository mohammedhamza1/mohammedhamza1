import { Moment } from "moment"
import { SelectUiModel } from "./select.ui-model"

export interface CustomerPersonalDataUiModel {
  userId?: SelectUiModel
  agent?: SelectUiModel
  mobileNumber?: string
  email?: string
  identity?: string
  idNumber?: string
  nationality?: SelectUiModel
  idNameEnglish?: string
  idNameArabic?: string
  idCode?: string
  idIssueDate?: Moment | null
  idExpiryDate?: Moment | null
  cityId?: SelectUiModel | null
  areaId?: SelectUiModel | null
  address?: string
  birthDate?: Moment | null
  gender?: string
  occupation?: string
  occupationOrgName?: string
  jobStatus?: string
  maritalStatus?: string
  spouseName?: string
  spouseJobTitle?: string
  spouseMobileNumber?: string
  hasSpouseCar?: string
  spouseCarCount?: string
  carBrandId?: SelectUiModel
  carTypeId?: SelectUiModel
  carModelId?: SelectUiModel
  paymentType?: string
  hearAboutUs?: string
  hau_websiteName?: string
  hau_showroomMerchantId?: SelectUiModel
  hau_showroomBranchId?: SelectUiModel
  hau_showroomSalesmanName?: string
  hau_showroomSalesmanMobileNumber?: string
  hau_socialMediaName?: string
  hau_friendName?: string
  hau_friendMobileNumber?: string
  hau_other?: string
  residentialType?: SelectUiModel
  residentialUnitAreaId?: SelectUiModel
  isResidentialAddressSameAsIdCard?: string
  residentialAddressCityId?: SelectUiModel
  residentialAddressAreaId?: SelectUiModel
  residentialAddressAddress?: string
  residenceType?: string
  rentalType?: string
  residentialStayDuration?: SelectUiModel
  utilityBillType?: SelectUiModel
  prev1Monthconsumption?: string
  prev2Monthconsumption?: string
  prev3Monthconsumption?: string
  referenceRelation?: SelectUiModel
  referenceFullName?: string
  referenceMobileNumber?: string
  isReferenceSameAddress?: string
  referenceCityId?: SelectUiModel
  referenceAreaId?: SelectUiModel
  referenceCurrentOrganizationAddress?: string
  createdAt?: string
  createdByUser?: { name: string }
  lastUpdatedAt?: string
  lastUpdatedByUser?: { name: string }
  status?: string
  isActive?: boolean
}
