import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  SignUpScreen: undefined;
  LastStepScreen: undefined;
};

export type RootNavigationProp = NavigationProp<RootStackParamList>;
