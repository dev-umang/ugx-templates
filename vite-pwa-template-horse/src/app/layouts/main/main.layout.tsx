import { type FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { AppInfo, MainHeader, NavHeader } from "@components/shared";

const { Content } = Layout;

const MainLayout: FC = () => {
  // const {
  //   token: { colorTextSecondary, colorBgContainer, colorBorderSecondary },
  // } = theme.useToken();

  return (
    <Layout className="h-screen overflow-auto">
      <MainHeader />
      <NavHeader />
      <Layout
        style={{ maxHeight: "calc(100vh - 56.8px)", overflow: "auto" }}
        className=""
      >
        <Content className="p-default max-w-layout mx-auto scrollbar-thin scrollbar-thumb-neutral-200 hover:scrollbar-thumb-neutral-300 scrollbar-track-white dark:scrollbar-thumb-neutral-800 dark:scrollbar-track-black dark:hover:scrollbar-thumb-neutral-700">
          <Outlet />
        </Content>
      </Layout>
      <AppInfo
        secureKeys={["VITE_databaseURL", "VITE_apiKey", "VITE_appId"]}
        excludeKeys={["VITE_PORT"]}
      />
    </Layout>
  );
};

export default MainLayout;
