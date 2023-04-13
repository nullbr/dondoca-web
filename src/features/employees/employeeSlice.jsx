import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEmployees } from "./employeeAPI";

export const Statuses = Object.freeze({
  Initial: "Not Fetched",
  Loading: "Loading...",
  UpToDate: "Up To Date",
  Deleted: "Deleted",
  Error: "Error",
});

const initialState = {
  employees: [
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

export const fetchEmployeesAsync = createAsyncThunk(
  "employees/fetchEmployeesAsync",
  async () => {
    const response = await fetchEmployees();
    console.log(response);
    return response;
  }
);

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeesAsync.pending, (state) => {
        state.status = Statuses.Loading;
      })
      .addCase(fetchEmployeesAsync.fulfilled, (state, action) => {
        state.status = Statuses.UpToDate;
        state.employees = action.payload;
      })
      .addCase(fetchEmployeesAsync.rejected, (state) => {
        state.status = Statuses.Error;
      });
  },
});

// export const {} = employeeSlice.actions;

export default employeeSlice.reducer;
