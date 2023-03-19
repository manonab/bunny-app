import { Text, TouchableOpacity, View, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { Input } from "@/common/input";
import { SafeAreaView } from "react-native-safe-area-context";
import { RabbitAgePicker } from "./rabbit-age-picker";
import { RabbitBreedsPicker } from "./rabbit-breeds-picker";
import { RabbitFoodPicker } from "./rabbit-food-picker";

export const RabbitForm = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const passwordRef = useRef<TextInput>(null);

    return (
        <SafeAreaView className="flex-1">
            <View className="mb-30 w-3/4 mx-auto">
                <Input
                    className="mb-30"
                    label="Nom du lapin"
                    placeholder={"Aa"}
                    onValueChange={(text: string) => setName(text)}
                    defaultValue={name}
                    returnKeyType="next"
                />
            </View>
            <RabbitAgePicker />
            <RabbitBreedsPicker />
            <RabbitFoodPicker />
            <View className="mt-30 bg-primary-500 text-white p-15 rounded-sm items-center">
                <TouchableOpacity>
                    <Text className="text-gray-50 text-body">LGON</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
