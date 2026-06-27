const toggle = document.querySelector(".nav-toggle");
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
    nav_offer: "Offer",
    nav_showcase: "Showcase",
    nav_contact: "Contact",
    hero_eyebrow: "Stevin Shen / IPC Solution Consultant",
    hero_title: "Turnkey IPC solutions for global brands, channels and deployment partners.",
    hero_text:
      "I help clients shape market-ready IPC offers across smart cameras, 4G and solar devices, NVR systems, cloud platforms, AI alerts and OEM/ODM delivery.",
    hero_cta_primary: "Request collaboration",
    hero_cta_secondary: "See product categories",
    trust_1: "Product + Platform + Delivery",
    trust_2: "OEM / ODM / White-label",
    trust_3: "International-facing presentation",
    panel_label: "Positioning",
    panel_title:
      "A single partner who can explain the product, the platform and the rollout path clearly.",
    tag_1: "Indoor / Outdoor Cameras",
    tag_2: "4G / Battery / Solar",
    tag_3: "NVR / Storage",
    tag_4: "Cloud / App / API",
    tag_5: "OEM / ODM",
    hero_preview_alt: "IPC solution visual overview",
    about_kicker: "About",
    about_title: "Built for clients who need more than a product list.",
    about_card_1_title: "Commercial understanding",
    about_card_1_text:
      "IPC decisions are shaped by use case, power conditions, network constraints, service model and customer experience, not just by hardware specs.",
    about_card_2_title: "Solution packaging",
    about_card_2_text:
      "I turn products, platform capabilities and rollout logic into offers that are easier to present, easier to launch and easier to scale.",
    products_kicker: "Products",
    products_title: "Three high-value categories clients ask for most often.",
    product_1_alt: "Indoor IPC camera product image",
    product_1_label: "Indoor IPC",
    product_1_title: "Home care and indoor monitoring",
    product_1_text:
      "Designed for home care, baby rooms, elder monitoring, pet observation and indoor commercial visibility.",
    product_2_alt: "Outdoor PTZ camera product image",
    product_2_label: "Outdoor PTZ",
    product_2_title: "Perimeter and site coverage",
    product_2_text:
      "Built for storefronts, compounds, parking areas, courtyards and broader outdoor security coverage.",
    product_3_alt: "4G solar IPC product image",
    product_3_label: "4G / Solar Kit",
    product_3_title: "Remote and hard-to-wire deployment",
    product_3_text:
      "Suitable for farms, fishponds, construction sites and remote locations where power or wired internet is limited.",
    offer_kicker: "Offer",
    offer_title: "What clients can move forward with me.",
    offer_card_1_title: "Product selection",
    offer_card_1_text:
      "Indoor cameras, outdoor cameras, PTZ, 4G devices, solar models, battery cameras, NVR and bundled accessories.",
    offer_card_2_title: "Platform layer",
    offer_card_2_text:
      "Cloud access, remote viewing, playback, OTA, AI alerts, app experience, API/SDK and white-label platform support.",
    offer_card_3_title: "Business models",
    offer_card_3_text:
      "OEM, ODM, white-label launch, channel supply, branded rollout and market-facing solution packaging.",
    offer_quote_label: "Why it matters",
    offer_quote_title: "Clients do not buy isolated hardware.",
    offer_quote_text:
      "They buy a deployment path, a service story and a product offer that makes commercial sense.",
    showcase_kicker: "Showcase",
    showcase_title: "A cleaner media block for product and platform storytelling.",
    demo_window_title: "IPC Solution Walkthrough",
    demo_object_aria: "IPC product media showcase",
    demo_slide_1_alt: "IPC product living scene showcase",
    demo_slide_2_alt: "Indoor IPC camera close-up",
    demo_slide_3_alt: "Outdoor IPC camera close-up",
    demo_slide_4_alt: "4G IPC camera close-up",
    demo_chip_1: "Live Product View",
    demo_chip_2: "Cloud Ready",
    demo_chip_3: "AI Alert Flow",
    demo_card_1_title: "What this section should communicate",
    demo_card_1_text:
      "A fast visual summary of product category, deployment environment and platform readiness.",
    demo_card_2_title: "Next upgrade",
    demo_card_2_text:
      "Replace this reel with your real MP4, factory footage or product dashboard demo when available.",
    contact_kicker: "Contact",
    contact_title:
      "Need an IPC solution partner who can explain and package the whole offer?",
    contact_text:
      "If you are building an IPC brand, growing a channel business or preparing an international rollout, we can talk about product mix, platform support and deployment strategy.",
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
    nav_offer: "服务",
    nav_showcase: "展示",
    nav_contact: "联系",
    hero_eyebrow: "Stevin Shen / IPC 解决方案顾问",
    hero_title: "面向国际品牌、渠道与部署合作方的一站式 IPC 方案。",
    hero_text:
      "我帮助客户打造更容易推向市场的 IPC 产品方案，覆盖智能摄像机、4G 与太阳能设备、NVR 系统、云平台、AI 告警以及 OEM/ODM 交付支持。",
    hero_cta_primary: "发起合作咨询",
    hero_cta_secondary: "查看产品分类",
    trust_1: "产品 + 平台 + 交付",
    trust_2: "OEM / ODM / 白牌化",
    trust_3: "面向国际客户的表达方式",
    panel_label: "定位",
    panel_title: "一个能够把产品、平台与 rollout 路径讲清楚的统一合作窗口。",
    tag_1: "室内 / 室外摄像机",
    tag_2: "4G / 电池 / 太阳能",
    tag_3: "NVR / 存储",
    tag_4: "云平台 / App / API",
    tag_5: "OEM / ODM",
    hero_preview_alt: "IPC 解决方案视觉总览",
    about_kicker: "关于",
    about_title: "面向那些需要的不只是产品清单的客户。",
    about_card_1_title: "商业理解",
    about_card_1_text:
      "IPC 决策不仅由硬件参数决定，更受使用场景、供电条件、网络限制、服务模式和终端体验影响。",
    about_card_2_title: "方案包装",
    about_card_2_text:
      "我把产品、平台能力和 rollout 逻辑打包成更容易展示、更容易上线、更容易复制的市场化方案。",
    products_kicker: "产品",
    products_title: "客户最常询问的三类高价值产品方向。",
    product_1_alt: "室内 IPC 摄像机产品图",
    product_1_label: "室内 IPC",
    product_1_title: "家庭看护与室内监控",
    product_1_text:
      "适用于家庭看护、婴童房、老人监护、宠物观察以及室内商业可视化场景。",
    product_2_alt: "室外 PTZ 摄像机产品图",
    product_2_label: "室外 PTZ",
    product_2_title: "周界与站点覆盖",
    product_2_text:
      "适用于门店外立面、园区、停车区、庭院和更大范围的室外安全覆盖。",
    product_3_alt: "4G 太阳能 IPC 产品图",
    product_3_label: "4G / 太阳能套装",
    product_3_title: "偏远点位与复杂布线环境",
    product_3_text:
      "适用于农场、鱼塘、工地和电力或有线网络受限的远程位置。",
    offer_kicker: "服务",
    offer_title: "客户可以直接和我推进的合作内容。",
    offer_card_1_title: "产品选型",
    offer_card_1_text:
      "室内机、室外机、云台机、4G 设备、太阳能型号、电池机、NVR 与配件组合。",
    offer_card_2_title: "平台层能力",
    offer_card_2_text:
      "云接入、远程查看、回放、OTA、AI 告警、App 体验、API/SDK 与白牌平台支持。",
    offer_card_3_title: "合作模式",
    offer_card_3_text:
      "OEM、ODM、白牌上线、渠道供货、品牌 rollout 以及面向市场的整体方案包装。",
    offer_quote_label: "为什么重要",
    offer_quote_title: "客户买的不是孤立硬件。",
    offer_quote_text:
      "客户买的是部署路径、服务故事，以及一个具备商业逻辑的完整产品方案。",
    showcase_kicker: "展示",
    showcase_title: "更干净的产品与平台展示模块。",
    demo_window_title: "IPC 解决方案演示",
    demo_object_aria: "IPC 产品媒体展示区",
    demo_slide_1_alt: "IPC 产品客厅场景展示",
    demo_slide_2_alt: "室内 IPC 摄像机特写",
    demo_slide_3_alt: "室外 IPC 摄像机特写",
    demo_slide_4_alt: "4G IPC 摄像机特写",
    demo_chip_1: "真实产品画面",
    demo_chip_2: "支持云平台",
    demo_chip_3: "AI 告警流程",
    demo_card_1_title: "这个区块应该传达什么",
    demo_card_1_text: "用最快速度说明产品类型、部署环境和平台就绪度。",
    demo_card_2_title: "下一步升级",
    demo_card_2_text:
      "等你拿到真实 MP4、工厂素材或平台演示后，这里可以直接替换成正式视频模块。",
    contact_kicker: "联系",
    contact_title: "你是否需要一个能把整套 IPC 方案讲明白并包装出来的合作伙伴？",
    contact_text:
      "如果你在做 IPC 品牌、渠道增长或国际化上线，我们可以直接讨论产品组合、平台支持与部署策略。",
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

if (toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

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
    { threshold: 0.18 }
  );

  reveals.forEach((item) => revealObserver.observe(item));
} else {
  reveals.forEach((item) => item.classList.add("is-visible"));
}
