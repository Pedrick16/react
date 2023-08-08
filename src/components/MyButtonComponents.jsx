import React from "react";

const clickMe = (name) =>{
    alert(`Hello! ${name}`)
}

const MyButtonComponents = () => {
 
  return <button className="btn btn-info" onClick={() => clickMe("Pedrick")}>MyButton</button>
};

export default MyButtonComponents;
