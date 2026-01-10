import React from "react";
import { Container, Typography } from "@mui/material";

function Details() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Event Details
      </Typography>
      <Typography>
        Location, route map, timing, and important race information.
      </Typography>
    </Container>
  );
}

export default Details;
