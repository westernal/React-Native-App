import { View, Text, StyleSheet, Image } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/unnamed2.jpg")}
        alt="Me"
      />
      <Text style={styles.title}>Frontend Developer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
  },
});

export default About;
