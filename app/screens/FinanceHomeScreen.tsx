import { ComponentType, FC, useMemo, useState } from "react"
import {
  ViewStyle,
  View,
  TextStyle,
  TouchableOpacity,
  KeyboardAvoidingView,
  Pressable,
} from "react-native"
import { FinanceStackScreenProps } from "@/navigators"
import {
  ApplicationCard,
  ApplicationCardProps,
  Icon,
  ListItem,
  NotificationCard,
  Screen,
  TagProps,
  Text,
  TextField,
  TextFieldAccessoryProps,
} from "@/components"
import { useAppTheme } from "@/utils/useAppTheme"
import { colors, ThemedStyle } from "@/theme"
import AuthHeader from "@/components/ui-group/auth-header/auth-header.ui-group"
import { FlashList } from "@shopify/flash-list"
import ActionSheet from "@/components/ui-group/action-sheet/action-sheet.ui-group"
import { translate, TxKeyPath } from "@/i18n"

interface FinanceHomeScreenProps extends FinanceStackScreenProps<"FinanceHome"> {}
const financeApplications: ApplicationCardProps[] = [
  {
    status: "approved",
    id: 1,
    name: "محمد أحمد عبد الحميد",
    car: "Toyota Camry",
    bankDetails: "1234567890",
    updatedAt: "2022-01-01T12:00:00.000Z",
  },
  {
    status: "waiting",
    id: 2,
    name: "ضياء أحمد عبد الحميد",
    car: "Honda Civic",
    bankDetails: "9876543210",
    updatedAt: "2022-01-05T14:30:00.000Z",
  },
  {
    status: "rejected",
    id: 3,
    name: "ضياء أحمد عبد الحميد",
    car: "Ford Mustang",
    bankDetails: "5551234567",
    updatedAt: "2022-01-10T10:45:00.000Z",
  },
  {
    status: "required",
    id: 4,
    name: "ضياء أحمد عبد الحميد",
    car: "Nissan Altima",
    bankDetails: "1112223333",
    updatedAt: "2022-01-12T16:15:00.000Z",
  },
  {
    status: "approved",
    id: 5,
    name: "ضياء أحمد عبد الحميد",
    car: "Chevrolet Silverado",
    bankDetails: "4445556666",
    updatedAt: "2022-01-15T11:20:00.000Z",
  },
  {
    status: "waiting",
    id: 6,
    name: "ضياء أحمد عبد الحميد",
    car: "Toyota Corolla",
    bankDetails: "7778889999",
    updatedAt: "2022-01-18T13:10:00.000Z",
  },
  {
    status: "rejected",
    id: 7,
    name: "ضياء أحمد عبد الحميد",
    car: "Honda Accord",
    bankDetails: "2223334444",
    updatedAt: "2022-01-20T15:50:00.000Z",
  },
  {
    status: "required",
    id: 8,
    name: "ضياء أحمد عبد الحميد",
    car: "Ford Focus",
    bankDetails: "6667778888",
    updatedAt: "2022-01-22T12:40:00.000Z",
  },
  {
    status: "approved",
    id: 9,
    name: "ضياء أحمد عبد الحميد",
    car: "Hyundai Elantra",
    bankDetails: "8889990000",
    updatedAt: "2022-01-25T14:05:00.000Z",
  },
  {
    status: "waiting",
    id: 10,
    name: "ضياء أحمد عبد الحميد",
    car: "Volkswagen Golf",
    bankDetails: "3334445555",
    updatedAt: "2022-01-28T11:30:00.000Z",
  },
]

const awaitingApplications = financeApplications.filter(
  (application) => application.status === "waiting",
)

const sortByOptions = [
  { tx: translate("financeHomeScreen:sortByStatus"), sortBy: "status" },
  { tx: translate("financeHomeScreen:sortById"), sortBy: "id" },
  { tx: translate("financeHomeScreen:sortByNewestDate"), sortBy: "newestDate" },
  { tx: translate("financeHomeScreen:sortByOldestDate"), sortBy: "oldestDate" },
  { tx: translate("financeHomeScreen:sortByAlpha"), sortBy: "name" },
]

