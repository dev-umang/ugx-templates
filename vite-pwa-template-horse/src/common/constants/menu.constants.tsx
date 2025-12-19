import { ChevronDown, LogOut, User } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { MenuProps } from "antd";
import { Path } from "@configs/routes";
import { HomeOutlined } from "@ant-design/icons";
import { MenuItem } from "@common/types";

type MenuTypes = {
  navbar: MenuProps["items"];
  accountPopover: MenuProps["items"];
};

const m = (
  href?: Path,
  label?: ReactNode,
  icon?: ReactNode,
  children?: MenuProps["items"]
): MenuItem => ({
  key: String(href ?? Math.random()),
  label: (
    <div className="inline-flex items-center gap-default">
      {href && !children ? (
        <Link to={href} className="text-[unset]!">
          {label}
        </Link>
      ) : (
        label
      )}
      {children && <ChevronDown size={20} />}
    </div>
  ),
  icon,
  children,
  style: { padding: "8px 12px" },
});

// const sm = (href?: Path, label?: ReactNode): MenuItem => ({
//   key: href ?? Math.random(),
//   label: href ? <Link to={href}>{label}</Link> : label,
// });

export const Menus = (): MenuTypes => ({
  navbar: [m("/dashboard", "Dashboard", <HomeOutlined />, undefined)],

  accountPopover: [
    {
      ...m(
        undefined,
        <Link
          className="text-[unset]!"
          to={""}
          target="_blank"
          rel="noopener noreferrer"
        >
          Account
        </Link>,
        <User size={14} />
      ),
      key: "account",
    },

    m("/dashboard", "Dashboard", <HomeOutlined />, undefined),
    {
      ...m(
        undefined,
        <span className="text-red-500">Log Out</span>,
        <LogOut className="text-red-500" size={16} />
      ),
      key: "logout",
    },
  ],
});
