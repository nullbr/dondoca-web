import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUser,
  editUserWithToken,
  getCurrentUser,
  loginWithCredentials,
  logoutUserWithToken,
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

export const loginUser = createAsyncThunk(
  "session/loginUser",
  async (credentials, { rejectWithValue }) => {
    const loginResponse = await loginWithCredentials(credentials);
    if (loginResponse.error) {
      return rejectWithValue(loginResponse.error);
    }

    const userResponse = await getCurrentUser(loginResponse.access_token);
    if (userResponse.error) {
      return rejectWithValue(userResponse.data);
    }

    const response = {
      ...loginResponse,
      ...userResponse,
    };

    return response;
  }
);

export const logoutUser = createAsyncThunk(
  "session/logoutUser",
  async ({ refreshToken }, { rejectWithValue }) => {
    const response = await logoutUserWithToken(refreshToken);

    if (response.errors) {
      return rejectWithValue(response.errors);
    }

    return response;
  }
);

export const editUser = createAsyncThunk(
  "session/editUser",
  async (payload, { rejectWithValue }) => {
    const response = await editUserWithToken(payload);

    if (response.errors || response.error) {
      const error = response.errors || response.error;
      return rejectWithValue(error);
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
  reducers: {
    resetErrorState: (state) => {
      state.error = false;
      state.errorMessages = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.currentUser = {
          id: payload.id,
          email: payload.email,
          role: payload.role,
          createdAt: payload.created_at,
        };
        state.accessToken = payload.access_token;
        state.refreshToken = payload.refresh_token;
        state.expiresIn = payload.expires_in;
        state.tokenType = payload.token_type;

        storeRefreshToken(payload.refresh_token);

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(signUpUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.currentUser = {
          id: payload.id,
          email: payload.email,
          role: payload.role,
          createdAt: payload.created_at,
        };
        state.accessToken = payload.access_token;
        state.refreshToken = payload.refresh_token;
        state.expiresIn = payload.expires_in;

        storeRefreshToken(payload.refresh_token);

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = [
          "Email ou senha incorreta. Por favor, tente novamente.",
        ];
      })
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(refreshAccessToken.fulfilled, (state, { payload }) => {
        state.currentUser = {
          id: payload.id,
          email: payload.email,
          role: payload.role,
          createdAt: payload.created_at,
        };
        state.accessToken = payload.access_token;
        state.refreshToken = payload.refresh_token;
        state.expiresIn = payload.expires_in;

        storeRefreshToken(payload.refresh_token);

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(refreshAccessToken.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.currentUser = initialState.currentUser;
        state.accessToken = initialState.accessToken;
        state.refreshToken = null;
        state.expiresIn = initialState.expiresIn;

        removeRefreshToken();

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = [payload.error];
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.currentUser = {
          id: payload.id,
          email: payload.email,
          role: payload.role,
          createdAt: payload.created_at,
        };
        state.accessToken = payload.access_token;
        state.refreshToken = payload.refresh_token;
        state.expiresIn = payload.expires_in;
        state.tokenType = payload.token_type;

        storeRefreshToken(payload.refresh_token);

        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(editUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = payload;
      });
  },
});

export const { resetErrorState } = sessionSlice.actions;

export default sessionSlice.reducer;

function storeRefreshToken(token) {
  localStorage.setItem("refreshToken", token);
}

function removeRefreshToken() {
  localStorage.removeItem("refreshToken");
}

function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}
