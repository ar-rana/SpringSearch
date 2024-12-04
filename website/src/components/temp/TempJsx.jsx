import React from "react";
import { useLocation } from "react-router-dom";

const TempJsx = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      Authentication Successful! Token: {token}
    </div>
  );
};

export default TempJsx;
