import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  token: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.phonenumber = action.payload.phonenumber;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    updateUser: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    logout: (state) => {
      state.name = "";
      state.phonenumber = "";
      state.email = "";
      state.token = "";
    },
  },
});
export const { setUser, updateUser, logout } = userSlice.actions;

export default userSlice.reducer;
