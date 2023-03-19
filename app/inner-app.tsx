import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { LoginScreen } from "@/screens/login";

import { RootStackParamList } from "@/models/root-stack-param-list";
import { HomeScreen } from "./screens/home";
import { SignUpScreen } from "./screens/signUp";
import { LastStepScreen } from "./screens/signUp/last-step";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const InnerApp = () => {
    return (
        <>
            <Stack.Navigator
                initialRouteName={"LoginScreen"}
                screenOptions={{
                    headerTitle: "",
                    headerTintColor: "#fff",
                    headerStyle: {
                        backgroundColor: "#6500a3",
                    },
                }}
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen
                    name="LastStepScreen"
                    component={LastStepScreen}
                />
            </Stack.Navigator>
        </>
    );
};
