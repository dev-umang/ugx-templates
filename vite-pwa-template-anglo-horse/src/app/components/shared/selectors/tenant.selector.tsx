import { Avatar, Button, Drawer, Input, List, Typography } from "antd";
import { Search, User } from "lucide-react";
import { useState, type FC } from "react";
type Props = {
  tenants: { logoUrl: string; name: string; id: string }[];
};
const { Text } = Typography;

const TenantSelector: FC<Props> = (p) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        type="text"
        className="h-auto rounded-none!"
        icon={
          <Avatar size={"small"}>
            <User size={16} />
          </Avatar>
        }
      >
        Tenant 1
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Select Tenant"
        placement="left"
      >
        <Input
          suffix={<Search className="text-muted" size={16} />}
          placeholder="Search tenants"
          className="mb-default"
        />
        <List
          dataSource={p.tenants}
          renderItem={(tenant) => (
            <Button
              type="text"
              className="flex mb-sm justify-start! h-auto! text-left items-start gap-2 p-2!"
              icon={<Avatar src={tenant.logoUrl} />}
              block
            >
              <div className="flex flex-col text-left">
                <Text strong>{tenant.name}</Text>
                <Text type="secondary" className="text-xs!">
                  {tenant.id}
                </Text>
              </div>
            </Button>
          )}
        />
      </Drawer>
    </>
  );
};

export default TenantSelector;
