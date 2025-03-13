import { ReactNode, useState } from "react"
import {
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
  LayoutAnimation,
  ImageStyle,
} from "react-native"
import { useAppTheme } from "@/utils/useAppTheme"
import type { ThemedStyle } from "@/theme"
import { Text } from "@/components/Text"
import { Icon } from "@/components/Icon"

export interface AccordionProps {
  title: string
  children: ReactNode
  initiallyExpanded?: boolean
  bottomSeparator?: boolean
}

export const Accordion = (props: AccordionProps) => {
  const { title, children, initiallyExpanded = false, bottomSeparator = true } = props

  const [isExpanded, setIsExpanded] = useState(initiallyExpanded)
  const {
    themed,
    theme: { colors },
  } = useAppTheme()

  const toggleExpand = () => {
    const animationConfig = { ...LayoutAnimation.Presets.easeInEaseOut, duration: 200 }
    LayoutAnimation.configureNext(animationConfig)
    setIsExpanded(!isExpanded)
  }

  const $containerStyles = [$container, bottomSeparator && $separatorBottom]

  return (
    <View style={themed($containerStyles)}>
      <TouchableOpacity onPress={toggleExpand} style={themed($header)} activeOpacity={0.9}>
        <View style={themed($titleContainer)}>
          <Text style={themed($title)}>{title}</Text>
        </View>
        <Icon
          icon="caretRight"
          size={20}
          color={colors.palette.primary}
          style={themed([
            $expandIcon,
            { transform: [{ rotate: isExpanded ? "270deg" : "90deg" }] },
          ])}
        />
      </TouchableOpacity>

      {isExpanded && <View style={themed($content)}>{children}</View>}
    </View>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  backgroundColor: colors.palette.lightBlue,
  overflow: "hidden",
  paddingVertical: spacing.lg,
})

const $separatorBottom: ThemedStyle<ViewStyle> = ({ colors }) => ({
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.neutral400,
})

const $header: ThemedStyle<ViewStyle> = () => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
})

const $titleContainer: ThemedStyle<ViewStyle> = () => ({
  flexDirection: "row",
  alignItems: "center",
})

const $title: ThemedStyle<TextStyle> = ({ typography, colors }) => ({
  fontFamily: typography.fonts.somarSans.medium,
  fontSize: 16,
  fontWeight: 600,
  color: colors.palette.neutral600,
})

const $expandIcon: ThemedStyle<ImageStyle> = () => ({
  alignSelf: "center",
})

const $content: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.md,
})
