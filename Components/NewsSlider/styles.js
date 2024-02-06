import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item_container: {
    marginTop: 20,
    paddingLeft: 10,
    marginBottom: 100,
  },

  image_container: {
    overflow: "hidden",
    width: 230,
    height: 230,
  },

  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  text_container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 200,
    height: 120,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },
  title: {
    color: "black",
    fontSize: 17,
    fontFamily: "Poppins-Regular",
  },

  darkThemeContainer: {
    backgroundColor: "#111827",
  },

  darkThemeText: {
    color: "white",
  },

  lightThemeText: {
    color: "black",
  },
});

export default styles;
