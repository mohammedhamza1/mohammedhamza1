import { TextStyle, ViewStyle } from "react-native"
import { useAppTheme } from "@/utils/useAppTheme"
import type { ThemedStyle } from "@/theme"
import { Card } from "@/components/Card"

export interface AccordionCardProps {
  header?: string
  content?: string
}

export const AccordionCard = (props: AccordionCardProps) => {
  const { header, content = "content" } = props

  const { themed } = useAppTheme()

  return (
    <Card
      heading={header}
      headingStyle={themed($headingStyle)}
      content={content}
      contentStyle={themed($contentStyle)}
      style={themed($card)}
    />
  )
}
const $card: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  width: "100%",
  padding: spacing.md,
  minHeight: "auto",
  borderWidth: 0,
  borderColor: "transparent",
  borderRadius: 12,
  marginBottom: spacing.xs,
  boxShadow: "none",
  shadowColor: "transparent",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0,
  shadowRadius: 0,
  elevation: 0,
})
const $headingStyle: ThemedStyle<TextStyle> = ({ typography, spacing, colors }) => ({
  fontFamily: typography.primary.bold,
  color: colors.palette.primary,
  fontSize: 12,
  fontWeight: 700,
  lineHeight: 15.6,
  marginBottom: spacing.xxs,
})
const $contentStyle: ThemedStyle<TextStyle> = ({ typography, colors }) => ({
  fontFamily: typography.primary.bold,
  color: colors.palette.neutral900,
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 20.8,
  margin: 0,
})
