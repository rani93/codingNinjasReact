import React from "react";

// Complete this Component
function ListItem ({item}){
  const {name, link, icon, bgColor}= item;
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: {bgColor}
      }}
    >
      <img src={icon} alt="image" />
      <a href={link}>{name}</a>
    </div>
  );
};

export default ListItem;
