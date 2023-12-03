import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./features/navbar/navbarSlice";
import appReducer from "./features/app/appSlice";

const rootReducer = combineReducers({
  app: appReducer,
  navbar: navbarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
