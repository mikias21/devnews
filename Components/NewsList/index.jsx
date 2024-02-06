import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import uuid from "react-native-uuid";
import * as WebBrowser from "expo-web-browser";

// Icons
import { FontAwesome5 } from "@expo/vector-icons";

// Styles
import styles from "./styles";

export default NewsList = ({ newsData, darkMode }) => {
  const themeTextStyle =
    darkMode === true ? styles.darkThemeText : styles.lightThemeText;
  const themeContainerStyle =
    darkMode === true ? styles.darkThemeContainer : styles.lightThemeContainer;

  const iconColor = darkMode === true ? "white" : "black";

  return (
    <SafeAreaView>
      <ScrollView>
        {newsData?.articles.map((item) => {
          const key = uuid.v4();

          return (
            <View style={[styles.item_container]} key={key}>
              <View style={styles.slide}>
                <View style={[styles.news_container, themeContainerStyle]}>
                  <View style={styles.image_container}>
                    <Image
                      source={{ uri: item.urlToImage }}
                      style={styles.image}
                    />
                  </View>
                  <View style={[styles.text_container, themeContainerStyle]}>
                    <Text style={[styles.title, themeTextStyle]}>
                      {item.title}
                    </Text>
                    {/* <View style={styles.description_container}>
                    <Text style={[styles.description, themeTextStyle]}>
                      {item.description}
                    </Text>
                  </View> */}

                    <View style={styles.details_container}>
                      <View style={styles.author_time_container}>
                        <Text style={[styles.author, themeTextStyle]}>
                          By {item.author ? item.author : "Anonymous"}
                        </Text>
                        <Text style={[styles.published_at, themeTextStyle]}>
                          {new Date(item.publishedAt).toLocaleString()}
                        </Text>
                      </View>
                      <View>
                        <Pressable
                          onPress={() => WebBrowser.openBrowserAsync(item.url)}
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
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
