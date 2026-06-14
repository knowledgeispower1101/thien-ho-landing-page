// ===========================================
// THIEN HO TECHNOLOGY — script.js
// ===========================================

// ── Translations ─────────────────────────────────────────────
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.solutions': 'Solutions',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Industrial Automation Solutions',
    'hero.headline': 'Powering Vietnam\'s<br><span class="headline-accent">Manufacturing</span><br>Future',
    'hero.sub': 'Providing industrial automation products and solutions that improve productivity, reduce energy consumption, and increase operational reliability.',
    'hero.btn1': 'Contact Us',
    'hero.btn2': 'View Products',
    'hero.stat1.label': 'Projects',
    'hero.stat2.label': 'Products Delivered',
    'hero.stat3.label': 'Warranty',

    'about.eyebrow': 'Who We Are',
    'about.title': 'About THIEN HO TECHNOLOGY',
    'about.text1': 'THIEN HO TECHNOLOGY is a trusted provider of industrial automation, power transmission systems, electric motors, gear motors, servo systems, and inverter solutions for manufacturing businesses throughout Vietnam.',
    'about.text2': 'We partner with industry-leading manufacturers to deliver reliable, efficient, and cost-effective automation components — backed by expert technical support and an 18-month warranty on every product.',
    'about.feat1': 'Official distributor of ARINCO & GIMO',
    'about.feat2': 'Nationwide installation & commissioning',
    'about.feat3': 'Technical hotline 7 days a week',
    'about.btn': 'Get in Touch',
    'about.card1.title': 'Industrial Grade',
    'about.card1.text': 'Every product meets rigorous industrial standards for reliability in demanding environments.',
    'about.card2.title': 'Energy Efficient',
    'about.card2.text': 'Our inverter and motor solutions reduce energy consumption by up to 40%.',
    'about.card3.title': 'Expert Support',
    'about.card3.text': 'Dedicated technical team available for installation, commissioning, and maintenance.',

    'products.eyebrow': 'What We Supply',
    'products.title': 'Product Categories',
    'products.desc': 'Industry-leading automation components for every manufacturing need.',
    'product1.name': 'ARINCO Inverter',
    'product1.desc': 'Variable frequency drives for precise motor speed control, energy savings, and soft-start protection.',
    'product2.name': 'GIMO Gear Motor',
    'product2.desc': 'High-efficiency gear motors with precision reduction ratios for conveyors, mixers, and packaging lines.',
    'product3.name': 'Three-Phase Electric Motor',
    'product3.desc': 'IE2/IE3 efficiency class three-phase induction motors for heavy-duty industrial applications.',
    'product4.name': 'Servo Motor System',
    'product4.desc': 'High-precision servo systems for CNC machinery, robotics, and automated assembly lines.',
    'product5.name': 'Industrial Automation Equipment',
    'product5.desc': 'PLCs, HMIs, sensors, and control panels integrated for complete factory automation systems.',
    'product6.name': 'Power Transmission Solutions',
    'product6.desc': 'Couplings, pulleys, belts, and chain drives engineered for reliable torque transmission.',
    'product.learn': 'Learn More',

    'solutions.eyebrow': 'Industries We Serve',
    'solutions.title': 'Industry Solutions',
    'solutions.desc': "Tailored automation solutions for Vietnam's most demanding industries.",
    'sol1.name': 'Food Processing',
    'sol1.desc': 'Hygienic drives and motors certified for food-safe environments. Precise speed control for mixing, filling, and conveying lines.',
    'sol2.name': 'Textile Industry',
    'sol2.desc': 'Inverter-driven spindle and loom systems delivering consistent thread tension and fabric quality at any production speed.',
    'sol3.name': 'Logistics',
    'sol3.desc': 'Conveyor and sorting systems with variable speed drives for throughput efficiency and gentle product handling.',
    'sol4.name': 'Aquaculture',
    'sol4.desc': 'Corrosion-resistant motors and pumps designed for humid, saline aquaculture environments with low-maintenance operation.',
    'sol5.name': 'Wood Pellet Manufacturing',
    'sol5.desc': 'Heavy-duty gear motors and inverters for pellet mills, dryers, and conveyors handling high-torque biomass material.',
    'sol6.name': 'Recycling Plants',
    'sol6.desc': 'Robust automation for shredders, balers, and sorting systems — built to handle variable loads and continuous operation.',

    'stats.eyebrow': 'Why Choose Us',
    'stats.title': 'Trusted Across Vietnam',
    'stat1.label': 'Projects Completed',
    'stat2.label': 'Products Delivered',
    'stat3.label': 'Warranty Coverage',
    'stat4.label': 'Nationwide Support',

    'projects.eyebrow': 'Our Work',
    'projects.title': 'Featured Projects',
    'projects.desc': "Real results from real deployments across Vietnam's manufacturing sector.",
    'proj1.title': 'Feed Mill Automation',
    'proj1.desc': 'Installed ARINCO AV68 inverters across 12 conveyor lines at a major animal feed production facility in Long An, reducing energy consumption by 35%.',
    'proj2.title': 'Textile Plant Upgrade',
    'proj2.desc': 'Retrofitted 80+ spindle motors with R-Series gear motors at a textile factory in Binh Duong, increasing production speed by 20% with lower maintenance cost.',
    'proj3.title': 'Aquaculture Pump Control',
    'proj3.desc': 'Deployed ARINCO AU2 inverters to control aerator pumps at a shrimp farm in Ca Mau, enabling 24/7 automated oxygen management and cutting power bills by 28%.',
    'proj4.title': 'Wood Pellet Production Line',
    'proj4.desc': 'Engineered complete drive system for a biomass pellet manufacturer in Dong Nai, integrating AV23 inverters with PLC control for fully automated output.',

    'contact.eyebrow': 'Get In Touch',
    'contact.title': 'Contact Us',
    'contact.desc': 'Ready to automate? Our team will respond within one business day.',
    'contact.sales': 'Sales Hotline',
    'contact.tech': 'Technical Hotline',
    'contact.email.label': 'Email',
    'contact.website': 'Website',
    'form.name': 'Full Name',
    'form.name.ph': 'Your full name',
    'form.company': 'Company',
    'form.company.ph': 'Company name',
    'form.phone': 'Phone',
    'form.phone.ph': '0xxx xxx xxx',
    'form.email': 'Email',
    'form.email.ph': 'you@company.com',
    'form.message': 'Message',
    'form.message.ph': 'Describe your project or inquiry...',
    'form.submit': 'Send Message',

    'footer.tagline': "Industrial Automation & Power Transmission Solutions for Vietnam's manufacturing sector.",
    'footer.quick': 'Quick Links',
    'footer.products': 'Products',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2026 THIEN HO TECHNOLOGY. All rights reserved.',
    'footer.sub': 'Industrial Automation & Power Transmission Solutions',

    'err.required': 'This field is required.',
    'err.email': 'Enter a valid email address.',
    'err.phone': 'Enter a valid phone number.',
    'err.message': 'Message must be at least 10 characters.',
    'form.success': 'Thank you! We will contact you within one business day.',
  },

  vi: {
    'nav.home': 'Trang Chủ',
    'nav.about': 'Giới Thiệu',
    'nav.products': 'Sản Phẩm',
    'nav.solutions': 'Giải Pháp',
    'nav.projects': 'Dự Án',
    'nav.contact': 'Liên Hệ',

    'hero.eyebrow': 'Giải Pháp Tự Động Hóa Công Nghiệp',
    'hero.headline': 'Nâng Tầm Sản Xuất<br><span class="headline-accent">Việt Nam</span><br>Tương Lai',
    'hero.sub': 'Cung cấp sản phẩm và giải pháp tự động hóa công nghiệp giúp nâng cao năng suất, tiết kiệm năng lượng và tăng độ tin cậy vận hành.',
    'hero.btn1': 'Liên Hệ Ngay',
    'hero.btn2': 'Xem Sản Phẩm',
    'hero.stat1.label': 'Dự Án',
    'hero.stat2.label': 'Sản Phẩm Cung Cấp',
    'hero.stat3.label': 'Bảo Hành',

    'about.eyebrow': 'Về Chúng Tôi',
    'about.title': 'Về Công Nghệ Thiên Hồ',
    'about.text1': 'CÔNG NGHỆ THIÊN HỒ là nhà cung cấp uy tín các giải pháp tự động hóa công nghiệp, hệ thống truyền động, động cơ điện, hộp số, hệ thống servo và biến tần cho các doanh nghiệp sản xuất trên toàn Việt Nam.',
    'about.text2': 'Chúng tôi hợp tác với các nhà sản xuất hàng đầu thế giới để cung cấp linh kiện tự động hóa đáng tin cậy, hiệu quả và tiết kiệm chi phí — được hỗ trợ bởi đội ngũ kỹ thuật chuyên nghiệp và bảo hành 18 tháng cho mỗi sản phẩm.',
    'about.feat1': 'Nhà phân phối chính thức ARINCO & GIMO',
    'about.feat2': 'Lắp đặt & vận hành trên toàn quốc',
    'about.feat3': 'Đường dây kỹ thuật hoạt động 7 ngày/tuần',
    'about.btn': 'Liên Hệ Ngay',
    'about.card1.title': 'Tiêu Chuẩn Công Nghiệp',
    'about.card1.text': 'Mỗi sản phẩm đáp ứng các tiêu chuẩn công nghiệp nghiêm ngặt về độ tin cậy trong môi trường khắc nghiệt.',
    'about.card2.title': 'Tiết Kiệm Năng Lượng',
    'about.card2.text': 'Giải pháp biến tần và động cơ của chúng tôi giảm tiêu thụ điện năng lên đến 40%.',
    'about.card3.title': 'Hỗ Trợ Chuyên Nghiệp',
    'about.card3.text': 'Đội ngũ kỹ thuật chuyên dụng sẵn sàng hỗ trợ lắp đặt, vận hành và bảo trì.',

    'products.eyebrow': 'Sản Phẩm Cung Cấp',
    'products.title': 'Danh Mục Sản Phẩm',
    'products.desc': 'Linh kiện tự động hóa hàng đầu cho mọi nhu cầu sản xuất.',
    'product1.name': 'Biến Tần ARINCO',
    'product1.desc': 'Biến tần điều khiển tốc độ động cơ chính xác, tiết kiệm năng lượng và bảo vệ khởi động mềm.',
    'product2.name': 'Hộp Số GIMO',
    'product2.desc': 'Hộp số hiệu suất cao với tỷ số truyền chính xác cho băng tải, máy khuấy và dây chuyền đóng gói.',
    'product3.name': 'Động Cơ Điện 3 Pha',
    'product3.desc': 'Động cơ cảm ứng 3 pha cấp hiệu suất IE2/IE3 cho các ứng dụng công nghiệp nặng.',
    'product4.name': 'Hệ Thống Servo Motor',
    'product4.desc': 'Hệ thống servo độ chính xác cao cho máy CNC, robot và dây chuyền lắp ráp tự động.',
    'product5.name': 'Thiết Bị Tự Động Hóa',
    'product5.desc': 'PLC, HMI, cảm biến và tủ điều khiển tích hợp cho hệ thống tự động hóa nhà máy hoàn chỉnh.',
    'product6.name': 'Giải Pháp Truyền Động',
    'product6.desc': 'Khớp nối, puly, đai và xích được thiết kế để truyền mô-men xoắn đáng tin cậy.',
    'product.learn': 'Tìm Hiểu Thêm',

    'solutions.eyebrow': 'Ngành Chúng Tôi Phục Vụ',
    'solutions.title': 'Giải Pháp Ngành',
    'solutions.desc': 'Giải pháp tự động hóa tùy chỉnh cho các ngành công nghiệp đòi hỏi cao nhất tại Việt Nam.',
    'sol1.name': 'Chế Biến Thực Phẩm',
    'sol1.desc': 'Động cơ và bộ truyền động vệ sinh được chứng nhận cho môi trường an toàn thực phẩm. Điều khiển tốc độ chính xác cho dây chuyền trộn, chiết rót và băng tải.',
    'sol2.name': 'Ngành Dệt May',
    'sol2.desc': 'Hệ thống trục chính và khung dệt điều khiển bằng biến tần đảm bảo độ căng sợi ổn định và chất lượng vải ở mọi tốc độ sản xuất.',
    'sol3.name': 'Logistics',
    'sol3.desc': 'Hệ thống băng tải và phân loại với bộ truyền động tốc độ thay đổi giúp tăng hiệu quả thông lượng và xử lý hàng hóa nhẹ nhàng.',
    'sol4.name': 'Nuôi Trồng Thủy Sản',
    'sol4.desc': 'Động cơ và máy bơm chống ăn mòn được thiết kế cho môi trường nuôi trồng thủy sản ẩm ướt, nhiễm mặn với vận hành bảo trì thấp.',
    'sol5.name': 'Sản Xuất Viên Gỗ',
    'sol5.desc': 'Hộp số và biến tần hạng nặng cho máy ép viên, máy sấy và băng tải xử lý vật liệu sinh khối mô-men xoắn cao.',
    'sol6.name': 'Nhà Máy Tái Chế',
    'sol6.desc': 'Tự động hóa mạnh mẽ cho máy nghiền, máy ép và hệ thống phân loại — được xây dựng để xử lý tải trọng biến đổi và vận hành liên tục.',

    'stats.eyebrow': 'Tại Sao Chọn Chúng Tôi',
    'stats.title': 'Được Tin Tưởng Trên Toàn Quốc',
    'stat1.label': 'Dự Án Hoàn Thành',
    'stat2.label': 'Sản Phẩm Cung Cấp',
    'stat3.label': 'Bảo Hành',
    'stat4.label': 'Hỗ Trợ Toàn Quốc',

    'projects.eyebrow': 'Công Trình Tiêu Biểu',
    'projects.title': 'Dự Án Nổi Bật',
    'projects.desc': 'Kết quả thực tế từ các triển khai trong ngành sản xuất Việt Nam.',
    'proj1.title': 'Tự Động Hóa Nhà Máy Thức Ăn Chăn Nuôi',
    'proj1.desc': 'Lắp đặt biến tần ARINCO AV68 cho 12 dây chuyền băng tải tại cơ sở sản xuất thức ăn chăn nuôi lớn ở Long An, giảm tiêu thụ điện năng 35%.',
    'proj2.title': 'Nâng Cấp Nhà Máy Dệt',
    'proj2.desc': 'Thay thế 80+ động cơ trục chính bằng hộp số R-Series tại nhà máy dệt ở Bình Dương, tăng tốc độ sản xuất 20% với chi phí bảo trì thấp hơn.',
    'proj3.title': 'Điều Khiển Bơm Nuôi Tôm',
    'proj3.desc': 'Triển khai biến tần ARINCO AU2 điều khiển máy bơm sục khí tại trại tôm ở Cà Mau, tự động quản lý oxy 24/7 và giảm hóa đơn điện 28%.',
    'proj4.title': 'Dây Chuyền Sản Xuất Viên Gỗ',
    'proj4.desc': 'Thiết kế hệ thống truyền động hoàn chỉnh cho nhà sản xuất viên sinh khối ở Đồng Nai, tích hợp biến tần AV23 với điều khiển PLC cho sản lượng tự động hoàn toàn.',

    'contact.eyebrow': 'Liên Hệ Với Chúng Tôi',
    'contact.title': 'Liên Hệ',
    'contact.desc': 'Sẵn sàng tự động hóa? Đội ngũ của chúng tôi sẽ phản hồi trong vòng một ngày làm việc.',
    'contact.sales': 'Hotline Kinh Doanh',
    'contact.tech': 'Hotline Kỹ Thuật',
    'contact.email.label': 'Email',
    'contact.website': 'Website',
    'form.name': 'Họ và Tên',
    'form.name.ph': 'Họ và tên của bạn',
    'form.company': 'Công Ty',
    'form.company.ph': 'Tên công ty',
    'form.phone': 'Điện Thoại',
    'form.phone.ph': '0xxx xxx xxx',
    'form.email': 'Email',
    'form.email.ph': 'email@congty.vn',
    'form.message': 'Nội Dung',
    'form.message.ph': 'Mô tả dự án hoặc nhu cầu của bạn...',
    'form.submit': 'Gửi Tin Nhắn',

    'footer.tagline': 'Giải pháp Tự Động Hóa Công Nghiệp & Truyền Động Điện cho ngành sản xuất Việt Nam.',
    'footer.quick': 'Liên Kết Nhanh',
    'footer.products': 'Sản Phẩm',
    'footer.contact': 'Liên Hệ',
    'footer.copyright': '© 2026 CÔNG NGHỆ THIÊN HỒ. Tất cả quyền được bảo lưu.',
    'footer.sub': 'Giải Pháp Tự Động Hóa Công Nghiệp & Truyền Động Điện',

    'err.required': 'Trường này là bắt buộc.',
    'err.email': 'Vui lòng nhập địa chỉ email hợp lệ.',
    'err.phone': 'Vui lòng nhập số điện thoại hợp lệ.',
    'err.message': 'Nội dung phải có ít nhất 10 ký tự.',
    'form.success': 'Cảm ơn! Chúng tôi sẽ liên hệ với bạn trong vòng một ngày làm việc.',
  }
};

