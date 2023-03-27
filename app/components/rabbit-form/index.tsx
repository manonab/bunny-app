import {View} from "react-native";
import React from "react";
import {Input} from "@/common/input";
import {SafeAreaView} from "react-native-safe-area-context";
import {RabbitAgePicker} from "./rabbit-age-picker";
import {RabbitBreedsPicker} from "./rabbit-breeds-picker";
import {RabbitFoodPicker} from "./rabbit-food-picker";
import ImagePickerComponent from "@/common/add-media-uploader";
import { Asset } from "react-native-image-picker";

interface RabbitFormProps {
  rabbitName: string;
  onRabbitNameChange: (name: string) => void;
  rabbitAge: number | null;
  onRabbitAgeChange: (age: number) => void;
  rabbitBreed: string;
  onRabbitBreedChange: (breed: string) => void;
  rabbitFood: string[];
  onRabbitFoodChange: (food: string[]) => void;
  onRabbitImageChange: (image: string) => void;
}

export const RabbitForm: React.FC<RabbitFormProps> = ({
  rabbitName,
  onRabbitNameChange,
  rabbitAge,
  onRabbitAgeChange,
  rabbitBreed,
  onRabbitBreedChange,
  rabbitFood,
  onRabbitFoodChange,
  onRabbitImageChange
}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{width: "75%", alignSelf: "center"}}>
        <ImagePickerComponent onImageSelected={onRabbitImageChange} />
        <Input
          label="Nom de votre lapin:"
          placeholder={"Aa"}
          onValueChange={onRabbitNameChange}
          defaultValue={rabbitName}
          returnKeyType="next"
        />
        <RabbitAgePicker
          rabbitAge={rabbitAge}
          onRabbitAgeChange={onRabbitAgeChange}
        />
        <RabbitBreedsPicker
          rabbitBreed={rabbitBreed}
          onRabbitBreedChange={onRabbitBreedChange}
        />
        <RabbitFoodPicker
          rabbitFood={rabbitFood}
          onRabbitFoodChange={onRabbitFoodChange}
        />
      </View>
    </SafeAreaView>
  );
};
