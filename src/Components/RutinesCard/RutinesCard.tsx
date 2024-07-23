import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

import { CardContainer, CardTitle, CardButton } from "./styles";

const RutinesCard = ({
  name,
  date,
  exercises,
  id,
}: {
  name: string;
  date: string;
  exercises: number;
  id: number;
}) => {
  return (
    <CardContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <Box>
          <CardTitle>{name}</CardTitle>
          <Typography variant="body1" sx={{ color: "gray" }}>
            {date}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ color: "gray" }}>
          {exercises} exercises
        </Typography>
      </Box>
      <Link to={`/routine/${id}`}style={{width: '100%'}}>
        <CardButton>Ver rutina</CardButton>
      </Link>
    </CardContainer>
  );
};

export default RutinesCard;
