import { useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReserved, fetchData, reservedRocket } from '../../Redux/Rockets/RocketSlice';
import './Rocket.css';

function Rockets() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.rockets);
  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, data]);
  return (
    <div className="rocket-container">
      {status && <div>Loading...</div>}
      {data && data.map((rocket) => (
        <div key={rocket.id} className="main-container">
          <img
            className="rocket-img"
            src={rocket.flickr_images}
            alt={rocket.rocket_name}
          />
          <div className="rocket-content">
            <h3 className="header">{rocket.rocket_name}</h3>
            <p className="description">
              {rocket.reserved && (
                <span className="reserve-markChanged">Reserved</span>
              )}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button type="submit" onClick={() => dispatch(cancelReserved(rocket.id))} className="cancel-reserved">Cancel Reservation</button>
            ) : (
              <button
                type="submit"
                className="reserved"
                onClick={() => dispatch(reservedRocket(rocket.id))}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
