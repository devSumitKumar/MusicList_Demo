import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MusicDetails, MusicList} from '../screens';
import {StatusBar} from 'react-native';
import {NavigationConstants} from '../utils/constants';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Stack.Navigator
        initialRouteName={'MusicList'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={NavigationConstants.MusicList}
          component={MusicList}
        />
        <Stack.Screen
          name={NavigationConstants.MusicDetails}
          component={MusicDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
