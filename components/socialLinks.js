import { FlatList, TouchableOpacity } from "react-native";
import { Image, StyleSheet, View, Linking } from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

const SocialLinks = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://github.com/westernal")}
      >
        <AntDesign name="github" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.linkedin.com/in/ali-navidi/")
        }
      >
        <Entypo name="linkedin" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://stackoverflow.com/users/15353979/ali-navidi")
        }
      >
        <FontAwesome name="stack-overflow" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
});

export default SocialLinks;
