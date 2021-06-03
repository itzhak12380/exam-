import "./Dog-Card.css";
import React from "react";

function DogsCard(prpos) {
  const {name,age,breed,} = prpos
  let color;
  if(age > 4){
    color = "red"
  }
  else{
    color = "yellow"
  }
  return (
    <div className="dog-card" style={{backgroundColor:color}}>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{breed}</h3>
    </div>
  );
};

export default DogsCard;
