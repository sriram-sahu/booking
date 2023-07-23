// VehicleList.jsx
import React from "react";

const VehicleList = ({ vehicles }) => {
  return (
    <div>
      <h3>Available Vehicles:</h3>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>{vehicle.vehiclesName}</li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
