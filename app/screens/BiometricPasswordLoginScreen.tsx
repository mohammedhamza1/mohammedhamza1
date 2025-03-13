import { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { DimensionValue, ImageStyle, Platform, View, ViewStyle } from "react-native"
import { BiometricHeader, BiometricPassword, Icon, Screen, Text } from "@/components"
import { AuthStackScreenProps } from "@/navigators/AuthNavigator"
import AuthHeader from "@/components/ui-group/auth-header/auth-header.ui-group"
import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"
import { isRTL } from "@/i18n"

interface BiometricPasswordLoginScreenProps
  extends AuthStackScreenProps<"BiometricPasswordLogin"> {}

export const BiometricPasswordLoginScreen: FC<BiometricPasswordLoginScreenProps> = observer(
  function BiometricPasswordLoginScreen(_props) {
    const [biometricPassword, setBiometricPassword] = useState("")
    const {
      themed,
      theme: { colors },
    } = useAppTheme()

    const MOCK_PASSWORD = "111111" // TODO: will be handled by the backend

    return (
      <Screen
        preset="auto"
        safeAreaEdges={["top"]}
        contentContainerStyle={themed($screenContentContainer)}
      >
        <AuthHeader config={{ showLogo: true }} />
        <View style={themed($viewContainer)}>
          <BiometricHeader
            titleTx="biometricPasswordLoginScreen:title"
            descriptionTx="biometricPasswordLoginScreen:description"
            testID="biometric-password-login"
          />

          <BiometricPassword
            isIncorrect={biometricPassword !== MOCK_PASSWORD}
            onPasswordFilled={(password) => {
              setBiometricPassword(password)
            }}
          ></BiometricPassword>

          <View style={themed($forgetPasswordContainer)}>
            <Text
              tx="biometricPasswordLoginScreen:forgotPassword"
              preset="bold"
              style={themed($callUsText)}
            />
            <Icon
              icon="arrowLeft"
              color={colors.palette.neutral900}
              style={themed($rotateIcon)}
              size={24}
            />
          </View>
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

const $forgetPasswordContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.xxxl,
  marginBottom: spacing.xl,
  width: "100%",
  flexDirection: "row",
  textAlign: "center",
})

const $callUsText: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginLeft: spacing.xs,
  fontWeight: "bold",
  flexDirection: "row",
  alignItems: "center",
})
const $rotateIcon: ThemedStyle<ImageStyle> = ({ spacing }) => ({
  marginLeft: spacing.xxs,
  transform: isRTL ? [] : [{ rotate: "180deg" }],
})
