import React from "react";
import { useNavigate } from "react-router-dom";
import Ass from "../images/makass.PNG";

const Four = () => {
  const navigate = useNavigate();
  return (
    <div className="four">
      <h1 style={{textAlign: "center"}}>The world's best Ass</h1>
      <img src={Ass} alt="" style={{height: "370px"}}/>
      <button onClick={() => navigate("/")}>Back To Main</button>
    </div>
  );
};

export default Four;
