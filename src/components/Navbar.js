import React from "react";
import { AppBar, Toolbar, Button, Box, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

function Navbar() {
  return (
    <>
      {/* Skip to main content */}
      <Link
        href="#main-content"
        sx={{
          position: "absolute",
          top: "-40px",
          left: 0,
          bgcolor: "primary.main",
          color: "common.white",
          px: 2,
          py: 1,
          zIndex: 1200,
          "&:focus": {
            top: 0
          }
        }}
      >
        Skip to main content
      </Link>

      <AppBar position="sticky">
        <Toolbar>
          {/* Logo on the LEFT */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <DirectionsRunIcon aria-hidden="true" sx={{ mr: 1 }} />
            <Link
              component={NavLink}
              to="/"
              color="inherit"
              underline="none"
              aria-label="Go to Madrid Marathon home page"
              sx={{ fontWeight: 600, fontSize: "1.1rem" }}
            >
              Madrid Marathon
            </Link>
          </Box>

          {/* Spacer pushes navigation to the RIGHT */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Navigation items */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Button
              color="inherit"
              component={NavLink}
              to="/details"
              aria-label="View event details"
              sx={{
                "&.active": {
                  textDecoration: "underline",
                  textUnderlineOffset: "6px"
                }
              }}
            >
              Details
            </Button>

            <Button
              color="inherit"
              component={NavLink}
              to="/faq"
              aria-label="View frequently asked questions"
              sx={{
                "&.active": {
                  textDecoration: "underline",
                  textUnderlineOffset: "6px"
                }
              }}
            >
              FAQ
            </Button>

            <Button
              color="inherit"
              component={NavLink}
              to="/previous-events"
              aria-label="View previous marathon events"
              sx={{
                "&.active": {
                  textDecoration: "underline",
                  textUnderlineOffset: "6px"
                }
              }}
            >
              Previous Events
            </Button>

            {/* Register as primary button */}
            <Button
              variant="contained"
              component={NavLink}
              to="/register"
              aria-label="Register for the Madrid Marathon"
              sx={{
                bgcolor: "common.white",
                color: "primary.main",
                fontWeight: 600,
                ml: 1,
                "&:hover": {
                  bgcolor: "grey.100"
                },
                "&.active": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: "2px"
                }
              }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
