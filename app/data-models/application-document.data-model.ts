import { DocumentTypeDataModel } from "./document-type.data-model"

export interface ApplicationDocumentDataModel extends ApplicationDocsModel {
  applicationId: string
}

export interface ApplicationDocsModel {
  recommendationLetter?: DocumentTypeDataModel[]
  purchaseOrder?: DocumentTypeDataModel[]
}
