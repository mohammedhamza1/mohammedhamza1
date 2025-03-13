import { FC, useState } from "react"
import { View, ViewStyle, TouchableOpacity, ScrollView, TextStyle } from "react-native"
import { Button, Document, Icon, Text } from "@/components"
import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"
import { translate } from "@/i18n"

interface DocumentsTabProps {
  tabs: {
    title: string
    documents: Array<{
      id: string
      documentType: string
      dataURL: string
      file: Record<string, any>
    }>
  }[]
}

export const DocumentsTab: FC<DocumentsTabProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const { themed } = useAppTheme()

  return (
    <View style={themed($viewContainer)}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={themed($tabsContainer)}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab.title}
            style={[themed($tab), index === activeTabIndex && themed($activeTab)]}
            onPress={() => setActiveTabIndex(index)}
          >
            <Text
              text={tab.title}
              style={[themed($tabText), index === activeTabIndex && themed($activeTabText)]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={themed($documentsContainer)}>
        {tabs[activeTabIndex].documents.map((doc) => (
          <View key={doc.id} style={themed($documentWrapper)}>
            <Document
              key={doc.id}
              id={doc.id}
              documentType={doc.documentType}
              dataURL={doc.dataURL}
              file={doc.file}
            />
          </View>
        ))}
      </View>
      <Button
        testID="share-files-button"
        text={translate("common:shareWithCount", {
          count: tabs[activeTabIndex].documents.length,
        })}
        style={themed($shareBtn)}
        textStyle={themed($shareBtnText)}
        preset="outlined"
        LeftAccessory={() => <Icon icon="share" size={24} />}
      />
    </View>
  )
}

const $viewContainer: ThemedStyle<ViewStyle> = () => ({
  flex: 1,
  width: "100%",
})

const $tabsContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexGrow: 0,
  marginBottom: spacing.md,
})

const $tab: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  padding: spacing.md,
  marginRight: spacing.xs,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: colors.palette.neutral400,
  backgroundColor: colors.palette.lightBlue,
})

const $activeTab: ThemedStyle<ViewStyle> = ({ colors }) => ({
  borderWidth: 1.5,
  borderColor: colors.palette.neutral800,
  backgroundColor: colors.palette.neutral400,
})

const $tabText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.palette.neutral900,
  fontSize: 14,
  fontWeight: 500,
})

const $activeTabText: ThemedStyle<TextStyle> = ({ colors, typography }) => ({
  color: colors.palette.neutral900,
  fontFamily: typography.fonts.somarSans.bold,
  fontSize: 14,
  fontWeight: 700,
  fontStyle: "normal",
})

const $documentsContainer: ThemedStyle<ViewStyle> = () => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
})

const $documentWrapper: ThemedStyle<ViewStyle> = () => ({
  width: "49%",
})
const $shareBtn: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  marginTop: spacing.sm,
  marginBottom: spacing.xs,
  backgroundColor: colors.palette.lightBlue,
  borderWidth: 1,
  borderColor: colors.palette.neutral900,
  textAlign: "center",
  width: "100%",
  alignItems: "flex-end",
})

const $shareBtnText: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
  fontSize: 16,
  color: colors.palette.neutral900,
  marginLeft: spacing.xs,
})
