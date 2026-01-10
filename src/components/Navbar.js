import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/details">
          Details
        </Button>
        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
        <Button color="inherit" component={Link} to="/faq">
          FAQ & Tips
        </Button>
        <Button color="inherit" component={Link} to="/previous-events">
          Previous Events
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
