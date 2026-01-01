import { ScrollView, StyleSheet } from "react-native";
import type { FC } from "react";
import { Stack } from "expo-router";

const RootLayout: FC = () => {
  return (
    <ScrollView style={s.container}>
      <Stack />
    </ScrollView>
  );
};

export default RootLayout;
const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
