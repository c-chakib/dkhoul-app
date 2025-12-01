import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title = "DKHOUL - Plateforme de Micro-Services Marocains",
  description = "La première marketplace décentralisée connectant les touristes internationaux aux citoyens marocains pour des micro-services authentiques.",
  keywords = "Maroc, micro-services, tourisme, plateforme, décentralisé, authentique",
  image = "/og-image.jpg",
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = "website"
}) => {
  const siteTitle = "DKHOUL";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="DKHOUL Team" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="fr_MA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional meta tags */}
      <meta name="theme-color" content="#C2410C" />
      <meta name="msapplication-TileColor" content="#C2410C" />
    </Helmet>
  );
};

export default SEO;