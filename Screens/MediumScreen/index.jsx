import { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

// Icons
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

// Styles
import styles from "./styles";

// Services
import { getMediumScrappedData } from "../../services/mediumScrapperService";

const MediumScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const themeTextStyle =
    isDarkMode === true ? styles.darkThemeText : styles.lightThemeText;
  const themeContainerStyle =
    isDarkMode === true
      ? styles.darkThemeContainer
      : styles.lightThemeContainer;
  const themeCardStyle =
    isDarkMode === true ? styles.darkThemeCard : styles.lightThemeCard;
  const iconColor = isDarkMode === true ? "white" : "black";

  useEffect(() => {
    setIsLoading(true);
    getMediumScrappedData()
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ScrollView style={themeContainerStyle}>
      <SafeAreaView style={[styles.main_container]}>
        <View style={styles.navbar}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Ionicons name="arrow-back" size={24} color="#94A3B8" />
          </Pressable>
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
          <Text style={[styles.main_header, themeTextStyle]}>
            Latest stories from medium.com
          </Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#1D4ED8" />
        ) : (
          <View style={[styles.stories_container]}>
            {Object.keys(data)?.map((key) => (
              <View style={[styles.story_container, themeCardStyle]} key={key}>
                <View style={[styles.story_details_container]}>
                  <Text style={[styles.story_title, themeTextStyle]}>
                    {data[key]?.title}
                  </Text>
                  <View style={styles.story_tag_container}>
                    <Text style={styles.story_tag}># {data[key]?.tag}</Text>
                  </View>
                  <Text style={[styles.story_header, themeTextStyle]}>
                    {data[key]?.description}
                  </Text>
                  <Text style={styles.story_time}>{data[key]?.time}</Text>
                  <View style={styles.footer}>
                    <View style={styles.story_author_details}>
                      <View style={styles.story_avatar_main_container}>
                        <Image
                          source={{ uri: data[key]?.avatar }}
                          style={styles.story_avatar_main}
                        />
                      </View>
                      <Text style={styles.story_author}>
                        {data[key]?.author}
                      </Text>
                    </View>
                    <Pressable
                      onPress={() =>
                        WebBrowser.openBrowserAsync(data[key]?.href)
                      }
                    >
                      <FontAwesome5
                        name="book-open"
                        size={17}
                        color={iconColor}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default MediumScreen;
