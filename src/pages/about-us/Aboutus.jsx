import React from "react";
import about from "../../assets/img/about.jpg";
import "./style.css";
const itemData = [
  {
    icone: "icon",
    val: "1235",
    title: "Influencer",
  },
  {
    icone: "icon",
    val: "30",
    title: "Brands",
  },
  {
    icone: "icon",
    val: "104M",
    title: "Audience",
  },
];
const Aboutus = () => {
  return (
    <div className="about-us">
      <div className="about-us-banner">
        <img src={about} alt="about" />
      </div>

      <div className="about-us-content">
        <span>About Us</span>
        <h2>Taking People's Businesses And Brands To The Next Level.</h2>
        <p>
          We started our journey as an influencer in 2017. We learn, experience
          and understand the insights of content production, influencer's
          mindset and audience's need. So, now we have achieved that expertise
          in the Influencer marketing industry.
        </p>

        <div className="list">
          {itemData.map((item) => {
            return (
              <>
                <p>Icon</p>
                <p>{item.val}</p>
                <p>{item.title}</p>
              </>
            );
          })}
        </div>
        <button>More About Us</button>
      </div>
    </div>
  );
};

export default Aboutus;
