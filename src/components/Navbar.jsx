import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="w-full bg-neutral-900 text-white fixed top-0 left-0 z-50">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto py-2 px-4">
          <div className="flex flex-shrink-0 items-center">
            <img className="h-12 mx-6" src={logo} alt="logo" />
          </div>
          <div className="lg:hidden">
            <button
              onClick={handleToggle}
              className="text-white focus:outline-none"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M4 6h16M4 12h16m-7 6h7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link
              className="block py-2 px-4 hover:bg-gray-700 value"
              activeClass="active"
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            <Link
              className="block py-2 px-4 hover:bg-gray-700 value"
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
            <Link
              className="block py-2 px-4 hover:bg-gray-700 value"
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
            <Link
              className="block py-2 px-4 hover:bg-gray-700 value"
              to="experience"
              smooth={true}
              duration={500}
            >
              Experience
            </Link>
            <Link
              className="block py-2 px-4 hover:bg-gray-700 value"
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className="block py-2 px-4 hover:bg-gray-700 value"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-neutral-900 text-white z-40 ${
          isOpen ? "block" : "hidden"
        } lg:hidden`}
      >
        <div className="flex flex-col items-center py-4">
          <Link
            className="block py-2 px-4 hover:bg-gray-700 value"
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="block py-2 px-4 hover:bg-gray-700 value"
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className="block py-2 px-4 hover:bg-gray-700 value"
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            className="block py-2 px-4 hover:bg-gray-700 value"
            to="experience"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            className="block py-2 px-4 hover:bg-gray-700 value"
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            className="block py-2 px-4 hover:bg-gray-700 value"
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
