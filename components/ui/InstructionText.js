import { StyleSheet, Text, useWindowDimensions } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  const { height, width } = useWindowDimensions();
  const color = width > 500 ? "white" : Colors.secondary500;
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.secondary500,
    fontSize: 24,
  },
});
