import profile_pic from "../assets/nilesh-pic.png";
import { HERO_CONTENT } from "../../constants/data";
import { motion } from "framer-motion";
import { RiDownload2Line } from "react-icons/ri";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: 0.5 },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 h-full">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Nilesh Khairnar
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              download="Nilesh Khairnar Resume"
              href="KhairnarNilesh-FrontendDeveloper(React)-3.pdf"
              variants={container(1.1)}
              initial="hidden"
              animate="visible"
              className="cursor-pointer flex justify-between items-center bg-gray-800 px-5 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
            >
              Resume
              <RiDownload2Line />
            </motion.a>
          </div>
        </div>
        <div className="w-full h-full p-5 lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center ">
            <motion.img
              className="brightness-75"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profile_pic}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
