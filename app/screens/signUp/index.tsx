import {Input} from "@/common/input";
import {useNavigation} from "@react-navigation/native";
import React, {useState} from "react";
import {Text, TouchableWithoutFeedback, View, SafeAreaView} from "react-native";
import Profile from "@/assets/svg/nonbinary.svg";

export const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createUserObject = () => {
    navigation.navigate("LastStepScreen", {
      email: email,
      name: name,
      password: password,
    });
  };

  return (
    <SafeAreaView className="bg-gray-50 flex-1">
      <View className="w-3/4 mx-auto my-30 flex-1 flex-col justify-center">
        <View className="items-center">
          <Profile
            width={100}
            height={100}
            className={"text-primary-lighterPurple"}
          />
        </View>
        <View className="my-5">
          <Input
            label="Nom:"
            placeholder="Aa"
            defaultValue={name}
            onValueChange={(text: string) => setName(text)}
          />
        </View>
        <View className="my-5">
          <Input
            label="Email:"
            placeholder="Aa"
            defaultValue={email}
            onValueChange={(text: string) => setEmail(text)}
          />
        </View>
        <View className="my-5">
          <Input
            label="Mot de passe:"
            placeholder="Aa"
            defaultValue={password}
            password={true}
            onValueChange={(text: string) => setPassword(text)}
          />
        </View>
      </View>
      <TouchableWithoutFeedback onPress={createUserObject}>
        <View className="rounded-sm w-[100px] mx-auto my-10 bg-primary-darkPurple p-15">
          <Text className="text-center font-body text-base text-primary-white">
            Suivant
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
