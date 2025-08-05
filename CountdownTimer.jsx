import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => {
        if (prev === 1) {
          clearInterval(timer); 
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>
        {counter > 0 ? `Đếm ngược: ${counter} giây` : 'Hết giờ!'}
      </h1>
    </div>
  );
}

export default CountdownTimer;
