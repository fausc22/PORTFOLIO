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
		  title: 'Sistema ERP Distribuidora VERTIMAR',
		  publishDate: 'DICIEMBRE 2024',
		  tags: 'Aplicacion ERP en plataforma WEB / MOBILE',
		},
		ProjectImages: [
		  { id: 1, img: '/images/erpdistri-web.png' },
		  { id: 2, img: '/images/erpdistri-mobile.png' },
		],
		codeUrl: 'https://github.com/fausc22/erp_distri-front',
		previewUrl: 'https://panel-vertimar.vercel.app/',
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
		  ObjectivesDetails: 'Proyecto de TESIS - Sistema ERP para automatizar procesos comerciales.',
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

	  //LANDING PAGE - FC SOFTWARE
	  {
		id: 2,
		ProjectHeader: {
		  title: 'LANDING PAGE - FC SOFTWARE',
		  publishDate: 'ENERO 2025',
		  tags: 'Pagina WEB',
		},
		ProjectImages: [
		  { id: 1, img: '/images/landingfc-1.png' },
		  { id: 2, img: '/images/landingfc-2.png' },
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
			{ id: 1, title: 'Nombre', details: 'FC SOFTWARE COMPANY' },
			{ id: 2, title: 'Website', details: 'fc-software.vercel.app' },
		  ],
		  ObjectivesHeading: 'Objetivo',
		  ObjectivesDetails: 'Crear una landing page para la empresa de software FC SOFTWARE COMPANY para atraer clientes potenciales.',
		  Technologies: [
			{
			  title: 'Tecnologías',
			  techs: ['NextJs', 'Tailwind CSS'],
			},
		  ],
		  ProjectDetailsHeading: 'Detalles del proyecto',
		  ProjectDetails: [
			{ id: 1, details: 'Secciones de servicios y descripción de empresa' },
			{ id: 2, details: 'Formularios de Contacto para lograr relaciones comerciales.' },
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
		  tags: 'Tienda online + panel administrativo',
		},
		ProjectImages: [
		  { id: 1, img: '/images/tienda-1.png' },
		  { id: 2, img: '/images/tienda-2.png' },
		],
		codeUrl: 'https://github.com/fausc22/TiendaFront',
		previewUrl: 'https://vertimar-tienda.vercel.app/',
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
			{ id: 2, title: 'Website', details: 'https://vertimar-tienda.vercel.app/' },
		  ],
		  ObjectivesHeading: 'Objetivo',
		  ObjectivesDetails: 'Crear una tienda online para la venta de productos de la empresa y la administracion de los mismos.',
		  Technologies: [
			{
			  title: 'Tecnologías',
			  techs: ['Node.js', 'React', 'MySQL'],
			},
		  ],
		  ProjectDetailsHeading: 'Detalles del proyecto',
		  ProjectDetails: [
			{ id: 1, details: 'Carrito de compras seccionado en INICIO con ofertas y destacados.' },
			{ id: 2, details: 'Pestaña PRODUCTOS para filtrado.' },
			{ id: 3, details: 'Integración de pagos con Mercado Pago y calculo automatico de Envíos.' },
			{ id: 3, details: 'Panel administrativo para manipular los pedidos y modificar los precios.' },
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
		  { id: 1, img: '/images/plani-1.png' },
		  { id: 2, img: '/images/plani-2.png' },
		  { id: 3, img: '/images/plani-3.png' },
		],
		codeUrl: 'https://github.com/fausc22/PryPlanificador',
		previewUrl: 'https://github.com/fausc22/PryPlanificador',
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
			{ id: 1, title: 'Nombre', details: 'PUNTO SUR MULTIMIERCADO' },
			{ id: 2, title: 'Website', details: '-' },
		  ],
		  ObjectivesHeading: 'Objetivo',
		  ObjectivesDetails: 'Crear un planificador de trabajo para la gestion de personal de un negocio.',
		  Technologies: [
			{
			  title: 'Tecnologías',
			  techs: ['C#', 'MySQL'],
			},
		  ],
		  ProjectDetailsHeading: 'Detalles del proyecto',
		  ProjectDetails: [
			{ id: 1, details: 'Modulo para la designacion de empleados por turnos.' },
			{ id: 2, details: 'Monitorizacion de las entradas y salidas de los turnos, implementando una huella dactilar.' },
			{ id: 3, details: 'Módulo de RECIBO de sueldo para realizar pagos mensuales.' },
			{ id: 4, details: 'Módulo ESTADÍSTICAS con métricas para tener informacion certeras de ventas y productos.' },
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
		  tags: 'Aplicacion de escritorio - WEB',
		},
		ProjectImages: [
		  { id: 1, img: '/images/mp-1.png' },
		  { id: 2, img: '/images/mp-2.png' },
		],
		codeUrl: 'https://github.com/fausc22/PryMPQR',
		previewUrl: 'https://github.com/fausc22/PryMPQR',
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
			{ id: 1, title: 'Nombre', details: 'CLARA GESTION' },
			{ id: 2, title: 'Website', details: '-' },
		  ],
		  ObjectivesHeading: 'Objetivo',
		  ObjectivesDetails: 'Crear una plataforma de cobros para la gestion de pagos y cobros de la empresa CLARA GESTION.',
		  Technologies: [
			{
			  title: 'Tecnologías',
			  techs: ['C#', 'VB.NET'],
			},
		  ],
		  ProjectDetailsHeading: 'Detalles del proyecto',
		  ProjectDetails: [
			{ id: 1, details: 'Módulo de ventas con QR.' },
			{ id: 2, details: 'Gestión de locales y credenciales de Mercado Pago.' },
			
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
		  { id: 1, img: '/images/apiemails-1.png' },
		  
		],
		codeUrl: 'https://github.com/fausc22/ApiEmails',
		previewUrl: 'https://github.com/fausc22/ApiEmails',
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
			{ id: 1, title: 'Nombre', details: 'CLARA GESTIÓN' },
			{ id: 2, title: 'Website', details: '-' },
		  ],
		  ObjectivesHeading: 'Objetivo',
		  ObjectivesDetails: 'Crear un servidor de notificaciones via emails para la empresa CLARA GESTION.',
		  Technologies: [
			{
			  title: 'Tecnologías',
			  techs: ['Node.js', 'React', 'MySQL'],
			},
		  ],
		  ProjectDetailsHeading: 'Detalles del proyecto',
		  ProjectDetails: [
			{ id: 1, details: 'Servidor de Notificaciones que utiliza PHP MAILER' },
			{ id: 2, details: 'Permite recibir leer y desglosar archivos PDF, EXCEL, SQL, ETC.' },
		  ],
		  SocialSharingHeading: 'Compartir',
		  SocialSharing: [],
		}
	  },

	  

	  
	  
	
	  
];
