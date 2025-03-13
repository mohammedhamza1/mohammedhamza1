import { UserRole } from "@/enums/user-role.enum"

export interface UserAuthDataModel {
  data: {
    accessToken: string
    refreshToken: string
    email: string
    tokenExpiresIn: number
    userId: string
    name?: string
    role?: UserRole[]
  }
  message: string
}
