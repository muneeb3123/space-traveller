import { configureStore } from '@reduxjs/toolkit';
import rocketreducer from './Rockets/RocketSlice';
import missionsreducer from './Missions/MissionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketreducer,
    missions: missionsreducer,
  },
});

export default store;
