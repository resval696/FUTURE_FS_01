/* =========================================================================
   TRADUCTIONS EN / FR
   -------------------------------------------------------------------------
   Chaque clé correspond à un [data-i18n="clé"] dans le HTML.
   Ajouter une langue = ajouter un objet et l'appeler dans applyLang().
========================================================================= */
const i18n = {
  en: {
    /* Navigation */
    nav_about:    "01 — About",
    nav_skills:   "02 — Skills",
    nav_projects: "03 — Projects",
    nav_contact:  "04 — Contact",

    /* CV */
    cv_btn:         "CV",
    cv_btn_mobile:  "↓ Download CV",
    cv_btn_about:   "↓ Download CV",
    cv_btn_contact: "Download CV (PDF)",

    /* Hero */
    hero_eyebrow: "Folio — Index 01 / Lomé, TG",
    hero_title:   "Full Stack &amp; Mobile Developer",
    hero_sub:     "I build web and mobile products — Flutter apps, Node.js APIs, React interfaces — with clean architecture and an eye for the details that make software feel right.",
    hero_cta1:    "View my work",
    hero_cta_cv:  "↓ Download CV",
    scroll_hint:  "scroll ↓",

    /* Stats */
    stat_projects: "Projects shipped",
    stat_live:     "Live deployments",
    stat_years:    "Years learning",

    /* About text */
    about_h2: "Code with purpose,<br /><span class=\"accent\">ship with care.</span>",
    about_p1: "I'm Koffi Israël ALOVE, semester 4 Application Development student at ESIG Global Success, Lomé. I started with Java and C fundamentals, progressed through web (HTML/CSS/PHP/JS), then specialised in mobile with Flutter — now I build full-stack products across the entire stack.",
    about_p2: "My approach: understand the problem first, architect a clean solution, then build it. I care about the details — from database schema design to pixel-level UI.",
    about_portfolio: "Full portfolio ↗",

    /* Timeline */
    tl_esig:   "Licence Dev. Applications — ESIG Global Success (in progress)",
    tl_bac:    "Baccalauréat — Lycée Lomé-cité",
    tl_probat: "PROBAT",
    tl_bepc:   "BEPC",

    /* About card */
    card_role_label:     "role",
    card_role_value:     "Dev Intern @ Future Interns",
    card_school_label:   "school",
    card_degree_label:   "degree",
    card_degree_value:   "Licence — App. Development",
    card_location_label: "location",
    card_cert_label:     "cert",
    card_cert_value:     "CISCO — IT Hardware Essentials",
    card_status_label:   "status",
    card_status_value:   "Available for work",

    /* Skills */
    skills_h2:    "What I work with",
    sk_mobile:    "Mobile",
    sk_languages: "Languages",
    sk_frontend:  "Frontend",
    sk_backend:   "Backend",
    sk_db:        "Databases",
    sk_devops:    "DevOps &amp; Systems",
    sk_concepts:  "Concepts",

    /* Projects */
    proj_h2:           "Selected work",
    proj_type_mobile:  "Mobile App",
    proj_type_web:     "Web App",
    proj_type_landing: "Landing Page",
    proj_live:         "Live",
    proj_wip:          "In progress",
    proj_dinease: "Restaurant discovery app for Lomé — users filter by budget and proximity. 4-screen flow: Home → Budget → Results → Restaurant detail. Built with Flutter/Dart, Firebase for data, Android Studio + VS Code.",
    proj_gym:     "Gym management web app — front-end role. Designed in Figma first, then built with HTML/CSS/JS. Responsive layout, smooth scroll, clean UI.",
    proj_budget:  "Personal finance tracker using the 50/30/20 rule. Chart.js visualizations, localStorage persistence, fintech UI.",
    proj_weather: "Weather app with geolocation, OpenWeatherMap API, and dynamic CSS themes that shift with conditions.",
    proj_ecole:   "Online driving school — React frontend, Express/MongoDB backend, JWT auth, quiz engine, booking system, admin panel.",
    link_live:    "Live ↗",
    link_github:  "GitHub ↗",

    /* Contact */
    contact_h2:        "Let's build<br /><span class=\"accent\">something together.</span>",
    contact_sub:       "Open to internships, freelance projects, and collaborations. I respond within 24h.",
    contact_portfolio: "Portfolio",
    form_name:         "Name",
    form_email:        "Email",
    form_message:      "Message",
    form_send:         "Send message",
    form_ph_name:      "Your name",
    form_ph_email:     "your@email.com",
    form_ph_msg:       "Tell me about your project...",
    form_sending:      "Sending...",
    form_success:      "Message sent — I'll reply within 24h.",
    form_error:        "Something went wrong — reach me via GitHub.",
    /* Internship section */
    nav_internship:  "05 — Internship",
    intern_h2:       "Future Interns<br /><span class=\"accent\">Full Stack Web Dev</span>",
    intern_track:    "Track",
    intern_repo:     "Repo prefix",
    intern_model:    "Model",
    intern_model_val:"Self-directed, remote",
    intern_cert:     "Certificate",
    intern_cert_val: "2 tasks min · LoR at 3",
    task_done:       "✓ Done",
    task_wip:        "◌ In progress",
    task_todo:       "○ To do",
    task_deliverable:"Deliverable →",
    task_skills:     "Skills →",
    task1_title:     "Personal Portfolio Website",
    task1_desc:      "Build a personal portfolio to showcase skills, projects and professional profile. Interactive resume sections, contact form with email notifications, SEO-friendly structure.",
    task2_title:     "Client Lead Management System",
    task2_desc:      "Mini CRM to manage client leads from contact forms. Lead listing (name, email, source, status), status updates (new / contacted / converted), notes per lead, secure admin access.",
    task2_skills:    "CRUD, backend integration, database management, business workflows",
    task3_title:     "Local Business Website & Live Pitch",
    task3_desc:      "Build a professional website for a real local business (restaurant, café, gym, salon…) and pitch it to the owner as a live project.",
    task3_skills:    "Real-world dev, client communication, pitching, business problem solving",
    roadmap_title:   "Program Roadmap",
    rm_offer:        "Offer Letter received",
    rm_tasks:        "Skill & Task Phase",
    rm_submit:       "Project Submission & Review",
    rm_cert:         "Certification & Career Access",
    rm_complete:     "Program Completion & Verification",

    nav_exp:          "04 — Experience",
    nav_internship:   "05 — Internship",
    nav_contact:      "06 — Contact",
    exp_h2:           "Professional <span class=\"accent\">Experience</span>",
    exp_fi_date:      "29 Jun-2026 - 29 Jul-2026",
    exp_fi_title:     "Full Stack Web Developer Intern",
    exp_fi_company:   "Future Interns",
    exp_fi_type:      "Remote · Internship",
    exp_fi_desc:      "Self-directed internship building and shipping real full-stack web projects. Developing a personal portfolio, a client lead management CRM, and a local business website. Working with HTML/CSS/JS, React, Node.js, MongoDB and modern deployment pipelines.",
    exp_sec_date:     "Fev-2026",
    exp_sec_title:    "SECOPS Professionalization Project",
    exp_sec_type:     "Academic · Group Lead",
    exp_sec_desc:     "Led a team of 6 on a systems administration project implementing OpenLDAP and Samba under Linux. Produced full technical documentation including architecture diagrams, FCFA budget, and an administration guide with terminal outputs.",
    exp_cisco_date:   "Dec-2024",
    exp_cisco_title:  "IT Hardware Essentials",
    exp_cisco_type:   "Certification",
    exp_cisco_desc:   "Completed the CISCO IT Hardware Essentials certification covering computer components, hardware diagnostics, OS installation, and basic network configuration.",
  },

  fr: {
    /* Navigation */
    nav_about:    "01 — À propos",
    nav_skills:   "02 — Compétences",
    nav_projects: "03 — Projets",
    nav_contact:  "04 — Contact",

    /* CV */
    cv_btn:         "CV",
    cv_btn_mobile:  "↓ Télécharger le CV",
    cv_btn_about:   "↓ Télécharger le CV",
    cv_btn_contact: "Télécharger le CV (PDF)",

    /* Hero */
    hero_eyebrow: "Folio — Index 01 / Lomé, TG",
    hero_title:   "Développeur Full Stack &amp; Mobile",
    hero_sub:     "Je construis des produits web et mobile — apps Flutter, APIs Node.js, interfaces React — avec une architecture propre et le soin des détails qui font la différence.",
    hero_cta1:    "Voir mes projets",
    hero_cta_cv:  "↓ Télécharger le CV",
    scroll_hint:  "défiler ↓",

    /* Stats */
    stat_projects: "Projets livrés",
    stat_live:     "Déploiements live",
    stat_years:    "Ans d'apprentissage",

    /* About text */
    about_h2: "Coder avec intention,<br /><span class=\"accent\">livrer avec soin.</span>",
    about_p1: "Je suis Koffi Israël ALOVE, étudiant en semestre 4 Développement d'Applications à l'ESIG Global Success de Lomé. J'ai démarré avec Java et C, progressé vers le web (HTML/CSS/PHP/JS), puis me suis spécialisé dans le mobile avec Flutter — je construis maintenant des produits full-stack sur toute la stack.",
    about_p2: "Mon approche : comprendre le problème d'abord, architecturer une solution propre, puis construire. Je soigne les détails — du schéma BDD au pixel d'interface.",
    about_portfolio: "Portfolio complet ↗",

    /* Timeline */
    tl_esig:   "Licence Dév. d'Applications — ESIG Global Success (en cours)",
    tl_bac:    "Baccalauréat — Lycée Lomé-cité",
    tl_probat: "PROBAT",
    tl_bepc:   "BEPC",

    /* About card */
    card_role_label:     "rôle",
    card_role_value:     "Stagiaire Dev @ Future Interns",
    card_school_label:   "école",
    card_degree_label:   "diplôme",
    card_degree_value:   "Licence — Dév. d'Applications",
    card_location_label: "localisation",
    card_cert_label:     "certif",
    card_cert_value:     "CISCO — Matériels Informatiques",
    card_status_label:   "statut",
    card_status_value:   "Disponible pour un stage",

    /* Skills */
    skills_h2:    "Mes outils de travail",
    sk_mobile:    "Mobile",
    sk_languages: "Langages",
    sk_frontend:  "Frontend",
    sk_backend:   "Backend",
    sk_db:        "Bases de données",
    sk_devops:    "DevOps &amp; Systèmes",
    sk_concepts:  "Concepts",

    /* Projects */
    proj_h2:           "Travaux sélectionnés",
    proj_type_mobile:  "App Mobile",
    proj_type_web:     "App Web",
    proj_type_landing: "Page d'accueil",
    proj_live:         "En ligne",
    proj_wip:          "En cours",
    proj_dinease: "App mobile de découverte de restaurants à Lomé — filtrage par budget et proximité. Parcours en 4 écrans : Accueil → Budget → Résultats → Détail restaurant. Flutter/Dart, Firebase, Android Studio + VS Code.",
    proj_gym:     "Application web de gestion d'un club de gym — rôle front-end. Maquetté sur Figma puis développé en HTML/CSS/JS. Mise en page responsive, scroll fluide, UI soignée.",
    proj_budget:  "Gestionnaire de finances personnelles — règle 50/30/20, Chart.js, localStorage, UI fintech.",
    proj_weather: "App météo avec géolocalisation, API OpenWeatherMap et thèmes CSS dynamiques selon les conditions.",
    proj_ecole:   "École de conduite en ligne — frontend React, backend Express/MongoDB, auth JWT, quiz, réservations, panel admin.",
    link_live:    "Voir ↗",
    link_github:  "GitHub ↗",

    /* Contact */
    contact_h2:        "Construisons<br /><span class=\"accent\">quelque chose ensemble.</span>",
    contact_sub:       "Disponible pour stages, projets freelance et collaborations. Je réponds en moins de 24h.",
    contact_portfolio: "Portfolio",
    form_name:         "Nom",
    form_email:        "Email",
    form_message:      "Message",
    form_send:         "Envoyer",
    form_ph_name:      "Votre nom",
    form_ph_email:     "votre@email.com",
    form_ph_msg:       "Parlez-moi de votre projet...",
    form_sending:      "Envoi en cours...",
    form_success:      "Message envoyé — je réponds en moins de 24h.",
    form_error:        "Une erreur est survenue — contactez-moi via GitHub.",
    /* Section stage */
    nav_internship:  "05 — Stage",
    intern_h2:       "Future Interns<br /><span class=\"accent\">Full Stack Web Dev</span>",
    intern_track:    "Track",
    intern_repo:     "Préfixe repo",
    intern_model:    "Modèle",
    intern_model_val:"Autonome, à distance",
    intern_cert:     "Certificat",
    intern_cert_val: "2 tâches min · LoR à 3",
    task_done:       "✓ Terminé",
    task_wip:        "◌ En cours",
    task_todo:       "○ À faire",
    task_deliverable:"Livrable →",
    task_skills:     "Compétences →",
    task1_title:     "Site Portfolio Personnel",
    task1_desc:      "Construire un portfolio personnel pour présenter compétences, projets et profil. Sections CV interactives, formulaire de contact avec notifications email, structure SEO-friendly.",
    task2_title:     "Système de Gestion de Leads (Mini CRM)",
    task2_desc:      "Mini CRM pour gérer les leads clients issus des formulaires de contact. Listing des leads, mises à jour de statut (nouveau / contacté / converti), notes par lead, accès admin sécurisé.",
    task2_skills:    "CRUD, intégration backend, gestion de base de données, workflows métier",
    task3_title:     "Site Entreprise Locale & Pitch Live",
    task3_desc:      "Créer un site professionnel pour une vraie entreprise locale (restaurant, café, salle de sport…) et le pitcher au propriétaire comme projet réel.",
    task3_skills:    "Développement réel, communication client, pitch, résolution de problèmes métier",
    roadmap_title:   "Roadmap du Programme",
    rm_offer:        "Lettre d'offre reçue",
    rm_tasks:        "Phase Compétences & Tâches",
    rm_submit:       "Soumission & Révision des Projets",
    rm_cert:         "Certification & Accès Carrière",
    rm_complete:     "Clôture & Vérification du Programme",

    nav_exp:          "04 — Expérience",
    nav_internship:   "05 — Stage",
    nav_contact:      "06 — Contact",
    exp_h2:           "Expérience <span class=\"accent\">Professionnelle</span>",
    exp_fi_date:      "29 Jun-2026 - 29 Jul-2026",
    exp_fi_title:     "Stagiaire Développeur Full Stack",
    exp_fi_company:   "Future Interns",
    exp_fi_type:      "À distance · Stage",
    exp_fi_desc:      "Stage autonome axé sur la conception et le déploiement de projets web full-stack réels. Développement d'un portfolio personnel, d'un CRM de gestion de leads et d'un site d'entreprise locale. Technologies : HTML/CSS/JS, React, Node.js, MongoDB, Netlify, GitHub.",
    exp_sec_date:     "Fev-2026",
    exp_sec_title:    "Projet SECOPS — Semaine de professionnalisation",
    exp_sec_type:     "Académique · Chef de groupe",
    exp_sec_desc:     "Direction d'un groupe de 6 étudiants sur un projet d'administration systèmes : implémentation d'OpenLDAP et Samba sous Linux. Production de la documentation complète : schémas d'architecture, budget en FCFA, guide d'administration avec sorties terminal.",
    exp_cisco_date:   "Dec-2024",
    exp_cisco_title:  "IT Hardware Essentials",
    exp_cisco_type:   "Certification",
    exp_cisco_desc:   "Certification CISCO couvrant les composants matériels d'un ordinateur, le diagnostic hardware, l'installation d'OS et la configuration réseau de base.",
  },
};

