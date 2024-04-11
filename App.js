import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameisOver, setgameisOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [isFontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  function handleNumberPicked(pickedNumber) {
    setUserNumber(pickedNumber);
    setgameisOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGuessRounds(numberOfRounds);
    setgameisOver(true);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }
  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  let screen = <StartGameScreen onPickedNumber={handleNumberPicked} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} isGameOver={gameOverHandler} />
    );
  }

  if (gameisOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <LinearGradient
      colors={[Colors.secondary500, Colors.primary600]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
