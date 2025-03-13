import { UserRole } from "@/enums/user-role.enum"

export interface UserAuthUIModel {
  email: string
  accessToken: string
  refreshToken: string
  tokenExpiresIn: number
  name: string
  userId: string
  role?: UserRole[]
  permissions?: string[]
}
