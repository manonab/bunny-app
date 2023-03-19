import { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export const RabbitAgePicker = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<number | null>(null);

    const numbers = [...Array(100).keys()].map((number) => ({
        label: number.toString(),
        value: number,
    }));

    return (
        <View className="my-10 w-3/4 mx-auto z-10">
            <DropDownPicker
                open={open}
                value={value}
                items={numbers}
                setOpen={setOpen}
                setValue={setValue}
                placeholderStyle={{ fontFamily: "Montserrat-Regular" }}
                placeholder="Quel age a votre lapin?"
                dropDownContainerStyle={{ height: 150, zIndex:10 }}
            />
        </View>
    );
};
