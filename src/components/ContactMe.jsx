import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Example: send to backend
    // fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    alert("Thank you! Your message has been sent.");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 6,
        px: 2,
        background: "linear-gradient(to right, #d946ef, #1e3a8a)", // fuchsia → dark blue
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 500,
          width: "100%",
          p: 4,
          borderRadius: 3,
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          align="center"
          gutterBottom
        >
          Contact Me
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            required
          />

          {/* Hidden Reason */}
          <input type="hidden" name="reason" value={formData.reason} />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: "bold",
              backgroundColor: "#d946ef",
              "&:hover": { backgroundColor: "#c026d3" },
            }}
          >
            What Your Message or Inquiry?
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default function ContactMeAgain() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });