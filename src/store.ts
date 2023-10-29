import { combineReducers, configureStore } from "@reduxjs/toolkit";
import workerReducer from "./features/workers/workerSlice";
import clientReducer from "./features/clients/clientSlice";
import sessionReducer from "./features/sessions/sessionSlice";
import navbarReducer from "./features/navbar/navbarSlice";
import scheduleReducer from "./features/schedules/scheduleSlice";

const rootReducer = combineReducers({
  workers: workerReducer,
  clients: clientReducer,
  sessions: sessionReducer,
  navbar: navbarReducer,
  schedules: scheduleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
