import { useEffect, useState, useTransition } from "react";

export interface GeolocationState {
  position?: GeolocationPosition;
  error?: GeolocationPositionError;
  pending: boolean;
}

const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({ pending: true });
  const [_, startTransition] = useTransition();

  const handleError = (error: GeolocationPositionError) => {
    setState({ error, pending: false });
  };

  const handleSuccess = (position: GeolocationPosition) => {
    setState({ position, pending: false });
  };

  useEffect(() => {
    startTransition(() => {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    });
  }, []);

  return { state };
};

export default useGeolocation;
