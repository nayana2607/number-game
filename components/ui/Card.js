import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";
import { width } from "../../constants/dimensions";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: width < 380 ? 18 : 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // for android

    // for iOS adding shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    alignItems: "center",
  },
});
export default Card;
