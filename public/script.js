const products = [
  {
    id: "dal-chawal",
    name: "Dal Chawal Tadka",
    short: "Homestyle dal-rice crunch with warm tadka spice.",
    price: 49,
    mrp: 59,
    size: "100g pouch",
    spice: 2,
    region: "North India",
    image: "./assets/masti/dal-chawal.jpg",
    color: "#f2b84b",
    ingredients: "Rice flakes, Bengal gram dal, edible vegetable oil, iodised salt, cumin, coriander and black pepper.",
    story: "Built for chai breaks, tiffin boxes and comfort snacking. Mild, familiar and easy to repeat.",
    learn: "Best displayed beside tea, namkeen and family snack shelves.",
    tags: ["100% veg", "No artificial colors", "Real masala"]
  },
  {
    id: "chhota-don",
    name: "Chhota Don",
    short: "Fiery street-style crunch with peanut and corn bite.",
    price: 39,
    mrp: 49,
    size: "80g pouch",
    spice: 3,
    region: "Delhi NCR",
    image: "./assets/masti/chhota-don.jpg",
    color: "#d84627",
    ingredients: "Corn, peanuts, edible vegetable oil, red chilli, black salt, mango powder and iodised salt.",
    story: "A louder impulse snack made for canteens, counters, movie breaks and spicy snack lovers.",
    learn: "Place it near cold drinks or checkout counters for fast impulse sales.",
    tags: ["Spicy", "Counter sale", "Street style"]
  },
  {
    id: "veg-biryani",
    name: "Veg Biryani Crunch",
    short: "Party-style masala snack with biryani warmth.",
    price: 55,
    mrp: 65,
    size: "100g pouch",
    spice: 3,
    region: "East India",
    image: "./assets/masti/veg-biryani.jpg",
    color: "#7b9250",
    ingredients: "Rice flakes, dehydrated vegetables, biryani masala, edible vegetable oil and iodised salt.",
    story: "A festive pack for sharing bowls, family evenings and celebration snack tables.",
    learn: "Works well in combo boxes and festive bundles because the flavor feels special.",
    tags: ["Party pack", "Biryani masala", "Festive"]
  }
];

const newsItems = [
  ["New retail packs", "Fresh 80g and 100g pouches are ready for local shops and canteens."],
  ["Dealer expansion", "Masti Masti is onboarding distributors in Delhi NCR, Lucknow, Ranchi and MP."],
  ["Festival combo boxes", "Mixed cartons for events, family gatherings and corporate snack counters are now available."]
];

const events = [
  ["Factory Tasting Day", "Shahjahanpur", "May 18, 2026"],
  ["Retail Partner Meet", "Delhi NCR", "June 7, 2026"],
  ["Snack Shelf Demo", "Lucknow", "June 22, 2026"]
];

const stateCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Ziro"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Tezpur"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
  "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Hisar"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Mandi", "Solan", "Kullu"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  "Manipur": ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Ukhrul"],
  "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh", "Baghmara"],
  "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
  "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Rangpo"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Noida", "Shahjahanpur"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh", "Haldwani", "Roorkee"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
  "Andaman and Nicobar Islands": ["Port Blair", "Diglipur", "Mayabunder", "Rangat"],
  "Chandigarh": ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Udhampur"],
  "Ladakh": ["Leh", "Kargil"],
  "Lakshadweep": ["Kavaratti", "Agatti", "Minicoy"],
  "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"]
};

