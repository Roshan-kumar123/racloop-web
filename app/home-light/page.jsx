import Header from "@/components/header/Header";
import Slider from "@/components/slider/Slider";
import About from "@/components/about/About";
import Service from "@/components/service/Service";
// import Skills from "@/components/skills/Skills";
import TechnologySection from "@/components/TechnologySection/TechnologySection";
import Portfolio from "@/components/portfolio/Portfolio";
import Testimonial from "@/components/testimonial/Testimonial";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

import NewTab from "@/components/tab/newTab";
export const metadata = {
  title: "Home Light || React Personal Portfolio Template",
};
const HomeOne = () => {
  return (
    <>
      {/* End Header Section */}
      <Slider />
      {/* End Banner Section */}

      {/* Services */}
      <section
        id="services"
        className="section services-section gray-bg scrollSpysection"
      >
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Our Services</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Service />
        </div>
      </section>
      {/* End Services */}

      {/* <ReactTab /> */}
      <section cal></section>
      <NewTab />
      {/* About Me */}
      <section
        id="about"
        className="section about-section after-left-section scrollSpysection"
      >
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}

      {/*  Skills */}
      <section className="section skill-section">
        <div className="container">
          <TechnologySection />
        </div>
      </section>
      {/* End Skills */}

      {/* <section id="work" className="section gray-bg scrollSpysection">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Portfolio</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
        
          <Portfolio />
        </div>
      </section> */}

      {/* Blog */}
      {/* <section id="blog" className="section gray-bg scrollSpysection">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Recent articles</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          End .row
          <Blog />
        </div>
      </section> */}
      {/*  End Blog */}

      {/* End Portfolio */}

      <div className="section testimonial gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Our Founder's</h3>
            </div>
          </div>
          <Testimonial />
        </div>
      </div>
      {/* End testimonial */}

      {/* Contact */}
      <section
        id="contact"
        className="section after-left-section scrollSpysection"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
              <div className="contct-form">
                <div className="sm-title">
                  <h4 className="font-alt">Contact us</h4>
                </div>
                {/* End .sm-title */}
                <Contact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <div className="sm-title">
                  <h4 className="font-alt">Get in touch</h4>
                  <p>
                    Always available for freelancing if the right project comes
                    along, Feel free to contact me.
                  </p>
                </div>
                {/* End .title */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-map"></i>
                  </div>
                  <span className="media-body">
                    B-18, Second Floor, Institutional Area, <br />
                    Sector 32, Gurugram,
                    <br /> Haryana 122001
                  </span>
                </div>
                {/* End media */}

                <div className="media flex justify-center items-center">
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <span className="media-body">info@racloop.com</span>
                </div>
                {/* End media */}

                <div className="media flex justify-center items-center">
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <span className="media-body">+91 82647 14180</span>
                </div>
                {/* End media */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Contact */}

      {/* Footer */}
      {/* <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer> */}
      {/*  End Footer */}
    </>
  );
};

export default HomeOne;