export const FinanceHomeScreen: FC<FinanceHomeScreenProps> = (_props) => {
  const { navigation } = _props
  const headerConfig = useMemo(() => ({ showLogo: true }), [])
  const [filteredFinanceApplications, setFilteredFinanceApplications] =
    useState(financeApplications)
  const [openSortBySheet, setOpenSortBySheet] = useState(false)

  const { themed } = useAppTheme()

  const SearchLeftAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      function SearchLeftAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon="search"
            color={colors.palette.neutral700}
            containerStyle={props.style}
            size={20}
          />
        )
      },
    [],
  )

  const handleSearch = (text: string) => {
    const query = text.trim()
    if (query === "") {
      setFilteredFinanceApplications(financeApplications)
      return
    }

    const filtered = financeApplications.filter((item) => {
      return (
        item.id.toString().includes(query) || item.name.toLowerCase().includes(query.toLowerCase())
      )
    })
    setFilteredFinanceApplications(filtered)
  }

  const handleSortBy = (sortBy: string) => {
    const sorted = [...filteredFinanceApplications].sort((a, b) => {
      if (sortBy === "status") {
        return a.status.localeCompare(b.status)
      } else if (sortBy === "id") {
        return a.id - b.id
      } else if (sortBy === "newestDate") {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      } else if (sortBy === "oldestDate") {
        return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      }
      return 0
    })
    setFilteredFinanceApplications(sorted)
    setOpenSortBySheet(false)
  }

  return (
    <Screen
      preset="auto"
      contentContainerStyle={themed($screenContentContainer)}
      safeAreaEdges={["top", "bottom"]}
    >
      <AuthHeader config={headerConfig} />
      <View style={themed($viewContainer)}>
        <Pressable
          onPress={() =>
            navigation.navigate("FinanceNewApplications", {
              applications: awaitingApplications,
            })
          }
        >
          <NotificationCard count={awaitingApplications?.length} />
        </Pressable>
        <TextField
          onChangeText={handleSearch}
          containerStyle={themed($searchFieldContainer)}
          inputWrapperStyle={themed($searchFieldInput)}
          autoComplete="off"
          autoCorrect={false}
          keyboardType="default"
          inputMode="search"
          placeholderTx="financeHomeScreen:searchPlaceholder"
          LeftAccessory={SearchLeftAccessory}
        />
        <View style={themed($listHeader)}>
          <Text tx="financeHomeScreen:applications" style={themed($listHeaderText)} preset="bold" />
          <TouchableOpacity onPress={() => setOpenSortBySheet(true)}>
            <View style={themed($sortView)}>
              <Text tx="financeHomeScreen:sort" preset="bold" style={themed($sortText)} />
              <Icon icon="sort" color={colors.palette.neutral900} size={16} />
            </View>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView behavior="height" style={themed($KeyboardView)}>
          <FlashList
            data={filteredFinanceApplications}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={themed($cardView)}
                onPress={() => {
                  navigation.navigate("FinanceApplicationDetails", {
                    applicationId: item.id,
                  })
                }}
                activeOpacity={0.7}
              >
                <ApplicationCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  status={item.status as TagProps["type"]}
                  car={item.car}
                  bankDetails={item.bankDetails}
                  updatedAt={item.updatedAt}
                />
              </TouchableOpacity>
            )}
            estimatedItemSize={200}
            showsVerticalScrollIndicator={false}
          />
        </KeyboardAvoidingView>
      </View>
      <ActionSheet
        title="financeHomeScreen:sortBy"
        actionSheetVisible={openSortBySheet}
        hasCTA={false}
        setActionSheetVisible={() => setOpenSortBySheet(false)}
      >
        {sortByOptions.map((item, index) => (
          <ListItem
            key={index}
            tx={item.tx as TxKeyPath}
            bottomSeparator={sortByOptions.length - 1 !== index}
            height={53}
            containerStyle={themed($listItemContainer)}
            textStyle={themed($listItemText)}
            onPress={() => handleSortBy(item.sortBy)}
          />
        ))}
      </ActionSheet>
    </Screen>
  )
}

const $screenContentContainer: ThemedStyle<ViewStyle> = ({ colors }) => ({
  flex: 1,
  backgroundColor: colors.palette.lightBlue,
})
const $viewContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  paddingHorizontal: spacing.md,
  paddingTop: spacing.md,
  width: "100%",
  flex: 1,
})
const $searchFieldContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  paddingVertical: spacing.xl,
  width: "100%",
})
const $searchFieldInput: ThemedStyle<ViewStyle> = ({ colors }) => ({
  borderRadius: 58,
  backgroundColor: colors.palette.neutral100,
  border: "none",
  borderColor: colors.palette.neutral100,
})
const $listHeader: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: spacing.md,
})
const $sortView: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: colors.palette.neutral400,
  paddingVertical: spacing.xxs,
  paddingHorizontal: spacing.sm,
  borderRadius: 80,
})
const $sortText: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 22,
  marginRight: spacing.xs,
  color: colors.palette.neutral900,
})
const $listHeaderText: ThemedStyle<TextStyle> = ({ typography }) => ({
  fontFamily: typography.fonts.somarSans.bold,
  fontSize: 22,
  fontWeight: 600,
  lineHeight: 28,
})
const $cardView: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginBottom: spacing.md,
})
const $KeyboardView: ThemedStyle<ViewStyle> = () => ({
  flex: 1,
})
const $listItemContainer: ThemedStyle<ViewStyle> = ({ colors }) => ({
  width: "100%",
  borderBottomColor: colors.palette.neutral400,
})
const $listItemText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.palette.neutral900,
  fontSize: 16,
  fontWeight: 500,
})