// ── Language Switcher ─────────────────────────────────────────
let currentLang = localStorage.getItem('tht-lang') || 'vi';

function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = currentLang;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[currentLang][key] !== undefined) {
      el.textContent = translations[currentLang][key];
    }
  });

  // innerHTML (for hero headline with <span> inside)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[currentLang][key] !== undefined) {
      el.innerHTML = translations[currentLang][key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[currentLang][key] !== undefined) {
      el.placeholder = translations[currentLang][key];
    }
  });

  // Update lang toggle button state
  document.getElementById('langEN').classList.toggle('active', currentLang === 'en');
  document.getElementById('langVI').classList.toggle('active', currentLang === 'vi');

  // Reset any visible form errors so they re-validate in the new language
  document.querySelectorAll('.field-error').forEach(el => { el.textContent = ''; });
  document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
}

document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'vi' ? 'vi' : 'en';
  localStorage.setItem('tht-lang', currentLang);
  applyLanguage();
});

// ── AOS Init ──────────────────────────────────────────────────
AOS.init({ duration: 680, once: true, offset: 55 });

// ── Sticky Header + Scroll Progress ──────────────────────────
const header        = document.getElementById('siteHeader');
const scrollBar     = document.getElementById('scrollProgress');
const backToTopBtn  = document.getElementById('backToTop');

