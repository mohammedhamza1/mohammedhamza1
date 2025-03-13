import { ComponentType, FC, useMemo, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, ScrollView, TextStyle } from "react-native"
import { FinanceStackScreenProps } from "@/navigators"
import {
  Accordion,
  AccordionCard,
  ApplicationDetailsCard,
  Button,
  CustomHeader,
  DocumentsTab,
  Icon,
  Radio,
  Screen,
  TextField,
  TextFieldAccessoryProps,
} from "@/components"
import { useAppTheme } from "@/utils/useAppTheme"
import { ThemedStyle } from "@/theme"
import { translate } from "@/i18n"
import ActionSheet from "@/components/ui-group/action-sheet/action-sheet.ui-group"

interface FinanceApplicationDetailsScreenProps
  extends FinanceStackScreenProps<"FinanceApplicationDetails"> {}

export const FinanceApplicationDetailsScreen: FC<FinanceApplicationDetailsScreenProps> = observer(
  function FinanceApplicationDetailsScreen(_props) {
    const { navigation } = _props
    // const { applicationId } = _props.route.params
    const {
      themed,
      theme: { colors },
    } = useAppTheme()
    const [openTransferSheet, setOpenTransferSheet] = useState(false)

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

    return (
      <Screen
        preset="fixed"
        contentContainerStyle={themed($screenContentContainer)}
        safeAreaEdges={["top"]}
      >
        <CustomHeader titleTx="financeApplicationDetailsScreen:title" />
        <ScrollView style={themed($viewContainer)} showsVerticalScrollIndicator={false}>
          <ApplicationDetailsCard
            onUpdatesPress={() => navigation.navigate("FinanceApplicationTimeline")}
          />
          {/* Customer details */}
          <Accordion title={translate("financeApplicationDetailsScreen:customerDetails.title")}>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:customerDetails.customerName")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:customerDetails.nationalId")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:customerDetails.mobileNo")}
            ></AccordionCard>
            <AccordionCard
              header={translate(
                "financeApplicationDetailsScreen:customerDetails.residenceAddressOnTheId",
              )}
            ></AccordionCard>
          </Accordion>
          {/* end */}
          {/* Customer Verification Data */}
          <Accordion
            title={translate("financeApplicationDetailsScreen:customerVerificationData.title")}
          >
            <AccordionCard
              header={translate(
                "financeApplicationDetailsScreen:customerVerificationData.residenceType",
              )}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:customerVerificationData.jobType")}
            ></AccordionCard>
            <AccordionCard
              header={translate(
                "financeApplicationDetailsScreen:customerVerificationData.employerName",
              )}
            ></AccordionCard>
            <AccordionCard
              header={translate(
                "financeApplicationDetailsScreen:customerVerificationData.workplaceAddress",
              )}
            ></AccordionCard>
            <AccordionCard
              header={translate(
                "financeApplicationDetailsScreen:customerVerificationData.hrLetter",
              )}
            ></AccordionCard>
            <AccordionCard
              header={translate(
                "financeApplicationDetailsScreen:customerVerificationData.monthlyIncome",
              )}
            ></AccordionCard>
            <AccordionCard
              header={translate(
                "financeApplicationDetailsScreen:customerVerificationData.bankStatement",
              )}
            ></AccordionCard>
            <AccordionCard
              header={translate(
                "financeApplicationDetailsScreen:customerVerificationData.maritalStatus",
              )}
            ></AccordionCard>
          </Accordion>
          {/* end */}
          {/* Car to be financed */}
          <Accordion title={translate("financeApplicationDetailsScreen:carToBeFinanced.title")}>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:carToBeFinanced.model")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:carToBeFinanced.category")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:carToBeFinanced.modelYear")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:carToBeFinanced.condition")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:carToBeFinanced.engine")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:carToBeFinanced.price")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:carToBeFinanced.deposit")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:carToBeFinanced.financedAmount")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:carToBeFinanced.tenor")}
            ></AccordionCard>
          </Accordion>
          {/* end */}
          {/* Attached documents */}
          <Accordion title={translate("financeApplicationDetailsScreen:attachedDocuments.title")}>
            <DocumentsTab
              tabs={[
                {
                  title: "مستندات شخصية",
                  documents: [
                    { id: "1", documentType: "بطاقة شخصية أمامي", dataURL: "", file: {} },
                    { id: "2", documentType: "بطاقة شخصية خلفي", dataURL: "", file: {} },
                    { id: "3", documentType: "رخصة قيادة", dataURL: "", file: {} },
                  ],
                },
                {
                  title: "مستندات السيارة",
                  documents: [
                    { id: "4", documentType: "Car Registration", dataURL: "", file: {} },
                    { id: "5", documentType: "Insurance Policy", dataURL: "", file: {} },
                  ],
                },
                {
                  title: "مستندات التأمين",
                  documents: [
                    { id: "6", documentType: "Additional Documents", dataURL: "", file: {} },
                  ],
                },
              ]}
            />
          </Accordion>
          {/* end */}
          {/* Product details */}
          <Accordion title={translate("financeApplicationDetailsScreen:productDetails.title")}>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:productDetails.financingPartner")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:productDetails.product")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:productDetails.financingAgent")}
            ></AccordionCard>
            <AccordionCard
              header={translate(
                "financeApplicationDetailsScreen:productDetails.monthlyInstallment",
              )}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:productDetails.autoMerchant")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:productDetails.financedProduct")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:productDetails.carofiAgent")}
            ></AccordionCard>
          </Accordion>
          {/* end */}
          {/* Other details */}
          <Accordion
            title={translate("financeApplicationDetailsScreen:otherDetails.title")}
            bottomSeparator={false}
          >
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:otherDetails.customerContact")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:otherDetails.referenceName")}
            ></AccordionCard>
            <AccordionCard
              header={translate("financeApplicationDetailsScreen:otherDetails.referenceRelation")}
            ></AccordionCard>
          </Accordion>
          {/* end */}
        </ScrollView>
        <View style={themed($viewActionsContainer)}>
          <Button
            testID="change-status-button"
            tx="common:updateStatus"
            style={themed($changeStatusBtn)}
            textStyle={themed($changeStatusBtnText)}
            preset="filled"
          />
          <Button
            testID="transfer-file-button"
            tx="common:transfer"
            style={themed($transferBtn)}
            textStyle={themed($transferBtnText)}
            preset="outlined"
            onPress={() => setOpenTransferSheet(true)}
          />
        </View>
        <ActionSheet
          title="common:transfer"
          actionSheetVisible={openTransferSheet}
          hasCTA={true}
          isPageSheet={true}
          btnTextTx="common:transfer"
          setActionSheetVisible={() => setOpenTransferSheet(false)}
          onApplyPress={() => setOpenTransferSheet(false)}
        >
          <View style={themed($actionSheetContainerView)}>
            <TextField
              containerStyle={themed($searchFieldContainer)}
              inputWrapperStyle={themed($searchFieldInput)}
              autoComplete="off"
              autoCorrect={false}
              keyboardType="default"
              inputMode="search"
              placeholderTx="financeHomeScreen:searchPlaceholder"
              LeftAccessory={SearchLeftAccessory}
            />
            <Radio
              value={true}
              labelTx="common:arabic"
              labelStyle={themed($radioLabel)}
              containerStyle={themed($radioWrapper)}
              inputDetailStyle={{
                backgroundColor: colors.palette.primary,
              }}
              inputOuterStyle={{ borderColor: colors.palette.primary }}
            />
            <Radio
              labelTx="common:english"
              labelStyle={themed($radioLabel)}
              containerStyle={themed($radioWrapper)}
              inputOuterStyle={{ borderColor: colors.palette.neutral500 }}
            />
          </View>
        </ActionSheet>
      </Screen>
    )
  },
)

