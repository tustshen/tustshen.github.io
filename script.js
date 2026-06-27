const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const links = document.querySelectorAll(".site-nav a");
const reveals = document.querySelectorAll(".reveal");
const languageButtons = document.querySelectorAll(".lang-button");

const translations = {
  en: {
    meta_title: "Stevin Shen | IPC Solutions",
    meta_description:
      "Stevin Shen helps global clients launch and deploy IPC products with cameras, cloud platforms, AI analytics, OEM/ODM support and turnkey delivery.",
    brand_aria: "Back to top",
    nav_aria: "Main navigation",
    lang_aria: "Language switcher",
    menu_aria: "Toggle navigation",
    nav_about: "About",
    nav_products: "Products",
    nav_demo: "Demo",
    nav_contact: "Contact",
    hero_eyebrow: "Stevin Shen / IPC Solution Consultant",
    hero_title: "IPC products, platform and deployment, made simple.",
    hero_text:
      "I help global clients build and launch IPC solutions across smart cameras, NVR, 4G and solar devices, cloud platforms, AI analytics and OEM/ODM delivery.",
    hero_cta_primary: "Get in touch",
    hero_cta_secondary: "View products",
    panel_label: "Focus",
    panel_title: "Turnkey IPC solutions for brands, channels and system partners.",
    tag_1: "Indoor / Outdoor Cameras",
    tag_2: "4G / Battery / Solar",
    tag_3: "NVR / Storage",
    tag_4: "Cloud / App / API",
    tag_5: "OEM / ODM",
    hero_preview_alt: "IPC solution visual overview",
    about_kicker: "About",
    about_title: "A clear IPC partner for international business.",
    about_card_1_title: "What I understand",
    about_card_1_text:
      "IPC is not only about camera specs. It is about product fit, network conditions, power options, cloud experience, deployment workflow and long-term service.",
    about_card_2_title: "What I deliver",
    about_card_2_text:
      "I package products, technology and delivery into solutions that are easier to sell, launch and deploy in real markets.",
    products_kicker: "Products",
    products_title: "A focused product lineup for real deployment scenarios.",
    product_1_alt: "Indoor IPC camera product image",
    product_1_label: "Indoor IPC",
    product_1_title: "Home and indoor monitoring",
    product_1_text:
      "Smart indoor cameras for home care, elder care, baby rooms, pet monitoring and light commercial interiors.",
    product_2_alt: "Outdoor PTZ camera product image",
    product_2_label: "Outdoor PTZ",
    product_2_title: "Perimeter and wide-area coverage",
    product_2_text:
      "Outdoor and PTZ camera options for storefronts, compounds, parking areas, parks and security perimeter use.",
    product_3_alt: "4G solar IPC product image",
    product_3_label: "4G / Solar Kit",
    product_3_title: "Remote sites and difficult power conditions",
    product_3_text:
      "4G, battery and solar-powered IPC solutions for farms, fishponds, construction sites and remote locations.",
    demo_kicker: "Demo",
    demo_title: "Visual product and platform walkthrough.",
    demo_window_title: "IPC Solution Walkthrough",
    demo_object_aria: "IPC product media showcase",
    demo_slide_1_alt: "IPC product living scene showcase",
    demo_slide_2_alt: "Indoor IPC camera close-up",
    demo_slide_3_alt: "Outdoor IPC camera close-up",
    demo_slide_4_alt: "4G IPC camera close-up",
    demo_chip_1: "Live Product View",
    demo_chip_2: "Cloud Ready",
    demo_chip_3: "AI Alert Flow",
    demo_card_1_title: "What this demo covers",
    demo_card_1_text:
      "Product categories, cloud connection, AI alert flow and the overall structure of a turnkey IPC solution.",
    demo_card_2_title: "Best use",
    demo_card_2_text:
      "This section works as a product intro block today and can be replaced later with your real MP4, YouTube or factory demo video.",
    offer_kicker: "Offer",
    offer_title: "What clients can work with me on.",
    offer_card_1_title: "Product Lines",
    offer_card_1_text:
      "Indoor cameras, outdoor cameras, PTZ, 4G devices, solar models, battery cameras, NVR and accessory bundles.",
    offer_card_2_title: "Platform Stack",
    offer_card_2_text:
      "Cloud access, remote viewing, playback, OTA, AI alerts, app workflow, API/SDK and white-label platform support.",
    offer_card_3_title: "Business Models",
    offer_card_3_text:
      "OEM, ODM, white-label launch, channel supply, branded rollout and solution packaging for overseas markets.",
    contact_kicker: "Contact",
    contact_title: "Looking for an IPC solution partner?",
    contact_text:
      "If you are building an IPC brand, expanding a channel business or preparing an overseas rollout, we can discuss product, platform and deployment together.",
    contact_email_button: "shenstevin@gmail.com",
    contact_meta_1_label: "Secondary Email",
    contact_meta_2_label: "Positioning",
    contact_meta_2_value: "IPC Products, Cloud and Deployment",
  },
  zh: {
    meta_title: "Stevin Shen | IPC 解决方案",
    meta_description:
      "Stevin Shen 面向国际客户提供 IPC 产品、云平台、AI 分析、OEM/ODM 与一站式部署方案。",
    brand_aria: "返回顶部",
    nav_aria: "主导航",
    lang_aria: "语言切换",
    menu_aria: "切换导航",
    nav_about: "关于",
    nav_products: "产品",
    nav_demo: "演示",
    nav_contact: "联系",
    hero_eyebrow: "Stevin Shen / IPC 解决方案顾问",
    hero_title: "把 IPC 产品、平台和部署，讲清楚并做落地。",
    hero_text:
      "我面向国际客户提供 IPC 解决方案，覆盖智能摄像机、NVR、4G 与太阳能设备、云平台、AI 分析，以及 OEM/ODM 交付支持。",
    hero_cta_primary: "立即联系",
    hero_cta_secondary: "查看产品",
    panel_label: "核心定位",
    panel_title: "服务品牌客户、渠道客户和系统合作伙伴的一站式 IPC 方案。",
    tag_1: "室内 / 室外摄像机",
    tag_2: "4G / 电池 / 太阳能",
    tag_3: "NVR / 存储",
    tag_4: "云平台 / App / API",
    tag_5: "OEM / ODM",
    hero_preview_alt: "IPC 解决方案视觉总览",
    about_kicker: "关于",
    about_title: "一个面向国际业务、表达清晰的 IPC 合作伙伴。",
    about_card_1_title: "我理解什么",
    about_card_1_text:
      "IPC 不只是比摄像头参数，更关键的是产品适配、网络条件、供电方式、云端体验、部署流程和长期服务能力。",
    about_card_2_title: "我交付什么",
    about_card_2_text:
      "我把产品、技术和交付方式打包成更容易销售、更容易上线、更容易落地的解决方案。",
    products_kicker: "产品",
    products_title: "围绕真实部署场景整理的核心产品线。",
    product_1_alt: "室内 IPC 摄像机产品图",
    product_1_label: "室内 IPC",
    product_1_title: "家庭与室内看护",
    product_1_text:
      "适用于家庭看护、老人看护、婴童房、宠物监控和轻量商业室内环境的智能室内摄像机。",
    product_2_alt: "室外 PTZ 摄像机产品图",
    product_2_label: "室外 PTZ",
    product_2_title: "周界与大范围覆盖",
    product_2_text:
      "适用于门店外立面、园区、停车区、庭院和周界安防的室外与云台摄像机方案。",
    product_3_alt: "4G 太阳能 IPC 产品图",
    product_3_label: "4G / 太阳能套装",
    product_3_title: "偏远点位与复杂供电环境",
    product_3_text:
      "面向农场、鱼塘、工地和远程点位的 4G、电池与太阳能 IPC 部署方案。",
    demo_kicker: "演示",
    demo_title: "产品与平台的可视化演示模块。",
    demo_window_title: "IPC 解决方案演示",
    demo_object_aria: "IPC 产品媒体展示区",
    demo_slide_1_alt: "IPC 产品客厅场景展示",
    demo_slide_2_alt: "室内 IPC 摄像机特写",
    demo_slide_3_alt: "室外 IPC 摄像机特写",
    demo_slide_4_alt: "4G IPC 摄像机特写",
    demo_chip_1: "真实产品画面",
    demo_chip_2: "支持云平台",
    demo_chip_3: "AI 告警流程",
    demo_card_1_title: "这个演示展示什么",
    demo_card_1_text:
      "展示产品类型、云端连接、AI 告警流程，以及一站式 IPC 解决方案的整体结构。",
    demo_card_2_title: "最佳用途",
    demo_card_2_text:
      "现在它可作为产品介绍模块使用，后续你拿到真实 MP4、YouTube 或工厂演示视频后可以直接替换。",
    offer_kicker: "服务内容",
    offer_title: "客户可以和我一起推进的方向。",
    offer_card_1_title: "产品线",
    offer_card_1_text:
      "室内机、室外机、云台机、4G 设备、太阳能型号、电池机、NVR 与配件套装。",
    offer_card_2_title: "平台能力",
    offer_card_2_text:
      "云接入、远程查看、回放、OTA、AI 告警、App 流程、API/SDK 与白牌平台支持。",
    offer_card_3_title: "合作模式",
    offer_card_3_text:
      "OEM、ODM、白牌上线、渠道供货、品牌化 rollout，以及面向海外市场的方案包装。",
    contact_kicker: "联系",
    contact_title: "正在寻找 IPC 解决方案合作伙伴？",
    contact_text:
      "如果你在做 IPC 品牌、渠道扩张，或者准备海外上线，我们可以一起讨论产品、平台与部署路径。",
    contact_email_button: "shenstevin@gmail.com",
    contact_meta_1_label: "备用邮箱",
    contact_meta_2_label: "定位",
    contact_meta_2_value: "IPC 产品、云平台与部署方案",
  },
};

function applyTranslations(language) {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.meta_title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.meta_description);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const config = element.getAttribute("data-i18n-attr");
    if (!config) {
      return;
    }

    config.split(";").forEach((entry) => {
      const [attribute, key] = entry.split(":");
      if (attribute && key && dictionary[key]) {
        element.setAttribute(attribute.trim(), dictionary[key].trim());
      }
    });
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  }
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang || "en";
    localStorage.setItem("preferred-language", language);
    applyTranslations(language);
  });
});

const savedLanguage = localStorage.getItem("preferred-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
applyTranslations(savedLanguage || browserLanguage);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  reveals.forEach((item) => revealObserver.observe(item));
} else {
  reveals.forEach((item) => item.classList.add("is-visible"));
}
