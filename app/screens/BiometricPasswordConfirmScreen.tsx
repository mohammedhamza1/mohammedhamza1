import { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { Alert, DimensionValue, Platform, View, ViewStyle } from "react-native"
import { BiometricHeader, BiometricPassword, Screen } from "@/components"
import { AuthStackScreenProps } from "@/navigators/AuthNavigator"
import AuthHeader from "@/components/ui-group/auth-header/auth-header.ui-group"
import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"

interface BiometricPasswordConfirmScreenProps
  extends AuthStackScreenProps<"BiometricPasswordConfirm"> {}

export const BiometricPasswordConfirmScreen: FC<BiometricPasswordConfirmScreenProps> = observer(
  function BiometricPasswordConfirmScreen(_props) {
    const { navigation } = _props
    const { password } = _props.route.params
    const [biometricPassword, setBiometricPassword] = useState("")
    const { themed } = useAppTheme()
    const handlePasswordConfirm = (passwordConfirm: string) => {
      setBiometricPassword(passwordConfirm)
      if (password === passwordConfirm) {
        Alert.alert("Password confirmed")
        navigation.navigate("BiometricPasswordLogin")
      } else {
        console.log("password not confirmed")
      }
    }
    return (
      <Screen
        preset="auto"
        safeAreaEdges={["top"]}
        contentContainerStyle={themed($screenContentContainer)}
      >
        <AuthHeader config={{ showLogo: true }} />
        <View style={themed($viewContainer)}>
          <BiometricHeader
            titleTx="biometricPasswordConfirmScreen:title"
            descriptionTx="biometricPasswordConfirmScreen:description"
            testID="biometric-password-confirm"
          />

          <BiometricPassword
            isIncorrect={biometricPassword !== password}
            onPasswordFilled={(password) => {
              handlePasswordConfirm(password)
            }}
          ></BiometricPassword>
        </View>
      </Screen>
    )
  },
)

const $screenContentContainer: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.lightBlue,
  alignItems: "center",
  ...(Platform.OS === "web"
    ? {
        display: "flex",
        flex: undefined,
        height: `100vh` as DimensionValue,
      }
    : { flex: 1 }),
  width: "100%",
})
const $viewContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  paddingTop: spacing.md,
  paddingHorizontal: spacing.md,
  flex: 1,
  alignItems: "center",
})
