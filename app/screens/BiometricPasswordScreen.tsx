import { FC } from "react"
import { observer } from "mobx-react-lite"
import { DimensionValue, Platform, View, ViewStyle } from "react-native"
import { BiometricHeader, BiometricPassword, Screen } from "@/components"
import { AuthStackScreenProps } from "@/navigators/AuthNavigator"
import AuthHeader from "@/components/ui-group/auth-header/auth-header.ui-group"
import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"

interface BiometricPasswordScreenProps extends AuthStackScreenProps<"BiometricPassword"> {}

export const BiometricPasswordScreen: FC<BiometricPasswordScreenProps> = observer(
  function BiometricPasswordScreen(_props) {
    const { navigation } = _props
    const { themed } = useAppTheme()
    return (
      <Screen
        preset="auto"
        safeAreaEdges={["top"]}
        contentContainerStyle={themed($screenContentContainer)}
      >
        <AuthHeader config={{ showLogo: true }} />
        <View style={themed($viewContainer)}>
          <BiometricHeader
            testID="biometric-header"
            titleTx="biometricPasswordScreen:title"
            descriptionTx="biometricPasswordScreen:description"
          />
          <BiometricPassword
            onPasswordFilled={(password) => {
              navigation.navigate("BiometricPasswordConfirm", {
                password,
              })
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
