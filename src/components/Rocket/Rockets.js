import { useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/Rockets/RocketSlice';
import './Rocket.css';

function Rockets() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="rocket-container">
      {status && <div>Loading...</div>}
      {data && data.map((rocket) => (
        <div key={rocket.id} className="main-container">
          <img className="rocket-img" src={rocket.flickr_images} alt={rocket.rocket_name} />
          <div className="rocket-content">
            <h3 className="header">{rocket.rocket_name}</h3>
            <p className="description">{rocket.description}</p>
            <button type="submit" className="reserved">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
