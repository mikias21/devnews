import uuid from "react-native-uuid";
import { View, Image, Text, ScrollView, SafeAreaView } from "react-native";

// Styles
import styles from "./styles";

export default NewsSlider = ({ newsData, darkMode }) => {
  const themeTextStyle =
    darkMode === true ? styles.darkThemeText : styles.lightThemeText;
  const themeContainerStyle =
    darkMode === true ? styles.darkThemeContainer : styles.lightThemeContainer;

  return (
    <SafeAreaView>
      <ScrollView horizontal>
        {newsData?.articles.slice(0, 7).map((item) => {
          const key = uuid.v4();
          return (
            <View style={[styles.item_container]} key={key}>
              <View style={styles.slide}>
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
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
