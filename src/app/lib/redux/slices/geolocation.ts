import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GeolocationSliceInitial {
  position: GeolocationPosition | undefined;
  pending: boolean;
}

const initialState: GeolocationSliceInitial = {
  position: undefined,
  pending: true,
};

export const slice = createSlice({
  initialState: initialState,
  name: "geolocationSlice",

  reducers: {
    setPosition: (state, action: PayloadAction<GeolocationPosition>) => {
      state.position = action.payload;
    },

    setPending: (state, action: PayloadAction<boolean>) => {
      state.pending = action.payload;
    },
  },
});

export const { setPosition, setPending } = slice.actions;

export default slice.reducer;
