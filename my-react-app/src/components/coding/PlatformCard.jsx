
import React from "react";
import "./PlatformCard.css";

const PlatformCard = ({ platform }) => {
  return (
    <div className="platform-card">
      {/* Glow */}
      <div className="card-glow"></div>

      {/* Logo */}
      <div className="platform-logo">
        {platform.icon}
      </div>

      {/* Name */}
      <h2>{platform.name}</h2>

      {/* Username */}
      <p className="username">@{platform.username}</p>

      {/* Divider */}
      <div className="divider"></div>

      {/* Stats */}
      <div className="stats">

        <div className="stat-box">
          <span className="stat-number">
            {platform.rating}
          </span>
          <span className="stat-title">
            Rating
          </span>
        </div>

        <div className="stat-box">
          <span className="stat-number">
            {platform.solved}
          </span>
          <span className="stat-title">
            Solved
          </span>
        </div>

      </div>

      {/* Button */}

      <a
        href={platform.link}
        target="_blank"
        rel="noreferrer"
        className="visit-btn"
      >
        Visit Profile →
      </a>

    </div>
  );
};

export default PlatformCard;