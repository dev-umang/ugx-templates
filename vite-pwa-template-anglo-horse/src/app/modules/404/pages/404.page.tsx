import { type FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { useNav } from "@common/hooks";

const { Content } = Layout;

const Page404: FC = () => {
  const [sec, setSec] = useState(6);
  const nav = useNav();

  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prev) => {
        const current = prev - 1;
        if (current === 0) nav("/", { replace: true });
        return current;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [nav]);

  return (
    <Layout>
      <Content className="h-screen flex flex-col items-center justify-center">
        <div className="text-4xl my-10">404! Not Found!</div>
        <div className="text-muted text-center">
          <div>The page you are looking for is not found!</div>
          <div>
            Redirecting in{" "}
            <strong className="font-bold text-black dark:text-white">
              {sec}
            </strong>{" "}
            to the
          </div>
          <Link className="underline text-sky-600" to={"/"}>
            Home!
          </Link>
        </div>
      </Content>
    </Layout>
  );
};

export default Page404;
