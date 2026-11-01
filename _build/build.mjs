// Static multilingual build for studiotoorn.com
// Source of truth: index.html (EN template) + assets/i18n.js + _build/content-*.mjs
// Writes: index.html (EN, refreshed), es/, nl/, services pages, sitemap.xml, 404.html
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import en from './content-en.mjs';
import es from './content-es.mjs';
import nl from './content-nl.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://studiotoorn.com';
const LANGS = ['en', 'es', 'nl'];
const HOME = { en: '/', es: '/es/', nl: '/nl/' };
const LOCALE = { en: 'en_GB', es: 'es_ES', nl: 'nl_NL' };
const CONTENT = { en, es, nl };
const SVCS = ['web', 'apps', 'ai', 'brand'];
const SLUGS = {
  web: { en: '/services/web-design/', es: '/es/servicios/diseno-web/', nl: '/nl/diensten/website-laten-maken/' },
  apps: { en: '/services/apps/', es: '/es/servicios/apps/', nl: '/nl/diensten/app-laten-maken/' },
  ai: { en: '/services/ai-automation/', es: '/es/servicios/automatizacion-ia/', nl: '/nl/diensten/ai-automatisering/' },
  brand: { en: '/services/branding/', es: '/es/servicios/branding/', nl: '/nl/diensten/branding/' }
};
const CASES = {
  gospain: { name: 'Go Spain', url: 'https://www.gospain.nl/', addr: 'gospain.nl', img: 'gospain', tags: ['t.web', 't.video', 't.booking', 't.social'] },
  malaga: { name: 'Malaga Insiders', url: 'https://malagainsiders.com/', addr: 'malagainsiders.com', img: 'malaga', tags: ['t.platform', 't.subs', '@iOS', '@Supabase'] },
  toorn: { name: 'TOORN at table', url: 'https://toornattable.com/', addr: 'toornattable.com', img: 'toorn', tags: ['t.brand', 't.web', 't.content'] },
  jur: { name: 'Juridisch AI Adviseur', url: 'https://juridischaidviseur.nl/', addr: 'juridischaidviseur.nl', img: 'jur', tags: ['t.ai', 't.subs', 't.web'] },
  enboca: { name: 'En Boca', url: 'https://enbocagastrobar.netlify.app/', addr: 'enboca gastrobar', img: 'enboca', tags: ['t.brand', 't.web', 't.reserve'] },
  silk: { name: 'SilkFlorae', url: 'https://silkflorae.netlify.app/', addr: 'silkflorae', img: 'silk', tags: ['t.shop', '@Stripe', 't.motion'] }
};
const HERO_CASE = { web: ['enboca', 'w4'], apps: ['silk', 'w6'], ai: ['jur', 'w5'], brand: ['enboca', 'w4'] };
const CITIES = ['Málaga', 'Benalmádena', 'Torremolinos', 'Fuengirola', 'Mijas', 'Marbella', 'Estepona', 'Nerja'];
const TODAY = new Date().toISOString().slice(0, 10);

/* ---------- load dictionary ---------- */
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(readFileSync(join(ROOT, 'assets/i18n.js'), 'utf8'), ctx);
const DICT = ctx.window.ST_I18N;
const T = (lang, k) => (DICT[lang][k] !== undefined ? DICT[lang][k] : DICT.en[k]);

