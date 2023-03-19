import { Rabbit } from "@/models/rabbits";
import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import rabbit from "@/helpers/rabbit.json";

export const RabbitFoodPicker = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<[]>([]);

    const rabbits = Array.isArray(rabbit)
        ? rabbit.map((bunny: Partial<Rabbit>) => ({
              label: bunny.breeds,
              value: bunny.breeds,
          }))
        : [];

    const selectedItems = value.map((item) => item);

    return (
        <View className="my-10 w-3/4 mx-auto">
            <DropDownPicker
                open={open}
                value={value}
                items={rabbits}
                setOpen={setOpen}
                setValue={setValue}
                multiple={true}
                min={0}
                max={5}
                placeholderStyle={{ fontFamily: "Montserrat-Regular" }}
                placeholder="Que mange votre lapin?"
                dropDownContainerStyle={{ height: 150, zIndex:10 }}
            />
        </View>
    );
};
