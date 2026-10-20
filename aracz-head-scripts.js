/* ========== GEO-AUDIT OPTIMIZED SITE-WIDE HEAD SCRIPTS ========== */

(function () {
  'use strict';

  /* --- 1. Set HTML lang if the template misses it --- */
  document.documentElement.setAttribute('lang', 'en');

  /* --- 2. Conditional homepage title & meta description override --- */
  var loc = window.location.href.split('#')[0].split('?')[0].replace(/\/+$/, '');
  var isHome = /^https?:\/\/(www\.)?aracz\.com$/.test(loc) ||
               /^https?:\/\/(www\.)?aracz\.com\/index(\.html)?$/.test(loc);
  if (isHome) {
    var title = document.querySelector('title');
    if (title) title.textContent = 'Arpad Racz, REALTOR® | San Jose Real Estate Agent';
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content',
      'Arpad Racz, REALTOR® & California broker, helps buyers & sellers in San Jose & Silicon Valley. 28+ years experience. Call 408-252-0976.');
  }

  /* --- 3. Canonical fallback: enforce www/HTTPS and strip tracking params --- */
  var existing = document.querySelectorAll('link[rel="canonical"]');
  existing.forEach(function (l) { l.remove(); });
  var url = window.location.href.split('#')[0];
  url = url.replace(/^http:\/\//i, 'https://');
  url = url.replace(/^https:\/\/aracz\.com\//i, 'https://www.aracz.com/');
  url = url.replace(/[?&](utm_[^=]+|fbclid|gclid|msclkid)=[^&]+/g, '');
  if (url.indexOf('?') === url.length - 1) url = url.slice(0, -1);
  var link = document.createElement('link');
  link.rel = 'canonical';
  link.href = url;
  document.head.insertBefore(link, document.head.firstChild);
})();

/* --- 4. Inject consolidated JSON-LD structured data immediately,
           so it becomes the FIRST org/person block in the DOM --- */
(function () {
  var jsonLd = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "RealEstateAgent"],
      "@id": "https://www.aracz.com/#org",
      "name": "Arpad Racz Real Estate",
      "alternateName": "Arpad Racz, REALTOR®",
      "url": "https://www.aracz.com/",
      "telephone": "+1-408-252-0976",
      "email": "aracz@aracz.com",
      "image": "https://www.aracz.com/mydata/images/Cover%20w%20TXT3.jpg",
      "logo": "https://www.aracz.com/mydata/images/Cover%20w%20TXT3.jpg",
      "description": "Arpad Racz, REALTOR® & California broker, helps buyers & sellers in San Jose & Silicon Valley. 28+ years experience. Call 408-252-0976.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1190 S Bascom Ave Ste 118",
        "addressLocality": "San Jose",
        "addressRegion": "CA",
        "postalCode": "95128",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.3045321,
        "longitude": -121.9312216
      },
      "founder": {"@id": "https://www.aracz.com/#person"},
      "employee": {"@id": "https://www.aracz.com/#person"},
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": 22,
        "url": "https://www.aracz.com/fine/real/estate/customer_reviews/custom/5Star-Reviews--Customer-Satisfaction--Arpad-Racz-San-Jose-REALTOR"
      },
      "areaServed": [
        {"@type": "City", "name": "San Jose", "containedInPlace": {"@type": "State", "name": "California"}},
        {"@type": "City", "name": "Cupertino"},
        {"@type": "City", "name": "Saratoga"},
        {"@type": "City", "name": "Mountain View"},
        {"@type": "City", "name": "Sunnyvale"},
        {"@type": "City", "name": "Los Gatos"},
        {"@type": "AdministrativeArea", "name": "Santa Clara County"},
        {"@type": "Place", "name": "Silicon Valley"}
      ],
      "knowsAbout": [
        "San Jose real estate",
        "Silicon Valley real estate",
        "Santa Clara County homes for sale",
        "Cupertino real estate",
        "Saratoga luxury homes",
        "Mountain View real estate",
        "Sunnyvale real estate",
        "Los Gatos real estate",
        "First-time home buyers",
        "Real estate investments"
      ],
      "sameAs": [
        "https://www.linkedin.com/in/arpadracz/",
        "https://www.wikidata.org/wiki/Q141269046",
        "https://www.youtube.com/@aracz",
        "https://www.facebook.com/arpadracz.realestate/",
        "https://www.reddit.com/user/RE-Optimist/",
        "https://www.zillow.com/profile/aracz",
        "https://www.realtor.com/realestateagents/56b054adbb954c01006a5320",
        "https://www.yelp.com/biz/arpad-racz-altas-realty-san-jose-9",
        "https://realestate.usnews.com/agents/profile/arpad-racz-4114079",
        "https://www.ratemyagent.com/real-estate-agent/arpad-racz-at487/sales/overview",
        "https://www.alignable.com/san-jose-ca/cupertino-and-santa-clara-county-real-estate-by-arpad-of-altas-realty",
        "https://nextdoor.com/pages/arpad-racz-san-jose-real-estate-agent-realtor-san-jose-ca-1/",
        "https://www.fastexpert.com/agents/listings/arpad-racz-31421/",
        "https://agentpronto.com/agents/arpad-racz-05467",
        "https://threebestrated.com/real-estate-agents-in-san-jose-ca",
        "https://sanjoseinsider.org/best-realtor-in-san-jose-ca",
        "https://www.aracz.com/fine/real/estate/customer_reviews/custom/5Star-Reviews--Customer-Satisfaction--Arpad-Racz-San-Jose-REALTOR"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.aracz.com/#person",
      "name": "Arpad Racz",
      "givenName": "Arpad",
      "familyName": "Racz",
      "jobTitle": "REALTOR® and Real Estate Broker",
      "description": "Arpad Racz, REALTOR® & California broker, helps buyers & sellers in San Jose & Silicon Valley. 28+ years experience. Call 408-252-0976.",
      "url": "https://www.aracz.com/",
      "image": "https://www.aracz.com/mydata/images/Cover%20w%20TXT3.jpg",
      "worksFor": {"@id": "https://www.aracz.com/#org"},
      "sameAs": [
        "https://www.linkedin.com/in/arpadracz/",
        "https://www.wikidata.org/wiki/Q141269046",
        "https://www.youtube.com/@aracz",
        "https://www.facebook.com/arpadracz.realestate/",
        "https://www.reddit.com/user/RE-Optimist/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aracz.com/#website",
      "url": "https://www.aracz.com/",
      "name": "Arpad Racz Real Estate",
      "publisher": {"@id": "https://www.aracz.com/#org"},
      "author": {"@id": "https://www.aracz.com/#person"},
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.aracz.com/fine/real/estate/newsearch/lndgname/{search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
}`;
  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = jsonLd;
  document.head.appendChild(script);
})();

/* --- 5. After DOM is ready: remove duplicate template JSON-LD and fix archive.org URLs --- */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));

  // Fix archive.org-wrapped Wikidata URLs
  scripts.forEach(function (s) {
    var t = s.textContent || '';
    if (/https:\/\/web\.archive\.org\/web\/\d+\/https:\/\/www\.wikidata\.org\/wiki\//.test(t)) {
      s.textContent = t.replace(
        /https:\/\/web\.archive\.org\/web\/\d+\/https:\/\/www\.wikidata\.org\/wiki\//g,
        'https://www.wikidata.org/wiki/'
      );
    }
  });

  // Remove duplicate org/person scripts, keeping the first one (our injected block)
  var orgPersonScripts = scripts.filter(function (s) {
    var t = s.textContent || '';
    return /https:\/\/www\.aracz\.com\/#org/.test(t) && /https:\/\/www\.aracz\.com\/#person/.test(t);
  });
  for (var i = 1; i < orgPersonScripts.length; i++) {
    orgPersonScripts[i].remove();
  }
});