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
import { SCREEN_DECKS, SCREEN_DECK_DETAILS_SCREEN, SCREEN_NEW_DECK } from './src/utils/constants'
import AddDeck from "./src/components/AddDeck";
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
          <Tab.Navigator screenOptions={{ tabBarIconStyle: { display: "none" } }}>
            <Tab.Screen options={{ headerShown: false }} name="DECKS" component={MainScreen} i />
            <Tab.Screen options={{ headerShown: false }} name={SCREEN_NEW_DECK} component={AddDeck} />
          </Tab.Navigator>
        </View>
      </Provider>
    </NavigationContainer>
  )
}
