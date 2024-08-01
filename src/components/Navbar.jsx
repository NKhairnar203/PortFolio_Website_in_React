import logo from "../assets/logo.png";

import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="w-full bg-neutral-900 text-white fixed top-0 left-0 z-50">
      <nav className=" flex blur-none items-center justify-between max-w-screen-2xl  mx-auto py-2">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-12 mx-6 " src={logo} alt="logo" />
        </div>
        <label className="hamburger cursor-pointer max-lg:block max-2xl:hidden">
          <input type="checkbox" className="hidden" />
          <svg
            viewBox="0 0 32 32"
            className="h-12 transition-transform duration-600 ease-in-out"
          >
            <path
              className="line line-top-bottom fill-none stroke-white stroke-linecap-round stroke-linejoin-round stroke-3 transition-all duration-600 ease-in-out"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path
              className="line fill-none stroke-white stroke-linecap-round stroke-linejoin-round stroke-3 transition-all duration-600 ease-in-out"
              d="M7 16 27 16"
            ></path>
          </svg>
        </label>
        <div className="mx-8 flex items-center justify-center gap-5 text-xl max-lg:hidden">
          <Link
            className="hover:cursor-pointer"
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>

          <Link
            className="hover:cursor-pointer "
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>

          <Link
            className="hover:cursor-pointer "
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>

          <Link
            className="hover:cursor-pointer "
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>

          <Link
            className="hover:cursor-pointer "
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>

          <Link
            className="hover:cursor-pointer "
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
