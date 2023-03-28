import {fetcher} from "@/helpers/IFetcher";
import { RabbitsRequest } from "@/models/rabbits";
import { RootState } from "@/utils/reducer";
import { useSelector } from "react-redux";
import useSWR from "swr";

export const useGetRabbits = () => {
  const user_token = useSelector((state: RootState) => state.user.user_token);
  const user_id = useSelector((state: RootState) => state.user.user_id);

  const { data, error } = useSWR<RabbitsRequest>(`http://localhost:3000/home?userId=${user_id}`, url => fetcher(url, user_token));

  return {
    rabbits: data,
    isLoading: !error && !data,
    isError: error,
  };
};
