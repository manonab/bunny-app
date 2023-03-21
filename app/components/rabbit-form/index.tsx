import { View, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { Input } from "@/common/input";
import { SafeAreaView } from "react-native-safe-area-context";
import { RabbitAgePicker } from "./rabbit-age-picker";
import { RabbitBreedsPicker } from "./rabbit-breeds-picker";
import { RabbitFoodPicker } from "./rabbit-food-picker";
import ImagePickerComponent from "@/common/add-media-uploader";

export const RabbitForm = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const passwordRef = useRef<TextInput>(null);

    return (
        <SafeAreaView className="flex-1">
            <View className="w-3/4 mx-auto">
                <ImagePickerComponent />
                <Input
                    label="Nom de votre lapin:"
                    placeholder={"Aa"}
                    onValueChange={(text: string) => setName(text)}
                    defaultValue={name}
                    returnKeyType="next"
                />
                <RabbitAgePicker />
                <RabbitBreedsPicker />
                <RabbitFoodPicker />
            </View>
        </SafeAreaView>
    );
};
