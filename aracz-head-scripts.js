/* ========== GEO-AUDIT OPTIMIZED SITE-WIDE HEAD SCRIPTS ========== */

(function () {
  'use strict';

  /* --- 1. Set HTML lang --- */
  document.documentElement.setAttribute('lang', 'en');

  /* --- 2. helpers --- */
  var pageUrl = window.location.href.split('#')[0].split('?')[0].replace(/\/+$/, '');
  var isHome = /^https?:\/\/(www\.)?aracz\.com$/.test(pageUrl) ||
               /^https?:\/\/(www\.)?aracz\.com\/index(\.html)?$/.test(pageUrl);

  /* --- 3. Homepage title & meta override --- */
  if (isHome) {
    var title = document.querySelector('title');
    if (title) title.textContent = 'Arpad Racz, REALTOR® | San Jose Real Estate Agent';
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content',
      'Arpad Racz, REALTOR® & California broker, helps buyers & sellers in San Jose & Silicon Valley. 28+ years experience. Call 408-252-0976.');
  }

  /* --- 4. Canonical fallback --- */
  var existing = document.querySelectorAll('link[rel="canonical"]');
  for (var k = 0; k < existing.length; k++) {
    existing[k].remove();
  }
  var canonUrl = window.location.href.split('#')[0];
  canonUrl = canonUrl.replace(/^http:\/\//i, 'https://');
  canonUrl = canonUrl.replace(/^https:\/\/aracz\.com\//i, 'https://www.aracz.com/');
  canonUrl = canonUrl.replace(/[?&](utm_[^=]+|fbclid|gclid|msclkid)=[^&]+/g, '');
  if (canonUrl.indexOf('?') === canonUrl.length - 1) canonUrl = canonUrl.slice(0, -1);
  var canonLink = document.createElement('link');
  canonLink.rel = 'canonical';
  canonLink.href = canonUrl;
  document.head.insertBefore(canonLink, document.head.firstChild);
})();

/* --- 5. Consolidated JSON-LD (Organization / Person / WebSite) --- */
(function () {
  var jsonLd = {
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
  };

  var s = document.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(s);
})();

/* --- 6. FAQPage JSON-LD on homepage --- */
(function () {
  'use strict';
  var pageUrl = window.location.href.split('#')[0].split('?')[0].replace(/\/+$/, '');
  var isHome = /^https?:\/\/(www\.)?aracz\.com$/.test(pageUrl) ||
               /^https?:\/\/(www\.)?aracz\.com\/index(\.html)?$/.test(pageUrl);
  if (!isHome) return;

  var faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I contact Arpad Racz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Call 408-252-0976 or email aracz@aracz.com. Arpad works with Altas Realty at 1190 S. Bascom Ave., Suite 118, San Jose, CA 95128."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "San Jose, Cupertino, Saratoga, Mountain View, Sunnyvale, Los Gatos, Santa Clara County and the broader Silicon Valley."
        }
      }
    ]
  };

  var s = document.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify(faqSchema);
  document.head.appendChild(s);
})();

/* --- 7. BreadcrumbList JSON-LD --- */
(function () {
  'use strict';
  var path = window.location.pathname;
  var items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.aracz.com/"
    }
  ];

  if (path.indexOf('/fine/real/estate/blog') === 0) {
    items.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.aracz.com/fine/real/estate/blog"
    });
  } else if (path.indexOf('/fine/real/estate/contact') === 0) {
    items.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://www.aracz.com/fine/real/estate/contact"
    });
  }

  if (items.length > 1) {
    var breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items
    };
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(s);
  }
})();

