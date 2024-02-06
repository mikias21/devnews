import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
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
});

export default styles;
