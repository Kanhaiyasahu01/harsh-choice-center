export const business = {
  name: "Harsh Choice Center",
  nameHi: "हर्ष चॉइस सेंटर",
  category: "Choice Center · Internet Cafe & Digital Services",
  categoryHi: "चॉइस सेंटर · इंटरनेट कैफे और डिजिटल सेवाएँ",
  tagline:
    "आधार अपडेट, सरकारी दस्तावेज़, बिल भुगतान, प्रिंटिंग और सभी चॉइस सेंटर सेवाएँ — एक ही जगह।",
  taglineEn:
    "Aadhaar update, government documents, bill payments, printing, and all choice-centre services in one place.",
  phoneDisplay: "070496 85265",
  phoneTel: "+917049685265",
  whatsapp: "https://wa.me/917049685265",
  mapsUrl:
    "https://www.google.com/maps/place/Harsh+Choice+Center/@22.2826875,82.0776875,17z",
  mapsEmbed:
    "https://www.google.com/maps?q=Harsh+Choice+Center,+73MH%2B33H+National+Highway,+45+Main+Road,+Laripara,+Chherka+B,+Chhattisgarh+495113&hl=en&z=16&output=embed",
  address: {
    line1: "73MH+33H National Highway, 45 Main Road",
    line2: "Laripara, Chherka B, Chhattisgarh 495113",
    locality: "Laripara",
    region: "Chhattisgarh",
    postalCode: "495113",
    country: "IN",
  },
  geo: {
    lat: 22.2826875,
    lng: 82.0776875,
  },
  hours: {
    label: "Open daily · 6:00 AM – 8:00 PM",
    labelHi: "रोज़ खुला · सुबह 6:00 – रात 8:00",
    opens: "06:00",
    closes: "20:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  rating: {
    value: 4.8,
    count: 12,
  },
  placeId: "ChIJV0amparlKDoRglGPoVasY8c",
} as const;

