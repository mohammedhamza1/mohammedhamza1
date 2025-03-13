import { DocumentTypeUIModel } from "./document-types.ui-model"

export interface ApplicationDocumentsDataUIModel extends ApplicationDocsUIModel {
  applicationId?: string | null
  comment?: string
}

export interface ApplicationDocsUIModel {
  recommendationLetter?: DocumentTypeUIModel[]
  purchaseOrder?: DocumentTypeUIModel[]
}
