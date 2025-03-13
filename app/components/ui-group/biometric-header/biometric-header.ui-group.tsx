import { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Text } from "@/components"
import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"
import { observer } from "mobx-react-lite"
import { TxKeyPath } from "@/i18n"

const biometricImage = require("assets/images/biometric/biometric.png")

interface BiometricHeaderProps {
  testID?: string
  titleTx: TxKeyPath
  descriptionTx?: TxKeyPath
}

export const BiometricHeader: FC<BiometricHeaderProps> = observer(
  ({ testID, titleTx, descriptionTx }: BiometricHeaderProps) => {
    const { themed } = useAppTheme()

    return (
      <View style={themed($viewContainer)}>
        <Image source={biometricImage} style={themed($image)} />
        <Text testID={`${testID}-heading`} tx={titleTx} style={themed($title)} />
        <Text testID={`${testID}-description`} tx={descriptionTx} style={themed($description)} />
      </View>
    )
  },
)

const $viewContainer: ThemedStyle<ViewStyle> = () => ({
  alignItems: "center",
})

const $image: ThemedStyle<ImageStyle> = ({ spacing }) => ({
  marginBottom: spacing.md,
})

const $title: ThemedStyle<TextStyle> = ({ typography, spacing }) => ({
  fontFamily: typography.fonts.somarSans.bold,
  fontSize: 24,
  fontWeight: 700,
  marginBottom: spacing.xs,
  textAlign: "center",
  lineHeight: 31, // TODO: Testing somar font
})

const $description: ThemedStyle<TextStyle> = ({ typography, spacing }) => ({
  fontFamily: typography.fonts.somarSans.normal,
  fontSize: 14,
  fontWeight: 500,
  marginBottom: spacing.xxl,
  textAlign: "center",
})
