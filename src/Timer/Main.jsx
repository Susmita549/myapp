import React from 'react';
import Timer from './Timer';

const Main = () => {
  return (
    <div>
      <Timer initTime={0} endTime={20} />
    </div>
  );
}

export default Main;
