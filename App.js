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
import {
  SCREEN_DECKS,
  SCREEN_DECK_DETAILS_SCREEN,
  SCREEN_NEW_DECK,
  ADD_CARD_SCREEN,
  QUIZ_SCREEN,
  SCORE_SCREEN
} from './src/utils/constants'
import AddDeck from "./src/components/AddDeck";
import { Ionicons } from '@expo/vector-icons';
import AddCard from "./src/components/AddCard";
import QuizScreen from "./src/components/QuizScreen";
import ScoreScreen from "./src/components/ScoreScreen";
const store = createStore(reducer, middleware)

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === SCREEN_DECKS) {
            iconName = focused ? 'card' : 'card';
          } else if (route.name === SCREEN_NEW_DECK) {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }, tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen options={{ headerShown: false }} name={SCREEN_DECKS} component={DecksScreen} />
      <Tab.Screen options={{ headerShown: false }} name={SCREEN_NEW_DECK} component={AddDeck} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeTabs} />
            <Stack.Screen name={SCREEN_DECK_DETAILS_SCREEN} component={DeckDetailsScreen} />
            <Stack.Screen name={ADD_CARD_SCREEN} component={AddCard} />
            <Stack.Screen name={QUIZ_SCREEN} component={QuizScreen} />
            <Stack.Screen name={SCORE_SCREEN} component={ScoreScreen} />
          </Stack.Navigator>
        </View>
      </Provider>
    </NavigationContainer >
  )
}
