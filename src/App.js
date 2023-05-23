import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import Profile from './components/profile/Profile';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rocket/Rockets';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/rockets" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
