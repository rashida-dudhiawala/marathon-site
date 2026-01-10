import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        FAQ & Tips
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is the race date?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>The race will take place in April 2026.</Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default FAQ;
