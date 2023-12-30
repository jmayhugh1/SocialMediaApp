import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: localStorage.getItem("userVal") || "",
    userPassword: "",
    loggedIn: false,
  },
  reducers: {
    loginUser: (state, action) => {
      
      console.log(action.payload.userName);
      console.log(action.payload.userPassword);
      state.userName = action.payload.userName;
      state.userPassword = action.payload.userPassword;
      console.log("adding user to local storage");
      localStorage.setItem("userVal", action.payload.userName);
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
