import * as Screens from "@/screens"
import { useAppTheme } from "@/utils/useAppTheme"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"

export type AuthStackParamList = {
  Login: undefined
  LoginPhone: undefined
  PhoneVerification: undefined
  BiometricScreen: undefined
  BiometricPassword: undefined
  BiometricPasswordConfirm: {
    password: string
  }
  BiometricPasswordLogin: undefined
  Welcome: undefined
}

// export type AppStackParamList = {
//   Login: NavigatorScreenParams<AuthStackParamList>
//   LoginScreen: NavigatorScreenParams<AuthStackParamList>
//   // 🔥 Your screens go here
//   // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
// }

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AuthStackScreenProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  T
>

const Stack = createNativeStackNavigator<AuthStackParamList>()

/**
 * This is the main navigator for the login screens with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 * @returns {JSX.Element} The rendered `AuthNavigator`.
 */
export function AuthNavigator() {
  const {
    theme: { colors },
  } = useAppTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
      initialRouteName={"Login"}
    >
      <Stack.Screen name="Login" component={Screens.LoginScreen} />
      <Stack.Screen name="LoginPhone" component={Screens.LoginPhoneScreen} />
      <Stack.Screen name="PhoneVerification" component={Screens.PhoneVerificationScreen} />
      <Stack.Screen name="BiometricScreen" component={Screens.BiometricScreen} />
      <Stack.Screen name="BiometricPassword" component={Screens.BiometricPasswordScreen} />
      <Stack.Screen
        name="BiometricPasswordConfirm"
        component={Screens.BiometricPasswordConfirmScreen}
      />
      <Stack.Screen
        name="BiometricPasswordLogin"
        component={Screens.BiometricPasswordLoginScreen}
      />
    </Stack.Navigator>
  )
}
