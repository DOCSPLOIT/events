import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { KonfEvents } from "../models/events";

const initialState: Partial<KonfEvents> = { count: 0, events: [] };

const eventsReducer = createSlice({
  initialState,
  name: "events",
  reducers: {
    getEvents: (state, action) => {
      const params = action.payload;
      Object.keys(params).forEach((key) =>
        params[key] === undefined || params[key] === null || params[key] === ""
          ? delete params[key]
          : {}
      );
      axios
        .get<KonfEvents>(
          `https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=10`,
          { params }
        )
        .then((res) => {
          state = res.data;
        })
        .catch((error) => {
          console.error(error);
          throw error;
        });
    },
  },
});

export const { getEvents } = eventsReducer.actions;

export default eventsReducer.reducer;
