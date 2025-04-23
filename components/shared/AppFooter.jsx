import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

import { motion } from 'framer-motion';
import ContactDetails from '../contact/ContactDetails';
import ContactForm from '../contact/ContactForm';
import PagesMetaHead from '../PagesMetaHead';



function AppFooter() {
	return (
		<div id="contacto" className="mt-10">
			<PagesMetaHead title="Contact" />

			{/* Línea separadora visual */}
			<hr className="border-t border-gray-300 dark:border-gray-700 mb-10" />



			<div className="text-center mb-8">
				<p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light">
			  	CONTACTO
				</p>
		  	</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
			>
				<ContactForm />
				<ContactDetails />
			</motion.div>

			
				<footer className="text-center text-gray-500 py-10">
					<p>© {new Date().getFullYear()} Fausto Cantallops. Todos los derechos reservados.</p>
					<p>fausc@gmail.com | +54 2302 651250</p>
				</footer>
			
		</div>
	);
}

export default AppFooter;
