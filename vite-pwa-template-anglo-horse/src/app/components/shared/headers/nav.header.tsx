import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Menus } from "@common/constants";
import { useTheme } from "@configs/theme";
import { common } from "@common/utils";

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
      <div className="grid grid-cols-[auto_1fr] overflow-auto gap-default items-center border-">
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
