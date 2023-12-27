import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    userPassword: "",
    loggedIn: false,
  },
  reducers: {
    loginUser: (state, action) => {
        console.log(action.payload.userName);
        console.log(action.payload.userPassword);
        state.userName = action.payload.userName;
        state.userPassword = action.payload.userPassword;
        state.loggedIn = true;
    },
    logoutUser: (state) => {
        state.userName = "";
        state.userPassword = "";
        state.loggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

