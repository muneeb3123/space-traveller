import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './components/profile/Profile';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rocket/Rockets';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
