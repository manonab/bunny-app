import React from "react";
import { RabbitForm } from "@/components/rabbit-form";
import { useNavigation } from "@react-navigation/native";
import {
    Text,
    TouchableWithoutFeedback,
    View,
    SafeAreaView,
} from "react-native";

export const LastStepScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-gray-50 flex-1">
            <RabbitForm />
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate("LoginScreen")}
            >
                <View className="rounded-sm w-[100px] mx-auto my-10 bg-primary-darkPurple p-15">
                    <Text className="text-center text-base text-primary-white">
                        Valider
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};
