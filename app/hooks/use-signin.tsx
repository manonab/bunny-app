import {useState} from "react";
import {useDispatch} from "react-redux";
import {auth} from "../api/auth";
import {AuthPayload} from "../models/auth";
import {useNavigation} from "@react-navigation/native";
import { setLogin } from "@/utils/userSlice";

interface SignInParams {
  email: string;
  password: string;
}

interface SignInResult {
  error: string | null;
  isLoading: boolean;
  signIn: (params: SignInParams) => Promise<void>;
}

export const useSignIn = (): SignInResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

const signIn = async (params: SignInParams) => {
  setIsLoading(true);
  auth
    .signIn(params)
    .then((resp: AuthPayload | undefined) => {
      if (resp?.data) {
        const user_id = resp?.data.user_id.toString();
        dispatch(setLogin(user_id));
        navigation.navigate("HomeScreen");
      }
    })
    .catch((err: any) => setError(err))
    .finally(() => {
      setIsLoading(false);
      console.log("Resolved");
  });
};

  return {error, isLoading, signIn};
};
