import {fetcher} from "../helpers/fetcher";
import {Auth, AuthPayload, SignUpParams} from "../models/auth";

export const auth = {
  signIn: (data: Auth): Promise<AuthPayload | undefined> =>
    fetcher("http://localhost:3000/signin", {
      data,
      method: "POST",
    }),
  signUp: (data: SignUpParams): Promise<AuthPayload | undefined> =>
    fetcher("http://localhost:3000/sign_up", {data, method: "POST"}),
};
