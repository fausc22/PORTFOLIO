import Head from 'next/head';

function PagesMetaHead() {
  return (
    <Head>
      {/* General SEO */}
      <title>PORTFOLIO | Fausto Cantallops</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="DESARROLADOR DE SOFTWARE | Fausto Cantallops. Portfolio de proyectos y habilidades en desarrollo web, aplicaciones móviles y más."
      />
      <meta
        name="keywords"
        content="software a medida, desarrollo web, aplicaciones móviles, sistemas empresariales, bases de datos, consultoría técnica, soluciones digitales, Node.js, React, Next.js, MySQL, AWS"
      />
      <meta name="author" content="FC Software" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph (Facebook / LinkedIn) */}
      <meta property="og:title" content="PORTFOLIO - FAUSTO CANTALLOPS" />
      <meta
        property="og:description"
        content="DESARROLADOR DE SOFTWARE | Fausto Cantallops. Portfolio de proyectos y habilidades en desarrollo web, aplicaciones móviles y más."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://portfolio-cantallops.vercel.app" />
      <meta property="og:image" content="/images/PROFILE-FC.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="PORTFOLIO - FAUSTO CANTALLOPS" />
      <meta
        name="twitter:description"
        content="DESARROLADOR DE SOFTWARE | Fausto Cantallops. Portfolio de proyectos y habilidades en desarrollo web, aplicaciones móviles y más."
      />
      <meta name="twitter:image" content="/images/PROFILE-FC.jpg" />
    </Head>
  );
}

export default PagesMetaHead;