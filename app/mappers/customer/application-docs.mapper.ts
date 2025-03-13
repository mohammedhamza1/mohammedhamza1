import { ApplicationDocumentDataModel } from "@/data-models/application-document.data-model"

import {
  ApplicationDocsUIModel,
  ApplicationDocumentsDataUIModel,
} from "@/ui-models/application-document.ui-model"
import { DocumentTypeUIModel } from "@/ui-models/document-types.ui-model"

function mapToModel(docs: ApplicationDocumentsDataUIModel): ApplicationDocumentDataModel {
  const applicationDocs = {
    recommendationLetter: "recommendationLetter",
    purchaseOrder: "purchaseOrder",
  }

  const mapArrayProperty = (property: keyof ApplicationDocsUIModel) => {
    return docs[property]?.map((file) => file.file) ?? []
  }

  const result: ApplicationDocumentDataModel = {
    applicationId: docs.applicationId ?? "",
  }

  for (const [dataProperty, uiProperty] of Object.entries(applicationDocs) as [
    keyof ApplicationDocsUIModel,
    keyof ApplicationDocsUIModel,
  ][]) {
    if (docs[dataProperty]?.length) {
      result[uiProperty] = mapArrayProperty(dataProperty)
    }
  }

  return result
}

function mapToUI(docs: ApplicationDocumentDataModel): ApplicationDocumentsDataUIModel {
  const result: ApplicationDocsUIModel = {}
  Object.keys(docs).forEach((key) => {
    const docArray = docs[key as keyof ApplicationDocsUIModel]
    if (docArray && docArray.length) {
      result[key as keyof ApplicationDocsUIModel] = docArray.map((doc) => ({
        dataURL: doc.url,
        file: { name: doc.key?.split("/")[1] },
        id: doc.id,
        key: doc.key,
        createdAt: doc.createdAt,
        createdByUser: doc.createdByUser,
      })) as unknown as DocumentTypeUIModel[]
    }
  })
  return result
}

const applicationDocsMapper = { mapToModel, mapToUI }
export default applicationDocsMapper
