import React, {useState} from "react";
import {RabbitForm} from "@/components/rabbit-form";
import {useNavigation} from "@react-navigation/native";
import {Text, TouchableWithoutFeedback, View, SafeAreaView} from "react-native";
import {RootStackParamList} from "@/models/root-stack-param-list";
import {useSignUp} from "@/hooks/use-signup";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type LastStepScreenRouteProp = NativeStackScreenProps<
  RootStackParamList,
  "LastStepScreen"
>;

export const LastStepScreen: React.FC<LastStepScreenRouteProp> = ({
  route,
}: LastStepScreenRouteProp) => {
  const navigation = useNavigation();
  const [rabbitName, setRabbitName] = useState<string>("");
  const [rabbitAge, setRabbitAge] = useState<number | null>(null);
  const [rabbitBreed, setRabbitBreed] = useState<string>("");
  const [rabbitFood, setRabbitFood] = useState<string[]>([]);
  const [rabbitImage, setRabbitImage] = useState<string>("");
  const {signUp} = useSignUp();

  const handleRabbitNameChange = (text: string) => {
    setRabbitName(text);
  };
  const handleRabbitAgeChange = (age: number) => {
    setRabbitAge(age);
  };
  const handleRabbitBreedChange = (breed: string) => {
    setRabbitBreed(breed);
  };
  const handleRabbitFoodChange = (food: string[]) => {
    setRabbitFood(food);
  };
  const handleRabbitImageChange = (image: string) => {
    setRabbitImage(image);
  };

  return (
    <SafeAreaView className="bg-gray-50 flex-1">
      <RabbitForm
        onRabbitImageChange={handleRabbitImageChange}
        rabbitName={rabbitName}
        onRabbitNameChange={handleRabbitNameChange}
        rabbitAge={rabbitAge}
        onRabbitAgeChange={handleRabbitAgeChange}
        rabbitBreed={rabbitBreed}
        onRabbitBreedChange={handleRabbitBreedChange}
        rabbitFood={rabbitFood}
        onRabbitFoodChange={handleRabbitFoodChange}
      />
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("LoginScreen")}>
        <View className="rounded-sm w-[100px] mx-auto my-10 bg-primary-darkPurple p-15">
          <Text
            className="text-center text-base text-primary-white"
            onPress={() =>
              signUp({
                rabbitName,
                rabbitAge,
                rabbitBreed,
                rabbitFood,
                rabbitImage,
                email: route.params.email,
                name: route.params.name,
                password: route.params.password,
              })
            }>
            Valider
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
