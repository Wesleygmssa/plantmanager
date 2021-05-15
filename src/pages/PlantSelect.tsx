import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import colors from "../styles/colors";

export function PlantSelect() {
  return (
    <View style={styles.conatiner}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.background,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
