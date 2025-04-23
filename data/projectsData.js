import { v4 as uuidv4 } from 'uuid';
import {
	FaNodeJs,
	FaReact,
	
	


} from 'react-icons/fa';

import { SiNextdotjs, SiTailwindcss, SiDotnet, SiPhp,  } from "react-icons/si";

import { SiMysql } from "react-icons/si";

export const projectsData = [

	//ERP DISTRIBUIDORA
	{
		id: 1,
		ProjectHeader: {
		  title: 'Sistema ERP Distribuidora',
		  publishDate: 'DICIEMBRE 2024',
		  tags: 'Aplicacion ERP en plataforma WEB / MOBILE',
		},
		ProjectImages: [
		  { id: 1, img: '/images/mobile-project-1.jpg' },
		  { id: 2, img: '/images/mobile-project-1.jpg' },
		],
		codeUrl: 'https://github.com/fauscantallops/erp-distribuidora',
		previewUrl: 'https://erp-distribuidora.vercel.app',
		technologies: [
		  {
			name: 'Node.js',
			icon: FaNodeJs,
			color: '#3C873A',
		  },
		  {
			name: 'React',
			icon: FaReact,
			color: '#61DAFB',
		  },
		  {
			name: 'MySQL',
			icon: SiMysql,
			color: '#00758F',
		  },
		],
		ProjectInfo: {
		  ClientHeading: 'Información del cliente',
		  CompanyInfo: [
			{ id: 1, title: 'Nombre', details: 'Verti-Mar SRL' },
			{ id: 2, title: 'Website', details: 'https://vertimar.com' },
		  ],
		  ObjectivesHeading: 'Objetivo',
		  ObjectivesDetails: 'Crear una solución ERP para automatizar procesos comerciales.',
		  Technologies: [
			{
			  title: 'Tecnologías',
			  techs: ['Node.js', 'React', 'MySQL'],
			},
		  ],
		  ProjectDetailsHeading: 'Detalles del proyecto',
		  ProjectDetails: [
			{ id: 1, details: 'Módulo de ventas con stock en tiempo real.' },
			{ id: 2, details: 'Gestión de clientes, proveedores y empleados.' },
			{ id: 3, details: 'Modúlo de Finanzas y Estadísticas' },
		  ],
		  SocialSharingHeading: 'Compartir',
		  SocialSharing: [],
		}
	  },

	  //LANDING PAGE - VERTIMAR
	  {
		id: 2,
		ProjectHeader: {
		  title: 'LANDING PAGE - VERTIMAR',
		  publishDate: 'ENERO 2025',
		  tags: 'Pagina WEB ',
		},
		ProjectImages: [
		  { id: 1, img: '/images/mobile-project-1.jpg' },
		  { id: 2, img: '/images/mobile-project-1.jpg' },
		],
		codeUrl: 'https://github.com/fauscantallops/erp-distribuidora',
		previewUrl: 'https://erp-distribuidora.vercel.app',
		technologies: [
		  {
			name: 'Next.js',
			icon: SiNextdotjs,
			color: 'BLACK',
		  },
		  {
			name: 'Tailwind CSS',
			icon: SiTailwindcss,
			color: '#06B6D4',
		  },
		  
		],
		ProjectInfo: {
		  ClientHeading: 'Información del cliente',
		  CompanyInfo: [
			{ id: 1, title: 'Nombre', details: 'Verti-Mar SRL' },
			{ id: 2, title: 'Website', details: 'https://vertimar.com' },
		  ],
		  ObjectivesHeading: 'Objetivo',
		  ObjectivesDetails: 'Crear una solución ERP para automatizar procesos comerciales.',
		  Technologies: [
			{
			  title: 'Tecnologías',
			  techs: ['Node.js', 'React', 'MySQL'],
			},
		  ],
		  ProjectDetailsHeading: 'Detalles del proyecto',
		  ProjectDetails: [
			{ id: 1, details: 'Módulo de ventas con stock en tiempo real.' },
			{ id: 2, details: 'Gestión de clientes y empleados.' },
		  ],
		  SocialSharingHeading: 'Compartir',
		  SocialSharing: [],
		}
	  },

	  //TIENDA ONLINE CARRITO
	  {
		id: 3,
		ProjectHeader: {
		  title: 'TIENDA ONLINE CARRITO',
		  publishDate: 'OCTUBRE 2024',
		  tags: 'Aplicacion WEB para compras online + panel administrativo',
		},
		ProjectImages: [
		  { id: 1, img: '/images/mobile-project-1.jpg' },
		  { id: 2, img: '/images/mobile-project-1.jpg' },
		],
		codeUrl: 'https://github.com/fauscantallops/erp-distribuidora',
		previewUrl: 'https://erp-distribuidora.vercel.app',
		technologies: [
		  {
			name: 'Node.js',
			icon: FaNodeJs,
			color: '#3C873A',
		  },
		  {
			name: 'React',
			icon: FaReact,
			color: '#61DAFB',
		  },
		  {
			name: 'MySQL',
			icon: SiMysql,
			color: '#00758F',
		  },
		],
		ProjectInfo: {
		  ClientHeading: 'Información del cliente',
		  CompanyInfo: [
			{ id: 1, title: 'Nombre', details: 'Verti-Mar SRL' },
			{ id: 2, title: 'Website', details: 'https://vertimar.com' },
		  ],
		  ObjectivesHeading: 'Objetivo',
		  ObjectivesDetails: 'Crear una solución ERP para automatizar procesos comerciales.',
		  Technologies: [
			{
			  title: 'Tecnologías',
			  techs: ['Node.js', 'React', 'MySQL'],
			},
		  ],
		  ProjectDetailsHeading: 'Detalles del proyecto',
		  ProjectDetails: [
			{ id: 1, details: 'Módulo de ventas con stock en tiempo real.' },
			{ id: 2, details: 'Gestión de clientes, proveedores y empleados.' },
			{ id: 3, details: 'Modúlo de Finanzas y Estadísticas' },
		  ],
		  SocialSharingHeading: 'Compartir',
		  SocialSharing: [],
		}
	  },

	  //PLANIFICADOR DE TRABAJO
	  {
		id: 4,
		ProjectHeader: {
		  title: 'PLANIFICADOR DE TRABAJO ',
		  publishDate: 'DICIEMBRE 2023',
		  tags: 'Aplicacion de escritorio para la gestion de personal de un negocio',
		},
		ProjectImages: [
		  { id: 1, img: '/images/mobile-project-1.jpg' },
		  { id: 2, img: '/images/mobile-project-1.jpg' },
		],
		codeUrl: 'https://github.com/fauscantallops/erp-distribuidora',
		previewUrl: 'https://erp-distribuidora.vercel.app',
		technologies: [
			{
				name: 'C#',
				icon: SiDotnet,
				color: '#512BD4',
			},
	
		  {
			name: 'MySQL',
			icon: SiMysql,
			color: '#00758F',
		  },
		],
		ProjectInfo: {
		  ClientHeading: 'Información del cliente',
		  CompanyInfo: [
			{ id: 1, title: 'Nombre', details: 'Verti-Mar SRL' },
			{ id: 2, title: 'Website', details: 'https://vertimar.com' },
		  ],
		  ObjectivesHeading: 'Objetivo',
		  ObjectivesDetails: 'Crear una solución ERP para automatizar procesos comerciales.',
		  Technologies: [
			{
			  title: 'Tecnologías',
			  techs: ['Node.js', 'React', 'MySQL'],
			},
		  ],
		  ProjectDetailsHeading: 'Detalles del proyecto',
		  ProjectDetails: [
			{ id: 1, details: 'Módulo de ventas con stock en tiempo real.' },
			{ id: 2, details: 'Gestión de clientes, proveedores y empleados.' },
			{ id: 3, details: 'Modúlo de Finanzas y Estadísticas' },
		  ],
		  SocialSharingHeading: 'Compartir',
		  SocialSharing: [],
		}
	  },

	  //AUTOMITAZDOR MP
	  {
		id: 5,
		ProjectHeader: {
		  title: 'PLATAFORMA DE COBROS MERCADO PAGO',
		  publishDate: 'DICIEMBRE 2023',
		  tags: 'Aplicacion de escritorio para cobrar en MERCADO PAGO',
		},
		ProjectImages: [
		  { id: 1, img: '/images/mobile-project-1.jpg' },
		  { id: 2, img: '/images/mobile-project-1.jpg' },
		],
		codeUrl: 'https://github.com/fauscantallops/erp-distribuidora',
		previewUrl: 'https://erp-distribuidora.vercel.app',
		technologies: [
			{
				name: 'C#',
				icon: SiDotnet,
				color: '#512BD4',
			},
	
			{
				name: 'VB.NET',
				icon: SiDotnet,
				color: '#512BD4',
			},
		],
		ProjectInfo: {
		  ClientHeading: 'Información del cliente',
		  CompanyInfo: [
			{ id: 1, title: 'Nombre', details: 'Verti-Mar SRL' },
			{ id: 2, title: 'Website', details: 'https://vertimar.com' },
		  ],
		  ObjectivesHeading: 'Objetivo',
		  ObjectivesDetails: 'Crear una solución ERP para automatizar procesos comerciales.',
		  Technologies: [
			{
			  title: 'Tecnologías',
			  techs: ['Node.js', 'React', 'MySQL'],
			},
		  ],
		  ProjectDetailsHeading: 'Detalles del proyecto',
		  ProjectDetails: [
			{ id: 1, details: 'Módulo de ventas con stock en tiempo real.' },
			{ id: 2, details: 'Gestión de clientes, proveedores y empleados.' },
			{ id: 3, details: 'Modúlo de Finanzas y Estadísticas' },
		  ],
		  SocialSharingHeading: 'Compartir',
		  SocialSharing: [],
		}
	  },


	  {
		id: 6,
		ProjectHeader: {
		  title: 'API EMAILS',
		  publishDate: 'JULIO 2023',
		  tags: 'SERVIDOR DE NOTIFICACIONES VIA EMAILS',
		},
		ProjectImages: [
		  { id: 1, img: '/images/mobile-project-1.jpg' },
		  { id: 2, img: '/images/mobile-project-1.jpg' },
		],
		codeUrl: 'https://github.com/fauscantallops/erp-distribuidora',
		previewUrl: 'https://erp-distribuidora.vercel.app',
		technologies: [
			{
				name: 'PHP',
				icon: SiPhp,
				color: '#8892BF',
			},
		],
		ProjectInfo: {
		  ClientHeading: 'Información del cliente',
		  CompanyInfo: [
			{ id: 1, title: 'Nombre', details: 'Verti-Mar SRL' },
			{ id: 2, title: 'Website', details: 'https://vertimar.com' },
		  ],
		  ObjectivesHeading: 'Objetivo',
		  ObjectivesDetails: 'Crear una solución ERP para automatizar procesos comerciales.',
		  Technologies: [
			{
			  title: 'Tecnologías',
			  techs: ['Node.js', 'React', 'MySQL'],
			},
		  ],
		  ProjectDetailsHeading: 'Detalles del proyecto',
		  ProjectDetails: [
			{ id: 1, details: 'Módulo de ventas con stock en tiempo real.' },
			{ id: 2, details: 'Gestión de clientes, proveedores y empleados.' },
			{ id: 3, details: 'Modúlo de Finanzas y Estadísticas' },
		  ],
		  SocialSharingHeading: 'Compartir',
		  SocialSharing: [],
		}
	  },

	  

	  
	  
	
	  
];
