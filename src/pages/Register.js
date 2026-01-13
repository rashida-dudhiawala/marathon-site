import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import countries from "world-countries";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { 
  Container,
  Typography,
  Box,
  TextField,
  Autocomplete,
  Checkbox,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Switch,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
  Slider,
  Chip,
  Button,
  Divider,
  Alert
} from "@mui/material";

function Register() {
  
  const [nationality, setNationality] = useState(null);
  const [shirt, setShirt] = React.useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (showAlert) {
      window.scrollTo({ top:0, behavior:"smooth"})
    }
  }, [showAlert]);

  return (
    <main id="main-content" tabIndex={-1}>
      <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
        
        {/* Page Heading */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography component="h1" variant="h4" gutterBottom>
            Registration Form
          </Typography>
          <Chip
            label="Registration open until January 31st, 2026"
            aria-label="Registration open until January 31st, 2026"
            color="success"
          />
         </Box>

        <Typography paragraph color="text.secondary">
          Fill in the form below to register for the Madrid Marathon 2026.
        </Typography>

        {showAlert && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Your registration has been submitted successfully!
          </Alert>
        )}

        {/* Form Fields */}
        <form onSubmit={(e) => {
          e.preventDefault();
          setShowAlert(true);
          setSubmitted(true);
          window.scrollTo({ top:0, behavior:"smooth" });
        }}>
          <Typography component="h2" variant="h6">
            Personal Information
          </Typography>

          <Typography id="first-name-label" sx={{ mt: 2 }}>First Name<span aria-hidden="true" style={{ color: "red" }}>*</span></Typography>
          <TextField
            id="first-name"
            aria-labelledby="first-name-label"
            aria-required="true"
            required
            variant="filled"
            label="Enter your first name"
            fullWidth
            sx={{ mb: 2 }}
            disabled={submitted}
          />

          <Typography id="last-name-label" sx={{ mt: 2 }}>Last Name<span aria-hidden="true" style={{ color: "red" }}>*</span></Typography>
          <TextField
            id="last-name"
            aria-labelledby="last-name-label"
            aria-required="true"
            required
            variant="filled"
            label="Enter your last name"
            fullWidth
            sx={{ mb: 2 }}
            disabled={submitted}
          />

          <FormControl>
            <Typography id="gender-label" sx={{ mt: 2 }}>Gender<span aria-hidden="true" style={{ color: "red" }}>*</span></Typography>
            <RadioGroup aria-label="gender selection">
              <FormControlLabel value="female" control={<Radio />} label="Female" disabled={submitted} />
              <FormControlLabel value="male" control={<Radio />} label="Male" disabled={submitted} />
              <FormControlLabel value="other" control={<Radio />} label="Other" disabled={submitted} />
            </RadioGroup>
          </FormControl>

          <Typography id="nationality-label" sx={{ mt: 2 }}>Nationality<span aria-hidden="true" style={{ color: "red" }}>*</span></Typography>
          <Autocomplete
            id="nationality"
            aria-labelledby="nationality-label"
            options={countries}
            getOptionLabel={(option) => option.name.common}
            isOptionEqualToValue={(option, value) => option.cca3 === value.cca3}
            value={nationality}
            onChange={(event, newValue) => setNationality(newValue)}
            fullWidth
            disabled={submitted}
            renderInput={(params) => (
              <TextField
                {...params}
                id="nationality"
                aria-required="true"
                variant="filled"
                required
                label="Select your coutry of nationality"
                fullWidth
                disabled={submitted}
              />
            )}
          />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography id="flag-label">Do not add a flag on my race bib.</Typography>
            <Checkbox id="flag" aria-labelledby="flag-label" disabled={submitted} />
          </Box>
          
          <Divider sx={{ my: 5 }} />

          <Typography component="h2" variant="h6" sx={{ mt: 2 }}>
            Contact Information
          </Typography>

          <Typography id="email-label" sx={{ mt: 2 }}>Email Address<span aria-hidden="true" style={{ color: "red" }}>*</span></Typography>
          <TextField
            id="email"
            aria-labelledby="email-label"
            aria-required="true"
            required
            variant="filled"
            label="Enter your email address"
            fullWidth
            sx={{ mb: 2 }}
            disabled={submitted}
          />

          <Typography id="phone-label" sx={{ mt: 2 }}>Mobile Phone Number<span aria-hidden="true" style={{ color: "red" }}>*</span></Typography>
          <TextField
            id="phone"
            aria-labelledby="phone-label"
            aria-required="true"
            required
            variant="filled"
            label="Enter your phone number with country code"
            fullWidth
            sx={{ mb: 2 }}
            disabled={submitted}
          />
                  
          <Divider sx={{ my: 5 }} />

          <Typography component="h2" variant="h6" sx={{ mt: 2 }}>
            Race Details
          </Typography>

          <FormControl>
            <Typography id="distance-label" sx={{ mt: 2 }}>Distance<span aria-hidden="true" style={{ color: "red" }}>*</span></Typography>
            <RadioGroup aria-label="distance selection" disabled={submitted}>
              <FormControlLabel value="marathon" control={<Radio />} label="Marathon (42.195 kilometres)"/>
              <FormControlLabel value="half-marathon" control={<Radio />} label="Half-marathon (21.1 kilometres)" />
              <FormControlLabel value="10k" control={<Radio />} label="10 kilometers" />
            </RadioGroup>
          </FormControl>

          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography>I want to order a race T-Shirt.</Typography>
            <Switch
              aria-label="Order a race T-Shirt"
              checked={shirt}
              aria-checked={shirt}
              onChange={(e) => setShirt(e.target.checked)}
              disabled={submitted}
            />
          </Box>

          <Typography>T-Shirt Size</Typography>
          <FormControl variant="filled" fullWidth disabled={!shirt || submitted}>
            <InputLabel>Select your T-Shirt size</InputLabel>
            <Select
              id="tshirt-size"
              aria-disabled={!shirt || submitted}
            >
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="L">L</MenuItem>
            </Select>
          </FormControl>

          <Divider sx={{ my: 5 }} />

          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography component="h2" variant="h6">
              Voluntary Donation
            </Typography>
            <Tooltip title="Donate your chosen amount to this year's selected charity.">
              <IconButton aria-label="More information about donating">
                <HelpOutlineIcon />
                </IconButton>
              </Tooltip>
          </Box>

          <Typography sx={{ mt: 2 }}>Amount (in euros)</Typography>
          <Slider
            min={0}
            max={100}
            defaultValue={50}
            aria-label="Donation amount slider"
            valueLabelDisplay="on"
            getAriaValueText={(value) => `${value} euros`}
            disabled={submitted}
          />

          {/* Call to Action */}
          <Box sx={{ mt: 5, textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={submitted}
              aria-label="Submit your application form for the Madrid Marathon 2026"
            >
              Submit
            </Button>
          </Box>

        </form>

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

export default Register;