import { type FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import Package from "../../../../package.json";
import { MainHeader, NavHeader } from "@components/shared";

const { Content } = Layout;

const MainLayout: FC = () => {
  const {
    token: { colorTextSecondary, colorBgContainer, colorBorderSecondary },
  } = theme.useToken();

  return (
    <Layout className="h-screen overflow-auto">
      <MainHeader />
      <NavHeader />
      <Layout>
        <Content
          style={{ maxHeight: "calc(100vh - 56.8px)", overflow: "auto" }}
          className="scrollbar-thin scrollbar-thumb-neutral-200 hover:scrollbar-thumb-neutral-300 scrollbar-track-white dark:scrollbar-thumb-neutral-800 dark:scrollbar-track-black dark:hover:scrollbar-thumb-neutral-700 p-default"
        >
          <Outlet />
        </Content>
      </Layout>
      <Footer
        className="px-0 py-0 text-xs   border-t cursor-pointer"
        style={{
          color: colorTextSecondary,
          background: colorBgContainer,
          borderColor: colorBorderSecondary,
        }}
      >
        <span className="text-muted">v{Package?.version}</span>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
