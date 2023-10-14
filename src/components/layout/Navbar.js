import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Full Stack Application
          </Typography>
          <Button
            component={Link}
            href="/add-user"
            color="inherit"
            variant="outlined"
          >
            Add User
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
