import React from "react";
import { Link, Outlet } from "react-router-dom";

function Careers() {
  return (
    <div>
      <h1>Careers</h1>
      <Link to="/careers/careers-details">Go to Careers details page</Link>
      <Outlet />
    </div>
  );
}

export default Careers;
