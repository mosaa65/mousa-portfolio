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
      achievements: 'الإنجازات بالأرقام',
      skills: 'المهارات التقنية',
      projects: 'المشاريع',
      projectsNote: 'جميع المشاريع مذكورة من المصادر، وروابط المستودعات غير الموثقة موسومة بوضوح.',
      advanced: 'التقنيات المتقدمة',
      ai: 'الذكاء الاصطناعي وتطبيقاته',
      roles: 'الفرص المستهدفة',
      sources: 'المصادر الكاملة (Raw)',
      sourcesNote: 'تم تضمين النصوص الخام من الملفات كما هي لضمان عدم فقد أي معلومة.',
      contactTitle: 'التواصل والروابط',
      contactBtn: 'تواصل مباشر',
      sourceFile: 'الملف',
      repo: 'المستودع',
      role: 'الدور',
      period: 'الفترة',
      highlights: 'أبرز الإنجازات'
    },
    en: {
      eyebrow: 'Software Engineer',
      downloadPdf: 'Download CV (PDF)',
      downloadDocx: 'Download CV (Word)',
      viewProjects: 'View Projects',
      printCv: 'Print Version',
      achievements: 'Achievements by Numbers',
      skills: 'Technical Skills',
      projects: 'Projects',
      projectsNote: 'All projects are extracted from source files; unverified repository links are clearly labeled.',
      advanced: 'Advanced Stack',
      ai: 'AI in Practice',
      roles: 'Target Roles',
      sources: 'Raw Source Archive',
      sourcesNote: 'Raw source texts are included to ensure no information is lost.',
      contactTitle: 'Contact & Links',
      contactBtn: 'Contact',
      sourceFile: 'File',
      repo: 'Repository',
      role: 'Role',
      period: 'Period',
      highlights: 'Key Highlights'
    }
  };

  let lang = 'ar';
  const $ = (sel) => document.querySelector(sel);

  function renderMeta() {
    const p = data.personal;
    const meta = $('#heroMeta');
    meta.innerHTML = '';
    [p.location, p.email, p.phone, p.github_profile].forEach((x) => {
      const span = document.createElement('span');
      span.className = 'chip';
      span.textContent = x;
      meta.appendChild(span);
    });
  }

  function renderAchievements() {
    const wrap = $('#achievements');
    wrap.innerHTML = '';
    data.achievements_numbers.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'stat-card';
      card.innerHTML = `<div class="stat-value" data-counter="${item.value}">0</div><div>${item.metric}</div>`;
      wrap.appendChild(card);
    });
  }

  function renderSkills() {
    const wrap = $('#skillsWrap');
    wrap.innerHTML = '';
    const labels = {
      programming_languages: 'لغات البرمجة',
      frameworks_and_platforms: 'أطر العمل والمنصات',
      tools: 'الأدوات',
      databases: 'قواعد البيانات',
      web_and_mobile: 'تطوير الويب والجوال',
      hosting_and_ops: 'الاستضافات والتشغيل',
      analysis_and_modeling: 'تحليل الأنظمة والنمذجة'
    };
    Object.entries(data.skills).forEach(([k, values]) => {
      const sec = document.createElement('section');
      sec.className = 'skill-group';
      sec.innerHTML = `<h3>${labels[k] || k}</h3><div class="tags">${values.map((x) => `<span class="tag">${x}</span>`).join('')}</div>`;
      wrap.appendChild(sec);
    });
  }

  function renderProjects() {
    const grid = $('#projectsGrid');
    grid.innerHTML = '';
    data.projects.forEach((pr) => {
      const art = document.createElement('article');
      art.className = 'project';
      const badgeClass = pr.repo_verified ? 'repo-badge' : 'repo-badge unverified';
      art.innerHTML = `
        <h3>${pr.name_ar}</h3>
        <div class="meta">${i18n[lang].role}: ${pr.role}</div>
        <div class="meta">${i18n[lang].period}: ${pr.period}</div>
        <div class="tags">${pr.tech.slice(0, 8).map((t) => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="meta"><strong>${i18n[lang].highlights}:</strong></div>
        <ul>${pr.highlights.map((h) => `<li>${h}</li>`).join('')}</ul>
        <span class="${badgeClass}">${pr.repo_status}</span>
        <a class="btn btn-outline" target="_blank" rel="noopener" href="${pr.github_url}">${i18n[lang].repo}: ${pr.repo_name}</a>
      `;
      grid.appendChild(art);
    });
  }

  function renderAdvancedAndAI() {
    $('#advancedList').innerHTML = data.advanced_stack.map((x) => `<li>${x}</li>`).join('');
    $('#aiOverview').textContent = data.ai_section.overview;
    $('#aiList').innerHTML = data.ai_section.use_cases.map((x) => `<li>${x}</li>`).join('');
    $('#rolesList').innerHTML = data.target_roles.map((x) => `<li>${x}</li>`).join('');
  }

  function renderRawSources() {
    const wrap = $('#rawSources');
    wrap.innerHTML = '';
    Object.entries(data.raw_sources).forEach(([file, content]) => {
      const details = document.createElement('details');
      details.innerHTML = `<summary>${i18n[lang].sourceFile}: ${file}</summary><pre>${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
      wrap.appendChild(details);
    });
  }

  function renderContact() {
    const p = data.personal;
    $('#contactContent').innerHTML = `
      <p><strong>${p.name}</strong></p>
      <p><a href="mailto:${p.email}">${p.email}</a></p>
      <p><a href="tel:${p.phone}">${p.phone}</a></p>
      <p><a target="_blank" rel="noopener" href="${p.github_profile}">${p.github_profile}</a></p>
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
    $('#name').textContent = data.personal.name;
    $('#headline').textContent = lang === 'ar' ? data.personal.title_ar : data.personal.title_en;
    $('#summary').textContent = lang === 'ar' ? data.professional_summary_ar :
      'Software Engineer with strong ownership mindset, practical product thinking, and deep execution across web, mobile, and AI-enabled systems.';
    $('#langToggle').textContent = lang === 'ar' ? 'EN' : 'AR';
    $('#contactBtn').textContent = i18n[lang].contactBtn;
    renderProjects();
    renderRawSources();
  }

  function setupEvents() {
    $('#langToggle').addEventListener('click', () => {
      lang = lang === 'ar' ? 'en' : 'ar';
      applyLang();
    });

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

  function animateCounters() {
    document.querySelectorAll('[data-counter]').forEach((el) => {
      const raw = el.getAttribute('data-counter') || '';
      const num = parseFloat((raw.match(/[\d,.]+/) || ['0'])[0].replace(/,/g, ''));
      if (!num || Number.isNaN(num)) {
        el.textContent = raw;
        return;
      }
      let current = 0;
      const steps = 28;
      const step = num / steps;
      const timer = setInterval(() => {
        current += step;
        if (current >= num) {
          clearInterval(timer);
          el.textContent = raw;
        } else {
          el.textContent = Math.floor(current).toLocaleString();
        }
      }, 22);
    });
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
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  }

  renderMeta();
  renderAchievements();
  renderSkills();
  renderAdvancedAndAI();
  renderContact();
  applyLang();
  setupEvents();
  revealOnScroll();
  animateCounters();
})();
