import { Space, Spin } from "antd";

const Loader = () => (
  <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50">
    <Space direction="vertical" align="center">
      <Spin />
    </Space>
  </div>
);

export default Loader;
