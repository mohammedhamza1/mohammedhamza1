import { FC } from "react"
import { ViewStyle } from "react-native"
import { FinanceStackScreenProps } from "@/navigators"
import { CustomHeader, Screen, Timeline } from "@/components"
import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"

interface FinanceApplicationTimelineScreenProps
  extends FinanceStackScreenProps<"FinanceApplicationTimeline"> {}

export const FinanceApplicationTimelineScreen: FC<FinanceApplicationTimelineScreenProps> = (
  _props,
) => {
  const { themed } = useAppTheme()

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={themed($screenContentContainer)}
      safeAreaEdges={["top", "bottom"]}
    >
      <CustomHeader titleTx="applicationDetailsCardComponent:allUpdates" />
      <Timeline
        items={[
          {
            date: "2 فبراير 2025 - 10:20 ص",
            status: "approved",
            email: "hamza@gmail.com",
          },
          {
            date: "2 فبراير 2025 - 10:20 ص",
            status: "rejected",
            email: "hamza@gmail.com",
          },
          {
            date: "2 فبراير 2025 - 10:20 ص",
            status: "required",
            email: "hamza@gmail.com",
          },
          {
            date: "2 فبراير 2025 - 10:20 ص",
            status: "waiting",
            email: "hamza@gmail.com",
          },
          {
            date: "2 فبراير 2025 - 10:20 ص",
            status: "approved",
            email: "hamza@gmail.com",
          },
          {
            date: "2 فبراير 2025 - 10:20 ص",
            status: "approved",
            email: "hamza@gmail.com",
          },
          {
            date: "2 فبراير 2025 - 10:20 ص",
            status: "approved",
            email: "hamza@gmail.com",
          },
          {
            date: "2 فبراير 2025 - 10:20 ص",
            status: "approved",
            email: "hamza@gmail.com",
          },
        ]}
      ></Timeline>
    </Screen>
  )
}

const $screenContentContainer: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  flex: 1,
  paddingHorizontal: spacing.md,
  backgroundColor: colors.palette.lightBlue,
})
