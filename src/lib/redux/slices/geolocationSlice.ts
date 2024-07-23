import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { ICityResponse } from "@/interfaces/city";

export interface GeolocationSliceInitial {
  city: ICityResponse;
}

const initialState: GeolocationSliceInitial = {
  city: {
    country: "",
    coord: { lat: 0, lon: 0 },
    id: 0,
    name: "",
    population: 0,
    sunrise: 0,
    sunset: 0,
    timezone: 0,
  },
};

export const slice = createSlice({
  initialState: initialState,
  name: "geolocationSlice",

  reducers: {
    setCity: (state, action: PayloadAction<ICityResponse>) => {
      state.city = action.payload;
    },
  },
});

export const { setCity } = slice.actions;

export default slice.reducer;
