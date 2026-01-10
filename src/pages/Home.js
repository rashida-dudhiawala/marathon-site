import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Link,
  Divider
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import TimerIcon from "@mui/icons-material/Timer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import marathonImage from "../assets/madrid-marathon.jpg";

const RACE_DATA = {
  marathon: {
    title: "Marathon (42.195 km)",
    description:
      "A full-distance marathon designed for experienced runners aiming to challenge their endurance and performance across Madrid’s historic streets.",
    startTime: "08:00 AM",
    cutoff: "6 hours",
    level: "Advanced runners"
  },
  half: {
    title: "Half Marathon (21.1 km)",
    description:
      "An ideal distance for intermediate runners who want a competitive yet manageable race while experiencing the marathon atmosphere.",
    startTime: "09:00 AM",
    cutoff: "3 hours",
    level: "Intermediate runners"
  },
  "10k": {
    title: "10K Run",
    description:
      "A short and energetic race suitable for beginners, casual runners, and first-time participants looking for an inclusive experience.",
    startTime: "10:00 AM",
    cutoff: "90 minutes",
    level: "All levels"
  }
};

function Home() {
  // Marathon selected by default
  const [raceType, setRaceType] = useState("marathon");

  const handleRaceChange = (event, newRace) => {
    if (newRace !== null) {
      setRaceType(newRace);
    }
  };

  const race = RACE_DATA[raceType];

  return (
    <main id="main-content" tabIndex={-1}>
      <Container maxWidth="md">
        {/* Page Header */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography component="h1" variant="h3" gutterBottom>
            Madrid Marathon 2026
          </Typography>

          <Typography variant="h6" color="text.secondary">
            Run through the heart of Madrid on February 22nd, 2026
          </Typography>
        </Box>

        {/* Hero Image */}
        <Container sx={{ mt: 4 }}>
          <img
            src={marathonImage}
            alt="Runners participating in the Madrid Marathon on city streets"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </Container>

        {/* Event Overview */}
        <Box sx={{ mt: 4 }}>
          <Typography paragraph>
            The Madrid Marathon 2026 brings together runners from around the
            world for a celebration of endurance, community, and sport. With
            multiple race distances and extensive on-route support, the event
            welcomes participants of varying experience levels.
          </Typography>

          <Box
            sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}
            aria-label="Event details"
          >
            <Typography>
              <Link
                href="https://www.google.com/maps/search/madrid+marathon+route"
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                <LocationOnIcon aria-hidden="true" /> Madrid, Spain
              </Link>
            </Typography>

            <Typography>
              <Link
                href="/madrid-marathon-2026.ics"
                underline="hover"
              >
                <CalendarMonthIcon aria-hidden="true" /> February 22nd, 2026
              </Link>
            </Typography>

            <Typography>
              <DirectionsRunIcon aria-hidden="true" /> Marathon, Half, and 10K
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Race Selection */}
        <Box>
          <Typography component="h2" variant="h5" gutterBottom>
            Select your race distance
          </Typography>

          <ToggleButtonGroup
            value={raceType}
            exclusive
            onChange={handleRaceChange}
            aria-label="Race distance selection"
          >
            <ToggleButton value="marathon">Marathon</ToggleButton>
            <ToggleButton value="half">Half Marathon</ToggleButton>
            <ToggleButton value="10k">10K</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Dynamic Race Information */}
        <Box
          sx={{ mt: 3 }}
          aria-live="polite"
          aria-atomic="true"
        >
          <Typography component="h3" variant="h6" gutterBottom>
            {race.title}
          </Typography>

          <Typography paragraph>{race.description}</Typography>

          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Typography>
              <TimerIcon aria-hidden="true" /> Start time: {race.startTime}
            </Typography>

            <Typography>
              <TimerIcon aria-hidden="true" /> Cut-off: {race.cutoff}
            </Typography>

            <Typography>
              <EmojiEventsIcon aria-hidden="true" /> Recommended for:{" "}
              {race.level}
            </Typography>
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{ mt: 5, mb: 6, textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            href="/register"
            sx={{ mr: 2 }}
          >
            Register Now
          </Button>

          <Link
            href="/details"
            underline="hover"
          >
            View full event details
          </Link>
        </Box>
      </Container>
    </main>
  );
}

export default Home;
