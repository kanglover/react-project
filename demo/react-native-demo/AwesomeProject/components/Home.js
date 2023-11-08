import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./Feed";
import Messages from "./Messages";

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed">{(props) => <Feed {...props} />}</Tab.Screen>
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}
