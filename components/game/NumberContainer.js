import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";
import { width } from "../../constants/dimensions";

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
}

export default NumberContainer;

//const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary500,
    padding: width < 380 ? 12 : 24,
    margin: width < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary500,
    fontSize: width < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
