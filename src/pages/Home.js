import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Tabs,
  Tab,
  Snackbar,
  Alert,
  Link as MuiLink
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
  const navigate = useNavigate();

  const [raceType, setRaceType] = useState("marathon");
  const [tabValue, setTabValue] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleRegisterClick = () => {
    setSnackbarOpen(true);
    setTimeout(() => navigate("/register"), 1200);
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
            alt="Runners participating in the Madrid Marathon on Madrid city streets"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </Box>

        {/* ================= EVENT INTRO + META ================= */}
        <Box sx={{ mt: 4 }}>
          <Typography paragraph>
            The Madrid Marathon 2026 brings together runners from around the world
            for a celebration of endurance, culture, and community.
          </Typography>

          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Typography>
              <MuiLink
                href="https://www.google.com/maps/search/madrid+marathon+route"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                <LocationOnIcon aria-hidden="true" /> Madrid, Spain
              </MuiLink>
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

        {/* ================= WHY PARTICIPATE ================= */}
        <Box sx={{ mt: 4 }}>
          <Typography component="h2" variant="h5" gutterBottom>
            Why Participate?
          </Typography>

          <Tabs
            value={tabValue}
            onChange={(e, v) => setTabValue(v)}
            aria-label="Reasons to participate"
            sx={{ mb: 3 }}
          >
            <Tab label="The Experience" />
            <Tab label="Support & Safety" />
            <Tab label="Community Impact" />
          </Tabs>

          <Box sx={{ backgroundColor: "background.paper", p: 3, borderRadius: 2 }}>
            {tabValue === 0 && (
              <>
                <Typography paragraph>
                  Running the Madrid Marathon is more than a race — it is a
                  journey through historic streets, iconic landmarks, and
                  vibrant neighbourhoods.
                </Typography>
                <Typography paragraph>
                  Thousands of spectators line the course, creating a motivating
                  atmosphere that transforms the race into a shared urban
                  celebration of endurance and achievement.
                </Typography>
                <Typography paragraph>
                  Whether it is your first race or a personal record attempt,
                  the experience is designed to be memorable and inspiring.
                </Typography>
              </>
            )}

            {tabValue === 1 && (
              <>
                <Typography paragraph>
                  Safety is a core priority of the Madrid Marathon. Medical
                  professionals, hydration points, and trained volunteers are
                  positioned throughout the route.
                </Typography>
                <Typography paragraph>
                  Clear signage, distance markers, and emergency protocols ensure
                  runners can focus on performance while feeling secure.
                </Typography>
                <Typography paragraph>
                  Accessibility measures support participants with diverse needs
                  and abilities.
                </Typography>
              </>
            )}

            {tabValue === 2 && (
              <>
                <Typography paragraph>
                  The Madrid Marathon supports local communities and charities by
                  bringing together runners, volunteers, and spectators.
                </Typography>
                <Typography paragraph>
                  The event encourages civic engagement, volunteering, and
                  contributes positively to the local economy.
                </Typography>
                <Typography paragraph>
                  Participation promotes a culture of health, inclusion, and
                  shared community pride.
                </Typography>
              </>
            )}
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* ================= RACE SELECTION ================= */}
        <Box sx={{ mt: 4 }}>
          <Typography component="h2" variant="h5" gutterBottom>
            Select your Race
          </Typography>

          <ToggleButtonGroup
            value={raceType}
            exclusive
            aria-label="Select race distance"
            onChange={(e, v) => {
              if (v !== null) {
                setRaceType(v);
              }
            }}
          >
            <ToggleButton value="marathon">Marathon</ToggleButton>
            <ToggleButton value="half">Half Marathon</ToggleButton>
            <ToggleButton value="10k">10K</ToggleButton>
          </ToggleButtonGroup>

          {/* MARATHON */}
          {raceType === "marathon" && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">Marathon (42.195 km)</Typography>
              <Typography paragraph>
                The full marathon is designed for experienced runners seeking to
                test endurance across Madrid’s historic streets and landmarks.
              </Typography>
              <Typography paragraph>
                It requires structured training and mental resilience, making it
                ideal for personal bests and competitive goals.
              </Typography>

              <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                <Typography><AccessTimeIcon /> Start: 08:00 AM</Typography>
                <Typography><AccessTimeIcon /> Cut-off: 6 hours</Typography>
                <Typography><EmojiEventsIcon /> Advanced runners</Typography>
              </Box>
            </Box>
          )}

          {/* HALF MARATHON */}
          {raceType === "half" && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">Half Marathon (21.1 km)</Typography>
              <Typography paragraph>
                The half marathon offers a balanced challenge for intermediate
                runners seeking a competitive yet achievable distance.
              </Typography>
              <Typography paragraph>
                It is ideal for athletes progressing from shorter races or
                preparing for a future full marathon.
              </Typography>

              <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                <Typography><AccessTimeIcon /> Start: 09:00 AM</Typography>
                <Typography><AccessTimeIcon /> Cut-off: 3 hours</Typography>
                <Typography><EmojiEventsIcon /> Intermediate runners</Typography>
              </Box>
            </Box>
          )}

          {/* 10K */}
          {raceType === "10k" && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6">10K Run</Typography>
              <Typography paragraph>
                The 10K run is ideal for beginners, casual runners, and first-time
                participants seeking a shorter but energetic race.
              </Typography>
              <Typography paragraph>
                It offers a welcoming introduction to race-day atmosphere while
                remaining professionally organised and motivating.
              </Typography>

              <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                <Typography><AccessTimeIcon /> Start: 10:00 AM</Typography>
                <Typography><AccessTimeIcon /> Cut-off: 90 minutes</Typography>
                <Typography><EmojiEventsIcon /> Beginners welcome</Typography>
              </Box>
            </Box>
          )}

          <Box sx={{ mt: 4 }}>
            <Button variant="contained" size="large" onClick={handleRegisterClick}>
              Register Now
            </Button>
          </Box>
        </Box>

        {/* ================= SNACKBAR ================= */}
        <Snackbar open={snackbarOpen} autoHideDuration={3000}>
          <Alert severity="success">Redirecting to registration page…</Alert>
        </Snackbar>

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
                alt: "Runners passing Madrid landmarks during the marathon"
              },
              {
                title: "FAQ & Tips",
                img: faqImg,
                href: "/faq",
                alt: "Smiling marathon participants celebrating during the race"
              },
              {
                title: "Previous Events",
                img: previousEventsImg,
                href: "/previous-events",
                alt: "Map showing the Madrid Marathon course route"
              },
              {
                title: "Register",
                img: registerImg,
                href: "/register",
                alt: "Volunteers and participants gathering at a marathon event"
              }
            ].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <Card>
                  <CardActionArea component={Link} to={item.href}>
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
            <Link to="/">Home</Link> · <Link to="/details">Details</Link> ·{" "}
            <Link to="/faq">FAQ</Link> ·{" "}
            <Link to="/previous-events">Previous Events</Link> ·{" "}
            <Link to="/register">Register</Link>
          </Typography>
        </Box>

      </Container>
    </main>
  );
}

export default Home;
