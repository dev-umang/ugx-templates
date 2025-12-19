import type { FC, ReactNode } from "react";
import { ConfigProvider, theme } from "antd";
import useTheme from "./useTheme";

type Props = {
  children: ReactNode;
};

const ThemeProvider: FC<Props> = ({ children }) => {
  const { darkMode, color: c } = useTheme();
  return (
    <ConfigProvider
      // drawer={{ className: "border border-primary-border" }}
      theme={{
        algorithm: darkMode ? [theme.darkAlgorithm] : [theme.defaultAlgorithm],
        token: {
          colorPrimary: c.active,
          colorBorderSecondary: c.border,
          colorBgContainer: c.container,
          borderRadius: 4,
          colorBgElevated: c.container,
          colorText: c.bodyPrimaryText,
        },
        components: {
          Collapse: {
            colorBgContainer: c.bodyPrimary,
            paddingContentHorizontal: 0,
            paddingContentVertical: 0,
            padding: 0,
            contentPadding: 0,
            headerBg: c.container,
          },
          Form: {
            labelColor: c.bodySecondaryText,
            verticalLabelPadding: 0,
            labelFontSize: 12,
            itemMarginBottom: 8,
          },
          Card: {
            padding: 12,
            headerPadding: 12,
          },
          Drawer: {
            padding: 12,
            paddingLG: 12,
            lineWidth: 3,
          },
          Descriptions: {
            itemPaddingBottom: 4,
          },
          Menu: {
            darkItemBg: "transparent",
            darkItemColor: c.bodySecondaryText,
            darkItemHoverColor: c.bodyPrimaryText,
            darkPopupBg: c.container,
            darkSubMenuItemBg: c.bodySecondary,
            activeBarWidth: 4,
            activeBarBorderWidth: 0,
            itemBorderRadius: 0,
            itemMarginInline: 0,
            darkItemSelectedBg: c.activeAlpha,
            darkItemSelectedColor: c.active,
            subMenuItemBorderRadius: 0,
          },
          Layout: {
            headerHeight: "auto",
            colorBgLayout: c.bodyPrimary,
            headerPadding: 0,
            headerBg: c.container,
            siderBg: c.container,
            triggerBg: c.container,
            triggerHeight: 40,
            triggerColor: c.bodySecondaryText,
          },
          List: {
            emptyTextPadding: 0,
            marginLG: 0,
          },
          Segmented: {
            itemSelectedBg: c.active,
            itemSelectedColor: c.container,
          },
          Divider: {
            verticalMarginInline: 5,
          },
          Alert: {
            withDescriptionPadding: "12px 12px",
          },
        },
      }}
    >
      <div
        className={`${darkMode ? "dark" : "light"} dark:scrollbar-thumb-neutral-700 scrollbar-track-neutral-950`}
      >
        {children}
      </div>
    </ConfigProvider>
  );
};

export default ThemeProvider;
