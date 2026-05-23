/* ========================================
   DRSH CLINIC - Main JavaScript
   ======================================== */

// ==========================================
// LANGUAGE SYSTEM
// ==========================================
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_achievements: "Achievements",
    nav_contact: "Contact Us",
    nav_book: "Book on WhatsApp",
    hero_badge: "Accepting New Patients",
    hero_title_1: "Your Perfect",
    hero_title_2: "Smile",
    hero_title_3: "Starts Here",
    hero_sub:
      "Advanced Dental Care and Smile Makeovers Using Modern Technology.",
    hero_btn1: "Book on WhatsApp",
    hero_btn2: "Explore Services",
    trust_1: "6+ Years Experience",
    trust_2: "Certified Dentist",
    trust_3: "Modern Technology",
    trust_4: "Thousands of Happy Smiles",
    qi_label1: "Our Location",
    qi_val1: "El Geish Street, Assiut",
    qi_label2: "Call Us",
    qi_val2: "01032161126",
    qi_label3: "Working Hours",
    qi_val3: "10 AM – 10 PM (Fri: Closed)",
    why_title: "Why Choose Drsh Clinic",
    why_sub:
      "We combine clinical excellence with a patient-first philosophy to deliver exceptional dental experiences.",
    why1_title: "Experienced Dentist",
    why1_desc:
      "Dr. Mostafa Ahmed brings 6+ years of hands-on expertise in cosmetic and restorative dentistry.",
    why2_title: "Modern Technology",
    why2_desc:
      "Equipped with the latest dental technology ensuring precise, comfortable, and efficient treatments.",
    why3_title: "Certified Expertise",
    why3_desc:
      "Multiple advanced certifications in implants, orthodontics, cosmetics and endodontics.",
    why4_title: "Personalized Treatment",
    why4_desc:
      "Every treatment plan is carefully tailored to meet your unique dental needs and goals.",
    why5_title: "Comfortable Environment",
    why5_desc:
      "A welcoming, calm clinic atmosphere designed to ease dental anxiety and ensure your comfort.",
    why6_title: "Affordable Solutions",
    why6_desc:
      "Premium dental care accessible through flexible payment plans and competitive pricing.",
    services_title: "Our Core Services",
    services_sub:
      "Comprehensive dental solutions tailored to restore, enhance, and protect your smile.",
    book_now: "Book Now",
    meet_title: "Meet Your Doctor",
    meet_sub:
      "A dedicated specialist committed to your oral health and the beauty of your smile.",
    offers_title: "Special Offers",
    offers_sub:
      "Exclusive deals designed to make premium dental care more accessible.",
    ba_title: "Before & After Results",
    ba_sub: "Real transformations. Real patients. Real results.",
    testi_title: "What Patients Say",
    testi_sub:
      "Thousands of satisfied patients trust Drsh Clinic with their smiles.",
    faq_title: "Frequently Asked Questions",
    faq_sub: "Have questions? We have answers.",
    footer_desc:
      "Advanced dental care and smile makeovers with 6+ years of experience. Your smile is our mission.",
    footer_quick: "Quick Links",
    footer_services: "Our Services",
    footer_contact_title: "Contact Info",
    footer_rights: "© 2024 Drsh Clinic. All rights reserved.",
    footer_by: "Dr. Mostafa Ahmed",
    wa_tooltip: "Book via WhatsApp",
    whatsapp_msg: "Hello, I'd like to book an appointment at Drsh Clinic.",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_achievements: "الإنجازات",
    nav_contact: "اتصل بنا",
    nav_book: "احجز عبر واتساب",
    hero_badge: "نستقبل حالات جديدة",
    hero_title_1: "ابتسامتك",
    hero_title_2: "المثالية",
    hero_title_3: "تبدأ هنا",
    hero_sub: "رعاية أسنان متقدمة وابتسامات مثالية باستخدام أحدث التقنيات.",
    hero_btn1: "احجز عبر واتساب",
    hero_btn2: "استكشف خدماتنا",
    trust_1: "+6 سنوات خبرة",
    trust_2: "طبيب معتمد",
    trust_3: "تقنية حديثة",
    trust_4: "آلاف المرضى السعداء",
    qi_label1: "موقعنا",
    qi_val1: "شارع الجيش، أسيوط",
    qi_label2: "اتصل بنا",
    qi_val2: "01032161126",
    qi_label3: "ساعات العمل",
    qi_val3: "١٠ ص – ١٠ م (الجمعة: مغلق)",
    why_title: "لماذا تختار عيادة درش",
    why_sub:
      "نجمع بين التميز السريري وفلسفة المريض أولاً لتقديم تجارب علاجية استثنائية.",
    why1_title: "طبيب ذو خبرة",
    why1_desc:
      "د. مصطفى أحمد يمتلك أكثر من ٦ سنوات من الخبرة في طب الأسنان التجميلي والترميمي.",
    why2_title: "تقنية حديثة",
    why2_desc:
      "مجهزون بأحدث تقنيات طب الأسنان لضمان علاجات دقيقة ومريحة وفعالة.",
    why3_title: "خبرة معتمدة",
    why3_desc:
      "شهادات متقدمة متعددة في زراعة الأسنان، التقويم، التجميل وعلاج الجذور.",
    why4_title: "علاج شخصي",
    why4_desc:
      "كل خطة علاجية مصممة بعناية لتلبية احتياجاتك وأهدافك الأسنانية الفردية.",
    why5_title: "بيئة مريحة",
    why5_desc:
      "أجواء عيادة مرحبة وهادئة مصممة لتخفيف قلق طب الأسنان وضمان راحتك.",
    why6_title: "حلول بأسعار معقولة",
    why6_desc:
      "رعاية أسنان متميزة يمكن الوصول إليها من خلال خطط دفع مرنة وأسعار تنافسية.",
    services_title: "خدماتنا الأساسية",
    services_sub: "حلول أسنان شاملة لاستعادة ابتسامتك وتحسينها وحمايتها.",
    book_now: "احجز الآن",
    meet_title: "تعرف على طبيبك",
    meet_sub: "متخصص مخلص يلتزم بصحة فمك وجمال ابتسامتك.",
    offers_title: "عروض خاصة",
    offers_sub: "صفقات حصرية لجعل رعاية الأسنان الممتازة في متناول الجميع.",
    ba_title: "نتائج قبل وبعد",
    ba_sub: "تحولات حقيقية. مرضى حقيقيون. نتائج حقيقية.",
    testi_title: "ماذا يقول المرضى",
    testi_sub: "آلاف المرضى الراضين يثقون في عيادة درش بابتساماتهم.",
    faq_title: "الأسئلة الشائعة",
    faq_sub: "هل لديك أسئلة؟ لدينا إجابات.",
    footer_desc:
      "رعاية أسنان متقدمة وابتسامات مثالية مع أكثر من ٦ سنوات خبرة. ابتسامتك مهمتنا.",
    footer_quick: "روابط سريعة",
    footer_services: "خدماتنا",
    footer_contact_title: "معلومات التواصل",
    footer_rights: "© ٢٠٢٤ عيادة درش. جميع الحقوق محفوظة.",
    footer_by: "د. مصطفى أحمد",
    wa_tooltip: "احجز عبر واتساب",
    whatsapp_msg: "مرحباً، أرغب في حجز موعد في عيادة درش.",
  },
};

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.classList.toggle("rtl", lang === "ar");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-href]").forEach((el) => {
    const key = el.getAttribute("data-i18n-href");
    if (translations[lang][key]) {
      el.href = `https://wa.me/201032161126?text=${encodeURIComponent(translations[lang][key])}`;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("drsh_lang", lang);
}

