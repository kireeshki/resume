const coursesData = [
  {
    name: "Программирование на C++",
    platform: "Код Будущего",
    desc: "Изучение основ языков C и C++, создание простых приложений и алгоритмов на C и C++.",
    tags: ["C/C++"],
    certImg: "images/certs/certKodBud.png",
    link: "etc/certfiles/certKodBud.pdf",
  },
  {
    name: "Go-1: шаг за шагом",
    platform: "Яндекс Лицей",
    desc: "Изучение основ языка Go, ООП в Go, обработки ошибок, инструментов тестирования. Создание простых алгоритмов на Go.",
    tags: ["Go"],
    certImg: "images/certs/certYaGo.png",
    link: "etc/certfiles/certYaGo.pdf",
  },
  {
    name: "Rust 🦀: Начальный уровень",
    platform: "Stepik",
    desc: "Изучение основ языка Rust, проведение операций с бинарными данными, создание различных алгоритмов на Rust.",
    tags: ["Rust"],
    certImg: "images/certs/certStepikRust.png",
    link: "etc/certfiles/certStepikRust.pdf",
  },
  {
    name: "Введение в ИИ-агенты",
    platform: "СберУниверситет",
    desc: "Базовые знания об ИИ-агентах, их внедрении, и правильном их использовании в различных бизнес-задачах.",
    tags: ["AI"],
    certImg: "images/certs/certSberAiAgents.png",
    link: "images/certs/certSberAiAgents.png",
  },
  {
    name: "Работа с LLM GigaChat",
    platform: "СберУниверситет",
    desc: "Базовые знания о работе с LLM GigaChat от Сбер.",
    tags: ["AI"],
    certImg: "images/certs/certSberGigaChat.png",
    link: "images/certs/certSberGigaChat.png",
  },
  {
    name: "Генеративное искусство",
    platform: "СберУниверситет",
    desc: "Базовые знания о работе с ML моделями разного рода для создания медиа и текста.",
    tags: ["AI"],
    certImg: "images/certs/certSberAiArt.png",
    link: "images/certs/certSberAiArt.png",
  },
  {
    name: "Основы веб-верстки с HTML и CSS",
    platform: "Stepik",
    desc: "Изучение основ веб-верстки с помощью HTML и CSS.",
    tags: ["HTML/CSS", "Веб-разработка"],
    certImg: "images/certs/certStepikWeb.png",
    link: "etc/certfiles/certStepikWeb.pdf",
  },
  {
    name: "Основы Git и GitHub",
    platform: "Stepik",
    desc: "Изучение основ работы с CLI Git и платформой Github.",
    tags: ["Git"],
    certImg: "images/certs/certStepikGit.png",
    link: "etc/certfiles/certStepikGit.pdf",
  },
];

