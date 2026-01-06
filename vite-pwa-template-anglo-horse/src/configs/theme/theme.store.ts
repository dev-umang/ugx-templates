import { atomWithStorage } from "jotai/utils";

type ThemeColors = Partial<{
  container: string;
  bodyPrimary: string;
  bodySecondary: string;
  bodyPrimaryText: string;
  bodySecondaryText: string;
  active: string;
  activeAlpha: string;
  border: string;
}>;

export const Colors: { [k in "light" | "dark"]: ThemeColors } = {
  light: {
    bodyPrimary: "#F1EFEFFF",
    bodySecondary: "#F7F7F7FF",
    bodyPrimaryText: "#000000",
    bodySecondaryText: "#6B6B6BFF",
    container: "#FFFFFFFF",
    active: "#32b0cd",
    activeAlpha: "#4463FF1F",
    border: "#D6D6D6B0",
  },
  dark: {
    bodyPrimary: "#101011FF",
    bodySecondary: "#0e0e10",
    bodyPrimaryText: "#ffffff",
    bodySecondaryText: "#A3A1A1FF",
    container: "#010003ff",
    active: "#32b0cd",
    activeAlpha: "#4463FF17",
    border: "#333333B0",
  },
};

export const AtomDarkMode = atomWithStorage("dark", false);
