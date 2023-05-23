import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../../Redux/Missions/MissionsSlice';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="missionsCont">
      <h2>Misssions</h2>
    </div>
  );
};

export default Missions;
