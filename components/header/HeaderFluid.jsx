"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import addScrollspy from "@/utlis/addScrollSpy";

const HeaderFluid = () => {
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

  return (
    <>
      {/* Header */}
      <header
        className={
          navbar
            ? "main-header header-fluid fixed-header"
            : "main-header header-fluid"
        }
      >
        <nav className="container-fluid">
          <div className=" header-transparent">
            {/* Brand */}
            <Link href="/">
              <Image
                width={122}
                height={35}
                className="navbar-brand"
                src="/img/logo/logo-light.svg"
                alt="brand logo"
              />
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
                  <a className="nav-link" href="#about" onClick={handleClick}>
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
                  <a className="nav-link" href="#contact" onClick={handleClick}>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
              <button
                className=" sidebar-bottom-closer dark-bg"
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

export default HeaderFluid;
