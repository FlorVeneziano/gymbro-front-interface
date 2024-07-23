/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOGIN_URL: string;
  readonly VITE_BACK_LOGIN: string;
  readonly VITE_BACK_TS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
