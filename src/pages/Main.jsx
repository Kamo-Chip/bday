import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <h1 className="t1">Happy</h1>
      <h1 className="t2">Birthday</h1>
      <h1 className="t3">Mak</h1>
      <button onClick={() => {navigate("/two")}}>Click</button>
    </div>
  );
};

export default Main;
