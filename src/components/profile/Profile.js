import React from 'react';
import './profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { data } = useSelector((state) => state.rockets);
  const reserved = data.filter((item) => item.reserved);

  return (
    <div className="profile-main">
      <div className="view-reserved">
        <h3 className="booking-header">My Rockets</h3>
        {reserved.map((reserve) => (<div key={reserve.id} className="show-reservation">{reserve.rocket_name}</div>))}
      </div>
      <div className="view-reserved">
        <h3 className="booking-header">My Missions</h3>
        <div className="show-reservation">Thaicom</div>
      </div>
    </div>
  );
};

export default Profile;