/* --- 8. Article schema on blog posts --- */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var path = window.location.pathname;
  if (path.indexOf('/fine/real/estate/blog') !== 0) return;

  var titleEl = document.querySelector('meta[property="og:title"]') ||
                document.querySelector('meta[name="twitter:title"]');
  var descEl = document.querySelector('meta[property="og:description"]') ||
               document.querySelector('meta[name="description"]');
  var imgEl = document.querySelector('meta[property="og:image"]');
  var canon = document.querySelector('link[rel="canonical"]');
  var pubEl = document.querySelector('time[itemprop="datePublished"]') ||
              document.querySelector('meta[property="article:published_time"]');
  var modEl = document.querySelector('time[itemprop="dateModified"]') ||
              document.querySelector('meta[property="article:modified_time"]');

  var articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": titleEl ? titleEl.getAttribute('content') : document.title,
    "description": descEl ? descEl.getAttribute('content') : "",
    "url": canon ? canon.getAttribute('href') : window.location.href,
    "image": imgEl ? imgEl.getAttribute('content') : "https://www.aracz.com/mydata/images/Cover%20w%20TXT3.jpg",
    "author": {"@id": "https://www.aracz.com/#person"},
    "publisher": {"@id": "https://www.aracz.com/#org"}
  };

  if (pubEl) {
    var pub = pubEl.getAttribute('datetime') || pubEl.getAttribute('content');
    if (pub) articleSchema.datePublished = pub;
  }
  if (modEl) {
    var mod = modEl.getAttribute('datetime') || modEl.getAttribute('content');
    if (mod) articleSchema.dateModified = mod;
  }

  var s = document.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify(articleSchema);
  document.head.appendChild(s);
});

/* --- 9. Fix image alt, width/height, lazy loading --- */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var imageConfig = {
    'homeSearchBoxOver.png':   { alt: 'Search for homes',              width: 60, height: 60, lazy: false },
    'homeWorthBoxOver.png':    { alt: 'Request home value estimate',   width: 60, height: 60, lazy: false },
    'mobileSearchBoxOver.png': { alt: 'Search new construction homes', width: 60, height: 60, lazy: true  },
    'contactBoxOver.png':      { alt: 'Contact Arpad Racz',            width: 60, height: 60, lazy: true  },
    'ehoWhite.png':            { alt: 'Equal Housing Opportunity logo', width: 15, height: 15, lazy: true  }
  };

  var imgs = document.getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    var src = img.getAttribute('src') || '';
    var filename = src.split('/').pop();
    var cfg = imageConfig[filename];
    if (!cfg) continue;

    if (!img.getAttribute('alt') || img.getAttribute('alt') === '') {
      img.setAttribute('alt', cfg.alt);
    }
    if (!img.hasAttribute('width'))  img.setAttribute('width',  cfg.width);
    if (!img.hasAttribute('height')) img.setAttribute('height', cfg.height);

    if (cfg.lazy && !img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  }
});

/* --- 10. Fix ADA empty anchor text --- */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var links = document.querySelectorAll('a[href="/screen_reader"]');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (!link.textContent.trim()) {
      link.textContent = 'Screen reader version';
      link.className = 'screen-reader-skip';
    }
  }
});

/* --- 11. Fix archive.org URLs + remove duplicate org/person JSON-LD --- */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var scripts = document.getElementsByTagName('script');
  var ldScripts = [];
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].getAttribute('type') === 'application/ld+json') {
      ldScripts.push(scripts[i]);
    }
  }

  for (var j = 0; j < ldScripts.length; j++) {
    var t = ldScripts[j].textContent || '';
    if (/https:\/\/web\.archive\.org\/web\/\d+\/https:\/\/www\.wikidata\.org\/wiki\//.test(t)) {
      ldScripts[j].textContent = t.replace(
        /https:\/\/web\.archive\.org\/web\/\d+\/https:\/\/www\.wikidata\.org\/wiki\//g,
        'https://www.wikidata.org/wiki/'
      );
    }
  }

  var orgPersonScripts = [];
  for (var k = 0; k < ldScripts.length; k++) {
    var txt = ldScripts[k].textContent || '';
    if (txt.indexOf('https://www.aracz.com/#org') !== -1 &&
        txt.indexOf('https://www.aracz.com/#person') !== -1) {
      orgPersonScripts.push(ldScripts[k]);
    }
  }
  for (var m = 1; m < orgPersonScripts.length; m++) {
    orgPersonScripts[m].parentNode.removeChild(orgPersonScripts[m]);
  }
});