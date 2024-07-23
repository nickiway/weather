import type { Mode } from "@/interfaces/mode";

import { Box, styled, BoxProps } from "@mui/material";
import Card from "@/components/ModePicker/Card";

const StyledBox = styled(Box)<BoxProps>({
  display: "flex",
  gap: "10px",
  margin: "10px 0",
});

const List = ({ list }: { list: Mode[] }) => {
  return (
    <StyledBox component={"section"}>
      {list.map((theme) => (
        <Card key={theme.id} {...theme} />
      ))}
    </StyledBox>
  );
};

export default List;