const projectsData = [
  {
    mdk: "МДК 01.01",
    mdkTitle: "Разработка программных модулей",
    projects: [
      {
        name: "Desktop CV App",
        desc: "Настольное приложение на Python + PyQt с применением компьютерного зрения (OpenCV) для анализа изображений. Реализован полный цикл: от загрузки изображений до предобработки, детекции объектов и визуализации результатов. Также создана интерактивная новелла на Twine, документирующая весь процесс производства приложения — от идеи до финального релиза.",
        role: "Разработчик, исследователь",
        tech: ["Python", "PyQt", "OpenCV", "Twine"],
        media: "images/leak.jpg",
        link: "#",
      },
    ],
  },
  {
    mdk: "МДК 01.02",
    mdkTitle: "Поддержка и тестирование",
    projects: [
      {
        name: "Unit & Integration Tests Suite",
        desc: "Комплект автоматических тестов (pytest/unittest) для приложений одногруппников. Покрытие ключевых модулей, формирование отчёта о покрытии кода, интеграционные тесты для API-эндпоинтов.",
        role: "Тестировщик, разработчик тестов",
        tech: ["pytest", "unittest", "coverage"],
        media: "images/leak.jpg",
        link: "#",
      },
    ],
  },
  {
    mdk: "МДК 01.03",
    mdkTitle: "Разработка мобильных приложений",
    projects: [
      {
        name: "Placeholder",
        desc: "Placeholder",
        role: "Мобильный разработчик",
        tech: ["Kivy", "Python", "Android", "APK"],
        media: "images/leak.jpg",
        link: "#",
      },
    ],
  },
  {
    mdk: "МДК 01.04",
    mdkTitle: "Системное программирование",
    projects: [
      {
        name: "Dockerized Desktop App",
        desc: "Создание Docker-образа для запуска настольного приложения. Гарантированный запуск в любом Linux-окружении без установки зависимостей. Оптимизация размера образа, многоэтапная сборка.",
        role: "DevOps-инженер",
        tech: ["Docker", "Dockerfile", "Linux", "Bash"],
        media: "images/leak.jpg",
        link: "#",
      },
    ],
  },
  {
    mdk: "МДК 11.01",
    mdkTitle: "Технология разработки и защиты БД",
    projects: [
      {
        name: "Multi-DB CRUD System",
        desc: "Приложение с поддержкой SQLite, MySQL, PostgreSQL. Реализованы CRUD-операции, миграции schema, параметризованные запросы для защиты от SQL-инъекций. Встроена система документооборота по практике — создание, согласование, архивирование документов с привязкой к пользователям и отделам.",
        role: "Разработчик, администратор БД",
        tech: ["SQLite", "MySQL", "PostgreSQL", "Python", "SQLAlchemy"],
        media: "images/leak.jpg",
        link: "#",
      },
    ],
  },
  {
    mdk: "МДК 02.01",
    mdkTitle: "Технология разработки ПО",
    projects: [
      {
        name: "UML & ERD-диаграммы",
        desc: "Разработка набора диаграмм: UML (use case, классы, последовательности), ERD-модель данных, архитектурные схемы для учебных проектов. Оформлено в draw.io и PlantUML.",
        role: "Системный аналитик",
        tech: ["draw.io", "PlantUML", "UML", "ERD"],
        media: "images/leak.jpg",
        link: "#",
      },
    ],
  },
  {
    mdk: "МДК 02.02",
    mdkTitle: "Инструментальные средства разработки",
    projects: [
      {
        name: "я не успеваю найти сертификаты",
        desc: "ой",
        role: "Участник, разработчик",
        tech: ["Python", "Git", "Figma"],
        media: "images/leak.jpg",
        link: "#",
      },
    ],
  },
  {
    mdk: "МДК 02.03",
    mdkTitle: "Математическое моделирование",
    projects: [
      {
        name: "ML Experiments",
        desc: "Реализация МНК (метод наименьших квадратов), логистической регрессии с нуля, обучение нейросети на текстовых данных (NLP). Визуализация графиков с помощью matplotlib и seaborn.",
        role: "Исследователь, разработчик",
        tech: ["Python", "NumPy", "matplotlib", "seaborn", "scikit-learn"],
        media: "images/leak.jpg",
        link: "#",
      },
    ],
  },
  {
    mdk: "МДК 12.01",
    mdkTitle: "Python для автоматизации ИТ-инфраструктуры",
    projects: [
      {
        name: "Vision-Based Automation",
        desc: "Обучение CNN на изображениях цифрового производства (дефекты, классификация деталей). Backend-сервис на Flask/FastAPI для приёма изображений и возврата результатов. Интеграция с камерами через RTSP-потоки.",
        role: "ML-инженер, backend-разработчик",
        tech: ["PyTorch", "Flask", "FastAPI", "OpenCV", "CNN"],
        media: "images/ximi.png",
        link: "#",
      },
    ],
  },
];

