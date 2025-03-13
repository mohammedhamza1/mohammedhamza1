// import { ExpoConfig, ConfigContext } from "@expo/config"

// /**
//  * Use ts-node here so we can use TypeScript for our Config Plugins
//  * and not have to compile them to JavaScript
//  */
// require("ts-node/register")

// /**
//  * @param config ExpoConfig coming from the static config app.json if it exists
//  *
//  * You can read more about Expo's Configuration Resolution Rules here:
//  * https://docs.expo.dev/workflow/configuration/#configuration-resolution-rules
//  */
// module.exports = ({ config }: ConfigContext): Partial<ExpoConfig> => {
//   const existingPlugins = config.plugins ?? []

//   return {
//     ...config,
//     plugins: [...existingPlugins, require("./plugins/withSplashScreen").withSplashScreen],
//   }
// }

import { ExpoConfig, ConfigContext } from "@expo/config"

/**
 * Use ts-node here so we can use TypeScript for our Config Plugins
 * and not have to compile them to JavaScript
 */
require("ts-node/register")

const IS_DEV = process.env.APP_VARIANT === "development"
const IS_PREVIEW = process.env.APP_VARIANT === "preview"
const IS_STAGE = process.env.APP_VARIANT === "stage"
const IS_PROD = process.env.APP_VARIANT === "prod"

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "app.carofi.partner.dev"
  }

  if (IS_PREVIEW) {
    return "app.carofi.partner.preview"
  }
  if (IS_STAGE) {
    return "app.carofi.partner.stage"
  }
  return "app.carofi.partner"
}

const getAppName = () => {
  if (IS_DEV) {
    return "Carofi Partners (Dev)"
  }

  if (IS_PREVIEW) {
    return "Carofi Partners (Preview)"
  }
  if (IS_STAGE) {
    return "Carofi Partners STG"
  }

  return "Carofi Partners"
}

/**
 * @param config ExpoConfig coming from the static config app.json if it exists
 *
 * You can read more about Expo's Configuration Resolution Rules here:
 * https://docs.expo.dev/workflow/configuration/#configuration-resolution-rules
 */
module.exports = ({ config }: ConfigContext): Partial<ExpoConfig> => {
  // console.log("config", config)
  const existingPlugins = config.plugins ?? []
  const existingExpoAndroid = config.android ?? {}
  const existingExpoIos = config.ios ?? {}

  return {
    ...config,
    ...{ displayName: getAppName() },
    android: { ...existingExpoAndroid, package: getUniqueIdentifier() },
    ios: { ...existingExpoIos, bundleIdentifier: getUniqueIdentifier() },
    plugins: [...existingPlugins, require("./plugins/withSplashScreen").withSplashScreen],
  }
}
