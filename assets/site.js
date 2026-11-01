/* Studio Toorn — interaction & motion */
(function () {
  'use strict';

  var html = document.documentElement;
  if (!window.gsap || !window.ScrollTrigger || !window.ST_I18N) { html.classList.add('no-fx'); return; }
  window.__st = true;
  if (!location.hash) window.scrollTo(0, 0);

  gsap.registerPlugin(ScrollTrigger);
  if (window.SplitText) gsap.registerPlugin(SplitText);

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var DICT = window.ST_I18N;
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(pointer: fine)').matches;
  var body = document.body;
  var mm = gsap.matchMedia();
  var ST = window.ST = {};

  /* ---------------- language (one static URL per language) ---------------- */
  var lang = DICT[html.lang] ? html.lang : 'en';
  var T = function (k) { return DICT[lang][k] !== undefined ? DICT[lang][k] : DICT.en[k]; };
  window.dataLayer = window.dataLayer || [];

  function bookingText() {
    var now = new Date(), d = new Date(now.getFullYear(), now.getMonth() + (now.getDate() > 20 ? 2 : 1), 1);
    var m;
    try { m = new Intl.DateTimeFormat(lang, { month: 'long' }).format(d); } catch (e) { m = ''; }
    if (lang === 'en') m = m.charAt(0).toUpperCase() + m.slice(1);
    return T('booking').replace('{m}', m);
  }

  $$('.js-booking').forEach(function (el) { el.textContent = bookingText(); });
  $$('.lang a').forEach(function (a) {
    a.addEventListener('click', function () { try { localStorage.setItem('st-lang', a.getAttribute('data-lang')); } catch (e) {} });
  });

  /* suggest the visitor's own language once, never redirect */
  (function () {
    var stored = null, seen = null;
    try { stored = localStorage.getItem('st-lang'); seen = sessionStorage.getItem('st-sug'); } catch (e) {}
    var pref = stored || ((navigator.languages && navigator.languages[0]) || navigator.language || '').slice(0, 2).toLowerCase();
    if (seen || pref === lang || !DICT[pref]) return;
    var target = $('.lang a[data-lang="' + pref + '"]');
    if (!target) return;
    var chip = document.createElement('div');
    chip.className = 'lang-sug';
    chip.setAttribute('lang', pref);
    chip.innerHTML = '<a href="' + target.getAttribute('href') + '" hreflang="' + pref + '">' + DICT[pref].suggest + '<svg aria-hidden="true"><use href="#i-r"/></svg></a><button type="button" aria-label="' + DICT[pref].close + '">&times;</button>';
    document.body.appendChild(chip);
    chip.querySelector('a').addEventListener('click', function () { try { localStorage.setItem('st-lang', pref); } catch (e) {} });
    chip.querySelector('button').addEventListener('click', function () {
      try { sessionStorage.setItem('st-sug', '1'); } catch (e) {}
      chip.classList.remove('show');
      setTimeout(function () { chip.remove(); }, 600);
    });
    setTimeout(function () { chip.classList.add('show'); }, 2600);
  })();

  /* conversion events for analytics / ads (picked up once a tag is installed) */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    var h = a.getAttribute('href');
    var ev = /wa\.me/.test(h) ? 'whatsapp_click' : /^mailto:/.test(h) ? 'email_click' : /^tel:/.test(h) ? 'phone_click' : null;
    if (ev) window.dataLayer.push({ event: ev, page_language: lang, link_location: (a.closest('section, header, footer') || {}).id || '' });
  });

  /* ---------------- smooth scroll ---------------- */
  var lenis = null;
  if (!reduced && window.Lenis) {
    lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95, touchMultiplier: 1.4 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    if (!location.hash) lenis.scrollTo(0, { immediate: true, force: true });
  }
  ST.lenis = lenis;

  function scrollToTarget(sel) {
    var el = sel === '#top' ? 0 : $(sel);
    if (el === null) return;
    if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.5 });
    else if (el === 0) window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    else el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  }

  /* ---------------- menu ---------------- */
  var burger = $('#burger'), menu = $('#menu'), menuOpen = false;
  function setMenu(open) {
    menuOpen = open;
    menu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    if (lenis) { open ? lenis.stop() : lenis.start(); }
    body.classList.toggle('locked', open);
  }
  burger.addEventListener('click', function () { setMenu(!menuOpen); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menuOpen) setMenu(false); });

  $$('a.go').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var h = a.getAttribute('href');
      if (!h || h.charAt(0) !== '#') return;
      e.preventDefault();
      if (menuOpen) setMenu(false);
      scrollToTarget(h);
    });
  });

  /* ---------------- nav, progress, whatsapp ---------------- */
  var navEl = $('#nav'), progEl = $('#prog i'), wa = $('#wa-float');
  var lastY = 0, inContact = false;
  function onScroll(y, limit) {
    progEl.style.transform = 'scaleX(' + (limit > 0 ? Math.min(1, y / limit) : 0) + ')';
    navEl.classList.toggle('solid', y > 30);
    if (!menuOpen) {
      if (y > lastY + 4 && y > 500) navEl.classList.add('hide');
      else if (y < lastY - 4 || y < 500) navEl.classList.remove('hide');
    }
    lastY = y;
    wa.classList.toggle('show', y > window.innerHeight * 0.8 && !inContact);
  }
  if (lenis) lenis.on('scroll', function (e) { onScroll(e.scroll, e.limit); });
  else window.addEventListener('scroll', function () { onScroll(window.scrollY, document.documentElement.scrollHeight - innerHeight); }, { passive: true });
  navEl.addEventListener('focusin', function () { navEl.classList.remove('hide'); });

  /* ---------------- clock ---------------- */
  (function () {
    var els = $$('.js-clock'), fmt = null;
    try { fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit' }); } catch (e) {}
    function tick() { var s = fmt ? fmt.format(new Date()) : new Date().toTimeString().slice(0, 5); els.forEach(function (el) { el.textContent = s; }); }
    tick(); setInterval(tick, 15000);
  })();

  /* ---------------- cursor ---------------- */
  if (fine && !reduced) {
    (function () {
      var cur = $('#cursor'), dot = $('.c-dot'), ring = $('.c-ring');
      cur.classList.add('is-hidden');
      var xd = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3' }), yd = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3' });
      var xr = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' }), yr = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
      window.addEventListener('mousemove', function (e) {
        cur.classList.remove('is-hidden');
        xd(e.clientX); yd(e.clientY); xr(e.clientX); yr(e.clientY);
      }, { passive: true });
      document.addEventListener('mouseover', function (e) {
        var t = e.target;
        var view = t.closest('[data-cursor="view"]') && !t.closest('.case-link');
        var link = t.closest('a, button, label, input, textarea, .q');
        cur.classList.toggle('is-view', !!view);
        cur.classList.toggle('is-link', !view && !!link);
      }, { passive: true });
      document.documentElement.addEventListener('mouseleave', function () { cur.classList.add('is-hidden'); });
    })();
  }

  /* ---------------- magnetic ---------------- */
  if (fine && !reduced) {
    $$('.mag').forEach(function (el) {
      var sx = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' }), sy = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        sx((e.clientX - r.left - r.width / 2) * 0.22);
        sy((e.clientY - r.top - r.height / 2) * 0.32);
      });
      el.addEventListener('mouseleave', function () { sx(0); sy(0); });
    });
  }

  /* ---------------- hero ---------------- */
  var hlIn = $$('.hl-in'), hIn = $$('.h-in'), shots = $$('.shot'), badge = $('.hero-badge');
  /* the text intro is CSS-driven; JS only takes over behind the first-visit loader */
  var loaderRun = !reduced && html.classList.contains('first-visit') && !!$('#loader');
  if (loaderRun) {
    gsap.set(hlIn, { y: 0, yPercent: 115 });
    gsap.set(hIn, { autoAlpha: 0, y: 26 });
  }
  if (shots.length) { gsap.set('.s1', { z: -160 }); gsap.set('.s2', { z: -60 }); gsap.set('.s3', { z: 60 }); }
  if (badge) gsap.set(badge, { z: 140 });

  function floatShots() {
    shots.forEach(function (s, i) {
      gsap.to(s, { y: i % 2 ? 12 : -12, duration: 3.4 + i * 0.7, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    });
  }
  function heroIntro() {
    body.classList.remove('locked');
    if (lenis) lenis.start();
    if (reduced) return;
    if (!loaderRun) { floatShots(); return; }
    var tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.fromTo('.nav-in', { y: -30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.1, clearProps: 'transform,opacity,visibility' }, 0.1);
    if (hlIn.length) tl.to(hlIn, { yPercent: 0, duration: 1.4, stagger: 0.13 }, 0);
    if (hIn.length) tl.to(hIn, { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.08 }, 0.3);
    if (shots.length) tl.from(shots, { y: 160, autoAlpha: 0, rotationX: -22, duration: 1.6, stagger: 0.12 }, 0.35).add(floatShots, 1.4);
    if (badge) tl.from(badge, { scale: 0.6, autoAlpha: 0, duration: 1.1 }, 1);
  }

  if (!reduced && $('#stack') && $('#hero')) {
    var stack = $('#stack'), heroEl = $('#hero');
    var rx = gsap.quickTo(stack, 'rotationX', { duration: 1.2, ease: 'power3' });
    var ry = gsap.quickTo(stack, 'rotationY', { duration: 1.2, ease: 'power3' });
    if (fine) {
      heroEl.addEventListener('mousemove', function (e) {
        var px = e.clientX / innerWidth - 0.5, py = e.clientY / innerHeight - 0.5;
        ry(px * 16); rx(-py * 10);
        heroEl.style.setProperty('--mx', (50 + px * 60) + '%');
        heroEl.style.setProperty('--my', (40 + py * 50) + '%');
      });
      heroEl.addEventListener('mouseleave', function () { rx(0); ry(0); });
    }
    gsap.timeline({ scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } })
      .to('.s1', { yPercent: -40, ease: 'none' }, 0)
      .to('.s2', { yPercent: -18, ease: 'none' }, 0)
      .to('.s3', { yPercent: 14, ease: 'none' }, 0)
      .to(badge, { yPercent: -120, ease: 'none' }, 0)
      .to('.hero-copy', { y: -90, autoAlpha: 0.25, ease: 'none' }, 0);
  }

  /* motes */
  (function () {
    var cv = $('#motes');
    if (!cv || reduced) return;
    var ctx = cv.getContext('2d'), W, H, parts = [], running = false, inView = true, mouse = { x: -9999, y: -9999 };
    var COUNT = innerWidth < 768 ? 34 : 80;
    function resize() {
      var dpr = Math.min(devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function spawn(p, fresh) {
      p.x = Math.random() * W; p.y = fresh ? Math.random() * H : H + 10;
      p.r = 0.6 + Math.random() * 1.9; p.s = 0.12 + Math.random() * 0.4;
      p.ph = Math.random() * 6.28; p.a = 0.1 + Math.random() * 0.32; return p;
    }
    function loop(t) {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      var dark = body.classList.contains('is-dark');
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.y -= p.s; p.x += Math.sin(t * 0.0004 + p.ph) * 0.45;
        var dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < 14400 && d2 > 0.01) { var d = Math.sqrt(d2), f = (120 - d) / 120 * 1.5; p.x += dx / d * f; p.y += dy / d * f; }
        if (p.y < -10 || p.x < -20 || p.x > W + 20) spawn(p, false);
        ctx.globalAlpha = p.a * (0.65 + 0.35 * Math.sin(t * 0.003 + p.ph * 3));
        ctx.fillStyle = dark ? '#e8b866' : '#9a7426';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(loop);
    }
    function start() { if (!running && inView && !document.hidden) { running = true; requestAnimationFrame(loop); } }
    function stop() { running = false; }
    resize();
    for (var i = 0; i < COUNT; i++) parts.push(spawn({}, true));
    addEventListener('resize', resize, { passive: true });
    addEventListener('mousemove', function (e) { var r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; }, { passive: true });
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
    new IntersectionObserver(function (en) { inView = en[0].isIntersecting; inView ? start() : stop(); }).observe(cv);
    start();
  })();

  /* ---------------- loader ---------------- */
  ST.boot = function (after) {
    if (!loaderRun) { after(); return; }
    body.classList.add('locked');
    if (lenis) lenis.stop();
    var words = T('loader'), wi = 0, wEl = $('#ld-word'), cEl = $('#ld-count');
    wEl.textContent = words[0];
    var wt = setInterval(function () { wi = (wi + 1) % words.length; wEl.textContent = words[wi]; }, 320);
    var o = { v: 0 };
    gsap.timeline()
      .fromTo('.ld-mono', { autoAlpha: 0, scale: 0.6, rotation: -20 }, { autoAlpha: 1, scale: 1, rotation: 0, duration: 1.1, ease: 'expo.out' }, 0)
      .to(o, { v: 100, duration: 1.2, ease: 'power2.inOut', onUpdate: function () { cEl.textContent = String(Math.round(o.v)).padStart(2, '0'); } }, 0)
      .to('#ld-bar', { scaleX: 1, duration: 1.2, ease: 'power2.inOut' }, 0)
      .add(function () { clearInterval(wt); try { sessionStorage.setItem('st-seen', '1'); } catch (e) {} })
      .to('.ld-core, .ld-count, .ld-bar', { autoAlpha: 0, duration: 0.3 })
      .to('.ld-top', { yPercent: -100, duration: 1.05, ease: 'expo.inOut' }, '<0.1')
      .to('.ld-bot', { yPercent: 100, duration: 1.05, ease: 'expo.inOut' }, '<')
      .add(after, '-=0.6')
      .set('#loader', { display: 'none' });
  };
  ST.heroIntro = heroIntro;
  ST.T = T;
  ST.getLang = function () { return lang; };
  ST.$ = $; ST.$$ = $$; ST.mm = mm; ST.reduced = reduced; ST.fine = fine;
  ST.setInContact = function (v) { inContact = v; wa.classList.toggle('show', !v && lastY > innerHeight * 0.8); };
})();
