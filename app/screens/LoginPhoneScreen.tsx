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
import { useStores } from "../models"
import type { ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"
import { AuthStackScreenProps } from "@/navigators/AuthNavigator"
import AuthHeader from "@/components/ui-group/auth-header/auth-header.ui-group"
import { isRTL, translate } from "@/i18n"
import { isErrorInfo } from "@/interfaces/error-info.interface"
import useAuthLogin from "@/services/hooks/useAuthLogin"
import { saveUserData } from "@/utils/storage/userData.storage"

interface LoginPhoneScreenProps extends AuthStackScreenProps<"LoginPhone"> {}

export const LoginPhoneScreen: FC<LoginPhoneScreenProps> = observer(
  function LoginPhoneScreen(_props) {
    const { navigation } = _props
    const headerConfig = useMemo(() => ({ showLogo: true }), [])
    const authPhoneInput = useRef<TextInput>(null)
    const authPasswordInput = useRef<TextInput>(null)

    const [authPassword, setAuthPassword] = useState("")
    const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
    const [isDisabled, setIsDisabled] = useState(true)
    const [isFilled, setIsFilled] = useState(false)
    const [errors, setErrors] = useState<{ authPhone?: string; authPassword?: string }>({})
    const {
      authenticationStore: { authPhone, setAuthPhone, validationError },
    } = useStores() // TODO: Replace with react query

    const {
      themed,
      theme: { colors },
    } = useAppTheme()

    const loginUser = useAuthLogin()

    useEffect(() => {
      authPhoneInput.current?.focus()
    }, [])

    useEffect(() => {
      setIsFilled(!validationError)
      setErrors({
        authPhone: validationError,
        authPassword: authPassword.length < 6 ? translate("errors:invalidPassword") : "",
      })
      setIsDisabled(!!errors.authPassword || !!errors.authPhone)
    }, [validationError, authPassword, authPhone, errors.authPassword, errors.authPhone])

    const navigateToVerificationScreen = () => {
      navigation.navigate("PhoneVerification")
    }
    function login() {
      if (loginUser.isPending) return
      if (errors.authPhone || errors.authPassword) return

      loginUser.mutate(
        {
          email: "muhammed7amza@gmail.com",
          password: "hamza@carofi123",
          containerName: "auth",
        },
        {
          onSuccess: (response) => {
            if (response) {
              if (isErrorInfo(response)) {
                console.log("error", response)
              } else {
                saveUserData(response)
                navigateToVerificationScreen()
                setAuthPassword("")
                setAuthPhone("")
              }
            }
          },
          onError: (error) => {
            console.log("error", error)
          },
        },
      )
    }

    const PasswordRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
      () =>
        function PasswordRightAccessory(props: TextFieldAccessoryProps) {
          return (
            <Icon
              icon={isAuthPasswordHidden ? "hidden" : "view"}
              color={colors.palette.neutral800}
              containerStyle={props.style}
              size={20}
              onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
            />
          )
        },
      [isAuthPasswordHidden, colors.palette.neutral800],
    )

    const PhoneRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
      () =>
        function PhoneRightAccessory(props: TextFieldAccessoryProps) {
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
            testID="login-heading"
            tx="loginPhoneScreen:title"
            preset="heading"
            style={themed($title)}
          />

          <TextField
            ref={authPhoneInput}
            value={authPhone}
            onChangeText={setAuthPhone}
            containerStyle={themed($textFieldContainer)}
            autoComplete="cc-number"
            autoCorrect={false}
            keyboardType="number-pad"
            labelTx="loginPhoneScreen:phoneFieldLabel"
            placeholderTx="loginPhoneScreen:phoneFieldPlaceholder"
            helper={loginUser.isPending ? errors.authPhone : undefined}
            status={
              loginUser.isPending && errors.authPhone ? "error" : isFilled ? "filled" : "default"
            }
            maxLength={11}
            RightAccessory={isFilled ? PhoneRightAccessory : undefined}
          />

          <TextField
            ref={authPasswordInput}
            value={authPassword}
            onChangeText={setAuthPassword}
            containerStyle={themed($textFieldContainer)}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            labelTx="loginPhoneScreen:passwordFieldLabel"
            placeholderTx="loginPhoneScreen:passwordFieldPlaceholder"
            helper={loginUser.isPending ? errors.authPassword : undefined}
            status={loginUser.isPending && errors.authPassword ? "error" : "default"}
            RightAccessory={PasswordRightAccessory}
          />

          <View style={themed($forgetPasswordContainer)}>
            <Text tx="loginPhoneScreen:cantLogin" preset="default" />
            <View style={themed($callUsText)}>
              <Text tx="loginPhoneScreen:callUs" preset="bold" style={themed($callUsText)} />
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
            disabled={isDisabled}
            disabledStyle={themed($disabledBtn)}
            onPress={login}
          >
            <Icon
              icon={loginUser.isPending ? "loading" : "arrowLeft"}
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
  marginBottom: spacing.xl,
})

const $forgetPasswordContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
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
