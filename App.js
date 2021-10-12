import * as React from "react";
import { View } from "react-native";
import reducer from './src/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainScreen from "./src/components/MainScreen";
import middleware from './src/middleware'

const store = createStore(reducer, middleware)

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <MainScreen />
      </View>
    </Provider>
  )
}
