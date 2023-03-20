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
                placeholderStyle={{ fontFamily: "Montserrat-Regular" }}
                placeholder="Que mange votre lapin?"
                dropDownContainerStyle={{ height: 150, zIndex: -10 }}
                badgeColors={["#EFF0F5"]}
                badgeStyle={{
                    padding: 5,
                }}
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
