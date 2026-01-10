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
    <main id="main-content" tabIndex={-1}>
      <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
        {/* Page Heading */}
        <Typography component="h1" variant="h4" gutterBottom>
          Frequently Asked Questions & Tips
        </Typography>

        <Typography component="p" sx={{ mb: 3 }}>
          This section provides important information about the Madrid Marathon
          2026, including event logistics, participant requirements, and
          available services. Expand each question to learn more.
        </Typography>

        {/* FAQ Accordions */}

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h2" variant="h6">
              When and where does the Madrid Marathon 2026 take place?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The event will take place on February 22nd, 2026, in Madrid, Spain.
              The race route passes through key landmarks and historic areas of
              the city.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h2" variant="h6">
              What race distances are available?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Participants can choose between three distances: the full
              Marathon (42.195 km), Half Marathon (21.1 km), and the 10K Run.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h2" variant="h6">
              Who can participate in the event?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The event is open to runners of all genders and nationalities.
              Minimum age requirements apply depending on the selected race
              distance.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h2" variant="h6">
              How do I register for the marathon?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Registration is available online through the official website.
              Participants must complete the registration form and submit the
              required information.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h2" variant="h6">
              What should I bring on race day?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Participants should bring their race bib, valid identification,
              appropriate running gear, and personal hydration or nutrition if
              needed.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h2" variant="h6">
              Are there hydration and refreshment stations?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, hydration and refreshment stations are available along the
              route at regular intervals, providing water and sports drinks.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h2" variant="h6">
              Are medical services available during the event?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Medical staff and first-aid stations are positioned throughout
              the course and at the finish area to assist participants if
              needed.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h2" variant="h6">
              Is baggage storage provided?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Secure baggage storage is available near the start and finish
              zones. Participants are advised not to bring valuable items.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h2" variant="h6">
              What transportation options are recommended?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Public transportation is highly recommended due to road closures.
              Metro and bus services operate extended schedules on race day.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h2" variant="h6">
              What tips should runners keep in mind?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Runners are advised to hydrate well, arrive early, follow pacing
              strategies, and listen to their bodies throughout the race.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </Container>
    </main>
  );
}

export default FAQ;
