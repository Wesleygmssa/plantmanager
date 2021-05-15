import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { EnvariomentButton } from "../components/EnviromantButton";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function PlantSelect() {
  useEffect(() => {}, []);

  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={(item) => (
            <EnvariomentButton title="Cozinha" active={true} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>
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
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  enviromentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
