import { type FC, useEffect, useMemo, useRef, useState } from "react";
import { Button, Popover, Space } from "antd";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Clock2 } from "lucide-react";

dayjs.extend(utc);
dayjs.extend(timezone);

type Info = {
  timezone: string;
  offset: string;
};

const TimeInfo: FC = () => {
  const [time, setTime] = useState({ compact: "", full: "" });
  const timeRef = useRef<ReturnType<typeof setInterval>>(null);
  const [info, setInfo] = useState<Info>();

  useEffect(() => {
    const updateTimer = () => {
      const today = dayjs();
      const _time = {
        compact: today.format("HH:mm"),
        full: today.format("hh:mm:ss A"),
      };

      setTime(_time);
    };

    if (timeRef.current) clearInterval(timeRef.current);
    timeRef.current = setInterval(() => updateTimer(), 1000);
    return () => clearInterval(timeRef.current ? timeRef.current : 0);
  }, []);

  const onOpenChange = (open: boolean) => {
    if (open) {
      const currentTimezone = dayjs.tz.guess();
      const offset = dayjs().tz(currentTimezone).format("Z");
      setInfo({ timezone: currentTimezone, offset });
    }
  };

  const timeInfo = useMemo(() => {
    if (!info) return <div>Loading...</div>;

    return (
      <Space orientation="vertical">
        <Space>
          <Clock2 />
          <div className="text-sm font-semibold">{time.full}</div>
        </Space>
        <Space>
          <div className="text-xs">{info.timezone}</div>
          <div className="text-xs">{info.offset}</div>
        </Space>
      </Space>
    );
  }, [time.full, info]);

  return (
    <Popover
      trigger={["click"]}
      onOpenChange={onOpenChange}
      title="System Time"
      content={timeInfo}
    >
      {time && (
        <Button icon={<Clock2 />} type="text">
          {time.compact}
        </Button>
      )}
    </Popover>
  );
};

export default TimeInfo;
