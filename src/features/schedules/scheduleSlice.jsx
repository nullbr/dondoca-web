import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSchedules } from "../../api/schedulesAPI";

const initialState = {
  schedules: [],
  loading: true,
  error: false,
  errorMessages: [],
};

export const fetchSchedulesAsync = createAsyncThunk(
  "schedules/fetchSchedulesAsync",
  async (payload, { getState, rejectWithValue }) => {
    const sessionsState = getState().sessions;

    const response = await fetchSchedules(
      sessionsState.accessToken,
      payload || {}
    );

    if (response.errors) {
      return rejectWithValue(response.errors);
    }

    return response.data;
  }
);

const scheduleSlice = createSlice({
  name: "schedules",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchedulesAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errorMessages = [];
      })
      .addCase(fetchSchedulesAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = false;
        state.errorMessages = [];
        state.schedules = sortScheduleByDate(payload);
      })
      .addCase(fetchSchedulesAsync.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMessages = payload;
      });
  },
});

// export const {} = scheduleSlice.actions;

export default scheduleSlice.reducer;

function formatTime(isoDateString) {
  const date = new Date(isoDateString);
  const hours = date.getHours().toString().padStart(2, "0"); // get the hours and pad with a leading zero if necessary
  const minutes = date.getMinutes().toString().padStart(2, "0"); // get the minutes and pad with a leading zero if necessary
  const time = `${hours}:${minutes}`; // combine the hours and minutes into a string in the hh:mm format
  return time;
}

function formatDate(isoDateString) {
  const date = new Date(isoDateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

function formatSchedules(schedules) {
  return schedules.map((schedule) => {
    return {
      id: schedule.id,
      startAtDate: formatDate(schedule.start_at),
      startAtTime: formatTime(schedule.start_at),
      endAtTime: formatTime(schedule.end_at),
      createdAt: formatDate(schedule.created_at),
      updatedAt: formatDate(schedule.updated_at),
      client: {
        id: schedule.client.id,
        firstName: schedule.client.first_name,
        lastName: schedule.client.last_name,
      },
      worker: {
        id: schedule.worker.id,
        firstName: schedule.worker.first_name,
        lastName: schedule.worker.last_name,
      },
    };
  });
}

function sortScheduleByDate(schedules) {
  schedules = formatSchedules(schedules);

  var scheduleByDate = {};

  schedules.forEach((schedule) => {
    var date = schedule.startAtDate;
    if (!scheduleByDate[date]) {
      scheduleByDate[date] = [];
    }
    scheduleByDate[date].push(schedule);
  });

  var sortedScheduleByDate = Object.keys(scheduleByDate)
    .sort()
    .map((date) => {
      return {
        date,
        data: scheduleByDate[date],
      };
    });

  return sortedScheduleByDate;
}
