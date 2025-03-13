/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
import { FC } from "react"
import { observer } from "mobx-react-lite"
import { DimensionValue, Platform, View, ViewStyle, TextStyle } from "react-native"
import { BiometricHeader, Button, Screen } from "@/components"
import { AuthStackScreenProps } from "@/navigators/AuthNavigator"
import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"
import AuthHeader from "@/components/ui-group/auth-header/auth-header.ui-group"

interface BiometricScreenProps extends AuthStackScreenProps<"BiometricScreen"> {}

export const BiometricScreen: FC<BiometricScreenProps> = observer(function BiometricScreen(_props) {
  const { themed } = useAppTheme()
  const { navigation } = _props
  const navigateToVerificationScreen = () => {
    navigation.navigate("BiometricPassword")
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
          testID="code-heading"
          titleTx="biometricScreen:title"
          descriptionTx="biometricScreen:description"
        />

        <View style={themed($viewActionsContainer)}>
          <Button
            testID="set-bio-now-button"
            tx="biometricScreen:activateNow"
            style={[themed($btn), themed($activateNowBtn)]}
            textStyle={[themed($btnText), themed($activateNowBtnText)]}
            preset="outlined"
            onPress={navigateToVerificationScreen}
          />
          <Button
            testID="set-bio-later-button"
            tx="biometricScreen:later"
            style={[themed($btn), themed($laterBtn)]}
            textStyle={[themed($btnText), themed($laterBtnText)]}
            preset="reversed"
          />
        </View>
      </View>
    </Screen>
  )
})

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

const $btn: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginBottom: spacing.xs,
  width: "100%",
})
const $btnText: ThemedStyle<TextStyle> = ({ spacing }) => ({
  textAlign: "center",
  width: "100%",
  marginLeft: spacing.sm,
  fontSize: 16,
})
const $activateNowBtn: ThemedStyle<TextStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.neutral800,
})

const $activateNowBtnText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.palette.neutral100,
})
const $laterBtn: ThemedStyle<TextStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.neutral100,
})
const $laterBtnText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.palette.neutral800,
})
