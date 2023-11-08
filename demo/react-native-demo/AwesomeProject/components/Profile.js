import { Button } from "react-native";

export default function Profile({ navigation }) {
  return (
    <Button
      title="Update the title"
      onPress={() => navigation.setOptions({ title: "Updated!" })}
    />
  );
}
