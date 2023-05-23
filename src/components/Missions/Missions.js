import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../Redux/Missions/MissionsSlice';
import './Missions.css';

const MissionList = () => {
  const missions = useSelector((state) => state.missions.missions);
  const loading = useSelector((state) => state.missions.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (loading === 'idle') {
    return <div>Loading...</div>;
  }

  return (
    <div className="missionsCont">
      <table className="table">
        <thead className="tableHead">
          <tr className="headersCont">
            <th className="headers mission">Mission</th>
            <th className="headers desc">Description</th>
            <th className="headers status">Status</th>
            <th className="headers"> </th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {missions.map((mission) => (
            <tr className="bodyCont" key={mission.mission_id}>
              <td className="contentBodyTit">{mission.mission_name}</td>
              <td className="contentBodyDesc">{mission.description}</td>
              <td className="contentBody">is a member</td>
              <td className="contentBody">
                <button type="button" onClick={() => (mission.mission_id)}>
                  Join
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionList;
