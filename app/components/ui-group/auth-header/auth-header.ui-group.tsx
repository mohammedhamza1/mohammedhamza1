import { TextStyle, View, Image, ViewStyle, ImageStyle } from "react-native"

import type { ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"
import { Text } from "../../Text"
import { Button } from "../../Button"
import { Icon } from "../../Icon"
import { ChooceLang } from "../choose-lang/choose-lang.ui-group"
import { memo, useState } from "react"
const carofiChromeLogo = require("assets/images/demo/carofi-light-logo-new.png")
const carofiLightLogo = require("assets/images/demo/carofi-light-logo-new.png")

export interface AuthHeaderProps {
  config?: {
    showSubTitle?: boolean
    showLogo?: boolean
  }
}

const AuthHeader = memo(function AuthHeader({ config = {} }: AuthHeaderProps) {
  const { showSubTitle = false, showLogo = false } = config
  const [showActionSheet, setShowActionSheet] = useState(false)
  const { themed, theme } = useAppTheme()

  return (
    <View style={themed($viewContentContainer)}>
      <View style={themed($viewHeaderContainer)}>
        {showLogo ? (
          <Image
            source={theme.isDark ? carofiChromeLogo : carofiLightLogo}
            style={themed($logoImage)}
          />
        ) : null}
        <View style={themed($switchLangContainer)}>
          <Button
            testID="switch-language-button"
            style={themed($switchLangButton)}
            preset="default"
            onPress={() => {
              console.log("Switch Language Button Pressed")
              setShowActionSheet(true)
            }}
            LeftAccessory={() => <Icon icon="globe" />}
          />
        </View>
      </View>
      {showSubTitle && (
        <View style={themed($viewTitleContainer)}>
          <Text tx="common:slogan" preset="default" style={themed($title)} />
          <Text tx="common:title" preset="bold" style={themed($subtitle)} />
        </View>
      )}

      <ChooceLang actionSheetVisible={showActionSheet} setActionSheetVisible={setShowActionSheet} />
    </View>
  )
})

const $viewHeaderContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "center",
  paddingHorizontal: spacing.md,
  paddingTop: spacing.md,
  paddingBottom: spacing.xxs,
  alignItems: "center",
  minHeight: spacing.xxxl,
})

const $switchLangContainer: ThemedStyle<ViewStyle> = () => ({
  position: "absolute",
  right: 0,
})

const $switchLangButton: ThemedStyle<TextStyle> = () => ({
  alignSelf: "flex-end",
})

const $logoImage: ThemedStyle<ImageStyle> = ({}) => ({
  width: 94,
  resizeMode: "contain",
  alignSelf: "center",
})

const $viewContentContainer: ThemedStyle<ViewStyle> = () => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
})

const $viewTitleContainer: ThemedStyle<ViewStyle> = () => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
})

const $title: ThemedStyle<TextStyle> = ({ typography }) => ({
  fontFamily: typography.fonts.somarSans.normal,
  fontSize: 24,
  fontWeight: 300,
})
const $subtitle: ThemedStyle<TextStyle> = ({ typography }) => ({
  fontFamily: typography.fonts.somarSans.normal,
  fontSize: 24,
  marginLeft: 5,
  fontWeight: "bold",
})

export default AuthHeader
