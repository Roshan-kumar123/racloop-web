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
      <section
        id="home"
        className="home-banner slider-five-video inner-content-static overlay overlay-75 video-banner scrollSpysection"
        style={{
          backgroundImage: `url(/img/banner/bg-2.jpg)`,
        }}
      >
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-lg-12">
              <div className="hb-typo text-center">
                <h1 className="font-alt">
                  I'm <span>David </span>Rockstar
                </h1>
                <h2 className="mb-4">
                  <span className="loop-text">
                    <TextTransition springConfig={presets.wobbly}>
                      {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                  </span>
                </h2>
                <Social />
                {/* End social slide  */}
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="video-background">
          <video
            src="https://www.ibthemespro.com/resource/krozo/resources/video.mp4"
            autoPlay
            loop
            muted
            poster="/img/banner/bg-2.jpg"
          />
        </div>

        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
        {/* End bottom scroll */}
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
