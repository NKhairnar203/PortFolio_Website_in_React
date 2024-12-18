import React from 'react'
import about_pic from "../assets/about.jpg"
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../../constants/data";
const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4 pt-1">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={about_pic} alt="About Img" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <div>
              <p className="my-1 max-w-xl py-3">{ABOUT_TEXT[0]}</p>
              <p className="my-1 max-w-xl py-3">{ABOUT_TEXT[1]}</p>
              <p className="my-1 max-w-xl py-3">{ABOUT_TEXT[2]}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About