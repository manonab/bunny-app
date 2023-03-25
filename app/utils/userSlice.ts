import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './reducer';

export interface UserState {
  isAuthenticated: boolean;
  user_id: string | null;
  name: string | null;
  email: string | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  user_id: null,
  name: null,
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.user_id = action.payload;
    },
    setLogout: state => {
      state.isAuthenticated = false;
      state.user_id = null;
    },
    setSignUp: (
      state,
      action: PayloadAction<{
        password: string;
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
