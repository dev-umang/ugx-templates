/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

interface ImportMetaEnv {
  readonly VITE_PORT: string;
  // * Firebase Config Variables
  readonly VITE_apiKey: string;
  readonly VITE_authDomain: string;
  readonly VITE_databaseURL: string;
  readonly VITE_projectId: string;
  readonly VITE_storageBucket: string;
  readonly VITE_messagingSenderId: string;
  readonly VITE_appId: string;
  readonly VITE_measurementId: string;
  // * Database Config Variables
  readonly VITE_tenantId: string;
  readonly VITE_ADMIN_FIRESTORE_ID: string;
  readonly VITE_prefilledUserCred: string; // Separated by comma (,) in the format: email,password. Only prefills login form in DEVELOPMENT build only.
  // * Backend Server Config Variables
  readonly VITE_CRM_SERVER: string;
  readonly VITE_ADMIN_SERVER: string;
  readonly VITE_LANGUAGE_SERVER: string;
  readonly VITE_PAYMENT_SERVER: string;
  readonly VITE_WAGER_SERVER: string;
  readonly VITE_GRE_SERVER: string;
  readonly VITE_ELASTIC_SERVER: string;
  readonly VITE_TRANSACTION_SERVER: string;
  readonly VITE_PLAYER_SERVER: string;
  readonly VITE_TENANT_SERVER: string;
  readonly VITE_USER_SERVER: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
