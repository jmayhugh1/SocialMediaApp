import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { serverUrl } from "../../constants.js";
const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: localStorage.getItem("userVal") || "",
    userPassword: "",
    loggedIn: false,
    allUsers: [],
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
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      console.log("fulfilled");
      console.log(action.payload);
      state.allUsers = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      console.log("rejected");
      console.log(action.payload);
      state.allUsers = [];
    }
    );
    builder.addCase(getAllUsers.pending, (state, action) => {
      console.log("pending");
      console.log(action.payload);
      state.allUsers = [];
    });
  },
});
export const getAllUsers = createAsyncThunk("user/getUser", async () => {
  console.log(`getting all users from ${serverUrl}/user/getUser`);
  const response = await fetch(`${serverUrl}/user/getUser`);
  const data = await response.json();
  console.log(data);
  return data;
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
