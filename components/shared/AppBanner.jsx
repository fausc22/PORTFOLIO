import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


function AppBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className="flex flex-col items-center justify-center py-16 text-center px-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.1 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-ternary-dark dark:text-primary-light uppercase"
        >
          HOLA, SOY FAUSTO CANTALLOPS !
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal text-gray-500 dark:text-gray-200"
        >
          DESARROLLADOR DE SOFTWARE Y ANALISTA DE SISTEMAS
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.3,
          }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {/* DESCARGAR CV */}
          <a
            download="CV-CANTALLOPS_FAUSTO.pdf"
            href="/files/CV-CANTALLOPS_FAUSTO.pdf"
            className="font-general-medium flex items-center w-36 sm:w-48 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-3 h-6 w-6" />
            <span className="text-sm sm:text-lg">DESCARGAR CV</span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/fausc22"
            target="_blank"
            rel="noopener noreferrer"
            className="font-general-medium flex items-center w-36 sm:w-48 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          >
            <FaGithubSquare className="mr-3 h-6 w-6" />
            <span className="text-sm sm:text-lg">GITHUB</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/fausto-cantallops-6a4594217/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-general-medium flex items-center w-36 sm:w-48 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          >
            <FaLinkedin className="mr-3 h-6 w-6" />
            <span className="text-sm sm:text-lg">LINKEDIN</span>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
