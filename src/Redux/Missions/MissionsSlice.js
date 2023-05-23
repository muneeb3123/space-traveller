import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    return err;
  }
});

const initialState = {
  missions: [],
  loading: 'idle',
};

const MissionsSlices = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const missions = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }));
      state.missions = missions;
      state.loading = 'fulfilled';
    });
  },
});

export default MissionsSlices.reducer;
