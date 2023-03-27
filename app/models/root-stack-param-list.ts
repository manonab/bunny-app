import { NavigationProp } from "@react-navigation/native";
import { UserFormFields } from "./user";

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  SignUpScreen: undefined;
  LastStepScreen: {email: string; name: string; password: string;};
};

export type RootNavigationProp = NavigationProp<RootStackParamList>;
