import { View, Text, TextInput } from "react-native";

// Style
import styles from "./styles";

// Icons
import { EvilIcons } from "@expo/vector-icons";

export default SearchBar = ({ isDarkMode }) => {
  const themeTextStyle =
    isDarkMode === true ? styles.darkThemeText : styles.lightThemeText;
  const themeContainerStyle =
    isDarkMode === true
      ? styles.darkThemeContainer
      : styles.lightThemeContainer;

  const iconColor = isDarkMode === true ? "white" : "black";

  return (
    <View style={[styles.search_container, themeContainerStyle]}>
      <TextInput
        style={[themeTextStyle]}
        placeholder="Search for a news"
        placeholderTextColor={iconColor}
      />
      <EvilIcons name="search" size={24} color={iconColor} />
    </View>
  );
};
