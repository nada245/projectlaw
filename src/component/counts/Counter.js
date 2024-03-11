import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import './counter.css';

function Counter() {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [numberOfExperts, setNumberOfExperts] = useState(0);
  const [numberOfClients, setNumberOfClients] = useState(0);
  const [offices, setOffices] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setYearsOfExperience(prevExperience => (prevExperience + 1) );
      setNumberOfExperts(prevExperts => (prevExperts + 1) );
      setNumberOfClients(prevClients => (prevClients + 1) );
      setOffices(prevOffices => (prevOffices + 10) % 41);
    }, 1000); // Update numbers every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-counter-container">
      <div className="counter-item">
        <CountUp
          start={0}
          end={yearsOfExperience}
          duration={5}
          delay={0}
          separator=","
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
              <span className="counter-label">Years of Experience</span>
            </div>
          )}
        </CountUp>
      </div>
      <div className="counter-item">
        <CountUp
          start={20}
          end={numberOfExperts}
          duration={5}
          delay={0.2}
          separator="10"
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
              <span className="counter-label">Experts</span>
            </div>
          )}
        </CountUp>
      </div>
      <div className="counter-item">
        <CountUp
          start={30}
          end={numberOfClients}
          duration={5}
          delay={0.4}
          separator="30"
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
              <span className="counter-label">Clients</span>
            </div>
          )}
        </CountUp>
      </div>
      <div className="counter-item">
        <CountUp
          start={0}
          end={offices}
          duration={5}
          delay={0.6}
          separator="10"
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
              <span className="counter-label">Local Offices</span>
            </div>
          )}
        </CountUp>
      </div>
    </div>
  );
}

export default Counter;
