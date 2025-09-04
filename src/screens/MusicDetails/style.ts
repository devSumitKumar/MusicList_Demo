import {StyleSheet} from 'react-native';

const style = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    padding: 16,
  },
  content: {
    flexDirection: "column", // default for phone
  },
  tabletContent: {
    flexDirection: "row", // side-by-side on tablet
    alignItems: "flex-start",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
  },
  tabletImage: {
    width: "45%",
    height: 350,
    marginRight: 16,
  },
  details: {
    marginTop: 16,
  },
  tabletDetails: {
    flex: 1,
    marginTop: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#666",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: "#444",
  },

});

export default style;
