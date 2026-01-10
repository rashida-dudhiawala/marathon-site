import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Button
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// Images
import marathonImage from "../assets/madrid-marathon.jpg";
import detailsImg from "../assets/general-info.jpg";
import faqImg from "../assets/plan-trip.jpg";
import previousEventsImg from "../assets/course-map.jpg";
import registerImg from "../assets/volunteer.jpg";

function Home() {
  const [raceType, setRaceType] = useState("marathon");

  const handleRaceChange = (event, newRace) => {
    if (newRace !== null) {
      setRaceType(newRace);
    }
  };

  return (
    <main id="main-content" tabIndex={-1}>
      <Container maxWidth="lg">
        {/* ================= HEADER ================= */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography component="h1" variant="h3" gutterBottom>
            Madrid Marathon 2026
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Run through the heart of Madrid on February 22nd, 2026
          </Typography>
        </Box>

        {/* ================= HERO IMAGE ================= */}
        <Box sx={{ mt: 4 }}>
          <img
            src={marathonImage}
            alt="Runners participating in the Madrid Marathon on city streets"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </Box>

        {/* ================= EVENT OVERVIEW ================= */}
        <Box sx={{ mt: 4 }}>
          <Typography paragraph>
            The Madrid Marathon 2026 brings together runners from around the
            world for a celebration of endurance, community, and sport. The
            event combines iconic city scenery with professional race
            organization, offering a safe and inspiring experience for all
            participants.
          </Typography>

          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Typography>
              <Link
                href="https://www.google.com/maps/search/madrid+marathon+route"
                target="_blank"
                rel="noopener"
              >
                <LocationOnIcon aria-hidden="true" /> Madrid, Spain
              </Link>
            </Typography>

            <Typography>
              <CalendarMonthIcon aria-hidden="true" /> February 22nd, 2026
            </Typography>

            <Typography>
              <DirectionsRunIcon aria-hidden="true" /> Marathon, Half & 10K
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* ================= RACE DISTANCE SELECTION ================= */}
        <Box sx={{ mt: 4 }}>
          <Typography component="h2" variant="h5" gutterBottom>
            Select your race distance
          </Typography>

          <ToggleButtonGroup
            value={raceType}
            exclusive
            onChange={handleRaceChange}
            aria-label="Select race distance"
          >
            <ToggleButton value="marathon">Marathon</ToggleButton>
            <ToggleButton value="half">Half Marathon</ToggleButton>
            <ToggleButton value="10k">10K</ToggleButton>
          </ToggleButtonGroup>

          {/* ===== MARATHON ===== */}
          {raceType === "marathon" && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">Marathon (42.195 km)</Typography>

              <Typography paragraph>
                The full marathon is designed for experienced runners seeking a
                demanding endurance challenge. The course takes participants
                through Madrid’s historic streets, combining long stretches
                with gradual elevation changes that test physical and mental
                resilience.
              </Typography>

              <Typography paragraph>
                With extensive hydration points, medical support, and cheering
                zones, the marathon offers a professionally managed race
                environment. This distance is ideal for runners aiming to push
                their limits or achieve personal bests.
              </Typography>

              <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mt: 2 }}>
                <Typography>
                  <AccessTimeIcon aria-hidden="true" /> Start time: 08:00 AM
                </Typography>
                <Typography>
                  <AccessTimeIcon aria-hidden="true" /> Cut-off: 6 hours
                </Typography>
                <Typography>
                  <EmojiEventsIcon aria-hidden="true" /> Recommended for:
                  Advanced runners
                </Typography>
              </Box>
            </Box>
          )}

          {/* ===== HALF MARATHON ===== */}
          {raceType === "half" && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">Half Marathon (21.1 km)</Typography>

              <Typography paragraph>
                The half marathon offers a balanced challenge for runners who
                want a competitive experience without the full marathon
                distance. It is well suited for intermediate runners and those
                transitioning to longer races.
              </Typography>

              <Typography paragraph>
                The course showcases key city landmarks while maintaining a
                steady pace profile. Support stations and crowd engagement make
                this race both motivating and approachable.
              </Typography>

              <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mt: 2 }}>
                <Typography>
                  <AccessTimeIcon aria-hidden="true" /> Start time: 09:00 AM
                </Typography>
                <Typography>
                  <AccessTimeIcon aria-hidden="true" /> Cut-off: 3 hours
                </Typography>
                <Typography>
                  <EmojiEventsIcon aria-hidden="true" /> Recommended for:
                  Intermediate runners
                </Typography>
              </Box>
            </Box>
          )}

          {/* ===== 10K ===== */}
          {raceType === "10k" && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">10K Run</Typography>

              <Typography paragraph>
                The 10K run is a short and energetic race designed for beginners,
                casual runners, and first-time participants. It provides a
                welcoming introduction to large-scale running events.
              </Typography>

              <Typography paragraph>
                With a lively atmosphere and accessible course design, the 10K
                focuses on enjoyment, participation, and community rather than
                endurance alone.
              </Typography>

              <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mt: 2 }}>
                <Typography>
                  <AccessTimeIcon aria-hidden="true" /> Start time: 10:00 AM
                </Typography>
                <Typography>
                  <AccessTimeIcon aria-hidden="true" /> Cut-off: 2 hours
                </Typography>
                <Typography>
                  <EmojiEventsIcon aria-hidden="true" /> Recommended for:
                  Beginners
                </Typography>
              </Box>
            </Box>
          )}

          {/* ===== REGISTER BUTTON ===== */}
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/register"
              aria-label="Register for the Madrid Marathon"
            >
              Register Now
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* ================= NAVIGATION CARDS ================= */}
        <Box sx={{ mt: 4 }}>
          <Typography component="h2" variant="h5" gutterBottom>
            Explore the Website
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                title: "Event Details",
                img: detailsImg,
                href: "/details",
                alt: "Runners passing through a historic landmark in Madrid"
              },
              {
                title: "FAQ & Tips",
                img: faqImg,
                href: "/faq",
                alt: "Smiling runners participating together in a marathon"
              },
              {
                title: "Previous Events",
                img: previousEventsImg,
                href: "/previous-events",
                alt: "Illustrated map showing a marathon race route"
              },
              {
                title: "Register",
                img: registerImg,
                href: "/register",
                alt: "Group of volunteers cheering and supporting runners"
              }
            ].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <Card>
                  <CardActionArea component={Link} href={item.href}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={item.img}
                      alt={item.alt}
                    />
                    <CardContent>
                      <Typography variant="h6">{item.title}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

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

export default Home;
