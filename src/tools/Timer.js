import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';

const Timer = () => {
  return (
    <div className='countdown'>
      <Countdown
        date={parseInt(localStorage.getItem('Now')) + 8.64e7}
        daysInHours={true}
        precision={2}
        intervalDelay={10}
        renderer={({ hours, minutes, seconds, milliseconds, completed }) => (
          <>
            <span style={{ display: completed ? 'none' : '' }}>
              {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}.
              {zeroPad(milliseconds)}
            </span>
            {completed && localStorage.setItem('Now', 'Completed')}
          </>
        )}
      />
    </div>
  );
};

export default Timer;
