import webpack from "webpack";
import { buildOptions } from "./types/config";  
import { buildCssLoader } from "./loadres/BuildCssLoader";

export function buildLoaders({ isDev }: buildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };
    
    const cssLoader = buildCssLoader(isDev)
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    return [typescriptLoader, cssLoader, svgLoader, fileLoader];
}
