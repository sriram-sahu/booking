// DateSelector.jsx
import React from "react";

const DateSelector = ({ selectedDate, onDateSelect }) => {
  const handleDateChange = (event) => {
    onDateSelect(event.target.value);
  };

  return (
    <div>
      <label>Date:</label>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

export default DateSelector;
