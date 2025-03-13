import { ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import type { ThemedStyle } from "@/theme"
import { OtpInput, OtpInputRef } from "react-native-otp-entry"
import { useAppTheme } from "@/utils/useAppTheme"
import { useRef, useState } from "react"
import * as Haptics from "expo-haptics"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated"

interface BiometricPasswordProps {
  isFocused?: boolean
  isIncorrect?: boolean
  onPasswordFilled: (password: string) => void
}

export const BiometricPassword = observer(function BiometricPassword({
  isIncorrect = false,
  onPasswordFilled,
}: BiometricPasswordProps) {
  const [isFilled, setIsFilled] = useState(false)
  const otpInputRef = useRef<OtpInputRef>(null)
  const {
    themed,
    theme: { colors },
  } = useAppTheme()
  const offset = useSharedValue(0)
  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }))
  const numberOfDigits = 6
  const offsetValue = 20
  const time = 80

  if (isFilled && isIncorrect) {
    offset.value = withSequence(
      withTiming(-offsetValue, { duration: time / 2 }),
      withRepeat(withTiming(offsetValue, { duration: time }), 4, true),
      withTiming(0, { duration: time / 2 }),
    )
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
  }

  const handleFilledPinStyle = () => {
    return isFilled
      ? isIncorrect
        ? themed($inCorrectPinCodeContainerStyle)
        : themed($correctPinCodeContainerStyle)
      : themed($filledPinCodeContainerStyle)
  }

  return (
    <Animated.View style={style}>
      <OtpInput
        ref={otpInputRef}
        numberOfDigits={numberOfDigits}
        focusColor={colors.palette.neutral500}
        autoFocus={true}
        hideStick={true}
        blurOnFilled={true}
        type="numeric"
        secureTextEntry={true}
        focusStickBlinkingDuration={500}
        onFocus={() => console.log("Focused")}
        onBlur={() => {}}
        onTextChange={(text) => {
          if (!text?.length) {
            setIsFilled(false)
          }
        }}
        onFilled={(password) => {
          setIsFilled(true)
          onPasswordFilled(password)
        }}
        textInputProps={{
          accessibilityLabel: "One-Time Password",
        }}
        theme={{
          containerStyle: themed($containerStyle),
          pinCodeContainerStyle: themed($pinCodeContainerStyle),
          filledPinCodeContainerStyle: handleFilledPinStyle(),
        }}
      />
    </Animated.View>
  )
})

const $containerStyle: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  width: "auto",
  gap: spacing.lg,
})
const $pinCodeContainerStyle: ThemedStyle<ViewStyle> = ({ colors }) => ({
  borderRadius: 9999999,
  height: 18,
  width: 18,
  borderWidth: 2,
  borderColor: colors.palette.neutral500,
})
const $filledPinCodeContainerStyle: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.focus,
  borderColor: colors.palette.focus,
})
const $correctPinCodeContainerStyle: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.success,
  borderColor: colors.palette.success,
})
const $inCorrectPinCodeContainerStyle: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.alert,
  borderColor: colors.palette.alert,
})
