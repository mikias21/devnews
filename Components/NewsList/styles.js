import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item_container: {
    marginTop: 20,
    // paddingLeft: 10,
  },

  news_container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#E2E8F0",
    borderRadius: 20,
    backgroundColor: "#E2E8F0",
  },

  image_container: {
    overflow: "hidden",
    width: 80,
    height: 80,
    marginTop: 10,
  },

  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },

  text_container: {
    width: 200,
    padding: 10,
  },

  title: {
    color: "black",
    fontSize: 15,
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

  description_container: {
    marginTop: 7,
  },

  details_container: {
    marginTop: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  author: {
    // marginBottom: 2,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },

  published_at: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
});

export default styles;
