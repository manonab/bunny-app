import React, { forwardRef, ReactNode, useState } from "react";
import { Text, TextInput, View } from "react-native";

interface Props {
  className?: string;
  label?: string;
  defaultValue: string;
  placeholder: string;
  icon?: ReactNode;
  error?: string;
  password?: boolean;
  required?: boolean;
  blurOnSubmit?: boolean;
  returnKeyType?: "done" | "next" | "go" | "search" | "send";
  multiline?: boolean;
  onSubmitEditing?: () => void;
  onValueChange: (text: string) => void | undefined;
  onBlur?: () => void;
  onFocus?: () => void;
}

export const Input = forwardRef<TextInput, Props>(
  (
    {
      className,
      label,
      placeholder,
      defaultValue,
      icon,
      error,
      password = false,
      returnKeyType,
      multiline,
      onSubmitEditing,
      blurOnSubmit = false,
      onBlur,
      onFocus,
      onValueChange,
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
      <View className={className}>
        {label && <Text className="font-body text-16 mb-10">{label}</Text>}
        <View
          className={`-ml-[4px] rounded flex flex-row items-center rounded-[12px] px-[4px] ${
            isFocused && !error
              ? "bg-primary-50"
              : isFocused && error
              ? "bg-danger-50"
              : ""
          } ${multiline ? "h-[104px]" : "h-[56px]"}`}>
          <View
            className={`px-16 py-12 bg-[#fff] flex flex-row w-full rounded-sm border border-gray-200 ${
              isFocused && !error
                ? "border-primary-500"
                : isFocused && error
                ? "border-danger-500"
                : error
                ? "border-danger-500"
                : ""
            } ${
              multiline ? "h-[96]" : "h-[48] items-center justify-between "
            }`}>
            <TextInput
              ref={ref}
              autoCorrect={false}
              className="w-10/12 bg-[#fff] lowercase"
              defaultValue={defaultValue}
              secureTextEntry={password && !showPassword}
              placeholder={placeholder}
              onChangeText={onValueChange}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKeyType}
              multiline={multiline}
              onFocus={() => {
                onFocus?.();
                setIsFocused(true);
              }}
              onBlur={() => {
                onBlur?.();
                setIsFocused(false);
              }}
              blurOnSubmit={blurOnSubmit}
            />
            {icon ? icon : null}
          </View>
        </View>
        {error ? (
          <Text className="text-danger-600 text-12 mt-5">{error}</Text>
        ) : null}
      </View>
    );
  },
);
