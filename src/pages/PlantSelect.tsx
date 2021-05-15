import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { EnvariomentButton } from "../components/EnviromantButton";
import { Header } from "../components/Header";
import { Load } from "../components/Load";
import { PlantCardPrimay } from "../components/PlantCardPrimary";
import api from "../services/api";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnviromentProps {
  key: string;
  title: string;
}

interface PlatnsProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelect() {
  const [envioments, setEnvioments] = useState<EnviromentProps[]>();
  const [plants, setPlants] = useState<PlatnsProps[]>();
  const [filteredPlants, setFilteredPlants] = useState<PlatnsProps[]>();
  const [enviomentSelected, setEnviomentSelected] = useState("all");
  const [loading, setLoading] = useState(true);

  function handleEnviomentSelected(envionment: string) {
    setEnviomentSelected(envionment);

    if (envionment === "all") {
      return setFilteredPlants(plants);
    }

    //plantas filtradas
    const filtered = plants?.filter((plant) =>
      plant.environments?.includes(envionment)
    );

    setFilteredPlants(filtered);
  }

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get(
        "plants_environments?_sort=title&order=asc"
      );
      console.log(data);
      setEnvioments([{ key: "all", title: "Todos" }, ...data]);
    }

    fetchEnvironment();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get("plants?_sort=name&order=asc");
      setPlants(data);
      setLoading(false);
    }

    fetchPlants();
  }, []);

  if (loading) {
    return <Load />;
  }
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={envioments}
          renderItem={({ item }) => (
            <EnvariomentButton
              title={item.title}
              active={item.key === enviomentSelected}
              onPress={() => {
                handleEnviomentSelected(item.key);
              }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimay data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        ></FlatList>
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
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "center",
  },
});
