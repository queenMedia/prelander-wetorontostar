import path from "path";
import { DllPlugin, Configuration } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { paths } from "./globals";

const configuration: Configuration = {
  entry: {
    vendor: [
      "react",
      "react-dom",
      "react-helmet",
      "react-i18next",
      "react-router-dom",
      "formik"
    ],
    libraries: [
      "i18next",
      "i18next-browser-languagedetector",
      "i18next-http-backend",
      "sweetalert",
      "yup"
    ]
  },
  output: {
    filename: "js/[name].[contenthash].dll.js",
    path: paths.output,
    library: "[name]_[fullhash]"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DllPlugin({
      context: paths.root,
      name: "[name]_[fullhash]",
      path: path.join(paths.output, "[name]-manifest.json")
    })
  ]
};

export default configuration;
