import {
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import { Input } from "@/common/input";
import { SafeAreaView } from "react-native-safe-area-context";
import { RabbitAgePicker } from "./rabbit-age-picker";
import { RabbitBreedsPicker } from "./rabbit-breeds-picker";
import { RabbitFoodPicker } from "./rabbit-food-picker";
import AddImage from "@/assets/svg/add-media-image.svg";
export const RabbitForm = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const passwordRef = useRef<TextInput>(null);

    return (
        <SafeAreaView className="flex-1">
            <View className="w-3/4 mx-auto">
                <Pressable className="border border-dotted border-primary-purple rounded-[999px] w-[100px] h-[100px] self-center my-30">
                    <AddImage
                        width={30}
                        height={30}
                        className={"my-auto mx-auto"}
                        color={"#721cb8"}
                    />
                </Pressable>
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
