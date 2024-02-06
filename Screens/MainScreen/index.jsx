import { useFonts } from "expo-font";
import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  useColorScheme,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Icons
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// Style
import styles from "./styles";

// Components
import NewsList from "../../Components/NewsList";
import SearchBar from "../../Components/SearchBar";
import TagsSlider from "../../Components/TagsSlider";
import NewsSlider from "../../Components/NewsSlider";

// Service
import { getTopTechUsNews } from "../../services/newsAPIServices";

SplashScreen.preventAutoHideAsync();

const MainScreen = ({ navigation }) => {
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Black": require("../../assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const themeTextStyle =
    isDarkMode === true ? styles.darkThemeText : styles.lightThemeText;
  const themeContainerStyle =
    isDarkMode === true
      ? styles.darkThemeContainer
      : styles.lightThemeContainer;

  useEffect(() => {
    getTopTechUsNews()
      .then((res) => {
        if (res.status === 200) {
          setNewsData(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider
      style={[styles.container, themeContainerStyle]}
      showsVerticalScrollIndicator={false}
      persistentScrollbar={false}
      onLayout={onLayoutRootView}
    >
      <ScrollView>
        <View style={styles.navbar}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/avatar.jpg")}
              style={styles.avatar}
            />
          </View>
          <View>
            <Pressable
              style={styles.dark_mode_container}
              onPress={toggleDarkMode}
            >
              {isDarkMode ? (
                <Entypo
                  name="light-down"
                  size={30}
                  color="black"
                  style={[themeTextStyle]}
                />
              ) : (
                <MaterialIcons
                  name="dark-mode"
                  size={24}
                  color="black"
                  style={[themeTextStyle]}
                />
              )}
            </Pressable>
          </View>
        </View>
        <View style={styles.header_container}>
          <Text style={[styles.header, themeTextStyle]}>
            Checkout daily tech news
          </Text>
        </View>
        <SearchBar isDarkMode={isDarkMode} />
        <TagsSlider navigation={navigation} />
        <View style={styles.header_two}>
          <Text style={[styles.header_two_text, themeTextStyle]}>
            Top tech news
          </Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#1D4ED8" />
        ) : (
          <NewsSlider newsData={newsData} darkMode={isDarkMode} />
        )}
        <View style={styles.header_three}>
          <Text style={[styles.header_two_text, themeTextStyle]}>
            More for you
          </Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#1D4ED8" />
        ) : (
          <NewsList newsData={newsData} darkMode={isDarkMode} />
        )}
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default MainScreen;
