import Image from 'next/image';
import { useState } from 'react';
import { sobreMiData } from '../../data/sobreMi';
import { motion } from 'framer-motion';

function AboutMeBio() {
  const [aboutMe] = useState(sobreMiData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-16 px-4"
    >
      {/* Línea divisoria */}
      <div className="border-t border-gray-300 dark:border-gray-700 mb-8"></div>

      {/* Título */}
      <motion.h2
        variants={textVariants}
        className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-ternary-dark dark:text-primary-light uppercase text-center mb-8"
      >
        SOBRE MI
      </motion.h2>

      <div className="block lg:flex lg:flex-row-reverse lg:gap-10">
        {/* Imagen a la derecha */}
        <motion.div
          variants={imageVariants}
          className="w-full lg:w-1/3 mb-7 lg:mb-0 flex justify-center lg:justify-end"
        >
          <div
            style={{
              width: '300px', // Tamaño más grande
              height: '300px', // Debe ser igual al ancho para mantener la proporción
              borderRadius: '10px', // Puedes ajustar el radio del borde si no quieres un círculo
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/PROFILE-FC.jpg"
              width={300}
              height={300}
              className="object-cover w-full h-full"
              alt="Profile Image"
            />
          </div>
        </motion.div>

        {/* Biografía en párrafos */}
        <motion.div
          className="font-general-regular w-full lg:w-2/3 text-left"
        >
          {aboutMe.map((bio) => (
            <motion.p
              variants={textVariants}
              className="mb-4 text-ternary-dark dark:text-ternary-light text-lg leading-relaxed"
              key={bio.id}
            >
              {bio.bio}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutMeBio;