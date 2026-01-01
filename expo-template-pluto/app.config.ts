import {
  Environments,
  ExpoAppConfigType,
  ExpoExtraConfigType,
} from "@common/types/env.types";
import { ExpoConfig } from "@expo/config";
import dotenv from "dotenv";
import path from "path";
import { version } from "./package.json";

const APP_NAME = "My App";
const SCHEME = "my-app";
const BUNDLE_IDENTIFIER = "com.example.myapp";
const PROJECT_SLUG = "my-app";

export default (): ExpoConfig => {
  const environment = (process.env.NODE_ENV || "uat") as Environments;
  const envPath = path.resolve(__dirname, `.env.${environment}`);
  dotenv.config({ path: envPath, quiet: true });

  const iosUrlScheme = process.env.EXPO_PUBLIC_IOS_URL_SCHEME;

  // Get config based on environment
  const {
    name,
    icon,
    packageName,
    scheme,
    bundleIdentifier,
    androidGoogleFile,
    iosGoogleFile,
  } = getConfigByEnv(environment);

  return {
    name: name,
    slug: PROJECT_SLUG, // Must be consistent for all environments
    version,
    icon,
    scheme,
    userInterfaceStyle: "automatic",
    // owner: "protocolzone_private_limited",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      requireFullScreen: false,
      bundleIdentifier,
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
        CFBundleURLTypes: [
          {
            CFBundleURLSchemes: [iosUrlScheme, bundleIdentifier],
          },
        ],
      },
      associatedDomains: [`applinks:${SCHEME}.com`],
      googleServicesFile: iosGoogleFile,
    },

    android: {
      adaptiveIcon: {
        backgroundImage: icon,
        foregroundImage: icon,
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      googleServicesFile: androidGoogleFile,
      package: packageName,
      permissions: [],
    },

    web: {
      output: "static",
      favicon: "./assets/icons/favicon.png",
    },

    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/splash/splash.png",
          imageWidth: 280,
          resizeMode: "contain",
          backgroundColor: "#F7F7F7",
          dark: {
            image: "./assets/splash/splash.png",
            backgroundColor: "#1A1A1A",
          },
        },
      ],
    ],

    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },

    extra: {
      environment,
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      eas: {
        projectId: "your-eas-project-id",
      },
      iosClientId: iosUrlScheme,
      webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
      // MUST BE NAMED EXACTLY ASS "firebase" CONFIG
      firebase: {
        apiKey: process.env.FIREBASE_apiKey,
        authDomain: process.env.FIREBASE_authDomain,
        projectId: process.env.FIREBASE_projectId,
        storageBucket: process.env.FIREBASE_storageBucket,
        messagingSenderId: process.env.FIREBASE_messagingSenderId,
        appId: process.env.FIREBASE_appId,
      },
    } as ExpoExtraConfigType,
  };
};

const getConfigByEnv = (env: Environments): ExpoAppConfigType => {
  switch (env) {
    case "production": // Production config
      return {
        name: `${APP_NAME}`,
        icon: "./assets/icons/appIcon.png",
        scheme: `${SCHEME}`,
        bundleIdentifier: `${BUNDLE_IDENTIFIER}`,
        packageName: `${BUNDLE_IDENTIFIER}`,
        androidGoogleFile: "./certificates/production/google-services.json",
        iosGoogleFile: "./certificates/production/GoogleService-Info.plist",
      };

    case "uat": // UAT config
      return {
        name: `${APP_NAME} UAT`,
        icon: "./assets/icons/appIconUAT.png",
        scheme: `${SCHEME}`,
        bundleIdentifier: `${BUNDLE_IDENTIFIER}`,
        packageName: `${BUNDLE_IDENTIFIER}`,
        androidGoogleFile: "./certificates/uat/google-services.json",
        iosGoogleFile: "./certificates/uat/GoogleService-Info.plist",
      };

    default: // Development config
      return {
        name: `${APP_NAME} Dev`,
        icon: "./assets/icons/appIconDEV.png",
        scheme: `${SCHEME}`,
        bundleIdentifier: `${BUNDLE_IDENTIFIER}`,
        packageName: `${BUNDLE_IDENTIFIER}`,
        androidGoogleFile: "./certificates/development/google-services.json",
        iosGoogleFile: "./certificates/development/GoogleService-Info.plist",
      };
  }
};
