import { useCallback, useMemo } from "react";
import { theme } from "antd";
import { useAtom } from "jotai";
import { AtomDarkMode } from ".";
import { Colors } from "./theme.store";

const { useToken } = theme;

const useTheme = () => {
  const [darkMode, setDarkMode] = useAtom(AtomDarkMode);
  const { token } = useToken();
  // Switch between dark and light mode.
  const toggleDarkMode = useCallback(
    () => setDarkMode((d) => !d),
    [setDarkMode]
  );

  const color = useMemo(
    () => Colors[darkMode ? "dark" : "light"] ?? {},
    [darkMode]
  );

  return { darkMode, color, token, toggleDarkMode };
};

export default useTheme;
