import { View, Image } from "react-native";
// Style
import styles from "./styles";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

export default Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/1590515579343.jpg")}
          style={styles.avatar}
        />
      </View>
      <View>
        <MaterialIcons
          name="dark-mode"
          size={24}
          color="black"
          // style={[themeTextStyle]}
        />
      </View>
    </View>
  );
};
