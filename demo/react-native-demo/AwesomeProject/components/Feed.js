import { StyleSheet, Text, View, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: "20%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Feed({ navigation }) {
  return (
    <View style={{ width: "100%", margin: "auto" }}>
      <Text style={{ textAlign: "center" }}>Feed Screen</Text>
      <View style={styles.container}>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate("Details", {
              itemId: 86,
              otherParam: "anything you want here",
            })
          }
        ></Button>
        <Button
          title="Go to Profile"
          onPress={() =>
            navigation.navigate("Profile", { name: "profile 标题" })
          }
        ></Button>
      </View>
    </View>
  );
}
