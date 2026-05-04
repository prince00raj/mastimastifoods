// config.js
// This file is ignored by Git. Put your public browser keys and endpoints here.
// Never put Razorpay key_secret, Google service-account JSON, or other server secrets in frontend code.
window.MASTI_CONFIG = {
  EMAILJS: {
    ENABLED: true,
    PUBLIC_KEY: "794qogJgJHCj9Yg9S",
    SERVICE_ID: "service_oj8tjqo",
    STOCKIST_TEMPLATE_ID: "template_ogr8yvg",
    CONTACT_TEMPLATE_ID: "template_ogr8yvg"
  },

  GOOGLE_SHEETS: {
    ENABLED: true,
    REVIEWS_WEB_APP_URL: "https://script.google.com/macros/s/AKfycbyTP2j9hIyG_RuU-anRm3QD2NnNzmbBgV8HzV2A_RcLbWCpSS0jjHe1OmXX9mEa4_5iOw/exec",
    ORDERS_WEB_APP_URL: "https://script.google.com/macros/s/AKfycbyTP2j9hIyG_RuU-anRm3QD2NnNzmbBgV8HzV2A_RcLbWCpSS0jjHe1OmXX9mEa4_5iOw/exec",
    STOCKISTS_WEB_APP_URL: "https://script.google.com/macros/s/AKfycbyTP2j9hIyG_RuU-anRm3QD2NnNzmbBgV8HzV2A_RcLbWCpSS0jjHe1OmXX9mEa4_5iOw/exec",
    REVIEWS_SHEET_NAME: "Reviews",
    ORDERS_SHEET_NAME: "Orders",
    STOCKISTS_SHEET_NAME: "Stockists"
  },

  RAZORPAY: {
    ENABLED: true,
    KEY_ID: "rzp_test_Skc07FwH04njah",
    CURRENCY: "INR",
    BUSINESS_NAME: "Masti Masti Snacks",
    DESCRIPTION: "Masti Masti snack order",
    THEME_COLOR: "#d84627"
  },

  TAWK_TO: {
    ENABLED: true,
    PROPERTY_ID: "69edce4452f9f01c331569b1",
    WIDGET_ID: "1jn4erfsm"
  },

  SUPPORT: {
    PHONE: "+918299886972",
    WHATSAPP_NUMBER: "918299886972",
    EMAIL: "sales@mastimastisnacks.com"
  },

  SITE_BOT: {
    ENABLED: true,
    AUTO_OPEN: false
  }
};

// Backward compatibility for older code snippets.
window.CONFIG = window.MASTI_CONFIG;
