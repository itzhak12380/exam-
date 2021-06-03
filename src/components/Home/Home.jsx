import "./Home.css";
import React from "react";
import DOgsCard from '../Dog-Card/Dog-Card'



function Home() {

 
  const dogs = [
    {
      name: "sky",
      age: 5,
      breed: "husky"
    },
    {
      name: "rexy",
      age: 4,
      breed: "boldog"
    },
    {
      name: "bady",
      age: 2,
      breed: "winner"
    },
    {
      name: "sparky",
      age: 5,
      breed: "germen sheperd"
    },
  ]


  return (
    dogs.map((dog,index)=>{
      const {name,breed,age} = dog;
      return(
          <div key={index}><DOgsCard name={name} breed ={breed} age={age}/></div>
          )
  })
  );
};

export default Home;
