import React, { useState } from "react";
import "./CardComponent.css"; // Import the provided CSS

const CardComponent2 = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Handle flip on mouseover or touch
  const handleMouseOver = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);
  const handleTouch = () => setIsFlipped((prev) => !prev);

  return (
    <div
      className="container"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouch}
    >
      <div className={`card ${isFlipped ? "mouseovered" : ""}`}>
        <div className="card-front">
          <div className="card-text">
            <h2>Fest Advisor</h2>
          </div>
        </div>
        <div className="card-back">{/* Add any back content here */}</div>
      </div>
    </div>
  );
};

export default CardComponent2;
