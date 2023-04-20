import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollY: 10,
  showLogoutModal: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setScrollY: (state, { payload }) => {
      if (state.scrollY !== payload) {
        state.scrollY = payload;
      }
    },
    showLogoutModal: (state) => {
      state.showLogoutModal = true;
    },
    hideLogoutModal: (state) => {
      state.showLogoutModal = false;
    },
  },
});

export const { setScrollY, showLogoutModal, hideLogoutModal } =
  navbarSlice.actions;

export default navbarSlice.reducer;
