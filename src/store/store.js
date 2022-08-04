import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
