import { configureStore } from "@reduxjs/toolkit";
import workerReducer from "./features/workers/workerSlice";
import clientReducer from "./features/clients/clientSlice";
import sessionReducer from "./features/sessions/sessionSlice";
import navbarReducer from "./features/navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    workers: workerReducer,
    clients: clientReducer,
    sessions: sessionReducer,
    navbar: navbarReducer,
  },
});
