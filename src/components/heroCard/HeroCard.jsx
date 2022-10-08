import React from "react";
import { Link } from "react-router-dom";
import Service1 from "../../assets/img/Service1.png";
import Service2 from "../../assets/img/Service2.png";
import Service3 from "../../assets/img/Service3.png";
import "./style.css";
const HeroCard = () => {
  const cardData = [
    {
      img: Service1,
      title: "Influencer Marketing",
      description:
        "We will help you to grow your brand and revenue in this new era of digital marketing by selecting good Influencer who are experts in their niche.",
      link: "/",
    },
    {
      img: Service2,
      title: "Influencer Management",
      description:
        "It's our responsibility to build your personal brand and monetize your content in a better way through reputed brands for future opportunities and good income.",
      link: "/",
    },
    {
      img: Service3,
      title: "Media Consulting",
      description:
        "Building a better social media strategy for your online presence is important and we will help you with this by providing the required consulting & Services.",
      link: "/",
    },
  ];
  return (
    <>
      <div className="card-parent">
        {cardData.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button>
                <Link to={item.link}>Learn More</Link>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeroCard;
