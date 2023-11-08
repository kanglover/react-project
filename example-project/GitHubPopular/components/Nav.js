import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../pages/Home';
import Tag from '../pages/Tag';

const ROUTERS = [{
  name: 'Home',
  component: Home
},
 {
  name: 'Tag',
  component: Tag
},
// {
//   name: 'Search',
// }, {
//   name: 'Theme'
// }
]

const Stack = createNativeStackNavigator();

const AppNav = ({ routes }) => {
  // const { colors } = useTheme();
  const initRouteName = routes[0].name;
  console.log(111);
  console.log(initRouteName, routes);

  return (
    <Stack.Navigator
      initialRouteName={initRouteName}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fcdeff",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {ROUTERS.map(route => {
        <Stack.Screen
          name={route.name}
          component={route.component}
        ></Stack.Screen>;
      })}
    </Stack.Navigator>
  );
};

export default AppNav;
