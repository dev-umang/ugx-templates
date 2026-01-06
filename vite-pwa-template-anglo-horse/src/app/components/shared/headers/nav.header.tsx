import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Menus } from "@common/constants";
import { useTheme } from "@configs/theme";
import { common } from "@common/utils";
import TenantSelector from "../selectors/tenant.selector";

const { Header } = Layout;

const NavHeader: FC = () => {
  const { color } = useTheme();
  const path = useLocation().pathname;

  const allMenuKeys = Menus()
    ?.navbar?.flatMap((item) => {
      if (!item) return [];
      const _children = "children" in item ? (item?.children ?? []) : [];
      return _children?.map((child) => child?.key);
    })
    ?.filter((key): key is string => key !== null && typeof key === "string");

  // Check dynamic route is exists in menuKeys
  const selectedKey = allMenuKeys?.find((item) => path?.startsWith(item));

  return (
    <Header style={{ borderBottom: `thin solid ${color.border}` }}>
      <div className="grid grid-cols-[auto_1fr] overflow-auto gap-default items-center">
        <TenantSelector
          tenants={[
            {
              logoUrl:
                "https://plus.unsplash.com/premium_photo-1720885652263-17b2be207129?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              id: "tenant1",
              name: "Tenant 1",
            },
            {
              logoUrl:
                "https://plus.unsplash.com/premium_photo-1764546983103-d6f87cab1555?q=80&w=730&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              id: "tenant2",
              name: "Tenant 2",
            },
            {
              logoUrl:
                "https://images.unsplash.com/photo-1765834082631-bb4373ecafef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              id: "tenant3",
              name: "Tenant 3",
            },
          ]}
        />
        {!common.isEmptyObj([]) && (
          <Menu
            className="mx-4"
            mode="horizontal"
            items={[]}
            selectedKeys={[selectedKey ?? path]}
            triggerSubMenuAction="click"
          />
        )}
      </div>
    </Header>
  );
};

export default NavHeader;
