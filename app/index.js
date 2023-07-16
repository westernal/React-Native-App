import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import About from "../components/about";
import BurgerMenu from "../components/burgerMenu";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerLeft: () => <BurgerMenu />,
          headerTitle: "Ali Navidi",
          headerTitleStyle: styles.title,
        }}
      />
      <About />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: "OrbitronBold",
  },
});
