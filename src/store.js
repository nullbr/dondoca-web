import { configureStore } from "@reduxjs/toolkit";
import workerReducer from "./features/workers/workerSlice";

export const store = configureStore({
  reducer: {
    workers: workerReducer,
  },
});
