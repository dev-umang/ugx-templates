import { type FC } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { PWABadge } from "@configs/pwa";
import { AppRoutes } from "@configs/routes";
import { ThemeProvider } from "@configs/theme";

const AppModule: FC = () => (
  <ThemeProvider>
    {/* <PWABadge /> */}
    <Toaster toastOptions={{ position: "bottom-right", duration: 4000 }} />
    <RouterProvider router={createBrowserRouter(AppRoutes)} />
  </ThemeProvider>
);

export default AppModule;
