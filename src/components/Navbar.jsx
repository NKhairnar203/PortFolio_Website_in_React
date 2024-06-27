import React from 'react'
import logo from "../assets/logo.jpg"
import { FaLinkedin, FaGithub,FaTwitter, FaInstagram, FaFileDownload } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img className="h-8 mx-3 " src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/nilesh-khairnar-07b14b254/"
          target="_blank"
        >
          <FaLinkedin className="text-white" />
        </a>
        <a href="https://github.com/NKhairnar203/" target="_blank">
          <FaGithub className="text-white" />
        </a>

        <a href="https://x.com/Nilesh__2003">
          {" "}
          <FaTwitter className="text-white" />
        </a>
        
      </div>
    </nav>
  );
}

export default Navbar