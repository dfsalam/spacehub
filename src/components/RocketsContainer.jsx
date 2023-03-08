import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const RocketsContainer = () => {
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <div>
      {rockets.map((item) => (
        <Rocket
          key={item.rocketId}
          rocketId={item.rocketId}
          image={item.image}
          name={item.name}
          description={item.description}
        />
      ))}

    </div>
  );
};

export default RocketsContainer;