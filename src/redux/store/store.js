import { configureStore } from "@reduxjs/toolkit";
import widgetSliderReducer from "../features/widgetSlider/widgetSlider";
import lastDaysReducer from "../features/lastDays/lastDays";
import widgetActiveReducer from "../features/widgetActive/widgetActive";

export const store = configureStore({
  reducer: {
    widgetSlider: widgetSliderReducer,
    lastDays: lastDaysReducer,
    widgetActive: widgetActiveReducer,
  },
});
