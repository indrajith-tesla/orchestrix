/**
 * Structured Data Component for SEO
 * Implements JSON-LD schema markup for Organization
 */
export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OrchestriX",
    "description": "Engineering-driven solutions for startups & growing businesses. Expert product development, cloud infrastructure, data & AI solutions.",
    "url": "https://orchestrix.com",
    "logo": "https://orchestrix.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9778254068",
      "contactType": "Customer Service",
      "email": "contact.orchestrix@gmail.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/orchestrix",
      "https://twitter.com/orchestrix",
      "https://github.com/orchestrix"
    ],
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OrchestriX",
    "url": "https://orchestrix.com",
    "description": "Building Smart, Scalable & Affordable Digital Solutions",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://orchestrix.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development & Engineering",
    "provider": {
      "@type": "Organization",
      "name": "OrchestriX"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product Development",
            "description": "End-to-end product development from concept to launch"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Infrastructure",
            "description": "Scalable cloud infrastructure solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data & AI Solutions",
            "description": "Data engineering and AI/ML solutions"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

