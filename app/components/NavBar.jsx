"use client";
import React, { useState } from "react";
import "./nav-bar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Logo from "../../public/logo1.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoChevronDown } from "react-icons/io5";

const NavBar = () => {
  const [showDrop, setShowDrop] = useState("none");

  const currentRoute = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setShowDrop(!showDrop);
  };
  return (
    <header onMouseLeave={() => setShowDrop("none")}>
      <div className="container container-header">
        <section className="headerTab">
          <div className="left">
            <Link href="/">
              <Image src={Logo} alt="BidEx Logo" />
            </Link>
            <div className={`menuNav ${isOpen ? "active" : ""}`}>
              <nav>
                <Link
                  href="/about"
                  // onClick={showNavBar}
                  onClick={toggleNavbar}
                  className={
                    currentRoute === "/about" ? "isActive" : "notActive"
                  }
                >
                  About
                </Link>
                <div
                  className="linkItem"
                  onMouseEnter={() => setShowDrop("about")}
                >
                  Services
                  <IoChevronDown />
                  {showDrop === "services" && (
                    <div
                      className="drop"
                      onMouseLeave={() => setShowDrop("none")}
                    >
                      <Link href="/services/voice" onClick={toggleNavbar}>
                        <div className="dropItem">
                          <h4>Voice Bots </h4>
                        </div>
                      </Link>
                      <Link href="/services/chat" onClick={toggleNavbar}>
                        <div className="dropItem">
                          <h4>Chat Bots </h4>
                        </div>
                      </Link>
                      <Link href="/services/enterprise" onClick={toggleNavbar}>
                        <div className="dropItem">
                          <h4>Enterprise chatbot solutions </h4>
                        </div>
                      </Link>
                      <Link href="/services/consult" onClick={toggleNavbar}>
                        <div className="dropItem">
                          <h4>Consultancy Services </h4>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/blog"
                  // onClick={showNavBar}
                  onClick={toggleNavbar}
                  className={
                    currentRoute === "/blog" ? "isActive" : "notActive"
                  }
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  // onClick={showNavBar}
                  onClick={toggleNavbar}
                  className={
                    currentRoute === "/contact" ? "isActive" : "notActive"
                  }
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          <article className="navBtn">
            <div className="button" onClick={toggleNavbar}>
              <Link href="/request">
                <button className="out-btn">Sign in</button>
              </Link>
            </div>
            <div className="button" onClick={toggleNavbar}>
              <Link href="/request">
                <button className="main-btn">
                  Register{" "}
                  <span>
                    <IoChevronDown />
                  </span>
                </button>
              </Link>
            </div>
          </article>
        </section>
        <div onClick={toggleNavbar} className="vvv">
          <button className="nav-btn">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
