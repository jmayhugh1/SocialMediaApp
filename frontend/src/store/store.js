import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "./slices/PageSlice.js";
import userReducer from "./slices/UserSlice.js";
const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    user: userReducer,
  },
});

export default store;
