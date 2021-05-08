import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={style.conatiner}>
      <Text>Olá</Text>
      <Text>Nlw#5</Text>
    </View>
  );
}

const style = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
