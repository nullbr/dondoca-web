import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWorkers } from "./workersAPI";

export const Statuses = Object.freeze({
  Initial: "Not Fetched",
  Loading: "Loading...",
  UpToDate: "Up To Date",
  Deleted: "Deleted",
  Error: "Error",
});

const initialState = {
  workers: [
    {
      id: 0,
      name: "",
      job: "",
      created_at: "",
      updated_at: "",
      url: "",
    },
  ],
  status: Statuses.Initial,
};

export const fetchWorkersAsync = createAsyncThunk(
  "workers/fetchWorkersAsync",
  async () => {
    const response = await fetchWorkers();
    console.log(response);
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
        state.status = Statuses.Loading;
      })
      .addCase(fetchWorkersAsync.fulfilled, (state, action) => {
        state.status = Statuses.UpToDate;
        state.workers = action.payload;
      })
      .addCase(fetchWorkersAsync.rejected, (state) => {
        state.status = Statuses.Error;
      });
  },
});

// export const {} = workerSlice.actions;

export default workerSlice.reducer;
