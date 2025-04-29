import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { aboutMeData } from '../../data/aboutMeData';
import Image from 'next/image';

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

        <motion.div className="mt-10"> {/* Agregamos un margen superior para separarlo del texto principal */}
          <div className="block sm:flex sm:gap-10">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center">
              <div style={{
                width: '250px',
                height: '250px',
                borderRadius: '40%',
                overflow: 'hidden'
              }}>
                <Image
                  src="/images/PROFILE-FC.jpg"
                  width={250}
                  height={250}
                  className="object-cover w-full h-full"
                  alt="Profile Image"
                />
              </div>
            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left flex flex-col justify-between"> {/* Usamos flex-col para ordenar verticalmente */}
              <div className="flex flex-wrap justify-start gap-4 mb-6 sm:mb-10"> {/* Movemos los botones aquí y agregamos margen inferior */}
                {/* DESCARGAR CV */}
                <a
                  download="CV-CANTALLOPS_FAUSTO.pdf"
                  href="/files/CV-CANTALLOPS_FAUSTO.pdf"
                  className="font-general-medium flex items-center justify-center gap-x-2 w-36 sm:w-48 text-base sm:text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                  aria-label="Download Resume"
                >
                  <FiArrowDownCircle className="h-5 w-5" />
                  <span>CV (ESPAÑOL)</span>
                </a>

                <a
                  download="CV-CANTALLOPS_FAUSTO-ENGLISH.pdf"
                  href="/files/CV-CANTALLOPS_FAUSTO-ENGLISH.pdf"
                  className="font-general-medium flex items-center justify-center gap-x-2 w-36 sm:w-48 text-base sm:text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                  aria-label="Download Resume"
                >
                  <FiArrowDownCircle className="h-5 w-5" />
                  <span>CV (ENGLISH)</span>
                </a>

                <a
                  href="https://github.com/fausc22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-general-medium flex items-center justify-center gap-x-2 w-36 sm:w-48 text-base sm:text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                >
                  <FaGithubSquare className="h-5 w-5" />
                  <span>GITHUB</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/fausto-cantallops-6a4594217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-general-medium flex items-center justify-center gap-x-2 w-36 sm:w-48 text-base sm:text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                >
                  <FaLinkedin className="h-5 w-5" />
                  <span>LINKEDIN</span>
                </a>
              </div>
              <div>
                {aboutMeData.map((bio) => (
                  <p
                    className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                    key={bio.id}
                  >
                    {bio.bio}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;