import webpack from "webpack";
import { BuildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, buildPaths } from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
    const paths: buildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
        locales: path.resolve(__dirname, "public", "locales"),
        buildLocales: path.resolve(__dirname, "build", "locales")
    };
    const mode = env.mode || "development";
    const port = env.port || 3000;
    const isDev = mode === "development";
    const config: webpack.Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        port: port,
    });

    return config;
};
