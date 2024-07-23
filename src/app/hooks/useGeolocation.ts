import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";
import { setPosition, setPending } from "@/app/lib/redux/slices/geolocation";

const useGeolocation = () => {
  const dispatch = useAppDispatch();
  const { position, pending } = useAppSelector((state) => state.geolocation);

  const handleError = (error: GeolocationPositionError) => {
    console.log(error);
    dispatch(setPending(false));
  };

  const handleSuccess = (position: GeolocationPosition) => {
    dispatch(setPosition(position));
    dispatch(setPending(false));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { position, pending };
};

export default useGeolocation;
