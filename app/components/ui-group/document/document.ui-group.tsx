import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { useAppTheme } from "@/utils/useAppTheme"
import type { ThemedStyle } from "@/theme"
import { Text } from "@/components/Text"
import { DocumentTypeUIModel } from "@/ui-models/document-types.ui-model"
import { Icon } from "@/components/Icon"

export interface DocumentProps extends DocumentTypeUIModel {}

/**
 * Describe your component here
 */

export const Document = observer(function Document(props: DocumentProps) {
  const { documentType } = props
  const {
    themed,
    theme: { colors },
  } = useAppTheme()

  return (
    <View style={themed($viewContainer)}>
      <View style={themed($infoContainer)}>
        <Image source={require("assets/icons/image.png")} style={themed($documentIcon)} />
        <Text style={themed($name)}>{documentType}</Text>
      </View>
      <View style={themed($actionsContainer)}>
        <View style={themed($action)}>
          <Icon icon="view" color={colors.palette.neutral900} size={16} />
        </View>
        <View style={themed($action)}>
          <Icon icon="download" color={colors.palette.neutral900} size={16} />
        </View>
      </View>
    </View>
  )
})

const $viewContainer: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  marginBottom: spacing.xs,
  padding: spacing.xs,
  width: "100%",
  backgroundColor: colors.palette.neutral100,
  borderRadius: 12,
})
const $infoContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  marginBottom: spacing.xs,
})
const $name: ThemedStyle<TextStyle> = ({ colors, typography }) => ({
  fontFamily: typography.fonts.somarSans.bold,
  fontSize: 12,
  fontWeight: 700,
  color: colors.palette.neutral900,
})
const $documentIcon: ThemedStyle<ImageStyle> = ({ spacing }) => ({
  marginRight: spacing.xs,
})
const $actionsContainer: ThemedStyle<ViewStyle> = () => ({
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
})
const $action: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.lightBlue,
  height: 32,
  width: "50%",
  borderRadius: 260,
  alignItems: "center",
  justifyContent: "center",
})
