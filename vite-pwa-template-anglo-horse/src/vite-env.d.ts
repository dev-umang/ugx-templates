/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

import { EnvVars } from "@common/types/env.types";

interface ImportMetaEnv extends EnvVars {
  VITE_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
