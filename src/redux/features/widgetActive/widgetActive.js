import { createSlice } from "@reduxjs/toolkit";
import Widget from "../../../views/widgets/widgets";

const initialState = {
  value: Widget,
};

export const widgetActiveSlice = createSlice({
  name: "widgetActive",
  initialState,
  reducers: {
    widgetActive: (state, actions) => {
      state.value[actions.payload.categoryIdx].widgets[
        actions.payload.widgetIdx
      ].widgetActiveStatus =
        !state.value[actions.payload.categoryIdx].widgets[
          actions.payload.widgetIdx
        ].widgetActiveStatus;
    },
  },
});

// Action creators are generated for each case reducer function
export const { widgetActive } = widgetActiveSlice.actions;

export default widgetActiveSlice.reducer;
