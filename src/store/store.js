import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import counterSlice from "../features/counter/counterSlice";

import postReducer from "../features/counter/post/postSlice";

export const store = configureStore({
  reducer: {
    // counter: counterSlice,
    post: postReducer,
  },
 
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
