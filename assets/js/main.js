/* =========================================================================
   Automa — site principal
   ========================================================================= */

/* -------------------------------------------------------------------------
   CONFIG — à remplacer avant mise en ligne
   ------------------------------------------------------------------------- */
const CONFIG = {
  whatsappNumber: "33650761710",
  whatsappMessage: "Bonjour Automa, je souhaite en savoir plus sur vos automatisations IA.",
};

/* -------------------------------------------------------------------------
   Data — spécialités (texte client, sans détails techniques)
   ------------------------------------------------------------------------- */
const SERVICES = [
  {
    title: "Hôte d'Accueil Vocal IA",
    text: "Un assistant vocal qui décroche vos appels 24h/24, même quand vous êtes occupé ou fermé, pour qu'aucun client ne tombe jamais sur une messagerie.",
    icon: `<path d="M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .97.76l.9 3.6a1 1 0 0 1-.5 1.13l-1.7.85a12 12 0 0 0 5.66 5.66l.85-1.7a1 1 0 0 1 1.13-.5l3.6.9a1 1 0 0 1 .76.97V19a2 2 0 0 1-2 2h-1C8.6 21 3 15.4 3 8.5V5Z"/>`,
  },
  {
    title: "Réponse Flash Textuelle",
    text: "Un assistant connecté à vos réseaux et messageries qui répond en moins de deux minutes et qualifie chaque demande automatiquement.",
    icon: `<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.35 0-2.62-.32-3.74-.9L3 21l1.9-5.76A8.5 8.5 0 1 1 21 11.5Z"/><path d="M9 10.5h6M9 13.5h4"/>`,
  },
  {
    title: "Secrétariat & Planification Automatique",
    text: "La gestion complète de votre agenda : prise de rendez-vous, vérification des disponibilités et créneaux bloqués sans aucune saisie de votre part.",
    icon: `<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M9 14h2m3 0h2m-7 3h2"/>`,
  },
  {
    title: "Review Booster (Avis Google Maps)",
    text: "Un système qui sollicite vos clients satisfaits au bon moment pour récolter des avis 5 étoiles et améliorer votre visibilité locale.",
    icon: `<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5Z"/>`,
  },
  {
    title: "Usine Administrative & Facturation",
    text: "Le moteur qui tue la paperasse : devis et factures générés automatiquement, impayés suivis et relances envoyées sans y penser.",
    icon: `<path d="M7 3h8l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M15 3v4h4"/><path d="M9 13h6M9 17h6M9 9h2"/>`,
  },
  {
    title: "Écosystèmes Web Intelligents",
    text: "Des sites web rapides et sur-mesure, équipés de formulaires intelligents directement reliés à vos automatisations internes.",
    icon: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>`,
  },
  {
    title: "Fichier CRM Centralisé",
    text: "Une base de données unique et toujours propre, accessible depuis votre téléphone, où tout se range automatiquement sans saisie manuelle.",
    icon: `<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5V12c0 1.66 3.58 3 8 3s8-1.34 8-3V5.5"/><path d="M4 12v6.5c0 1.66 3.58 3 8 3s8-1.34 8-3V12"/>`,
  },
  {
    title: "Relance de Fidélisation Invisible",
    text: "Un programme en arrière-plan qui repère vos clients inactifs depuis plus de 60 jours et leur envoie un message personnalisé pour les faire revenir.",
    icon: `<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>`,
  },
];

/* -------------------------------------------------------------------------
   Data — témoignages (contenu d'exemple à remplacer par de vrais avis clients)
   ------------------------------------------------------------------------- */
