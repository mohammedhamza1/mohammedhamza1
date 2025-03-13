import { FinanceApplicationStatus } from "@/enums/finance-application-status.enum"
import { AutoProductDataModel } from "./auto-product.data-model"
import { CustomerDataModel } from "./customer.data-model"

export interface ApplicationTimeLineDataModel {
  agent: { name: string; organization: string }
  createdAt: string
  status: FinanceApplicationStatus
  comment?: string
  application?: {
    customer?: CustomerDataModel
    product?: AutoProductDataModel
    downPayment?: number
    financedAmount?: number
    tenor?: string
    monthlyIncome: number
    customerCommunication?: string
  }
}
