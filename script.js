/* ==========================================================
   GUSTAVOX — Script Principal (v3 — con i18n)
   ==========================================================
   Archivo:      script.js
   Dependencias: Ninguna (Vanilla JS)
   Idiomas:      Español (es), English (en)
   ========================================================== */

(function () {
  'use strict';

  /* ======================================================
       1. CONFIGURACIÓN
       ====================================================== */
  var CONFIG = {
    INITIAL_VISIBLE: 6,
    LOAD_MORE_STEP: 6,
  };

  /* ======================================================
       2. TRADUCCIONES (I18N)
       ====================================================== */
  var I18N = {
    /* --- Navegación --- */
    'nav-home': { es: 'Inicio', en: 'Home' },
    'nav-projects': { es: 'Proyectos', en: 'Projects' },
    'nav-about': { es: 'Acerca de', en: 'About' },

    /* --- Hero --- */
    'hero-subtitle': {
      es: 'Mi colección de proyectos, herramientas y sitios personales.',
      en: 'My collection of projects, tools, and personal sites.',
    },
    'hero-badge': { es: 'Disponible para colaborar', en: 'Available for collaboration' },

    /* --- Sección Proyectos --- */
    'sec-title': { es: 'Proyectos', en: 'Projects' },
    'sec-desc': {
      es: 'Explora mis últimos trabajos y experimentos',
      en: 'Explore my latest work and experiments',
    },

    /* --- Filtros --- */
    'f-all': { es: 'Todos', en: 'All' },
    'f-web': { es: 'Web', en: 'Web' },
    'f-tools': { es: 'Herramientas', en: 'Tools' },
    'f-apps': { es: 'Apps', en: 'Apps' },
    'f-games': { es: 'Juegos', en: 'Games' },

    /* --- Badges de estado --- */
    'b-new': { es: 'Nuevo', en: 'New' },
    'b-dev': { es: 'En desarrollo', en: 'In Development' },
    'b-updated': { es: 'Actualizado', en: 'Updated' },
    'b-beta': { es: 'Beta', en: 'Beta' },
    'b-stable': { es: 'Estable', en: 'Stable' },

    /* --- Texto compartido de tarjetas --- */
    open: { es: 'Abrir', en: 'Open' },

    /* --- Tarjeta 1: Portfolio Web --- */
    'c1-title': { es: 'Portfolio Web', en: 'Web Portfolio' },
    'c1-desc': {
      es: 'Sitio web personal con proyectos, artículos técnicos y documentación de herramientas de desarrollo.',
      en: 'Personal website with projects, technical articles, and development tool documentation.',
    },
    'c1-aria': { es: 'Abrir Portfolio Web', en: 'Open Web Portfolio' },

    /* --- Tarjeta 12: Palas y Paletas --- */
    'c12-title': { es: 'Palas y Paletas', en: 'Palas y Paletas' },
    'c12-desc': {
      es: 'Juego 2D desarrollado en Python con mecánicas de paletas y física de pelota, ideal para aprender programación orientada a objetos y desarrollo de videojuegos.',
      en: '2D game built in Python with paddle mechanics and ball physics, great for learning object-oriented programming and game development.',
    },
    'c12-aria': { es: 'Abrir Palas y Paletas', en: 'Open Palas y Paletas' },

    /* --- Tarjeta 13: Dosis diaria de Nietzsche --- */
    'c13-title': { es: 'Dosis diaria de Nietzsche', en: 'Daily Dose of Nietzsche' },
    'c13-desc': {
      es: 'Proyecto web que presenta una frase diaria de Friedrich Nietzsche, explorando su filosofía a través de citas seleccionadas para la reflexión cotidiana.',
      en: 'Web project that presents a daily quote from Friedrich Nietzsche, exploring his philosophy through curated quotes for everyday reflection.',
    },
    'c13-aria': { es: 'Abrir Dosis diaria de Nietzsche', en: 'Open Daily Dose of Nietzsche' },

    /* --- Tarjeta 10: Cohorte 2026 --- */
    'c10-title': { es: 'Cohorte 2026', en: 'Cohort 2026' },
    'c10-desc': {
      es: 'Dashboard de distribución de grupos: 60 estudiantes, 21 grupos formados, asignaciones pendientes y métricas de actividad.',
      en: 'Group distribution dashboard: 60 students, 21 groups formed, pending assignments, and activity metrics.',
    },
    'c10-aria': { es: 'Abrir Cohorte 2026', en: 'Open Cohort 2026' },

    /* --- Tarjeta 11: Scratch Game --- */
    'c11-title': { es: 'Scratch Game', en: 'Scratch Game' },
    'c11-desc': {
      es: 'Juego interactivo desarrollado en Scratch con lógica de programación por bloques, ideal para aprender y experimentar.',
      en: 'Interactive game built with Scratch using block-based programming logic, great for learning and experimenting.',
    },
    'c11-aria': { es: 'Abrir Scratch Game', en: 'Open Scratch Game' },

    /* --- Tarjeta 14: Barra de Progreso del Año --- */
    'c14-title': { es: 'Barra de Progreso del Año', en: 'Year Progress Bar' },
    'c14-desc': {
      es: 'Visualización en tiempo real del avance del año: muestra en qué momento del año te encontrás, cuánto tiempo falta y el porcentaje completado.',
      en: "Real-time visualization of the year's progress: shows where you are in the year, how much time is left, and the percentage completed.",
    },
    'c14-aria': { es: 'Abrir Barra de Progreso del Año', en: 'Open Year Progress Bar' },

    /* --- Tarjeta 2: TaskFlow --- */
    'c2-title': { es: 'TaskFlow', en: 'TaskFlow' },
    'c2-desc': {
      es: 'Aplicación de gestión de tareas con tableros Kanban, etiquetas inteligentes y seguimiento de productividad.',
      en: 'Task management app with Kanban boards, smart labels, and productivity tracking.',
    },
    'c2-aria': { es: 'Abrir TaskFlow', en: 'Open TaskFlow' },

    /* --- Tarjeta 3: CodeSnippets --- */
    'c3-title': { es: 'CodeSnippets', en: 'CodeSnippets' },
    'c3-desc': {
      es: 'Biblioteca personal de fragmentos de código organizados por lenguaje, framework y categoría.',
      en: 'Personal library of code snippets organized by language, framework, and category.',
    },
    'c3-aria': { es: 'Abrir CodeSnippets', en: 'Open CodeSnippets' },

    /* --- Tarjeta 4: PixelLab --- */
    'c4-title': { es: 'PixelLab', en: 'PixelLab' },
    'c4-desc': {
      es: 'Editor y generador de pixel art en el navegador con herramientas de dibujo, paletas y exportación.',
      en: 'In-browser pixel art editor and generator with drawing tools, palettes, and export.',
    },
    'c4-aria': { es: 'Abrir PixelLab', en: 'Open PixelLab' },

    /* --- Tarjeta 5: DevMetrics --- */
    'c5-title': { es: 'DevMetrics', en: 'DevMetrics' },
    'c5-desc': {
      es: 'Dashboard interactivo de métricas para desarrolladores con estadísticas de código y rendimiento.',
      en: 'Interactive metrics dashboard for developers with code statistics and performance tracking.',
    },
    'c5-aria': { es: 'Abrir DevMetrics', en: 'Open DevMetrics' },

    /* --- Tarjeta 6: CloudSync --- */
    'c6-title': { es: 'CloudSync', en: 'CloudSync' },
    'c6-desc': {
      es: 'Herramienta de sincronización y respaldo automático en la nube para proyectos de desarrollo.',
      en: 'Cloud sync and automatic backup tool for development projects.',
    },
    'c6-aria': { es: 'Abrir CloudSync', en: 'Open CloudSync' },

    /* --- Tarjeta 7: RetroPong --- */
    'c7-title': { es: 'RetroPong', en: 'RetroPong' },
    'c7-desc': {
      es: 'Clon del clásico Pong con estética retro, partículas y efectos de sonido generados proceduralmente.',
      en: 'Classic Pong clone with retro aesthetics, particles, and procedurally generated sound effects.',
    },
    'c7-aria': { es: 'Abrir RetroPong', en: 'Open RetroPong' },

    /* --- Tarjeta 8: Toolbox --- */
    'c8-title': { es: 'Toolbox', en: 'Toolbox' },
    'c8-desc': {
      es: 'Suite de utilidades para desarrolladores: formateadores, conversores, generadores y calculadoras.',
      en: 'Developer utilities suite: formatters, converters, generators, and calculators.',
    },
    'c8-aria': { es: 'Abrir Toolbox', en: 'Open Toolbox' },

    /* --- Tarjeta 9: Blog Técnico --- */
    'c9-title': { es: 'Blog Técnico', en: 'Technical Blog' },
    'c9-desc': {
      es: 'Blog personal con artículos sobre desarrollo web, arquitectura de software y mejores prácticas.',
      en: 'Personal blog with articles on web development, software architecture, and best practices.',
    },
    'c9-aria': { es: 'Abrir Blog Técnico', en: 'Open Technical Blog' },

    /* --- Ver más --- */
    'load-more': { es: 'Ver más proyectos', en: 'View more projects' },

    /* --- Contador --- */
    'count-all': { es: '{n} proyectos en total', en: '{n} projects in total' },
    'count-filter': { es: '{n} de {total} proyectos visibles', en: '{n} of {total} projects visible' },

    /* --- Vacío --- */
    'empty-msg': { es: 'No hay proyectos en esta categoría aún.', en: 'No projects in this category yet.' },

    /* --- Acerca de --- */
    'about-title': { es: 'Acerca de', en: 'About' },
    'about-p1': {
      es: 'Desarrollador apasionado por crear herramientas útiles y experiencias digitales memorables. Este sitio funciona como el índice central de todos mis proyectos personales, experimentos y recursos de desarrollo.',
      en: 'Developer passionate about creating useful tools and memorable digital experiences. This site serves as the central index for all my personal projects, experiments, and development resources.',
    },
    'about-p2': {
      es: 'Cada proyecto refleja una idea explorada, un problema resuelto o una tecnología aprendida.',
      en: 'Each project reflects an idea explored, a problem solved, or a technology learned.',
    },

    /* --- Metadatos de página --- */
    'page-title': {
      es: 'Gustavox — Proyectos',
      en: 'Gustavox — Projects',
    },
    'page-desc': {
      es: 'Gustavox — Colección de proyectos, herramientas y sitios personales.',
      en: 'Gustavox — Collection of projects, tools, and personal sites.',
    },
  };

  /* ======================================================
       3. ESTADO GLOBAL
       ====================================================== */
  var currentLang = 'es';
  var currentFilter = 'all';

  /* ======================================================
       4. PIXEL FONT (5x7 por carácter)
       ====================================================== */
  var PIXEL_FONT = {
    G: ['01110', '10001', '10000', '10111', '10001', '10001', '01110'],
    U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
    S: ['01110', '10001', '10000', '01110', '00001', '10001', '01110'],
    T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
    A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
    V: ['10001', '10001', '10001', '10001', '01010', '01010', '00100'],
    O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
    X: ['10001', '10001', '01010', '00100', '01010', '10001', '10001'],
  };

  var CHAR_W = 5,
    CHAR_H = 7,
    CHAR_GAP = 1;

  function buildShadows(rows) {
    var s = [];
    for (var y = 0; y < rows.length; y++) {
      for (var x = 0; x < rows[y].length; x++) {
        if (rows[y][x] === '1') s.push(x + 'px ' + y + 'px 0 0 currentColor');
      }
    }
    return s.join(', ');
  }

  function createPixelTitle(text, container) {
    var offsetX = 0;
    var chars = text.toUpperCase().split('');
    chars.forEach(function (ch, i) {
      var data = PIXEL_FONT[ch];
      if (!data) return;
      var span = document.createElement('span');
      span.className = 'pixel-char';
      span.setAttribute('aria-hidden', 'true');
      span.style.boxShadow = buildShadows(data);
      span.style.left = offsetX + 'px';
      span.style.animationDelay = 0.5 + i * 0.12 + 's';
      container.appendChild(span);
      offsetX += CHAR_W;
      if (i < chars.length - 1) offsetX += CHAR_GAP;
    });
    container.style.width = offsetX + 'px';
    container.style.height = CHAR_H + 'px';
    var wrapper = container.parentElement;
    if (wrapper) {
      var ps = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--ps'), 10) || 5;
      wrapper.style.width = offsetX * ps + 'px';
      wrapper.style.height = CHAR_H * ps + 'px';
    }
  }

  /* ======================================================
       5. SISTEMA DE IDIOMA
       ====================================================== */
  function detectLanguage() {
    var saved = localStorage.getItem('gustavox-lang');
    if (saved === 'es' || saved === 'en') return saved;
    var sys = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return sys.indexOf('es') === 0 ? 'es' : 'en';
  }

  function applyLanguage(lang) {
    currentLang = lang;

    document.body.classList.add('lang-fading');

    setTimeout(function () {
      document.documentElement.lang = lang;

      if (I18N['page-title']) {
        document.title = I18N['page-title'][lang];
      }

      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && I18N['page-desc']) {
        metaDesc.setAttribute('content', I18N['page-desc'][lang]);
      }

      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (I18N[key] && I18N[key][lang] !== undefined) {
          el.textContent = I18N[key][lang];
        }
      });

      document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-aria');
        if (I18N[key] && I18N[key][lang] !== undefined) {
          el.setAttribute('aria-label', I18N[key][lang]);
        }
      });

      updateCountText();
      updateSwitcherUI(lang);
      localStorage.setItem('gustavox-lang', lang);

      requestAnimationFrame(function () {
        document.body.classList.remove('lang-fading');
      });
    }, 160);
  }

  function updateSwitcherUI(lang) {
    var btnES = document.getElementById('langES');
    var btnEN = document.getElementById('langEN');
    if (btnES) btnES.classList.toggle('active', lang === 'es');
    if (btnEN) btnEN.classList.toggle('active', lang === 'en');
  }

  function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        if (lang && lang !== currentLang) {
          applyLanguage(lang);
        }
      });
    });
  }

  /* ======================================================
       6. CONTADOR DE PROYECTOS
       ====================================================== */
  function updateCountText() {
    var countEl = document.getElementById('projectsCount');
    if (!countEl) return;

    var allCards = document.querySelectorAll('.card');
    var filtered = getFilteredCards(allCards);
    var total = filtered.length;
    var visible = 0;
    filtered.forEach(function (c) {
      if (!c.classList.contains('card--hidden')) visible++;
    });

    if (currentFilter === 'all') {
      countEl.textContent = I18N['count-all'][currentLang].replace('{n}', total);
    } else {
      countEl.textContent = I18N['count-filter'][currentLang].replace('{n}', visible).replace('{total}', total);
    }
  }

  /* ======================================================
       7. FILTROS POR CATEGORÍA
       ====================================================== */
  function initFilters() {
    var filterBtns = document.querySelectorAll('.filters__btn');
    var cards = document.querySelectorAll('.card');
    var emptyEl = document.getElementById('projectsEmpty');
    var loadMoreWrap = document.getElementById('loadMoreWrap');

    if (!filterBtns.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');
        if (filter === currentFilter) return;

        filterBtns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        currentFilter = filter;
        applyFilter(cards, emptyEl, loadMoreWrap);
      });
    });

    applyFilter(cards, emptyEl, loadMoreWrap);
  }

  function applyFilter(cards, emptyEl, loadMoreWrap) {
    var shownCount = 0;

    cards.forEach(function (card) {
      var categories = card.getAttribute('data-category') || '';
      var match = currentFilter === 'all' || categories.split(/\s+/).indexOf(currentFilter) !== -1;
      card.classList.toggle('card--filtered-out', !match);
      if (!match) {
        card.classList.remove('card--visible');
        card.classList.add('card--entering');
      }
    });

    var filtered = getFilteredCards(cards);
    var totalFiltered = filtered.length;

    filtered.forEach(function (card, index) {
      if (index < CONFIG.INITIAL_VISIBLE) {
        card.classList.remove('card--hidden');
        shownCount++;
        setTimeout(function () {
          card.classList.remove('card--entering');
          card.classList.add('card--visible');
        }, 60 * index);
      } else {
        card.classList.add('card--hidden');
        card.classList.remove('card--visible');
        card.classList.add('card--entering');
      }
    });

    updateCountText();

    if (loadMoreWrap) {
      loadMoreWrap.classList.toggle('hidden', totalFiltered <= CONFIG.INITIAL_VISIBLE);
    }

    if (emptyEl) {
      emptyEl.hidden = totalFiltered > 0;
    }
  }

  function getFilteredCards(allCards) {
    var arr = [];
    allCards.forEach(function (card) {
      if (!card.classList.contains('card--filtered-out')) arr.push(card);
    });
    return arr;
  }

  /* ======================================================
       8. BOTÓN "VER MÁS"
       ====================================================== */
  function initLoadMore() {
    var btn = document.getElementById('loadMoreBtn');
    var cards = document.querySelectorAll('.card');
    var loadMoreWrap = document.getElementById('loadMoreWrap');

    if (!btn) return;

    btn.addEventListener('click', function () {
      var filtered = getFilteredCards(cards);
      var hiddenCards = [];

      filtered.forEach(function (card) {
        if (card.classList.contains('card--hidden')) hiddenCards.push(card);
      });

      var toShow = hiddenCards.slice(0, CONFIG.LOAD_MORE_STEP);

      toShow.forEach(function (card, i) {
        setTimeout(function () {
          card.classList.remove('card--hidden');
          void card.offsetWidth;
          card.classList.remove('card--entering');
          card.classList.add('card--visible');
        }, 80 * i);
      });

      if (hiddenCards.length <= CONFIG.LOAD_MORE_STEP && loadMoreWrap) {
        loadMoreWrap.classList.add('hidden');
      }

      setTimeout(updateCountText, 80 * toShow.length + 50);
    });
  }

  /* ======================================================
       9. SCROLL REVEAL
       ====================================================== */
  function initReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    document.querySelectorAll('.card.reveal').forEach(function (card, i) {
      card.style.setProperty('--ci', i);
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ======================================================
       10. NAVEGACIÓN
       ====================================================== */
  function initNavbar() {
    var navbar = document.getElementById('navbar');
    var navLinks = document.querySelectorAll('.navbar__link');
    var sections = document.querySelectorAll('section[id]');
    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('navLinks');
    var overlay = document.getElementById('navOverlay');

    if (!navbar) return;

    window.addEventListener(
      'scroll',
      function () {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      },
      { passive: true },
    );

    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
          }
        });
      },
      { threshold: 0.25, rootMargin: '-80px 0px -50% 0px' },
    );

    sections.forEach(function (sec) {
      sectionObserver.observe(sec);
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navbar.offsetHeight - 10;
        window.scrollTo({ top: top, behavior: 'smooth' });
        closeMobileMenu();
      });
    });

    function openMobileMenu() {
      menu.classList.add('open');
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (toggle) {
      toggle.addEventListener('click', function () {
        menu.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
      });
    }

    if (overlay) overlay.addEventListener('click', closeMobileMenu);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) closeMobileMenu();
    });
  }

  /* ======================================================
       11. BOTÓN VOLVER ARRIBA
       ====================================================== */
  function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener(
      'scroll',
      function () {
        btn.classList.toggle('visible', window.scrollY > 500);
      },
      { passive: true },
    );

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ======================================================
       12. AÑO ACTUAL EN EL FOOTER
       ====================================================== */
  function setCurrentYear() {
    var el = document.getElementById('currentYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ======================================================
       13. GLOW QUE SIGUE AL CURSOR
       ====================================================== */
  function initCardGlow() {
    document.querySelectorAll('.card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', e.clientX - rect.left + 'px');
        card.style.setProperty('--my', e.clientY - rect.top + 'px');
      });
    });
  }

  /* ======================================================
       14. INICIALIZACIÓN
       ====================================================== */
  document.addEventListener('DOMContentLoaded', function () {
    currentLang = detectLanguage();

    var pixelContainer = document.getElementById('pixelTitle');
    if (pixelContainer) createPixelTitle('Gustavox', pixelContainer);

    applyLanguage(currentLang);

    setCurrentYear();
    initReveal();
    initNavbar();
    initBackToTop();
    initCardGlow();
    initFilters();
    initLoadMore();
    initLanguageSwitcher();
  });
})();
