import React from "react";
import ReactDOM from "react-dom";

import "@renderer/style.scss";

import { Main } from "@renderer/Main";

ReactDOM.render(<Main />, document.getElementById("app"));

// works on 'webpack-dev-server' with '--hot' enabled
if (module.hot) {
  module.hot.accept("./Main", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Component = require("./Main").Main;
    ReactDOM.render(<Component />, document.getElementById("app"));
  });
}
