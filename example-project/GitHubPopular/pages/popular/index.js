import { useEffect } from 'react';
import { DeviceEventEmitter, View, ActivityIndicator } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from '@react-navigation/native';
import LanguageService, { TYPE_LANGUAGE } from '../../services/LanguageService';

const Tab = createMaterialTopTabNavigator();

const languageService = new LanguageService(TYPE_LANGUAGE.FLAG_KEY);

const Popular = ({ navigation }) => {
  const [languages, setLanguages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { colors } = useTheme();

  const loadLanguage = () => {
    setLoading(true);

    languageService
      .fetchData()
      .then(result => {
        const data = result.filter(item => item.checked);
        setLanguages(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadLanguage();

    const listener = DeviceEventEmitter.addListener(
      TYPE_LANGUAGE.FLAG_KEY + '_CHANGED',
      loadLanguage
    );

    return () => {
      listener.remove();
    };
  }, []);

  const handleClick = useCallback(() => {
    navigation.navigate('Search');
  }, [navigation]);

  const mapRoute = languages.reduce((map, item) => {
    const route = () => <PopularTab tabLabel={item.name} />;
    return {
      ...map,
      [item.name]: route,
    };
  }, {});

  return (
    <View>
      {loading || languages.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <Tab.Navigator screenOptions={{ tabBarScrollEnabled: true }}>
          {Object.keys(mapRoute).map(name => (
            <Tab.Screen name={name} component={mapRoute[name]} key={name} />
          ))}
        </Tab.Navigator>
      )}
    </View>
  );
};

export default Popular;