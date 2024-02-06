import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navbar_container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
  },

  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imageContainer: {
    borderRadius: 100,
    overflow: "hidden",
    height: 40,
    width: 40,
  },

  avatar: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },

  container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
  },

  header_container: {
    marginTop: 30,
  },

  header: {
    fontSize: 28,
    fontFamily: "Poppins-Black",
  },

  header_two: {
    marginTop: 20,
  },

  header_two_text: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
  },

  header_three: {
    marginTop: 20,
  },

  darkThemeContainer: {
    backgroundColor: "#0A0A0A",
  },

  darkThemeText: {
    color: "white",
    // fontFamily: "Poppins-Black",
  },

  lightThemeText: {
    color: "black",
    // fontFamily: "Poppins-Black",
  },
});

export default styles;
