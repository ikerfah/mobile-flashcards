import * as React from "react";
import { View } from "react-native";
import reducer from './src/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DecksScreen from "./src/components/DecksScreen";
import middleware from './src/middleware'
import DeckDetailsScreen from "./src/components/DeckDetailsScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_DECKS, SCREEN_DECK_DETAILS_SCREEN, SCREEN_NEW_DECK ,DECKS } from './src/utils/constants'
import AddDeck from "./src/components/AddDeck";
import { Ionicons} from '@expo/vector-icons';
const store = createStore(reducer, middleware)

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function MainScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name={SCREEN_DECKS} component={DecksScreen} />
      <Stack.Screen name={SCREEN_DECK_DETAILS_SCREEN} component={DeckDetailsScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === DECKS) {
                  iconName = focused ? 'card' : 'card';
                } else if (route.name === SCREEN_NEW_DECK) {
                  iconName = focused ? 'add-circle' : 'add-circle-outline';
                }
            // You can return any component that you like here!           
            return <Ionicons name={iconName} size={size} color={color} />;          },          tabBarActiveTintColor: 'tomato',          tabBarInactiveTintColor: 'gray',        })}
          >
            <Tab.Screen options={{ headerShown: false }} name={DECKS} component={MainScreen} i />
            <Tab.Screen options={{ headerShown: false }} name={SCREEN_NEW_DECK} component={AddDeck} />
          </Tab.Navigator>
      </View>
    </Provider>
    </NavigationContainer >
  )
}
