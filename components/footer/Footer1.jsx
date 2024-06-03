import React, { Component } from "react";
import Link from "next/link";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
// import MaxWidthWrapper from './MaxWidthWrapper';
const Footer = () => {
  return (
    // <MaxWidthWrapper>
    <footer
      className="footer-1  py-8 sm:py-12"
      style={{ backgroundColor: "rgb(255,244,236)" }}
    >
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          {/* <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4"> */}
          {/* <h5 className="text-xl font-bold mb-3 border-b border-gray-700 pb-4">
              Platform
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Cool stuff
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Random feature
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Team feature
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Stuff for developers
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Another one
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Last time
                </a>
              </li>
            </ul> */}
          {/* </div> */}
          <div className="px-4 sm:w-1/2 md:w-1/5 xl:w-1/5 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-3 border-b border-gray-700 pt-2 pb-2">
              Services
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="/services/devops"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Devops
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/services/ui-ux-design-services"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  UI/UX Design
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/services/product-sustenance"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Product - Sustenance
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/5 xl:w-1/5 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-3 border-b border-gray-700 pt-2 pb-2">
              Resources
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Team
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Locations
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/5 xl:w-1/5 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-3 border-b border-gray-700 pt-2 pb-2">
              Support
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  href="/about-us"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  About-Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact-us"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-gray-900   font-medium text-lg leading-7"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
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
                  123 Stree New York City , <br />
                  United States Of America <br />
                  NY 750065.
                </span>
              </div>
              {/* End media */}

              <div className="media">
                <div className="icon">
                  <i className="ti-email"></i>
                </div>
                <span className="media-body">
                  support@domain.com
                  <br />
                  info@domain.com
                </span>
              </div>
              {/* End media */}

              <div className="media">
                <div className="icon">
                  <i className="ti-mobile"></i>
                </div>
                <span className="media-body">
                  +044 966 9696 636
                  <br />
                  +044 966 9696 636
                </span>
              </div>
              {/* End media */}
            </div>
          </div>
        </div>
      </div>
    </footer>
    // </MaxWidthWrapper>
  );
};
export default Footer;
