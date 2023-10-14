import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Box,
  Typography,
  TextField,
  Paper,
  Container,
} from "@mui/material";
export default function ViewUser() {
  const navigate = useNavigate();

  const { userId } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    age: "",
    nationality: "",
  });

  const { name, email, mobile, gender, age, nationality } = user;

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/api/users/${userId}`);
    console.log(result.data.data);
    setUser(result.data.data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ color: "#1976D2", mb: 2 }}
        >
          View User
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Enter Name"
              variant="outlined"
              fullWidth
              name="name"
              value={name}
              inputProps={{ readOnly: true }}
            />
            <TextField
              label="Enter Email"
              variant="outlined"
              fullWidth
              name="email"
              inputProps={{ readOnly: true }}
              value={email}
            />
            <TextField
              label="Enter Mobile"
              variant="outlined"
              fullWidth
              name="mobile"
              inputProps={{ readOnly: true }}
              value={mobile}
            />
            <TextField
              label="Enter Gender"
              variant="outlined"
              fullWidth
              name="gender"
              inputProps={{ readOnly: true }}
              value={gender}
            />
            <TextField
              label="Enter Age"
              variant="outlined"
              fullWidth
              name="age"
              inputProps={{ readOnly: true }}
              value={age}
            />
            <TextField
              label="Enter Nationality"
              variant="outlined"
              fullWidth
              name="nationality"
              value={nationality}
              inputProps={{ readOnly: true }}
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Back
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
