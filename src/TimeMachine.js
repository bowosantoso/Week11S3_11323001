import React, { useState } from 'react';

const TimeMachine = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [displayedYear, setDisplayedYear] = useState(2024);

  const handleTravel = () => {
    setDisplayedYear(selectedYear);
  };

  const handleChangeYear = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  return (
    <div>
      <h1>Welcome to the Time Machine</h1>
      <p>Displayed Year: {displayedYear}</p>
      <input 
        type="number" 
        placeholder="Enter Year" 
        value={selectedYear} 
        onChange={handleChangeYear} 
      />
      <button onClick={handleTravel}>Travel</button>
    </div>
  );
};

export default TimeMachine;
