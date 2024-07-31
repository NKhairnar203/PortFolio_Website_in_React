
import { motion } from "framer-motion";

import HTML from "../assets/TechStack/icons-html-48.png"
import CSS from "../assets/TechStack/icons-css-48.png";
import JavaScript from "../assets/TechStack/icons8-javascript-gif.gif";
import React from "../assets/TechStack/icons8-react-48.png";
import Redux from "../assets/TechStack/icons8-redux-48.png";
import NodeJs from "../assets/TechStack/icons8-nodejs-48 (1).png";
import Express from "../assets/TechStack/icons8-express-48.png";
import Mongodb from "../assets/TechStack/icons8-mongodb-48.png";
import ChakraUI from "../assets/TechStack/icons8-chakra-ui-48.png";
import Tailwind from "../assets/TechStack/icons8-tailwind-css-48.png";
import Python from '../assets/TechStack/icons8-python-gif.gif'
import Bootstrap from "../assets/TechStack/icons8-bootstrap-48.png"




const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 max-sm:gap-14"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={HTML} alt="" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={CSS} alt="CSS" />
        </motion.div>{" "}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={JavaScript} alt="js" />
        </motion.div>{" "}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={React} alt="React" />
        </motion.div>{" "}
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 my-12 max-sm:gap-14"
      >
        {" "}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Redux} alt="redux" />
        </motion.div>{" "}
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={NodeJs} alt="Nodejs" />
        </motion.div>{" "}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Mongodb} alt="mongodb" />
        </motion.div>{" "}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img className="bg-white" src={Express} alt="Express" />
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 my-12 max-sm:gap-14"
      >
        {" "}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={ChakraUI} alt="js" />
        </motion.div>{" "}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Tailwind} alt="js" />
        </motion.div>{" "}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Bootstrap} alt="Bootstrap" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={Python} alt="js" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
