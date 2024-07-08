import "./styles.css";
import React from "react";
// Do not remove the export statement from Card Component.
//Refactor the given Card component.
export const Card = (props) => {
const {name, about} = props;
  return(
    <div className="card">
    <h3>Name: {name}</h3>
    <span>About: {about}</span>
  </div>
  )
  
}

export default function App() {
  return <Card name="Pranav" about="Hi, my name is Pranav Yeole." />;
}
