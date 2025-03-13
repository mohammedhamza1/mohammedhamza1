import { I18nManager } from "react-native"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import RNRestart from "react-native-restart"
import { resetRoot } from "@/navigators/navigationUtilities"
import "intl-pluralrules"
// if English isn't your default language, move Translations to the appropriate language file.
import en, { Translations } from "./en"
import ar from "./ar"
import ko from "./ko"
import es from "./es"
import fr from "./fr"
import ja from "./ja"
import hi from "./hi"
import { saveString, loadString } from "@/utils/storage"

const resources = { ar, en, ko, es, fr, ja, hi }
export const enum SupportedLocales {
  AR = "ar",
  EN = "en",
}
const langStorageKey = "appLanguage"
const savedLanguage = loadString(langStorageKey) ?? SupportedLocales.AR

export let isRTL = savedLanguage === SupportedLocales.AR

const applyRTL = (isApplied: boolean) => {
  I18nManager.forceRTL(isApplied)
  isRTL = isApplied
}

export const changeAppLanguage = async (language: string) => {
  await i18n.changeLanguage(language)
  saveString(langStorageKey, language)
  applyRTL(language === SupportedLocales.AR)
  resetRoot({ index: 0, routes: [{ name: "Auth" }] })
  RNRestart.Restart()
}

export const initI18n = async () => {
  i18n.use(initReactI18next)
  const savedLanguage = loadString(langStorageKey) ?? "ar"

  await i18n.init({
    resources,
    lng: savedLanguage,
    fallbackLng: SupportedLocales.AR,
    interpolation: {
      escapeValue: false,
    },
  })
  if (savedLanguage === SupportedLocales.AR) {
    // I18nManager.isRTL not working on first launch so this is a workaround
    !I18nManager.isRTL && changeAppLanguage(SupportedLocales.AR)
  }
  return i18n
}

/**
 * Builds up valid keypaths for translations.
 */

export type TxKeyPath = RecursiveKeyOf<Translations>

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`, true>
}[keyof TObj & (string | number)]

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`, false>
}[keyof TObj & (string | number)]

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string,
  IsFirstLevel extends boolean,
> = TValue extends any[]
  ? Text
  : TValue extends object
    ? IsFirstLevel extends true
      ? Text | `${Text}:${RecursiveKeyOfInner<TValue>}`
      : Text | `${Text}.${RecursiveKeyOfInner<TValue>}`
    : Text
