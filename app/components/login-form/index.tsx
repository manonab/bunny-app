import { Text, TextInput, SafeAreaView, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import { Input } from "@/common/input";
import { useSignIn } from "@/hooks/use-signin";

export const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const passwordRef = useRef<TextInput>(null);
    const { signIn } = useSignIn();

    return (
        <SafeAreaView>
            <Input
                className="mb-30"
                label={"Email:"}
                placeholder={"Aa"}
                onValueChange={(text: string) => setEmail(text)}
                defaultValue={email}
                returnKeyType="next"
                onSubmitEditing={() => {
                    passwordRef.current?.focus();
                }}
            />
            <Input
                ref={passwordRef}
                className="mb-30 "
                label={"Mot de passe:"}
                password={true}
                placeholder={"Aa"}
                onValueChange={(text: string) => setPassword(text)}
                defaultValue={password}
                blurOnSubmit={true}
            />
            <Pressable
                className="mt-30 bg-primary-darkPurple text-white p-15 rounded-sm items-center w-2/4 mx-auto"
                onPress={() => signIn({ email, password })}
            >
                <Text className="text-body text-primary-white text-l">
                    LOGIN
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};