// ==========================================
// STICKY HEADER
// ==========================================
function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("scrolled", window.scrollY > 20);
    },
    { passive: true },
  );
}

// ==========================================
// MOBILE MENU
// ==========================================
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
    hamburger.querySelectorAll("span")[0].style.transform = isOpen
      ? "rotate(45deg) translate(5px, 5px)"
      : "";
    hamburger.querySelectorAll("span")[1].style.opacity = isOpen ? "0" : "1";
    hamburger.querySelectorAll("span")[2].style.transform = isOpen
      ? "rotate(-45deg) translate(5px, -5px)"
      : "";
  });

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove("open");
    }
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.remove("open"));
  });
}

// ==========================================
// ACTIVE NAV LINK
// ==========================================
function setActiveNav() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle(
      "active",
      href === page || (page === "" && href === "index.html"),
    );
  });
}

// ==========================================
// FAQ ACCORDION
// ==========================================
function initFAQ() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!question || !answer) return;

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-answer").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// ==========================================
// BEFORE / AFTER SLIDER
// ==========================================
function initBASliders() {
  document.querySelectorAll(".ba-slider-wrap").forEach((wrap) => {
    const after = wrap.querySelector(".ba-after");
    const divider = wrap.querySelector(".ba-divider");
    const handle = wrap.querySelector(".ba-handle");
    let isDragging = false;

    function setPosition(x) {
      const rect = wrap.getBoundingClientRect();
      let pct = ((x - rect.left) / rect.width) * 100;
      pct = Math.max(5, Math.min(95, pct));
      after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      divider.style.left = pct + "%";
      handle.style.left = pct + "%";
    }

    wrap.addEventListener("mousedown", (e) => {
      isDragging = true;
      setPosition(e.clientX);
    });
    wrap.addEventListener(
      "touchstart",
      (e) => {
        isDragging = true;
        setPosition(e.touches[0].clientX);
      },
      { passive: true },
    );
    document.addEventListener("mousemove", (e) => {
      if (isDragging) setPosition(e.clientX);
    });
    document.addEventListener(
      "touchmove",
      (e) => {
        if (isDragging) setPosition(e.touches[0].clientX);
      },
      { passive: true },
    );
    document.addEventListener("mouseup", () => (isDragging = false));
    document.addEventListener("touchend", () => (isDragging = false));
  });
}

