const { dependencies } = require("./package.json");

module.exports = {
  name: "remote",
  exposes: {
    "./Button": "./src/Button",
    "./style": "./src/style",
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "styled-components": {
      singleton: true,
      requiredVersion: dependencies["styled-components"],
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: dependencies["react-router-dom"],
    },
    "lodash-es": {
      singleton: true,
    },
    ahooks: {
      singleton: true,
    },
    "@ant-design/pro-components": {
      singleton: true,
    },
    antd: {
      singleton: true,
      requiredVersion: dependencies["antd"],
    },
  },
};
