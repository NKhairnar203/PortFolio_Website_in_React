import profile_pic from "../assets/nilesh-pic.png";
import { HERO_CONTENT } from "../../constants/data";
import { motion } from "framer-motion";
import { RiDownload2Line } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "../App.css";
// import pdf from "../Resumes/NileshKhairnar-FullStackWebDeveloper-01mP.pdf";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: 0.5 },
  },
});

const Hero = () => {
  // Resume Downloading function
  const handleResumeClick = () => {
    const url = `${window.location.origin}/NileshKhairnar_cap04_029.pdf`;
    window.open(url, "_blank");
  };
  return (
    <div
      id="home"
      className="border-b border-neutral-900 pb-4 lg:mb-35 h-full pt-20"
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start pt-10">
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
              Full-Stack MERN Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter "
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="/NileshKhairnar_cap04_029.pdf"
              download
              onClick={handleResumeClick}
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="cursor-pointer flex justify-between items-center bg-gray-800 px-5 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
            >
              Resume
              <RiDownload2Line />
            </motion.a>
            <motion.div
              variants={container(1.7)}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center  mt-2 p-6 pl-0 gap-5 shadow-lg rounded-lg"
            >
              {/* <!-- Twitter --> */}
              <a
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden transition duration-300 hover:bg-blue-400 active:scale-90"
                href="https://x.com/Nilesh__2003"
                target="_blank"
              >
                <FaTwitter className="w-4 text-white" />
              </a>

              {/* <!-- LinkedIn --> */}
              <a
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden transition duration-300 hover:bg-blue-700 active:scale-90"
                href="https://www.linkedin.com/in/nilesh-khairnar-07b14b254/"
                target="_blank"
              >
                <FaLinkedin className="w-4 text-white" />
              </a>

              {/* <!-- Git --> */}
              <a
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden transition duration-300 hover:bg-gray-600 active:scale-90"
                href="https://github.com/NKhairnar203/"
                target="_blank"
              >
                <FaGithub className="w-4 text-white" />
              </a>
            </motion.div>
            
            
          </div>
        </div>
        <div className="w-full h-full p-10 lg:w-1/2 lg:p-8">
          <div className="flex p-10 justify-center items-center ">
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
