import { createSlice } from "@reduxjs/toolkit";
import { SessionResponse, UserResponse } from "../../types/sessions";
import { removeRefreshToken, storeRefreshToken } from "../../lib/localStore";

export interface AppState {
  currentUser: UserResponse | null;
  session: SessionResponse | null;
}

const initialState: AppState = {
  currentUser: null,
  session: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser(state, { payload }: { payload: UserResponse }) {
      state.currentUser = payload;
    },
    setSession(state, { payload }: { payload: SessionResponse }) {
      state.session = payload;

      storeRefreshToken(payload.refresh_token);
    },
    deleteSession(state) {
      state.session = null;

      removeRefreshToken();
    },
  },
});

export const { setUser, setSession, deleteSession } = appSlice.actions;

export default appSlice.reducer;
