import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  FormControlLabel,
  Divider,
  Snackbar,
  Alert
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BackpackIcon from "@mui/icons-material/Backpack";

function Details() {
  const [checklist, setChecklist] = useState({
    bib: false,
    shoes: false,
    hydration: false,
    id: false,
    warmup: false
  });

  const handleCheck = (item) => {
    setChecklist((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleRegisterClick = () => {
    setSnackbarOpen(true);
    setTimeout(() => navigate("/register"), 1200);
  };

  return (
    <main id="main-content" tabIndex={-1}>
      <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
        
        {/* Page Heading */}
        <Typography component="h1" variant="h4" gutterBottom>
          Event Details
        </Typography>

        {/* Overview Section */}
        <Box sx={{ mt: 2 }}>
          <Typography paragraph color="text.secondary">
            This page provides detailed information about the Madrid Marathon
            2026, including race categories, logistics, and preparation
            recommendations for participants.
          </Typography>

          <Box
            sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 2 }}
            aria-label="Event overview information"
          > 
            <Box sx={{ display: "flex", gap: 1, alignItems: "center"}}>
              <LocationOnIcon aria-label="location" />{" "}
              <Link
                href="https://www.google.com/maps/search/madrid+marathon+route"
                target="_blank"
                rel="noopener"
              >
                View marathon route in Madrid, Spain
              </Link>
            </Box>

            <Box sx={{ display: "flex", gap: 1, alignItems: "center"}}>
              <CalendarMonthIcon aria-label="date" /> February 22nd, 2026
            </Box>

            <Box sx={{ display: "flex", gap: 1, alignItems: "center"}}>
              <DirectionsRunIcon aria-label="categories" /> Marathon, Half Marathon,
              and 10K Run
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Race Categories Table */}
        <Box sx={{ mt: 4 }}>
          <Typography id="race-categories-title" component="h2" variant="h5" gutterBottom>
            Race Categories Overview
          </Typography>

          <TableContainer component={Paper}>
            <Table aria-label="Race categories comparison table">
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="col" sx={{ fontWeight: 'bold' }}>Race category</TableCell>
                  <TableCell component="th" scope="col" sx={{ fontWeight: 'bold' }}>Distance</TableCell>
                  <TableCell component="th" scope="col" sx={{ fontWeight: 'bold' }}>Start time</TableCell>
                  <TableCell component="th" scope="col" sx={{ fontWeight: 'bold' }}>Cut-off time</TableCell>
                  <TableCell component="th" scope="col" sx={{ fontWeight: 'bold' }}>Recommended experience level</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">Marathon</TableCell>
                  <TableCell>42.195 km</TableCell>
                  <TableCell>08:00 AM</TableCell>
                  <TableCell>6 hours</TableCell>
                  <TableCell>Advanced</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">Half Marathon</TableCell>
                  <TableCell>21.1 km</TableCell>
                  <TableCell>09:00 AM</TableCell>
                  <TableCell>3 hours</TableCell>
                  <TableCell>Intermediate</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">10K Run</TableCell>
                  <TableCell>10 km</TableCell>
                  <TableCell>10:00 AM</TableCell>
                  <TableCell>90 minutes</TableCell>
                  <TableCell>All levels</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Preparation Checklist */}
        <Box sx={{ mt: 4 }}>
          <Typography id="checklist-title" component="h2" variant="h5" gutterBottom>
            Pre-Race Checklist
          </Typography>

          <Typography paragraph color="text.secondary">
            Use the checklist below to ensure you are fully prepared before race
            day.
          </Typography>

          <Box role="group" aria-label="Pre-race preparation checklist" sx={{ mt: 2, display: "flex", flexDirection: "column" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checklist.bib}
                  onChange={() => handleCheck("bib")}
                />
              }
              label="Race bib and safety pins"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checklist.shoes}
                  onChange={() => handleCheck("shoes")}
                />
              }
              label="Running shoes and comfortable clothing"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checklist.hydration}
                  onChange={() => handleCheck("hydration")}
                />
              }
              label="Personal hydration or nutrition"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checklist.id}
                  onChange={() => handleCheck("id")}
                />
              }
              label="Valid identification"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checklist.warmup}
                  onChange={() => handleCheck("warmup")}
                />
              }
              label="Warm-up and stretching routine"
            />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center"}}>
              <HealthAndSafetyIcon aria-hidden="true" /> Medical services and
              first-aid stations are available throughout the course.
            </Box>

            <Box sx={{ display: "flex", gap: 1, alignItems: "center"}}>
              <BackpackIcon aria-hidden="true" /> Secure baggage storage is
              provided near the start and finish areas.
            </Box>
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            aria-label="Register for the Madrid Marathon 2026"
            onClick={handleRegisterClick}
          >
            Register now
          </Button>
        </Box>
        
        {/* SNACKBAR */}
        <Snackbar open={snackbarOpen} autoHideDuration={5000}>
          <Alert severity="success" role="alert">Redirecting to registration page…</Alert>
        </Snackbar>

        {/* FOOTER */}
        <Box component="footer" sx={{ mt: 8, py: 4, borderTop: "1px solid", borderColor: "divider", textAlign: "center" }}>
          <Typography variant="body2">
            © 2026 Madrid Marathon. All rights reserved.
          </Typography>
          <Typography variant="body2">
            <Link to="/">Home</Link> · <Link to="/details">Details</Link> ·{" "}
            <Link to="/faq">FAQ</Link> · <Link to="/previous-events">Previous Events</Link> ·{" "}
            <Link to="/register">Register</Link>
          </Typography>
        </Box>

      </Container>
    </main>
  );
}

export default Details;