/* =========================================================================
   ÉTAT LANGUE
========================================================================= */
let currentLang = "en";

/**
 * Applique toutes les traductions.
 * - [data-i18n]             → innerHTML
 * - [data-i18n-placeholder] → attribut placeholder
 */
function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
  });

  document.documentElement.lang = lang;

  /* Couleur active/inactive sur le toggle via classe CSS */
  const btn = document.getElementById("langToggle");
  lang === "fr" ? btn.classList.add("fr") : btn.classList.remove("fr");

  currentLang = lang;
}

/* Clic toggle → bascule EN ↔ FR */
document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(currentLang === "en" ? "fr" : "en");
});

/* =========================================================================
   TYPED NAME
   Le nom ne change pas selon la langue — pas dans i18n.
========================================================================= */
const heroName = "Koffi Israël Alove";
const nameEl   = document.getElementById("typed-name");
let charIndex  = 0;

function typeName() {
  if (charIndex <= heroName.length) {
    nameEl.textContent = heroName.slice(0, charIndex);
    charIndex++;
    setTimeout(typeName, charIndex === 1 ? 600 : 65);
  }
}
typeName();

/* =========================================================================
   NAV — bordure + lien actif au scroll
========================================================================= */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.style.borderBottomColor = window.scrollY > 40
    ? "rgba(124,143,232,0.25)"
    : "rgba(242,240,232,0.07)";
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

