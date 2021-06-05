import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { auth: authenticationSlice.reducer },
});

export const authActions = authenticationSlice.actions;

export default store;
