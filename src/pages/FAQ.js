import React from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Container maxWidth="md">
        {/* ================= HEADER ================= */}
        <Box sx={{ mt: 4 }}>
          <Typography component="h1" variant="h4" gutterBottom>
            FAQ & Tips
          </Typography>

          <Typography paragraph color="text.secondary">
            This section provides detailed answers to common questions about the
            Madrid Marathon 2026. It is designed to help participants prepare
            effectively and understand what to expect before, during, and after
            the event.
          </Typography>
        </Box>

        {/* ================= FAQ ACCORDIONS ================= */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>When and where does the event take place?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              The Madrid Marathon 2026 will take place on February 22nd, 2026, in
              the city of Madrid, Spain. The event starts and finishes in central
              locations that are easily accessible by public transport.
            </Typography>
            <Typography paragraph>
              Participants are encouraged to arrive early to allow sufficient
              time for security checks, bag drop services, and warm-up activities.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What race distances are available?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              The event offers three race distances: a full marathon (42.195 km),
              a half marathon (21.1 km), and a 10K run. Each distance is designed
              to accommodate runners with different levels of experience.
            </Typography>
            <Typography paragraph>
              Clear signage, distance markers, and support stations are provided
              throughout all courses to ensure a safe and enjoyable experience.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How do I register for the event?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              Registration is completed online through the official registration
              page. Participants must provide personal details, select their race
              distance, and complete payment to confirm their entry.
            </Typography>
            <Typography paragraph>
              Early registration is recommended, as places are limited and some
              race categories may sell out before the event date.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What should I bring on race day?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              Runners should bring a valid form of identification, their race
              bib, and appropriate running shoes. Clothing should be selected
              based on expected weather conditions.
            </Typography>
            <Typography paragraph>
              Hydration, nutrition, and medical support are provided along the
              course, but participants may bring personal nutrition if preferred.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Are medical services available during the race?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              Yes, professional medical teams are stationed at the start and
              finish areas, as well as at regular intervals along the course.
            </Typography>
            <Typography paragraph>
              Medical staff are trained to respond to common running-related
              issues such as dehydration, muscle cramps, and exhaustion.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Will there be water and food stations?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              Hydration stations with water and sports drinks are positioned at
              regular intervals along all race routes.
            </Typography>
            <Typography paragraph>
              For longer distances, additional nutrition such as energy gels or
              fruit may be available to support runners’ energy levels.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What happens if I cannot finish the race?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              Sweep vehicles follow the course after the official cut-off times
              to ensure participant safety and reopen public roads.
            </Typography>
            <Typography paragraph>
              Participants who are unable to finish will be guided safely to
              designated exit points and provided with assistance if needed.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Can spectators attend the event?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              Spectators are welcome along designated viewing areas throughout
              the course and at the finish line.
            </Typography>
            <Typography paragraph>
              Public transportation is recommended for spectators, as road
              closures may affect private vehicle access.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Is it possible to volunteer?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              Yes, volunteers play an essential role in the success of the event.
              Tasks include assisting runners, managing hydration stations, and
              supporting logistics.
            </Typography>
            <Typography paragraph>
              Information on how to volunteer is available through the event’s
              registration and FAQ resources.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* ================= FOOTER ================= */}
        <Box
          component="footer"
          sx={{
            mt: 8,
            py: 4,
            borderTop: "1px solid",
            borderColor: "divider",
            textAlign: "center"
          }}
        >
          <Typography variant="body2">
            © 2026 Madrid Marathon. All rights reserved.
          </Typography>

          <Typography variant="body2">
            <Link href="/">Home</Link> ·{" "}
            <Link href="/details">Details</Link> ·{" "}
            <Link href="/faq">FAQ</Link> ·{" "}
            <Link href="/previous-events">Previous Events</Link> ·{" "}
            <Link href="/register">Register</Link>
          </Typography>
        </Box>
      </Container>
    </main>
  );
}

export default FAQ;
