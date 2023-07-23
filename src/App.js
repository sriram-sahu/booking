import React, { useState } from "react";
import PointSelector from "./components/PointSelector";
import DateSelector from "./components/DateSelector";
import { vehiclesData } from "./data/Data";
import VehicleList from "./components/VehilesList";
import "./App.css";

const App = () => {
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [errorMsg, SetErrorMsg] = useState("");
  const [availableVehicles, setAvailableVehicles] = useState([]);

  const handlePointASelection = (selectedPoint) => {
    setPointA(selectedPoint);
  };

  const handlePointBSelection = (selectedPoint) => {
    setPointB(selectedPoint);
  };

  const handleDateSelection = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  const handleSearchButtonClick = async () => {
    if (pointA === "" || pointB === "" || selectedDate === "") {
      SetErrorMsg("Enter the fields");
    } else {
      SetErrorMsg("");
      const filteredVehicles = vehiclesData.filter(
        (vehicle) => vehicle.from === pointA && vehicle.to === pointB
      );
      setAvailableVehicles(filteredVehicles);
    }
  };

  return (
    <div>
      <div className="display-center">
        <PointSelector
          selectedPoint={pointA}
          onPointSelect={handlePointASelection}
          label="From"
        />
        <PointSelector
          selectedPoint={pointB}
          onPointSelect={handlePointBSelection}
          label="To"
        />
        <DateSelector
          selectedDate={selectedDate}
          onDateSelect={handleDateSelection}
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </div>
      {errorMsg !== "" && <p style={{ color: "red" }}>{errorMsg}</p>}
      {console.log(availableVehicles)}
      {availableVehicles.length !== 0 && (
        <VehicleList vehicles={availableVehicles} />
      )}
    </div>
  );
};

export default App;
