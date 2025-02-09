import React from "react";
import CardComponent from "./CardComponent"; // Faculty Associates
import CardComponent2 from "./CardComponent2"; // Fest Advisor
import CardComponent3 from "./CardComponent3"; // Core Members
import "./App.css"; // CSS for alignment and background

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title" style={{ fontFamily: "Misteri Caps" }}>
        Ecstasia Family
      </h1>
      <div className="cards-wrapper">
        <CardComponent />
        <CardComponent2 />
        <CardComponent3 />
      </div>
    </div>
  );
};

export default App;
