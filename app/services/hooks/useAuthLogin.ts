import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../data/user-data/auth.data"

export default function useAuthLogin() {
  return useMutation({
    mutationFn: async ({
      email,
      password,
      containerName,
    }: {
      email: string
      password: string
      containerName: string
    }) => {
      return await loginUser(email, password, containerName)
    },
  })
}
