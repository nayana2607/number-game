import { StyleSheet, Text } from "react-native";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 32,
    color: "black",
    textAlign: "center",
    borderRadius: 8,
    padding: 10,
  },
});
