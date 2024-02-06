import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
  },

  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header_container: {
    marginTop: 25,
    padding: 5,
  },

  main_header: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
  },

  stories_container: {
    marginTop: 18,
  },

  story_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#E2E8F0",
  },

  image_container: {
    width: 80,
    height: 80,
  },

  story_avatar: {
    width: "100%",
    height: "100%",
  },

  story_details_container: {
    // width: 200,
  },

  story_title: {
    fontSize: 17,
    fontFamily: "Poppins-Regular",
  },

  story_tag_container: {
    marginTop: 5,
    marginBottom: 10,
  },

  story_tag: {
    color: "#1E40AF",
    fontWeight: "900",
    textDecorationLine: "underline",
  },

  story_header: {
    fontSize: 15,
    marginBottom: 10,
  },

  story_time: {
    color: "#94A3B8",
  },

  story_author_details: {
    marginTop: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  story_avatar_main_container: {
    width: 30,
    height: 30,
  },
  story_avatar_main: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  story_author: {
    color: "#64748B",
    fontWeight: "600",
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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

  darkThemeCard: {
    backgroundColor: "#111827",
  },

  lightThemeCard: {
    backgroundColor: "#E2E8F0",
  },
});

export default styles;
