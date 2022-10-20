const { resolve } = require("path");
const CracoLessPlugin = require("craco-less");
const cracoModuleFederation = require("craco-module-federation");
const { name } = require("./package");
const env = process.env.NODE_ENV || "production";
const isProd = env === "production";
const isSingle = process.env.REACT_APP_MODE == "single";
/** @type {import('@craco/craco').CracoConfig} */
const config = {
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              primary: "#1677FF",
              "primary-color": "#1677FF",
              "text-color": "rgba(0, 0, 0, 0.65)",
              "table-header-color": "rgba(0, 0, 0, 0.85)",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],

  webpack: {
    configure: (webpackConfig, { paths }) => {
      webpackConfig.output.publicPath = "auto";

      return webpackConfig;
    },
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },

  devServer: {
    open: false,
  },
};

module.exports = config;
