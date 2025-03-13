import { TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { useAppTheme } from "@/utils/useAppTheme"
import type { ThemedStyle } from "@/theme"
import { Text } from "@/components/Text"
import { Icon } from "@/components/Icon"
import { translate } from "@/i18n"
import { useMemo } from "react"

export interface TagProps {
  type: "waiting" | "approved" | "rejected" | "required"
}

export const Tag = observer(function Tag(props: TagProps) {
  const { type = "waiting" } = props
  const {
    themed,
    theme: { colors },
  } = useAppTheme()

  const { tagText, tagStyle } = useMemo(() => {
    let tagText = translate("tagComponent:awaiting")
    let tagStyle = themed($waiting)

    switch (type) {
      case "approved":
        tagStyle = themed($approved)
        tagText = translate("tagComponent:approved")
        break
      case "rejected":
        tagStyle = themed($rejected)
        tagText = translate("tagComponent:rejected")
        break
      case "required":
        tagStyle = themed($required)
        tagText = translate("tagComponent:required")
        break
      default:
        tagStyle = themed($waiting)
        tagText = translate("tagComponent:awaiting")
        break
    }

    return { tagText, tagStyle }
  }, [type, themed])

  return (
    <View style={[themed($container), tagStyle]}>
      <Icon icon={type} color={colors.palette.neutral100} size={10} />
      <Text style={themed($text)}>{tagText}</Text>
    </View>
  )
})

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 100,
  paddingHorizontal: spacing.xs,
  paddingVertical: spacing.xxxs,
})

const $waiting: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.neutral500,
})

const $approved: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.success,
})

const $rejected: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.alert,
})

const $required: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.warning,
})

const $text: ThemedStyle<TextStyle> = ({ colors, typography, spacing }) => ({
  fontFamily: typography.fonts.somarSans.normal,
  fontSize: 12,
  fontWeight: 500,
  color: colors.palette.neutral100,
  marginLeft: spacing.xxs,
})
