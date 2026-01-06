import { Fragment, useRef, useState, type FC } from "react";
import { version, name } from "../../../../../package.json";
import { Divider, Drawer, Switch, Typography } from "antd";
import { EnvVars } from "@common/types/env.types";
const ENV: Record<string, string> = {
  dev: "DEV",
  development: "DEV",
  uat: "UAT",
};

const { Text } = Typography;

const excludeKeys = ["DEV", "MODE", "BASE_URL", "PROD", "SSR"];

type Props = {
  excludeKeys?: (keyof EnvVars)[];
  secureKeys?: (keyof EnvVars)[];
};

const maskValue = (value: string) => {
  if (value.length < 5) return "*".repeat(value.length);
  const visibleLength = Math.ceil(value.length / 2);
  const maskedLength = value.length - visibleLength;
  return value.slice(0, visibleLength) + "*".repeat(maskedLength);
};

const AppInfo: FC<Props> = (p) => {
  const env = ENV[import.meta.env.MODE] || "N/A";
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(
    () => localStorage.getItem("appInfoVisible") === "true" || false
  );
  const [showBtn, setShowBtn] = useState(visible);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const text = (key: string, value: string) => {
    if (p.secureKeys && p.secureKeys.includes(key as keyof EnvVars)) {
      value = maskValue(value);
    }
    return (
      <div>
        <Text className="text-xs!" type="secondary" strong>
          {key.startsWith("VITE_") ? key.replace("VITE_", "") : key}:
        </Text>{" "}
        <Text code>{value || "N/A"}</Text>
      </div>
    );
  };

  return (
    <>
      <div
        className={`inline-block fixed z-50 ${showBtn ? "left-0" : "-left-20"} bottom-0 py-2 px-1 transition-all`}
        onMouseEnter={() => {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
          timerRef.current = setTimeout(() => setShowBtn(true), 300);
        }}
        onMouseLeave={() => {
          if (visible) return;
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
          setShowBtn(false);
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          className={`cursor-pointer  bg-slate-200 hover:bg-slate-300 transition-all dark:bg-slate-900 hover:dark:bg-slate-700  shadow-lg rounded-md px-2 py-1 text-xs font-mono text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700`}
        >
          <span title="Environment">{env}</span>{" "}
          <span title="Version">{`v${version}`}</span>
        </button>
      </div>
      <Drawer
        title={<div>App Info</div>}
        extra={
          <Switch
            checked={visible}
            onChange={() =>
              setVisible((prev) => {
                const next = !prev;
                if (!next) {
                  setShowBtn(false);
                } else {
                  setShowBtn(true);
                }
                localStorage.setItem("appInfoVisible", String(next));
                return next;
              })
            }
            checkedChildren="Visible"
            unCheckedChildren="Hidden"
          />
        }
        placement="left"
        open={open}
        onClose={() => setOpen(!open)}
      >
        {text("App Name", name)}
        {text("Version", version)}
        {text("Environment", env)}
        <Divider size="small" plain>
          Environment Variables
        </Divider>
        {Object.entries(import.meta.env).map(([key, value]) =>
          [excludeKeys, p.excludeKeys]
            .flat()
            .includes(key as keyof EnvVars) ? null : (
            <Fragment key={key}>{text(key, value)}</Fragment>
          )
        )}
      </Drawer>
    </>
  );
};

export default AppInfo;
