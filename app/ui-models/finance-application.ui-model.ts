import { FinanceApplicationStatus } from "@/enums/finance-application-status.enum"
import { SelectType } from "@/types/select.type"
import { Moment } from "moment"

export interface FinanceApplicationUIModel {
  id?: string
  userId?: SelectType
  agent?: { name?: string; organization?: string }
  merchantAgentId?: SelectType
  customerName?: string
  financialMerchant?: string
  financialProduct?: string
  autoProduct?: string
  customer: {
    name?: string
    nationalId?: string
    mobileNumber?: string
    livingAddress?: string
    houseOwnership?: string
    employmentStatus?: string
    companyName?: string
    hasHRLetter?: boolean | string
    hasBankStatment?: boolean | string
    refrenceRelation?: string
    refrenceName?: string
    refrenceNumber?: string
    attachments?: { [key: string]: { url: string; documentType: string; key: string }[] }
    anotherIncome?: { incomeType: string; uploadRef: { url: string; key: string }[] }[]
    workAddress?: string
    maritalStatus?: string
  }
  financialMerchantId?: SelectType
  financialProductId?: SelectType
  availability?: string
  productId?: SelectType

  productType?: string
  carBrandId?: SelectType
  carModelId?: SelectType
  carCategoryId?: SelectType
  engineCapacity?: SelectType
  manufactureYear?: Moment | null
  carPrice?: string
  motorType?: string

  timeline?: TimeLineModel[]
  downPayment?: string | number
  financedAmount?: string | number
  tenor?: SelectType
  tenorArray?: SelectType[]
  monthlyIncome?: string | number
  customerCommunication?: string
  createdAt?: string
  lastUpdatedAt?: string
  lastUpdatedByUser?: { name: string }
  status?: FinanceApplicationStatus
  shortId?: number
}
