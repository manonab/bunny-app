import React, { useCallback } from "react";

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
import { LoginForm } from "@/components/login-form";

export const LoginScreen = () => {
  return (
    <SafeAreaView className="bg-gray-25">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
        className="flex-1">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 px-30 bg-gray-25">
            <StatusBar barStyle="dark-content" backgroundColor="#F9F9FB" />
            <View className="flex items-center mt-40">
              <Text className="text-2xl font-title mb-40 mt-25">Login</Text>
            </View>
            <LoginForm />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
