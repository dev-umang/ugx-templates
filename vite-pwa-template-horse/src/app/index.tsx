import { createRoot } from "react-dom/client";
import "@ant-design/v5-patch-for-react-19";
import { StrictMode } from "react";
import "./index.css";
import AppModule from "@modules/app.module";

createRoot(document.getElementById("root")!).render(
  import.meta.env.DEV ? (
    <AppModule />
  ) : (
    <StrictMode>
      <AppModule />
    </StrictMode>
  )
);
