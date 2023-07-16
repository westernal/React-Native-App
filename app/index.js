import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import About from "../components/about";
import BurgerMenu from "../components/burgerMenu";

export default function App() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerLeft: () => <BurgerMenu />,
          headerTitle: "Ali Navidi",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <About />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
