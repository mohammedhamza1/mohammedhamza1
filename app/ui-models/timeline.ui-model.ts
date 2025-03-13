import { FinanceApplicationStatus } from "@/enums/finance-application-status.enum"
import { CustomerDataUiModel } from "./customer-data.ui-model"
import { AutoProductDataUiModel } from "./product.ui-model"

export interface TimeLineUiModel {
  agent: { name: string; organization: string }
  createdAt: string
  status: FinanceApplicationStatus
  comment?: string
  application?: {
    customer?: CustomerDataUiModel
    product?: AutoProductDataUiModel
    downPayment?: number
    financedAmount?: number
    tenor?: string
    monthlyIncome: number
    customerCommunication?: string
  }
}
