import { ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { useAppTheme } from "@/utils/useAppTheme"
import type { ThemedStyle } from "@/theme"
import { Text } from "@/components/Text"
import { Tag, TagProps } from "../tag/tag.ui-group"
import { Icon } from "@/components/Icon"

export interface TimelineItemProps {
  date: string
  status: TagProps["type"]
  email: string
}

export interface TimelineProps {
  items: TimelineItemProps[]
}

export const Timeline = (props: TimelineProps) => {
  const { items } = props
  const {
    themed,
    theme: { colors },
  } = useAppTheme()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={themed($container)}>
        {items.map((item, index) => (
          <View
            key={index}
            style={[themed($timelineItem), index === items.length - 1 && themed($lastTimelineItem)]}
          >
            <View style={themed($timelinePoint)} />
            <View
              style={[
                themed($timelineLine),
                index === items.length - 1 && themed($lastTimelineItem),
              ]}
            />
            <View style={themed($contentContainer)}>
              <View style={themed($topRow)}>
                <Text text={item?.date} style={themed($date)} />
                <Tag type={item.status}></Tag>
              </View>
              <Text text={item?.email} style={themed($email)}></Text>
              <View style={themed($bottomRow)}>
                <Icon icon="comment" size={15} color={colors.palette.primary} />
                <Text tx="applicationDetailsCardComponent:addComment" style={themed($comment)} />
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  position: "relative",
  padding: spacing.md,
  paddingTop: 0,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 12,
})

const $timelineItem: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  position: "relative",
  marginLeft: spacing.md,
  paddingVertical: spacing.md,
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.neutral400,
})
const $lastTimelineItem: ThemedStyle<ViewStyle> = () => ({
  border: 0,
  borderBottomWidth: 0,
  paddingBottom: 0,
  bottom: 0,
})

const $timelinePoint: ThemedStyle<ViewStyle> = ({ colors }) => ({
  position: "absolute",
  top: 21,
  left: -16,
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: colors.palette.primary,
  borderWidth: 1,
  borderColor: colors.palette.neutral400,
})

const $timelineLine: ThemedStyle<ViewStyle> = ({ colors }) => ({
  position: "absolute",
  left: -12.5,
  top: 29,
  bottom: -25,
  width: 1,
  backgroundColor: colors.palette.neutral400,
})

const $contentContainer: ThemedStyle<ViewStyle> = () => ({
  marginLeft: 8,
})

const $topRow: ThemedStyle<ViewStyle> = () => ({
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
})
const $date: ThemedStyle<TextStyle> = ({ colors, typography }) => ({
  fontFamily: typography.primary.bold,
  color: colors.palette.primary,
  fontSize: 12,
  fontWeight: 700,
  lineHeight: 15.6,
})

const $email: ThemedStyle<TextStyle> = ({ typography, colors }) => ({
  fontFamily: typography.primary.normal,
  fontSize: 12,
  fontWeight: 500,
  color: colors.palette.neutral700,
  lineHeight: 15.6,
})

const $bottomRow: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  backgroundColor: colors.palette.neutral200,
  padding: spacing.xs,
  marginTop: spacing.xs,
})

const $comment: ThemedStyle<TextStyle> = ({ typography, colors, spacing }) => ({
  fontFamily: typography.primary.normal,
  fontSize: 12,
  fontWeight: 500,
  color: colors.palette.neutral700,
  marginLeft: spacing.xs,
})
