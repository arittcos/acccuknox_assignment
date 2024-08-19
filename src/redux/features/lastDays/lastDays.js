import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const lastDaysDrpDownSlice = createSlice({
  name: "lastDays",
  initialState,
  reducers: {
    lastDaysDrpDownToggle: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { lastDaysDrpDownToggle } = lastDaysDrpDownSlice.actions;

export default lastDaysDrpDownSlice.reducer;
