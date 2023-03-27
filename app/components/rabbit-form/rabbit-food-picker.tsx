import React, {useState} from "react";
import {View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import foods from "@/helpers/food.json";
import {Food} from "@/models/food";
import Icon from "@/common/svg";
interface RabbitFoodPickerProps {
  rabbitFood: string[];
  onRabbitFoodChange: (food: string[]) => void;
}

export const RabbitFoodPicker: React.FC<RabbitFoodPickerProps> = ({
  rabbitFood,
  onRabbitFoodChange,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string[]>(rabbitFood);

  const food = Array.isArray(foods)
    ? foods.map((food: Food) => ({
        label: food.name,
        value: food.name,
        icon: () => <Icon width={24} height={24} name={food.icon} />,
      }))
    : [];

  return (
    <View className="my-10 mx-auto">
      <DropDownPicker
        open={open}
        value={value}
        items={food}
        mode="BADGE"
        setOpen={setOpen}
        setValue={setValue}
        multiple={true}
        min={0}
        max={5}
        searchPlaceholder="Aa"
        searchable={true}
        onChangeValue={(food: string[]) => onRabbitFoodChange(food)}
        placeholderStyle={{fontFamily: "Montserrat-Regular"}}
        placeholder="Que mange votre lapin?"
        style={{height: 60, flexDirection:"row"}}
        dropDownContainerStyle={{height: 165, zIndex: -10}}
        badgeDotColors={[
          "#8edf34",
          "#721cb8",
          "#9cf945",
          "#8edf34",
          "#8ac926",
          "#721cb8",
          "#9cf945",
        ]}
      />
    </View>
  );
};
