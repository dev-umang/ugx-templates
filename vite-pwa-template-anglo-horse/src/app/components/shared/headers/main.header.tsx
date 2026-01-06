import { Sun } from "lucide-react";
import { type FC } from "react";
import { Button, Layout, Space } from "antd";
import { useTheme } from "@configs/theme";
import { ProfilePopover, TimeInfo } from "..";

const { Header } = Layout;

const MainHeader: FC = () => {
  const { toggleDarkMode } = useTheme();

  const SecondPart = (
    <Space>
      <TimeInfo />
      <Button
        onClick={toggleDarkMode}
        shape="circle"
        icon={<Sun size={16} />}
        type="text"
        size="large"
      />
      <ProfilePopover />
    </Space>
  );

  return (
    <Header>
      <div className="flex items-center justify-between px-4 mx-auto h-14">
        <h2 className="text-xl font-bold">LOGO</h2>
        {SecondPart}
      </div>
    </Header>
  );
};

export default MainHeader;
