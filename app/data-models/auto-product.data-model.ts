import { LanguageField } from "@/types/language-field.type"

export interface AutoProductDataModel {
  productType?: string
  carBrandId?: string
  carBrand?: {
    name: LanguageField
    url: string
  }
  carModelId?: string
  carModel?: LanguageField | { name: LanguageField }
  carCategoryId?: string
  carCategory?: LanguageField | { name: LanguageField }
  productImages?: { url: string }[]
  engineCapacity?: number
  manufactureYear?: number
  carPrice?: number
  motorType?: LanguageField
}
