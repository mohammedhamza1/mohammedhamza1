import { UserAuthUIModel } from "@/ui-models/user-auth.ui-model"
import { save, load, remove } from "./storage"

const USER_DATA_KEY = "userData"

export function saveUserData(value: UserAuthUIModel): boolean {
  return save(USER_DATA_KEY, value)
}

export function loadUserData(): UserAuthUIModel | null {
  return load(USER_DATA_KEY)
}

export function removeUserData(): void {
  remove(USER_DATA_KEY)
}

export function isAuthenticated(): boolean {
  return !!loadUserData()?.accessToken
}
