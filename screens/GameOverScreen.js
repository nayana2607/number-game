import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen(props) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  const marginTop = height < 400 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.screenContiner, { marginTop: marginTop }]}>
        <Title>GAME OVER !!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={[styles.image]}
            source={require("../assets/images/success.png")}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </Text>
        </View>

        <PrimaryButton onPress={props.onStartNewGame}>
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContiner: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // borderRadius: width < 380 ? 75 : 150,
    // width: width < 380 ? 150 : 300,
    // height: width < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 12,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
