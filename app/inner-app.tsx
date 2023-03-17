import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { LoginScreen } from "@/screens/login";

import { RootStackParamList } from "@/models/root-stack-param-list";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const InnerApp = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={"LoginScreen"}
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#0014FF",
          },
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </>
  );
};
