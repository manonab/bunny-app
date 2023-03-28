import {useState} from "react";
import {useDispatch} from "react-redux";
import {auth} from "../api/auth";
import {AuthPayload, SignUpParams} from "../models/auth";
import {useNavigation} from "@react-navigation/native";
import {setSignUp} from "@/utils/userSlice";
interface SignUpResult {
  error: string | null;
  isLoading: boolean;
  signUp: (params: SignUpParams) => Promise<void>;
}
export const useSignUp = (): SignUpResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const signUp = async (params: SignUpParams) => {
    setIsLoading(true);
    auth
      .signUp(params)
      .then((resp: AuthPayload | undefined) => {
        if (resp?.data) {
          navigation.navigate("LoginScreen");
          dispatch(setSignUp({email: params.email, name: params.name}));
        }
      })
      .catch((err: any) => setError(err))
      .finally(() => {
        setIsLoading(false);
        console.log("Finished");
      });
  };

  return {error, isLoading, signUp};
};
