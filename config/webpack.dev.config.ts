import "webpack-dev-server";
import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";
import ESLintPlugin from "eslint-webpack-plugin";
import { paths, webpackBase } from "./globals";
import getPort from "./scripts/usePort";

const port = getPort();

const configuration: Configuration = {
  devtool: "source-map",
  output: {
    path: paths.output,
    filename: "js/main.js",
    assetModuleFilename: "assets/images/[name][ext][query]",
    publicPath: "/canada/english/cbc-iq/"
  },
  devServer: {
    static: {
      directory: paths.output,
      publicPath: "/canada/english/cbc-iq/"
    },
    client: {
      logging: "info",
      overlay: {
        errors: true,
        warnings: false
      }
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
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
          filename: "assets/images/icons/[name][ext][query]"
        }
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "application/font-woff",
            name: "[name].[ext]",
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
            name: "[name].[ext]",
            outputPath: "./assets/fonts/",
            esModule: false
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: "./.env.development"
    }),
    new HtmlWebpackPlugin({
      title: "¡Díselo a mi brillante trasero metálico!",
      favicon: "./public/favicon-dev.svg",
      meta: {
        "theme-color": "#FFFFFF"
      },
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new ESLintPlugin({
      extensions: ["jsx", "js", "tsx", "ts"],
      fix: true
    })
  ]
};

export default merge(webpackBase, configuration);
