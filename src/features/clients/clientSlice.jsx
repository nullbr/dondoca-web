import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchClients } from "../../api/clientsAPI";

const initialState = {
  clients: [
    {
      id: 0,
      firstName: "",
      lastName: "",
      createdAt: "",
      imageUrl: "",
      birthday: "",
    },
  ],
  loading: true,
  error: false,
  errorMessages: [],
};

export const fetchClientsAsync = createAsyncThunk(
  "clients/fetchClientsAsync",
  async (_payload, { getState, rejectWithValue }) => {
    const sessionsState = getState().sessions;
    const response = await fetchClients(sessionsState.accessToken);

    if (response.errors) {
      return rejectWithValue(response.errors);
    }

    return response;
  }
);

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClientsAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(fetchClientsAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = false;
        state.errorMessages = [];
        state.clients = payload.map((client) => {
          return {
            id: client.id,
            firstName: client.first_name,
            lastName: client.last_name,
            phoneNumber: formatPhoneNumber(client.phone_number.toString()),
            createdAt: formatDate(client.created_at),
            imageUrl: client.image_url,
            birthday: formatBirthday(client.birthday),
          };
        });
      })
      .addCase(fetchClientsAsync.rejected, (state, payload) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = payload;
      });
  },
});

// export const {} = clientSlice.actions;

export default clientSlice.reducer;

function formatDate(isoDateString) {
  const date = new Date(isoDateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

function formatBirthday(isoDateString) {
  const date = new Date(isoDateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${day}/${month}`;
}

function formatPhoneNumber(number) {
  const areaCode = number.slice(0, 2);
  const prefix = number.slice(2, 7);
  const suffix = number.slice(7);
  return `(${areaCode})${prefix}-${suffix}`;
}
