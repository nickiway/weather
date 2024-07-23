"use client";

import { useState } from "react";

import { Box, Button } from "@mui/material";
import List from "./List";

import { modes } from "@/constants";

const ThemePicker = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen((open) => !open);

  const renderThemeContainer = () => {
    if (open) return <List list={modes} />;
  };

  return (
    <>
      {renderThemeContainer()}

      <Box>
        <Button
          variant="contained"
          disableElevation
          disableRipple
          onClick={handleClick}
        >
          Change Theme
        </Button>
      </Box>
    </>
  );
};

export default ThemePicker;
