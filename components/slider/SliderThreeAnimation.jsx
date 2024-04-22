"use client";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Web Developer", "UI/UX Designer", "App Developer"];
import { useEffect, useState } from "react";
import Social from "../Social";

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner overlay video-banner slider-three-animation scrollSpysection"
        style={{
          backgroundImage: `url(${"/img/banner/bg-4.jpg"})`,
        }}
      >
        <div className="frame-layout__particles"></div>
        {/* End particle animation */}
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-md-12 col-lg-7">
              <div className="hb-typo text-left">
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Ridinana Aria
                </h1>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <span className="loop-text inline">
                    <TextTransition springConfig={presets.wobbly}>
                      {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                  </span>
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores.
                </p>
                <div
                  className="btn-bar"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <a className="px-btn px-btn-theme btn-md" href="#about">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="scroll-bottom go-to">
          <a href="#about">Scroll</a>
        </div>

        {/* End bottom scroll */}

        <Social />
        {/* End social slide  */}
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
