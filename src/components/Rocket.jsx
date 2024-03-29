import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '../redux/redux-hooks';
import style from '../styles/Rocket.module.css';
import { setReserved } from '../redux/rockets/rocketsSlice';

const Rocket = ({
  rocketId, image, name, description, reserved,
}) => {
  const dispatch = useAppDispatch();
  const handler = (elem) => {
    dispatch(setReserved(elem.id));
  };

  return (
    <div className={style.container}>
      <img src={image} alt={name} className={style.image} />
      <div className={style.text}>
        <h3>{name}</h3>
        <p>
          {reserved && <Button size="sm">Reserved</Button>}
          {description}
        </p>
        {!reserved && <Button variant="primary" id={rocketId} onClick={({ target }) => handler(target)}>Reserve Rocket</Button>}
        {reserved && <Button variant="outline-secondary" id={rocketId} onClick={({ target }) => handler(target)}>Cancel Reservation</Button>}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
