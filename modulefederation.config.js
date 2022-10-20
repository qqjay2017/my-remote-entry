const { dependencies } = require("./package.json");

module.exports = {
  name: "remote",
  exposes: {
    "./Button": "./src/Button",
    "./style": "./src/style",
  },
  filename: "remoteEntry.js",
  shared: {
    // ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    antd: {
      requiredVersion: dependencies["antd"],
    },
    dayjs: {
      requiredVersion: dependencies["dayjs"],
    },
  },
};
