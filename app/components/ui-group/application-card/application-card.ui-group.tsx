import { TextStyle, View, ViewStyle } from "react-native"
import { useAppTheme } from "@/utils/useAppTheme"
import type { ThemedStyle } from "@/theme"
import { Text } from "@/components/Text"
import { Tag, TagProps } from "../tag/tag.ui-group"
import { translate } from "@/i18n"

export interface ApplicationCardProps {
  status: TagProps["type"]
  id: number
  name: string
  car: string
  bankDetails: string
  updatedAt: string
}

/**
 * Describe your component here
 */

export const ApplicationCard = (props: ApplicationCardProps) => {
  const { themed } = useAppTheme()
  const { status, id = 0, name, car, bankDetails, updatedAt } = props

  return (
    <View style={themed($viewContainer)}>
      <View style={themed($topRow)}>
        <Text style={themed($id)}>{`#${id}`}</Text>
        <Tag type={status}></Tag>
      </View>
      <View style={themed($middleRow)}>
        <Text style={themed($name)}>{name}</Text>
        <Text style={themed($car)}>{car}</Text>
      </View>
      <View style={themed($bottomRow)}>
        <View style={themed($bankDetailsView)}>
          <Text style={themed($bankText)}>{bankDetails}</Text>
        </View>
        <Text style={themed($latestUpdate)}>
          {translate("applicationCardComponent:updated", {
            date: updatedAt,
          })}
        </Text>
      </View>
    </View>
  )
}

const $viewContainer: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  width: "100%",
  padding: spacing.md,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 12,
})
const $topRow: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: spacing.sm,
})
const $id: ThemedStyle<TextStyle> = ({ colors, typography }) => ({
  fontFamily: typography.primary.medium,
  color: colors.palette.primary,
  fontSize: 16,
  fontWeight: 600,
  letterSpacing: 0.15,
})

const $middleRow: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginBottom: spacing.sm,
})

const $name: ThemedStyle<TextStyle> = ({ typography }) => ({
  fontFamily: typography.primary.bold,
  fontSize: 16,
  fontWeight: 600,
})

const $car: ThemedStyle<TextStyle> = ({ typography, colors }) => ({
  fontFamily: typography.primary.normal,
  fontSize: 12,
  fontWeight: 500,
  color: colors.palette.neutral700,
})

const $bottomRow: ThemedStyle<ViewStyle> = () => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
})
const $bankDetailsView: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  backgroundColor: colors.palette.lightPrimary,
  paddingVertical: spacing.xxxs,
  paddingHorizontal: spacing.sm,
})

const $bankText: ThemedStyle<TextStyle> = ({ typography }) => ({
  fontFamily: typography.primary.normal,
  fontSize: 12,
  fontWeight: 500,
})
const $latestUpdate: ThemedStyle<TextStyle> = ({ typography, colors }) => ({
  fontFamily: typography.primary.normal,
  fontSize: 12,
  fontWeight: 500,
  color: colors.palette.neutral700,
})
