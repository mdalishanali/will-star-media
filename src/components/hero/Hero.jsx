import React from "react";
import heroBanner from "../../assets/img/banner-img1.png";
import "./style.css";
const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-content">
        <span className="sub-title">Influencer Marketing</span>
        <h1>Grow Your Brand Through Influencer Marketing</h1>
        <p>
          We are working with 30 brands, 1235 influencers and 104 million
          Audience. With the help of influencer fans and viewers, we increase
          your reach and present your product to an audience of millions.
        </p>

        <div className="btn-box">
          <div>
            <button> I'm A Brand</button>
            <button> I'm An Influencer</button>
          </div>
        </div>

      </div>

      <div className="hero-banner">
        <img src={heroBanner} alt="heroBanner" className="bannerImg" />
      </div>
      
    </div>
  );
};

export default Hero;
