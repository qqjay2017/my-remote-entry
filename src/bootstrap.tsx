import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as antd from "antd";
import dayjs from "dayjs";
import _ from "lodash-es";
import ahooks from "ahooks";
import * as procomponents from "@ant-design/pro-components";
import * as reactRouterDom from "react-router-dom";

console.log(antd, dayjs, _, ahooks, procomponents, reactRouterDom);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
