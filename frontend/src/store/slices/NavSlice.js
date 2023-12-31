import { createSlice, configureStore } from "@reduxjs/toolkit";
const navSlice = createSlice({
  name: "nav",
  initialState: {
    currentPage: "login",
  },
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { changePage } = navSlice.actions;
export default navSlice.reducer;
