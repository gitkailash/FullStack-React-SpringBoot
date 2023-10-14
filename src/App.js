import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/page/Home";
import AddUser from "./components/AddUser";
import ViewUser from "./components/ViewUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/add-user" element={<AddUser />}></Route>
          <Route
            exact
            path="/update-user/:userId"
            element={<UpdateUser />}
          ></Route>
          <Route exact path="/view-user/:userId" element={<ViewUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
