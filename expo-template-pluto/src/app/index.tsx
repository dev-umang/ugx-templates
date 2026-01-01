import { FC } from "react";

import { ScrollView, StyleSheet, Text } from "react-native";

const IndexPage: FC = () => {
  return (
    <ScrollView style={s.container}>
      <Text>Welcome to My App</Text>
    </ScrollView>
  );
};

export default IndexPage;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
