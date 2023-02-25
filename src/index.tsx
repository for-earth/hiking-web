import React from "react";
import ReactDOM from "react-dom/client";

import "normalize.css";
import "@seed-design/stylesheet/global.css";
import "@stackflow/plugin-basic-ui/index.css";
import "./styles";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
