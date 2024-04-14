import { StyleSheet, Text, Platform } from "react-native";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    color: "white",
    textAlign: "center",
    padding: 10,
    maxWidth: "80%",
  },
});
