import { CSSProperties, FC, ReactElement, cloneElement } from "react";
import { Avatar, Button, Dropdown } from "antd";
import { useTheme } from "@configs/theme";
import { Menus } from "@common/constants";

const ProfilePopover: FC = () => {
  const { color, token } = useTheme();

  const ProfileHeader = (
    <div className="flex items-center gap-2 p-2 pb-0">
      <Avatar
        shape="square"
        size={"large"}
        style={{ background: color.active, color: color.bodyPrimaryText }}
        className="font-bold"
      >
        {"UA"}
      </Avatar>
      <div>
        <h2 className="text-[16px]/4 font-semibold line">{"User Admin"}</h2>
        <span className="text-[12px] text-muted">useradmin@example.com</span>
      </div>
    </div>
  );

  const contentStyle: CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle: CSSProperties = {
    boxShadow: "none",
  };

  const onMenuClick = (e: { key: string }) => {
    if (e.key === "logout") {
      alert("Logout clicked");
    }
  };
  return (
    <Dropdown
      trigger={["click"]}
      menu={{
        items: Menus().accountPopover,
        onSelect: onMenuClick,
        onClick: onMenuClick,
      }}
      popupRender={(menu) => (
        <div style={contentStyle}>
          {ProfileHeader}
          {cloneElement(
            menu as ReactElement<{
              style: CSSProperties;
            }>,
            { style: menuStyle }
          )}
          {/* {VersionInfo} */}
        </div>
      )}
    >
      <Button
        shape="circle"
        size="large"
        icon={
          <Avatar size={"large"} style={{ background: color.active }}>
            {"UA"}
          </Avatar>
        }
      />
    </Dropdown>
  );
};

export default ProfilePopover;
