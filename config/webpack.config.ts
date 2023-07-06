/* eslint-disable global-require */
import path from "path";
import { DllReferencePlugin, Configuration } from "webpack";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import AddAssetHtmlPlugin from "add-asset-html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import Dotenv from "dotenv-webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { paths, webpackBase } from "./globals";

const configuration: Configuration = {
  dependencies: ["vendor", "libraries"],
  output: {
    path: paths.output,
    filename: "js/[name].[contenthash].js",
    assetModuleFilename: "assets/images/[hash][ext][query]",
    chunkFilename: "js/[id].[chunkhash].js",
    publicPath: "/star-iq/"
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    moduleIds: "named"
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        type: "asset/resource"
      },
      {
        test: /\.mp4$/,
        type: "asset/resource",
        generator: {
          filename: "assets/videos/[name][ext][query]"
        }
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/icons/[hash][ext][query]"
        }
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "application/font-woff",
            name: "[name].[contenthash].[ext]",
            outputPath: "./assets/fonts/",
            esModule: false
          }
        }
      },
      {
        test: /\.ttf$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "application/x-font-truetype",
            name: "[name].[contenthash].[ext]",
            outputPath: "./assets/fonts/",
            esModule: false
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        "!js/**/*dll.js",
        "!*-manifest.json"
      ]
    }),
    new DllReferencePlugin({
      context: paths.root,
      manifest: path.join(paths.output, "vendor-manifest.json")
    }),
    new DllReferencePlugin({
      context: paths.root,
      manifest: path.join(paths.output, "libraries-manifest.json")
    }),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "styles/[id].css"
    }),
    new HtmlWebpackPlugin({
      title: "SPECIAL REPORT: Elon Musk's Latest Investment Has The Government And Big Banks Terrified",
      favicon: "./public/favicon.ico",
      meta: {
        "theme-color": "#FFFFFF"
      },
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(paths.output, "./**/*.dll.js"),
      outputPath: "js",
      publicPath: "/star-iq/js/"
    })
  ]
};

export default merge(webpackBase, configuration);
