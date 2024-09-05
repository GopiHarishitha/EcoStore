import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loggedIn: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      state.error = false;
      state.errorMessage = "";
    },
    reset: (state) => {
      state.user = {};
      state.loggedIn = false;
      state.error = false;
      state.errorMessage = "";
    },
  },
});

export const { login, reset } = userSlice.actions;
export default userSlice.reducer;
