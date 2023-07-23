// PointSelector.jsx
import React from "react";
import { cities } from "../data/Data";
console.log(cities);

const PointSelector = ({ selectedPoint, onPointSelect, label }) => {
  const handlePointChange = (event) => {
    onPointSelect(event.target.value);
  };

  return (
    <div>
      <label>{label}:</label>
      <select onChange={handlePointChange} value={selectedPoint}>
        <option>Choose one</option>
        {cities.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default PointSelector;
