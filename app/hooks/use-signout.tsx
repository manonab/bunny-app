import {useDispatch} from "react-redux";
import {useCallback} from "react";
import { setLogout } from "@/utils/userSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(setLogout()), [dispatch]);
};
