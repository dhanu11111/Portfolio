import React from "react";
import PlatformCard from "./PlatformCard";
import codingData from "../../data/codingData";

const PlatformGrid = () => {
  return (
    <div className="coding-grid">
      {codingData.map((platform, index) => (
        <PlatformCard
          key={index}
          platform={platform}
        />
      ))}
    </div>
  );
};

export default PlatformGrid;