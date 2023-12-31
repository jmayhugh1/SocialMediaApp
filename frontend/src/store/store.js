import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "./slices/PageSlice.js";
import userReducer from "./slices/UserSlice.js";
import navReducer from "./slices/NavSlice.js";
const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    user: userReducer,
    nav: navReducer,
  },
});

export default store;
