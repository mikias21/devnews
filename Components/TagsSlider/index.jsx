import { Text, View, SafeAreaView, ScrollView, Pressable } from "react-native";

// Styles
import styles from "./styles";

const tags = ["# medium"];

const TagsSlider = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.tags_container}>
      <ScrollView horizontal>
        {tags.map((tag) => (
          <Pressable onPress={() => navigation.navigate("Medium")} key={tag}>
            <View style={styles.tag_container}>
              <Text style={styles.tag_text}>{tag}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TagsSlider;
