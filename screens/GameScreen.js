import {
  Alert,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { AntDesign } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else return randomNumber;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props) {
  const { height, width } = useWindowDimensions();
  const initialGuess = generateRandomBetween(1, 100, props.userNumber);
  const [guess, setGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  useEffect(() => {
    if (guess === props.userNumber) {
      props.isGameOver(guessRounds.length);
    }
  }, [guess, props.userNumber, props.isGameOver]);

  useEffect(() => {
    (minBoundary = 1), (maxBoundary = 100);
  }, []);

  function nextGuessHandler(direction) {
    // direction =>'lower' or 'greater'
    if (
      (direction === "lower" && guess < props.userNumber) ||
      (direction === "greater" && guess > props.userNumber)
    ) {
      Alert.alert("Liar Liar pants on fire!", "Dont lie Play Fair", [
        {
          text: "Okay",
          style: "destructive",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = guess;
    } else {
      minBoundary = guess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, guess);
    setGuess(newRndNumber);
    setGuessRounds((prevGuess) => [newRndNumber, ...prevGuess]);
  }

  const guessRoundsListLength = guessRounds.length;
  let content = (
    <>
      <NumberContainer>{guess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <AntDesign name="pluscircleo" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="minuscircleo" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerLandscape}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <AntDesign name="pluscircleo" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{guess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="minuscircleo" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.logContainer}>
        {/* {guessRounds.map((guess) => (
          <Text key={guess}>Computer says {guess}</Text>
        ))} */}

        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              guess={itemData.item}
              roundNumber={guessRoundsListLength - itemData.index}
            />
          )}
          keyExtractor={(item, index) => index}
        ></FlatList>
      </View>
    </View>
  );
}

export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
    alignItems: "center",
    marginTop: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonsContainerLandscape: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  logContainer: {
    flex: 1,
  },
});
