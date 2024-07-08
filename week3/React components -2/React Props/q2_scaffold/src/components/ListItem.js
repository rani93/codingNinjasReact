import React, { Component } from "react";

// Complete this Component
const ListItem = ({src, alt, href, bg, name}) => {
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor:bg
      }}
    >
      <img src={src} alt={alt} />
      <a href={href}>{name}</a>
    </div>
  );
};

export default ListItem;
