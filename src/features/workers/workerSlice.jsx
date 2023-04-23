import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWorkers } from "../../api/workersAPI";

const initialState = {
  workers: [
    {
      id: 0,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      job: "",
      instagram: "",
      createdAt: "",
      imageUrl: "",
    },
  ],
  loading: true,
  error: false,
  errorMessages: [],
};

export const fetchWorkersAsync = createAsyncThunk(
  "workers/fetchWorkersAsync",
  async (_payload, { getState, rejectWithValue }) => {
    const sessionsState = getState().sessions;
    const response = await fetchWorkers(sessionsState.accessToken);

    if (response.errors) {
      return rejectWithValue(response.errors);
    }

    return response;
  }
);

const workerSlice = createSlice({
  name: "workers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkersAsync.pending, (state) => {
        state.loading = false;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(fetchWorkersAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = false;
        state.errorMessages = [];
        state.workers = payload.map((worker) => {
          return {
            id: worker.id,
            firstName: worker.first_name,
            lastName: worker.last_name,
            phoneNumber: formatPhoneNumber(worker.phone_number.toString()),
            job: worker.job,
            instagram: worker.instagram,
            createdAt: formatDate(worker.created_at),
            imageUrl: worker.image_url,
          };
        });
      })
      .addCase(fetchWorkersAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = [];
      });
  },
});

// export const {} = workerSlice.actions;

export default workerSlice.reducer;

function formatDate(isoDateString) {
  const date = new Date(isoDateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

function formatPhoneNumber(number) {
  const areaCode = number.slice(0, 2);
  const prefix = number.slice(2, 7);
  const suffix = number.slice(7);
  return `(${areaCode})${prefix}-${suffix}`;
}