const TESTIMONIALS = [
  { name: "Sophie M.", role: "Restauratrice", text: "Le téléphone ne s'arrête plus de sonner pendant le coup de feu, et maintenant on ne rate plus aucune réservation. Un vrai soulagement." },
  { name: "Karim B.", role: "Chauffeur VTC", text: "Je conduis toute la journée, je ne pouvais jamais répondre à temps. Aujourd'hui mes clients ont une réponse en quelques minutes, même quand je suis sur la route." },
  { name: "Dr. Anne L.", role: "Médecin généraliste", text: "Le secrétariat automatique gère mon agenda mieux qu'avant. Mes patients apprécient la simplicité et moi je gagne un temps précieux." },
  { name: "Julien P.", role: "Kinésithérapeute", text: "Les rappels et la prise de rendez-vous automatique ont clairement réduit mes créneaux annulés au dernier moment." },
  { name: "Camille R.", role: "Coiffeuse indépendante", text: "Mes avis Google ont explosé depuis qu'on relance automatiquement les clientes après chaque prestation. Ça a changé ma visibilité." },
  { name: "Marc D.", role: "Plombier", text: "L'accueil vocal répond même quand je suis sous un évier avec les mains dans l'eau. Plus aucun appel client perdu." },
  { name: "Nadia F.", role: "Avocate indépendante", text: "Toute la partie administrative et facturation tournait toute seule dans mon coin, j'ai gagné plusieurs heures par semaine." },
  { name: "Thomas G.", role: "Agent immobilier", text: "La qualification automatique des prospects m'a permis de me concentrer uniquement sur les visites sérieuses. Incroyable gain de temps." },
  { name: "Laura V.", role: "Coach sportive", text: "Mes clientes reçoivent leurs rappels automatiquement et mon agenda ne se remplit plus jamais par erreur. Tout est plus fluide." },
  { name: "Yassine T.", role: "Boulanger", text: "On a mis en place le suivi des clients réguliers et certains sont revenus après des mois d'absence grâce aux relances." },
  { name: "Elise C.", role: "Fleuriste", text: "Les commandes arrivent par message et sont traitées immédiatement, même les jours où le magasin est plein à craquer." },
  { name: "Hugo S.", role: "Garagiste", text: "Toute ma facturation et mes relances impayés sont automatisées maintenant. Je ne cours plus après les paiements." },
  { name: "Inès K.", role: "Dentiste", text: "La prise de rendez-vous automatique a considérablement réduit le temps passé au téléphone entre deux patients." },
  { name: "Paul R.", role: "Esthéticienne", text: "Un client m'a écrit un dimanche soir et a reçu une réponse en deux minutes. Il a réservé le lendemain. C'est bluffant." },
  { name: "Manon B.", role: "Architecte d'intérieur", text: "Tout mon suivi client est centralisé et rangé automatiquement. Je ne perds plus aucune information importante." },
];

/* -------------------------------------------------------------------------
   Data — FAQ
   ------------------------------------------------------------------------- */
const FAQS = [
  { q: "Combien de temps faut-il pour la mise en place ?", a: "Cela dépend de vos besoins, mais la plupart des automatisations sont opérationnelles en quelques jours seulement, sans interrompre votre activité." },
  { q: "Est-ce compliqué à utiliser au quotidien ?", a: "Non. Une fois en place, tout fonctionne en arrière-plan. Vous continuez à travailler normalement, sans rien apprendre de nouveau." },
  { q: "Est-ce que ça remplace mes employés ?", a: "Non, l'objectif est de vous libérer des tâches répétitives pour que vous et votre équipe puissiez vous concentrer sur ce qui compte vraiment : vos clients." },
  { q: "Est-ce adapté à mon activité ?", a: "Nos automatisations s'adressent aux indépendants, commerçants et cabinets de tous secteurs. Chaque solution est personnalisée selon votre métier." },
  { q: "Quel est le prix ?", a: "Chaque projet est différent, donc chaque devis l'est aussi. Réservez un appel gratuit et sans engagement pour recevoir une proposition adaptée à votre activité." },
];

/* -------------------------------------------------------------------------
   WhatsApp links
   ------------------------------------------------------------------------- */
function buildWhatsappLink() {
  const text = encodeURIComponent(CONFIG.whatsappMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
}
function wireWhatsappLinks() {
  const href = buildWhatsappLink();
  ["wa-header", "wa-hero", "wa-cta", "wa-float"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = href;
  });
}

/* -------------------------------------------------------------------------
   Footer year
   ------------------------------------------------------------------------- */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* -------------------------------------------------------------------------
   Header scroll state + mobile nav
   ------------------------------------------------------------------------- */
