import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { KonfEvents } from "../models/events";

const initialState: Partial<KonfEvents> = {
  count: 0,
  events: [],
  loading: "idle",
};

const eventsReducer = createSlice({
  initialState,
  name: "events",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      state = { ...initialState, loading: "loading" };
    });
    builder.addCase(fetchEvents.fulfilled, (state, { payload }) => {
      state.count = payload.count;
      state.events = payload.events;
      state.loading = "completed";
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.loading = "error";
    });
  },
});

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (
    params:
      | Partial<{
          limit: number;
          offset: number;
          search_query: string;
          past_event: boolean;
        }>
      | any,
    thunkAPi
  ) => {
    try {
      Object.keys(params).forEach((key) =>
        params[key] === undefined || params[key] === null || params[key] === ""
          ? delete params[key]
          : {}
      );
      const response = await axios.get<KonfEvents>(
        `https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events`,
        { params }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPi.rejectWithValue("rejected");
    }
  }
);

export default eventsReducer.reducer;
