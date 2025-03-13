import { Modal, TextStyle, View, ViewStyle } from "react-native"
import { Icon } from "../../Icon"
import { ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"
import { Text } from "../../Text"
import { Button } from "@/components/Button"
import { TxKeyPath } from "@/i18n"

export interface ActionSheetProps {
  title: TxKeyPath
  actionSheetVisible: boolean
  setActionSheetVisible: (visible: boolean) => void
  onApplyPress?: () => void
  children?: React.ReactNode
  isBtnDisabled?: boolean
  hasCTA?: boolean
  btnTextTx?: TxKeyPath
  isPageSheet?: boolean
}

const ActionSheet: React.FC<ActionSheetProps> = ({
  title,
  actionSheetVisible,
  setActionSheetVisible,
  onApplyPress,
  children,
  isBtnDisabled,
  btnTextTx,
  hasCTA = true,
  isPageSheet = false,
}) => {
  const { themed } = useAppTheme()
  return (
    <Modal
      animationType="slide"
      visible={actionSheetVisible}
      transparent={true}
      onRequestClose={() => setActionSheetVisible(false)}
    >
      <View style={themed($modalWrapper)}>
        <View style={[themed($modalView), isPageSheet && themed($pageSheet)]}>
          <View style={themed($modalTitleWrapper)}>
            <Text style={themed($modalTitle)} tx={title} size="xl" />
            <Icon icon="x" color="black" size={20} onPress={() => setActionSheetVisible(false)} />
          </View>
          {children}
          {hasCTA && (
            <Button
              testID="action-sheet-btn"
              tx={btnTextTx || "common:apply"}
              style={[themed($applyBtn), isPageSheet && themed($pageSheetApplyBtn)]}
              textStyle={themed($applyBtnText)}
              preset="outlined"
              disabled={isBtnDisabled}
              disabledStyle={themed($disabledBtn)}
              disabledTextStyle={themed($disabledBtnText)}
              onPress={onApplyPress}
            />
          )}
        </View>
      </View>
    </Modal>
  )
}

const $modalWrapper: ThemedStyle<ViewStyle> = ({ colors }) => ({
  flex: 1,
  justifyContent: "flex-end",
  alignItems: "center",
  backgroundColor: colors.palette.overlay50,
})

const $modalView: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  alignItems: "center",
  backgroundColor: colors.palette.lightBlue,
  borderRadius: 20,
  elevation: 0,
  margin: 20,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0,
  shadowRadius: 0,
  width: "100%",
  borderEndEndRadius: 0,
  borderEndStartRadius: 0,
  marginBottom: 0,
  padding: spacing.md,
  paddingBottom: spacing.xxl,
})
const $pageSheet: ThemedStyle<ViewStyle> = () => ({
  height: "93%",
})

const $modalTitleWrapper: ThemedStyle<TextStyle> = ({ spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: spacing.xs,
})

const $modalTitle: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.palette.neutral900,
})

const $applyBtn: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  marginTop: spacing.xs,
  width: "100%",
  textAlign: "left",
  backgroundColor: colors.palette.neutral900,
})
const $pageSheetApplyBtn: ThemedStyle<TextStyle> = () => ({
  marginTop: "auto",
})

const $applyBtnText: ThemedStyle<TextStyle> = ({ colors }) => ({
  width: "100%",
  color: colors.palette.neutral100,
})

const $disabledBtn: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.neutral400,
})

const $disabledBtnText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.palette.neutral400,
})

export default ActionSheet
