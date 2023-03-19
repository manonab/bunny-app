import { Text, View, TextInput, SafeAreaView, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import { Input } from "@/common/input";
import { useNavigation } from "@react-navigation/native";

export const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const passwordRef = useRef<TextInput>(null);
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View className="my-30">
                <Input
                    className="mb-30"
                    label={"Email"}
                    placeholder={"email"}
                    onValueChange={(text: string) => setEmail(text)}
                    defaultValue={email}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        passwordRef.current?.focus();
                    }}
                />
            </View>
            <Input
                ref={passwordRef}
                className="mb-30"
                label={"Mot de passe"}
                password={true}
                placeholder={"password"}
                onValueChange={(text: string) => setPassword(text)}
                defaultValue={password}
                blurOnSubmit={true}
            />
            <Pressable
                className="mt-30 bg-primary-darkPurple text-white p-15 rounded-sm items-center w-2/4 mx-auto"
                onPress={() => navigation.navigate("HomeScreen")}
            >
                <Text className="text-body text-primary-white text-l">
                    LOGIN
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};
