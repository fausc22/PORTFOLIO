import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../../data/projectsData';
import ProjectsFilter from './ProjectsFilter';
import ProjectModal from './ProjectModal';

function ProjectsGrid() {
	
	const [selectedProject, setSelectedProject] = useState();

	

	

	// Cerrar modal al presionar ESC
	useEffect(() => {
		const handleEsc = (e) => {
		  if (e.key === 'Escape') setSelectedProject(null);
		};
		window.addEventListener('keydown', handleEsc);
		return () => window.removeEventListener('keydown', handleEsc);
	  }, []);

	  return (
		<section id="proyectos" className="py-10 mt-5">
		  <div className="text-center mb-8">
			<p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light">
			  MIS PROYECTOS
			</p>
		  </div>
	
		  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
			{projectsData.map((project, index) => (
			  <ProjectSingle
				key={index}
				project={project}
				onSelect={() => setSelectedProject(project)}
			  />
			))}
		  </div>
	
		  {selectedProject && (
			<ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
		  )}
		</section>
	  );
}

export default ProjectsGrid;
