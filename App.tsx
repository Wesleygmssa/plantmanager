import React from "react";
import { Text } from "react-native";
import Routes from "./src/routes";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  //enquanto as fontes não forem carregadas
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
