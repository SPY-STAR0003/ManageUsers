import { configureStore } from '@reduxjs/toolkit';
import users from "./slices/usersSlice";
import loading from "./slices/loadingSlice";
import language from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    users,
    loading,
    language
  },
})