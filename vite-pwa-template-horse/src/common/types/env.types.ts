export type EnvVars = {
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
  // * Backend Server Config Variables
  readonly VITE_SERVER: string;
};
