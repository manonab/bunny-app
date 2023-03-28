import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './reducer';

export interface UserState {
  isAuthenticated: boolean;
  user_token: string;
  user_id: number;
  name: string | null;
  email: string | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  user_token: "",
  user_id: 0,
  name: null,
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<{ user_id: number, user_token: string }>) => {
      state.isAuthenticated = true;
      state.user_id = action.payload.user_id; 
      state.user_token = action.payload.user_token;
    },
    setLogout: state => {
      state.isAuthenticated = false;
      state.user_id = 0;
    },
    setSignUp: (
      state,
      action: PayloadAction<{
        email: string;
        name: string;
      }>,
    ) => {
      state.isAuthenticated = false;
      state.email = action.payload.email;
      state.name = action.payload.name
    },
  },
});

export const { setSignUp, setLogin, setLogout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