// ==========================================
// GALLERY MODAL
// ==========================================
function initModal() {
  const modal = document.getElementById("caseModal");
  if (!modal) return;

  document.querySelectorAll("[data-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const caseId = btn.dataset.modal;
      const caseData = getCaseData(caseId);
      if (caseData) populateModal(caseData);
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function getCaseData(id) {
  const cases = {
    1: {
      treatment: "Hollywood Smile",
      title: "Complete Smile Transformation",
      problem: "Severe discoloration and misalignment",
      procedure: "Hollywood Smile with ceramic veneers",
      result: "Bright, perfectly aligned natural-looking smile",
      beforeImg: "../imgs/Orthodontics.jpg",
      afterImg: "../imgs/Dental Implants.jpg",
    },
    2: {
      treatment: "Dental Implants",
      title: "Full Arch Implant Restoration",
      problem: "Multiple missing teeth affecting function",
      procedure: "Premium titanium dental implants",
      result: "Fully restored bite and natural appearance",
      beforeImg: "../imgs/Orthodontics.jpg",
      afterImg: "../imgs/Dental Implants.jpg",
    },
    3: {
      treatment: "Orthodontics",
      title: "Invisible Orthodontic Correction",
      problem: "Crowded and overlapping teeth",
      procedure: "Advanced orthodontic treatment",
      result: "Perfectly straight, well-aligned smile",
      beforeImg: "../imgs/Orthodontics.jpg",
      afterImg: "../imgs/Dental Implants.jpg",
    },
    4: {
      treatment: "Teeth Whitening",
      title: "Professional Whitening Session",
      problem: "Stubborn staining from coffee and smoking",
      procedure: "In-office professional whitening",
      result: "8 shades brighter in a single session",
      beforeImg: "../imgs/Orthodontics.jpg",
      afterImg: "../imgs/Dental Implants.jpg",
    },
    5: {
      treatment: "Cosmetic Veneers",
      title: "Porcelain Veneer Makeover",
      problem: "Chipped and worn down front teeth",
      procedure: "Minimal-prep porcelain veneers",
      result: "Uniform, bright and natural-looking smile",
      beforeImg: "../imgs/Orthodontics.jpg",
      afterImg: "../imgs/Dental Implants.jpg",
    },
    6: {
      treatment: "Root Canal & Crown",
      title: "Full Tooth Restoration",
      problem: "Severely infected and broken molar",
      procedure: "Root canal treatment with ceramic crown",
      result: "Fully functional tooth, pain-free",
      beforeImg: "../imgs/Orthodontics.jpg",
      afterImg: "../imgs/Dental Implants.jpg",
    },
  };
  return cases[id];
}

function populateModal(data) {
  const modal = document.getElementById("caseModal");
  modal.querySelector(".modal-treatment").textContent = data.treatment;
  modal.querySelector(".modal-title").textContent = data.title;
  modal.querySelector(".modal-before-img").src = data.beforeImg;
  modal.querySelector(".modal-after-img").src = data.afterImg;
  modal.querySelector(".modal-problem").textContent = data.problem;
  modal.querySelector(".modal-procedure").textContent = data.procedure;
  modal.querySelector(".modal-result").textContent = data.result;
}

// ==========================================
// CONTACT FORM VALIDATION
// ==========================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const fields = [
      {
        id: "fullName",
        min: 3,
        msg: "Please enter your full name (min 3 characters).",
      },
      {
        id: "phone",
        pattern: /^[\d\s\+\-]{10,15}$/,
        msg: "Please enter a valid phone number.",
      },
      {
        id: "message",
        min: 10,
        msg: "Message must be at least 10 characters.",
      },
    ];

    fields.forEach((f) => {
      const input = document.getElementById(f.id);
      const error = document.getElementById(f.id + "Error");
      if (!input) return;

      input.classList.remove("error");
      if (error) error.classList.remove("visible");

      let fieldValid = true;
      if (f.min && input.value.trim().length < f.min) fieldValid = false;
      if (f.pattern && !f.pattern.test(input.value.trim())) fieldValid = false;
      if (!input.value.trim()) fieldValid = false;

      if (!fieldValid) {
        input.classList.add("error");
        if (error) {
          error.textContent = f.msg;
          error.classList.add("visible");
        }
        valid = false;
      }
    });

    if (valid) {
      const name = document.getElementById("fullName").value;
      const phone = document.getElementById("phone").value;
      const msg = document.getElementById("message").value;
      const wa = `https://wa.me/201032161126?text=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nMessage: ${msg}`)}`;
      window.open(wa, "_blank");
      form.reset();
    }
  });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ==========================================
// BACK TO TOP
// ==========================================
function initBackTop() {
  const btn = document.querySelector(".back-top");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    },
    { passive: true },
  );

  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

// ==========================================
// SERVICES SEARCH & FILTER
// ==========================================
function initServicesFilter() {
  const searchInput = document.getElementById("serviceSearch");
  const filterTags = document.querySelectorAll(".filter-tag");
  const cards = document.querySelectorAll(".service-full-card");

  if (!searchInput) return;

  function filterCards() {
    const query = searchInput.value.toLowerCase();
    const activeFilter =
      document.querySelector(".filter-tag.active")?.dataset.filter || "all";

    cards.forEach((card) => {
      const name =
        card.querySelector(".service-full-name")?.textContent.toLowerCase() ||
        "";
      const cat = card.dataset.category || "";
      const matchQuery = !query || name.includes(query);
      const matchFilter = activeFilter === "all" || cat === activeFilter;
      card.style.display = matchQuery && matchFilter ? "" : "none";
    });
  }

  searchInput.addEventListener("input", filterCards);

  filterTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      filterTags.forEach((t) => t.classList.remove("active"));
      tag.classList.add("active");
      filterCards();
    });
  });
}

// ==========================================
// LANGUAGE SWITCHER INIT
// ==========================================
function initLangSwitcher() {
  const saved = localStorage.getItem("drsh_lang") || "en";
  setLanguage(saved);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
}

// ==========================================
// WHATSAPP HELPERS
// ==========================================
function waLink(msg) {
  return `https://wa.me/201032161126?text=${encodeURIComponent(msg || "Hello, I would like to book an appointment at Drsh Clinic.")}`;
}

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

// ==========================================
// INIT ALL
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileMenu();
  setActiveNav();
  initFAQ();
  initBASliders();
  initModal();
  initContactForm();
  initScrollAnimations();
  initBackTop();
  initServicesFilter();
  initLangSwitcher();
  initSmoothScroll();
});
