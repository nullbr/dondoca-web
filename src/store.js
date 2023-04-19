import { configureStore } from "@reduxjs/toolkit";
import workerReducer from "./features/workers/workerSlice";
import sessionReducer from "./features/sessions/sessionSlice";

export const store = configureStore({
  reducer: {
    workers: workerReducer,
    sessions: sessionReducer,
  },
});
