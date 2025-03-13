import { FinanceApplicationStatus } from "@/enums/finance-application-status.enum"

export interface FinanceApplicationStatusDataModel {
  status: FinanceApplicationStatus
  comment?: string
}
