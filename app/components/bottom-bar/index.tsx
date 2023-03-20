import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export const BottomBar: React.FC = () => {
    return (
        <SafeAreaView className="bg-primary-lightPurple py-15 w-full h-2/3 absolute bottom-0">
            <Text className="text-base font-body">Bottom bar</Text>
        </SafeAreaView>
    );
};
