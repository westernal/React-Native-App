import { View, Text, StyleSheet, Image, Linking } from "react-native";
import SocialLinks from "./socialLinks";

const About = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/unnamed2.jpg")}
        alt="Me"
      />
      <Text style={styles.title}>Frontend Developer</Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL("https://alinavidi.dev/")}
      >
        https://alinavidi.dev/
      </Text>
      <SocialLinks />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  title: {
    fontSize: 20,
  },
  link: {
    marginTop: 10,
    color: "blue",
  },
});

export default About;
