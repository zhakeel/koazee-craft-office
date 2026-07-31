/* =========================================================
   KOAZEE'S CRAFT OFFICE — RENDER LOGIC
   ---------------------------------------------------------
   You shouldn't need to edit this file. Change content in
   js/data.js instead — this just draws it onto the page.
   ========================================================= */

// Simple inline icon set (not brand logos — plain outline glyphs)
const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>`,
  whatsapp: `<svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor"><path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.65 4.55 1.78 6.44L4 29l7.72-1.73a11.9 11.9 0 0 0 4.3.8h.01c6.63 0 12.02-5.4 12.02-12.03C28.05 8.4 22.65 3 16.02 3zm0 21.85h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-4.58 1.03 1.06-4.46-.24-.38a9.79 9.79 0 0 1-1.5-5.24C5.4 9.53 10.13 4.8 16.02 4.8c4.79 0 8.87 3.14 10.24 7.47.32 1 .49 2.06.49 3.15 0 5.89-4.79 8.43-10.73 8.43zm5.66-7.34c-.31-.16-1.84-.91-2.12-1.01-.29-.1-.5-.16-.71.16-.21.31-.81 1.01-1 1.22-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.51-1.56-.93-.83-1.55-1.86-1.74-2.17-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.23 3.41 5.41 4.78.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.36z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none"/></svg>`
};

document.addEventListener("DOMContentLoaded", () => {

  // Resolve which link "Customize yours" buttons should use
  const orderUrl = SITE[SITE.orderLink] || SITE.whatsappUrl;

  // ---- Brand ----
  document.querySelectorAll("#brand-name, #footer-brand-name").forEach(el => el.textContent = SITE.brand);
  document.querySelectorAll("#brand-sub, #footer-brand-sub").forEach(el => el.textContent = SITE.brandSub);

  // ---- Static CTA links around the page ----
  document.querySelectorAll("#nav-cta, #mobile-nav-cta").forEach(el => el.href = orderUrl);
  document.querySelectorAll("#hero-instagram, #story-instagram, #cta-instagram")
    .forEach(el => el.href = SITE.instagramUrl);

  // ---- Mobile menu toggle ----
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (navToggle && mobileMenu) {
    const closeMenu = () => {
      mobileMenu.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    };
    navToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });
    mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
  }

  // Floating WhatsApp button (bottom-right, all pages)
  const floatBtn = document.getElementById("floating-whatsapp");
  if (floatBtn) floatBtn.href = SITE.whatsappUrl;

  // Small text-link row under the hero buttons
  const heroSocial = document.getElementById("hero-social");
  if (heroSocial) {
    heroSocial.innerHTML = SITE.socialChannels
      .map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)
      .join(`<span class="dot-sep">·</span>`);
  }

  // ---- Hero ----
  document.getElementById("hero-eyebrow").textContent = SITE.hero.eyebrow;
  document.getElementById("hero-headline").innerHTML = SITE.hero.headline;
  document.getElementById("hero-lede").textContent = SITE.hero.lede;

  const statsEl = document.getElementById("hero-stats");
  SITE.hero.stats.forEach(s => {
    statsEl.insertAdjacentHTML("beforeend", `
      <div><span class="num">${s.num}</span><span class="lbl">${s.label}</span></div>
    `);
  });

  const collage = document.getElementById("hero-collage");
  const posClasses = ["p1", "p2", "p3"];
  SITE.hero.images.slice(0, 3).forEach((img, i) => {
    collage.insertAdjacentHTML("beforeend", `
      <div class="polaroid ${posClasses[i] || ""}">
        <img src="${img.src}" alt="${img.caption}">
        <div class="cap">${img.caption}</div>
      </div>
    `);
  });

  // ---- Marquee ----
  const track = document.getElementById("marquee-track");
  const words = [...SITE.marqueeWords, ...SITE.marqueeWords]; // duplicate for seamless loop
  track.innerHTML = words.map(w => `<span>${w}</span>`).join("");

  // ---- Gift cards (each one links straight to WhatsApp/Instagram,
  //      and copies the gift name so it can be pasted into the chat) ----
  const grid = document.getElementById("cat-grid");
  SITE.gifts.forEach(g => {
    const message = `Hi! I'd like to customize this: ${g.title} (${g.tag.replace(/[^\w\s]/gi, "").trim()})`;
    grid.insertAdjacentHTML("beforeend", `
      <a class="cat-card reveal" href="${orderUrl}" target="_blank" rel="noopener" data-copy="${message.replace(/"/g, "&quot;")}">
        <div class="img-wrap"><img src="${g.image}" alt="${g.title}" loading="lazy"></div>
        <div class="cat-tag">${g.tag}</div>
        <div class="cat-body">
          <div class="occ">${g.category}</div>
          <h3>${g.title}</h3>
          <span class="cta">${g.cta || "Customize yours →"}</span>
        </div>
      </a>
    `);
  });

  // Copy the gift name to the clipboard on click so it's easy to paste
  // into whichever chat opens (Instagram/WhatsApp don't support pre-filling
  // a message with an attached photo from an outside link, so this is the
  // closest practical alternative).
  const toast = document.getElementById("toast");
  document.querySelectorAll(".cat-card[data-copy]").forEach(card => {
    card.addEventListener("click", () => {
      const text = card.getAttribute("data-copy");
      if (navigator.clipboard && text) {
        navigator.clipboard.writeText(text).then(() => {
          if (toast) {
            toast.textContent = "Copied! Paste this in the chat so we know which design you mean 💌";
            toast.classList.add("show");
            clearTimeout(window.__toastTimer);
            window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
          }
        }).catch(() => {});
      }
    });
  });

  // ---- Process steps ----
  const processGrid = document.getElementById("process-grid");
  SITE.process.forEach((step, i) => {
    processGrid.insertAdjacentHTML("beforeend", `
      <div class="process-step reveal">
        <div class="idx">${String(i + 1).padStart(2, "0")}</div>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      </div>
    `);
  });

  // ---- Story / spotlight ----
  document.getElementById("story-eyebrow").textContent = SITE.story.eyebrow;
  document.getElementById("story-heading").textContent = SITE.story.heading;
  document.getElementById("story-text").textContent = SITE.story.text;
  document.getElementById("story-main-img").src = SITE.story.mainImage;
  document.getElementById("story-small-img").src = SITE.story.smallImage;

  const pointsEl = document.getElementById("story-points");
  SITE.story.points.forEach(p => {
    pointsEl.insertAdjacentHTML("beforeend", `<li>${p}</li>`);
  });

  // ---- Values ----
  const valuesGrid = document.getElementById("values-grid");
  SITE.values.forEach(v => {
    valuesGrid.insertAdjacentHTML("beforeend", `
      <div class="value-card">
        <span class="glyph">✦</span>
        <h3>${v.title}</h3>
        <p>${v.text}</p>
      </div>
    `);
  });

  // ---- Follow us (icon cards) ----
  const followGrid = document.getElementById("follow-grid");
  if (followGrid) {
    SITE.socialChannels.forEach(s => {
      followGrid.insertAdjacentHTML("beforeend", `
        <a class="follow-card reveal" href="${s.url}" target="_blank" rel="noopener">
          <span class="follow-icon">${ICONS[s.type] || ""}</span>
          <span class="follow-text">
            <strong>${s.label}</strong>
            <span>${s.handle}</span>
          </span>
        </a>
      `);
    });
  }

  // ---- FAQ (accordion) ----
  const faqList = document.getElementById("faq-list");
  if (faqList) {
    SITE.faq.forEach((item, i) => {
      faqList.insertAdjacentHTML("beforeend", `
        <details class="faq-item" ${i === 0 ? "open" : ""}>
          <summary>${item.q}<span class="faq-plus">+</span></summary>
          <p>${item.a}</p>
        </details>
      `);
    });
  }

  // ---- Footer social ----
  const footerSocial = document.getElementById("footer-social");
  if (footerSocial) {
    SITE.socialChannels.forEach(s => {
      footerSocial.insertAdjacentHTML("beforeend", `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`);
    });
  }

  // ---- CTA band ----
  document.getElementById("cta-heading").textContent = SITE.cta.heading;
  document.getElementById("cta-text").textContent = SITE.cta.text;

  // ---- Scroll reveal ----
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
});