const roadmapData = [
  {
    icon: "fa-solid fa-keyboard",
    title: "Языки программирования",
    skills: [
      { name: "Python", level: "basic" },
      { name: "C", level: "basic" },
      { name: "C++", level: "basic" },
      { name: "Haxe", level: "intermediate" },
      { name: "Lua", level: "intermediate" },
      { name: "Go", level: "basic" },
      { name: "Java", level: "basic" },
      { name: "JavaScript", level: "basic" },
      { name: "C#", level: "basic" },
    ],
  },
  {
    icon: "fa-solid fa-boxes-stacked",
    title: "Backend и кроссплатформенная разработка",
    skills: [
      { name: "SDL", level: "basic" },
      { name: "Qt", level: "basic" },
      { name: "Win32 API", level: "basic" },
      { name: "SQLite", level: "intermediate" },
      { name: "PostgreSQL", level: "basic" },
      { name: "MySQL", level: "basic" },
      { name: "MariaSQL", level: "basic" },
      { name: "HaxeUI", level: "intermediate" },
      { name: "OpenFL", level: "intermediate" },
    ],
  },
  {
    icon: "fa-solid fa-gamepad",
    title: "Игровые движки и библиотеки для создания игр",
    skills: [
      { name: "HaxeFlixel", level: "basic" },
      { name: "Heaps", level: "basic" },
      { name: "Godot", level: "basic" },
    ],
  },
  {
    icon: "fa-brands fa-docker",
    title: "DevOps и системное администрирование",
    skills: [
      { name: "Docker", level: "basic" },
      { name: "Linux", level: "basic" },
      { name: "Windows", level: "intermediate" },
      { name: "Shell-скриптинг", level: "basic" },
      { name: "Batch-скриптинг", level: "basic" },
      { name: "Git", level: "intermediate" },
    ],
  },
  {
    icon: "fa-solid fa-database",
    title: "Базы данных",
    skills: [
      { name: "Проектирование", level: "basic" },
      { name: "Нормализация", level: "intermediate" },
      { name: "Безопасность", level: "basic" },
      { name: "Миграции", level: "basic" },
    ],
  },
  {
    icon: "fa-solid fa-eye",
    title: "ML / CV",
    skills: [
      { name: "Обучение LLM", level: "basic" },
      { name: "Обучение CV ML-моделей", level: "basic" },
    ],
  },
];

const levelMap = {
  advanced: { cls: "level-advanced", label: "Продвинутый" },
  intermediate: { cls: "level-intermediate", label: "Средний" },
  basic: { cls: "level-basic", label: "Базовый" },
};

const sdlcData = [
  {
    num: "01",
    title: "Планирование и анализ требований",
    desc: "Определение целей проекта, анализ заинтересованных сторон, сбор первичных требований и оценка feasability.",
    tools: ["Notion", "Google Forms", "Miro"],
  },
  {
    num: "02",
    title: "Определение требований",
    desc: "Формализация требований в SRS-документы, построение диаграмм потоков данных и пользовательских сценариев.",
    tools: ["Markdown / Word", "PlantUML", "draw.io"],
  },
  {
    num: "03",
    title: "Проектирование",
    desc: "Создание архитектурных схем, прототипов UI, моделирование базы данных (ERD), проектирование API.",
    tools: ["draw.io", "Lucidchart", "Figma", "Mermaid"],
  },
  {
    num: "04",
    title: "Разработка",
    desc: "Написание кода, реализация бизнес-логики, работа с версионированием, код-ревью.",
    tools: [
      "Python",
      "PyQt/PySide",
      "FastAPI",
      "OpenCV",
      "Git",
      "VS Code",
      "Linux",
    ],
  },
  {
    num: "05",
    title: "Тестирование",
    desc: "Модульные и интеграционные тесты, ручное тестирование, анализ покрытия кода, отчётность.",
    tools: ["pytest", "unittest", "Postman", "Ручное тестирование"],
  },
  {
    num: "06",
    title: "Развёртывание",
    desc: "Контейнеризация, настройка окружения, деплой на целевые сервера, проверка работоспособности.",
    tools: ["Docker", "GitHub Pages", "systemd", "Bash-скрипты"],
  },
  {
    num: "07",
    title: "Поддержка и сопровождение",
    desc: "Мониторинг работы, исправление багов, обновление зависимостей, оптимизация производительности.",
    tools: ["journalctl", "Bash-мониторинг", "Docker update"],
  },
  {
    num: "08",
    title: "«Смерть» ПО",
    desc: "Архивация кодовой базы, миграция данных, документирование решений, уведомление пользователей.",
    tools: ["tar/gzip", "Документация миграции", "Email-шаблоны"],
  },
];

const langSkills = [
  "Python",
  "C",
  "C++",
  "Haxe",
  "Lua",
  "Go",
  "Java",
  "JavaScript",
  "C#",
];
const toolSkills = [
  "Docker",
  "Git",
  "Linux",
  "Windows",
  "SDL",
  "Qt",
  "OpenFL",
  "MariaSQL",
  "PostgreSQL",
  "MySQL",
  "SQLite",
];
const softSkills = [
  "Дисциплина",
  "Аналитическое мышление",
  "Документирование",
  "Обучаемость",
  "Коммуникабельность",
  "Дружелюбие",
  "Терпеливость",
  "Работа в команде",
];

