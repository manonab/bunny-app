import { Text, TouchableOpacity, View, TextInput, Pressable } from "react-native";
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
        </SafeAreaView>
    );
};
