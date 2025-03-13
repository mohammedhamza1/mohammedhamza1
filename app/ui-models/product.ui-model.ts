import { LanguageFieldUiModel } from "./language-field.ui-model"

export interface AutoProductDataUiModel {
  productType?: string
  carBrandId?: string
  carBrand?: {
    name: LanguageFieldUiModel
    url: string
  }
  carModelId?: string
  carModel?: LanguageFieldUiModel | { name: LanguageFieldUiModel }
  carCategoryId?: string
  carCategory?: LanguageFieldUiModel | { name: LanguageFieldUiModel }
  productImages?: { url: string }[]
  engineCapacity?: number
  manufactureYear?: number
  carPrice?: number
  motorType?: LanguageFieldUiModel
}
