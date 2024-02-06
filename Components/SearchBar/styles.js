import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  search_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#64748B",
    marginTop: 15,
    padding: 7,
    borderRadius: 5,
  },

  darkThemeContainer: {
    backgroundColor: "#0A0A0A",
  },

  darkThemeText: {
    color: "white",
  },

  lightThemeText: {
    color: "black",
  },
});
