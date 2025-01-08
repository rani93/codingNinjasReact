// import { useState } from "react";
import { useValue } from "./postContext";


export const Navbar = () => {
  // remove this and get the value from context
  // const [savedPosts, setSavedPosts] = useState([]);
  const {count, reset, savedPosts, showSavedList, toggle  }= useValue();

  // const [showSavedList, setShowSavedList] = useState(false);

  return (
    <div className="navbar">
      {/* <span onClick={() => setShowSavedList(!showSavedList)}> */}
      <span onClick={toggle}>
        Saved Posts: {/* show length of saved posts here */ count}
      </span>
      {showSavedList && (
        <div className="saved-list">
          {savedPosts.map((p) => (
            <div className="saved-post" key={p.id}>
              <h3>{p.text}</h3>
              <img src={p.img} alt={p.text} />
            </div>
          ))}
        </div>
      )}
      {/* Add onClick functionality for the reset button */}
      <button onClick={reset}>Reset</button>
    </div>
  );
};
