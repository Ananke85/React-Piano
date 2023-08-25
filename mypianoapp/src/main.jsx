import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RecordProvider } from "./components/RecordContext/RecordContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecordProvider>
      <App />
    </RecordProvider>
  </React.StrictMode>
);
