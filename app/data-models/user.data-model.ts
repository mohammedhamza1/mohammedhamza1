import { UserGender } from "@/enums/user-gender.enum"
import { UserRole } from "@/enums/user-role.enum"

export interface UserDataModel {
  id?: string
  email?: string
  password?: string
  userId: string
  role?: UserRole[]
  phone?: string
  name?: string
  socialLink?: string
  gender?: UserGender
  createdAt?: number
  isPhoneSuspended?: boolean
  isPhoneVerified?: boolean
}

export interface AddUserDataModel
  extends Pick<Required<UserDataModel>, "name" | "email" | "phone"> {
  userId?: string
}
