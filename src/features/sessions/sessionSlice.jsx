import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUser,
  getCurrentUser,
  requestAccessTokenWithRefreshToken,
} from "../../api/sessionAPI";

const initialState = {
  currentUser: {
    id: null,
    email: null,
    role: null,
    createdAt: null,
  },
  loading: true,
  error: false,
  errorMessages: [],
  accessToken: null,
  refreshToken: getRefreshToken(),
  expiresIn: null,
  tokenType: null,
};

export const signUpUser = createAsyncThunk(
  "session/signUpUser",
  async ({ email, password }, { rejectWithValue }) => {
    const response = await createUser({ email, password });

    if (response.errors) {
      return rejectWithValue(response.errors);
    }

    return response;
  }
);

export const refreshAccessToken = createAsyncThunk(
  "session/refreshAccessToken",
  async ({ refreshToken }, { rejectWithValue }) => {
    if (!refreshToken) {
      return rejectWithValue("No refresh token");
    }

    const refreshResponse = await requestAccessTokenWithRefreshToken(
      refreshToken
    );
    if (refreshResponse.error) {
      return rejectWithValue(refreshResponse.data);
    }

    const userResponse = await getCurrentUser(refreshResponse.access_token);
    if (userResponse.error) {
      return rejectWithValue(userResponse.data);
    }

    const response = {
      ...refreshResponse,
      ...userResponse,
    };

    return response;
  }
);

const sessionSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          createdAt: action.payload.created_at,
        };
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.expiresIn = action.payload.expires_in;
        state.tokenType = action.payload.token_type;

        storeRefreshToken(action.payload.refreshToken);

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = action.payload;
      })
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.currentUser = {
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          createdAt: action.payload.created_at,
        };
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.expiresIn = action.payload.expires_in;

        storeRefreshToken(action.payload.refreshToken);

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(refreshAccessToken.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// export const {} = sessionSlice.actions;

export default sessionSlice.reducer;

function storeRefreshToken(token) {
  localStorage.setItem("refreshToken", token);
}

// function removeRefreshToken() {
//   localStorage.removeItem();
// }

function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}
