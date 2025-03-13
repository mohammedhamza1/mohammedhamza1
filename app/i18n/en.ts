import demoEn from "./demo-en"

const en = {
  common: {
    title: "Carofi",
    slogan: "Get your Car with",
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    logOut: "Log Out",
    english: "English",
    arabic: "العربية",
    apply: "Apply",
    updateStatus: "Update status",
    transfer: "Transfer",
    shareWithCount: "Share {{count}} documents",
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
    letsGo: "Let's go!",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  actionSheetComponent: {
    title: "App language",
  },
  tagComponent: {
    awaiting: "Awaiting feedback",
    approved: "Approved",
    rejected: "Rejected",
    required: "Required updates",
  },
  notificationCardComponent: {
    text: "You have {{count}} applications",
  },
  applicationCardComponent: {
    updated: "Updated: {{date}}",
  },
  applicationDetailsCardComponent: {
    applicationNo: "Application no.",
    applicationDate: "Application date: ",
    addComment: "Please add more details",
    allUpdates: "All updates",
  },

  errors: {
    invalidEmail: "Invalid email address.",
    invalidPassword: "Password must be at least 6 characters",
    invalidPhoneVerificationCode: "Invalid verification code",
  },
  AuthNavigator: {
    componentsTab: "Components",
    debugTab: "Debug",
    communityTab: "Community",
    podcastListTab: "Podcast",
  },
  loginScreen: {
    logInByPhone: "Login with Phone ",
    loginUsingBio: "Login with Biometrics",
    privacyPolicy: "By logging in, you agree to the terms and conditions",
  },
  loginPhoneScreen: {
    title: "Login",
    phoneFieldLabel: "Phone Number",
    passwordFieldLabel: "Password",
    phoneFieldPlaceholder: "01xxxxxxxxx",
    passwordFieldPlaceholder: "**********",
    cantLogin: "Can't login?",
    callUs: "Call us",
    loginAction: "",
  },
  phoneVerificationScreen: {
    title: "Enter Verification Code",
    description: "Enter the verification code sent to your phone number",
    codeFieldLabel: "Verification Code",
    codeFieldPlaceholder: "000000",
    resend: "Resend",
    codeFailed: "Have you not received the code?",
  },
  biometricScreen: {
    title: "Biometric Login",
    description:
      "With biometric login, you don't have to enter your password every time. It also helps making your app more secure.",
    activateNow: "Activate Now",
    later: "Later",
  },
  biometricPasswordScreen: {
    title: "Enter Password",
    description: "Enter your password to login with biometrics",
  },
  biometricPasswordConfirmScreen: {
    title: "Enter Password Again",
    description: "Enter your password to login with biometrics",
  },
  biometricPasswordLoginScreen: {
    title: "Enter Password",
    description: "Enter your password to login with biometrics",
    forgotPassword: "Forgot Password?",
  },
  financeHomeScreen: {
    searchPlaceholder: "Search by user name or application number",
    applications: "Requests",
    sort: "Sort",
    sortBy: "Sort by",
    sortByStatus: "Status",
    sortById: "ID",
    sortByNewestDate: "Latest Date",
    sortByOldestDate: "Oldest Date",
    sortByAlpha: "Alphabetical",
  },
  financeApplicationDetailsScreen: {
    title: "Application Details",
    customerDetails: {
      title: "Customer details",
      customerName: "Customer name",
      nationalId: "National ID",
      mobileNo: "Mobile no.",
      residenceAddressOnTheId: "Residence address on the ID",
    },
    customerVerificationData: {
      title: "Customer verification data",
      residenceType: "Residence type",
      jobType: "Job type",
      employerName: "Employer name",
      workplaceAddress: "Workplace address",
      hrLetter: "HR letter",
      monthlyIncome: "Monthly income",
      bankStatement: "Bank statement",
      maritalStatus: "Marital status",
    },
    carToBeFinanced: {
      title: "Car to be financed",
      model: "Model",
      category: "Category",
      modelYear: "Model year",
      condition: "Condition",
      engine: "Engine",
      price: "Price",
      deposit: "Deposit",
      financedAmount: "Financed amount",
      tenor: "Tenor",
    },
    attachedDocuments: {
      title: "Attached documents",
    },
    productDetails: {
      title: "Product details",
      financingPartner: "Financing partner",
      product: "Product",
      financingAgent: "Financing agent",
      monthlyInstallment: "Monthly installment",
      autoMerchant: "Auto merchant",
      financedProduct: "Financed product",
      carofiAgent: "Carofi agent",
    },
    otherDetails: {
      title: "Other details",
      customerContact: "Customer contact",
      referenceName: "Reference name",
      referenceRelation: "Reference relation",
    },
  },
  demoNavigator: {
    componentsTab: "Components",
    debugTab: "Debug",
    communityTab: "Community",
    podcastListTab: "Podcast",
  },
  demoCommunityScreen: {
    title: "Connect with the community",
    tagLine:
      "Plug in to Infinite Red's community of React Native engineers and level up your app development with us!",
    joinUsOnSlackTitle: "Join us on Slack",
    joinUsOnSlack:
      "Wish there was a place to connect with React Native engineers around the world? Join the conversation in the Infinite Red Community Slack! Our growing community is a safe space to ask questions, learn from others, and grow your network.",
    joinSlackLink: "Join the Slack Community",
    makeIgniteEvenBetterTitle: "Make Ignite even better",
    makeIgniteEvenBetter:
      "Have an idea to make Ignite even better? We're happy to hear that! We're always looking for others who want to help us build the best React Native tooling out there. Join us over on GitHub to join us in building the future of Ignite.",
    contributeToIgniteLink: "Contribute to Ignite",
    theLatestInReactNativeTitle: "The latest in React Native",
    theLatestInReactNative: "We're here to keep you current on all React Native has to offer.",
    reactNativeRadioLink: "React Native Radio",
    reactNativeNewsletterLink: "React Native Newsletter",
    reactNativeLiveLink: "React Native Live",
    chainReactConferenceLink: "Chain React Conference",
    hireUsTitle: "Hire Infinite Red for your next project",
    hireUs:
      "Whether it's running a full project or getting teams up to speed with our hands-on training, Infinite Red can help with just about any React Native project.",
    hireUsLink: "Send us a message",
  },
  demoShowroomScreen: {
    jumpStart: "Components to jump start your project!",
    lorem2Sentences:
      "Nulla cupidatat deserunt amet quis aliquip nostrud do adipisicing. Adipisicing excepteur elit laborum Lorem adipisicing do duis.",
    demoHeaderTxExample: "Yay",
    demoViaTxProp: "Via `tx` Prop",
    demoViaSpecifiedTxProp: "Via `{{prop}}Tx` Prop",
  },
  demoDebugScreen: {
    howTo: "HOW TO",
    title: "Debug",
    tagLine:
      "Congratulations, you've got a very advanced React Native app template here.  Take advantage of this boilerplate!",
    reactotron: "Send to Reactotron",
    reportBugs: "Report Bugs",
    demoList: "Demo List",
    demoPodcastList: "Demo Podcast List",
    androidReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running, run adb reverse tcp:9090 tcp:9090 from your terminal, and reload the app.",
    iosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    macosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    webReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    windowsReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
  },
  demoPodcastListScreen: {
    title: "React Native Radio episodes",
    onlyFavorites: "Only Show Favorites",
    favoriteButton: "Favorite",
    unfavoriteButton: "Unfavorite",
    accessibility: {
      cardHint:
        "Double tap to listen to the episode. Double tap and hold to {{action}} this episode.",
      switch: "Switch on to only show favorites",
      favoriteAction: "Toggle Favorite",
      favoriteIcon: "Episode not favorited",
      unfavoriteIcon: "Episode favorited",
      publishLabel: "Published {{date}}",
      durationLabel: "Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds",
    },
    noFavoritesEmptyState: {
      heading: "This looks a bit empty",
      content:
        "No favorites have been added yet. Tap the heart on an episode to add it to your favorites!",
    },
  },

  ...demoEn,
}

export default en
export type Translations = typeof en
