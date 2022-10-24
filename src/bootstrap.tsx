import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as antd from "antd";
import dayjs from "dayjs";
import _ from "lodash-es";
import ahooks from "ahooks";
import * as procomponents from "@ant-design/pro-components";
import * as reactRouterDom from "react-router-dom";
import swiper from "swiper";

import Decimal from "decimal.js";
import BroadcastChannel from "broadcast-channel";
import nanoid from "nanoid";
import qrcodeReact from "qrcode.react";
console.log(antd, dayjs, ahooks, _, procomponents, reactRouterDom);
console.log(swiper);
console.log(Decimal, "Decimal");
console.log(BroadcastChannel, "BroadcastChannel");
console.log(nanoid, "nanoid");
console.log(qrcodeReact, "nanoid");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
