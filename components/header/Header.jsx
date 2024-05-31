"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import addScrollspy from "@/utlis/addScrollSpy";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 71) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  function ititScrollspy() {
    addScrollspy("nav-link");
  }
  useEffect(() => {
    window.addEventListener("scroll", ititScrollspy);

    return () => {
      window.removeEventListener("scroll", ititScrollspy);
    };
  }, []);

  const styles = {
    logo: {
      fontFamily: "Arial, sans-serif", // Use your desired font-family
      fontSize: "24px", // Adjust font size as needed
      fontWeight: "bold", // Make the text bold
      textTransform: "uppercase", // Convert text to uppercase
      letterSpacing: "2px", // Add letter-spacing
      color: "#fff", // Set text color
    },
  };

  return (
    <>
      {/* Header */}
      <header className={navbar ? "main-header fixed-header" : "main-header"}>
        <nav className="container">
          <div className=" header-transparent">
            {/* Brand */}
            <Link href="/">
              {/* <Image
                width={122}
                height={35}
                className="navbar-brand"
                src="/img/logo/logo-light.svg"
                alt="brand logo"
              /> */}

              <div className="navbar-brand" style={styles.logo}>
                Racloop
              </div>
            </Link>
            {/* / */}
            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleClick}
            >
              <div className={click ? "hamburger active" : "hamburger"}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            {/* / */}
            {/* Top Menu */}
            <div
              className={
                click
                  ? "mobile-menu navbar-collapse justify-content-end active"
                  : "mobile-menu navbar-collapse justify-content-end"
              }
            >
              <Link href="/" className="sidebar-logo">
                <Image
                  width={122}
                  height={35}
                  src="/img/logo/logo-light.svg"
                  alt="brand"
                />
              </Link>
              <ul className="anchor_nav navbar-nav ml-auto scrollspyLinks">
                <li>
                  <a
                    className="nav-link current"
                    href="#home"
                    onClick={handleClick}
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="/about-us"
                    onClick={handleClick}
                  >
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#services"
                    onClick={handleClick}
                  >
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#work" onClick={handleClick}>
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#blog" onClick={handleClick}>
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="/contact-us"
                    onClick={handleClick}
                  >
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="/machine-learning"
                    onClick={handleClick}
                  >
                    <span>Learn ML</span>
                  </a>
                </li>
              </ul>
              <button
                className=" sidebar-bottom-closer"
                type="button"
                onClick={handleClick}
              >
                Close Sidebar
              </button>
            </div>
            {/* / */}
          </div>
          {/* Container */}
        </nav>
        {/* Navbar */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
