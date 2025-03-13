import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),
    authPhone: "",
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    },
    get validationError() {
      if (store.authPhone.length === 0) return "can't be blank"
      if (store.authPhone.length < 11 || store.authPhone.length > 11) return "must be 11 characters"
      if (!/^01[0125]\d{8}$/.test(store.authPhone)) return "must be a valid phone number"
      return ""
    },
  }))
  .actions((store) => ({
    setAuthToken(value?: string) {
      store.authToken = value
    },
    setAuthPhone(value: string) {
      store.authPhone = value.replace(/ /g, "")
    },
    logout() {
      store.authToken = undefined
      store.authPhone = ""
    },
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}
