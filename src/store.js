import { configureStore } from "@reduxjs/toolkit";
import workerReducer from "./features/workers/workerSlice";
import sessionReducer from "./features/sessions/sessionSlice";
import navbarReducer from "./features/navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    workers: workerReducer,
    sessions: sessionReducer,
    navbar: navbarReducer,
  },
});
