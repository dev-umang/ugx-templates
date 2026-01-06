import { FC, ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Space } from "antd";
import { Path } from "@configs/routes";
import { useTheme } from "@configs/theme";
import { LeftOutlined } from "@ant-design/icons";

type Props = {
  title?: ReactNode;
  extra?: ReactNode;
  backTo?: Path | "pop";
};

const Title: FC<Props> = (p) => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const BackButton = () => {
    const Component = (
      <Button
        type="text"
        icon={
          <LeftOutlined
            style={{
              strokeWidth: 60,
              stroke: darkMode ? "white" : "black",
            }}
          />
        }
      />
    );
    if (!p.backTo) return null;
    if (p.backTo === "pop")
      return (
        <span onClick={() => navigate(-1)} className="inline-block">
          {Component}
        </span>
      );
    return <Link to={p.backTo}>{Component}</Link>;
  };

  return (
    <div className="flex justify-between">
      <Space>
        {BackButton()}
        {p.title}
      </Space>
      <div>{p.extra}</div>
    </div>
  );
};

export default Title;
