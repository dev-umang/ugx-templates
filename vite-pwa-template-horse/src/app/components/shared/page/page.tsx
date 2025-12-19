import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Popover, Spin } from "antd";
import { Path } from "@configs/routes";
import { useTheme } from "@configs/theme";
import {
  InfoCircleOutlined,
  LeftOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

type Props = {
  children?: ReactNode;
  title?: ReactNode;
  extra?: ReactNode;
  info?: ReactNode;
  backTo?: Path;
  loading?: boolean;
  onRefresh?: () => void;
};

const Page: FC<Props> = (p) => {
  const { darkMode } = useTheme();
  const nav = useNavigate();
  // Handle back route
  const onHandleBack = () => {
    if (p.backTo === "/pop") nav(-1);
    nav(p.backTo as string);
  };
  if (!p.title) return p.children;
  return (
    <Spin spinning={p.loading ? true : false}>
      <Card size="small">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {p.backTo && (
              <Button
                type="text"
                onClick={onHandleBack}
                icon={
                  <LeftOutlined
                    style={{
                      strokeWidth: 60,
                      stroke: darkMode ? "white" : "black",
                    }}
                  />
                }
              />
            )}
            <h3 className="text-lg font-semibold">
              {p.title}{" "}
              {p.info && (
                <Popover
                  trigger={["click"]}
                  content={p.info}
                  autoAdjustOverflow
                  destroyOnHidden
                  placement="bottomRight"
                  styles={{ body: { maxWidth: 480 } }}
                >
                  <Button icon={<InfoCircleOutlined />} type="text" />
                </Popover>
              )}
              {p.onRefresh && (
                <Button
                  icon={<ReloadOutlined />}
                  onClick={p.onRefresh}
                  title="Refresh"
                />
              )}
            </h3>
          </div>
          <div>{p.extra}</div>
        </div>
      </Card>
      <div className="mt-default">{p.children}</div>
    </Spin>
  );
};

export default Page;
