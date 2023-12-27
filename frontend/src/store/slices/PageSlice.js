import { createSlice, configureStore } from "@reduxjs/toolkit";
const activePageSlice = createSlice({
  name: "activePage",
  initialState: {
    value: "login",
  },
  reducers: {
    changeActive: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeActive } = activePageSlice.actions;
export default activePageSlice.reducer;


