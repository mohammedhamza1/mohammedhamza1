import { Radio } from "@/components/Toggle"
import { ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"
import { useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import ActionSheet, { ActionSheetProps } from "../action-sheet/action-sheet.ui-group"
import { changeAppLanguage, SupportedLocales } from "@/i18n"
import i18n from "i18next"

export const ChooceLang: React.FC<Omit<ActionSheetProps, "title">> = ({
  actionSheetVisible,
  setActionSheetVisible,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)
  const { themed } = useAppTheme()
  return (
    <ActionSheet
      actionSheetVisible={actionSheetVisible}
      setActionSheetVisible={setActionSheetVisible}
      title="actionSheetComponent:title"
      isBtnDisabled={selectedLanguage === i18n.language}
      onApplyPress={() => changeAppLanguage(selectedLanguage)}
    >
      <View style={themed($containerView)}>
        <Radio
          value={selectedLanguage === SupportedLocales.AR}
          labelTx="common:arabic"
          labelPosition="left"
          labelStyle={themed($radioLabel)}
          containerStyle={themed($radioWrapper)}
          onPress={() => setSelectedLanguage(SupportedLocales.AR)}
        />
        <Radio
          value={selectedLanguage === SupportedLocales.EN}
          labelTx="common:english"
          labelPosition="left"
          labelStyle={themed($radioLabel)}
          containerStyle={themed($radioWrapper)}
          onPress={() => setSelectedLanguage(SupportedLocales.EN)}
        />
      </View>
    </ActionSheet>
  )
}
const $containerView: ThemedStyle<ViewStyle> = () => ({
  width: "100%",
})
const $radioWrapper: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
  color: colors.palette.neutral900,
  width: "100%",
  paddingVertical: spacing.md,
  paddingHorizontal: 0,
})
const $radioLabel: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.palette.neutral900,
  margin: 0,
  textAlign: "left",
})