function onScroll() {
  const y    = window.scrollY;
  const maxY = document.documentElement.scrollHeight - window.innerHeight;

  header.classList.toggle('scrolled', y > 60);
  backToTopBtn.classList.toggle('visible', y > 420);
  scrollBar.style.width = (y / maxY * 100) + '%';

  highlightNavLink();
  triggerCounters();
}

window.addEventListener('scroll', onScroll, { passive: true });

// ── Active Nav Link ───────────────────────────────────────────
const sections = document.querySelectorAll('main section[id]');

function highlightNavLink() {
  const mid = window.scrollY + window.innerHeight / 3;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
    if (!link) return;
    link.classList.toggle('active', mid >= sec.offsetTop && mid < sec.offsetTop + sec.offsetHeight);
  });
}

// ── Mobile Menu ───────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

function closeMenu() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('click', e => {
  if (!header.contains(e.target)) closeMenu();
});

// ── Animated Counters ─────────────────────────────────────────
let countersRan = false;

function triggerCounters() {
  if (countersRan) return;
  const section = document.querySelector('.stats');
  if (!section) return;
  if (section.getBoundingClientRect().top < window.innerHeight * 0.88) {
    countersRan = true;
    runCounters();
  }
}

function runCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target   = parseInt(el.dataset.target, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1800;
    const fps      = 60;
    const total    = Math.round(duration / (1000 / fps));
    let frame      = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / total;
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (frame >= total) {
        el.textContent = target + suffix;
        clearInterval(timer);
      }
    }, 1000 / fps);
  });
}

