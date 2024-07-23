import type { Mode } from "@/interfaces/mode";
import { Card, CardProps, styled } from "@mui/material";

const StyledCard = styled(Card)<CardProps>({
  width: "200px",
  padding: "20px",
  cursor: "pointer",
  "&:hover": {
    border: "1px solid red",
  },
});

interface ThemeCardProps extends Mode {}

const ThemeCard = ({ id, bgcolor, color, name }: ThemeCardProps) => {
  const handleClick = () => {
    console.log(id);
  };

  return (
    <StyledCard
      onClick={handleClick}
      variant="outlined"
      style={{ backgroundColor: bgcolor, color: color }}
      elevation={0}
    >
      {name}
    </StyledCard>
  );
};

export default ThemeCard;
