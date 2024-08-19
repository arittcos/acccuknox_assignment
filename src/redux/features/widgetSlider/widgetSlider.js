import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const widgetSliderSlice = createSlice({
  name: "widgetSlider",
  initialState,
  reducers: {
    widgetSliderToggle: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { widgetSliderToggle } = widgetSliderSlice.actions;

export default widgetSliderSlice.reducer;
