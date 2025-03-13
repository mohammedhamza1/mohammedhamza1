// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"
import {
  SpaceGrotesk_300Light as spaceGroteskLight,
  SpaceGrotesk_400Regular as spaceGroteskRegular,
  SpaceGrotesk_500Medium as spaceGroteskMedium,
  SpaceGrotesk_600SemiBold as spaceGroteskSemiBold,
  SpaceGrotesk_700Bold as spaceGroteskBold,
} from "@expo-google-fonts/space-grotesk"

export const customFontsToLoad = {
  "SomarSans-Black": require("../../assets/fonts/somar-sans/Standard/SomarSans-Black.otf"),
  "SomarSans-Bold": require("../../assets/fonts/somar-sans/Standard/SomarSans-Bold.otf"),
  "SomarSans-ExtraBold": require("../../assets/fonts/somar-sans/Standard/SomarSans-ExtraBold.otf"),
  "SomarSans-ExtraLight": require("../../assets/fonts/somar-sans/Standard/SomarSans-ExtraLight.otf"),
  "SomarSans-Light": require("../../assets/fonts/somar-sans/Standard/SomarSans-Light.otf"),
  "SomarSans-Medium": require("../../assets/fonts/somar-sans/Standard/SomarSans-Medium.otf"),
  "SomarSans-Regular": require("../../assets/fonts/somar-sans/Standard/SomarSans-Regular.otf"),
  "SomarSans-SemiBold": require("../../assets/fonts/somar-sans/Standard/SomarSans-SemiBold.otf"),
  spaceGroteskLight,
  spaceGroteskRegular,
  spaceGroteskMedium,
  spaceGroteskSemiBold,
  spaceGroteskBold,
}

const fonts = {
  somarSans: {
    black: "SomarSans-Black",
    bold: "SomarSans-Bold",
    extraBold: "SomarSans-ExtraBold",
    extraLight: "SomarSans-ExtraLight",
    light: "SomarSans-Light",
    medium: "SomarSans-Medium",
    normal: "SomarSans-Regular",
    semiBold: "SomarSans-SemiBold",
  },
  spaceGrotesk: {
    // Cross-platform Google font.
    light: "spaceGroteskLight",
    normal: "spaceGroteskRegular",
    medium: "spaceGroteskMedium",
    semiBold: "spaceGroteskSemiBold",
    bold: "spaceGroteskBold",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.somarSans,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}