// ── Back to Top ───────────────────────────────────────────────
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Projects Swiper ───────────────────────────────────────────
new Swiper('.projects-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    640:  { slidesPerView: 1.5 },
    900:  { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  },
  a11y: {
    prevSlideMessage: 'Previous project',
    nextSlideMessage: 'Next project',
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
});

// ── Contact Form Validation ───────────────────────────────────
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function validateField(input) {
  const id  = input.id;
  const val = input.value.trim();
  const errEl = document.getElementById(id + 'Error');
  let msg = '';

  if (input.required && !val) {
    msg = t('err.required');
  } else if (id === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    msg = t('err.email');
  } else if (id === 'phone' && val && !/^[0-9+\s\-()\\.]{7,15}$/.test(val)) {
    msg = t('err.phone');
  } else if (id === 'message' && val && val.length < 10) {
    msg = t('err.message');
  }

  if (errEl) errEl.textContent = msg;
  input.classList.toggle('invalid', !!msg);
  return !msg;
}

['name', 'phone', 'email', 'message'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('blur', () => validateField(el));
    el.addEventListener('input', () => {
      if (el.classList.contains('invalid')) validateField(el);
    });
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const fields   = ['name', 'phone', 'email', 'message'].map(id => document.getElementById(id));
  const allValid = fields.every(f => f && validateField(f));

  if (allValid) {
    formSuccess.textContent = t('form.success');
    form.reset();
    fields.forEach(f => { if (f) f.classList.remove('invalid'); });
    ['name', 'phone', 'email', 'message'].forEach(id => {
      const err = document.getElementById(id + 'Error');
      if (err) err.textContent = '';
    });
    setTimeout(() => { formSuccess.textContent = ''; }, 6000);
  }
});

// ── Init ──────────────────────────────────────────────────────
applyLanguage();
onScroll();
