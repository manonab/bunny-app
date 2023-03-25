import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {InnerApp} from "./inner-app";
import {Provider} from "react-redux";
import store, {persistor} from "./utils/store";
import {PersistGate} from "redux-persist/integration/react";

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <InnerApp />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
