import { Rabbit } from "@/models/rabbits";
import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import foods from "@/helpers/food.json";
import { Food } from "@/models/food";
import Icon from "@/common/svg";

export const RabbitFoodPicker = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<[]>([]);

    const food = Array.isArray(foods)
        ? foods.map((food: Food) => ({
              label: food.name,
              value: food.name,
              icon: () => <Icon width={24} height={24} name={food.icon} />,
          }))
        : [];

    const selectedItems = value.map((item) => item);

    return (
        <View className="my-10 w-3/4 mx-auto">
            <DropDownPicker
                open={open}
                value={value}
                items={food}
                setOpen={setOpen}
                setValue={setValue}
                multiple={true}
                min={0}
                max={5}
                placeholderStyle={{ fontFamily: "Montserrat-Regular" }}
                placeholder="Que mange votre lapin?"
                dropDownContainerStyle={{ height: 150, zIndex: 10 }}
            />
        </View>
    );
};
