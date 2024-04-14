import { StyleSheet, Text, Platform } from "react-native";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    // fontSize: Platform.select({ ios: 32, android: 30 }),
    // color: Platform.OS === "ios" ? "black" : "white",
    fontSize: 32,
    color: "black",
    textAlign: "center",
    // borderRadius: 8,
    padding: 10,
    maxWidth: "80%",
  },
});
