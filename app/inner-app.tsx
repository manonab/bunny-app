import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";

// screens

import {HomeScreen} from "./screens/home";
import {SignUpScreen} from "./screens/signUp";
import {LastStepScreen} from "./screens/signUp/last-step";
import {useSelector} from "react-redux";
import {RootState} from "./utils/store";
import { RootStackParamList } from "./models/root-stack-param-list";
import { LoginScreen } from "./screens/login";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const InnerApp = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated,
  );
  return (
    <>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? "HomeScreen" : "LoginScreen"}
        screenOptions={{
          headerTitle: "",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#6500a3",
          },
        }}>
        {isAuthenticated ? (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};
