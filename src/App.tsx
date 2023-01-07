import React, { useState } from "react";
import Login from "./pages/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

export const User = React.createContext({});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <User.Provider value={{ loggedIn, setLoggedIn }}>
        <Router>
          <Navbar />
          {loggedIn && <Sidebar />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </User.Provider>
    </div>
  );
}

export default App;
