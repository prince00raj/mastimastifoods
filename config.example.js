// Copy this file to config.js and fill your own values.
// config.js is ignored by Git so your local keys stay out of commits.
window.MASTI_CONFIG = {
  EMAILJS: {
    ENABLED: true,
    PUBLIC_KEY: "YOUR_EMAILJS_PUBLIC_KEY",
    SERVICE_ID: "YOUR_EMAILJS_SERVICE_ID",
    STOCKIST_TEMPLATE_ID: "YOUR_EMAILJS_STOCKIST_TEMPLATE_ID",
    CONTACT_TEMPLATE_ID: "YOUR_EMAILJS_CONTACT_TEMPLATE_ID"
  },
  GOOGLE_SHEETS: {
    ENABLED: true,
    REVIEWS_WEB_APP_URL: "https://script.google.com/macros/s/YOUR_REVIEWS_WEB_APP_ID/exec",
    ORDERS_WEB_APP_URL: "https://script.google.com/macros/s/YOUR_ORDERS_WEB_APP_ID/exec",
    STOCKISTS_WEB_APP_URL: "https://script.google.com/macros/s/YOUR_STOCKISTS_WEB_APP_ID/exec",
    REVIEWS_SHEET_NAME: "Reviews",
    ORDERS_SHEET_NAME: "Orders",
    STOCKISTS_SHEET_NAME: "Stockists"
  },
  RAZORPAY: {
    ENABLED: true,
    KEY_ID: "rzp_test_xxxxxxxxxxxx",
    CURRENCY: "INR",
    BUSINESS_NAME: "Masti Masti Snacks",
    DESCRIPTION: "Masti Masti snack order",
    THEME_COLOR: "#d84627"
  },
  TAWK_TO: {
    ENABLED: true,
    PROPERTY_ID: "YOUR_TAWK_PROPERTY_ID",
    WIDGET_ID: "YOUR_TAWK_WIDGET_ID"
  },
  SUPPORT: {
    PHONE: "+910000000000",
    WHATSAPP_NUMBER: "910000000000",
    EMAIL: "sales@example.com"
  },
  SITE_BOT: {
    ENABLED: true,
    AUTO_OPEN: false
  }
};

window.CONFIG = window.MASTI_CONFIG;
