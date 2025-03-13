import { DocumentTypeDataModel } from "@/data-models/document-type.data-model"

export type DocumentTypeUIModel = {
  dataURL: string
  file: DocumentTypeDataModel
  id: string
  key: string
  documentType?: string
  createdAt?: string
  createdByUser?: { id: string; name: string }
}
