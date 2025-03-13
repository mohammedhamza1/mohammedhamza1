import { UserDataModel } from "@/data-models/user.data-model"
import { UserUIModel } from "../../ui-models/user.ui-model"

function mapToUI(userData: UserDataModel): UserUIModel {
  return {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    gender: userData.gender,
    phone: userData.phone,
    role: userData.role,
    socialLink: userData.socialLink,
    createdAt: userData.createdAt,
    isPhoneSuspended: userData.isPhoneSuspended,
    isPhoneVerified: userData.isPhoneVerified,
  }
}

function mapToModel(userData: Partial<UserUIModel>): UserDataModel {
  return {
    userId: userData.id || "",
    name: userData.name,
    email: userData.email,
    gender: userData.gender,
    phone: userData.phone,
    role: userData.role,
    socialLink: userData.socialLink,
    createdAt: userData.createdAt,
  }
}

function mapToUIList(usersList: UserDataModel[]): UserUIModel[] {
  return usersList.map(mapToUI)
}

export default {
  mapToUI,
  mapToModel,
  mapToUIList,
}
