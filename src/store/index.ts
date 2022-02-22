import { configureStore } from "@reduxjs/toolkit";
import events from "./events";

const store = configureStore({
  reducer: {
    events,
  },
});

export default store;
