import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { AppProvider } from "@context";
import i18n from "./i18n";

import App from "./App";

import "@styles";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <AppProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </AppProvider>
  </StrictMode>
);
