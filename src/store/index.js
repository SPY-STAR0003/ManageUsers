import { configureStore } from '@reduxjs/toolkit';
import users from "./slices/usersSlice";
import loading from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    users,
    loading
  },
})