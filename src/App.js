import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import Change from "./components/Change";

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/change" element={<Change />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;