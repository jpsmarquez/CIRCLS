import React from "react";
import HomeA from "./HomeAdmin";
import HomeE from "./HomeE";
const User = {type:"A"};


export default function SwitchHome() {
    return (
      <div>{
           User.tipo === 'A'? <HomeA/> : <HomeE/>
      }</div>
    );
}