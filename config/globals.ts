import path from "path";
import { Configuration } from "webpack";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

const rootPath = path.resolve(__dirname, "../");
const distPath = path.resolve(rootPath, "dist");

export const paths = {
  root: rootPath,
  output: distPath,
  src: path.resolve(rootPath, "src"),
  tsconfig: path.join(rootPath, "tsconfig.json"),
  tsconfigEslint: path.join(rootPath, "tsconfig.eslint.json"),
  tsconfigReact: path.join(rootPath, "tsconfig.react.json"),
  locales: path.resolve(distPath, "locales")
};

export const webpackBase: Configuration = {
  entry: path.resolve(paths.src, "index.tsx"),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".svg", ".png", ".jpg", ".webp"],
    plugins: [new TsconfigPathsPlugin({
      configFile: paths.tsconfig,
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    })]
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            onlyCompileBundledFiles: true,
            configFile: paths.tsconfigReact
          }
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/common/locales",
          to: paths.locales
        }
      ]
    })
  ]
};