const $screenContentContainer: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  flex: 1,
  backgroundColor: colors.palette.lightBlue,
  paddingHorizontal: spacing.md,
})

const $viewContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginBottom: spacing.md,
  width: "100%",
  flex: 1,
})

const $viewActionsContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginBottom: spacing.lg,
  marginTop: "auto",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
})

const $changeStatusBtn: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  marginBottom: spacing.xs,
  backgroundColor: colors.palette.neutral800,
  width: "58.77%",
  marginRight: spacing.xs,
  alignItems: "flex-end",
})

const $changeStatusBtnText: ThemedStyle<TextStyle> = ({ colors }) => ({
  fontSize: 16,
  color: colors.palette.neutral100,
})
const $transferBtn: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  marginBottom: spacing.xs,
  backgroundColor: colors.palette.lightBlue,
  borderWidth: 1,
  borderColor: colors.palette.neutral900,
  textAlign: "center",
  width: "40%",
  alignItems: "flex-end",
})

const $transferBtnText: ThemedStyle<TextStyle> = ({ colors }) => ({
  fontSize: 16,
  color: colors.palette.neutral900,
})

const $actionSheetContainerView: ThemedStyle<ViewStyle> = () => ({
  width: "100%",
})
const $radioWrapper: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
  width: "100%",
  paddingVertical: spacing.lg,
  paddingHorizontal: 0,
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.neutral400,
})
const $radioLabel: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
  color: colors.palette.neutral900,
  textAlign: "left",
  marginStart: spacing.xs,
  marginEnd: spacing.xs,
})

const $searchFieldContainer: ThemedStyle<ViewStyle> = () => ({
  width: "100%",
})
const $searchFieldInput: ThemedStyle<ViewStyle> = ({ colors }) => ({
  borderRadius: 58,
  backgroundColor: colors.palette.neutral100,
  border: "none",
  borderColor: colors.palette.neutral100,
})
