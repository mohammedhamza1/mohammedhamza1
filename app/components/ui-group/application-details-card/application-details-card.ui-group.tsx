import { ImageStyle, TextStyle, View, ViewStyle, TouchableOpacity } from "react-native"
import { useAppTheme } from "@/utils/useAppTheme"
import { colors, type ThemedStyle } from "@/theme"
import { Text } from "@/components/Text"
import { Tag, TagProps } from "../tag/tag.ui-group"
import { isRTL, translate } from "@/i18n"
import { Icon } from "@/components/Icon"

export interface ApplicationDetailsCardProps {
  status?: TagProps["type"]
  id?: number
  name?: string
  car?: string
  bankDetails?: string
  updatedAt?: string
  onUpdatesPress: () => void
}

/**
 * Describe your component here
 */

export const ApplicationDetailsCard = (props: ApplicationDetailsCardProps) => {
  const { themed } = useAppTheme()
  const { id = 23, onUpdatesPress } = props

  return (
    <View style={themed($viewContainer)}>
      <View style={themed($viewInnerContainer)}>
        <View style={themed($topRow)}>
          <Text tx="applicationDetailsCardComponent:applicationNo" style={themed($title)} />
          <Tag type={"approved"}></Tag>
        </View>
        <Text style={themed($id)}>{`#${id}`}</Text>
        <Text style={[themed($applicationDate), themed($marginBottom)]}>
          {translate("applicationDetailsCardComponent:applicationDate")}
          <Text style={themed($date)}>{"25 ديسمبر 2024"}</Text>
        </Text>
        <View style={themed($bottomRow)}>
          <Icon icon="comment" size={15} color={colors.palette.primary} />
          <Text tx="applicationDetailsCardComponent:addComment" style={themed($comment)} />
        </View>
      </View>
      <View style={themed($latestUpdate)}>
        <Text style={themed($applicationDate)}>
          <Icon icon="time" size={15} style={themed($timeIcon)} color={colors.palette.neutral700} />
          {translate("applicationDetailsCardComponent:applicationDate")}
          <Text style={themed($date)}>{"25 ديسمبر 2024"}</Text>
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onUpdatesPress}>
          <Text style={themed($allUpdates)}>
            {translate("applicationDetailsCardComponent:allUpdates")}
            <Icon
              icon="arrowLeft"
              color={colors.palette.neutral900}
              style={themed($rotateIcon)}
              size={24}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const $viewContainer: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  width: "100%",
  padding: spacing.xs,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 12,
})
const $viewInnerContainer: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  width: "100%",
  padding: spacing.md,
  backgroundColor: colors.palette.neutral300,
})
const $topRow: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: spacing.xxs,
})
const $title: ThemedStyle<TextStyle> = ({ colors, typography }) => ({
  fontFamily: typography.primary.medium,
  color: colors.palette.primary,
  fontSize: 16,
  fontWeight: 600,
  letterSpacing: 0.15,
})
const $id: ThemedStyle<TextStyle> = ({ colors, typography, spacing }) => ({
  fontFamily: typography.primary.bold,
  color: colors.palette.neutral900,
  fontSize: 28,
  fontWeight: 600,
  lineHeight: 36,
  marginBottom: spacing.xs,
})

const $applicationDate: ThemedStyle<TextStyle> = ({ typography, colors }) => ({
  fontFamily: typography.primary.normal,
  fontSize: 12,
  fontWeight: 500,
  color: colors.palette.neutral700,
})

const $marginBottom: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginBottom: spacing.xs,
})

const $date: ThemedStyle<TextStyle> = ({ typography, colors }) => ({
  fontFamily: typography.primary.bold,
  fontSize: 12,
  fontWeight: 700,
  color: colors.palette.neutral700,
})

const $bottomRow: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  backgroundColor: colors.palette.neutral100,
  padding: spacing.xs,
})

const $comment: ThemedStyle<TextStyle> = ({ typography, colors, spacing }) => ({
  fontFamily: typography.primary.normal,
  fontSize: 12,
  fontWeight: 500,
  color: colors.palette.neutral700,
  marginLeft: spacing.xs,
})

const $latestUpdate: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginTop: spacing.md,
})
const $timeIcon: ThemedStyle<ImageStyle> = ({ spacing }) => ({
  marginRight: spacing.xs,
})

const $allUpdates: ThemedStyle<TextStyle> = ({ typography, colors }) => ({
  fontFamily: typography.primary.bold,
  fontSize: 12,
  fontWeight: 700,
  color: colors.palette.neutral900,
  textDecorationLine: "underline",
  textAlign: "center",
})

const $rotateIcon: ThemedStyle<ImageStyle> = ({ spacing }) => ({
  marginLeft: spacing.xxs,
  transform: isRTL ? [] : [{ rotate: "180deg" }],
})
