export type buildMode = "production" | "development" | "none";
export interface buildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
}

export interface BuildEnv {
  mode: buildMode;
  port: number;
}

export interface buildOptions {
  mode: buildMode;
  paths: buildPaths;
  isDev: boolean;
  port: number;
}
