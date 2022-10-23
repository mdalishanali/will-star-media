import React from "react";
import about from "../../assets/img/about.jpg";
import "./style.css";
const itemData = [
  {
    icone: "flaticon-menu-1",
    val: "1235",
    title: "Influencer",
  },
  {
    icone: "flaticon-web-settings",
    val: "30",
    title: "Brands",
  },
  {
    icone: "flaticon-conversation",
    val: "104M",
    title: "Audience",
  },
];
const Aboutus = () => {
  return (
    <>


      <section class="about-area pb-100">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
              <div class="about-img">

                <img src={about} alt="about" />
              </div>
            </div>

            <div class="col-lg-6 col-md-12">
              <div class="about-content">
                <div class="text">

                  <span class="sub-title">About Us</span>
                  <h2>
                    Taking People's Businesses And Brands To The Next Level.
                  </h2>
                  <p>
                    We started our journey as an influencer in 2017. We learn,
                    experience and understand the insights of content
                    production, influencer's mindset and audience's need. So,
                    now we have achieved that expertise in the Influencer
                    marketing industry.
                  </p>
                  <ul class="funfacts-list">





                    {itemData.map((item) => {
                      return (
                        <>
                          <li>
                            <div class="list">
                              {/* <i class={item.icone}></i> */}

                              <h3 class="odometer" data-count="1235">
                                {item.val}
                              </h3>
                              <p>{item.title}</p>
                            </div>
                          </li>
                        </>
                      );
                    })}




                  </ul>
                  <a href="#" class="default-btn">
                    More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default Aboutus;
