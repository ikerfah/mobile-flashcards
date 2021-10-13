import * as React from "react";
import { View } from "react-native";
import reducer from './src/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DecksScreen from "./src/components/DecksScreen";
import middleware from './src/middleware'
import DeckDetailsScreen from "./src/components/DeckDetailsScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_DECKS, SCREEN_DECK_DETAILS_SCREEN } from './src/utils/constants'
const store = createStore(reducer, middleware)

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Stack.Navigator>
            <Stack.Screen name={SCREEN_DECKS} component={DecksScreen} />
            <Stack.Screen name={SCREEN_DECK_DETAILS_SCREEN} component={DeckDetailsScreen} />
          </Stack.Navigator>
        </View>
      </Provider>
    </NavigationContainer>
  )
}
