import demoAr from "./demo-ar"
import { Translations } from "./en"

const ar: Translations = {
  common: {
    title: "كاروفاي",
    slogan: "عربية يعني",
    ok: "نعم",
    cancel: "حذف",
    back: "خلف",
    logOut: "تسجيل خروج",
    english: "English",
    arabic: "العربية",
    apply: "تطبيق",
    updateStatus: "تغيير الحالة",
    transfer: "تحويل الملف",
    shareWithCount: "مشاركة {{count}} ملفات",
  },
  welcomeScreen: {
    postscript:
      "ربما لا يكون هذا هو الشكل الذي يبدو عليه تطبيقك مالم يمنحك المصمم هذه الشاشات وشحنها في هذه الحالة",
    readyForLaunch: "تطبيقك تقريبا جاهز للتشغيل",
    exciting: "اوه هذا مثير",
    letsGo: "لنذهب",
  },
  errorScreen: {
    title: "هناك خطأ ما",
    friendlySubtitle:
      "هذه هي الشاشة التي سيشاهدها المستخدمون في عملية الانتاج عند حدوث خطأ. سترغب في تخصيص هذه الرسالة ( الموجودة في 'ts.en/i18n/app') وربما التخطيط ايضاً ('app/screens/ErrorScreen'). إذا كنت تريد إزالة هذا بالكامل، تحقق من 'app/app.tsp' من اجل عنصر <ErrorBoundary>.",
    reset: "اعادة تعيين التطبيق",
    traceTitle: "خطأ من مجموعة %{name}",
  },
  emptyStateComponent: {
    generic: {
      heading: "فارغة جداً....حزين",
      content: "لا توجد بيانات حتى الآن. حاول النقر فوق الزر لتحديث التطبيق او اعادة تحميله.",
      button: "لنحاول هذا مرّة أخرى",
    },
  },
  actionSheetComponent: {
    title: "لغة الأبلكيشن",
  },
  tagComponent: {
    awaiting: "في الإنتظار",
    approved: "تم الموافقة",
    rejected: "مرفوض",
    required: "مطلوب التحديث",
  },
  notificationCardComponent: {
    text: "{{count}} طلبات جديدة",
  },
  applicationCardComponent: {
    updated: "تم التحديث: {{date}}",
  },
  applicationDetailsCardComponent: {
    applicationNo: "رقم الطلب",
    applicationDate: "تاريخ التقديم: ",
    addComment: "يرجى اضافة المزيد من البيانات",
    allUpdates: "كل التحديثات",
  },

  errors: {
    invalidEmail: "عنوان البريد الالكتروني غير صالح",
    invalidPassword: "كلمة السر اللي كتبتها مش صح، تأكد منها وحاول مرة تانية",
    invalidPhoneVerificationCode: "كود التفعيل غير صالح",
  },
  AuthNavigator: {
    componentsTab: "عناصر",
    debugTab: "تصحيح",
    communityTab: "واصل اجتماعي",
    podcastListTab: "البودكاست",
  },
  loginScreen: {
    logInByPhone: "دخول برقم الموبايل",
    loginUsingBio: "دخول بالبصمة أو Face ID",
    privacyPolicy: "بتسجيل الدخول أنت توافق على الشروط والأحكام",
  },
  loginPhoneScreen: {
    title: "تسجيل دخول",
    phoneFieldLabel: "رقم الموبايل",
    passwordFieldLabel: "كلمة السر",
    phoneFieldPlaceholder: "01xxxxxxxxx",
    passwordFieldPlaceholder: "**********",
    cantLogin: "لا تستطيع الدخول؟",
    callUs: "إتصل بنا",
    loginAction: "",
  },
  phoneVerificationScreen: {
    title: "أدخل رمز التفعيل!",
    description: "بعتنالك رمز تفعيل، تأكد من وجود شبكة، وهتلاقيه في رسائل SMS",
    codeFieldLabel: "رمز التفعيل",
    codeFieldPlaceholder: "000000",
    resend: "أعد الإرسال",
    codeFailed: "لم تستلم رمز تفعيل؟",
  },
  biometricScreen: {
    title: "تفعيل الدخول بالبصمة أو Face ID",
    description:
      "مع تسجيل الدخول باستخدام بالبصمة أو Face ID، لن تحتاج إلى إدخال كلمة المرور في كل مرة. يساعد هذا أيضًا في جعل التطبيق أكثر أمانًا.",
    activateNow: "تفعيل الان",
    later: "لاحقاً",
  },
  biometricPasswordScreen: {
    title: "اكتب رمز دخول جديد",
    description: "رمز الدخول هايساعدك تسجل دخول في حالة عدم القدرة على الدخول بالبصمة أو Face ID",
  },
  biometricPasswordConfirmScreen: {
    title: "اكتب الرمز مرة اخرى",
    description: "رمز الدخول هايساعدك تسجل دخول في حالة عدم القدرة على الدخول بالبصمة أو Face ID",
  },
  biometricPasswordLoginScreen: {
    title: "رمز الدخول",
    description: "أدخل رمز الدخول المكون من 6 أرقام",
    forgotPassword: "نسيت رمز الدخول؟",
  },
  financeHomeScreen: {
    searchPlaceholder: "إبحث برقم الطلب أو اسم العميل",
    applications: "الطلبات",
    sort: "ترتيب",
    sortBy: "ترتيب حسب",
    sortByStatus: "الحالة",
    sortById: "رقم الطلب",
    sortByNewestDate: "التاريخ الأحدث فالأقدم",
    sortByOldestDate: "التاريخ الأقدم فالأحدث",
    sortByAlpha: "ترتيب ابجدي",
  },
  financeApplicationDetailsScreen: {
    title: "بيانات الطلب",
    customerDetails: {
      title: "بيانات العميل",
      customerName: "إسم العميل",
      nationalId: "الرقم القومي",
      mobileNo: "رقم موبايل",
      residenceAddressOnTheId: "عنوان السكن بالبطاقة",
    },
    customerVerificationData: {
      title: "بيانات التحقق من العميل",
      residenceType: "نوع السكن",
      jobType: "نوع الوظيفة",
      employerName: "اسم جهة العمل",
      workplaceAddress: "عنوان جهة العمل",
      hrLetter: "مفردات مرتب",
      monthlyIncome: "الدخل الشهري",
      bankStatement: "كشف حساب بنكي",
      maritalStatus: "الحالة الإجتماعية",
    },
    carToBeFinanced: {
      title: "السيارة المطلوب تمويلها",
      model: "موديل السيارة",
      category: "فئة السيارة",
      modelYear: "سنة الموديل",
      condition: "حالة السيارة",
      engine: "سعة المحرك",
      price: "سعر السيارة",
      deposit: "المقدم",
      financedAmount: "مبلغ التمويل",
      tenor: "مدة التقسيط",
    },
    attachedDocuments: {
      title: "المستندات المرفقة",
    },
    productDetails: {
      title: "بيانات طلب التمويل",
      financingPartner: "جهة التمويل",
      product: "نوع التمويل",
      financingAgent: "مسئول جهة التمويل",
      monthlyInstallment: "القسط الشهري",
      autoMerchant: "جهة البيع",
      financedProduct: "المنتج المطلوب تمويله",
      carofiAgent: "عميل كاروفاي",
    },
    otherDetails: {
      title: "بيانات آخرى",
      customerContact: "تواصل مع العميل",
      referenceName: "إسم الجهة المرجعية",
      referenceRelation: "علاقة الجهة المرجعية",
    },
  },
  demoNavigator: {
    componentsTab: "عناصر",
    debugTab: "تصحيح",
    communityTab: "واصل اجتماعي",
    podcastListTab: "البودكاست",
  },
  demoCommunityScreen: {
    title: "تواصل مع المجتمع",
    tagLine:
      "قم بالتوصيل لمنتدى Infinite Red الذي يضم تفاعل المهندسين المحلّيين ورفع مستوى تطوير تطبيقك معنا",
    joinUsOnSlackTitle: "انضم الينا على Slack",
    joinUsOnSlack:
      "هل ترغب في وجود مكان للتواصل مع مهندسي React Native حول العالم؟ الانضمام الى المحادثة في سلاك المجتمع الاحمر اللانهائي! مجتمعناالمتنامي هو مساحةآمنة لطرح الاسئلة والتعلم من الآخرين وتنمية شبكتك.",
    joinSlackLink: "انضم الي مجتمع Slack",
    makeIgniteEvenBetterTitle: "اجعل Ignite افضل",
    makeIgniteEvenBetter:
      "هل لديك فكرة لجعل Ignite افضل؟ نحن سعداء لسماع ذلك! نحن نبحث دائماً عن الآخرين الذين يرغبون في مساعدتنا في بناء افضل الادوات المحلية التفاعلية المتوفرة هناك. انضم الينا عبر GitHub للانضمام الينا في بناء مستقبل Ignite",
    contributeToIgniteLink: "ساهم في Ignite",
    theLatestInReactNativeTitle: "الاحدث في React Native",
    theLatestInReactNative: "نخن هنا لنبقيك محدثاً على جميع React Native التي تعرضها",
    reactNativeRadioLink: "راديو React Native",
    reactNativeNewsletterLink: "نشرة اخبار React Native",
    reactNativeLiveLink: "مباشر React Native",
    chainReactConferenceLink: "مؤتمر Chain React",
    hireUsTitle: "قم بتوظيف Infinite Red لمشروعك القادم",
    hireUs:
      "سواء كان الامر يتعلّق بتشغيل مشروع كامل او اعداد الفرق بسرعة من خلال التدريب العلمي لدينا، يمكن ان يساعد Infinite Red اللامتناهي في اي مشروع محلي يتفاعل معه.",
    hireUsLink: "ارسل لنا رسالة",
  },
  demoShowroomScreen: {
    jumpStart: "مكونات او عناصر لبدء مشروعك",
    lorem2Sentences:
      "عامل الناس بأخلاقك لا بأخلاقهم. عامل الناس بأخلاقك لا بأخلاقهم. عامل الناس بأخلاقك لا بأخلاقهم",
    demoHeaderTxExample: "ياي",
    demoViaTxProp: "عبر `tx` Prop",
    demoViaSpecifiedTxProp: "Prop `{{prop}}Tx` عبر",
  },
  demoDebugScreen: {
    howTo: "كيف",
    title: "التصحيح",
    tagLine: "مبروك، لديك نموذج اصلي متقدم للغاية للتفاعل هنا. الاستفادة من هذه النمذجة",
    reactotron: "Reactotron ارسل إلى",
    reportBugs: "الابلاغ عن اخطاء",
    demoList: "قائمة تجريبية",
    demoPodcastList: "قائمة البودكاست التجريبي",
    androidReactotronHint:
      "اذا لم ينجح ذللك، فتأكد من تشغيل تطبيق الحاسوب الخاص Reactotron، وقم بتشغيل عكس adb tcp:9090 \ntcp:9090 من جهازك الطرفي ، واعد تحميل التطبيق",
    iosReactotronHint:
      "اذا لم ينجح ذلك، فتأكد من تشغيل تطبيق الحاسوب الخاص ب Reactotron وأعد تحميل التطبيق",
    macosReactotronHint: "اذا لم ينجح ذلك، فتأكد من تشغيل الحاسوب ب Reactotron وأعد تحميل التطبيق",
    webReactotronHint: "اذا لم ينجح ذلك، فتأكد من تشغيل الحاسوب ب Reactotron وأعد تحميل التطبيق",
    windowsReactotronHint:
      "اذا لم ينجح ذلك، فتأكد من تشغيل الحاسوب ب Reactotron وأعد تحميل التطبيق",
  },
  demoPodcastListScreen: {
    title: "حلقات إذاعية React Native",
    onlyFavorites: "المفضلة فقط",
    favoriteButton: "المفضل",
    unfavoriteButton: "غير مفضل",
    accessibility: {
      cardHint: "انقر مرّتين للاستماع على الحلقة. انقر مرّتين وانتظر لتفعيل {{action}} هذه الحلقة.",
      switch: "قم بالتبديل لاظهار المفضّلة فقط.",
      favoriteAction: "تبديل المفضلة",
      favoriteIcon: "الحلقة الغير مفضّلة",
      unfavoriteIcon: "الحلقة المفضّلة",
      publishLabel: "نشرت {{date}}",
      durationLabel: "المدّة: {{hours}} ساعات {{minutes}} دقائق {{seconds}} ثواني",
    },
    noFavoritesEmptyState: {
      heading: "هذا يبدو فارغاً بعض الشيء.",
      content:
        "لم تتم اضافة اي مفضلات حتى الان. اضغط على القلب في إحدى الحلقات لإضافته الى المفضلة.",
    },
  },
  ...demoAr,
}

export default ar
