"use client";

import { useAppSelector } from "../../lib/redux/hooks";

import useFetchWeather from "../../hooks/useFetchWeather";
import useGeolocation from "@/hooks/useGeolocation";

import { CircularProgress } from "@mui/material";
import LocationDisplay from "@/components/Geolocation/Display";

const Home = () => {
  const { city } = useAppSelector((state) => state.geolocation);

  const { state: geolocation } = useGeolocation();
  const { pending } = useFetchWeather(geolocation);

  if (pending || geolocation.pending)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  return (
    <>
      <LocationDisplay {...city} />
    </>
  );
};

export default Home;
