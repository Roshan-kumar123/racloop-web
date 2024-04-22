"use client";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Developer", "Designer"];
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
        className="home-banner overlay  scrollSpysection"
        style={{
          backgroundImage: `url(${"/img/banner/bg-1.jpg"})`,
        }}
      >
        <div className="frame-layout__particles"></div>
        {/* End particle animation */}
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-lg-12">
              <div className="hb-typo ">
                <h1 className="font-alt">
                  Hello,
                  <br /> I'm Raquel Murillo a <br /> Product{" "}
                  <span className="loop-text inline">
                    <TextTransition springConfig={presets.wobbly}>
                      {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                  </span>
                </h1>
                <div className="btn-bar mt-4">
                  <a className="px-btn px-btn-theme btn-md" href="#about">
                    See Who I'M
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-bottom go-to">
          <a href="#about">Scroll</a>
        </div>
        <Social />
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
