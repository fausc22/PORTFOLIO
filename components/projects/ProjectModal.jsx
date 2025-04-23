import { motion } from 'framer-motion';
import { FiX, FiClock, FiTag } from 'react-icons/fi';
import Image from 'next/image';

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative z-50 bg-white dark:bg-primary-dark max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
              {project.ProjectHeader.title}
            </h1>
            <div className="flex gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <FiClock />
                {project.ProjectHeader.publishDate}
              </div>
              <div className="flex items-center gap-1">
                <FiTag />
                {project.ProjectHeader.tags}
              </div>
            </div>
          </div>
          <button onClick={onClose}>
            <FiX className="text-3xl dark:text-white" />
          </button>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.ProjectImages.map((img) => (
            <Image
              key={img.id}
              src={img.img}
              alt={project.title}
              layout="responsive"
              width={100}
              height={80}
              className="rounded-md"
            />
          ))}
        </div>

        {/* Info */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-secondary-dark dark:text-secondary-light">
            {project.ProjectInfo.ClientHeading}
          </h2>
          <ul className="mb-4">
            {project.ProjectInfo.CompanyInfo.map((info) => (
              <li key={info.id}>
                <span className="font-medium">{info.title}: </span>
                {info.details}
              </li>
            ))}
          </ul>

          <h3 className="font-semibold text-lg mt-4 mb-1">
            {project.ProjectInfo.ObjectivesHeading}
          </h3>
          <p>{project.ProjectInfo.ObjectivesDetails}</p>

          <h3 className="font-semibold text-lg mt-4 mb-1">
            {project.ProjectInfo.Technologies[0].title}
          </h3>
          <p>{project.ProjectInfo.Technologies[0].techs.join(', ')}</p>

          <h3 className="font-semibold text-lg mt-4 mb-1">
            {project.ProjectInfo.ProjectDetailsHeading}
          </h3>
          <div className="space-y-3">
            {project.ProjectInfo.ProjectDetails.map((d) => (
              <p key={d.id}>{d.details}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectModal;