sections.forEach((s) =>
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) =>
        link.classList.toggle("active-link", link.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  }, { threshold: 0.4 }).observe(s)
);

/* =========================================================================
   BURGER — menu mobile
========================================================================= */
const burger     = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => mobileMenu.classList.remove("open"))
);

/* =========================================================================
   SCROLL REVEAL
========================================================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* =========================================================================
   FORMULAIRE CONTACT — Web3Forms
   Setup : web3forms.com → récupère ta clé → remplace "YOUR_WEB3FORMS_KEY".
   Feedback affiché dans la langue active.
========================================================================= */
const form      = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formNote  = document.getElementById("formNote");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name    = document.getElementById("name").value.trim();
  const email   = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) return;

  const t = i18n[currentLang];
  submitBtn.querySelector("[data-i18n]").textContent = t.form_sending;
  submitBtn.disabled = true;
  formNote.className = "form-note mono";
  formNote.textContent = "";

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "c42f7e5b-d575-4252-a020-a84828cfbd5f", // ← remplace par ta clé web3forms.com
        name, email, message,
        subject: `Portfolio contact — ${name}`,
      }),
    });
    const data = await res.json();
    if (data.success) {
      formNote.textContent = t.form_success;
      formNote.className   = "form-note mono success";
      form.reset();
    } else { throw new Error(); }
  } catch {
    formNote.textContent = t.form_error;
    formNote.className   = "form-note mono error";
  } finally {
    submitBtn.querySelector("[data-i18n]").textContent = t.form_send;
    submitBtn.disabled = false;
  }
});