export const serviceCategories = [
  {
    id: "cat-id",
    title: "सरकारी पहचान व दस्तावेज़",
    titleEn: "Government ID & Documents",
    items: [
      {
        title: "आधार कार्ड सेवाएँ",
        titleEn: "Aadhaar Card Services",
        description:
          "नया आधार, आधार अपडेट (नाम, पता, फोटो, मोबाइल), आधार प्रिंट / PVC कार्ड।",
      },
      {
        title: "पैन कार्ड",
        titleEn: "PAN Card",
        description: "नया पैन आवेदन, सुधार, पुनः प्रिंट और स्टेटस चेक।",
      },
      {
        title: "मतदाता पहचान पत्र",
        titleEn: "Voter ID",
        description: "वोटर आईडी आवेदन, सुधार, लिंक और ई-वोटर कार्ड सहायता।",
      },
      {
        title: "राशन कार्ड संबंधित कार्य",
        titleEn: "Ration Card Related",
        description: "राशन कार्ड आवेदन, नाम जोड़/हटाव और संबंधित ऑनलाइन प्रक्रिया।",
      },
      {
        title: "जन्म / जाति / निवास प्रमाण पत्र",
        titleEn: "Birth / Caste / Domicile Certificates",
        description:
          "जन्म, आय, जाति, निवास और अन्य ई-डिस्ट्रिक्ट प्रमाण पत्र आवेदन।",
      },
      {
        title: "डिजिलॉकर व ई-दस्तावेज़",
        titleEn: "DigiLocker & e-Documents",
        description: "डिजिलॉकर खाता, दस्तावेज़ डाउनलोड और ऑनलाइन सत्यापन सहायता।",
      },
    ],
  },
  {
    id: "cat-schemes",
    title: "योजनाएँ व ऑनलाइन फॉर्म",
    titleEn: "Schemes & Online Forms",
    items: [
      {
        title: "पीएम किसान / किसान योजनाएँ",
        titleEn: "PM-KISAN & Farmer Schemes",
        description: "पीएम किसान पंजीकरण, अपडेट, स्टेटस और संबंधित फॉर्म सहायता।",
      },
      {
        title: "आयुष्मान भारत कार्ड",
        titleEn: "Ayushman Bharat Card",
        description: "आयुष्मान कार्ड जाँच, पंजीकरण और प्रिंट सहायता।",
      },
      {
        title: "ई-श्रम कार्ड",
        titleEn: "e-Shram Card",
        description: "ई-श्रम पंजीकरण, अपडेट और कार्ड प्रिंट।",
      },
      {
        title: "छात्रवृत्ति व शिक्षा फॉर्म",
        titleEn: "Scholarship & Education Forms",
        description: "स्कॉलरशिप, कॉलेज/स्कूल ऑनलाइन फॉर्म और दस्तावेज़ अपलोड सहायता।",
      },
      {
        title: "पेंशन व बीमा सेवाएँ",
        titleEn: "Pension & Insurance",
        description:
          "पेंशन संबंधी कार्य, पीएमजेजेबीवाई / पीएमएसबीवाई जैसी योजनाओं में सहायता।",
      },
      {
        title: "उद्यम / व्यापार पंजीकरण",
        titleEn: "Udyam / Business Registration",
        description: "उद्यम पंजीकरण और छोटे व्यवसाय संबंधी ऑनलाइन आवेदन।",
      },
    ],
  },
  {
    id: "cat-pay",
    title: "भुगतान, बैंकिंग व टिकट",
    titleEn: "Payments, Banking & Tickets",
    items: [
      {
        title: "बिल भुगतान व रिचार्ज",
        titleEn: "Bill Payment & Recharge",
        description:
          "बिजली बिल, मोबाइल रिचार्ज, डीटीएच और अन्य यूटिलिटी भुगतान।",
      },
      {
        title: "बैंकिंग पॉइंट सेवाएँ",
        titleEn: "Banking Point Services",
        description: "कैश जमा/निकासी, बैलेंस जाँच और बुनियादी बैंकिंग सहायता।",
      },
      {
        title: "रेल / बस टिकट बुकिंग",
        titleEn: "Rail / Bus Ticket Booking",
        description: "ट्रेन व बस टिकट बुकिंग, पीएनआर जाँच और प्रिंट।",
      },
      {
        title: "पासपोर्ट व लाइसेंस सहायता",
        titleEn: "Passport & Licence Help",
        description:
          "पासपोर्ट आवेदन सहायता, ड्राइविंग लाइसेंस और आरसी संबंधी ऑनलाइन काम।",
      },
    ],
  },
  {
    id: "cat-shop",
    title: "दुकान व डिजिटल सेवाएँ",
    titleEn: "Shop & Digital Services",
    items: [
      {
        title: "इंटरनेट कैफे",
        titleEn: "Internet Cafe",
        description: "फास्ट इंटरनेट, ईमेल, ऑनलाइन आवेदन और कंप्यूटर पर डिजिटल काम।",
      },
      {
        title: "प्रिंटिंग, फोटोकॉपी व स्कैन",
        titleEn: "Printing, Photocopy & Scan",
        description: "कलर/ब्लैक प्रिंट, फोटोकॉपी, स्कैनिंग और दस्तावेज़ सेट।",
      },
      {
        title: "मोबाइल सेल व रिपेयर",
        titleEn: "Mobile Sales & Repair",
        description: "मोबाइल एक्सेसरीज़, सेल सपोर्ट और सामान्य रिपेयरिंग।",
      },
      {
        title: "फोटो स्टूडियो व वीडियो",
        titleEn: "Photo Studio & Video",
        description: "पासपोर्ट फोटो, दस्तावेज़ फोटो, स्टूडियो पोर्ट्रेट और वीडियो शूटिंग।",
      },
    ],
  },
] as const;

/** Flat list for schema / search keywords */
export const services = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({
    title: item.title,
    titleEn: item.titleEn,
    description: item.description,
  })),
);

export const features = [
  {
    title: "रोज़ सुबह 6 से रात 8 तक",
    titleEn: "Open early, every day",
    description:
      "दस्तावेज़ और डिजिटल काम के लिए हर दिन सुबह 6 बजे से रात 8 बजे तक काउंटर खुला।",
  },
  {
    title: "मेन रोड / हाईवे पर",
    titleEn: "On the main highway",
    description:
      "लारीपारा, छेरका बी में NH / 45 मेन रोड पर — हर्ष चॉइस सेंटर आसानी से मिल जाता है।",
  },
  {
    title: "स्थानीय भरोसेमंद सेवा",
    titleEn: "Trusted locally",
    description: `Google पर ${business.rating.value}★ (${business.rating.count} रिव्यू) — आधार, फॉर्म और डिजिटल काम में मदद।`,
  },
  {
    title: "व्हीलचेयर सुगम पहुँच",
    titleEn: "Wheelchair-friendly access",
    description:
      "व्हीलचेयर-सुगम प्रवेश, बैठने की जगह, पार्किंग और शौचालय — Google लिस्टिंग के अनुसार।",
  },
] as const;
