import { ScrollView, StyleSheet } from "react-native";
import type { FC } from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const originalConsoleWarn = console.warn;

console.warn = (...args) => {
  // https://github.com/expo/expo/issues/33248
  if (
    args[0] === "props.pointerEvents is deprecated. Use style.pointerEvents"
  ) {
    return;
  }

  originalConsoleWarn(...args);
};

const RootLayout: FC = () => {
  return (
    <SafeAreaView style={s.container}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
};

export default RootLayout;
const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
