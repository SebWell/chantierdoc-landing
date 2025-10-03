import { useEffect } from 'react';
import { SEOHeadProps } from '@/types/components';

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "ChantierDoc - Gestion Documentaire IA pour le BTP | Recherche Instantanée",
  description = "Révolutionnez la gestion de vos documents BTP avec ChantierDoc. IA avancée pour recherche instantanée, chat intelligent et collaboration équipe. Économisez 75% de votre temps de recherche documentaire.",
  keywords = "gestion documentaire BTP, IA construction, recherche documents chantier, collaboration BTP, documents techniques, intelligence artificielle construction, gestion projet BTP, digitalisation chantier",
  canonical = "https://chantierdoc.fr",
  ogImage = "https://chantierdoc.fr/og-image.svg",
  structuredData
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: canonical },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: ogImage },
      { property: 'twitter:url', content: canonical }
    ];

    ogTags.forEach(({ property, content }) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    });

    // Update structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonical, ogImage, structuredData]);

  return null;
};

export default SEOHead; 