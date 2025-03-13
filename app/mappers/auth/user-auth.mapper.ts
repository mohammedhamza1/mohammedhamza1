import { UserAuthDataModel } from "@/data-models/user-auth.data-model"
import { UserAuthUIModel } from "@/ui-models/user-auth.ui-model"

function mapToUI(userData: UserAuthDataModel): UserAuthUIModel {
  return {
    accessToken: userData.data.accessToken,
    refreshToken: userData.data.refreshToken,
    tokenExpiresIn: userData.data.tokenExpiresIn,
    email: userData.data.email,
    userId: userData.data.userId,
    role: userData.data.role,
    name: userData.data.name || "",
  }
}

export default {
  mapToUI,
}
