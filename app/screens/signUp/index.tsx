import { Input } from "@/common/input";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    Text,
    TouchableWithoutFeedback,
    View,
    SafeAreaView,
} from "react-native";
import Profile from "@/assets/svg/profil-circled.svg";

export const SignUpScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <SafeAreaView className="bg-gray-50 flex-1">
            <View className="w-3/4 mx-auto my-30 flex-1">
                <View className="items-center">
                    <Profile
                        width={50}
                        height={50}
                        className={"text-primary-lighterPurple"}
                    />
                </View>
                <View>
                    <Text className="text-base my-10 font-body">Nom: </Text>
                    <Input
                        placeholder="Nom"
                        defaultValue={name}
                        onValueChange={(text: string) => setName(text)}
                    />
                </View>
                <View>
                    <Text className="text-base my-10 font-body">Email: </Text>
                    <Input
                        placeholder="Email"
                        defaultValue={email}
                        onValueChange={(text: string) => setEmail(text)}
                    />
                </View>
                <View>
                    <Text className="text-base my-10 font-body">
                        Password:{" "}
                    </Text>
                    <Input
                        placeholder="Password"
                        defaultValue={password}
                        password={true}
                        onValueChange={(text: string) => setPassword(text)}
                    />
                </View>
            </View>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate("LastStepScreen")}
            >
                <View className="rounded-sm w-[100px] mx-auto my-10 bg-primary-darkPurple p-15">
                    <Text className="text-center font-body text-base text-primary-white">
                        Suivant
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};
