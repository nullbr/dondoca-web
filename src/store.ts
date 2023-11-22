import { combineReducers, configureStore } from "@reduxjs/toolkit";
import workerReducer from "./features/workers/workerSlice";
import sessionReducer from "./features/sessions/sessionSlice";
import navbarReducer from "./features/navbar/navbarSlice";
import appReducer from "./features/app/appSlice";

const rootReducer = combineReducers({
  app: appReducer,
  workers: workerReducer,
  sessions: sessionReducer,
  navbar: navbarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
