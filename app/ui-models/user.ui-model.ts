import { UserGender } from "@/enums/user-gender.enum"
import { UserRole } from "@/enums/user-role.enum"

export interface UserUIModel {
  id?: string
  phone?: string
  name?: string
  email?: string
  socialLink?: string
  role?: UserRole[]
  gender?: UserGender
  createdAt?: number
  isPhoneSuspended?: boolean
  isPhoneVerified?: boolean
}
