import { TextStyle, View, ViewStyle, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { useAppTheme } from "@/utils/useAppTheme"
import type { ThemedStyle } from "@/theme"
import { Text } from "@/components/Text"
import { Icon } from "@/components/Icon"
import { isRTL, translate } from "@/i18n"
const notificationImage = require("assets/images/home/notification.png")

export interface NotificationCardProps {
  count: number
}

export const NotificationCard = observer(function NotificationCard(props: NotificationCardProps) {
  const {
    themed,
    theme: { colors },
  } = useAppTheme()

  const applicationsCount = props.count || 0

  return (
    <View style={themed($viewContainer)}>
      <View style={themed($leftContent)}>
        <Image source={notificationImage} style={themed($image)} />
        <Text style={themed($text)}>
          {translate("notificationCardComponent:text", {
            count: applicationsCount,
          })}
        </Text>
      </View>
      <Icon
        icon={isRTL ? "caretLeft" : "caretRight"}
        style={themed($icon)}
        color={colors.palette.neutral100}
        size={20}
      />
    </View>
  )
})

const $viewContainer: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  backgroundColor: colors.palette.primary,
  padding: spacing.sm,
  borderRadius: 16,
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
})

const $leftContent: ThemedStyle<ViewStyle> = () => ({
  flexDirection: "row",
  alignItems: "center",
})

const $image: ThemedStyle<ImageStyle> = ({ spacing }) => ({
  marginRight: spacing.sm,
})

const $text: ThemedStyle<TextStyle> = ({ colors, typography }) => ({
  fontFamily: typography.fonts.somarSans.bold,
  fontSize: 14,
  fontWeight: 700,
  color: colors.palette.neutral100,
})

const $icon: ThemedStyle<ImageStyle> = ({ spacing }) => ({
  paddingHorizontal: spacing.xs,
})
