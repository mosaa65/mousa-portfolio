(function () {
  const data = window.CV_DATA;
  if (!data) return;

  const i18n = {
    ar: {
      eyebrow: 'مهندس برمجيات',
      downloadPdf: 'تحميل السيرة بصيغة PDF',
      downloadDocx: 'تحميل السيرة بصيغة Word',
      viewProjects: 'عرض المشاريع',
      printCv: 'نسخة للطباعة',
      skills: 'المهارات التقنية',
      projects: 'المشاريع',
      projectsNote: 'جميع المشاريع مذكورة من المصادر، وروابط المستودعات غير الموثقة موسومة بوضوح.',
      advanced: 'التقنيات المتقدمة',
      ai: 'الذكاء الاصطناعي وتطبيقاته',
      roles: 'الفرص المستهدفة',
      contactTitle: 'التواصل والروابط',
      contactBtn: 'تواصل مباشر',
      repo: 'المستودع',
      role: 'الدور',
      period: 'الفترة',
      highlights: 'أبرز الإنجازات',
      experience: 'الخبرة العملية',
      education: 'المؤهل العلمي',
      softSkills: 'المهارات الشخصية',
      languagesTitle: 'اللغات',
      repoProposed: 'مقترح',
      repoVerified: 'موثق',
      footer: '© 2026 موسى العواضي — جميع الحقوق محفوظة'
    },
    en: {
      eyebrow: 'Software Engineer',
      downloadPdf: 'Download CV (PDF)',
      downloadDocx: 'Download CV (Word)',
      viewProjects: 'View Projects',
      printCv: 'Print Version',
      skills: 'Technical Skills',
      projects: 'Projects',
      projectsNote: 'All projects are extracted from source files; unverified repository links are clearly labeled.',
      advanced: 'Advanced Stack',
      ai: 'AI in Practice',
      roles: 'Target Roles',
      contactTitle: 'Contact & Links',
      contactBtn: 'Contact',
      repo: 'Repository',
      role: 'Role',
      period: 'Period',
      highlights: 'Key Highlights',
      experience: 'Work Experience',
      education: 'Education',
      softSkills: 'Soft Skills',
      languagesTitle: 'Languages',
      repoProposed: 'Proposed',
      repoVerified: 'Verified',
      footer: '© 2026 Mousa Al-Awadhi — All Rights Reserved'
    }
  };

  const skillLabels = {
    ar: {
      programming_languages: 'لغات البرمجة',
      frameworks_and_platforms: 'أطر العمل والمنصات',
      tools: 'الأدوات',
      databases: 'قواعد البيانات',
      web_and_mobile: 'تطوير الويب والجوال',
      hosting_and_ops: 'الاستضافات والتشغيل',
      analysis_and_modeling: 'تحليل الأنظمة والنمذجة'
    },
    en: {
      programming_languages: 'Programming Languages',
      frameworks_and_platforms: 'Frameworks & Platforms',
      tools: 'Tools',
      databases: 'Databases',
      web_and_mobile: 'Web & Mobile Development',
      hosting_and_ops: 'Hosting & Operations',
      analysis_and_modeling: 'Systems Analysis & Modeling'
    }
  };

  const projectNames = {
    'نظام إدارة المدارس (ERP تعليمي متكامل)': 'School Management System (Full ERP)',
    'نظام إدارة الموارد البشرية وشؤون الطلاب والمالية': 'HR, Student & Finance Management System',
    'نظام ERP إداري ومالي متكامل': 'Integrated Admin & Finance ERP',
    'نظام محاسبي (ويب + جوال)': 'Accounting System (Web + Mobile)',
    'نظام إدارة الملاهي': 'Amusement Park Management System',
    'تطبيق إدارة الديون': 'Debt Tracker App',
    'تطبيق متجر كتب إلكتروني': 'E-Book Store App',
    'متجر قات مان': 'Qat Man E-commerce Store',
    'EasySave - تطبيق تحميل وسائط الشبكات الاجتماعية': 'EasySave — Social Media Downloader',
    'MateRate - تطبيق أسعار وتحويل العملات': 'MateRate — Currency Converter App',
    'منصة For You Gifts - متجر إلكتروني كتالوجي': 'For You Gifts — E-commerce Platform',
    'موقع شركة "قبل وبعد" للمقاولات العامة': 'Before & After — Contracting Website',
    'مشاريع ذكاء اصطناعي (تحليل مشاعر + Web Scraping)': 'AI Projects (Sentiment Analysis + Scraping)',
    'توثيق وحوكمة تنفيذ مشروع School ERP (Backend/Frontend/Team Ops)': 'School ERP Engineering Docs & Governance',
    'مواقع شركات وخدمات متعددة + تطبيقات خدمية/تعليمية/إدارية': 'Multi-Client Web & Mobile Solutions'
  };

  const advancedStackEn = [
    'MVC Architecture',
    'Modular Monolith Design',
    'RESTful API Design',
    'JWT-based Authentication',
    'Authentication & Authorization',
    'Role-Based Access Control (RBAC)',
    'DTO Validation',
    'Swagger/OpenAPI Documentation',
    'React Query Server State',
    'Permission Guards in UI',
    'Clean Code & Refactoring',
    'Performance Optimization',
    'Secure Application Development',
    'Pagination & Filtering Strategies',
    'Background Jobs & Scheduled Tasks',
    'Branch Protection & PR Governance',
    'E2E Testing with Playwright'
  ];

  const aiDataEn = {
    overview: 'Leveraging AI as a practical part of the development lifecycle — not as a superficial addition.',
    use_cases: [
      'Text Sentiment Analysis for content classification and decision support.',
      'Web Scraping & data processing to extract actionable insights.',
      'Integrating AI model APIs into web and mobile applications.',
      'Automating repetitive tasks to boost development team productivity.',
      'Using AI tools for analysis, documentation, and continuous improvement.'
    ]
  };

  const softSkillsEn = [
    'Analytical Thinking & Decision Making',
    'Strong Professional Responsibility',
    'Time & Priority Management',
    'Working Under Pressure',
    'Fast Learning & Continuous Growth',
    'Effective Communication (Technical & Non-Technical)',
    'Detail-Oriented Execution',
    'Independent & Team Collaboration'
  ];

  const expEn = {
    position: 'Founder & Technical Lead — Inma Soft',
    responsibilities: [
      'Leading a technical team and overseeing project lifecycle from analysis to deployment and maintenance.',
      'Translating client requirements into scalable, practical technical solutions.',
      'Code quality review, performance tuning, and user experience optimization.',
      'Coordinating development, testing, and delivery workflows.'
    ]
  };

  const eduEn = {
    degree: 'B.Sc. in Information Technology',
    year: '2026'
  };

  let lang = 'ar';
  const $ = (sel) => document.querySelector(sel);

  const techIcons = {
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'Py': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
    'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
    'NestJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    'SQL Server': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
    'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    'Prisma ORM': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
    'Prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
    'Google': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg',
    'Microsoft': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg',
    'Windows': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg',
    'Playwright': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg'
  };

  function getIconTag(name) {
    const icon = techIcons[name] || techIcons[name.split(' ')[0]];
    return icon ? `<img src="${icon}" alt="${name}" loading="lazy" />` : '';
  }

  function renderMeta() {
    const p = data.personal;
    const meta = $('#heroMeta');
    meta.innerHTML = '';
    const items = [
      { icon: '📍', text: lang === 'ar' ? p.location : 'Ibb, Yemen' },
      { icon: '✉️', text: p.email },
      { icon: '📱', text: p.phone },
      { icon: '💻', text: 'github.com/mosaa65' }
    ];
    items.forEach((item) => {
      const span = document.createElement('span');
      span.className = 'chip';
      span.innerHTML = `<span>${item.icon}</span> ${item.text}`;
      meta.appendChild(span);
    });
  }

  function renderExperience() {
    const list = $('#experienceList');
    if (!list) return;
    list.innerHTML = '';
    data.work_experience.forEach((job) => {
      const li = document.createElement('li');
      li.className = 'experience-item';
      const title = lang === 'ar' ? job.position : expEn.position;
      const items = lang === 'ar' ? job.responsibilities : expEn.responsibilities;
      li.innerHTML = `
        <div class="exp-card">
          <h3>${title}</h3>
          <ul>${items.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>
      `;
      list.appendChild(li);
    });
  }

  function renderSkills() {
    const wrap = $('#skillsWrap');
    wrap.innerHTML = '';
    const labels = lang === 'ar' ? skillLabels.ar : skillLabels.en;
    Object.entries(data.skills).forEach(([k, values]) => {
      const sec = document.createElement('section');
      sec.className = 'skill-group';
      sec.innerHTML = `<h3>${labels[k] || k}</h3><div class="tags">${values.map((x) => `<span class="tag">${getIconTag(x)} ${x}</span>`).join('')}</div>`;
      wrap.appendChild(sec);
    });
  }

  function renderProjects() {
    const grid = $('#projectsGrid');
    grid.innerHTML = '';
    data.projects.forEach((pr) => {
      const art = document.createElement('article');
      art.className = 'project';
      const title = lang === 'en' ? (projectNames[pr.name_ar] || pr.name_ar) : pr.name_ar;
      const badgeClass = pr.repo_verified ? 'repo-badge' : 'repo-badge unverified';
      const badgeText = pr.repo_verified
        ? i18n[lang].repoVerified
        : i18n[lang].repoProposed;
      art.innerHTML = `
        <h3>${title}</h3>
        <div class="meta">${i18n[lang].role}: ${pr.role}</div>
        <div class="tags">${pr.tech.slice(0, 8).map((t) => `<span class="tag">${getIconTag(t)} ${t}</span>`).join('')}</div>
        <div class="meta"><strong>${i18n[lang].highlights}:</strong></div>
        <ul>${pr.highlights.map((h) => `<li>${h}</li>`).join('')}</ul>
        <div style="margin-top:auto; display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
          <span class="${badgeClass}">${badgeText}</span>
          <a class="btn btn-outline" style="font-size:0.82rem; padding:0.4rem 0.8rem;" target="_blank" rel="noopener" href="${pr.github_url}">${pr.repo_name}</a>
        </div>
      `;
      grid.appendChild(art);
    });
  }

  function renderAdvancedAndAI() {
    const advItems = lang === 'ar' ? data.advanced_stack : advancedStackEn;
    $('#advancedList').innerHTML = advItems.map((x) => `<li>${x}</li>`).join('');

    const aiData = lang === 'ar' ? data.ai_section : aiDataEn;
    $('#aiOverview').textContent = aiData.overview;
    $('#aiList').innerHTML = aiData.use_cases.map((x) => `<li>${x}</li>`).join('');

    $('#rolesList').innerHTML = data.target_roles.map((x) => `<li>${x}</li>`).join('');
  }

  function renderEducation() {
    const wrap = $('#educationWrap');
    if (!wrap) return;
    const edu = data.education;
    const degree = lang === 'ar' ? edu.degree : eduEn.degree;
    const yearLabel = lang === 'ar' ? 'سنة التخرج' : 'Graduation Year';
    wrap.innerHTML = `
      <div class="edu-card">
        <div class="edu-icon">🎓</div>
        <div class="edu-info">
          <h3>${degree}</h3>
          <p>${yearLabel}: ${edu.year}</p>
        </div>
      </div>
    `;
  }

  function renderSoftSkills() {
    const wrap = $('#softSkillsWrap');
    if (!wrap) return;
    const items = lang === 'ar' ? data.soft_skills : softSkillsEn;
    wrap.innerHTML = items.map(s => `<span class="soft-skill-tag">${s}</span>`).join('');
  }

  function renderLanguages() {
    const wrap = $('#languagesWrap');
    if (!wrap) return;
    const langs = data.languages;
    wrap.innerHTML = langs.map(l => {
      const name = lang === 'ar' ? l.name : (l.name === 'العربية' ? 'Arabic' : 'English');
      const level = lang === 'ar' ? l.level : (l.level === 'اللغة الأم' ? 'Native' : 'Excellent');
      return `
        <div class="lang-card">
          <div class="lang-name">${name}</div>
          <div class="lang-level">${level}</div>
        </div>
      `;
    }).join('');
  }

  function renderContact() {
    const p = data.personal;
    $('#contactContent').innerHTML = `
      <p><strong>${lang === 'ar' ? p.name : 'Mousa Jamil Al-Awadhi'}</strong></p>
      <p>✉️ <a href="mailto:${p.email}">${p.email}</a></p>
      <p>📱 <a href="tel:${p.phone}">${p.phone}</a></p>
      <p>💻 <a target="_blank" rel="noopener" href="${p.github_profile}">${p.github_profile}</a></p>
    `;
  }

  function applyLang() {
    document.body.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key]) el.textContent = i18n[lang][key];
    });

    $('#name').textContent = lang === 'ar' ? data.personal.name : 'Mousa Jamil Al-Awadhi';
    $('#headline').textContent = lang === 'ar' ? data.personal.title_ar : data.personal.title_en;
    $('#summary').textContent = lang === 'ar'
      ? data.professional_summary_ar
      : 'Software Engineer with strong ownership mindset, practical product thinking, and deep execution across web, mobile, and AI-enabled systems.';
    $('#langToggle').textContent = lang === 'ar' ? 'EN' : 'AR';
    $('#contactBtn').textContent = i18n[lang].contactBtn;
    $('#footerText').textContent = i18n[lang].footer;

    renderMeta();
    renderExperience();
    renderSkills();
    renderProjects();
    renderAdvancedAndAI();
    renderEducation();
    renderSoftSkills();
    renderLanguages();
    renderContact();
  }

  function setupEvents() {
    // Language Toggle
    $('#langToggle').addEventListener('click', () => {
      lang = lang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('cv_lang', lang);
      applyLang();
    });

    // Theme Toggle
    const themeBtn = $('#themeToggle');
    const lightIcon = themeBtn.querySelector('.light-icon');
    const darkIcon = themeBtn.querySelector('.dark-icon');

    function setTheme(isDark) {
      if (isDark) {
        document.body.removeAttribute('data-theme');
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
        localStorage.setItem('cv_theme', 'dark');
      } else {
        document.body.setAttribute('data-theme', 'light');
        lightIcon.style.display = 'inline';
        darkIcon.style.display = 'none';
        localStorage.setItem('cv_theme', 'light');
      }
    }

    // Init theme
    const savedTheme = localStorage.getItem('cv_theme') || 'dark';
    setTheme(savedTheme === 'dark');

    themeBtn.addEventListener('click', () => {
      const isCurrentlyDark = !document.body.hasAttribute('data-theme');
      setTheme(!isCurrentlyDark);
    });

    // Language Init
    const savedLang = localStorage.getItem('cv_lang');
    if (savedLang) {
      lang = savedLang;
    }

    // Modal
    const modal = $('#contactModal');
    $('#contactBtn').addEventListener('click', () => {
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    });
    $('#closeModal').addEventListener('click', () => {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
      }
    });

    $('#printBtn').addEventListener('click', () => window.print());
  }

  function revealOnScroll() {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach((el) => io.observe(el));
  }

  applyLang();
  setupEvents();
  revealOnScroll();
})();
