import {useState} from "react";
import {View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

interface AgeProps {
  rabbitAge: number | null;
  onRabbitAgeChange: (age: number) => void;
}

export const RabbitAgePicker: React.FC<AgeProps> = ({
  rabbitAge,
  onRabbitAgeChange,
}: AgeProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const numbers = [...Array(21).keys()].map(number => ({
    label: number.toString(),
    value: number,
  }));

  return (
    <View className="my-10 mx-auto z-[99]">
      <DropDownPicker
        open={open}
        value={rabbitAge}
        items={numbers}
        setOpen={setOpen}
        setValue={(age: any) => onRabbitAgeChange(age)}
        placeholderStyle={{fontFamily: "Montserrat-Regular"}}
        placeholder="Quel age a votre lapin?"
        dropDownContainerStyle={{height: 150, zIndex: 10}}
      />
    </View>
  );
};
