import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import * as Screens from "@/screens"
import { colors } from "@/theme"
import { ApplicationCardProps } from "@/components"

export type FinanceNavigatorParamList = {
  FinanceHome: undefined
  FinanceNewApplications: {
    applications: ApplicationCardProps[]
  }
  FinanceApplicationDetails: {
    applicationId: ApplicationCardProps["id"]
  }
  FinanceApplicationTimeline: undefined
}

export type FinanceStackScreenProps<T extends keyof FinanceNavigatorParamList> =
  NativeStackScreenProps<FinanceNavigatorParamList, T>

const Stack = createNativeStackNavigator<FinanceNavigatorParamList>()
export const FinanceNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
      initialRouteName={"FinanceHome"}
    >
      <Stack.Screen name="FinanceHome" component={Screens.FinanceHomeScreen} />
      <Stack.Screen
        name="FinanceNewApplications"
        component={Screens.FinanceNewApplicationsScreen}
      />
      <Stack.Screen
        name="FinanceApplicationDetails"
        component={Screens.FinanceApplicationDetailsScreen}
      />
      <Stack.Screen
        name="FinanceApplicationTimeline"
        component={Screens.FinanceApplicationTimelineScreen}
      />
    </Stack.Navigator>
  )
}
