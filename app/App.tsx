import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { InnerApp } from "./inner-app";

export default function App() {
    return (
        <NavigationContainer>
            <InnerApp />
        </NavigationContainer>
    );
}
