"use client";

import useGeolocation from "@/app/hooks/useGeolocation";

export default function Home() {
  const { pending, position } = useGeolocation();

  if (pending) return <div>Loading...</div>;

  const { latitude, longitude } = position?.coords || {};

  const uri = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`;
  fetch(uri).then(console.log);

  return (
    <>
      <div>latitude {latitude} </div>
      <div>longitude {longitude} </div>
    </>
  );
}
