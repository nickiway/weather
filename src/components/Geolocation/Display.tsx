import dayjs from "dayjs";

import { ICityResponse } from "@/interfaces/city";
import { Box, Typography } from "@mui/material";

const Display = (props: ICityResponse) => {
  const formated = {
    sunrise: dayjs.unix(props.sunrise).format("HH:mm a"),
    sunset: dayjs.unix(props.sunset).format("HH:mm a"),
  };

  return (
    <Box>
      <Typography variant="h5">
        Your country <b>{props.country}</b>
      </Typography>

      <Typography variant="h6">
        Your city <b>{props.name}</b>
      </Typography>

      <Typography variant="body2">Sunrise: {formated.sunrise}</Typography>
      <Typography variant="body2">Sunset: {formated.sunset}</Typography>
    </Box>
  );
};

export default Display;