// отрисовка

function renderCourses(filter = "Все") {
  const grid = document.getElementById("coursesGrid");
  const filtered =
    filter === "Все"
      ? coursesData
      : coursesData.filter((c) => c.tags.includes(filter));
  grid.innerHTML = filtered
    .map(
      (c, i) => `
            <article class="card fade-up" style="transition-delay:${i * 0.08}s">
              <img src="${c.certImg}" alt="Сертификат: ${c.name}" class="cert-thumb" loading="lazy"
                  onclick="openCertModal('${c.certImg}')" role="button" tabindex="0" aria-label="Увеличить сертификат">
              <div class="p-5">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md" style="background:var(--glow);color:var(--accent);">${c.platform}</span>
                </div>
                <h3 class="font-bold text-base mb-2">${c.name}</h3>
                <p class="course-desc mb-3">${c.desc}</p>
                <div class="flex flex-wrap gap-1.5 mb-3">${c.tags.map((t) => `<span class="tool-tag">${t}</span>`).join("")}</div>
                <a href="${c.link}" class="text-sm font-bold inline-flex items-center gap-1" style="color:var(--accent);text-decoration:none;" target="_blank" rel="noopener">Файл сертификата <i class="fa-solid fa-arrow-right text-xs"></i></a>
              </div>
            </article>
          `,
    )
    .join("");
  observeFadeUps();
}

function renderCourseFilters() {
  const container = document.getElementById("courseFilters");
  const allTags = [
    "Все",
    "Rust",
    "Go",
    "C/C++",
    "Git",
    "HTML/CSS",
    "Веб-разработка",
    "AI",
  ];
  container.innerHTML = allTags
    .map(
      (t) =>
        `<button class="filter-btn ${t === "Все" ? "active" : ""}" data-filter="${t}">${t}</button>`,
    )
    .join("");
  container.addEventListener("click", (e) => {
    if (!e.target.classList.contains("filter-btn")) return;
    container
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    renderCourses(e.target.dataset.filter);
  });
}

// адский рендер херни
function renderProjects() {
  const container = document.getElementById("projectsContainer");
  container.innerHTML = projectsData
    .map(
      (mdk, mi) => `
<div class="mdk-section fade-up" style="transition-delay:${mi * 0.05}s">
<div class="mdk-label">${mdk.mdk}</div>
<h3 class="font-bold text-lg mb-4">${mdk.mdkTitle}</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
${mdk.projects
  .map(
    (p) => `
<article class="card overflow-hidden">
<img src="${p.media}" alt="${p.name}" class="project-media" loading="lazy">
<div class="p-5">
  <h4 class="font-bold text-base mb-2">${p.name}</h4>
  <p class="course-desc mb-3">${p.desc}</p>
  <div class="flex items-center gap-2 mb-2 text-xs" style="color:var(--fg2);"><i class="fa-solid fa-user-gear" style="color:var(--accent);"></i> ${p.role}</div>
  <div class="flex flex-wrap gap-1.5 mb-4">${p.tech.map((t) => `<span class="tool-tag">${t}</span>`).join("")}</div>
  <a href="${p.link}" class="btn-accent text-sm" style="padding:.5rem 1.2rem;" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Репозиторий</a>
</div>
</article>
`,
  )
  .join("")}
</div>
</div>
`,
    )
    .join("");
}

function renderRoadmap() {
  const grid = document.getElementById("roadmapGrid");
  grid.innerHTML = roadmapData
    .map(
      (cat, i) => `
<div class="card p-5 fade-up" style="transition-delay:${i * 0.08}s">
<div class="roadmap-cat" style="margin-bottom:0;">
<h4><i class="${cat.icon}"></i> ${cat.title}</h4>
<div>${cat.skills
        .map((s) => {
          const lv = levelMap[s.level];
          return `<div class="skill-row"><span class="skill-row-name">${s.name}</span><span class="level-badge ${lv.cls}">${lv.label}</span></div>`;
        })
        .join("")}</div>
</div>
</div>
`,
    )
    .join("");
}

