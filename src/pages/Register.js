import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem
} from "@mui/material";

function Register() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Register for the Marathon
      </Typography>

      <TextField label="Full Name" fullWidth sx={{ mb: 2 }} />
      <TextField label="Email" fullWidth sx={{ mb: 2 }} />

      <Select fullWidth defaultValue="" sx={{ mb: 2 }}>
        <MenuItem value="">Select Country</MenuItem>
        <MenuItem value="Spain">Spain</MenuItem>
        <MenuItem value="Netherlands">Netherlands</MenuItem>
        <MenuItem value="India">India</MenuItem>
      </Select>

      <Button variant="contained">Submit</Button>
    </Container>
  );
}

export default Register;
