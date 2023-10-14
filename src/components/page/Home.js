import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Button,
  Dialog,
  DialogTitle,
} from "@mui/material";
export default function Home() {
  const [users, setUsers] = useState([]);

  const [open, setOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const handleOpen = (userId) => {
    setUserIdToDelete(userId);
    console.log(userId);
    console.log(userIdToDelete);
    setOpen(true);
  };

  const handleClose = () => {
    setUserIdToDelete(null);
    setOpen(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/users");
    console.log(result.data.data);
    setUsers(result.data.data);
  };

  const handleDelete = async () => {
    if (userIdToDelete) {
      const result = await axios.delete(
        `http://localhost:8080/api/users/${userIdToDelete}`
      );
      console.log(result);
      setUserIdToDelete(null);
      setOpen(false);
      loadUsers();
    }
  };

  return (
    <div>
      <TableContainer
        sx={{ minWidth: 700, width: "75%", margin: "auto", mt: 2 }}
        component={Paper}
      >
        <Table aria-label="customized table">
          <TableHead sx={{ bgcolor: "info.main", color: "text.secondary" }}>
            <TableRow>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                S.N.
              </TableCell>
              <TableCell
                align="center"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Name
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Email
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Mobile
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Gender
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Age
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Nationality
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.userId}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.mobile}</TableCell>
                <TableCell align="center">{user.gender}</TableCell>
                <TableCell align="center">{user.age}</TableCell>
                <TableCell align="center">{user.nationality}</TableCell>
                <TableCell align="center">
                  <Button
                    component={Link}
                    href={`/update-user/${user.userId}`}
                    color="info"
                    size="small"
                    variant="outlined"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => handleOpen(user.userId)}
                    color="error"
                    size="small"
                    variant="outlined"
                    sx={{ m: 2 }}
                  >
                    Delete
                  </Button>
                  <Button
                    component={Link}
                    href={`/view-user/${user.userId}`}
                    color="success"
                    size="small"
                    variant="outlined"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </Dialog>
    </div>
  );
}
