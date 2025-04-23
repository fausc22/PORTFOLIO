import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Button from '../components/reusable/Button';
import AppBanner from '../components/shared/AppBanner';
import AboutMeBio from '../components/about/AboutMeBio';
import App from 'next/app';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Home" />
			
			{/* Banner sin ancla, parte superior */}
			<AppBanner />

			{/* SOBRE MI */}
			<section id="sobre-mi">
				<AboutMeBio />
			</section>

			{/* PROYECTOS */}
			<section id="proyectos">
				<ProjectsGrid />
			</section>

			
		</div>
	);
}
