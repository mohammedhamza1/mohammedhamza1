import { observer } from "mobx-react-lite"
import { ComponentType, FC, useEffect, useMemo, useRef, useState } from "react"
import {
  DimensionValue,
  ImageStyle,
  Platform,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import type { ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"
import { AuthStackScreenProps } from "@/navigators/AuthNavigator"
import AuthHeader from "@/components/ui-group/auth-header/auth-header.ui-group"
import { isRTL, translate } from "@/i18n"

interface PhoneVerificationScreenProps extends AuthStackScreenProps<"PhoneVerification"> {}

export const PhoneVerificationScreen: FC<PhoneVerificationScreenProps> = observer(
  function LoginPhoneScreen(_props) {
    const headerConfig = useMemo(() => ({ showLogo: true }), [])
    const authCodeInput = useRef<TextInput>(null)
    const [authCode, setAuthCode] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const [isFilled, setIsFilled] = useState(false)
    const [errors, setErrors] = useState<{ authCode?: string }>({})

    const {
      themed,
      theme: { colors },
    } = useAppTheme()

    useEffect(() => {
      authCodeInput.current?.focus()
    }, [])

    useEffect(() => {
      setIsFilled(!errors.authCode)
      setErrors({
        authCode: authCode.length < 6 ? translate("errors:invalidPhoneVerificationCode") : "",
      })
      setIsDisabled(!!errors.authCode)
    }, [errors.authCode, authCode])

    function login() {
      setIsSubmitted(true)

      if (errors.authCode) return
      setIsSubmitted(false)
      setAuthCode("")
    }

    const CodeRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
      () =>
        function CodeRightAccessory(props: TextFieldAccessoryProps) {
          return (
            <Icon
              icon="check"
              color={colors.palette.success}
              containerStyle={props.style}
              size={24}
            />
          )
        },
      [colors.palette.success],
    )

    return (
      <Screen
        preset="auto"
        contentContainerStyle={themed($screenContentContainer)}
        safeAreaEdges={["top"]}
      >
        <AuthHeader config={headerConfig} />
        <View style={themed($viewContainer)}>
          <Text
            testID="code-heading"
            tx="phoneVerificationScreen:title"
            preset="heading"
            style={themed($title)}
          />
          <Text
            testID="code-description"
            tx="phoneVerificationScreen:description"
            preset="subheading"
            style={themed($description)}
          />

          <TextField
            ref={authCodeInput}
            value={authCode}
            onChangeText={setAuthCode}
            containerStyle={themed($textFieldContainer)}
            autoComplete="cc-number"
            autoCorrect={false}
            keyboardType="number-pad"
            labelTx="phoneVerificationScreen:codeFieldLabel"
            placeholderTx="phoneVerificationScreen:codeFieldPlaceholder"
            maxLength={6}
            helper={isSubmitted ? errors.authCode : undefined}
            status={isSubmitted && errors.authCode ? "error" : isFilled ? "filled" : "default"}
            RightAccessory={isFilled ? CodeRightAccessory : undefined}
          />

          <View style={themed($codeFailedContainer)}>
            <Text tx="phoneVerificationScreen:codeFailed" preset="default" />
            <View style={themed($callUsText)}>
              <Text tx="phoneVerificationScreen:resend" preset="bold" style={themed($callUsText)} />
              <Icon
                icon="arrowLeft"
                color={colors.palette.neutral900}
                style={themed($rotateIcon)}
                size={24}
              />
            </View>
          </View>

          <Button
            testID="login-phone-submit"
            style={themed($logInWithBio)}
            textStyle={themed($logInWithBioText)}
            preset="reversed"
            disabled={isDisabled || isSubmitted}
            disabledStyle={themed($disabledBtn)}
            onPress={login}
          >
            <Icon
              icon={isSubmitted ? "loading" : "arrowLeft"}
              style={themed($rotateIcon)}
              color={isDisabled ? colors.palette.neutral500 : colors.palette.neutral100}
              size={24}
            />
          </Button>
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
  paddingHorizontal: spacing.md,
  marginTop: spacing.lg,
  width: "100%",
})

const $title: ThemedStyle<TextStyle> = ({ typography, spacing }) => ({
  fontFamily: typography.fonts.somarSans.bold,
  fontSize: 24,
  fontWeight: 700,
  marginBottom: spacing.xs,
})

const $description: ThemedStyle<TextStyle> = ({ typography, spacing }) => ({
  fontFamily: typography.fonts.somarSans.normal,
  fontSize: 14,
  fontWeight: 500,
  marginBottom: spacing.xl,
})

const $codeFailedContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.md,
  marginBottom: spacing.xl,
  width: "100%",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
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
const $logInWithBio: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  marginBottom: spacing.sm,
  width: "100%",
  backgroundColor: colors.palette.neutral900,
})
const $logInWithBioText: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  textAlign: "center",
  marginLeft: spacing.xs,
  fontSize: 16,
  color: colors.palette.neutral100,
})

const $disabledBtn: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.neutral400,
})

const $textFieldContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginBottom: spacing.md,
})
