"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "../lib/redux/hooks";
import { GeolocationState } from "./useGeolocation";

import { setCity } from "../lib/redux/slices/geolocationSlice";

import { ICityResponse } from "@/interfaces/city";

const api = {
  uri: "https://api.openweathermap.org/data/2.5/forecast",
  key: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
};

const useFetchWeather = (geolocation: GeolocationState) => {
  const dispatch = useAppDispatch();
  const [pending, setPending] = useState<boolean>(true);

  const { latitude, longitude } = geolocation.position?.coords || {};
  const uri = `${api.uri}?lat=${latitude}&lon=${longitude}&appid=${api.key}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPending(true);

        const response = await (await fetch(uri, { method: "GET" })).json();

        console.log(response);
        dispatch(setCity(response?.city as ICityResponse));
      } catch (error) {
        // TODO: add error message to geolocation slice
        console.log(error);
      } finally {
        setPending(false);
      }
    };

    if (geolocation.position === undefined) return;

    fetchData();
  }, [dispatch, geolocation, uri]);

  return { pending: pending || geolocation.pending };
};

export default useFetchWeather;
