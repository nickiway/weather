import { configureStore } from "@reduxjs/toolkit";

import geolocation from "./slices/geolocationSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { geolocation },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
