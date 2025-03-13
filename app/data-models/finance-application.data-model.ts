import { LanguageField } from "@/types/language-field.type"
import { CustomerDataModel } from "./customer.data-model"
import { AutoProductDataModel } from "./auto-product.data-model"
import { ApplicationTimeLineDataModel } from "./application-timeline.data-model"
import { FinanceApplicationStatus } from "@/enums/finance-application-status.enum"

export interface FinanceApplicationDataModel {
  id?: string
  agent?: { name: string; organization: string }
  merchantAgent?: { id: string; name: string }
  userId?: string
  customer?: CustomerDataModel
  user?: { name: string }
  financialMerchantId?: string
  financialMerchant?: { companyName: LanguageField; name: LanguageField; url: string }
  financialProductId?: string
  financialProduct?: { productName: LanguageField }
  availability?: string
  productId?: string
  product?: AutoProductDataModel
  timeline?: ApplicationTimeLineDataModel[]
  downPayment?: string | number
  financedAmount?: string | number
  monthlyIncome?: number
  customerCommunication?: string
  tenor?: number
  createdAt?: string
  lastUpdatedAt?: string
  lastUpdatedByUser?: { name: string }
  status?: FinanceApplicationStatus
  shortId?: number
}
