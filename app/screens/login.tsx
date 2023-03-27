import React from "react";

import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import {LoginForm} from "@/components/login-form";
import {useNavigation} from "@react-navigation/native";
import Rabbit from "@/assets/svg/logo.svg";

export const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-gray-50 flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="px-30">
            <StatusBar barStyle="dark-content" backgroundColor="#F9F9FB" />
            <View className="flex items-center mt-40">
              <Text className="text-2xl mb-10 mt-25 font-title">
                Welcome back!
              </Text>
            </View>
            <Rabbit width={100} height={200} className={"self-center"} />
            <LoginForm />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("SignUpScreen")}>
          <View className="mt-10 mx-auto">
            <Text className="text-base font-body">
              New ? Create your account
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