const translations = {
  en: {
    tagline: "3D Desi Snack Store",
    navHome: "Home",
    navNews: "News",
    navCart: "Cart",
    navProducts: "Products",
    navLearn: "Learn",
    navEvents: "Events",
    navRate: "Rate Us",
    navMember: "Become a Stockist",
    navRetailerLogin: "Retailer Login",
    navAbout: "About",
    navReturn: "Return Policy",
    navRefund: "Refund Policy",
    navPrivacy: "Privacy Policy",
    navDisclaimer: "Disclaimer",
    navRegion: "By Region",
    navLanguage: "Language",
    navContact: "Contact Us",
    footerText: "Factory-fresh desi snacks, direct from Shahjahanpur to every snack shelf.",
    heroTitle: "Buy desi crunch in a 3D snack world.",
    heroCopy: "Explore Masti Masti products, open a pack in 3D, add it to cart, and continue to a payment page.",
    shopNow: "Shop Products",
    viewCart: "View Cart",
    stageTap: "Tap a pack",
    stageStrong: "Clear 3D product view",
    quickNews: "Latest snack news",
    quickRegion: "Order by region",
    quickLearn: "Learn about flavours",
    quickEvents: "Attend tasting events",
    view: "View",
    view3d: "View in 3D",
    add: "Add",
    addToCart: "Add to Cart",
    productsTitle: "Products",
    productsCopy: "Choose a snack, rotate through its 3D detail page, and buy the exact pack you want.",
    backProducts: "Back to products",
    price: "Price",
    ingredients: "Ingredients",
    retailTip: "Retail tip",
    goCart: "Go to Cart",
    cartTitle: "Cart",
    cartEmptyCopy: "Your cart is empty. Pick a snack first and it will appear here with quantity controls.",
    browseProducts: "Browse Products",
    cartCopy: "Review your snacks before moving to the 3D payment page.",
    totalAmount: "Total amount",
    proceedPayment: "Proceed to Payment",
    checkoutTitle: "Checkout",
    checkoutCopy: "Enter buyer name, contact details, and address. Then test Razorpay checkout with your configured API key.",
    buyerDetails: "Buyer Details",
    fullName: "Full name",
    contactNumber: "Contact number",
    street: "Street",
    villageArea: "Village / Area",
    state: "State",
    city: "City",
    pinCode: "PIN code",
    fullAddress: "Full address",
    paymentNote: "Use Razorpay test keys in config.js. For live payments, create the order securely on your backend before opening checkout.",
    testRazorpay: "Test Razorpay Payment",
    placeCodOrder: "Place COD Order",
    paymentMethods: "Payment Methods",
    onlinePayment: "Cards / UPI",
    codPayment: "Cash on Delivery",
    codPassLabel: "Approved member pass ID for COD",
    codPassHelp: "COD is available only after we approve your stockist application and send your member pass.",
    yourOrder: "Your Order",
    subtotal: "Subtotal",
    shipping: "Shipping",
    free: "Free",
    total: "Total",
    razorpayInfo: "This checkout opens Razorpay in test mode when your key starts with rzp_test. Keep key_secret on your backend only.",
    newsTitle: "News",
    newsCopy: "Updates from the Masti Masti factory, retail network and product shelf.",
    learnTitle: "Learn",
    learnCopy: "Understand flavor notes, shelf placement, ingredients and usage ideas for every product.",
    eventsTitle: "Events",
    eventsCopy: "Meet the team, taste the range, and build your dealer plan.",
    registerInterest: "Register interest",
    rateTitle: "Rate Us",
    rateCopy: "Tell us how the snacks tasted. Your rating is saved on this website and helps the next buyer decide faster.",
    yourName: "Your name",
    rating: "Rating",
    yourReview: "Your review",
    submitRating: "Submit Rating",
    noRatings: "No ratings yet. Be the first buyer to review Masti Masti.",
    memberTitle: "Become a Stockist",
    memberCopy: "Fill the form below - we'll share pricing, MOQ, and exclusive dealer benefits.",
    dealerProgram: "Dealer Program",
    stockistPass: "Stockist Pass",
    dealerBenefits: "Pricing | MOQ | Dealer benefits",
    businessStore: "Business / store name",
    stockistType: "Stockist type",
    message: "Message",
    sendStockist: "Send Stockist Enquiry",
    applicationId: "Application ID",
    stockistApplicationSent: "Your application is submitted for approval. We will send your member pass after confirmation.",
    stockistPassGenerated: "Your stockist pass ID",
    retailerLoginTitle: "Retailer Login",
    retailerLoginCopy: "We are working on the retailer login portal. I will work on it in the next few days, and this section will soon include login, order history, pricing, and dealer tools.",
    retailerLoginCardTitle: "Retailer portal coming soon",
    retailerLoginCardCopy: "This area is reserved for verified retailers and stockists. For now, please use the stockist enquiry form or contact sales for pricing and order support.",
    contactTitle: "Contact Us",
    contactCopy: "For online orders, wholesale cartons, dealer registration or payment support, send your details here.",
    name: "Name",
    mobile: "Mobile",
    sendEnquiry: "Send Enquiry",
    whatsappSales: "WhatsApp Sales",
    aboutTitle: "About Masti Masti",
    aboutCopy: "Masti Masti is a desi snack brand built for everyday crunch, clear ingredients, and easy online buying.",
    returnTitle: "Return Policy",
    returnCopy: "Returns are accepted only for damaged, wrong, or expired products reported quickly after delivery.",
    refundTitle: "Refund Policy",
    refundCopy: "Refunds are processed after order verification and approval from the support team.",
    privacyTitle: "Privacy Policy",
    privacyCopy: "We collect only the details needed to process orders, contact customers, and improve the shopping experience.",
    disclaimerTitle: "Disclaimer",
    disclaimerCopy: "Website content is provided for product information and ordering guidance. Final pricing and availability may change.",
    regionTitle: "By Region",
    regionCopy: "Find snacks and dealer opportunities by active region.",
    shopRegion: "Shop this region",
    notFoundTitle: "Page not found",
    notFoundCopy: "This 3D aisle does not exist yet.",
    returnHome: "Return Home"
  },
  hi: {
    tagline: "देसी स्नैक स्टोर",
    navHome: "होम",
    navNews: "न्यूज",
    navCart: "कार्ट",
    navProducts: "प्रोडक्ट्स",
    navLearn: "लर्न",
    navEvents: "इवेंट्स",
    navRate: "रेट करें",
    navMember: "स्टॉकिस्ट बनें",
    navRetailerLogin: "रिटेलर लॉगिन",
    navAbout: "अबाउट",
    navReturn: "रिटर्न पॉलिसी",
    navRefund: "रिफंड पॉलिसी",
    navPrivacy: "प्राइवेसी",
    navDisclaimer: "डिस्क्लेमर",
    navRegion: "रीजन",
    navLanguage: "भाषा",
    navContact: "संपर्क",
    footerText: "शाहजहांपुर से हर स्नैक शेल्फ तक फैक्ट्री-फ्रेश देसी स्नैक्स।",
    heroTitle: "3D स्नैक दुनिया में देसी क्रंच खरीदें।",
    heroCopy: "प्रोडक्ट देखें, 3D पैक खोलें, कार्ट में जोड़ें और पेमेंट पेज पर जाएं।",
    shopNow: "प्रोडक्ट खरीदें",
    viewCart: "कार्ट देखें",
    stageTap: "पैक पर टैप करें",
    stageStrong: "साफ 3D प्रोडक्ट व्यू",
    quickNews: "ताजा स्नैक न्यूज",
    quickRegion: "रीजन के अनुसार ऑर्डर",
    quickLearn: "फ्लेवर के बारे में जानें",
    quickEvents: "टेस्टिंग इवेंट्स",
    view: "देखें",
    view3d: "3D में देखें",
    add: "जोड़ें",
    addToCart: "कार्ट में जोड़ें",
    productsTitle: "प्रोडक्ट्स",
    productsCopy: "स्नैक चुनें, 3D डिटेल पेज देखें और अपना पसंदीदा पैक खरीदें।",
    backProducts: "प्रोडक्ट्स पर वापस",
    price: "कीमत",
    ingredients: "सामग्री",
    retailTip: "रिटेल टिप",
    goCart: "कार्ट पर जाएं",
    cartTitle: "कार्ट",
    cartEmptyCopy: "आपका कार्ट खाली है। पहले कोई स्नैक चुनें, फिर वह यहां दिखेगा।",
    browseProducts: "प्रोडक्ट्स देखें",
    cartCopy: "3D पेमेंट पेज पर जाने से पहले अपने स्नैक्स चेक करें।",
    totalAmount: "कुल राशि",
    proceedPayment: "पेमेंट पर जाएं",
    checkoutTitle: "चेकआउट",
    checkoutCopy: "खरीदार का नाम, संपर्क और पता भरें। फिर अपनी Razorpay API key से टेस्ट पेमेंट करें।",
    buyerDetails: "खरीदार की जानकारी",
    fullName: "पूरा नाम",
    contactNumber: "संपर्क नंबर",
    street: "गली / रोड",
    villageArea: "गांव / एरिया",
    state: "राज्य",
    city: "शहर",
    pinCode: "पिन कोड",
    fullAddress: "पूरा पता",
    paymentNote: "config.js में Razorpay test key डालें। Live payment के लिए checkout खोलने से पहले backend पर order बनाएं।",
    testRazorpay: "Razorpay टेस्ट पेमेंट",
    placeCodOrder: "COD ऑर्डर करें",
    paymentMethods: "पेमेंट मेथड",
    onlinePayment: "कार्ड / UPI",
    codPayment: "कैश ऑन डिलीवरी",
    codPassLabel: "COD के लिए approved member pass ID",
    codPassHelp: "COD तभी मिलेगा जब हम आपकी stockist application approve करके member pass भेजेंगे।",
    yourOrder: "आपका ऑर्डर",
    subtotal: "सबटोटल",
    shipping: "शिपिंग",
    free: "फ्री",
    total: "कुल",
    razorpayInfo: "जब key rzp_test से शुरू होती है तो यह checkout test mode में खुलता है। key_secret केवल backend पर रखें।",
    newsTitle: "न्यूज",
    newsCopy: "Masti Masti फैक्ट्री, रिटेल नेटवर्क और प्रोडक्ट शेल्फ से अपडेट्स।",
    learnTitle: "जानें",
    learnCopy: "हर प्रोडक्ट का फ्लेवर, शेल्फ प्लेसमेंट, सामग्री और इस्तेमाल समझें।",
    eventsTitle: "इवेंट्स",
    eventsCopy: "टीम से मिलें, प्रोडक्ट taste करें और अपना dealer plan बनाएं।",
    registerInterest: "रजिस्टर करें",
    rateTitle: "रेट करें",
    rateCopy: "बताएं स्नैक्स कैसे लगे। आपकी rating इस website पर save होगी।",
    yourName: "आपका नाम",
    rating: "रेटिंग",
    yourReview: "आपका रिव्यू",
    submitRating: "रेटिंग सबमिट करें",
    noRatings: "अभी कोई rating नहीं है। Masti Masti को review करने वाले पहले buyer बनें।",
    memberTitle: "स्टॉकिस्ट बनें",
    memberCopy: "फॉर्म भरें - हम pricing, MOQ और dealer benefits share करेंगे।",
    dealerProgram: "डीलर प्रोग्राम",
    stockistPass: "स्टॉकिस्ट पास",
    dealerBenefits: "Pricing | MOQ | Dealer benefits",
    businessStore: "बिजनेस / स्टोर नाम",
    stockistType: "स्टॉकिस्ट टाइप",
    message: "मैसेज",
    sendStockist: "स्टॉकिस्ट enquiry भेजें",
    applicationId: "Application ID",
    stockistApplicationSent: "आपकी application approval के लिए submit हो गई है। confirmation के बाद हम member pass भेजेंगे।",
    stockistPassGenerated: "आपका stockist pass ID",
    retailerLoginTitle: "रिटेलर लॉगिन",
    retailerLoginCopy: "हम retailer login portal पर काम कर रहे हैं। मैं इसे अगले कुछ दिनों में तैयार करूंगा, फिर यहां login, order history, pricing और dealer tools मिलेंगे।",
    retailerLoginCardTitle: "Retailer portal जल्द आ रहा है",
    retailerLoginCardCopy: "यह area verified retailers और stockists के लिए रहेगा। अभी pricing और order support के लिए stockist enquiry form या sales contact इस्तेमाल करें।",
    contactTitle: "संपर्क करें",
    contactCopy: "ऑनलाइन order, wholesale cartons, dealer registration या payment support के लिए details भेजें।",
    name: "नाम",
    mobile: "मोबाइल",
    sendEnquiry: "Enquiry भेजें",
    whatsappSales: "WhatsApp Sales",
    aboutTitle: "Masti Masti के बारे में",
    aboutCopy: "Masti Masti रोज़ के crunch, साफ ingredients और आसान online buying के लिए बना desi snack brand है।",
    returnTitle: "रिटर्न पॉलिसी",
    returnCopy: "Damaged, wrong या expired product delivery के बाद जल्दी report करने पर return accepted है।",
    refundTitle: "रिफंड पॉलिसी",
    refundCopy: "Order verification और support team approval के बाद refund process होता है।",
    privacyTitle: "प्राइवेसी पॉलिसी",
    privacyCopy: "हम order process, customer contact और service improve करने के लिए जरूरी details ही collect करते हैं।",
    disclaimerTitle: "डिस्क्लेमर",
    disclaimerCopy: "Website content product information और ordering guidance के लिए है। Final pricing और availability बदल सकती है।",
    regionTitle: "रीजन के अनुसार",
    regionCopy: "Active region के अनुसार snacks और dealer opportunities देखें।",
    shopRegion: "इस region को shop करें",
    notFoundTitle: "Page नहीं मिला",
    notFoundCopy: "यह 3D aisle अभी मौजूद नहीं है।",
    returnHome: "होम पर वापस"
  }
};

