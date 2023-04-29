import { configureStore } from "@reduxjs/toolkit";
import workerReducer from "./features/workers/workerSlice";
import clientReducer from "./features/clients/clientSlice";
import sessionReducer from "./features/sessions/sessionSlice";
import navbarReducer from "./features/navbar/navbarSlice";
import scheduleReducer from "./features/schedules/scheduleSlice";

export const store = configureStore({
  reducer: {
    workers: workerReducer,
    clients: clientReducer,
    sessions: sessionReducer,
    navbar: navbarReducer,
    schedules: scheduleReducer,
  },
});
