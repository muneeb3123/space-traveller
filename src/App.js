import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './routes/Profile';
import Missions from './routes/Missions';
import Rockets from './routes/Rockets';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/rockets" component={Rockets} />
          <Route path="/missions" component={Missions} />
          <Route path="/profile" component={Profile} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
