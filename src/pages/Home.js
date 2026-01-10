import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Link
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

import marathonImage from "../assets/madrid-marathon.jpg";

function Home() {
  // Marathon selected by default
  const [raceType, setRaceType] = useState("marathon");

  const handleRaceChange = (event, newRace) => {
    if (newRace !== null) {
      setRaceType(newRace);
    }
  };

  return (
    <main>
      <Container maxWidth="md">
        {/* Page Heading */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography component="h1" variant="h3" gutterBottom>
            Madrid Marathon 2026
          </Typography>

          <Typography component="p" variant="h6" color="text.secondary">
            Experience one of Europe’s most iconic running events
          </Typography>
        </Box>

        {/* Hero Image */}
        <Container sx={{ mt: 4 }}>
          <img
            src={marathonImage}
            alt="Runners participating in the Madrid Marathon on a city road"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </Container>

        {/* Event Information */}
        <Box sx={{ mt: 4 }}>
          <Typography component="p">
            The Madrid Marathon 2026 welcomes runners from around the world to
            take part in a celebration of endurance, community, and sport across
            Madrid’s historic streets and iconic landmarks.
          </Typography>

          <Box
            sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 2 }}
            aria-label="Event details"
          >
            {/* Location link */}
            <Typography component="p">
              <Link
                href="https://www.google.com/maps/search/madrid+marathon+route"
                target="_blank"
                rel="noopener"
                underline="hover"
                aria-label="View Madrid Marathon location on Google Maps"
              >
                <LocationOnIcon aria-hidden="true" /> Madrid, Spain
              </Link>
            </Typography>

            {/* Calendar link */}
            <Typography component="p">
              <Link
                href="/madrid-marathon-2026.ics"
                underline="hover"
                aria-label="Add Madrid Marathon on February 22nd 2026 to your calendar"
              >
                <CalendarMonthIcon aria-hidden="true" /> February 22nd, 2026
              </Link>
            </Typography>

            {/* Distance info */}
            <Typography component="p">
              <DirectionsRunIcon aria-hidden="true" /> 42.195 km, 21.1 km, and
              10 km races
            </Typography>
          </Box>
        </Box>

        {/* Race Selection */}
        <Box sx={{ mt: 4 }}>
          <Typography component="h2" variant="h5" gutterBottom>
            Select your race distance
          </Typography>

          <ToggleButtonGroup
            value={raceType}
            exclusive
            onChange={handleRaceChange}
            aria-label="Race distance selection"
          >
            <ToggleButton
              value="marathon"
              aria-label="Select full marathon"
            >
              Marathon
            </ToggleButton>

            <ToggleButton
              value="half"
              aria-label="Select half marathon"
            >
              Half Marathon
            </ToggleButton>

            <ToggleButton
              value="10k"
              aria-label="Select ten kilometer race"
            >
              10K
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Conditional Race Description */}
        <Box sx={{ mt: 3 }} aria-live="polite" aria-atomic="true">
          {raceType === "marathon" && (
            <Typography component="p">
              <strong>Marathon (42.195 km):</strong> A full-distance marathon
              designed for experienced runners aiming to challenge their
              endurance and performance.
            </Typography>
          )}

          {raceType === "half" && (
            <Typography component="p">
              <strong>Half Marathon (21.1 km):</strong> Ideal for intermediate
              runners who want a competitive yet manageable race distance.
            </Typography>
          )}

          {raceType === "10k" && (
            <Typography component="p">
              <strong>10K Run:</strong> A short and energetic race suitable for
              beginners, casual runners, and first-time participants.
            </Typography>
          )}
        </Box>

        {/* Call to Action */}
        <Box sx={{ mt: 5, mb: 6, textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            href="/register"
            aria-label="Register for the Madrid Marathon 2026"
            sx={{ mr: 2 }}
          >
            Register Now
          </Button>

          <Link
            href="https://www.google.com/maps/search/madrid+marathon+route"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            View the Madrid Marathon route on Google Maps
          </Link>
        </Box>
      </Container>
    </main>
  );
}

export default Home;
