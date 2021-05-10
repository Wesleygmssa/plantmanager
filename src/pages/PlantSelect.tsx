import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";

export function PlantSelect() {
  return (
    <View style={styles.conatiner}>
      <Text>Selecionar Planta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
