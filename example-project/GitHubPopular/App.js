/**
 * @file App
 */
import React, { useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import Navigation from './components/Nav';
import Home from './pages/Home';
import Tag from './pages/Tag';

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

export default function App() {
  const [theme, setTheme] = useState(Appearance.getColorScheme);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(preferences => {
      setTheme(preferences.colorScheme === 'dark' ? DarkTheme : DefaultTheme);
    });
    return () => subscription.remove();
  }, [setTheme]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation routes={ROUTERS} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
