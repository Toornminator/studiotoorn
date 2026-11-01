/* Studio Toorn — sections */
(function () {
  'use strict';
  var ST = window.ST;
  if (!ST) return;
  /* set up after the first paint so the hero renders (and LCP fires) before heavy scroll setup */
  function init() {
  var $ = ST.$, $$ = ST.$$, mm = ST.mm, reduced = ST.reduced, T = ST.T;
  var body = document.body;

  /* ---------------- marquee (scroll-velocity driven) ---------------- */
  (function () {
    var track = $('#mq');
    if (!track) return;
    var group = track.firstElementChild;
    var need = Math.ceil((innerWidth * 2.2) / Math.max(1, group.offsetWidth)) + 1;
    for (var i = 0; i < need; i++) track.appendChild(group.cloneNode(true));
    if (reduced) return;
    var x = 0, dir = 1, visible = true;
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(track);
    gsap.ticker.add(function (t, dt) {
      if (!visible) return;
      var v = ST.lenis ? ST.lenis.velocity : 0;
      if (Math.abs(v) > 0.2) dir = v > 0 ? 1 : -1;
      var speed = 0.55 + Math.min(Math.abs(v) * 0.3, 14);
      x -= speed * dir * (dt / 16.7);
      var w = group.offsetWidth;
      if (x <= -w) x += w;
      if (x > 0) x -= w;
      track.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)';
    });
  })();

  /* ---------------- reveals ---------------- */
  (function () {
    var els = $$('.rv');
    if (reduced || !('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    els.forEach(function (el) {
      var sib = el.previousElementSibling, n = 0;
      while (sib && sib.classList.contains('rv') && n < 4) { n++; sib = sib.previousElementSibling; }
      el.style.transitionDelay = (n * 0.09) + 's';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  })();

  /* ---------------- split headings ---------------- */
  var splits = [];
  function initSplit(el) {
    if (reduced || !window.SplitText) { el.classList.add('ready'); return; }
    var rec = { el: el, done: false };
    rec.split = new SplitText(el, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
    gsap.set(rec.split.lines, { yPercent: 112 });
    el.classList.add('ready');
    rec.st = ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: function () {
        gsap.to(rec.split.lines, {
          yPercent: 0, duration: 1.25, stagger: 0.1, ease: 'expo.out',
          onComplete: function () { rec.done = true; rec.split.revert(); }
        });
      }
    });
    splits.push(rec);
  }
  ST.splitsRevertPending = function () {
    splits.forEach(function (r) { if (!r.done) { r.st && r.st.kill(); r.split.revert(); r.pending = true; } });
  };
  ST.splitsReinitPending = function () {
    var todo = splits.filter(function (r) { return r.pending; });
    splits = splits.filter(function (r) { return !r.pending; });
    todo.forEach(function (r) { initSplit(r.el); });
  };

  /* ---------------- manifesto word scrub ---------------- */
  var scrubTw = null;
  ST.buildScrub = function () {
    var el = $('#scrub');
    if (!el) return;
    if (scrubTw) { if (scrubTw.scrollTrigger) scrubTw.scrollTrigger.kill(); scrubTw.kill(); scrubTw = null; }
    var txt = T('mf').replace(/\*([^*]+)\*/g, function (m, g) { return g.split(' ').map(function (w) { return '\u0001' + w; }).join(' '); });
    el.innerHTML = txt.split(' ').map(function (w) {
      return w.charAt(0) === '\u0001' ? '<span class="w"><em>' + w.slice(1) + '</em></span>' : '<span class="w">' + w + '</span>';
    }).join(' ');
    if (reduced) return;
    var words = $$('.w', el);
    gsap.set(words, { opacity: 1 });
    ScrollTrigger.create({ trigger: '#manifesto', start: 'top bottom', once: true, onEnter: function () { gsap.set(words, { opacity: 0.14 }); } });
    scrubTw = gsap.fromTo(words, { opacity: 0.14 }, {
      opacity: 1, ease: 'none', stagger: 0.12, immediateRender: false,
      scrollTrigger: { trigger: '#manifesto', start: 'top 68%', end: 'center 42%', scrub: 0.6 }
    });
  };
  ST.buildScrub();

  /* ---------------- work: horizontal pinned gallery ---------------- */
  var hudI = $('#work-i'), hudBar = $('#work-bar'), cases = $$('#work-track > *');
  if ($('#work')) mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', function () {
    var sec = $('#work'), track = $('#work-track');
    sec.classList.add('is-pinned');
    var dist = function () { return Math.max(0, track.scrollWidth - innerWidth); };
    var tw = gsap.to(track, {
      x: function () { return -dist(); }, ease: 'none',
      scrollTrigger: {
        trigger: sec, start: 'top top', end: function () { return '+=' + dist(); },
        pin: true, scrub: 0.9, invalidateOnRefresh: true, anticipatePin: 1,
        onUpdate: function (s) {
          hudBar.style.transform = 'scaleX(' + s.progress.toFixed(3) + ')';
          hudI.textContent = String(Math.min(7, 1 + Math.floor(s.progress * 7.2))).padStart(2, '0');
        }
      }
    });
    $$('.case .cb-img img').forEach(function (img) {
      gsap.fromTo(img, { xPercent: -5, scale: 1.12 }, {
        xPercent: 5, scale: 1.12, ease: 'none',
        scrollTrigger: { trigger: img.closest('.case'), containerAnimation: tw, start: 'left right', end: 'right left', scrub: true }
      });
    });
    $$('.case-phone').forEach(function (ph) {
      gsap.fromTo(ph, { y: 90, rotation: 7 }, {
        y: 0, rotation: 0, ease: 'none',
        scrollTrigger: { trigger: ph.closest('.case'), containerAnimation: tw, start: 'left 95%', end: 'left 35%', scrub: true }
      });
    });
    $$('.case-meta').forEach(function (m) {
      gsap.from(m.children, {
        y: 30, autoAlpha: 0, stagger: 0.05, ease: 'none',
        scrollTrigger: { trigger: m.closest('.case'), containerAnimation: tw, start: 'left 85%', end: 'left 45%', scrub: true }
      });
    });
    return function () { sec.classList.remove('is-pinned'); gsap.set(track, { clearProps: 'transform' }); };
  });
  mm.add('(max-width: 1023px), (prefers-reduced-motion: reduce)', function () {
    if (reduced) return;
    cases.forEach(function (c) {
      gsap.from(c, { y: 70, autoAlpha: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: c, start: 'top 88%', once: true } });
    });
  });

  /* ---------------- zones: theme, active nav link, contact ----------------
     Measured from live element rects so pinned sections report correctly. */
  (function () {
    var meta = $('meta[name="theme-color"]');
    var darkZones = $$('[data-theme="dark"]');
    var links = ['work', 'services', 'ai', 'studio', 'faq'].map(function (id) { return [$('#' + id), $('.nav-links a[href="#' + id + '"]')]; });
    var contact = $('#contact') || $('footer'), footer = $('footer');
    var wasDark = null, wasIn = null;
    function update() {
      var vh = innerHeight, mid = vh * 0.5;
      var dark = darkZones.some(function (z) { var r = z.getBoundingClientRect(); return r.top < vh * 0.55 && r.bottom > vh * 0.45; });
      if (dark !== wasDark) {
        wasDark = dark;
        body.classList.toggle('is-dark', dark);
        if (meta) meta.setAttribute('content', dark ? '#110d09' : '#f4efe4');
      }
      links.forEach(function (l) {
        if (!l[0] || !l[1]) return;
        var r = l[0].getBoundingClientRect();
        l[1].classList.toggle('on', r.top < mid && r.bottom > mid);
      });
      var inC = contact.getBoundingClientRect().top < vh * 0.8 && footer.getBoundingClientRect().bottom > 0;
      if (inC !== wasIn) { wasIn = inC; ST.setInContact(inC); }
    }
    ST.updateZones = update;
    if (ST.lenis) ST.lenis.on('scroll', update);
    else addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    ScrollTrigger.addEventListener('refresh', update);
    update();
  })();

  /* ---------------- services: sticky stage with live demos ---------------- */
  var vizEls = $$('#svc-stage .viz'), svcBlocks = $$('.svc'), tls = [];
  function cen(n, wrap) {
    var r = n.getBoundingClientRect(), p = wrap.getBoundingClientRect();
    return { x: r.left - p.left + r.width / 2, y: r.top - p.top + r.height / 2 };
  }
  var builders = [
    function web(v) {
      var bars = $$('.vw-hero b', v), btn = $('.vw-btn', v), tiles = $$('.vw-grid i', v), cur = $('.vw-cursor', v), toast = $('.vw-toast', v);
      var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, paused: true });
      tl.set(bars, { scaleX: 0 }).set(btn, { autoAlpha: 0, y: 8, scale: 1 }).set(tiles, { autoAlpha: 0, y: 14 })
        .set(toast, { autoAlpha: 0, x: 40 }).set(cur, { x: 0, y: 0, autoAlpha: 0 })
        .to(bars, { scaleX: 1, duration: 0.9, stagger: 0.14, ease: 'expo.out' })
        .to(btn, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'expo.out' }, '-=0.5')
        .to(tiles, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.09, ease: 'expo.out' }, '-=0.4')
        .to(cur, { autoAlpha: 1, duration: 0.25 })
        .to(cur, {
          x: function () { var a = cur.getBoundingClientRect(), b = btn.getBoundingClientRect(); return b.left + b.width * 0.55 - a.left; },
          y: function () { var a = cur.getBoundingClientRect(), b = btn.getBoundingClientRect(); return b.top + b.height * 0.4 - a.top; },
          duration: 1.1, ease: 'power3.inOut'
        })
        .to(btn, { scale: 0.88, duration: 0.12, yoyo: true, repeat: 1 })
        .to(toast, { autoAlpha: 1, x: 0, duration: 0.8, ease: 'expo.out' })
        .to({}, { duration: 1.8 })
        .to([toast, cur], { autoAlpha: 0, duration: 0.4 });
      return tl;
    },
    function app(v) {
      var card = $('.pa-card', v), items = $$('.pa-list i', v), btn = $('.pa-btn', v), ok = $('.ok', v), push = $('.va-push', v);
      var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, paused: true });
      tl.set(card, { autoAlpha: 0, y: 26 }).set(items, { autoAlpha: 0, x: -16 }).set(ok, { autoAlpha: 0 })
        .set(push, { autoAlpha: 0, y: -18, scale: 0.95 }).set(btn, { scale: 1 })
        .to(card, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out' })
        .to(items, { autoAlpha: 1, x: 0, stagger: 0.1, duration: 0.6, ease: 'expo.out' }, '-=0.5')
        .to(btn, { scale: 0.93, duration: 0.14, yoyo: true, repeat: 1 }, '+=0.3')
        .to(ok, { autoAlpha: 1, duration: 0.35 }, '+=0.15')
        .to(push, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: 'expo.out' }, '+=0.2')
        .to({}, { duration: 2 })
        .to([push, ok], { autoAlpha: 0, duration: 0.4 });
      return tl;
    },
    function ai(v) {
      var nodes = $$('.vn', v), dot = $('.vai-dot', v), wrap = $('.vai', v), dots = $$('.typing i', v);
      var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3, paused: true });
      tl.add(function () { nodes.forEach(function (n) { n.classList.remove('hot'); }); }).set(dot, { autoAlpha: 0 }).set(dots, { opacity: 0.3, y: 0 });
      nodes.forEach(function (n, i) {
        tl.add(function () { n.classList.add('hot'); });
        if (i === 1) tl.to(dots, { opacity: 1, y: -3, duration: 0.22, stagger: { each: 0.1, repeat: 3, yoyo: true } });
        else tl.to({}, { duration: 0.7 });
        if (i < nodes.length - 1) {
          tl.set(dot, { x: function () { return cen(nodes[i], wrap).x; }, y: function () { return cen(nodes[i], wrap).y; }, autoAlpha: 1 })
            .to(dot, { x: function () { return cen(nodes[i + 1], wrap).x; }, y: function () { return cen(nodes[i + 1], wrap).y; }, duration: 0.85, ease: 'power2.inOut' })
            .set(dot, { autoAlpha: 0 });
        }
      });
      tl.to({}, { duration: 1.8 });
      return tl;
    },
    function brand(v) {
      var mono = $('.vb-mono', v), ring = $('.vb-ring', v), sw = $$('.vb-sw i', v), type = $('.vb-type', v), flash = $('.vb-frame b', v), rec = $('.vb-frame span', v);
      var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4, paused: true });
      tl.set(mono, { autoAlpha: 0, scale: 0.7, rotation: -25 }).set(sw, { scale: 0 }).set(type, { autoAlpha: 0, x: -20, fontStyle: 'normal' }).set(flash, { opacity: 0 })
        .to(mono, { autoAlpha: 1, scale: 1, rotation: 0, duration: 1.2, ease: 'expo.out' })
        .to(ring, { rotation: '+=120', duration: 3.4, ease: 'none' }, 0)
        .to(sw, { scale: 1, duration: 0.7, stagger: 0.1, ease: 'expo.out' }, 0.4)
        .to(type, { autoAlpha: 1, x: 0, duration: 0.8, ease: 'expo.out' }, 0.6)
        .set(type, { fontStyle: 'italic' }, 1.7)
        .to(flash, { opacity: 0.9, duration: 0.06 }, 2.0)
        .to(flash, { opacity: 0, duration: 0.6 }, 2.06)
        .to(rec, { opacity: 0.2, duration: 0.3, yoyo: true, repeat: 7 }, 0)
        .to({}, { duration: 1 })
        .to([mono, type], { autoAlpha: 0, duration: 0.4 })
        .to(sw, { scale: 0, duration: 0.3, stagger: 0.05 }, '<');
      return tl;
    }
  ];
  function tlFor(i) { if (!tls[i]) tls[i] = builders[i](vizEls[i]); return tls[i]; }

  if (!svcBlocks.length || !vizEls.length) {
    /* page without the services stage */
  } else if (!reduced) {
    var activeSvc = -1, stageOn = false;
    var activate = function (i) {
      if (i === activeSvc) return;
      var prev = activeSvc;
      activeSvc = i;
      svcBlocks.forEach(function (b, j) { b.classList.toggle('on', j === i); });
      if (prev > -1) {
        if (tls[prev]) tls[prev].pause();
        vizEls[prev].classList.remove('on');
        gsap.to(vizEls[prev], { autoAlpha: 0, y: -30, duration: 0.5, ease: 'power2.in' });
      }
      vizEls[i].classList.add('on');
      gsap.fromTo(vizEls[i], { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out', delay: prev > -1 ? 0.2 : 0 });
      if (stageOn) tlFor(i).restart();
    };
    mm.add('(min-width: 1024px)', function () {
      vizEls.forEach(function (v, j) { gsap.set(v, { autoAlpha: j === 0 ? 1 : 0 }); });
      svcBlocks.forEach(function (b, i) {
        ScrollTrigger.create({ trigger: b, start: 'top 58%', end: 'bottom 58%', onToggle: function (s) { if (s.isActive) activate(i); } });
      });
      ScrollTrigger.create({
        trigger: '#services', start: 'top 70%', end: 'bottom 20%',
        onToggle: function (s) {
          stageOn = s.isActive;
          if (activeSvc < 0) activate(0);
          var t = tlFor(activeSvc);
          stageOn ? t.play() : t.pause();
        }
      });
      return function () { tls.forEach(function (t) { t && t.pause(); }); activeSvc = -1; };
    });
    mm.add('(max-width: 1023px)', function () {
      var stage = $('#svc-stage');
      var ios = [];
      vizEls.forEach(function (v, i) {
        gsap.set(v, { clearProps: 'all' });
        svcBlocks[i].querySelector('.svc-slot').appendChild(v);
        var io = new IntersectionObserver(function (en) { var t = tlFor(i); en[0].isIntersecting ? t.play() : t.pause(); }, { threshold: 0.35 });
        io.observe(v); ios.push(io);
      });
      return function () {
        ios.forEach(function (io) { io.disconnect(); });
        vizEls.forEach(function (v) { gsap.set(v, { clearProps: 'all' }); stage.appendChild(v); });
        tls.forEach(function (t) { t && t.pause(); });
      };
    });
  } else {
    mm.add('(max-width: 1023px)', function () {
      vizEls.forEach(function (v, i) { svcBlocks[i].querySelector('.svc-slot').appendChild(v); });
    });
  }

  /* ---------------- AI chapter: live ops log ---------------- */
  ST.resetLog = function () {};
  if ($('#ai-log')) (function () {
    var log = $('#ai-log'), nodes = $$('#flow .node'), idx = 0, timer = null, typer = null, on = false;
    function line(force) {
      var lines = T('ai.log'), L = lines[idx % lines.length];
      idx++;
      var li = document.createElement('li');
      var tm = document.createElement('time'); tm.textContent = L[0];
      var sp = document.createElement('span');
      var caret = document.createElement('i'); caret.className = 'caret';
      li.appendChild(tm); li.appendChild(sp); li.appendChild(caret);
      $$('.caret', log).forEach(function (c) { c.remove(); });
      log.appendChild(li);
      while (log.children.length > 7) log.removeChild(log.firstChild);
      nodes.forEach(function (n, j) { n.classList.toggle('hot', j === L[2]); });
      if (force) { sp.textContent = L[1]; return; }
      var k = 0;
      clearInterval(typer);
      typer = setInterval(function () { k += 1; sp.textContent = L[1].slice(0, k); if (k >= L[1].length) clearInterval(typer); }, 20);
    }
    function start() { if (on) return; on = true; line(); timer = setInterval(line, 2300); }
    function stop() { on = false; clearInterval(timer); clearInterval(typer); }
    ST.resetLog = function () {
      var was = on; stop(); log.innerHTML = ''; idx = 0;
      if (reduced) { for (var i = 0; i < 7; i++) line(true); return; }
      if (was) start();
    };
    if (reduced) { ST.resetLog(); return; }
    ScrollTrigger.create({ trigger: '#ai', start: 'top 70%', end: 'bottom 20%', onToggle: function (s) { s.isActive ? start() : stop(); } });
    gsap.from(nodes, { y: 40, autoAlpha: 0, duration: 1, stagger: 0.07, ease: 'expo.out', scrollTrigger: { trigger: '#flow', start: 'top 82%', once: true } });
  })();

  /* ---------------- studio ---------------- */
  if (!reduced && $('#portrait')) {
    gsap.to('#portrait', { clipPath: 'inset(0% 0 0 0 round 18px)', duration: 1.6, ease: 'expo.inOut', scrollTrigger: { trigger: '#portrait', start: 'top 82%', once: true } });
    gsap.fromTo('#portrait img', { yPercent: -10 }, { yPercent: 2, ease: 'none', scrollTrigger: { trigger: '#portrait', start: 'top bottom', end: 'bottom top', scrub: true } });
  }
  $$('[data-count]').forEach(function (el) {
    var end = +el.getAttribute('data-count'), suf = el.getAttribute('data-suffix') || '';
    if (reduced) return;
    el.textContent = '0' + suf;
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: function () { var o = { v: 0 }; gsap.to(o, { v: end, duration: 2, ease: 'expo.out', onUpdate: function () { el.textContent = Math.round(o.v) + suf; } }); }
    });
  });

  /* ---------------- process ---------------- */
  (function () {
    var steps = $$('#proc li'), fill = $('#proc-fill');
    if (!steps.length || !fill) return;
    if (reduced) { steps.forEach(function (s) { s.classList.add('lit'); }); gsap.set(fill, { scaleX: 1, scaleY: 1 }); return; }
    function lit(p) { steps.forEach(function (s, i) { s.classList.toggle('lit', p >= (i + 0.15) / steps.length); }); }
    mm.add('(min-width: 901px)', function () {
      gsap.set(fill, { scaleY: 1, scaleX: 0 });
      gsap.to(fill, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '#proc', start: 'top 78%', end: 'bottom 55%', scrub: 0.6, onUpdate: function (s) { lit(s.progress); } } });
    });
    mm.add('(max-width: 900px)', function () {
      gsap.set(fill, { scaleX: 1, scaleY: 0 });
      gsap.to(fill, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#proc', start: 'top 75%', end: 'bottom 70%', scrub: 0.6, onUpdate: function (s) { lit(s.progress); } } });
    });
    gsap.from(steps, { y: 50, autoAlpha: 0, duration: 1.1, stagger: 0.1, ease: 'expo.out', scrollTrigger: { trigger: '#proc', start: 'top 85%', once: true } });
  })();

  /* ---------------- faq ---------------- */
  (function () {
    var t = null;
    $$('.qa').forEach(function (qa) {
      var q = $('.q', qa);
      q.addEventListener('click', function () {
        var open = qa.classList.contains('open');
        $$('.qa.open').forEach(function (o) { o.classList.remove('open'); $('.q', o).setAttribute('aria-expanded', 'false'); });
        if (!open) { qa.classList.add('open'); q.setAttribute('aria-expanded', 'true'); }
        clearTimeout(t); t = setTimeout(function () { ScrollTrigger.refresh(); }, 700);
      });
    });
  })();

  /* ---------------- form ---------------- */
  (function () {
    var form = $('#ct-form'), ok = $('#form-ok'), err = $('#form-err');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim(), email = form.elements.email.value.trim(), msg = form.elements.message.value.trim();
      var valid = name.length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && msg.length > 3;
      if (!valid) { err.textContent = T('f.err'); err.classList.add('show'); return; }
      err.classList.remove('show');
      var btn = form.querySelector('button[type=submit]');
      btn.disabled = true; btn.style.opacity = '.6';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('send');
          ok.classList.add('show');
          (window.dataLayer = window.dataLayer || []).push({ event: 'generate_lead', form_name: 'brief', project_type: (form.elements.project && form.elements.project.value) || '', page_language: document.documentElement.lang });
          if (!reduced) gsap.from(ok.children, { y: 24, autoAlpha: 0, stagger: 0.1, duration: 0.9, ease: 'expo.out', delay: 0.15 });
        })
        .catch(function () { err.textContent = T('f.fail'); err.classList.add('show'); btn.disabled = false; btn.style.opacity = ''; });
    });
  })();

  /* ---------------- footer wordmark ---------------- */
  (function () {
    var w = $('#ft-word');
    if (!w) return;
    var txt = w.textContent;
    w.innerHTML = txt.split('').map(function (c) { return c === ' ' ? '<span class="ch">&nbsp;</span>' : '<span class="ch">' + c + '</span>'; }).join('');
    if (reduced) return;
    var chars = $$('.ch', w);
    gsap.from(chars, { yPercent: 110, duration: 1.4, stagger: 0.045, ease: 'expo.out', scrollTrigger: { trigger: w, start: 'top 92%', once: true } });
    if (ST.fine) chars.forEach(function (c) {
      c.addEventListener('mouseenter', function () { gsap.to(c, { y: -18, color: '#e8b866', duration: 0.5, ease: 'expo.out' }); });
      c.addEventListener('mouseleave', function () { gsap.to(c, { y: 0, color: '', duration: 0.9, ease: 'expo.out' }); });
    });
  })();

  /* ---------------- boot ---------------- */
  var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  var timeout = new Promise(function (r) { setTimeout(r, 1800); });
  Promise.race([fontsReady, timeout]).then(function () {
    $$('[data-split]').forEach(initSplit);
    ScrollTrigger.refresh();
    ST.boot(ST.heroIntro);
  });
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  }
  requestAnimationFrame(function () { setTimeout(init, 0); });
})();