function wireHeader() {
  const header = document.getElementById("site-header");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* -------------------------------------------------------------------------
   Render services grid
   ------------------------------------------------------------------------- */
function renderServices() {
  const grid = document.getElementById("services-grid");
  const frag = document.createDocumentFragment();

  SERVICES.forEach((s, i) => {
    const card = document.createElement("article");
    card.className = "service-card reveal";
    card.style.transitionDelay = `${(i % 4) * 60}ms`;
    card.innerHTML = `
      <div class="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s.icon}</svg>
      </div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    `;
    frag.appendChild(card);
  });
  grid.appendChild(frag);
}

/* -------------------------------------------------------------------------
   Render testimonials marquee
   ------------------------------------------------------------------------- */
const STAR_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.3 6.2 20.5l1.1-6.5-4.8-4.6 6.6-.9L12 2.5Z"/></svg>`;

function testimonialCard(t) {
  const initials = t.name.split(" ").map((p) => p[0]).join("").slice(0, 2);
  const card = document.createElement("div");
  card.className = "testimonial-card";
  card.innerHTML = `
    <div class="testimonial-stars" aria-hidden="true">${STAR_SVG.repeat(5)}</div>
    <p class="testimonial-quote">« ${t.text} »</p>
    <div class="testimonial-person">
      <div class="avatar" aria-hidden="true">${initials}</div>
      <div>
        <strong>${t.name}</strong>
        <span>${t.role}</span>
      </div>
    </div>
  `;
  return card;
}

function renderTestimonials() {
  const half = Math.ceil(TESTIMONIALS.length / 2);
  const row1 = TESTIMONIALS.slice(0, half);
  const row2 = TESTIMONIALS.slice(half);

  const row1El = document.getElementById("marquee-row-1");
  const row2El = document.getElementById("marquee-row-2");

  // duplicate each row so the CSS marquee loop (-50%) is seamless
  [row1, row1].forEach((set) => set.forEach((t) => row1El.appendChild(testimonialCard(t))));
  [row2, row2].forEach((set) => set.forEach((t) => row2El.appendChild(testimonialCard(t))));
}

/* -------------------------------------------------------------------------
   FAQ accordion
   ------------------------------------------------------------------------- */
function renderFaq() {
  const list = document.getElementById("faq-list");
  FAQS.forEach((f, i) => {
    const item = document.createElement("div");
    item.className = "faq-item";
    item.dataset.open = "false";
    const qid = `faq-q-${i}`;
    const aid = `faq-a-${i}`;
    item.innerHTML = `
      <button class="faq-q" id="${qid}" aria-expanded="false" aria-controls="${aid}">
        <span>${f.q}</span>
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="faq-a" id="${aid}" role="region" aria-labelledby="${qid}">
        <div class="faq-a-inner"><p>${f.a}</p></div>
      </div>
    `;
    const btn = item.querySelector(".faq-q");
    btn.addEventListener("click", () => {
      const isOpen = item.dataset.open === "true";
      item.dataset.open = String(!isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
    list.appendChild(item);
  });
}

/* -------------------------------------------------------------------------
   Reveal-on-scroll
   ------------------------------------------------------------------------- */
function wireReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => io.observe(el));
}

/* -------------------------------------------------------------------------
   3D tilt on service cards (skipped on touch devices / reduced motion)
   ------------------------------------------------------------------------- */
function wireCardTilt() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none)").matches;
  if (reduceMotion || isTouch) return;

  document.querySelectorAll(".service-card").forEach((card) => {
    let raf = null;
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(700px) rotateX(${-py * 8}deg) rotateY(${px * 8}deg) translateY(-2px)`;
      });
    });
    card.addEventListener("mouseleave", () => {
      if (raf) cancelAnimationFrame(raf);
      card.style.transform = "";
    });
  });
}

/* -------------------------------------------------------------------------
   Three.js hero background — animated node network (matrix green)
   ------------------------------------------------------------------------- */
async function initHeroScene() {
  const canvas = document.getElementById("hero-canvas");
  const hero = document.querySelector(".hero");
  if (!canvas || !hero) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lowPower = (navigator.hardwareConcurrency || 8) <= 4 || window.innerWidth < 640;

  if (reduceMotion) return; // static CSS grid/gradient background is enough

  let THREE;
  try {
    THREE = await import("https://unpkg.com/three@0.160.0/build/three.module.js");
  } catch (err) {
    return; // fail silently — CSS background still looks good
  }

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, hero.clientWidth / hero.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 14);

  const NODE_COUNT = lowPower ? 46 : 90;
  const LINK_DIST = 4.6;
  const SPREAD = 9;

  const positions = new Float32Array(NODE_COUNT * 3);
  const velocities = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * SPREAD * 2.2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD * 1.3;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    velocities.push({
      x: (Math.random() - 0.5) * 0.006,
      y: (Math.random() - 0.5) * 0.006,
      z: (Math.random() - 0.5) * 0.003,
    });
  }

  const pointsGeom = new THREE.BufferGeometry();
  pointsGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const pointsMat = new THREE.PointsMaterial({
    color: 0x22c55e,
    size: 0.09,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(pointsGeom, pointsMat);
  scene.add(points);

  const maxLines = NODE_COUNT * 8;
  const linePositions = new Float32Array(maxLines * 2 * 3);
  const lineGeom = new THREE.BufferGeometry();
  lineGeom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
  const lineMat = new THREE.LineBasicMaterial({ color: 0x22c55e, transparent: true, opacity: 0.16 });
  const lines = new THREE.LineSegments(lineGeom, lineMat);
  scene.add(lines);

  const mouse = { x: 0, y: 0, active: false };
  hero.addEventListener(
    "pointermove",
    (e) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.active = true;
    },
    { passive: true }
  );
  hero.addEventListener("pointerleave", () => (mouse.active = false), { passive: true });

  function resize() {
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  let running = true;
  document.addEventListener("visibilitychange", () => {
    running = document.visibilityState === "visible";
  });

  function animate() {
    requestAnimationFrame(animate);
    if (!running) return;

    const pos = pointsGeom.attributes.position.array;
    for (let i = 0; i < NODE_COUNT; i++) {
      const ix = i * 3;
      pos[ix] += velocities[i].x;
      pos[ix + 1] += velocities[i].y;
      pos[ix + 2] += velocities[i].z;

      if (Math.abs(pos[ix]) > SPREAD * 1.2) velocities[i].x *= -1;
      if (Math.abs(pos[ix + 1]) > SPREAD * 0.7) velocities[i].y *= -1;
      if (Math.abs(pos[ix + 2]) > 3.2) velocities[i].z *= -1;
    }
    pointsGeom.attributes.position.needsUpdate = true;

    // link nearby nodes
    let vertexIndex = 0;
    const linkArr = lineGeom.attributes.position.array;
    for (let i = 0; i < NODE_COUNT && vertexIndex < maxLines * 2 * 3 - 6; i++) {
      for (let j = i + 1; j < NODE_COUNT && vertexIndex < maxLines * 2 * 3 - 6; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < LINK_DIST) {
          linkArr[vertexIndex++] = pos[i * 3];
          linkArr[vertexIndex++] = pos[i * 3 + 1];
          linkArr[vertexIndex++] = pos[i * 3 + 2];
          linkArr[vertexIndex++] = pos[j * 3];
          linkArr[vertexIndex++] = pos[j * 3 + 1];
          linkArr[vertexIndex++] = pos[j * 3 + 2];
        }
      }
    }
    lineGeom.setDrawRange(0, vertexIndex / 3);
    lineGeom.attributes.position.needsUpdate = true;

    // gentle camera parallax toward pointer
    const targetX = mouse.active ? mouse.x * 1.4 : 0;
    const targetY = mouse.active ? mouse.y * 0.9 : 0;
    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.y += (targetY - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);

    scene.rotation.y += 0.0006;

    renderer.render(scene, camera);
  }
  animate();
}

/* -------------------------------------------------------------------------
   Init
   ------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  setYear();
  wireWhatsappLinks();
  wireHeader();
  renderServices();
  renderTestimonials();
  renderFaq();
  wireReveal();
  wireCardTilt();
  initHeroScene();
});
