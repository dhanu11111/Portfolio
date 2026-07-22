import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef, SiGithub } from "react-icons/si";

const Hero = () => {
  return (
    <div className="coding-hero">

      <div className="hero-badge">
        <FaLaptopCode />
        <span>Competitive Programming</span>
      </div>

      <h1 className="coding-title">
        Coding <span>Universe</span>
      </h1>

      <p className="coding-subtitle">
        Passionate about solving algorithmic challenges, participating in
        contests, and continuously improving problem-solving skills across
        multiple competitive programming platforms.
      </p>

      <div className="platform-icons">

        <div className="platform-circle leetcode">
          <SiLeetcode />
        </div>

        <div className="platform-circle codeforces">
          <SiCodeforces />
        </div>

        <div className="platform-circle codechef">
          <SiCodechef />
        </div>

        <div className="platform-circle github">
          <SiGithub />
        </div>

      </div>

      <div className="hero-stats">

        <div className="stat-card">
          <FaCode />
          <h3>1000+</h3>
          <span>Problems Solved</span>
        </div>

        <div className="stat-card">
          🏆
          <h3>50+</h3>
          <span>Contests</span>
        </div>

        <div className="stat-card">
          ⭐
          <h3>4</h3>
          <span>Platforms</span>
        </div>

      </div>

    </div>
  );
};

export default Hero;