function renderSDLC() {
  const timeline = document.getElementById("sdlcTimeline");
  timeline.innerHTML = sdlcData
    .map(
      (stage, i) => `
<div class="sdlc-item fade-up" style="transition-delay:${i * 0.06}s" data-sdlc="${i}">
<div class="sdlc-dot">${stage.num}</div>
<div class="sdlc-header" onclick="toggleSDLC(${i})" role="button" tabindex="0" aria-expanded="false" aria-label="${stage.title}">
<h4>${stage.title}</h4>
<i class="fa-solid fa-chevron-down sdlc-arrow"></i>
</div>
<div class="sdlc-body">
<p>${stage.desc}</p>
<div class="flex flex-wrap gap-1.5 mt-2">${stage.tools.map((t) => `<span class="tool-tag">${t}</span>`).join("")}</div>
</div>
</div>
`,
    )
    .join("");
}

function toggleSDLC(idx) {
  const item = document.querySelector(`.sdlc-item[data-sdlc="${idx}"]`);
  const wasOpen = item.classList.contains("open");
  document.querySelectorAll(".sdlc-item").forEach((el) => {
    el.classList.remove("open");
    el.querySelector(".sdlc-header").setAttribute("aria-expanded", "false");
  });
  if (!wasOpen) {
    item.classList.add("open");
    item.querySelector(".sdlc-header").setAttribute("aria-expanded", "true");
  }
}

function renderSkills() {
  const t = (arr) =>
    arr.map((s) => `<span class="skill-tag">${s}</span>`).join("");
  document.getElementById("langSkills").innerHTML = t(langSkills);
  document.getElementById("toolSkills").innerHTML = t(toolSkills);
  document.getElementById("softSkills").innerHTML = t(softSkills);
}

// интерактивные элементы

const themeFab = document.getElementById("themeFab");
const themeIcon = document.getElementById("themeIcon");
function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
  updateThemeFab(t);
}
function updateThemeFab(t) {
  if (t === "dark") {
    themeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>';
    themeFab.querySelector(".theme-label").firstChild.textContent =
      "Тёмная тема\n";
  } else {
    themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
    themeFab.querySelector(".theme-label").firstChild.textContent =
      "Светлая тема\n";
  }
}
themeFab.addEventListener("click", () => {
  setTheme(
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark",
  );
});
setTheme(localStorage.getItem("theme") || "dark");

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
  hamburger.classList.add("open");
  mobileMenu.classList.add("open");
  menuOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeMenu() {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
  menuOverlay.classList.remove("show");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", () => {
  mobileMenu.classList.contains("open") ? closeMenu() : openMenu();
});
menuOverlay.addEventListener("click", closeMenu);

document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const navbar = document.getElementById("navbar");
window.addEventListener(
  "scroll",
  () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  },
  { passive: true },
);

const sections = document.querySelectorAll("section[id]");
const allNavSelectors =
  ".nav-link[data-section], .mobile-nav-link[data-section]";

const observerNav = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document
          .querySelectorAll(allNavSelectors)
          .forEach((l) => l.classList.remove("active"));
        const id = entry.target.id;
        document
          .querySelectorAll(`[data-section="${id}"]`)
          .forEach((l) => l.classList.add("active"));
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" },
);
sections.forEach((s) => observerNav.observe(s));

function observeFadeUps() {
  const els = document.querySelectorAll(".fade-up:not(.visible)");
  const obs = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  els.forEach((el) => obs.observe(el));
}

function openCertModal(src) {
  const certModal = document.getElementById("certModal");
  const certModalImg = document.getElementById("certModalImg");
  certModalImg.src = src;
  certModal.classList.add("show");
  document.body.style.overflow = "hidden";

  certModal.addEventListener("click", (e) => {
    if (e.target === certModal || e.target.classList.contains("modal-close")) {
      certModal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (certModal.classList.contains("show")) {
        certModal.classList.remove("show");
        document.body.style.overflow = "";
      }
      if (mobileMenu.classList.contains("open")) closeMenu();
    }
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// инициализация
document.addEventListener("DOMContentLoaded", () => {
  renderCourseFilters();
  renderCourses();
  renderProjects();
  renderRoadmap();
  renderSDLC();
  renderSkills();
  observeFadeUps();
});
