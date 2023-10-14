import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Box,
  Typography,
  TextField,
  Paper,
  Container,
} from "@mui/material";
export default function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    age: "",
    nationality: "",
  });

  const { name, email, mobile, gender, age, nationality } = user;
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users", user);
      // If the request is successful, you can navigate to a success page or perform other actions.
      navigate("/");
    } catch (error) {
      let errorText = "";
      if (error.response) {
        if (error.response.status === 400) {
          errorText = `Bad Request: ${error.response.data.message}`;
          console.log("Bad Request:", error.response.data);
        } else if (error.response.status === 500) {
          errorText = `Internal Server Error: ${error.response.data.message}`;
          console.log("Internal Server Error:", error.response.data);
        }
      } else if (error.request) {
        errorText = "Request made but no response received.";
        console.log("Request made but no response received.");
      } else {
        errorText = `Error: ${error.message}`;
        console.log("Error:", error.message);
      }
      errorText = errorText.concat("***");
      console.log(errorText);
      setErrorMessage(errorText);
    }
  };
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        {errorMessage && (
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        )}

        <Typography
          variant="h5"
          component="div"
          sx={{ color: "#1976D2", mb: 2 }}
        >
          Register User
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Enter Name"
              variant="outlined"
              fullWidth
              name="name"
              value={name}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              label="Enter Email"
              variant="outlined"
              fullWidth
              name="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              label="Enter Mobile"
              variant="outlined"
              fullWidth
              name="mobile"
              value={mobile}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              label="Enter Gender"
              variant="outlined"
              fullWidth
              name="gender"
              value={gender}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              label="Enter Age"
              variant="outlined"
              fullWidth
              name="age"
              value={age}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              label="Enter Nationality"
              variant="outlined"
              fullWidth
              name="nationality"
              value={nationality}
              onChange={(e) => handleInputChange(e)}
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
