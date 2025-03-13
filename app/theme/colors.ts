const palette = {
  // Neutral colors
  neutral100: "#FFFFFF", // --colors-neutral-colors-white
  neutral200: "#F8F9FA", // --colors-neutral-colors-grey6
  neutral300: "#F3F4F7", // --colors-neutral-colors-grey5
  neutral400: "#DFE2E6", // --colors-neutral-colors-grey4
  neutral500: "#AAB4BD", // --colors-neutral-colors-grey3
  neutral600: "#71777D", // --colors-neutral-colors-grey2
  neutral700: "#4A5057", // --colors-neutral-colors-grey1
  neutral800: "#22252A", // --colors-neutral-colors-grey0
  neutral900: "#0F0F0F", // --colors-neutral-colors-black

  // Brand colors
  primary: "#0274A1", // --colors-primary-blue-primary-color
  primaryShade: "#628FA1", // --colors-brand-primary-shade1
  primaryLight: "#49C2F2", // --colors-brand-primarylightsaturatedshade

  // Light variations
  lightPrimary: "#E3F7FF", // --colors-primary-blue-light-primary
  lightBlue: "#F1F6F8", // --colors-primary-blue-light-blue
  lighterBlue: "#F4FCFF", // --colors-primary-blue-lighter-blue
  shadeBlue: "#EDFAFF", // --colors-brand-shadeblue

  // Brand special colors
  brandDarkBlue: "#001048", // --colors-brand-dark-blue
  brandGreenBlue: "#53F0D5", // --colors-brand-green-blue
  brandLightBlue: "#22BEFC", // --colors-brand-light-blue
  brandGrey: "#9FA8B0", // --colors-brand-grey

  // Assistive colors
  success: "#499F68", // --colors-assistive-colors-success
  warning: "#FFAF21", // --colors-assistive-colors-warning
  alert: "#D6372F", // --colors-assistive-colors-alert
  focus: "#0C5DFF", // --colors-assistive-colors-focusinputfield

  // Illustration colors
  illustrationYellowDark: "#FFBF66", // --colors-illustrations-yellow-dark-yellow
  illustrationYellowLight: "#F8D972", // --colors-illustrations-yellow-light-yellow

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  // TODO: old colors to be removed
  primary100: "#0274A1",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#499F68",
  secondary200: "#0C5DFF",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FFAF21",
  accent500: "#FFBB50",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.lightBlue,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary,
  /**
   * The inactive tinting color.
   */
  tintInactive: palette.neutral500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral500,
  /**
   * Error messages.
   */
  error: palette.alert,
  /**
   * Error Background.
   */
  errorBackground: palette.neutral500,
} as const
