import { observer } from "mobx-react-lite"
import { FC } from "react"
import {
  DimensionValue,
  Image,
  ImageStyle,
  Platform,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { Button, Icon, Screen, Text } from "../components"
import { type ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"
import { AuthStackScreenProps } from "@/navigators/AuthNavigator"
import AuthHeader from "@/components/ui-group/auth-header/auth-header.ui-group"
const carofiLightLogo = require("assets/images/demo/carofi-light-logo-new.png")

interface LoginScreenProps extends AuthStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const { navigation } = _props
  const {
    themed,
    theme: { colors },
  } = useAppTheme()

  const login = () => {
    navigation.navigate("LoginPhone")
  }
  const loginByBiometric = () => {
    navigation.navigate("BiometricScreen")
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={themed($screenContentContainer)}
      safeAreaEdges={["top"]}
    >
      <AuthHeader />
      <View style={themed($logo)}>
        <Image source={carofiLightLogo} />
      </View>

      <View style={themed($viewActionsContainer)}>
        <Button
          testID="login-phone-button"
          tx="loginScreen:logInByPhone"
          style={themed($logInByPhone)}
          textStyle={themed($logInByPhoneText)}
          preset="outlined"
          onPress={login}
          LeftAccessory={() => <Icon icon="phone" color={colors.palette.neutral100} />}
        />
        <Button
          testID="login-bio-button"
          tx="loginScreen:loginUsingBio"
          style={themed($logInWithBio)}
          textStyle={themed($logInWithBioText)}
          preset="reversed"
          onPress={loginByBiometric}
          LeftAccessory={() => <Icon icon="fingerprint" color={colors.palette.neutral800} />}
        />
        <View style={themed($privacyPolicyContainer)}>
          <Icon icon="lock" size={14} />
          <Text tx="loginScreen:privacyPolicy" style={themed($privacyPolicyText)}></Text>
        </View>
      </View>
    </Screen>
  )
})

const $screenContentContainer: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.lightBlue,
  justifyContent: "flex-end",
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

const $logo: ThemedStyle<ImageStyle> = () => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  width: 94,
})

const $viewActionsContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  display: "flex",
  paddingHorizontal: spacing.md,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: spacing.xxxl,
  marginTop: "auto",
  width: "100%",
})

const $logInByPhone: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  marginBottom: spacing.xs,
  width: "100%",
  textAlign: "left",
  backgroundColor: colors.palette.neutral800,
})

const $logInByPhoneText: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  textAlign: "left",
  width: "100%",
  marginLeft: spacing.sm,
  fontSize: 16,
  color: colors.palette.neutral100,
})
const $logInWithBio: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  marginBottom: spacing.sm,
  width: "100%",
  backgroundColor: colors.palette.neutral100,
})
const $logInWithBioText: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  textAlign: "left",
  width: "100%",
  marginLeft: spacing.xs,
  fontSize: 16,
  color: colors.palette.neutral800,
})

const $privacyPolicyContainer: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  fontSize: spacing.sm,
  color: colors.palette.neutral800,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
})
const $privacyPolicyText: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  fontSize: spacing.sm,
  color: colors.palette.neutral800,
  marginLeft: spacing.xxs,
})
