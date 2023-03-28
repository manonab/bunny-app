import React, {useState} from "react";
import {View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import rabbit from "@/helpers/rabbit.json";
import RabbitLogo from "@/assets/svg/rabbit.svg";
import {Rabbits} from "@/models/rabbits";

interface RabbitBreedsPickerProps {
  rabbitBreed: string;
  onRabbitBreedChange: (breed: string) => void;
}

export const RabbitBreedsPicker: React.FC<RabbitBreedsPickerProps> = ({
  rabbitBreed,
  onRabbitBreedChange,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(rabbitBreed);

  const rabbits = Array.isArray(rabbit)
    ? rabbit.map((bunny: Partial<Rabbits>) => ({
        label: bunny.breed,
        value: bunny.breed,
        icon: () => <RabbitLogo width={24} height={24} />,
      }))
    : [];

  return (
    <View className="my-10 mx-auto z-10">
      <DropDownPicker
        open={open}
        value={value}
        items={rabbits}
        setOpen={setOpen}
        setValue={setValue}
        searchable={true}
        searchPlaceholder="Aa"
        placeholderStyle={{fontFamily: "Montserrat-Regular"}}
        placeholder="Quel est la race de votre lapin?"
        dropDownContainerStyle={{height: 150}}
        onChangeValue={(breed: string) => onRabbitBreedChange(breed)}
      />
    </View>
  );
};
