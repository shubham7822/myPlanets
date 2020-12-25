import React from "react";
import "./Planets.css";
import uuid from "react-uuid";
import Planet from "./Planet/Planet";

function Planets({ planetArr }) {
  return (
    <div className='planet'>
      {planetArr.map((item) => {
        return <Planet key={uuid()} id={item.id} name={item.name} />;
      })}
    </div>
  );
}

export default Planets;
