import { RiGithubFill, RiGithubLine, RiLiveLine, RiRocket2Fill, RiRocketFill } from "react-icons/ri";
import { PROJECTS } from "../../constants/data";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="">
        {PROJECTS.map((project, i) => (
          <div className=" mb-8 flex flex-wrap lg:justify-center" key={i}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={"200px"}
                className="mb-6 rounded"
                alt="project-1"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="mb-2 flex flex-wrap items-center gap-5">
                <h6 className=" font-semibold">{project.title}</h6>
                <a
                  href={project.git_repo}
                  target="_blank"
                >
                  <RiGithubFill className="text-2xl" />
                </a>
                <a href={project.live} className=" px-2 text-center bg-white text-neutral-700 font-bold" target='_blank'>
                  Go Live
                </a>
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, i) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  key={i}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
