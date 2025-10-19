import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Job() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>JOB {id}</h1>
      <Link to={"/careers"}>Back to Careers</Link>
    </div>
  );
}

export default Job;