/* ---------- helpers ---------- */
const escText = s => String(s).replace(/&(?!(amp|lt|gt|quot|#\d+|#x[0-9a-f]+);)/gi, '&amp;').replace(/</g, '&lt;');
const escAttr = s => escText(s).replace(/"/g, '&quot;');
const strip = s => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const abs = p => SITE + p;
const ld = graph => `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;

function findClose(html, tag, from) {
  const open = new RegExp(`<${tag}[\\s>]`, 'g'), close = new RegExp(`</${tag}>`, 'g');
  let depth = 1, pos = from;
  for (;;) {
    open.lastIndex = pos; close.lastIndex = pos;
    const o = open.exec(html), c = close.exec(html);
    if (!c) return -1;
    if (o && o.index < c.index) { depth++; pos = o.index + 1; }
    else { depth--; if (depth === 0) return c.index; pos = c.index + 1; }
  }
}
function replaceInner(html, getVal) {
  const re = /<([a-zA-Z0-9]+)(?=[^>]*\sdata-i18n="([^"]+)")[^>]*>/g;
  let out = '', last = 0, m;
  while ((m = re.exec(html))) {
    const tag = m[1], key = m[2], startEnd = m.index + m[0].length;
    const val = getVal(key);
    const close = findClose(html, tag, startEnd);
    if (typeof val !== 'string' || close < 0) continue;
    out += html.slice(last, startEnd) + val;
    last = close;
    re.lastIndex = close;
  }
  return out + html.slice(last);
}
function replaceAttr(html, keyAttr, target, getVal) {
  return html.replace(new RegExp(`<[^>]*\\s${keyAttr}="([^"]+)"[^>]*>`, 'g'), (tagStr, key) => {
    const v = getVal(key);
    if (typeof v !== 'string') return tagStr;
    return tagStr.replace(new RegExp(`(\\s${target}=")[^"]*(")`), (_, a, b) => a + escAttr(strip(v)) + b);
  });
}
function setLangLinks(html, lang, hrefFor) {
  return html.replace(/<a href="[^"]*" data-lang="(en|es|nl)"[^>]*>/g, (_, l) =>
    `<a href="${hrefFor(l)}" data-lang="${l}" hreflang="${l}" lang="${l}"${l === lang ? ' class="on" aria-current="true"' : ''}>`);
}
function setSvcLinks(html, lang) {
  return html.replace(/<a [^>]*data-svc="([a-z]+)"[^>]*>/g, (tagStr, s) => tagStr.replace(/href="[^"]*"/, `href="${SLUGS[s][lang]}"`));
}
function hreflang(urls) {
  const lines = LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${abs(urls[l])}">`);
  lines.push(`<link rel="alternate" hreflang="x-default" href="${abs(urls.en)}">`);
  return `<!--HREFLANG-->\n${lines.join('\n')}\n<!--/HREFLANG-->`;
}
function setHead(html, { lang, title, desc, path, urls, graph }) {
  return html
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escText(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${escAttr(desc)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${abs(path)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${abs(path)}$2`)
    .replace(/(<meta property="og:locale" content=")[^"]*(")/, `$1${LOCALE[lang]}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escAttr(title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escAttr(desc)}$2`)
    .replace(/<!--HREFLANG-->[\s\S]*?<!--\/HREFLANG-->/, hreflang(urls))
    .replace(/<!--LD-->[\s\S]*?<!--\/LD-->/, `<!--LD-->${ld(graph)}<!--/LD-->`);
}

/* ---------- structured data ---------- */
function orgNode(lang) {
  const c = CONTENT[lang];
  return {
    '@type': 'ProfessionalService', '@id': SITE + '/#studio', name: 'Studio Toorn', legalName: 'Content Angels Agency SL',
    url: SITE + '/', logo: SITE + '/images/icon-512.png', image: SITE + '/images/og-2026.jpg',
    email: 'info@studiotoorn.com', telephone: '+31614412102', priceRange: '€€',
    description: T(lang, 'meta.desc'),
    founder: { '@type': 'Person', name: 'Nick Toorn', jobTitle: 'Founder' },
    address: { '@type': 'PostalAddress', addressLocality: 'Benalmádena', addressRegion: 'Málaga', addressCountry: 'ES' },
    areaServed: [...CITIES.map(n => ({ '@type': 'City', name: n })), { '@type': 'Country', name: 'Spain' }, { '@type': 'Country', name: 'Netherlands' }, { '@type': 'Country', name: 'Belgium' }],
    knowsLanguage: ['en', 'es', 'nl'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog', name: c.ui.services,
      itemListElement: SVCS.map(s => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: strip(c.pages[s].crumb), url: abs(SLUGS[s][lang]) } }))
    }
  };
}
const faqNode = (pairs, lang) => ({ '@type': 'FAQPage', inLanguage: lang, mainEntity: pairs.map(([q, a]) => ({ '@type': 'Question', name: strip(q), acceptedAnswer: { '@type': 'Answer', text: strip(a) } })) });

/* ---------- home pages ---------- */
const template = readFileSync(join(ROOT, 'index.html'), 'utf8');
const homes = {};
for (const lang of LANGS) {
  let html = template;
  html = replaceInner(html, key => {
    const v = T(lang, key);
    return key === 'mf' && typeof v === 'string' ? v.replace(/\*([^*]+)\*/g, '<em>$1</em>') : v;
  });
  html = replaceAttr(html, 'data-i18n-ph', 'placeholder', k => T(lang, k));
  html = replaceAttr(html, 'data-i18n-alt', 'alt', k => T(lang, k));
  html = setLangLinks(html, lang, l => HOME[l]);
  html = setSvcLinks(html, lang);
  const faqPairs = [1, 2, 3, 4, 5, 6, 7].map(i => [T(lang, 'q' + i), T(lang, 'a' + i)]);
  html = setHead(html, {
    lang, title: T(lang, 'meta.title'), desc: T(lang, 'meta.desc'), path: HOME[lang], urls: HOME,
    graph: [
      { '@type': 'WebSite', '@id': SITE + '/#website', url: SITE + '/', name: 'Studio Toorn', inLanguage: LANGS, publisher: { '@id': SITE + '/#studio' } },
      orgNode(lang),
      { '@type': 'WebPage', '@id': abs(HOME[lang]) + '#page', url: abs(HOME[lang]), name: T(lang, 'meta.title'), inLanguage: lang, isPartOf: { '@id': SITE + '/#website' }, about: { '@id': SITE + '/#studio' } },
      faqNode(faqPairs, lang)
    ]
  });
  homes[lang] = html;
  const out = lang === 'en' ? join(ROOT, 'index.html') : join(ROOT, lang, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
}

/* ---------- service pages ---------- */
const cut = (html, startMarker, endMarker, includeEnd = true) => {
  const s = html.indexOf(startMarker);
  const e = html.indexOf(endMarker, s);
  if (s < 0 || e < 0) throw new Error('marker not found: ' + startMarker);
  return html.slice(s, includeEnd ? e + endMarker.length : e);
};
const sectionById = (html, id) => {
  const s = html.indexOf(`<section id="${id}"`);
  if (s < 0) throw new Error('section not found: ' + id);
  return html.slice(s, findClose(html, 'section', s + 1) + '</section>'.length);
};
function caseArticle(lang, key, work) {
  const c = CASES[key];
  const tags = c.tags.map(t => `<li>${t[0] === '@' ? t.slice(1) : T(lang, t)}</li>`).join('');
  const alt = T(lang, 'alt.' + work);
  return `<article class="case rv" data-cursor="view">
        <a class="case-media" href="${c.url}" target="_blank" rel="noopener">
          <div class="cb"><div class="cb-bar"><i></i><i></i><i></i><span>${c.addr}</span></div><div class="cb-img"><img src="/images/work/${c.img}-d-900.webp" srcset="/images/work/${c.img}-d-900.webp 900w, /images/work/${c.img}-d-1600.webp 1600w" sizes="(max-width:1023px) 92vw, 70rem" alt="${escAttr(alt)}" width="1600" height="1000" loading="lazy" decoding="async"></div></div>
          <div class="case-phone"><img src="/images/work/${c.img}-m-560.webp" alt="" width="560" height="1212" loading="lazy" decoding="async"></div>
        </a>
        <div class="case-meta">
          <span class="case-num">→</span><h3 class="case-name">${c.name}</h3>
          <a class="case-link" href="${c.url}" target="_blank" rel="noopener"><span>${CONTENT[lang].ui.visit}</span><svg><use href="#i-ur"/></svg></a>
          <p class="case-cat">${T(lang, work + '.cat')}</p>
          <p class="case-desc">${T(lang, work + '.desc')}</p>
          <ul class="case-tags">${tags}</ul>
        </div>
      </article>`;
}
function heroVisual(lang, key, work) {
  const c = CASES[key];
  return `<a class="case-media" href="${c.url}" target="_blank" rel="noopener" data-cursor="view">
          <div class="cb"><div class="cb-bar"><i></i><i></i><i></i><span>${c.addr}</span></div><div class="cb-img"><img src="/images/work/${c.img}-d-900.webp" srcset="/images/work/${c.img}-d-900.webp 900w, /images/work/${c.img}-d-1600.webp 1600w" sizes="(max-width:1000px) 92vw, 46vw" alt="${escAttr(T(lang, 'alt.' + work))}" width="1600" height="1000" fetchpriority="high"></div></div>
          <div class="case-phone"><img src="/images/work/${c.img}-m-560.webp" alt="" width="560" height="1212" decoding="async"></div>
        </a>`;
}

const tplHeadTail = cut(template, '<link rel="icon"', '<!--LD-->', false).replace(/<link rel="preload" as="image"[^>]*>\n?/, '').replace("d.className+=' first-visit';", 'void 0;');
const tplSprite = cut(template, '<svg width="0" height="0"', '</svg>');
const tplScripts = cut(template, '<script src="https://cdn.jsdelivr.net/npm/gsap', '</body>', false);

const pages = [];
for (const lang of LANGS) {
  const home = homes[lang], ui = CONTENT[lang].ui;
  const fixAnchors = h => h
    .replace(/href="#(work|services|ai|studio)"/g, `href="${HOME[lang]}#$1"`)
    .replace(/<a href="#top" class="brand go"/g, `<a href="${HOME[lang]}" class="brand"`);
  const pre = fixAnchors(cut(home, '<a class="skip"', '<div id="loader"', false));
  const chrome = fixAnchors(cut(home, '<header id="nav">', '<main id="main">', false));
  const footer = fixAnchors(cut(home, '<footer', '</footer>'));
  const process = sectionById(home, 'process');
  const contact = sectionById(home, 'contact');

  for (const svc of SVCS) {
    const p = CONTENT[lang].pages[svc];
    const path = SLUGS[svc][lang];
    const urls = Object.fromEntries(LANGS.map(l => [l, SLUGS[svc][l]]));
    const facts = p.facts.map(([b, s]) => `<li><b>${b}</b><span>${s}</span></li>`).join('');
    const items = p.items.map(([h, t], i) => `<li class="rv"><span>${String(i + 1).padStart(2, '0')}</span><div><h3>${h}</h3><p>${t}</p></div></li>`).join('\n        ');
    const tags = p.tags.map(t => `<li>${t}</li>`).join('');
    const related = SVCS.filter(s => s !== svc).map(s => `<a href="${SLUGS[s][lang]}">${CONTENT[lang].pages[s].crumb}</a>`).join('');
    const faqs = p.faq.map(([q, a]) => `<div class="qa"><button class="q" aria-expanded="false"><span>${q}</span><i class="plus" aria-hidden="true"></i></button><div class="a"><div><p>${a}</p></div></div></div>`).join('\n      ');
    const graph = [
      { '@type': 'Service', '@id': abs(path) + '#service', name: strip(p.crumb), serviceType: strip(p.crumb), description: p.desc, url: abs(path), inLanguage: lang,
        provider: { '@id': SITE + '/#studio' }, areaServed: [...CITIES.map(n => ({ '@type': 'City', name: n })), { '@type': 'Country', name: 'Spain' }, { '@type': 'Country', name: 'Netherlands' }] },
      orgNode(lang),
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Studio Toorn', item: abs(HOME[lang]) },
        { '@type': 'ListItem', position: 2, name: ui.services, item: abs(HOME[lang]) + '#services' },
        { '@type': 'ListItem', position: 3, name: strip(p.crumb), item: abs(path) } ] },
      faqNode(p.faq, lang)
    ];
    let head = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title></title>
<meta name="description" content="">
<meta name="theme-color" content="#f4efe4">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="">
<!--HREFLANG--><!--/HREFLANG-->
<meta property="og:type" content="website">
<meta property="og:url" content="">
<meta property="og:site_name" content="Studio Toorn">
<meta property="og:locale" content="">
<meta property="og:title" content="">
<meta property="og:description" content="">
<meta property="og:image" content="https://studiotoorn.com/images/og-2026.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://studiotoorn.com/images/og-2026.jpg">
${tplHeadTail}<!--LD--><!--/LD-->
</head>`;
    head = setHead(head, { lang, title: p.title, desc: p.desc, path, urls, graph });

    let body = `
<body>
${tplSprite}
${pre}${chrome}
<main id="main">

<section id="top" class="chapter sp-hero" data-theme="light">
  <div class="wrap sp-hero-grid">
    <div>
      <nav class="crumbs h-in" aria-label="Breadcrumb"><a href="${HOME[lang]}">Studio Toorn</a><span aria-hidden="true">/</span><a href="${HOME[lang]}#services">${ui.services}</a><span aria-hidden="true">/</span><span aria-current="page">${p.crumb}</span></nav>
      <h1 class="sp-title"><span class="hl"><span class="hl-in">${p.h1a}</span></span><span class="hl"><span class="hl-in"><em>${p.h1b}</em></span></span></h1>
      <p class="hero-sub h-in">${p.intro}</p>
      <div class="hero-ctas h-in">
        <a href="#contact" class="btn btn-gold go mag"><span>${ui.cta1}</span><span class="chip"><svg><use href="#i-r"/></svg></span></a>
        <a href="https://wa.me/31614412102" target="_blank" rel="noopener" class="btn btn-ghost mag"><span>${ui.cta2}</span><span class="chip"><svg><use href="#i-wa"/></svg></span></a>
      </div>
      <ul class="sp-facts h-in">${facts}</ul>
    </div>
    <div class="sp-visual h-in">
        ${heroVisual(lang, HERO_CASE[svc][0], HERO_CASE[svc][1])}
    </div>
  </div>
</section>

<section class="chapter" data-theme="light">
  <div class="wrap sp-split">
    <div>
      <span class="eyebrow">${ui.get}</span>
      <h2 class="h2" data-split style="margin-top:1.4rem">${p.getTitle}</h2>
      <p class="lead rv">${p.getLead}</p>
    </div>
    <ol class="sp-list">
        ${items}
    </ol>
  </div>
</section>

<section class="chapter sp-for" data-theme="light">
  <div class="wrap">
    <span class="eyebrow">${ui.for}</span>
    <h2 class="h2" data-split style="margin-top:1.4rem">${p.forTitle}</h2>
    <p class="lead rv">${p.forLead}</p>
    <ul class="sp-tags rv">${tags}</ul>
  </div>
</section>

<section id="proof" class="chapter sp-proof" data-theme="dark">
  <div class="wrap">
    <div class="proof-head">
      <div><span class="eyebrow">${ui.proof}</span><h2 class="h2" data-split style="margin-top:1.4rem">${p.proofTitle}</h2></div>
      ${p.proofExtra ? `<p class="lead rv">${p.proofExtra}</p>` : ''}
    </div>
    ${caseArticle(lang, p.proofCase, p.proofWork)}
    <nav class="sp-related rv" aria-label="${ui.related}"><span>${ui.related}</span>${related}</nav>
  </div>
</section>

${process}

<section id="faq" class="chapter" data-theme="light">
  <div class="faq-grid">
    <div class="faq-side">
      <span class="eyebrow">${ui.faqEyebrow}</span>
      <h2 class="h2" data-split style="margin-top:1.4rem">${ui.faqTitle}</h2>
      <p class="lead rv">${ui.faqLead}</p>
      <a href="https://wa.me/31614412102" target="_blank" rel="noopener" class="btn btn-ghost mag rv"><span>${ui.faqAsk}</span><span class="chip"><svg><use href="#i-wa"/></svg></span></a>
    </div>
    <div class="faq-list rv">
      ${faqs}
    </div>
  </div>
</section>

${contact}

</main>

${footer}

${tplScripts}</body>
</html>
`;
    body = setLangLinks(body, lang, l => SLUGS[svc][l]);
    const out = join(ROOT, path, 'index.html');
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, head + body);
    pages.push({ path, urls });
  }
}

/* ---------- sitemap ---------- */
const groups = [{ urls: HOME, priority: '1.0' }, ...SVCS.map(s => ({ urls: SLUGS[s], priority: '0.8' }))];
const entries = groups.flatMap(g => LANGS.map(l => `  <url>
    <loc>${abs(g.urls[l])}</loc>
    <lastmod>${TODAY}</lastmod>
    <priority>${g.priority}</priority>
${LANGS.map(a => `    <xhtml:link rel="alternate" hreflang="${a}" href="${abs(g.urls[a])}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(g.urls.en)}"/>
  </url>`));
writeFileSync(join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`);

/* ---------- 404 ---------- */
writeFileSync(join(ROOT, '404.html'), `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page not found | Studio Toorn</title>
<meta name="robots" content="noindex">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32.png">
<link href="https://api.fontshare.com/v2/css?f[]=boska@300,400,401&f[]=general-sans@400,500,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/site.css?v=2026-11-01">
</head>
<body>
${tplSprite}
<main class="nf">
  <div>
    <b>404</b>
    <h1>This dish is not on the menu.</h1>
    <p>Esta página no existe · Deze pagina bestaat niet. Choose your language and start again:</p>
    <nav>
      <a class="btn btn-gold" href="/"><span>English</span><span class="chip"><svg><use href="#i-r"/></svg></span></a>
      <a class="btn btn-ghost" href="/es/"><span>Español</span><span class="chip"><svg><use href="#i-r"/></svg></span></a>
      <a class="btn btn-ghost" href="/nl/"><span>Nederlands</span><span class="chip"><svg><use href="#i-r"/></svg></span></a>
    </nav>
  </div>
</main>
</body>
</html>
`);

console.log(`built ${LANGS.length} home pages, ${pages.length} service pages, sitemap (${groups.length * LANGS.length} urls), 404`);
