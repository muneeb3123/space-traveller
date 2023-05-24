import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../../Redux/Missions/MissionsSlice';
import './Missions.css';

const MissionList = () => {
  const missions = useSelector((state) => state.missions.missions);
  const loading = useSelector((state) => state.missions.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission({ missionId }));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission({ missionId }));
  };

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
              <td className="contentBody">
                <div className={`member ${mission.reserved ? 'activeMem' : 'not-member'}`}>
                  {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
                </div>
              </td>
              <td className="contentBody">
                {mission.reserved ? (
                  <button type="button" className="button-leave" onClick={() => handleLeaveMission(mission.mission_id)}>
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="joinM"
                    onClick={() => handleJoinMission(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionList;
