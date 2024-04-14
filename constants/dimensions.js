import { Dimensions } from "react-native";

//takes two string either "screen" or "window".
// In iOS , it doesnt make any difference
// In Android screen is entire avilable screen including status bar
// window is screen excluding status bar
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export { width, height };