/* =========================================================
   1. PARTICULES HERO — canvas flottant
   ~40 points indigo qui dérivent lentement en fond du hero.
========================================================= */
const canvas = document.getElementById("heroCanvas");
const ctx    = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", () => { resizeCanvas(); initParticles(); });

function initParticles() {
  particles = Array.from({ length: 42 }, () => ({
    x:  Math.random() * canvas.width,
    y:  Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r:  Math.random() * 1.8 + 0.6,
    o:  Math.random() * 0.18 + 0.06,
  }));
}
initParticles();

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    // Rebond sur les bords
    if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(124,143,232,${p.o})`;
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* =========================================================
   2. COMPTEURS ANIMÉS — stats hero
   Partent de 0 et montent jusqu'à data-count en 800ms.
========================================================= */
function animateCounter(el) {
  const target   = parseInt(el.dataset.count);
  const suffix   = el.textContent.replace(/[0-9]/g, ""); // garde "+" ou ""
  const duration = 800;
  const start    = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    // easeOutQuart
    const eased = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// Déclenche quand les stats entrent dans le viewport
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".stat-num[data-count]").forEach(animateCounter);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector(".hero-stats");
if (statsEl) statsObserver.observe(statsEl);

/* =========================================================
   3. TILT 3D — project cards
   La carte suit le curseur avec un léger tilt max 8°.
========================================================= */
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect   = card.getBoundingClientRect();
    const cx     = rect.left + rect.width  / 2;
    const cy     = rect.top  + rect.height / 2;
    const dx     = (e.clientX - cx) / (rect.width  / 2);
    const dy     = (e.clientY - cy) / (rect.height / 2);
    const rotX   = -dy * 8; // max 8°
    const rotY   =  dx * 8;
    card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-3px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* =========================================================
   4. STAGGER SKILL TAGS
   Chaque tag apparaît avec un délai croissant quand
   la section Skills entre dans le viewport.
========================================================= */
const skillsSection = document.getElementById("skills");
if (skillsSection) {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".tag").forEach((tag, i) => {
        setTimeout(() => tag.classList.add("tag-visible"), i * 45);
      });
    });
  }, { threshold: 0.15 }).observe(skillsSection);
}

/* =========================================================
   5. SVG HERO LINE DRAW
   Déjà géré par le CSS (stroke-dasharray animation).
   On s'assure juste que le path a la bonne longueur.
========================================================= */
const heroPath = document.querySelector(".hero-line path");
if (heroPath) {
  const len = heroPath.getTotalLength();
  heroPath.style.strokeDasharray  = len;
  heroPath.style.strokeDashoffset = len;
}

/* =========================================================
   6. NAV INDICATOR — pill qui glisse entre les liens actifs
========================================================= */
const navList = document.querySelector(".nav-links");
if (navList) {
  // Crée le pill indicator
  const indicator = document.createElement("div");
  indicator.className = "nav-indicator";
  navList.appendChild(indicator);

  function moveIndicator(link) {
    const listRect = navList.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    indicator.style.left  = (linkRect.left - listRect.left) + "px";
    indicator.style.width = linkRect.width + "px";
  }

  // Positionne sur le lien actif au scroll (réutilise la logique existante)
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id   = entry.target.id;
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) moveIndicator(link);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll("section[id]").forEach(s => navObserver.observe(s));

  // Aussi sur hover
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("mouseenter", () => moveIndicator(link));
  });
  navList.addEventListener("mouseleave", () => {
    const active = document.querySelector(".nav-links a.active-link");
    if (active) moveIndicator(active);
  });
}

