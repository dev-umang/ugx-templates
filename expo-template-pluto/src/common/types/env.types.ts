export type Environments = "development" | "uat" | "production";

export type ExpoExtraConfigType = {
  apiUrl: string;
  environment: Environments;
  iosClientId: string;
  webClientId: string;
  eas: {
    projectId: string;
  };
};

export type EnvUtilType = Omit<ExpoExtraConfigType, "environment" | "eas"> & {
  development: boolean;
  isExpoGo: boolean;
  version: string;
};

export type ExpoAppConfigType = {
  name: string;
  bundleIdentifier: string;
  packageName: string;
  scheme: string;
  icon: string;
  androidGoogleFile?: string;
  iosGoogleFile?: string;
};

interface EnvVariables {
  EXPO_PUBLIC_API_URL: string;
  // Firebase
  FIREBASE_apiKey: string;
  FIREBASE_authDomain: string;
  FIREBASE_projectId: string;
  FIREBASE_storageBucket: string;
  FIREBASE_messagingSenderId: string;
  FIREBASE_appId: string;

  EXPO_PUBLIC_NODE_PREFIX: string;
  EXPO_PUBLIC_APP_VERSION: string;
  // Google sign in keys
  EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID: string;
  EXPO_PUBLIC_IOS_URL_SCHEME: string;
  // Platform bundle identifiers
  ANDROID_PACKAGE_NAME: string;
  IOS_BUNDLE_ID: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvVariables {}
  }
}
