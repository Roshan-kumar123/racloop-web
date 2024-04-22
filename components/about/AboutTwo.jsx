"use client";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const AboutTwo = () => {
  const imgGallery = [
    "/img/about/about-4.jpg",
    "/img/about/about-2.jpg",
    "/img/about/about-6.jpg",
    "/img/about/about-4.jpg",
  ];
  return (
    <>
      <div className="row align-items-center justify-content-center services-inner-section">
        <div className="col-lg-5">
          <Gallery>
            <div className="row g-2 about-gallery">
              {imgGallery.map((val, i) => (
                <div className="col-6" key={i}>
                  <Item
                    original={val}
                    thumbnail={val}
                    width={234}
                    height={286}
                    key={i}
                  >
                    {({ ref, open }) => (
                      <Image
                        width={900}
                        height={1099}
                        style={{ height: "fit-content" }}
                        src={val}
                        alt="Shoot"
                        role="button"
                        ref={ref}
                        onClick={open}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          </Gallery>
        </div>
        <div className="col-lg-7 ps-xl-5">
          <div className="typo-box about-me">
            <h3>Krozo Plakson</h3>
            <h5>
              A Lead <span className="color-theme">UX &amp; UI</span> designer
              based in <span className="color-theme">Canada</span>
            </h5>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
            <div className="py-3">
              <Image
                width={338}
                height={113}
                className="author-signeture"
                src="/img/signature.png"
                alt="author signature"
              />
            </div>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Birthday</label>
                  <p>4th april 1991</p>
                </div>
                <div className="media">
                  <label>Age</label>
                  <p>22 Yr</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>Canada</p>
                </div>
                <div className="media">
                  <label>Address</label>
                  <p>California, USA</p>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>info@domain.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>820-885-3321</p>
                </div>
                <div className="media">
                  <label>Skype</label>
                  <p>skype.0404</p>
                </div>
                <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a
                className="px-btn px-btn-theme"
                href="/img/resume.png"
                download
              >
                Download CV
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
