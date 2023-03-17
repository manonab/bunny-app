import { Text, TouchableOpacity, View, TextInput } from "react-native";
import React, { useRef, useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const passwordRef = useRef<TextInput>(null);

  return (
    <View className="flex-1">
      <View className="mb-30">
        {/* <Input
          className="mb-30"
          label={"label"}
          placeholder={"email"}
          onValueChange={(text: string) => setEmail(text)}
          defaultValue={email}
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
        /> */}
      </View>
      {/* <Input
        ref={passwordRef}
        className="mb-30"
        label={"label"}
        password={true}
        placeholder={"password"}
        onValueChange={(text: string) => setPassword(text)}
        defaultValue={password}
        blurOnSubmit={true}
      /> */}
      <View className="mt-30 bg-primary-500 text-white p-15 rounded-sm items-center">
        <TouchableOpacity>
          <Text className="text-gray-50 text-body">LGON</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
