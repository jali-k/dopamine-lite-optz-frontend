// src/state/reducers/userReducer.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state
interface UserState {
  username: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  username: '',
  isAuthenticated: false,
};

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.username = action.payload.username;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    clearUser(state) {
      state.username = '';
      state.isAuthenticated = false;
    },
  },
});

// Export actions
export const { setUser, clearUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
