import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs,  SiMysql, SiNextdotjs, SiTailwindcss, SiGithub, SiRacket, SiDotNet, SiOpensourcehardware  } from 'react-icons/si'; // Asegurate de importar los íconos necesarios
import Image from 'next/image';

const ProjectSingle = ({ project, onSelect }) => (
  <motion.div
  onClick={onSelect}
  className="cursor-pointer h-full flex flex-col"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.7, delay: 0.15 }}
>
  <div className="h-full flex flex-col rounded-xl shadow-lg hover:shadow-xl bg-secondary-light dark:bg-ternary-dark">
    {/* Imagen en proporción fija */}
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
      <Image
        src={project.ProjectImages[0].img}
        alt={project.ProjectHeader.title}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>

    <div className="flex-1 text-center px-4 py-6 flex flex-col justify-between">
      <div>
        <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
          {project.ProjectHeader.title}
        </p>
        <span className="text-lg text-ternary-dark dark:text-ternary-light">
          {project.ProjectHeader.tags}
        </span>
      </div>

      {/* Tecnologías */}
      {project.technologies?.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {project.technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex items-center px-2 py-1 rounded-full text-xs font-medium text-white shadow-sm"
                style={{ backgroundColor: tech.color }}
              >
                <Icon className="mr-1 text-sm" />
                {tech.name}
              </div>
            );
          })}
        </div>
      )}

      {/* Botones */}
      <div className="flex justify-center gap-4 mt-4">
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700"
          >
            <SiGithub className="inline-block mr-1" />
            CÓDIGO
          </a>
        )}
        {project.previewUrl && (
          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-500"
          >
            <SiRacket className="inline-block mr-1" />
            VISTA PREVIA
          </a>
        )}
      </div>
    </div>
  </div>
</motion.div>

);

export default ProjectSingle;
