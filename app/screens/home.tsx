import React from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Button,
} from "react-native";
import {BottomBar} from "@/components/bottom-bar";
import {useLogout} from "@/hooks/use-signout";

export const HomeScreen = () => {
  const handleLogout = useLogout();
  return (
    <SafeAreaView className="bg-gray-50 flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="px-30">
            <StatusBar barStyle="dark-content" backgroundColor="#F9F9FB" />
            <View className="flex items-center mt-40">
              <Button title="Se deconnecter" onPress={handleLogout} />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <BottomBar />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