const app = document.getElementById("app");
const cartCount = document.getElementById("cartCount");
const languageSelect = document.getElementById("languageSelect");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("siteNav");
const CONFIG = window.MASTI_CONFIG || window.CONFIG || {};
const supportConfig = CONFIG.SUPPORT || {};

let language = localStorage.getItem("mastiLanguage") || "en";
if (!translations[language]) {
  language = "en";
  localStorage.setItem("mastiLanguage", language);
}
let cart = readCart();

function readCart() {
  try {
    return JSON.parse(localStorage.getItem("mastiCart")) || [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("mastiCart", JSON.stringify(cart));
  renderCartCount();
}

function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isConfigured(value) {
  return Boolean(value) && !String(value).includes("YOUR_") && !String(value).includes("xxxxxxxx");
}

function loadScriptOnce(src, globalName) {
  if (globalName && window[globalName]) return Promise.resolve();
  const existing = document.querySelector(`script[src="${src}"]`);
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", reject, { once: true });
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function generateStockistApplicationId(member) {
  const storePart = member.store.replace(/[^a-z0-9]/gi, "").slice(0, 4).toUpperCase() || "SHOP";
  const cityPart = member.city.replace(/[^a-z0-9]/gi, "").slice(0, 3).toUpperCase() || "IND";
  const uniquePart = Date.now().toString(36).slice(-5).toUpperCase();
  return `MM-APP-${cityPart}-${storePart}-${uniquePart}`;
}

function buildOrderPayload(form) {
  const totals = getOrderTotals();
  const createdAt = new Date().toISOString();
  const paymentMethod = form.paymentMethod?.value || "online";
  return {
    orderId: `MM-${Date.now()}`,
    paymentMethod,
    stockistPassId: paymentMethod === "cod" ? form.stockistPassId.value.trim().toUpperCase() : "",
    customer: {
      name: form.fullName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      street: form.street.value.trim(),
      village: form.village.value.trim(),
      state: form.state.value,
      city: form.city.value,
      pincode: form.pincode.value.trim(),
      address: form.address.value.trim()
    },
    items: cart.map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return {
        id: item.id,
        name: product?.name || item.id,
        qty: item.qty,
        price: product?.price || 0
      };
    }),
    totals,
    createdAt
  };
}

function sendEmailJs(templateId, payload) {
  const emailConfig = CONFIG.EMAILJS || {};
  if (!emailConfig.ENABLED || !isConfigured(emailConfig.PUBLIC_KEY) || !isConfigured(emailConfig.SERVICE_ID) || !isConfigured(templateId)) {
    return Promise.resolve({ skipped: true });
  }
  return loadScriptOnce("https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js", "emailjs")
    .then(() => {
      emailjs.init({ publicKey: emailConfig.PUBLIC_KEY });
      return emailjs.send(emailConfig.SERVICE_ID, templateId, payload);
    });
}

async function postToGoogleSheets(url, payload) {
  try {
    const response = await fetch('/api/sheets-proxy', {   // <-- use this endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    console.log('API Response:', data);
    return { success: true, data };
  } catch (error) {
    console.error('API Error:', error);
    return { success: false, error };
  }
}

function sendOrderToGoogleSheets(order, payment = {}) {
  const sheetsConfig = CONFIG.GOOGLE_SHEETS || {};
  if (!sheetsConfig.ENABLED || !isConfigured(sheetsConfig.ORDERS_WEB_APP_URL)) {
    return Promise.resolve({ skipped: true });
  }
  return postToGoogleSheets(sheetsConfig.ORDERS_WEB_APP_URL, {
    kind: "order",
    sheetName: sheetsConfig.ORDERS_SHEET_NAME || "Orders",
    source: "masti-masti-site",
    payment_status: payment.status || "paid",
    payment_method: order.paymentMethod || "online",
    stockist_pass_id: order.stockistPassId || "",
    razorpay_payment_id: payment.razorpay_payment_id || "",
    order_id: order.orderId,
    customer_name: order.customer.name,
    customer_email: order.customer.email,
    customer_phone: order.customer.phone,
    address: `${order.customer.street}, ${order.customer.village}, ${order.customer.city}, ${order.customer.state} - ${order.customer.pincode}. ${order.customer.address}`,
    items: order.items.map((item) => `${item.name} x ${item.qty}`).join(", "),
    subtotal: order.totals.subtotal,
    gst: order.totals.gst,
    shipping: order.totals.shipping,
    total: order.totals.total,
    created_at: order.createdAt
  });
}

function sendStockistToGoogleSheets(member) {
  const sheetsConfig = CONFIG.GOOGLE_SHEETS || {};
  const url = sheetsConfig.STOCKISTS_WEB_APP_URL || sheetsConfig.ORDERS_WEB_APP_URL;
  if (!sheetsConfig.ENABLED || !isConfigured(url)) {
    return Promise.resolve({ skipped: true });
  }
  return postToGoogleSheets(url, {
    kind: "stockist",
    sheetName: sheetsConfig.STOCKISTS_SHEET_NAME || "Stockists",
    source: "masti-masti-site",
    ...member
  });
}

async function openSupportChat(message = "Hi, I want to talk to customer support.") {
  if (!window.Tawk_API) await loadTawkTo();
  if (window.Tawk_API?.maximize) {
    window.Tawk_API.maximize();
    window.Tawk_API.addEvent?.("support_requested", { message });
    return;
  }
  const phone = supportConfig.WHATSAPP_NUMBER || "918299886972";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

function renderStateOptions() {
  return Object.keys(stateCities)
    .map((state) => `<option value="${state}">${state}</option>`)
    .join("");
}

function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);
}

function getOrderTotals() {
  const subtotal = getCartTotal();
  const gst = Math.round(subtotal * 0.12);
  const shipping = subtotal > 499 || subtotal === 0 ? 0 : 49;
  return {
    subtotal,
    gst,
    shipping,
    total: subtotal + gst + shipping
  };
}

async function startRazorpayCheckout(order, status) {
  const razorpayConfig = CONFIG.RAZORPAY || {};
  if (!razorpayConfig.ENABLED || !isConfigured(razorpayConfig.KEY_ID)) {
    status.textContent = "Razorpay is not configured yet. Add your test key in config.js, then test again.";
    return;
  }
  try {
    status.textContent = "Loading secure payment gateway...";
    await loadScriptOnce("https://checkout.razorpay.com/v1/checkout.js", "Razorpay");
  } catch (error) {
    console.error("Razorpay script error", error);
    status.textContent = "Payment gateway could not load. Please check your internet connection and try again.";
    return;
  }

  const options = {
    key: razorpayConfig.KEY_ID,
    amount: order.totals.total * 100,
    currency: razorpayConfig.CURRENCY || "INR",
    name: razorpayConfig.BUSINESS_NAME || "Masti Masti Snacks",
    description: razorpayConfig.DESCRIPTION || "Masti Masti snack order",
    prefill: {
      name: order.customer.name,
      email: order.customer.email,
      contact: order.customer.phone
    },
    notes: {
      city: order.customer.city,
      state: order.customer.state,
      pincode: order.customer.pincode,
      items: order.items.map((item) => `${item.name} x ${item.qty}`).join(", ")
    },
    theme: {
      color: razorpayConfig.THEME_COLOR || "#d84627"
    },
    async handler(response) {
      localStorage.setItem("mastiLastPayment", JSON.stringify({
        ...order,
        razorpay_payment_id: response.razorpay_payment_id
      }));
      status.textContent = `Payment successful. Saving order... Payment ID: ${response.razorpay_payment_id}`;
      try {
        const result = await sendOrderToGoogleSheets(order, {
          status: "paid",
          razorpay_payment_id: response.razorpay_payment_id
        });
        status.textContent = result.skipped
          ? `Payment successful. Payment ID: ${response.razorpay_payment_id}. Add Google Sheets order URL in config.js to save orders online.`
          : `Payment successful and order saved. Payment ID: ${response.razorpay_payment_id}`;
      } catch (error) {
        console.error("Google Sheets order error", error);
        status.textContent = `Payment successful, but Google Sheets did not respond. Payment ID: ${response.razorpay_payment_id}`;
      }
      cart = [];
      saveCart();
      window.setTimeout(renderRoute, 1800);
    },
    modal: {
      ondismiss() {
        status.textContent = "Checkout closed. You can try the payment again anytime.";
      }
    }
  };

  const checkout = new Razorpay(options);
  checkout.open();
}

function renderCartCount() {
  cartCount.textContent = cart.reduce((total, item) => total + item.qty, 0);
}

function t(key) {
  return translations[language]?.[key] || translations.en[key] || key;
}

function applyLanguage() {
  languageSelect.value = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
}

function productCard(product, index = 0) {
  return `
    <article class="product-card reveal-card" style="--accent:${product.color}; --delay:${index * 80}ms">
      <div class="product-card__media">
        <img src="${product.image}" alt="${product.name} pack" />
      </div>
      <div class="product-card__body">
        <p>${product.region}</p>
        <h3>${product.name}</h3>
        <span>${product.short}</span>
        <div class="spice-meter" aria-label="Spice level ${product.spice} out of 3">
          ${[1, 2, 3].map((level) => `<i class="${level <= product.spice ? "is-on" : ""}"></i>`).join("")}
        </div>
        <div class="price-row">
          <strong>${formatPrice(product.price)}</strong>
          <small>MRP ${formatPrice(product.mrp)} | ${product.size}</small>
        </div>
        <div class="card-actions">
          <a class="button button-ghost" href="#product/${product.id}">${t("view3d")}</a>
          <button class="button button-primary" type="button" data-add="${product.id}">${t("addToCart")}</button>
        </div>
      </div>
    </article>
  `;
}

function shell(title, copy, body, actions = "") {
  const titleText = String(title);
  const useWideHero = titleText.length > 12 && !actions;
  const titleClass = titleText.length <= 24 ? "route-title route-title--single" : "route-title";
  const heroClass = useWideHero ? "route-hero route-hero--wide reveal-card" : "route-hero reveal-card";
  return `
    <section class="route-scene">
      <div class="${heroClass}">
        <p class="eyebrow">Masti Masti 3D</p>
        <h1 class="${titleClass}">${title}</h1>
        <p>${copy}</p>
        ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
      </div>
      ${body}
    </section>
  `;
}

// ===== HOME PAGE: edit hero copy and featured 3D product cards here =====
function homePage() {
  return shell(
    t("heroTitle"),
    t("heroCopy"),
    `
      <div class="hero-stage home-shop-stage" data-tilt>
        <div class="stage-copy">
          <span>${t("stageTap")}</span>
          <strong>${t("stageStrong")}</strong>
        </div>
        <div class="stage-floor"></div>
        ${products.map((product, index) => `
          <article class="home-pack-card home-pack-card-${index + 1}" style="--accent:${product.color}; --delay:${index * 90}ms">
            <a class="home-pack-card__visual" href="#product/${product.id}" aria-label="View ${product.name} in 3D">
              <span class="pack-badge">${product.region}</span>
              <img src="${product.image}" alt="${product.name} pack" />
            </a>
            <div class="home-pack-card__info">
              <h3>${product.name}</h3>
              <p>${product.short}</p>
              <div class="home-pack-card__meta">
                <strong>${formatPrice(product.price)}</strong>
                <span>${product.size}</span>
              </div>
              <div class="card-actions">
                <a class="button button-ghost" href="#product/${product.id}">${t("view")}</a>
                <button class="button button-primary" type="button" data-add="${product.id}">${t("add")}</button>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
      <section class="quick-grid">
        <a href="#news">${t("quickNews")}</a>
        <a href="#region">${t("quickRegion")}</a>
        <a href="#learn">${t("quickLearn")}</a>
        <a href="#events">${t("quickEvents")}</a>
      </section>
    `,
    `<a class="button button-primary" href="#products">${t("shopNow")}</a><a class="button button-ghost" href="#cart">${t("viewCart")}</a>`
  );
}

// ===== PRODUCTS PAGE: edit product grid layout here =====
function productsPage() {
  return shell(
    t("productsTitle"),
    t("productsCopy"),
    `<section class="product-grid">${products.map(productCard).join("")}</section>`
  );
}

// ===== PRODUCT DETAIL PAGE: edit individual 3D product view here =====
function productPage(id) {
  const product = products.find((entry) => entry.id === id) || products[0];
  return `
    <section class="detail-scene">
      <div class="detail-stage reveal-card" data-tilt style="--accent:${product.color}">
        <div class="detail-disc"></div>
        <img src="${product.image}" alt="${product.name} pack" />
      </div>
      <article class="detail-panel reveal-card">
        <a class="back-link" href="#products">${t("backProducts")}</a>
        <p class="eyebrow">${product.region}</p>
        <h1>${product.name}</h1>
        <p>${product.story}</p>
        <div class="tag-row">${product.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="spec-list">
          <div><strong>${t("price")}</strong><span>${formatPrice(product.price)} | ${product.size}</span></div>
          <div><strong>${t("ingredients")}</strong><span>${product.ingredients}</span></div>
          <div><strong>${t("retailTip")}</strong><span>${product.learn}</span></div>
        </div>
        <div class="hero-actions">
          <button class="button button-primary" type="button" data-add="${product.id}">${t("addToCart")}</button>
          <a class="button button-ghost" href="#cart">${t("goCart")}</a>
        </div>
      </article>
    </section>
  `;
}

// ===== CART PAGE: edit cart item layout and cart summary here =====
function cartPage() {
  if (!cart.length) {
    return shell(
      t("cartTitle"),
      t("cartEmptyCopy"),
      `<div class="empty-state reveal-card"><a class="button button-primary" href="#products">${t("browseProducts")}</a></div>`
    );
  }

  const items = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    if (!product) return "";
    return `
      <article class="cart-item reveal-card">
        <img src="${product.image}" alt="${product.name}" />
        <div>
          <h3>${product.name}</h3>
          <p>${product.size} | ${formatPrice(product.price)} each</p>
        </div>
        <div class="qty-controls">
          <button type="button" data-dec="${product.id}">-</button>
          <strong>${item.qty}</strong>
          <button type="button" data-add="${product.id}">+</button>
        </div>
        <strong>${formatPrice(product.price * item.qty)}</strong>
      </article>
    `;
  }).join("");

  return shell(
    t("cartTitle"),
    t("cartCopy"),
    `
      <section class="cart-list">${items}</section>
      <aside class="cart-summary reveal-card">
        <span>${t("totalAmount")}</span>
        <strong>${formatPrice(getCartTotal())}</strong>
        <a class="button button-primary" href="#payment">${t("proceedPayment")}</a>
      </aside>
    `
  );
}

// ===== CHECKOUT / PAYMENT PAGE: edit fields, GST, shipping, and gateway copy here =====
function paymentPage() {
  const totals = getOrderTotals();
  const orderItems = cart.length
    ? cart.map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return "";
      return `
        <div class="order-item">
          <img src="${product.image}" alt="${product.name}" />
          <div>
            <strong>${product.name}</strong>
            <span>${item.qty} x ${formatPrice(product.price)}</span>
          </div>
          <b>${formatPrice(product.price * item.qty)}</b>
        </div>
      `;
    }).join("")
    : `<p class="checkout-empty">${t("cartEmptyCopy")}</p>`;

  return shell(
    t("checkoutTitle"),
    t("checkoutCopy"),
    `
      <section class="checkout-layout">
        <form class="checkout-form reveal-card" id="paymentForm" novalidate>
          <!-- CHECKOUT FORM SECTION: keep only buyer name, contact details, and address here -->
          <section class="checkout-section is-active">
            <h2>${t("buyerDetails")}</h2>
            <label>${t("fullName")}<input required name="fullName" placeholder="${t("fullName")}" /></label>
            <div class="field-grid">
              <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
              <label>${t("contactNumber")}<input required name="phone" inputmode="numeric" maxlength="10" pattern="[6-9][0-9]{9}" title="Enter a valid 10-digit Indian mobile number" placeholder="9876543210" /></label>
              <label>${t("street")}<input required name="street" placeholder="${t("street")}" /></label>
              <label>${t("villageArea")}<input required name="village" placeholder="${t("villageArea")}" /></label>
              <label>${t("state")}
                <select required name="state" id="checkoutState">
                  <option value="">${t("state")}</option>
                  ${renderStateOptions()}
                </select>
              </label>
              <label>${t("city")}
                <select required name="city" id="checkoutCity" disabled>
                  <option value="">${t("state")}</option>
                </select>
              </label>
              <label>${t("pinCode")}<input required name="pincode" inputmode="numeric" maxlength="6" pattern="[1-9][0-9]{5}" title="Enter a valid 6-digit Indian PIN code" placeholder="242001" /></label>
            </div>
            <label>${t("fullAddress")}<textarea required name="address" placeholder="${t("fullAddress")}"></textarea></label>
            <fieldset class="payment-methods">
              <legend>${t("paymentMethods")}</legend>
              <label class="payment-option is-selected">
                <input type="radio" name="paymentMethod" value="online" checked />
                <span>
                  <strong>${t("onlinePayment")}</strong>
                  <small>Visa, Mastercard, RuPay, UPI</small>
                </span>
              </label>
              <label class="payment-option">
                <input type="radio" name="paymentMethod" value="cod" />
                <span>
                  <strong>${t("codPayment")}</strong>
                  <small>Verified stockist pass required</small>
                </span>
              </label>
            </fieldset>
            <div class="card-brand-row" aria-label="Accepted payment options">
              <span class="card-logo card-logo--visa"><b>VISA</b></span>
              <span class="card-logo card-logo--mastercard"><i></i><i></i><b>Mastercard</b></span>
              <span class="card-logo card-logo--rupay"><b>RuPay</b><em></em></span>
              <span class="card-logo card-logo--upi"><b>UPI</b><small>BHIM</small></span>
            </div>
            <label class="cod-pass-field" id="codPassField" hidden>${t("codPassLabel")}<input name="stockistPassId" placeholder="MM-STK-..." autocomplete="off" /></label>
            <p class="payment-note cod-help" id="codPassHelp" hidden>${t("codPassHelp")}</p>
            <p class="payment-note">${t("paymentNote")}</p>
            <button class="button button-primary" id="paymentSubmitButton" type="submit">${t("testRazorpay")}</button>
            <ul class="checkout-errors" id="checkoutErrors" aria-live="polite"></ul>
            <p class="form-status" id="paymentStatus"></p>
          </section>
        </form>

        <!-- YOUR ORDER SECTION: edit subtotal, GST, shipping and total display here -->
        <aside class="order-summary reveal-card">
          <h2>${t("yourOrder")}</h2>
          <div class="order-items">${orderItems}</div>
          <div class="order-totals">
            <div><span>${t("subtotal")}</span><strong>${formatPrice(totals.subtotal)}</strong></div>
            <div><span>GST 12%</span><strong>${formatPrice(totals.gst)}</strong></div>
            <div><span>${t("shipping")}</span><strong>${totals.shipping ? formatPrice(totals.shipping) : t("free")}</strong></div>
            <div class="grand-total"><span>${t("total")}</span><strong>${formatPrice(totals.total)}</strong></div>
          </div>
          <p>${t("razorpayInfo")}</p>
        </aside>
      </section>
    `
  );
}

// ===== NEWS PAGE: edit brand announcements here =====
function newsPage() {
  return shell(t("newsTitle"), t("newsCopy"), `<section class="info-grid">${newsItems.map(([title, text]) => `<article class="info-card reveal-card"><h3>${title}</h3><p>${text}</p></article>`).join("")}</section>`);
}

// ===== LEARN PAGE: edit product education cards here =====
function learnPage() {
  return shell(t("learnTitle"), t("learnCopy"), `<section class="product-grid">${products.map((product, index) => `<article class="info-card reveal-card" style="--delay:${index * 80}ms"><img src="${product.image}" alt="${product.name}" /><h3>${product.name}</h3><p>${product.learn}</p><small>${product.ingredients}</small></article>`).join("")}</section>`);
}

// ===== EVENTS PAGE: edit tasting events and registration links here =====
function eventsPage() {
  return shell(t("eventsTitle"), t("eventsCopy"), `<section class="info-grid">${events.map(([name, city, date]) => `<article class="event-card reveal-card"><span>${date}</span><h3>${name}</h3><p>${city}</p><a href="#contact">${t("registerInterest")}</a></article>`).join("")}</section>`);
}

function readReviews() {
  try {
    return JSON.parse(localStorage.getItem("mastiReviews")) || [];
  } catch {
    return [];
  }
}

// ===== RATE US PAGE: edit customer review form and saved review display here =====
function ratePage() {
  const reviews = readReviews();
  const reviewCards = reviews.length
    ? reviews.slice().reverse().map((review) => `
      <article class="review-card reveal-card">
        <div class="review-stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
        <p>${escapeHtml(review.message)}</p>
        <strong>${escapeHtml(review.name)}</strong>
      </article>
    `).join("")
    : `<article class="review-card reveal-card"><div class="review-stars">★★★★★</div><p>${t("noRatings")}</p><strong>Masti Masti</strong></article>`;

  return shell(
    t("rateTitle"),
    t("rateCopy"),
    `
      <form class="rate-form reveal-card" id="rateForm">
        <label>${t("yourName")}<input required name="name" placeholder="${t("fullName")}" /></label>
        <label>${t("rating")}
          <select required name="rating">
            <option value="5">5 stars - Loved it</option>
            <option value="4">4 stars - Very good</option>
            <option value="3">3 stars - Good</option>
            <option value="2">2 stars - Can improve</option>
            <option value="1">1 star - Not happy</option>
          </select>
        </label>
        <label>${t("yourReview")}<textarea required name="message" placeholder="${t("yourReview")}"></textarea></label>
        <button class="button button-primary" type="submit">${t("submitRating")}</button>
        <p class="form-status" id="rateStatus"></p>
      </form>
      <section class="reviews-grid">${reviewCards}</section>
    `
  );
}

// ===== STOCKIST PAGE: edit stockist form fields and dealer benefits here =====
function memberPage() {
  return shell(
    t("memberTitle"),
    t("memberCopy"),
    `
      <form class="member-form reveal-card" id="memberForm">
        <div class="member-card-3d">
          <span>${t("dealerProgram")}</span>
          <strong>${t("stockistPass")}</strong>
          <small>${t("dealerBenefits")}</small>
        </div>
        <label>${t("fullName")}<input required name="name" placeholder="${t("fullName")}" /></label>
        <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
        <label>${t("contactNumber")}<input required name="mobile" inputmode="numeric" maxlength="10" pattern="[6-9][0-9]{9}" placeholder="9876543210" /></label>
        <label>${t("businessStore")}<input required name="store" placeholder="${t("businessStore")}" /></label>
        <label>${t("city")}<input required name="city" placeholder="${t("city")}" /></label>
        <label>${t("stockistType")}
          <select required name="type">
            <option>Retailer</option>
            <option>Distributor</option>
            <option>Wholesaler</option>
            <option>Canteen / institution buyer</option>
          </select>
        </label>
        <label>${t("message")}<textarea name="message" placeholder="${t("message")}"></textarea></label>
        <button class="button button-primary" type="submit">${t("sendStockist")}</button>
        <p class="form-status" id="memberStatus"></p>
      </form>
    `
  );
}

function retailerLoginPage() {
  return shell(
    t("retailerLoginTitle"),
    t("retailerLoginCopy"),
    `
      <section class="policy-grid">
        <article class="policy-card reveal-card">
          <h3>${t("retailerLoginCardTitle")}</h3>
          <p>${t("retailerLoginCardCopy")}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#member">${t("memberTitle")}</a>
            <a class="button button-ghost" href="#contact">${t("contactTitle")}</a>
          </div>
        </article>
      </section>
    `
  );
}

// ===== ABOUT PAGE: edit brand story, mission, and trust points here =====
function aboutPage() {
  return shell(
    t("aboutTitle"),
    t("aboutCopy"),
    `
      <section class="policy-grid">
        <article class="policy-card reveal-card"><h3>Our story</h3><p>We make factory-fresh snack packs for buyers who want familiar Indian taste, quick ordering, and bright shelf-ready products.</p></article>
        <article class="policy-card reveal-card"><h3>What we sell</h3><p>Dal Chawal Tadka, Chhota Don, and Veg Biryani Crunch are available in retail-style pouches and future combo packs.</p></article>
        <article class="policy-card reveal-card"><h3>Why trust us</h3><p>Every product page shows price, pack size, ingredients, and usage details so buyers can make a clear decision.</p></article>
      </section>
    `
  );
}

// ===== RETURN POLICY PAGE: edit product return rules here =====
function returnPolicyPage() {
  return policyPage(
    t("returnTitle"),
    t("returnCopy"),
    [
      ["Return window", "Raise a return request within 48 hours of receiving the order."],
      ["Condition", "The product must be unused, sealed, and photographed if the pack is damaged."],
      ["Not eligible", "Opened food packs, taste preference issues, or incorrect address deliveries are not return eligible."]
    ]
  );
}

// ===== REFUND POLICY PAGE: edit refund timelines and payment details here =====
function refundPolicyPage() {
  return policyPage(
    t("refundTitle"),
    t("refundCopy"),
    [
      ["Refund timeline", "Approved refunds are usually initiated within 5-7 working days."],
      ["Refund mode", "Refunds go back to the original payment method or as store credit when applicable."],
      ["Shipping charges", "Shipping or COD charges may be non-refundable unless the issue was from our side."]
    ]
  );
}

// ===== PRIVACY POLICY PAGE: edit customer data handling rules here =====
function privacyPolicyPage() {
  return policyPage(
    t("privacyTitle"),
    t("privacyCopy"),
    [
      ["Information collected", "Name, email, mobile number, shipping address, city, order products, and payment method preference."],
      ["How it is used", "For order confirmation, delivery support, customer service, membership updates, and legal compliance."],
      ["Data sharing", "Data may be shared with payment gateways, delivery partners, or support tools only when required for service."]
    ]
  );
}

// ===== DISCLAIMER PAGE: edit legal disclaimers and product notes here =====
function disclaimerPage() {
  return policyPage(
    t("disclaimerTitle"),
    t("disclaimerCopy"),
    [
      ["Product images", "Pack images are for representation and may vary slightly by batch, lighting, or packaging update."],
      ["Health note", "Customers should read ingredients and allergen information before purchase."],
      ["Payment gateway", "The current payment screen is a front-end preview until a live gateway is connected."]
    ]
  );
}

function policyPage(title, copy, items) {
  return shell(
    title,
    copy,
    `<section class="policy-grid">${items.map(([heading, text]) => `<article class="policy-card reveal-card"><h3>${heading}</h3><p>${text}</p></article>`).join("")}</section>`
  );
}

// ===== REGION PAGE: edit regional availability and product mapping here =====
function regionPage() {
  const regions = [...new Set(products.map((product) => product.region))];
  return shell(t("regionTitle"), t("regionCopy"), `<section class="info-grid">${regions.map((region) => {
    const regionProducts = products.filter((product) => product.region === region);
    return `<article class="region-card reveal-card"><h3>${region}</h3><p>${regionProducts.map((product) => product.name).join(", ")}</p><a href="#products">${t("shopRegion")}</a></article>`;
  }).join("")}</section>`);
}

// ===== CONTACT PAGE: edit sales contact form and contact links here =====
function contactPage() {
  const phone = supportConfig.PHONE || "+918299886972";
  const whatsapp = supportConfig.WHATSAPP_NUMBER || "918299886972";
  const email = supportConfig.EMAIL || "sales@mastimastisnacks.com";
  return shell(
    t("contactTitle"),
    t("contactCopy"),
    `
      <form class="contact-form reveal-card" id="contactForm">
        <label>${t("name")}<input required name="name" placeholder="${t("fullName")}" /></label>
        <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
        <label>${t("mobile")}<input required name="mobile" placeholder="+91 82998 86972" /></label>
        <label>${t("message")}<textarea name="message" placeholder="${t("message")}"></textarea></label>
        <button class="button button-primary" type="submit">${t("sendEnquiry")}</button>
        <p class="form-status" id="contactStatus"></p>
      </form>
      <section class="contact-cards">
        <a href="tel:${phone}">Call ${phone}</a>
        <a href="https://wa.me/${whatsapp}" target="_blank" rel="noreferrer">${t("whatsappSales")}</a>
        <a href="mailto:${email}">${email}</a>
      </section>
    `
  );
}

function notFoundPage() {
  return shell(t("notFoundTitle"), t("notFoundCopy"), `<a class="button button-primary" href="#home">${t("returnHome")}</a>`);
}

function addToCart(id) {
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart();
}

function decreaseCart(id) {
  const existing = cart.find((item) => item.id === id);
  if (!existing) return;
  existing.qty -= 1;
  cart = cart.filter((item) => item.qty > 0);
  saveCart();
  renderRoute();
}

function routeMarkup() {
  const route = (location.hash || "#home").slice(1);
  const [page, id] = route.split("/");
  if (page === "home" || page === "") return homePage();
  if (page === "products") return productsPage();
  if (page === "product") return productPage(id);
  if (page === "cart") return cartPage();
  if (page === "payment") return paymentPage();
  if (page === "news") return newsPage();
  if (page === "learn") return learnPage();
  if (page === "events") return eventsPage();
  if (page === "rate") return ratePage();
  if (page === "member") return memberPage();
  if (page === "retailer-login") return retailerLoginPage();
  if (page === "about") return aboutPage();
  if (page === "return-policy") return returnPolicyPage();
  if (page === "refund-policy") return refundPolicyPage();
  if (page === "privacy") return privacyPolicyPage();
  if (page === "disclaimer") return disclaimerPage();
  if (page === "region") return regionPage();
  if (page === "contact") return contactPage();
  return notFoundPage();
}

function renderRoute() {
  app.innerHTML = routeMarkup();
  app.focus({ preventScroll: true });
  closeMenu();
  setActiveNav();
  wireDynamicEvents();
  requestAnimationFrame(() => document.querySelectorAll(".reveal-card").forEach((node) => node.classList.add("is-visible")));
}

function setActiveNav() {
  const page = (location.hash || "#home").slice(1).split("/")[0] || "home";
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === page);
  });
}

function wireDynamicEvents() {
  document.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const originalText = button.textContent;
      addToCart(button.dataset.add);
      if (button.closest(".qty-controls")) {
        renderRoute();
        return;
      }
      button.textContent = button.tagName === "BUTTON" ? "Added" : button.textContent;
      window.setTimeout(() => {
        if (button.dataset.add) button.textContent = originalText;
      }, 900);
    });
  });

  document.querySelectorAll("[data-dec]").forEach((button) => {
    button.addEventListener("click", () => decreaseCart(button.dataset.dec));
  });

  const checkoutState = document.getElementById("checkoutState");
  const checkoutCity = document.getElementById("checkoutCity");
  checkoutState?.addEventListener("change", () => {
    const cities = stateCities[checkoutState.value] || [];
    checkoutCity.innerHTML = cities.length
      ? `<option value="">${t("city")}</option>${cities.map((city) => `<option value="${city}">${city}</option>`).join("")}`
      : `<option value="">${t("state")}</option>`;
    checkoutCity.disabled = cities.length === 0;
  });

  const paymentForm = document.getElementById("paymentForm");
  const paymentSubmitButton = document.getElementById("paymentSubmitButton");
  const codPassField = document.getElementById("codPassField");
  const codPassHelp = document.getElementById("codPassHelp");
  paymentForm?.querySelectorAll('input[name="paymentMethod"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      const isCod = paymentForm.paymentMethod.value === "cod";
      codPassField.hidden = !isCod;
      codPassHelp.hidden = !isCod;
      paymentSubmitButton.textContent = isCod ? t("placeCodOrder") : t("testRazorpay");
      paymentForm.querySelectorAll(".payment-option").forEach((option) => {
        option.classList.toggle("is-selected", option.querySelector("input").checked);
      });
    });
  });

  document.querySelectorAll("[data-tilt]").forEach((stage) => {
    stage.addEventListener("pointermove", tiltStage);
    stage.addEventListener("pointerleave", () => stage.style.transform = "");
  });

  paymentForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = document.getElementById("paymentStatus");
    const errors = validateCheckoutForm(event.currentTarget);
    renderCheckoutErrors(errors);
    if (errors.length) {
      status.textContent = "Please fix the highlighted checkout details.";
      return;
    }
    if (!cart.length) {
      status.textContent = "Please add at least one product before placing the order.";
      return;
    }
    const order = buildOrderPayload(event.currentTarget);
    localStorage.setItem("mastiPendingOrder", JSON.stringify(order));
    if (order.paymentMethod === "cod") {
      status.textContent = "Saving COD order...";
      try {
        const result = await sendOrderToGoogleSheets(order, { status: "cod_pending" });
        localStorage.setItem("mastiLastCodOrder", JSON.stringify(order));
        status.textContent = result.skipped
          ? "COD order saved on this device. Add Google Sheets Web App URL in config.js to save orders online."
          : "COD request sent. It will be accepted only if the member pass is approved in our private stockist records.";
        cart = [];
        saveCart();
        window.setTimeout(renderRoute, 1800);
      } catch (error) {
        console.error("Google Sheets COD order error", error);
        status.textContent = "COD order could not be saved online. Please contact support.";
      }
      return;
    }
    status.textContent = "Opening Razorpay checkout...";
    await startRazorpayCheckout(order, status);
  });

  document.getElementById("contactForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = document.getElementById("contactStatus");
    const enquiry = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      mobile: form.mobile.value.trim(),
      message: form.message.value.trim(),
      enquiry_type: "Contact enquiry",
      submitted_at: new Date().toLocaleString("en-IN")
    };
    status.textContent = "Sending your enquiry...";
    try {
      const result = await sendEmailJs((CONFIG.EMAILJS || {}).CONTACT_TEMPLATE_ID, enquiry);
      status.textContent = result.skipped
        ? "Thank you. Your enquiry is saved locally. Add EmailJS keys in config.js to send it by email."
        : "Thank you. The sales team will contact you soon.";
      localStorage.setItem("mastiContactEnquiry", JSON.stringify(enquiry));
      form.reset();
    } catch (error) {
      console.error("EmailJS contact error", error);
      status.textContent = "Could not send email right now. Please use WhatsApp or phone support.";
    }
  });

  document.getElementById("rateForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = document.getElementById("rateStatus");
    const reviews = readReviews();
    const review = {
      name: form.name.value.trim(),
      rating: Number(form.rating.value),
      message: form.message.value.trim(),
      date: new Date().toISOString()
    };
    reviews.push(review);
    localStorage.setItem("mastiReviews", JSON.stringify(reviews));
    status.textContent = "Saving your rating...";
    try {
      const result = await sendReviewToGoogleSheets(review);
      status.textContent = result.skipped
        ? "Thank you. Your rating has been added locally. Add your Google Sheets Web App URL in config.js to save it online."
        : "Thank you. Your rating has been added and sent to Google Sheets.";
    } catch (error) {
      console.error("Google Sheets review error", error);
      status.textContent = "Your rating is saved locally, but Google Sheets did not respond.";
    }
    window.setTimeout(renderRoute, 1100);
  });

  document.getElementById("memberForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = document.getElementById("memberStatus");
    const member = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      mobile: form.mobile.value.trim(),
      store: form.store.value.trim(),
      city: form.city.value.trim(),
      type: form.type.value,
      message: form.message.value.trim(),
      approval_status: "Pending",
      enquiry_type: "Stockist enquiry",
      submitted_at: new Date().toLocaleString("en-IN"),
      date: new Date().toISOString()
    };
    member.application_id = generateStockistApplicationId(member);
    localStorage.setItem("mastiStockistApplication", JSON.stringify(member));
    status.textContent = "Sending your stockist application...";
    try {
      const [emailResult, sheetsResult] = await Promise.all([
        sendEmailJs((CONFIG.EMAILJS || {}).STOCKIST_TEMPLATE_ID, member),
        sendStockistToGoogleSheets(member)
      ]);
      const saveMessage = sheetsResult.skipped ? " Please contact support if you do not receive confirmation." : " Your request was recorded for owner approval.";
      status.textContent = `Thank you, ${member.name}. ${t("stockistApplicationSent")} ${saveMessage}`;
      if (emailResult.skipped) console.info("EmailJS stockist email skipped");
      form.reset();
    } catch (error) {
      console.error("EmailJS stockist error", error);
      status.textContent = "Your application was created, but online saving did not respond. Please contact us on WhatsApp or phone.";
    }
  });

}

function validateCheckoutForm(form) {
  const errors = [];
  const fields = ["fullName", "email", "phone", "street", "village", "state", "city", "pincode", "address", "stockistPassId"];
  fields.forEach((field) => form[field]?.classList.remove("has-error"));

  function addError(field, message) {
    form[field]?.classList.add("has-error");
    errors.push(message);
  }

  if (!form.fullName.value.trim()) addError("fullName", "Enter the buyer full name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value.trim())) addError("email", "Enter a valid email address.");
  if (!/^[6-9][0-9]{9}$/.test(form.phone.value.trim())) addError("phone", "Contact number must be a valid 10-digit Indian mobile number.");
  if (!form.street.value.trim()) addError("street", "Enter street, road, or house number.");
  if (!form.village.value.trim()) addError("village", "Enter village, area, or locality.");
  if (!form.state.value) addError("state", "Select your state.");
  if (!form.city.value) addError("city", "Select your city after choosing a state.");
  if (!/^[1-9][0-9]{5}$/.test(form.pincode.value.trim())) addError("pincode", "PIN code must be a valid 6-digit Indian PIN.");
  if (!form.address.value.trim()) addError("address", "Enter landmark, building, or delivery instructions.");
  if (form.paymentMethod?.value === "cod") {
    const enteredPass = form.stockistPassId.value.trim().toUpperCase();
    if (!enteredPass) addError("stockistPassId", "Enter your approved member pass ID to use Cash on Delivery.");
    else if (!/^MM-STK-[A-Z0-9-]{8,}$/.test(enteredPass)) addError("stockistPassId", "Enter a valid approved member pass ID shared by Masti Masti.");
  }

  return errors;
}

function renderCheckoutErrors(errors) {
  const list = document.getElementById("checkoutErrors");
  if (!list) return;
  list.innerHTML = errors.map((error) => `<li>${escapeHtml(error)}</li>`).join("");
}

function tiltStage(event) {
  const stage = event.currentTarget;
  const rect = stage.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
  stage.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
}

function closeMenu() {
  siteNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function loadTawkTo() {
  const tawkConfig = CONFIG.TAWK_TO || {};
  if (!tawkConfig.ENABLED || !isConfigured(tawkConfig.PROPERTY_ID) || !isConfigured(tawkConfig.WIDGET_ID)) return Promise.resolve({ skipped: true });
  if (window.Tawk_API?.maximize) return Promise.resolve();
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();
  return loadScriptOnce(`https://embed.tawk.to/${tawkConfig.PROPERTY_ID}/${tawkConfig.WIDGET_ID}`);
}

function scheduleChatBot() {
  const siteBotConfig = CONFIG.SITE_BOT || {};
  if (siteBotConfig.ENABLED === false) return;
  const startChat = () => loadTawkTo().catch((error) => console.error("Tawk.to chat load error", error));
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(startChat, { timeout: 3500 });
    return;
  }
  window.setTimeout(startChat, 1800);
}

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

languageSelect.addEventListener("change", () => {
  language = languageSelect.value;
  localStorage.setItem("mastiLanguage", language);
  applyLanguage();
  renderRoute();
});

window.addEventListener("hashchange", renderRoute);
document.getElementById("supportChatButton")?.addEventListener("click", () => {
  openSupportChat("Hi, I need help with Masti Masti Snacks.");
});

applyLanguage();
renderCartCount();
renderRoute();
scheduleChatBot();
