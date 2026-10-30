// Dhapuben Wellness Mock Data & Store Definitions

export interface Product {
  id: string;
  sku_id: string;
  slug: string;
  title: string;
  description: string;
  selling_price: number;
  mrp: number;
  discount: number;
  discount_text: string;
  images: string[];
  relative_url: string;
  categories: string[];
  features: { label: string; value: string }[];
  sizes: { size: string; sku_id: string; url_suffix?: string }[];
  trust_markers: string[];
  rating: number;
  review_count: number;
  weight: string;
  in_stock: boolean;
}

export interface StoreInfo {
  name: string;
  description: string;
  logo: string;
  roundLogo: string;
  favicon: string;
  phone: string;
  alt_phone: string;
  email: string;
  address: string;
  company_name: string;
  support_hours: string;
  social: {
    instagram: string;
    facebook: string;
  };
}

export interface Category {
  id: string;
  title: string;
  src_url: string;
  link: string;
  description: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  src_url: string;
  link: string;
}

export interface TrustMarker {
  label: string;
  description: string;
  icon: string;
}

export const storeInfo: StoreInfo = {
  "name": "DHAPUBEN WELLNESS",
  "description": "DHAPUBEN WELLNESS \u2013 Empowering wellness with premium, science-backed nutrition and health products for a balanced, energetic, and vibrant life.",
  "logo": "https://d1311wbk6unapo.cloudfront.net/NushopWebsiteAsset/tr:w-300,,f-webp,fo-auto/68f3481f317e68f10ef0c11c_logo_4HQQ6K3B5L_2025-10-30",
  "roundLogo": "https://d1311wbk6unapo.cloudfront.net/NushopWebsiteAsset/tr:w-192,h-192,h-48,f-webp,fo-auto/68f3481f317e68f10ef0c11c_favicon_EEJJHJZCAS_2025-11-03",
  "favicon": "https://d1311wbk6unapo.cloudfront.net/NushopWebsiteAsset/tr:w-48,h-48,f-webp,fo-auto/68f3481f317e68f10ef0c11c_favicon_EEJJHJZCAS_2025-11-03",
  "phone": "+91 - 9993004819",
  "alt_phone": "8770428066",
  "email": "shubhikaecowells@gmail.com",
  "address": "286 SATVIKA VIHAR AB ROAD, Indore, Madhya Pradesh \u2013 453771, India",
  "company_name": "SHUBHIKAECOWELLS",
  "support_hours": "Monday to Saturday, 10:00 AM to 7:00 PM",
  "social": {
    "instagram": "https://www.instagram.com/dhapubenwellness/",
    "facebook": "https://www.facebook.com/profile.php?id=61582985822474"
  }
};

export const announcements: string[] = [
  "10% off upto Rs.100 on min order of 849 | Code - BUPMER10",
  "Save Min 50% on all orders and get free shipping",
  "Extra discounts up to 200 at checkout."
];

export const trustMarkers: TrustMarker[] = [
  {
    "label": "Lowest Price",
    "description": "Best value guaranteed",
    "icon": "https://cdn-image.blitzshopdeck.in/ShopdeckWebsiteAssets/tr:w-600,f-webp,fo-auto/product_quality_trustmarkers/LOWEST_PRICE.webp"
  },
  {
    "label": "Superior Quality",
    "description": "100% genuine & tested",
    "icon": "https://cdn-image.blitzshopdeck.in/ShopdeckWebsiteAssets/tr:w-600,f-webp,fo-auto/product_quality_trustmarkers/SUPERIOR_QUALTIY_TRUSTBADGE.webp"
  },
  {
    "label": "Free shipping",
    "description": "On prepaid & bulk orders",
    "icon": "https://cdn-image.blitzshopdeck.in/ShopdeckWebsiteAssets/tr:w-600,f-webp,fo-auto/product_quality_trustmarkers/FREE_SHIPPING.webp"
  }
];

export const banners: Banner[] = [
  {
    "id": "b1",
    "title": "Healthy Herbal Juices - Nature's Goodness",
    "subtitle": "50% OFF | Supports overall wellness and energy",
    "src_url": "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/68f3481f317e68f10ef0c11c/template/1772438752877_KUGHS34KA8_2026-03-02_2.png",
    "link": "/JUICE/collection/Ui0vRNuY"
  },
  {
    "id": "b2",
    "title": "Daily Wellness - Pure Sea Buckthorn Juice",
    "subtitle": "59% OFF MRP Rs 999 | Made from nutrient-rich Himalayan berries",
    "src_url": "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/68f3481f317e68f10ef0c11c/template/1772438752877_83KH4FP51F_2026-03-02_1.png",
    "link": "/JUICE/collection/Ui0vRNuY"
  },
  {
    "id": "b3",
    "title": "Radiant Skin - Nourishing Skin Care",
    "subtitle": "Formulated with Pure Sea Buckthorn",
    "src_url": "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/68f3481f317e68f10ef0c11c/template/1762150707265_9LJEF7OPK9_2025-11-03_2.png",
    "link": "/SKIN-CARE-PRODUCT/collection/N0q7mtDj"
  }
];

export const categories: Category[] = [
  {
    "id": "health-care",
    "title": "HEALTH CARE PRODUCT",
    "src_url": "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-350,fo-auto/68f3481f317e68f10ef0c11c/template/1764422373077_TANW3D3CU0_2025-11-29_1.png",
    "link": "/HEALTH-CARE-PRODUCT/collection/o6R3aiM6",
    "description": "Pure nutrition, natural jaggery, salts, nut butters and vitality boosters"
  },
  {
    "id": "juice",
    "title": "JUICE",
    "src_url": "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-350,fo-auto/68f3481f317e68f10ef0c11c/template/1764422373077_SK8LM6XIFD_2025-11-29_2.png",
    "link": "/JUICE/collection/Ui0vRNuY",
    "description": "Leh berry, sea buckthorn shots, jamun active and herbal juices"
  },
  {
    "id": "skin-care",
    "title": "SKIN CARE PRODUCT",
    "src_url": "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-350,fo-auto/68f3481f317e68f10ef0c11c/template/1764422373077_HHVKW77MPP_2025-11-29_3.png",
    "link": "/SKIN-CARE-PRODUCT/collection/N0q7mtDj",
    "description": "Deeply hydrating sea buckthorn nourishing creams and wellness balms"
  }
];

export const collectionsList = [
  {
    "_id": "68fcbd2a157824cd60b6a1dc",
    "title": "Vitamins",
    "short_id": "D5P1Ikoh",
    "url_suffix": "/Vitamins/collection/D5P1Ikoh"
  },
  {
    "_id": "68f3482171178c683ae20ebe",
    "title": "Under 299",
    "short_id": "DtTeR7xW",
    "url_suffix": "/Under-299/collection/DtTeR7xW"
  },
  {
    "_id": "6925c616f8852f056d6c0028",
    "title": "Sugar",
    "short_id": "E3ZioXOW",
    "url_suffix": "/Sugar/collection/E3ZioXOW"
  },
  {
    "_id": "68fcbd2a157824cd60b6a248",
    "title": "Candies And Mints",
    "short_id": "GnnZhAeP",
    "url_suffix": "/Candies-And-Mints/collection/GnnZhAeP"
  },
  {
    "_id": "68fcbd2a157824cd60b6a22d",
    "title": "Salt And Salt Substitutes",
    "short_id": "HbPAR4zu",
    "url_suffix": "/Salt-And-Salt-Substitutes/collection/HbPAR4zu"
  },
  {
    "_id": "6908443f67d1a595be1afcb9",
    "title": "SKIN CARE PRODUCT",
    "short_id": "N0q7mtDj",
    "url_suffix": "/SKIN-CARE-PRODUCT/collection/N0q7mtDj"
  },
  {
    "_id": "68fcbd2a157824cd60b6a23b",
    "title": "Gummy Sweets",
    "short_id": "PtxmiBR-",
    "url_suffix": "/Gummy-Sweets/collection/PtxmiBR-"
  },
  {
    "_id": "68fcbd2a157824cd60b6a204",
    "title": "Chocolate Covered Foods",
    "short_id": "TJN8Oco7",
    "url_suffix": "/Chocolate-Covered-Foods/collection/TJN8Oco7"
  },
  {
    "_id": "68f3482171178c683ae20ebf",
    "title": "Under 499",
    "short_id": "TeKLevFT",
    "url_suffix": "/Under-499/collection/TeKLevFT"
  },
  {
    "_id": "690843616567524b935d02a5",
    "title": "JUICE",
    "short_id": "Ui0vRNuY",
    "url_suffix": "/JUICE/collection/Ui0vRNuY"
  },
  {
    "_id": "68f3482171178c683ae20ec0",
    "title": "Under 999",
    "short_id": "VxDVTB3l",
    "url_suffix": "/Under-999/collection/VxDVTB3l"
  },
  {
    "_id": "68fcbd2a157824cd60b6a1ae",
    "title": "Amazing Deals",
    "short_id": "a-FOpMt_",
    "url_suffix": "/Amazing-Deals/collection/a-FOpMt_"
  },
  {
    "_id": "68f3482171178c683ae20ed0",
    "title": "Best Sellers",
    "short_id": "cIzaiY_B",
    "url_suffix": "/Best-Sellers/collection/cIzaiY_B"
  },
  {
    "_id": "68fcbd2a157824cd60b6a211",
    "title": "Moisturizer",
    "short_id": "fBuSVGg6",
    "url_suffix": "/Moisturizer/collection/fBuSVGg6"
  },
  {
    "_id": "6925c616f8852f056d6c0018",
    "title": "Pickles",
    "short_id": "fTV5P2Yj",
    "url_suffix": "/Pickles/collection/fTV5P2Yj"
  },
  {
    "_id": "68fcbd2a157824cd60b6a1e9",
    "title": "Mango",
    "short_id": "gKmzvRc7",
    "url_suffix": "/Mango/collection/gKmzvRc7"
  },
  {
    "_id": "690841d867d1a595be1a2b18",
    "title": "IN THE SPOTLIGHT",
    "short_id": "h6m3I5yM",
    "url_suffix": "/IN-THE-SPOTLIGHT/collection/h6m3I5yM"
  },
  {
    "_id": "68fcbd2a157824cd60b6a1f6",
    "title": "Top Products",
    "short_id": "lWw2wpHD",
    "url_suffix": "/Top-Products/collection/lWw2wpHD"
  },
  {
    "_id": "69084326db25de6b91e7d99d",
    "title": "HEALTH CARE PRODUCT",
    "short_id": "o6R3aiM6",
    "url_suffix": "/HEALTH-CARE-PRODUCT/collection/o6R3aiM6"
  }
];

export const products: Product[] = [
  {
    "id": "0ds8uou4",
    "sku_id": "f-4tPXx3",
    "slug": "100%-raw-pure-sea-buckthorn-concentrated-juice-family-pack-|-himalayan-berry-|-immunity-booster-&-antioxidant-|-multivitamin-with-omega-7-(750-ml)",
    "title": "100% Raw Pure Sea Buckthorn Concentrated Juice Family Pack | Himalayan Berry | Immunity Booster & Antioxidant | Multivitamin With Omega 7 (750 Ml)",
    "description": "Our Sea Buckthorn Juice is crafted from carefully handpicked berries, known for their exceptional nutritional profile. Cold-pressed to retain maximum goodness, this juice delivers a natural boost of vitamins, antioxidants, and essential fatty acids. A powerful wellness drink designed to support immunity, digestion, skin health, and overall vitality\ufffdpure, clean, and effective.\nKey Features\n\nMade from 100% natural Sea Buckthorn berries\n\nCold-pressed to preserve nutrients\n\nNaturally rich in Vitamin C & antioxidants\n\nContains Omega 3, 6, 7 & 9\n\nSupports immunity, gut health & skin glow\n\nNo added sugar\n\nNo preservatives or artificial colors\n\nVegan & plant-based\n\nPacked hygienically to maintain freshness\n\nHow to Use\n\nShake well before use\n\nMix 20\ufffd30 ml of juice with 150\ufffd200 ml of water\n\nConsume once daily, preferably in the morning\n\nCan be taken on an empty stomach or after meals\n\nRefrigerate after opening and consume within recommended time",
    "selling_price": 999,
    "mrp": 2200,
    "discount": 55,
    "discount_text": "55% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/0ds8uou4_LO7ZGYRW7G_2026-07-11_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/100__Pure_Sea_Buckthorn_Concentrated_Juice_Family_Pack___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__750_Ml__GA6N1U17XN_2026-07-11_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/100__Pure_Sea_Buckthorn_Concentrated_Juice_Family_Pack___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__750_Ml__YCHU3IV79E_2026-07-11_2.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/100__Pure_Sea_Buckthorn_Concentrated_Juice_Family_Pack___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__750_Ml__ZGFXX3DVBP_2026-07-11_3.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/100__Pure_Sea_Buckthorn_Concentrated_Juice_Family_Pack___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__750_Ml__YSBTG5ABBE_2026-07-11_4.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/100__Pure_Sea_Buckthorn_Concentrated_Juice_Family_Pack___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__750_Ml__0196824RRR_2026-07-11_5.png"
    ],
    "relative_url": "/100%-raw-pure-sea-buckthorn-concentrated-juice-family-pack-|-himalayan-berry-|-immunity-booster-&-antioxidant-|-multivitamin-with-omega-7-(750-ml)/catalogue/0ds8uou4/f-4tPXx3",
    "categories": [
      "JUICE",
      "HEALTH CARE PRODUCT",
      "Amazing Deals",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Premium Raw Sea Buckthorn Concentrate"
      },
      {
        "label": "Brand",
        "value": "DHAPUBEN WELLNESS"
      },
      {
        "label": "Dietary Preference",
        "value": "Sugar Free"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco Friendly"
      },
      {
        "label": "Country",
        "value": "India"
      },
      {
        "label": "Ingredient",
        "value": "Premium Raw Sea Buckthorn Concentrate"
      }
    ],
    "sizes": [
      {
        "size": "750 ml",
        "sku_id": "f-4tPXx3",
        "url_suffix": "/100--Raw-Pure-Sea-Buckthorn-Concentrated-Juice-Family-Pack/catalogue/0ds8uou4/f-4tPXx3"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "Return or Exchange within 3 days"
    ],
    "rating": 4.6,
    "review_count": 97,
    "weight": "0.4",
    "in_stock": true
  },
  {
    "id": "55uK",
    "sku_id": "ha7_wKEs3s2g",
    "slug": "sea--himalayan-berry-immunity-booster-buckthorn-concentrated-juice-(300-ml)",
    "title": "Sea  Himalayan Berry Immunity Booster Buckthorn Concentrated Juice (300 Ml)",
    "description": "Our Sea Buckthorn Juice is crafted from carefully handpicked berries, known for their exceptional nutritional profile. Cold-pressed to retain maximum goodness, this juice delivers a natural boost of vitamins, antioxidants, and essential fatty acids. A powerful wellness drink designed to support immunity, digestion, skin health, and overall vitality\ufffdpure, clean, and effective.\nKey Features\n\nMade from 100% natural Sea Buckthorn berries\n\nCold-pressed to preserve nutrients\n\nNaturally rich in Vitamin C & antioxidants\n\nContains Omega 3, 6, 7 & 9\n\nSupports immunity, gut health & skin glow\n\nNo added sugar\n\nNo preservatives or artificial colors\n\nVegan & plant-based\n\nPacked hygienically to maintain freshness\n\nHow to Use\n\nShake well before use\n\nMix 20\ufffd30 ml of juice with 150\ufffd200 ml of water\n\nConsume once daily, preferably in the morning\n\nCan be taken on an empty stomach or after meals\n\nRefrigerate after opening and consume within recommended time",
    "selling_price": 449,
    "mrp": 805,
    "discount": 44,
    "discount_text": "44% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/55uK_ha7_KCIEI5CSS1_2026-02-17_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/55uK_ha7_QF7ZVGFDBV_2026-01-02_4.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/55uK_ha7_YUMQ68R3GJ_2026-01-02_5.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/DHAPUBEN_SEA_300_1761393489846_5hjy5556zt46r8f.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/55uK_ha7_GFKIX6CCIC_2026-01-02_2.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/55uK_ha7_Z78DDOWZPE_2026-01-02_6.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/DHAPUBEN_SEA_300_1761393491933_gyhbucfkj2qsdfx.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/55uK_ha7_OT1ERYPHEY_2026-01-02_3.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/55uK_ha7_SPE6GL2W4O_2026-01-02_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/55uK_ha7_RGE32FLZLS_2026-03-04_1.png"
    ],
    "relative_url": "/sea--himalayan-berry-immunity-booster-buckthorn-concentrated-juice-(300-ml)/catalogue/55uK/ha7_wKEs3s2g",
    "categories": [
      "JUICE",
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Concentrated Fruit juice"
      },
      {
        "label": "Brand",
        "value": "Gordhan"
      },
      {
        "label": "Ingredients",
        "value": "Sea Buckthorn Berry"
      },
      {
        "label": "Dietary Preference",
        "value": "Sugar Free"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "13.75 kcal"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      }
    ],
    "sizes": [
      {
        "size": "300 Ml",
        "sku_id": "wKEs3s2g",
        "url_suffix": "/Sea--Himalayan-Berry-Immunity-Booster-Buckthorn-Concentrated-Juice-/catalogue/55uK_ha7/wKEs3s2g"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.5,
    "review_count": 80,
    "weight": "0.62",
    "in_stock": true
  },
  {
    "id": "5rHpa8kH",
    "sku_id": "r1BtYtOw",
    "slug": "peanut-butter-almond-crunchy|-26g-protein-|-non-gmo-|-zero-cholesterol-|-(500-g)-pack-of-2",
    "title": "Peanut Butter Almond Crunchy| 26G Protein | Non Gmo | Zero Cholesterol | (500 G) Pack Of 2",
    "description": "Everyouth Peanut Butter Is A Nutrient-Rich Food Containing High Levels Of Protein, Several Vitamins, And Dietary Minerals. It Is Typically Served As A Spread On Bread, Toast, Or Crackers, And Used To Make Sandwiches (Notably The Peanut Butter And Jelly Sandwich). It Is Also Used In A Number Of Breakfast Dishes And Desserts, Such As Granola, Smoothies, Crepes, Cookies, Brownies, Or Croissants. It Is Similar To Other Nut Butters Such As Cashew Butter And Almond Butter.",
    "selling_price": 419,
    "mrp": 899,
    "discount": 53,
    "discount_text": "53% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/almond_crunchy_1761393501032_qsjwz4e9gydjn6v.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/almond_crunchy_1761393501241_scxyzdaqf711hv4.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/almond_crunchy_1761393499786_ffs9ajngyn7yfla.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/almond_crunchy_1761393500253_xossmi2zgjeuadh.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/almond_crunchy_1761393499088_z8na9oq8cdhbkf3.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/almond_crunchy_1761393501001_zklax6gf57dok6a.jpg"
    ],
    "relative_url": "/peanut-butter-almond-crunchy|-26g-protein-|-non-gmo-|-zero-cholesterol-|-(500-g)-pack-of-2/catalogue/5rHpa8kH/r1BtYtOw",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Nut Butter"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Flavor",
        "value": "Peanut Butter & Almond"
      },
      {
        "label": "Ingredients",
        "value": "Peanut Butter Almond Crunchy & Almond"
      },
      {
        "label": "Dietary Preference",
        "value": "Gluten Free & Non GMO"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "Calories: 625 g & Protein: 26 g & Dietary Fiber: 5 g & Trans Fat: 0 g"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Food Preference",
        "value": "Vegetarian"
      }
    ],
    "sizes": [
      {
        "size": "500 Gram",
        "sku_id": "r1BtYtOw",
        "url_suffix": "/Peanut-Butter-Almond-Crunchy--26G-Protein---Non/catalogue/5rHpa8kH/r1BtYtOw"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.5,
    "review_count": 65,
    "weight": "0.45",
    "in_stock": true
  },
  {
    "id": "77IZktdc",
    "sku_id": "2D79fguK",
    "slug": "sweet-juicy-paan-candy-paan-flavor-candy-(400-g)-pack-of-2",
    "title": "Sweet Juicy Paan Candy Paan Flavor Candy (400 G) Pack Of 2",
    "description": "Everyouth Candy Is A Confectionery Wonderland, Offering A Wide Array Of Flavors, Textures, And Shapes To Satisfy Every Craving. From Fruity Sensations That Burst With Freshness To Creamy Delights That Melt In Your Mouth, There'S A Candy For Every Preference And Occasion. The Joy Of Unwrapping A Candy And Savoring Its Delightful Taste Is An Experience Like No Other.",
    "selling_price": 449,
    "mrp": 899,
    "discount": 50,
    "discount_text": "50% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/PAAN_400_1761393491145_kqj60iogxuox0li.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/PAAN_400_1761393491202_zup3gp8gpiirqhe.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/PAAN_400_1761393491437_nbi3bg3g41tptbg.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/PAAN_400_1761393492891_121wm6dxz73ziwi.jpg"
    ],
    "relative_url": "/sweet-juicy-paan-candy-paan-flavor-candy-(400-g)-pack-of-2/catalogue/77IZktdc/2D79fguK",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Candy"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Flavor",
        "value": "Paan Flavor"
      },
      {
        "label": "Ingredients",
        "value": "NA"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "Total Energy : 318.2 kcal"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Food Preference",
        "value": "Vegetarian"
      },
      {
        "label": "Occasion",
        "value": "If you're hosting a citrus-themed party or event, orange candies can complement the theme and add a burst of citrus flavor. & Paan candies can be refreshing and fitting for summer events, picnics, or barbecues. & If the birthday person loves the color orange or has a favorite orange-flavored treat, orange candies could be incorporated into the party theme."
      }
    ],
    "sizes": [
      {
        "size": "400 Gram",
        "sku_id": "2D79fguK",
        "url_suffix": "/Sweet-Juicy-Paan-Candy-Paan-Flavor-Candy--400-G/catalogue/77IZktdc/2D79fguK"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.8,
    "review_count": 81,
    "weight": "0.45",
    "in_stock": true
  },
  {
    "id": "b1TMLH6k",
    "sku_id": "D_9UPVnS",
    "slug": "deliciously-healthy-dates-palm-jaggery-powder-&-coconut-palm-sugar-(400-g,-pack-of-2)",
    "title": "Deliciously Healthy Dates Palm Jaggery Powder & Coconut Palm Sugar (400 G, Pack Of 2)",
    "description": "Palm Sugar Is A Natural Sweetener Derived From The Sap Of Various Species Of Palm Trees Such As The Coconut Palm, Date Palm, Or Palmyra Palm. It Is Traditionally Produced By Collecting The Sap From The Flower Buds Of The Palm Tree, Boiling It Until It Thickens, And Allowing It To Crystallize Into Solid Sugar. Unlike Refined White Sugar, Palm Sugar Retains A Golden-Brown Color And A Rich, Caramel-Like Flavor That Adds Depth And Warmth To Any Dish Or Beverage.",
    "selling_price": 435,
    "mrp": 700,
    "discount": 38,
    "discount_text": "38% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_coconut_dates_1761742989494_8pxuuvy4yk3oa9k.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_coconut_dates_1761742986810_861kdwje419x88v.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_coconut_dates_1761742985535_t71bbv0895hpcgz.jpg"
    ],
    "relative_url": "/deliciously-healthy-dates-palm-jaggery-powder-&-coconut-palm-sugar-(400-g,-pack-of-2)/catalogue/b1TMLH6k/D_9UPVnS",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Palm Sugar"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Ingredients",
        "value": "Coconut palm jaggery, Dates palm jaggery"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "40 kcal"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Pack Of",
        "value": "2"
      }
    ],
    "sizes": [
      {
        "size": "400 G",
        "sku_id": "D_9UPVnS",
        "url_suffix": "/Deliciously-Healthy-Dates-Palm-Jaggery-Powder---Coconut-Palm/catalogue/b1TMLH6k/D_9UPVnS"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.5,
    "review_count": 150,
    "weight": "0.65",
    "in_stock": true
  },
  {
    "id": "bpPpZkjt",
    "sku_id": "Rkj9r5-U",
    "slug": "authentic-himalayan-pink-salt-crystal-for-healthy-cooking-||-namak-||-himalayan-pink-salt-(600-g)-pack-of-2",
    "title": "Authentic Himalayan Pink Salt Crystal For Healthy Cooking || Namak || Himalayan Pink Salt (600 G) Pack Of 2",
    "description": "Himalayan Pink Salt Is A Type Of Rock Salt (Halite) That Is Mined From The Punjab Region Of Pakistan, Near The Himalayas. Known For Its Distinctive Pink Color, This Salt Is Valued For Its Purported Health Benefits And Unique Mineral Content. Here\ufffdS A Detailed Description Of Himalayan Pink Salt:Enhance your culinary creations with the natural goodness of Himalayan Pink Salt, a pure and unrefined salt sourced from the pristine Himalayan mountains. Renowned for its delicate pink hue and rich mineral content, this salt contains essential minerals like potassium, magnesium, and calcium that contribute to overall wellness.",
    "selling_price": 319,
    "mrp": 699,
    "discount": 54,
    "discount_text": "54% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_Ever_Crystal_600_1761393489631_yxevdmy014yag5v.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_Ever_Crystal_600_1761393489858_5p87pi2i633veyl.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_Ever_Crystal_600_1761393490106_mn9s6y81ajwyoys.jpg"
    ],
    "relative_url": "/authentic-himalayan-pink-salt-crystal-for-healthy-cooking-||-namak-||-himalayan-pink-salt-(600-g)-pack-of-2/catalogue/bpPpZkjt/Rkj9r5-U",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Himalayan Pink Salt"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Ingredients",
        "value": "Himalayan Pink Salt"
      },
      {
        "label": "Dietary Preference",
        "value": "Gluten Free"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "Himalayan Pink Salt"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      }
    ],
    "sizes": [
      {
        "size": "600 Gram",
        "sku_id": "Rkj9r5-U",
        "url_suffix": "/Authentic-Himalayan-Pink-Salt-Crystal-For-Healthy-Cooking--/catalogue/bpPpZkjt/Rkj9r5-U"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.7,
    "review_count": 64,
    "weight": "0.45",
    "in_stock": true
  },
  {
    "id": "CL",
    "sku_id": "r7NRZ_JuIOarOU",
    "slug": "peanut-butter-creamy-(500-g)-pack-of-2",
    "title": "Peanut Butter Creamy (500 G) Pack Of 2",
    "description": "Everyouth Peanut Butter Is A Nutrient-Rich Food Containing High Levels Of Protein, Several Vitamins, And Dietary Minerals. It Is Typically Served As A Spread On Bread, Toast, Or Crackers, And Used To Make Sandwiches (Notably The Peanut Butter And Jelly Sandwich). It Is Also Used In A Number Of Breakfast Dishes And Desserts, Such As Granola, Smoothies, Crepes, Cookies, Brownies, Or Croissants. It Is Similar To Other Nut Butters Such As Cashew Butter And Almond Butter.",
    "selling_price": 329,
    "mrp": 699,
    "discount": 53,
    "discount_text": "53% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/M_CREAMY_500_1761393492621_gwvdx04a0q3dppu.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/M_CREAMY_500_1761393494157_jq5fr6okc1wk545.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/M_CREAMY_500_1761393490449_w8s25119bh719vt.jpg"
    ],
    "relative_url": "/peanut-butter-creamy-(500-g)-pack-of-2/catalogue/CL/r7NRZ_JuIOarOU",
    "categories": [
      "SKIN CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Nut Butter"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Flavor",
        "value": "Peanut Butter"
      },
      {
        "label": "Ingredients",
        "value": "Roasted Peanuts (55%), Dark Choco Paste (Sugar, Hydrogenated Oils, Cocoa Solids (21%), Emulsifiers (INS 322, INS 476), Artificial Flavouring Substances (Ethyl Vanillin)), Whey Protein concentrate (10%)"
      },
      {
        "label": "Dietary Preference",
        "value": "Dairy Free & Gluten Free & Low Cholesterol & Low Sodium & Sugar Free & No Trans Fat & No MSG"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "Per 100g: Energy (kcal) - 624 & Protein (g) - 27.3 & Carbohydrate (g) - 23.6 & Total Sugars (g) - 22.2 & Added Sugars (g) - 17.4 & Fat (g) - 46.7"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Food Preference",
        "value": "Vegetarian"
      }
    ],
    "sizes": [
      {
        "size": "500 Gram",
        "sku_id": "JuIOarOU",
        "url_suffix": "/Peanut-Butter-Creamy--500-G--Pack-Of-2/catalogue/CL_r7NRZ/JuIOarOU"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.8,
    "review_count": 61,
    "weight": "0.45",
    "in_stock": true
  },
  {
    "id": "cOqjoAyO6dxQ",
    "sku_id": "X7CqR-Cw",
    "slug": "dhapuben-wellness-pure-sea-buckthorn-concentrate-shots.-convenient-pure-sea-buckthorn.-30ml-\u00d7-30-shots.",
    "title": "DHAPUBEN WELLNESS Pure Sea Buckthorn Concentrate SHOTS. Convenient Pure Sea Buckthorn. 30ML \u00d7 30 SHOTS.",
    "description": "Meet Dhapuben Wellness Sea Buckthorn Shots \u2014 a convenient 30ml daily shot made from the goodness of nature\u2019s golden berries. \ud83c\udf3f\ud83e\udde1\nEach box contains 30 individual shots, making it easy to add sea buckthorn to your daily wellness routine. With its vibrant golden-orange color and convenient ready-to-consume format, it\u2019s designed for a simple, hassle-free wellness experience.\n30ml \u00d7 30 Shots | Dhapuben Wellness | Sea Buckthorn Shots\n\u2728 Nature\u2019s golden berries\n\ud83e\udd64 Convenient 30ml individual shots\n\ud83d\udce6 30 shots in every box\n\ud83c\udf3f Perfect for your daily wellness routine",
    "selling_price": 999,
    "mrp": 2399,
    "discount": 58,
    "discount_text": "58% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/DHAPUBEN_WELLNESS_Pure_Sea_Buckthorn_Concentrate_SHOTS__Convenient_Pure_Sea_Buckthorn__30ML___30_SHOTS__01BBLDA27O_2026-10-03_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/DHAPUBEN_WELLNESS_Pure_Sea_Buckthorn_Concentrate_SHOTS__Convenient_Pure_Sea_Buckthorn__30ML___30_SHOTS__JSQJNKXSXU_2026-10-03_2.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/DHAPUBEN_WELLNESS_Pure_Sea_Buckthorn_Concentrate_SHOTS__Convenient_Pure_Sea_Buckthorn__30ML___30_SHOTS__YQAUTSTDEO_2026-10-03_3.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/DHAPUBEN_WELLNESS_Pure_Sea_Buckthorn_Concentrate_SHOTS__Convenient_Pure_Sea_Buckthorn__30ML___30_SHOTS__C3Y31ZF7G0_2026-10-03_4.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/DHAPUBEN_WELLNESS_Pure_Sea_Buckthorn_Concentrate_SHOTS__Convenient_Pure_Sea_Buckthorn__30ML___30_SHOTS__NRGZXDRKUF_2026-10-03_5.png"
    ],
    "relative_url": "/dhapuben-wellness-pure-sea-buckthorn-concentrate-shots.-convenient-pure-sea-buckthorn.-30ml-\u00d7-30-shots./catalogue/cOqjoAyO6dxQ/X7CqR-Cw",
    "categories": [
      "JUICE",
      "HEALTH CARE PRODUCT",
      "Amazing Deals",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Country_of_Origin",
        "value": "India (Leh Ladakh)"
      },
      {
        "label": "Product Type",
        "value": "Fruit & Herbs"
      },
      {
        "label": "Brand",
        "value": "DHAPUBEN WELLNESS"
      },
      {
        "label": "Nutrient Content",
        "value": "13.75kcal"
      },
      {
        "label": "Dietary Preference",
        "value": "Sugar Free"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Flavor",
        "value": "Seabuckthorn Concentrate juice"
      },
      {
        "label": "Ingredients",
        "value": "Seabuckthorn juice"
      },
      {
        "label": "Packaging",
        "value": "30 ml Shots, 30 Shots"
      }
    ],
    "sizes": [
      {
        "size": "30ML \u00d7 30 SHOTS",
        "sku_id": "X7CqR-Cw",
        "url_suffix": "/DHAPUBEN-WELLNESS-Pure-Sea-Buckthorn-Concentrate-SHOTS.-Convenient-Pure-Sea/catalogue/cOqjoAyO6dxQ/X7CqR-Cw"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "Return or Exchange within 3 days"
    ],
    "rating": 4.8,
    "review_count": 36,
    "weight": "1.5",
    "in_stock": true
  },
  {
    "id": "F17qB2V3",
    "sku_id": "inG6YhVu",
    "slug": "real-fruit-jelly-|-jelly-orange-|-lemon-|-cola-|-strawberry-|-rose-|-orange,-cola,-lemon,-strawberry,-rose-jelly-candy-(200-g)-pack-of-2",
    "title": "Real Fruit Jelly | Jelly Orange | Lemon | Cola | Strawberry | Rose | Orange, Cola, Lemon, Strawberry, Rose Jelly Candy (200 G) Pack Of 2",
    "description": "Everyouth Real Mixed Fruit Jelly delivers the delightful taste of real fruit in every bite, offering a fun and flavorful snacking experience for all ages. Made with liquid glucose and a reduced sugar content, this jelly provides a healthier alternative to traditional sugary treats without compromising on taste. Each piece is bursting with natural fruit flavors, making it a perfect snack for children and adults alike. Its soft, chewy texture and vibrant taste make it ideal for on-the-go enjoyment, lunchboxes, or as a sweet treat during any occasion. Carefully crafted to balance taste and nutrition, Everyouth Real Mixed Fruit Jelly ensures a guilt-free indulgence while keeping the authentic fruit essence intact.",
    "selling_price": 299,
    "mrp": 599,
    "discount": 50,
    "discount_text": "50% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/jelly_200_1_1761393492432_w8babyblson92o0.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/jelly_200_1_1761393493099_3d8rkztggs4ubt0.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/jelly_200_1_1761393487794_5l5azw0ty8lc5a8.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/jelly_200_1_1761393489040_k14hzjohounw0k9.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/jelly_200_1_1761393487000_mqtoajpms0zcaox.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/jelly_200_1_1761393488316_81get6srgg0r2hw.jpg"
    ],
    "relative_url": "/real-fruit-jelly-|-jelly-orange-|-lemon-|-cola-|-strawberry-|-rose-|-orange,-cola,-lemon,-strawberry,-rose-jelly-candy-(200-g)-pack-of-2/catalogue/F17qB2V3/inG6YhVu",
    "categories": [
      "JUICE",
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Jelly Candy"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Flavor",
        "value": "Orange & Cola & Lemon & Strawberry & Rose"
      },
      {
        "label": "Ingredients",
        "value": "Liquid Glucose & Sugar & Pectin"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "Energy : 386 Kcal & Protein : 7.37 g & Carbohydrate : 83 g & Fat < 0.1"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Food Preference",
        "value": "Vegetarian"
      },
      {
        "label": "Occasion",
        "value": "Festival, & Christmas & Diwali & Birthday & New year"
      }
    ],
    "sizes": [
      {
        "size": "200 Gram",
        "sku_id": "inG6YhVu",
        "url_suffix": "/Real-Fruit-Jelly---Jelly-Orange---Lemon/catalogue/F17qB2V3/inG6YhVu"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.6,
    "review_count": 147,
    "weight": "0.1",
    "in_stock": true
  },
  {
    "id": "FfGTYiDQ",
    "sku_id": "ufvy5fxc",
    "slug": "buy-2-get-2-free-100%-sea-buckthorn-concentrate-himalayan-1000ml-+-1000ml-berry-immunity-booster-buckthorn-concentrated-juice-with-8-herbs--(2000-ml)",
    "title": "Buy 2 Get 2 Free 100% Sea Buckthorn Concentrate Himalayan 1000ml + 1000ml Berry Immunity Booster Buckthorn Concentrated Juice with 8 Herbs  (2000 ml)",
    "description": "Our Sea Buckthorn Juice is crafted from carefully handpicked berries, known for their exceptional nutritional profile. Cold-pressed to retain maximum goodness, this juice delivers a natural boost of vitamins, antioxidants, and essential fatty acids. A powerful wellness drink designed to support immunity, digestion, skin health, and overall vitality\u2014pure, clean, and effective.\nKey Features\n\nMade from 100% natural Sea Buckthorn berries\n\nCold-pressed to preserve nutrients\n\nNaturally rich in Vitamin C & antioxidants\n\nContains Omega 3, 6, 7 & 9\n\nSupports immunity, gut health & skin glow\n\nNo added sugar\n\nNo preservatives or artificial colors\n\nVegan & plant-based\n\nPacked hygienically to maintain freshness\n\nHow to Use\n\nShake well before use\n\nMix 20\u201330 ml of juice with 150\u2013200 ml of water\n\nConsume once daily, preferably in the morning\n\nCan be taken on an empty stomach or after meals\n\nRefrigerate after opening and consume within recommended time",
    "selling_price": 1299,
    "mrp": 2500,
    "discount": 48,
    "discount_text": "48% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/FfGTYiDQ_0W4MHN3WTY_2026-07-16_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/FfGTYiDQ_YNO9JNI5OW_2026-07-14_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/FfGTYiDQ_8CI25EXZEJ_2026-07-14_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/FfGTYiDQ_0X6O10Y8V5_2026-07-14_2.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/FfGTYiDQ_5LC2RZV2IL_2026-07-13_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/FfGTYiDQ_4RQEJGY7PG_2026-07-14_3.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/FfGTYiDQ_FLATDUJ795_2026-07-13_2.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/FfGTYiDQ_KCC31KMNEW_2026-07-13_3.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/FfGTYiDQ_4VHINCI9IF_2026-07-13_4.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/FfGTYiDQ_4L73BDICFA_2026-07-13_5.png"
    ],
    "relative_url": "/buy-2-get-2-free-100%-sea-buckthorn-concentrate-himalayan-1000ml-+-1000ml-berry-immunity-booster-buckthorn-concentrated-juice-with-8-herbs--(2000-ml)/catalogue/FfGTYiDQ/ufvy5fxc",
    "categories": [
      "JUICE",
      "HEALTH CARE PRODUCT",
      "Amazing Deals",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Sea Buckthorn Concentrate with Sea Buckthorn Seeds"
      },
      {
        "label": "Brand",
        "value": "SHREEMAYA"
      },
      {
        "label": "Flavor",
        "value": "Seabuckthorn juice"
      },
      {
        "label": "Ingredients",
        "value": "Seabuckthorn juice"
      },
      {
        "label": "Dietary Preference",
        "value": "Sugar Free"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Country_of_Origin",
        "value": "India"
      }
    ],
    "sizes": [
      {
        "size": "2000 ml",
        "sku_id": "ufvy5fxc",
        "url_suffix": "/Buy-2-Get-2-Free-100--Sea-Buckthorn-Concentrate/catalogue/FfGTYiDQ/ufvy5fxc"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "Return or Exchange within 3 days"
    ],
    "rating": 4.9,
    "review_count": 118,
    "weight": "3",
    "in_stock": true
  },
  {
    "id": "JX8sxtit",
    "sku_id": "bYLeOBNL",
    "slug": "authentic-himalayan-pink-salt-for-healthy-cooking-||-namak-||-himalayan-pink-salt-(500-g)-pack-of-2",
    "title": "Authentic Himalayan Pink Salt For Healthy Cooking || Namak || Himalayan Pink Salt (500 G) Pack Of 2",
    "description": "Himalayan Pink Salt Is A Type Of Rock Salt (Halite) That Is Mined From The Punjab Region Of Pakistan, Near The Himalayas. Known For Its Distinctive Pink Color, This Salt Is Valued For Its Purported Health Benefits And Unique Mineral Content. Here\ufffdS A Detailed Description Of Himalayan Pink Salt:Enhance your culinary creations with the natural goodness of Himalayan Pink Salt, a pure and unrefined salt sourced from the pristine Himalayan mountains. Renowned for its delicate pink hue and rich mineral content, this salt contains essential minerals like potassium, magnesium, and calcium that contribute to overall wellness.",
    "selling_price": 349,
    "mrp": 699,
    "discount": 50,
    "discount_text": "50% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_ever_ps_500_1761393493834_50no2t1o83awm91.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_ever_ps_500_1761393498427_nh0pz3ytow2v81g.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_ever_ps_500_1761393499520_npnp6dt22zizv24.jpg"
    ],
    "relative_url": "/authentic-himalayan-pink-salt-for-healthy-cooking-||-namak-||-himalayan-pink-salt-(500-g)-pack-of-2/catalogue/JX8sxtit/bYLeOBNL",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Himalayan Pink Salt"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Ingredients",
        "value": "Himalayan Pink Salt"
      },
      {
        "label": "Dietary Preference",
        "value": "Gluten Free"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "Himalayan Pink Salt"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      }
    ],
    "sizes": [
      {
        "size": "500 Gram",
        "sku_id": "bYLeOBNL",
        "url_suffix": "/Authentic-Himalayan-Pink-Salt-For-Healthy-Cooking---/catalogue/JX8sxtit/bYLeOBNL"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.9,
    "review_count": 128,
    "weight": "0.45",
    "in_stock": true
  },
  {
    "id": "k1m1C7pI",
    "sku_id": "K9Z_dxHU",
    "slug": "sea-buckthorn-concentrated-juice-|-himalayan-berry-|-immunity-booster-&-antioxidant-|-multivitamin-with-omega-7-(300-ml)",
    "title": "Sea Buckthorn Concentrated Juice | Himalayan Berry | Immunity Booster & Antioxidant | Multivitamin With Omega 7 (300 Ml)",
    "description": "Our Sea Buckthorn Juice is crafted from carefully handpicked berries, known for their exceptional nutritional profile. Cold-pressed to retain maximum goodness, this juice delivers a natural boost of vitamins, antioxidants, and essential fatty acids. A powerful wellness drink designed to support immunity, digestion, skin health, and overall vitality\ufffdpure, clean, and effective.\nKey Features\n\nMade from 100% natural Sea Buckthorn berries\n\nCold-pressed to preserve nutrients\n\nNaturally rich in Vitamin C & antioxidants\n\nContains Omega 3, 6, 7 & 9\n\nSupports immunity, gut health & skin glow\n\nNo added sugar\n\nNo preservatives or artificial colors\n\nVegan & plant-based\n\nPacked hygienically to maintain freshness\n\nHow to Use\n\nShake well before use\n\nMix 20\ufffd30 ml of juice with 150\ufffd200 ml of water\n\nConsume once daily, preferably in the morning\n\nCan be taken on an empty stomach or after meals\n\nRefrigerate after opening and consume within recommended time",
    "selling_price": 599,
    "mrp": 785,
    "discount": 24,
    "discount_text": "24% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/k1m1C7pI_Z8DCZ7WY6D_2026-03-05_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/k1m1C7pI_YJ77ODOPJR_2026-02-25_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/k1m1C7pI_SJV0RLGXJW_2026-03-05_2.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/k1m1C7pI_CXAVFCPXOM_2026-02-05_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea_Buckthorn_Concentrated_Juice___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__300_Ml__6EDJXOQWWY_2026-02-04_3.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea_Buckthorn_Concentrated_Juice___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__300_Ml__QDYUXXWKBA_2026-02-04_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea_Buckthorn_Concentrated_Juice___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__300_Ml__KJ7YMHNBVC_2026-02-04_4.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea_Buckthorn_Concentrated_Juice___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__300_Ml__CREU2YTQRK_2026-02-04_5.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea_Buckthorn_Concentrated_Juice___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__300_Ml__JGVFOBEIEW_2026-02-04_6.jpeg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea_Buckthorn_Concentrated_Juice___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__300_Ml__MC23IHCR7Z_2026-02-04_7.png"
    ],
    "relative_url": "/sea-buckthorn-concentrated-juice-|-himalayan-berry-|-immunity-booster-&-antioxidant-|-multivitamin-with-omega-7-(300-ml)/catalogue/k1m1C7pI/K9Z_dxHU",
    "categories": [
      "JUICE",
      "HEALTH CARE PRODUCT",
      "Under 999",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Concentrated Fruit juice"
      },
      {
        "label": "Brand",
        "value": "DHAPUBEN WELLNESS"
      },
      {
        "label": "Dietary Preference",
        "value": "Sugar Free"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Country",
        "value": "India"
      },
      {
        "label": "Ingredient",
        "value": "Sea Buckthorn Berry"
      },
      {
        "label": "Nutrient Content",
        "value": "13.75 kcal"
      }
    ],
    "sizes": [
      {
        "size": "300 Ml",
        "sku_id": "K9Z_dxHU",
        "url_suffix": "/Sea-Buckthorn-Concentrated-Juice---Himalayan-Berry--/catalogue/k1m1C7pI/K9Z_dxHU"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.5,
    "review_count": 35,
    "weight": "1",
    "in_stock": true
  },
  {
    "id": "KujiJn8Q",
    "sku_id": "52mrM133",
    "slug": "freeze-dried-mango-snack,-export-quality,-ready-to-eat-snack-chips-(25-g)-pack-of-2",
    "title": "Freeze Dried Mango Snack, Export Quality, Ready To Eat Snack Chips (25 G) Pack Of 2",
    "description": "Everyouth Freeze Dried Mango Offers The Ultimate Snack Experience For Mango Enthusiasts. Carefully Selected From The Finest Mangoes, This Snack Undergoes A Specialized Freeze-Drying Process That Locks In The Fruit'S Natural Sweetness, Vibrant Color, And Intense Flavor While Preserving Its Nutritional Value. Each Bite-Sized Piece Provides A Burst Of Tropical Goodness, Delivering A Crispy Texture That Melts In Your Mouth. Whether You'Re On-The-Go, Craving A Healthy Snack, Or Adding A Unique Twist To Your Culinary Creations, Everyouth Freeze Dried Mango Is The Perfect Choice. Enjoy The Delicious Taste Of Sun-Ripened Mangoes Anytime, Anywhere, With This Convenient And Wholesome Snack Option.",
    "selling_price": 299,
    "mrp": 599,
    "discount": 50,
    "discount_text": "50% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/mango_chip_25_1761393495413_hyb3b274ow74bv8.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/mango_chip_25_1761393496350_cbssjze3nsqduxe.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/mango_chip_25_1761393491680_9eksu0iuklx65rr.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/mango_chip_25_1761393492247_0ycdwowvten271q.jpg"
    ],
    "relative_url": "/freeze-dried-mango-snack,-export-quality,-ready-to-eat-snack-chips-(25-g)-pack-of-2/catalogue/KujiJn8Q/52mrM133",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Chips"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Flavor",
        "value": "Mango"
      },
      {
        "label": "Ingredients",
        "value": "Mango"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Food Preference",
        "value": "Vegetarian"
      }
    ],
    "sizes": [
      {
        "size": "25 Gram",
        "sku_id": "52mrM133",
        "url_suffix": "/Freeze-Dried-Mango-Snack--Export-Quality--Ready-To/catalogue/KujiJn8Q/52mrM133"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.8,
    "review_count": 136,
    "weight": "0.5",
    "in_stock": true
  },
  {
    "id": "linLNvev",
    "sku_id": "rzs6TpI8",
    "slug": "chocolate-peanut-butter,-crunchy-delight-with-rich,-pure-cocoa-classic-snack-(500-g)-pack-of-2",
    "title": "Chocolate Peanut Butter, Crunchy Delight With Rich, Pure Cocoa Classic Snack (500 G) Pack Of 2",
    "description": "Introducing Metalman Peanut Butter The Pinnacle Of Nutty Perfection In Every Jar. Crafted With Care And Precision, This Creamy Spread Is A Testament To Quality And Flavor. Picture The Smooth, Velvety Texture As It Glides Effortlessly Onto Your Favorite Bread, Crackers, Or Fruits, Delivering A Rich And Satisfying Taste With Every Bite.Metalman Peanut Butter Is More Than Just A Spread; It'S A Versatile Ingredient That Adds Depth And Indulgence To Your Culinary Creations. Whether You'Re Whipping Up A Batch Of Decadent Peanut Butter Cookies, Blending It Into A Protein-Packed Smoothie, Or Simply Enjoying It Straight From The Jar, Its Irresistible Flavor And Creamy Consistency Never Fail To Delight The Senses.",
    "selling_price": 319,
    "mrp": 699,
    "discount": 54,
    "discount_text": "54% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_launch_M_Ch_crunchy_500_1761393485628_hkplv1tqvwyhrm7.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_launch_M_Ch_crunchy_500_1761393489043_ehkojm1h8o6xexc.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_launch_M_Ch_crunchy_500_1761393493733_4pxvbg3kv0iz9vy.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_launch_M_Ch_crunchy_500_1761393495684_m3u86k5tl98nbe3.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_launch_M_Ch_crunchy_500_1761393487775_8ovxaviz8lahwdb.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_launch_M_Ch_crunchy_500_1761393487949_0lrsu8y1ir5acao.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_launch_M_Ch_crunchy_500_1761393483069_kl44t9zg8asqw14.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_launch_M_Ch_crunchy_500_1761393484097_5vg863f56js301p.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/New_launch_M_Ch_crunchy_500_1761393489223_muq39m624qcrlho.jpg"
    ],
    "relative_url": "/chocolate-peanut-butter,-crunchy-delight-with-rich,-pure-cocoa-classic-snack-(500-g)-pack-of-2/catalogue/linLNvev/rzs6TpI8",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Nut Butter"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Flavor",
        "value": "Peanut Butter & Chocolate"
      },
      {
        "label": "Ingredients",
        "value": "NA"
      },
      {
        "label": "Dietary Preference",
        "value": "Gluten Free & No Trans Fat & No Cholesterol"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "NA"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Food Preference",
        "value": "Vegetarian"
      }
    ],
    "sizes": [
      {
        "size": "500 Gram",
        "sku_id": "rzs6TpI8",
        "url_suffix": "/Chocolate-Peanut-Butter--Crunchy-Delight-With-Rich--Pure/catalogue/linLNvev/rzs6TpI8"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.9,
    "review_count": 93,
    "weight": "0.45",
    "in_stock": true
  },
  {
    "id": "M7EVLb28",
    "sku_id": "G_BLJNPQ",
    "slug": "deliciously-healthy-date-palm-jaggery-powder-(200-g)",
    "title": "Deliciously Healthy Date Palm Jaggery Powder (200 G)",
    "description": "Everyouth Dates Palm Jaggery Powder Is A Premium, All-Natural Sweetener Crafted From The Finest Quality Dates And Palm Jaggery. This Unique Product Offers A Healthy And Flavorful Alternative To Refined Sugar And Artificial Sweeteners. Indulge In The Rich And Authentic Sweetness Of Everyouth Dates Palm Jaggery Powder. Made From Carefully Selected, Sun-Ripened Dates And Pure Palm Jaggery, This Product Is A Delightful Fusion Of Nature'S Goodness And Traditional Wisdom.",
    "selling_price": 299,
    "mrp": 599,
    "discount": 50,
    "discount_text": "50% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/palm_jaggery_200_1761742988446_m52jcgf66tkqfes.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/palm_jaggery_200_1761742989735_4fq4qq3bxktr3mx.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/palm_jaggery_200_1761742987715_qkd6og9qfxr8qll.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/palm_jaggery_200_1761742988157_zb0c3g4unvrzlic.jpg"
    ],
    "relative_url": "/deliciously-healthy-date-palm-jaggery-powder-(200-g)/catalogue/M7EVLb28/G_BLJNPQ",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Palm Jaggery"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Ingredients",
        "value": "Dates::Palm Jaggery"
      },
      {
        "label": "Dietary Preference",
        "value": "Gluten Free::Low Calorie::Non GMO"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "100 % Dates Palm Jaggery Powder"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Pack Of",
        "value": "1"
      }
    ],
    "sizes": [
      {
        "size": "200 G",
        "sku_id": "G_BLJNPQ",
        "url_suffix": "/Deliciously-Healthy-Date-Palm-Jaggery-Powder--200-G-/catalogue/M7EVLb28/G_BLJNPQ"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.7,
    "review_count": 39,
    "weight": "0.2",
    "in_stock": true
  },
  {
    "id": "NmjIU9eG",
    "sku_id": "EqJzaPHN",
    "slug": "himalayan-sea-buckthorn-concentrated-juice-|-pure-berry-juice-|-600-ml-(pack-of-2)",
    "title": "Himalayan Sea Buckthorn Concentrated Juice | Pure Berry Juice | 600 ml (Pack of 2)",
    "description": "## Pure Sea Buckthorn Concentrated Juice \u2013 600 ml\n\nDiscover the natural taste of Himalayan sea buckthorn berries with our Pure Sea Buckthorn Concentrated Juice. Made from carefully selected sea buckthorn berries, this fruit concentrate offers a tangy, refreshing taste and a convenient way to enjoy sea buckthorn as part of your daily beverage routine.\n\n### Key Features\n\n- **Sea Buckthorn Concentrate:** Made from carefully selected sea buckthorn berries.\n- **Himalayan Berry:** Features the distinctive taste of sea buckthorn fruit.\n- **Naturally Occurring Nutrients:** Sea buckthorn berries contain naturally occurring vitamins and other plant compounds.\n- **Omega Fatty Acids:** Sea buckthorn naturally contains various fatty acids.\n- **No Added Sugar:** No sugar added, subject to the product formulation.\n- **No Preservatives:** Made without added preservatives, subject to the product formulation.\n- **Plant-Based:** Suitable for vegan and plant-based lifestyles.\n- **Convenient Packaging:** Hygienically packed in a 600 ml bottle.\n\n### How to Use\n\n1. Shake well before use.\n2. Mix 20\u201330 ml of concentrate with 150\u2013200 ml of water, or adjust to your taste.\n3. Serve chilled or at room temperature.\n4. Refrigerate after opening and consume within the period specified on the product label.\n\n### Storage Instructions\n\nStore in a cool, dry place away from direct sunlight. Refrigerate after opening and follow the storage instructions printed on the label.\n\n### Product Details\n\n- **Product Name:** Pure Sea Buckthorn Concentrated Juice\n- **Fruit:** Sea Buckthorn\n- **Net Quantity:** 600 ml\n- **Taste Profile:** Naturally tangy and fruity\n- **Product Type:** Fruit Concentrate",
    "selling_price": 999,
    "mrp": 1610,
    "discount": 38,
    "discount_text": "38% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/NmjIU9eG_MMTAO663KT_2026-10-13_3.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/NmjIU9eG_JFD3K6NXRQ_2026-10-13_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/NmjIU9eG_F24DK79T52_2026-10-13_2.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea_Buckthorn_Concentrated_Juice___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__600_Ml__DIY7URIOMI_2026-02-25_8.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea_Buckthorn_Concentrated_Juice___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__600_Ml__88PAHTJ2QX_2026-02-25_9.jpeg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea_Buckthorn_Concentrated_Juice___Himalayan_Berry___Immunity_Booster___Antioxidant___Multivitamin_With_Omega_7__600_Ml__713GRMPFOD_2026-02-25_4.png"
    ],
    "relative_url": "/himalayan-sea-buckthorn-concentrated-juice-|-pure-berry-juice-|-600-ml-(pack-of-2)/catalogue/NmjIU9eG/EqJzaPHN",
    "categories": [
      "JUICE",
      "HEALTH CARE PRODUCT",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Concentrated Fruit juice"
      },
      {
        "label": "Brand",
        "value": "DHAPUBEN WELLNESS"
      },
      {
        "label": "Dietary Preference",
        "value": "Sugar Free"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco Friendly"
      },
      {
        "label": "Country",
        "value": "India"
      },
      {
        "label": "Ingredient",
        "value": "Sea Buckthorn Berry"
      }
    ],
    "sizes": [
      {
        "size": "300 x 2 = 600 ml",
        "sku_id": "EqJzaPHN",
        "url_suffix": "/Himalayan-Sea-Buckthorn-Concentrated-Juice---Pure-Berry-Juice/catalogue/NmjIU9eG/EqJzaPHN"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.7,
    "review_count": 129,
    "weight": "1.23",
    "in_stock": true
  },
  {
    "id": "nnpMh2hb",
    "sku_id": "U9wMrMr9",
    "slug": "peanut-butter-|-chocolate-crunchy-|-almond-crunchy-|-crunchy-|-(1500-g,-pack-of-3)",
    "title": "Peanut Butter | Chocolate Crunchy | Almond Crunchy | Crunchy | (1500 G, Pack Of 3)",
    "description": "Everyouth Peanut Butter Is A Nutrient-Rich Food Containing High Levels Of Protein, Several Vitamins, And Dietary Minerals. It Is Typically Served As A Spread On Bread, Toast, Or Crackers, And Used To Make Sandwiches (Notably The Peanut Butter And Jelly Sandwich). It Is Also Used In A Number Of Breakfast Dishes And Desserts, Such As Granola, Smoothies, Crepes, Cookies, Brownies, Or Croissants. It Is Similar To Other Nut Butters Such As Cashew Butter And Almond Butter.",
    "selling_price": 299,
    "mrp": 599,
    "discount": 50,
    "discount_text": "50% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CHOCOCRUNCHYAC_1761393496343_hcvg848551vfv0o.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CHOCOCRUNCHYAC_1761393496955_xyuenyyde5y0m7m.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CHOCOCRUNCHYAC_1761393492190_fvcickgbv3kgj0j.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CHOCOCRUNCHYAC_1761393492700_81tmdi28kv9px23.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CHOCOCRUNCHYAC_1761393496104_4upadpqe7f33b7v.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CHOCOCRUNCHYAC_1761393497041_zbqg6w6v075zjp1.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CHOCOCRUNCHYAC_1761393492414_7qcsl8uzo7awret.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CHOCOCRUNCHYAC_1761393492987_c4g1tx2hva3n2nx.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CHOCOCRUNCHYAC_1761393496636_ehwehkd7d0ideno.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CHOCOCRUNCHYAC_1761393497542_r6v6uwh4ddy0t68.jpg"
    ],
    "relative_url": "/peanut-butter-|-chocolate-crunchy-|-almond-crunchy-|-crunchy-|-(1500-g,-pack-of-3)/catalogue/nnpMh2hb/U9wMrMr9",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Chocolate Spread"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Flavor",
        "value": "Chocolate & Peanut Butter & Almond"
      },
      {
        "label": "Ingredients",
        "value": "peanut butter & choco chips & Almond"
      },
      {
        "label": "Dietary Preference",
        "value": "Gluten Free & Non GMO"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "na"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Food Preference",
        "value": "Vegetarian"
      }
    ],
    "sizes": [
      {
        "size": "1500 Gram",
        "sku_id": "U9wMrMr9",
        "url_suffix": "/Peanut-Butter---Chocolate-Crunchy---Almond-Crunchy/catalogue/nnpMh2hb/U9wMrMr9"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.7,
    "review_count": 129,
    "weight": "2",
    "in_stock": true
  },
  {
    "id": "No-0YODW",
    "sku_id": "2Tfplnoj",
    "slug": "appemidi-homemade-mango-pickle-mango-pickle-(500-g)",
    "title": "Appemidi Homemade Mango Pickle Mango Pickle (500 G)",
    "description": "Indulge In The Authentic Taste Of Tradition With Metalman Appemidi Mango Homemade Pickle. Made From The Finest Handpicked Appemidi Mangoes, This Pickle Brings The Rich And Tangy Flavors Of Karnataka Straight To Your Table. Each Jar Is Crafted With Care, Using Time-Honored Recipes That Capture The Essence Of Home-Style Cooking. Our Appemidi Mangoes Are Renowned For Their Unique Taste And Are Carefully Selected To Ensure The Highest Quality. These Mangoes Are Then Marinated In A Blend Of Aromatic Spices And Natural Ingredients, Creating A Symphony Of Flavors That Will Tantalize Your Taste Buds. Whether Paired With Rice, Rotis, Or As A Zesty Side To Your Favorite Dishes, Metalman Appemidi Mango Homemade Pickle Adds A Burst Of Deliciousness To Every Meal.",
    "selling_price": 485,
    "mrp": 575,
    "discount": 16,
    "discount_text": "16% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/M_APPE_PICKLE_500_1761742985169_ya1f164f3al3ytb.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/M_APPE_PICKLE_500_1761742987495_svt4yx47tzyu67y.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/M_APPE_PICKLE_500_1761742984497_dxna4oa5eujo4a8.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/M_APPE_PICKLE_500_1761742984880_8ec2bqdvwkku0va.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/M_APPE_PICKLE_500_1761742990621_eca2le90v991tp9.jpg"
    ],
    "relative_url": "/appemidi-homemade-mango-pickle-mango-pickle-(500-g)/catalogue/No-0YODW/2Tfplnoj",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Pickle"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Ingredients",
        "value": "Appemidi Mango"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Food Preference",
        "value": "Vegetarian"
      }
    ],
    "sizes": [
      {
        "size": "500 G",
        "sku_id": "2Tfplnoj",
        "url_suffix": "/Appemidi-Homemade-Mango-Pickle-Mango-Pickle--500-G-/catalogue/No-0YODW/2Tfplnoj"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.6,
    "review_count": 152,
    "weight": "0.45",
    "in_stock": true
  },
  {
    "id": "Oc3",
    "sku_id": "llxY_dxwEyKs7",
    "slug": "deliciously-healthy-date-palm-jaggery-powder-(400-g,-pack-of-2)",
    "title": "Deliciously Healthy Date Palm Jaggery Powder (400 G, Pack Of 2)",
    "description": "Metalman Dates Palm Jaggery Powder Is A Premium, All-Natural Sweetener Crafted From The Finest Quality Dates And Palm Jaggery. This Unique Product Offers A Healthy And Flavorful Alternative To Refined Sugar And Artificial Sweeteners. Indulge In The Rich And Authentic Sweetness Of Metalman Dates Palm Jaggery Powder. Made From Carefully Selected, Sun-Ripened Dates And Pure Palm Jaggery, This Product Is A Delightful Fusion Of Nature'S Goodness And Traditional Wisdom.",
    "selling_price": 425,
    "mrp": 700,
    "discount": 39,
    "discount_text": "39% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/M_JAGGERY_COMBO_200_1761742984261_y8eegpksben4ica.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/M_JAGGERY_COMBO_200_1761742988768_ddksz3djvsojckm.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/M_JAGGERY_COMBO_200_1761742988991_bnqqx05w8pfevmt.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/M_JAGGERY_COMBO_200_1761742989670_e0tuyt7f66ojwfg.jpg"
    ],
    "relative_url": "/deliciously-healthy-date-palm-jaggery-powder-(400-g,-pack-of-2)/catalogue/Oc3/llxY_dxwEyKs7",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Palm Jaggery"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Ingredients",
        "value": "Dates::Palm Jaggery"
      },
      {
        "label": "Dietary Preference",
        "value": "Gluten Free::Non GMO::Zero Calorie"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "100% Dates Palm Jaggery Powder"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Pack Of",
        "value": "2"
      }
    ],
    "sizes": [
      {
        "size": "400 G",
        "sku_id": "dxwEyKs7",
        "url_suffix": "/Deliciously-Healthy-Date-Palm-Jaggery-Powder--400-G-/catalogue/Oc3_llxY/dxwEyKs7"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.8,
    "review_count": 116,
    "weight": "0.68",
    "in_stock": true
  },
  {
    "id": "PsoipEp3",
    "sku_id": "Hb4oYt-c",
    "slug": "peanut-butter-creamy|-26g-protein-|-non-gmo-|-zero-cholesterol-|-gluten-free-|-(500-g)-pack-of-2",
    "title": "Peanut Butter Creamy| 26G Protein | Non Gmo | Zero Cholesterol | Gluten Free | (500 G) Pack Of 2",
    "description": "Everyouth Peanut Butter Is A Nutrient-Rich Food Containing High Levels Of Protein, Several Vitamins, And Dietary Minerals. It Is Typically Served As A Spread On Bread, Toast, Or Crackers, And Used To Make Sandwiches (Notably The Peanut Butter And Jelly Sandwich). It Is Also Used In A Number Of Breakfast Dishes And Desserts, Such As Granola, Smoothies, Crepes, Cookies, Brownies, Or Croissants. It Is Similar To Other Nut Butters Such As Cashew Butter And Almond Butter.",
    "selling_price": 359,
    "mrp": 799,
    "discount": 55,
    "discount_text": "55% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CREAMY_1761393481200_446o88d90nd38zd.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CREAMY_1761393482212_tvst2gcqb9jna7j.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CREAMY_1761393481514_5b91s66an3jou0j.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CREAMY_1761393482477_a8b9y9snqst1c0z.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CREAMY_1761393482833_r7vvw1nzbjgvrrf.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/CREAMY_1761393483298_4yv7slwdn2uncad.jpg"
    ],
    "relative_url": "/peanut-butter-creamy|-26g-protein-|-non-gmo-|-zero-cholesterol-|-gluten-free-|-(500-g)-pack-of-2/catalogue/PsoipEp3/Hb4oYt-c",
    "categories": [
      "SKIN CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Nut Butter"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Flavor",
        "value": "Peanut Butter"
      },
      {
        "label": "Ingredients",
        "value": "Peanut Butter Creamy"
      },
      {
        "label": "Dietary Preference",
        "value": "Gluten Free & Non GMO"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "Calories: 625 g & Protein: 26 g & Dietary Fiber: 5 g & Trans Fat: 0 g"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Food Preference",
        "value": "Vegetarian"
      }
    ],
    "sizes": [
      {
        "size": "500 Gram",
        "sku_id": "Hb4oYt-c",
        "url_suffix": "/Peanut-Butter-Creamy--26G-Protein---Non-Gmo/catalogue/PsoipEp3/Hb4oYt-c"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.6,
    "review_count": 107,
    "weight": "0.62",
    "in_stock": true
  },
  {
    "id": "tG5089tw",
    "sku_id": "2qdnHTQw",
    "slug": "organic|unfiltered|raw|unpasteurized-apple-cider-vinegar-(500-ml)-vinegar-(500-ml)-pack-of-1",
    "title": "Organic|Unfiltered|Raw|Unpasteurized Apple Cider Vinegar (500 Ml) Vinegar (500 Ml) Pack Of 1",
    "description": "Himalayan Pink Salt Is A Type Of Rock Salt (Halite) That Is Mined From The Punjab Region Of Pakistan, Near The Himalayas. Known For Its Distinctive Pink Color, This Salt Is Valued For Its Purported Health Benefits And Unique Mineral Content. Here\ufffdS A Detailed Description Of Himalayan Pink Salt:Enhance your culinary creations with the natural goodness of Himalayan Pink Salt, a pure and unrefined salt sourced from the pristine Himalayan mountains. Renowned for its delicate pink hue and rich mineral content, this salt contains essential minerals like potassium, magnesium, and calcium that contribute to overall wellness.",
    "selling_price": 299,
    "mrp": 599,
    "discount": 50,
    "discount_text": "50% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/ACV_2_1761393493413_d6aebanozln1utd.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/ACV_2_1761393497675_7lhabit1trfnhs4.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/ACV_2_1761393497792_emrynnf9gq0w16v.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/ACV_2_1761393499123_0u90xpvsfauerq1.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/ACV_2_1761393494704_bso4t56xx0st7x3.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/ACV_2_1761393495552_pohh6zun6r8on1l.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/ACV_2_1761393497897_zvd1n5vetyx8613.jpg"
    ],
    "relative_url": "/organic|unfiltered|raw|unpasteurized-apple-cider-vinegar-(500-ml)-vinegar-(500-ml)-pack-of-1/catalogue/tG5089tw/2qdnHTQw",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Apple Cider Vinegar"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Ingredients",
        "value": "Apple Juice Fermented"
      },
      {
        "label": "Dietary Preference",
        "value": "Gluten Free & No Cholesterol & No Trans Fat & Non-GMO"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Nutrient Content",
        "value": "Energy: 2.5 Kcal & Carbohydrates: 0.6 g & Dietary Fiber: 0 g & Fat: 0 g & Protein: 0 g & Potassium: 1.5 mg & Sodium: 0.25 mg & Iron: 0.10 mg & Calcium: 1.5 mg"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Food Preference",
        "value": "Vegetarian"
      }
    ],
    "sizes": [
      {
        "size": "500 Ml",
        "sku_id": "2qdnHTQw",
        "url_suffix": "/Organic-Unfiltered-Raw-Unpasteurized-Apple-Cider-Vinegar--500-Ml/catalogue/tG5089tw/2qdnHTQw"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.7,
    "review_count": 79,
    "weight": "0.35",
    "in_stock": true
  },
  {
    "id": "u09CZxHn",
    "sku_id": "bSh0aJL0",
    "slug": "sea-buckthorn-infused-nourishing-cream-for-wellness-dry-&-dehydrated-skin-intense-with-aloe-vera-&-sea-buckthorn-(500-g)",
    "title": "Sea Buckthorn infused Nourishing Cream for Wellness Dry & Dehydrated Skin Intense With Aloe Vera & Sea Buckthorn (500 G)",
    "description": "Whitesoft Paraffin Cream is a luxurious, deeply moisturizing cream specially formulated to soothe, soften, and protect dry, rough, and sensitive skin. Enriched with the natural goodness of Aloe Vera and Sea Buckthorn Extract, it delivers intense hydration while helping to restore and strengthen the skin\ufffds natural barrier. Its rich, emollient texture penetrates deeply to relieve dryness, leaving the skin feeling smooth, supple, and nourished. Regular use helps improve skin elasticity, reduce rough patches, and provide long-lasting moisture, making it ideal for daily skincare routines. Free from harsh chemicals, this cream is gentle enough for all skin types and perfect for hands, elbows, feet, and other areas prone to dryness. Experience the ultimate care with Whitesoft Paraffin Cream and give your skin the protection and nourishment it truly deserves.",
    "selling_price": 649,
    "mrp": 945,
    "discount": 31,
    "discount_text": "31% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/u09CZxHn_O1PT7KW53H_2026-03-24_2.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/u09CZxHn_9T1XJ0JPDM_2026-03-24_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/u09CZxHn_HQR0UL1GU5_2026-03-24_3.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/u09CZxHn_1YKMWPBDII_2026-03-24_4.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/dhapuben_500_1_1761393499926_hvok0p3x5ze4m42.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/dhapuben_500_1_1761393498337_yg2yvibqggytzz2.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/dhapuben_500_1_1761393499885_5hlx5snvj4q5hfx.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/dhapuben_500_1_1761393498511_hzp6uywuywsle9y.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/dhapuben_500_1_1761393493940_6g0r13h9gdrre0r.jpg"
    ],
    "relative_url": "/sea-buckthorn-infused-nourishing-cream-for-wellness-dry-&-dehydrated-skin-intense-with-aloe-vera-&-sea-buckthorn-(500-g)/catalogue/u09CZxHn/bSh0aJL0",
    "categories": [
      "JUICE",
      "HEALTH CARE PRODUCT",
      "Under 999",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Moisturiser"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Ideal For",
        "value": "Men & Women"
      },
      {
        "label": "Application Area",
        "value": "Body"
      },
      {
        "label": "Skin Concern",
        "value": "Moisturization & Nourishment"
      },
      {
        "label": "Applied For",
        "value": "Moisturization & Nourishment"
      },
      {
        "label": "Skin Type",
        "value": "Dry Skin"
      }
    ],
    "sizes": [
      {
        "size": "500 Gram",
        "sku_id": "bSh0aJL0",
        "url_suffix": "/Sea-Buckthorn-infused-Nourishing-Cream-for-Wellness-Dry--/catalogue/u09CZxHn/bSh0aJL0"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.5,
    "review_count": 35,
    "weight": "1",
    "in_stock": true
  },
  {
    "id": "UVt-Q37TGrRS",
    "sku_id": "-ln6Xzqf",
    "slug": "dhapuben-wellness-liver-care-juice-with-bhumiamla-|-herbal-liver-care-&-detox-support-|-enriched-with-herbs-&-phytonutrients-|-no-added-sugar-|-750-ml",
    "title": "DHAPUBEN WELLNESS Liver Care Juice with Bhumiamla | Herbal Liver Care & Detox Support | Enriched with Herbs & Phytonutrients | No Added Sugar | 750 ml",
    "description": "Discover the goodness of traditional herbs with DHAPUBEN WELLNESS Liver Care Juice, a thoughtfully formulated herbal wellness drink enriched with Bhumiamla (Phyllanthus niruri) and other herbs and phytonutrients. Bhumiamla has a long history of use in traditional herbal wellness practices.\n\nThis refreshing herbal juice is designed to complement your daily wellness routine and support a balanced lifestyle. Its carefully selected herbal ingredients make it a convenient choice for those looking to include traditional botanical goodness in their everyday diet.\n\nKey Features\n\ud83c\udf3f With Bhumiamla (Phyllanthus niruri)\n\ud83c\udf31 Enriched with the goodness of herbs & phytonutrients\n\ud83d\udc9a Formulated for everyday liver-care wellness\n\ud83c\udf43 Inspired by traditional herbal practices\n\ud83d\udeab No Added Sugar\n\ud83d\udeab No Artificial Colours & Flavours\n\ud83d\udce6 750 ml bottle",
    "selling_price": 799,
    "mrp": 1200,
    "discount": 33,
    "discount_text": "33% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/DHAPUBEN_WELLNESS_Liver_Care_Juice_with_Bhumiamla___Herbal_Liver_Care___Detox_Support___Enriched_with_Herbs___Phytonutrients___No_Added_Sugar___750_ml_HJP4XH5B8G_2026-09-16_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/DHAPUBEN_WELLNESS_Liver_Care_Juice_with_Bhumiamla___Herbal_Liver_Care___Detox_Support___Enriched_with_Herbs___Phytonutrients___No_Added_Sugar___750_ml_72EEVHH103_2026-09-16_2.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/DHAPUBEN_WELLNESS_Liver_Care_Juice_with_Bhumiamla___Herbal_Liver_Care___Detox_Support___Enriched_with_Herbs___Phytonutrients___No_Added_Sugar___750_ml_PMJL3LV7XJ_2026-09-16_3.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/DHAPUBEN_WELLNESS_Liver_Care_Juice_with_Bhumiamla___Herbal_Liver_Care___Detox_Support___Enriched_with_Herbs___Phytonutrients___No_Added_Sugar___750_ml_4H5FJSY8DG_2026-09-16_4.png"
    ],
    "relative_url": "/dhapuben-wellness-liver-care-juice-with-bhumiamla-|-herbal-liver-care-&-detox-support-|-enriched-with-herbs-&-phytonutrients-|-no-added-sugar-|-750-ml/catalogue/UVt-Q37TGrRS/-ln6Xzqf",
    "categories": [
      "JUICE",
      "HEALTH CARE PRODUCT",
      "Under 999"
    ],
    "features": [
      {
        "label": "Country_of_Origin",
        "value": "India"
      },
      {
        "label": "Product Type",
        "value": "Fruit & Herbs"
      },
      {
        "label": "Brand",
        "value": "Dhapuben Wellness"
      },
      {
        "label": "Dietary Preference",
        "value": "Sugar Free"
      },
      {
        "label": "Key Features",
        "value": "Made with a blend of selected herbs and plant-based phytonutrients."
      },
      {
        "label": "Package Contents",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Ingridients",
        "value": "Bhumiamla "
      }
    ],
    "sizes": [
      {
        "size": "750 ml",
        "sku_id": "-ln6Xzqf",
        "url_suffix": "/DHAPUBEN-WELLNESS-Liver-Care-Juice-with-Bhumiamla---Herbal/catalogue/UVt-Q37TGrRS/-ln6Xzqf"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "Return or Exchange within 3 days"
    ],
    "rating": 4.5,
    "review_count": 125,
    "weight": "0.4",
    "in_stock": true
  },
  {
    "id": "WqQ1rKDb",
    "sku_id": "Er5_-Jxs",
    "slug": "100%-gordhan-pure-sea-buckthorn-concentrated-juice-in-glass-bottle-|-himalayan-berry-|-immunity-booster-&-antioxidant-|-multivitamin-with-omega-7-(1200-ml)",
    "title": "100% GORDHAN Pure Sea Buckthorn Concentrated Juice in Glass Bottle | Himalayan Berry | Immunity Booster & Antioxidant | Multivitamin With Omega 7 (1200 Ml)",
    "description": "Our Sea Buckthorn Juice is crafted from carefully handpicked berries, known for their exceptional nutritional profile. Cold-pressed to retain maximum goodness, this juice delivers a natural boost of vitamins, antioxidants, and essential fatty acids. A powerful wellness drink designed to support immunity, digestion, skin health, and overall vitality\u2014pure, clean, and effective.\nKey Features\n\nMade from 100% natural Sea Buckthorn berries\n\nCold-pressed to preserve nutrients\n\nNaturally rich in Vitamin C & antioxidants\n\nContains Omega 3, 6, 7 & 9\n\nSupports immunity, gut health & skin glow\n\nNo added sugar\n\nNo preservatives or artificial colors\n\nVegan & plant-based\n\nPacked hygienically to maintain freshness\n\nHow to Use\n\nShake well before use\n\nMix 20\u201330 ml of juice with 150\u2013200 ml of water\n\nConsume once daily, preferably in the morning\n\nCan be taken on an empty stomach or after meals\n\nRefrigerate after opening and consume within recommended time",
    "selling_price": 1499,
    "mrp": 3220,
    "discount": 53,
    "discount_text": "53% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea__Himalayan_Berry_Immunity_Booster_Buckthorn_Concentrated_Juice___1200_Ml__F62RW8BE7S_2026-03-11_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea__Himalayan_Berry_Immunity_Booster_Buckthorn_Concentrated_Juice___1200_Ml__XITUWGYDBW_2026-03-11_2.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea__Himalayan_Berry_Immunity_Booster_Buckthorn_Concentrated_Juice___1200_Ml__QYMZ7JBEXJ_2026-03-11_3.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/Sea__Himalayan_Berry_Immunity_Booster_Buckthorn_Concentrated_Juice___1200_Ml__HO4TMI0OTO_2026-03-11_4.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/WqQ1rKDb_5B26XRRLKD_2026-08-08_1.png"
    ],
    "relative_url": "/100%-gordhan-pure-sea-buckthorn-concentrated-juice-in-glass-bottle-|-himalayan-berry-|-immunity-booster-&-antioxidant-|-multivitamin-with-omega-7-(1200-ml)/catalogue/WqQ1rKDb/Er5_-Jxs",
    "categories": [
      "JUICE",
      "HEALTH CARE PRODUCT",
      "Amazing Deals",
      "Best Sellers",
      "IN THE SPOTLIGHT"
    ],
    "features": [
      {
        "label": "Country",
        "value": "India (Leh Ladakh)"
      },
      {
        "label": "Product Type",
        "value": "Fruit & Herbs"
      },
      {
        "label": "Brand",
        "value": "GORDHAN"
      },
      {
        "label": "Nutrient Content",
        "value": "13.75kcal"
      },
      {
        "label": "Dietary Preference",
        "value": "Sugar Free"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Flavour",
        "value": "Seabuckthorn Concentrate juice"
      },
      {
        "label": "Ingredient",
        "value": "Seabuckthorn juice"
      },
      {
        "label": "Packaging",
        "value": "Glass Bottle"
      }
    ],
    "sizes": [
      {
        "size": "1200 ml",
        "sku_id": "Er5_-Jxs",
        "url_suffix": "/100--GORDHAN-Pure-Sea-Buckthorn-Concentrated-Juice-in-Glass/catalogue/WqQ1rKDb/Er5_-Jxs"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.5,
    "review_count": 40,
    "weight": "2.43",
    "in_stock": true
  },
  {
    "id": "zP77Zse2",
    "sku_id": "FDiNBGx9",
    "slug": "freeze-dried-mango-snack,-export-quality,-ready-to-eat-snack-chips-(50-g)",
    "title": "Freeze Dried Mango Snack, Export Quality, Ready To Eat Snack Chips (50 G)",
    "description": "Everyouth Freeze Dried Mango Offers The Ultimate Snack Experience For Mango Enthusiasts. Carefully Selected From The Finest Mangoes, This Snack Undergoes A Specialized Freeze-Drying Process That Locks In The Fruit'S Natural Sweetness, Vibrant Color, And Intense Flavor While Preserving Its Nutritional Value. Each Bite-Sized Piece Provides A Burst Of Tropical Goodness, Delivering A Crispy Texture That Melts In Your Mouth. Whether You'Re On-The-Go, Craving A Healthy Snack, Or Adding A Unique Twist To Your Culinary Creations, Everyouth Freeze Dried Mango Is The Perfect Choice. Enjoy The Delicious Taste Of Sun-Ripened Mangoes Anytime, Anywhere, With This Convenient And Wholesome Snack Option.",
    "selling_price": 299,
    "mrp": 599,
    "discount": 50,
    "discount_text": "50% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/mango_chip_50_1761393488396_g977kqzfev051pt.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/mango_chip_50_1761393488899_nx3qmyo07udgg4j.jpg",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/mango_chip_50_1761393489133_bf1wbxs5lyr58xc.jpg"
    ],
    "relative_url": "/freeze-dried-mango-snack,-export-quality,-ready-to-eat-snack-chips-(50-g)/catalogue/zP77Zse2/FDiNBGx9",
    "categories": [
      "HEALTH CARE PRODUCT",
      "Under 499",
      "Under 999",
      "Amazing Deals"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Chips"
      },
      {
        "label": "Brand",
        "value": "Everyouth Online"
      },
      {
        "label": "Flavor",
        "value": "Mango"
      },
      {
        "label": "Ingredients",
        "value": "Mango"
      },
      {
        "label": "Key Features",
        "value": "Premium Quality"
      },
      {
        "label": "Packaging",
        "value": "Eco-friendly packaging"
      },
      {
        "label": "Country of Origin",
        "value": "India"
      },
      {
        "label": "Food Preference",
        "value": "Vegetarian"
      }
    ],
    "sizes": [
      {
        "size": "50 Gram",
        "sku_id": "FDiNBGx9",
        "url_suffix": "/Freeze-Dried-Mango-Snack--Export-Quality--Ready-To/catalogue/zP77Zse2/FDiNBGx9"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.8,
    "review_count": 66,
    "weight": "0.45",
    "in_stock": true
  },
  {
    "id": "",
    "sku_id": "WXEeZ9X_3H8EXvS4",
    "slug": "jamun-active-juice-with-antioxidants",
    "title": "Jamun Active Juice with Antioxidants",
    "description": "\"Experience the bold, exotic essence of the deep woods with our Jamun Juice. Known as the 'Black Plum' of India, this juice boasts a striking deep-purple hue and a unique flavor profile that balances sharp tanginess with a subtle, earthy sweetness. Each sip leaves a signature dry, astringent finish on the palate\ufffda hallmark of pure, authentic Jamun.\"",
    "selling_price": 575,
    "mrp": 585,
    "discount": 2,
    "discount_text": "2% OFF",
    "images": [
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/_WXEeZ9X_LU6V8ARRHM_2026-02-05_1.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/_WXEeZ9X_3J20R4QKNX_2026-02-05_2.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/_WXEeZ9X_QD8VH1L1MO_2026-02-05_3.png",
      "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/_WXEeZ9X_URC77PMAXY_2026-02-05_1.png"
    ],
    "relative_url": "/jamun-active-juice-with-antioxidants/catalogue//WXEeZ9X_3H8EXvS4",
    "categories": [
      "JUICE",
      "HEALTH CARE PRODUCT",
      "Under 999"
    ],
    "features": [
      {
        "label": "Product Type",
        "value": "Juice"
      },
      {
        "label": "Brand",
        "value": "EVERYOUTH"
      },
      {
        "label": "Country",
        "value": "India"
      },
      {
        "label": "Product Details",
        "value": "Jamun Juice"
      },
      {
        "label": "How to use",
        "value": "Mix 20\ufffd30 ml of the juice in a glass of lukewarm or room-temperature water."
      },
      {
        "label": "Volume",
        "value": "1000 ml"
      }
    ],
    "sizes": [
      {
        "size": "1000 Ml",
        "sku_id": "3H8EXvS4",
        "url_suffix": "/Jamun-Active-Juice-with-Antioxidants/catalogue/_WXEeZ9X/3H8EXvS4"
      }
    ],
    "trust_markers": [
      "Get it delivered in 3-4 days",
      "Cash on Delivery",
      "3 days Return (Wrong/damaged items only)"
    ],
    "rating": 4.6,
    "review_count": 47,
    "weight": "1.5",
    "in_stock": true
  }
];

export const policiesData = {
  "about-us": "About Us\n\nDHAPUBEN WELLNESS\n\nDHAPUBEN WELLNESS \u2013 Empowering wellness with premium, science-backed nutrition and health products for a balanced, energetic, and vibrant life.\n\nContact Us\n\nWhatsApp: +91 - 9993004819\n\nCustomer Support Time: Mon-Sat, 10 AM to 7 PM\n\nEmail: shubhikaecowells@gmail.com\n\nAddress: 286 SATVIKA VIHAR AB ROAD, Madhya Pradesh, Indore, 453771\n\nAbout Us\n\nReturn Policy\n\nTerms & Conditions\n\nPrivacy Policy\n\nShipping Policy\n\nMost searched on store\n\nVitamins\n\nUnder 299\n\nSugar\n\nCandies And Mints\n\nSalt And Salt Substitutes\n\nGummy Sweets\n\nChocolate Covered Foods\n\nUnder 499\n\nUnder 999\n\nAmazing Deals\n\nBest Sellers\n\nMoisturizer\n\nPickles\n\nMango\n\nIN THE SPOTLIGHT\n\nTop Products",
  "privacy-policy": "Privacy policy\n\nTerms Of Our Privacy Policy\n\nPersonal Information That We collect\n\nUses Of The Information Collected\n\nSend news about the website.\n\nCalculate the number of visitors\n\nMonitor the website\n\nKnow the geographical location of the users\n\nContact to give information bout the website.\n\nGive a better shopping experience online.\n\nUpdate about the recent offers on the website.\n\nDHAPUBEN WELLNESS\n\nDHAPUBEN WELLNESS \u2013 Empowering wellness with premium, science-backed nutrition and health products for a balanced, energetic, and vibrant life.\n\nContact Us\n\nWhatsApp: +91 - 9993004819\n\nCustomer Support Time: Mon-Sat, 10 AM to 7 PM\n\nEmail: shubhikaecowells@gmail.com\n\nAddress: 286 SATVIKA VIHAR AB ROAD, Madhya Pradesh, Indore, 453771\n\nAbout Us\n\nReturn Policy\n\nTerms & Conditions\n\nPrivacy Policy\n\nShipping Policy\n\nMost searched on store\n\nVitamins\n\nUnder 299\n\nSugar\n\nCandies And Mints\n\nSalt And Salt Substitutes\n\nGummy Sweets\n\nChocolate Covered Foods\n\nUnder 499\n\nUnder 999\n\nAmazing Deals\n\nBest Sellers\n\nMoisturizer\n\nPickles\n\nMango\n\nIN THE SPOTLIGHT\n\nTop Products",
  "terms-and-conditions": "Terms of service\n\nSection-1 Online Store Terms\n\nSection-2  General Conditions\n\nSection-3 Accuracy, Completeness and Timeliness Of Information\n\nSection 4 \u2013 Modifications To The Service And Prices\n\nSection 5 \u2013 Products Or Services\n\nDHAPUBEN WELLNESS\n\nDHAPUBEN WELLNESS \u2013 Empowering wellness with premium, science-backed nutrition and health products for a balanced, energetic, and vibrant life.\n\nContact Us\n\nWhatsApp: +91 - 9993004819\n\nCustomer Support Time: Mon-Sat, 10 AM to 7 PM\n\nEmail: shubhikaecowells@gmail.com\n\nAddress: 286 SATVIKA VIHAR AB ROAD, Madhya Pradesh, Indore, 453771\n\nAbout Us\n\nReturn Policy\n\nTerms & Conditions\n\nPrivacy Policy\n\nShipping Policy\n\nMost searched on store\n\nVitamins\n\nUnder 299\n\nSugar\n\nCandies And Mints\n\nSalt And Salt Substitutes\n\nGummy Sweets\n\nChocolate Covered Foods\n\nUnder 499\n\nUnder 999\n\nAmazing Deals\n\nBest Sellers\n\nMoisturizer\n\nPickles\n\nMango\n\nIN THE SPOTLIGHT\n\nTop Products",
  "shipping-policy": "Shipping policy\n\nWe ship all over india and try to get the best rates for our customers. Orders placed Monday through Saturday IST will be processed on the same or following business day and will be shipped within two business days of order placement if the products) is(are) in inventory in our warehouse. If you want to inquire about the delivery time of a product, do not hesitate to contact us prior to placing your order. Our shipping charges varies as per the order value and delivery location. Shipping charges for your order will be calculated and displayed at checkout.our product delivery timeline is 4-9 days maximum, If you have any further questions, please don't hesitate to contact us at\n\nshubhikaecowells@gmail.com\n\nDHAPUBEN WELLNESS\n\nDHAPUBEN WELLNESS \u2013 Empowering wellness with premium, science-backed nutrition and health products for a balanced, energetic, and vibrant life.\n\nContact Us\n\nWhatsApp: +91 - 9993004819\n\nCustomer Support Time: Mon-Sat, 10 AM to 7 PM\n\nEmail: shubhikaecowells@gmail.com\n\nAddress: 286 SATVIKA VIHAR AB ROAD, Madhya Pradesh, Indore, 453771\n\nAbout Us\n\nReturn Policy\n\nTerms & Conditions\n\nPrivacy Policy\n\nShipping Policy\n\nMost searched on store\n\nVitamins\n\nUnder 299\n\nSugar\n\nCandies And Mints\n\nSalt And Salt Substitutes\n\nGummy Sweets\n\nChocolate Covered Foods\n\nUnder 499\n\nUnder 999\n\nAmazing Deals\n\nBest Sellers\n\nMoisturizer\n\nPickles\n\nMango\n\nIN THE SPOTLIGHT\n\nTop Products",
  "return-policy": "Return policy\n\nReturn and Refund Policy\n\nCancelation Policy: -\n\n1. in case there is an order cancellation. Please do so before it is shipped. Once the product is shipped it can\u2019t be cancelled using our website.\n\nReturn Policy:\n\n1. Returns and exchanges are applicable only to select products. Detailed return eligibility and conditions are provided on the respective product pages. For most products, the standard return window is 3 days.\n\n2. The return policy for any product is subject to change without prior notice.\n\n3. In case we do not have pick up service available at your location, you would have to self-ship the product to our office Address.\n\n4. Return/Exchange charges may apply on case to case basis.transaction mode.\n\nNOTE FOR RETURN:-\n\n\u2022 The items should be unused and unwashed for hygiene reasons. \u2022 The product should have the original packaging and tags in place. Items without the original tags will not be accepted. \u2022 Customized products cannot be returned or exchanged \u2022 Return/Exchange requests that are not raised within the return period (Refer product page) the product would not be accepted.\n\nDHAPUBEN WELLNESS\n\nDHAPUBEN WELLNESS \u2013 Empowering wellness with premium, science-backed nutrition and health products for a balanced, energetic, and vibrant life.\n\nContact Us\n\nWhatsApp: +91 - 9993004819\n\nCustomer Support Time: Mon-Sat, 10 AM to 7 PM\n\nEmail: shubhikaecowells@gmail.com\n\nAddress: 286 SATVIKA VIHAR AB ROAD, Madhya Pradesh, Indore, 453771\n\nAbout Us\n\nReturn Policy\n\nTerms & Conditions\n\nPrivacy Policy\n\nShipping Policy\n\nMost searched on store\n\nVitamins\n\nUnder 299\n\nSugar\n\nCandies And Mints\n\nSalt And Salt Substitutes\n\nGummy Sweets\n\nChocolate Covered Foods\n\nUnder 499\n\nUnder 999\n\nAmazing Deals\n\nBest Sellers\n\nMoisturizer\n\nPickles\n\nMango\n\nIN THE SPOTLIGHT\n\nTop Products"
};

// Helper utilities
export function getProductBySlugOrId(identifier: string): Product | undefined {
  return products.find(
    (p) =>
      p.id === identifier ||
      p.slug === identifier ||
      p.relative_url.includes(identifier) ||
      identifier.includes(p.id)
  );
}

export function getProductsByCategory(categoryName: string): Product[] {
  const lower = categoryName.toLowerCase().replace(/-/g, ' ');
  return products.filter((p) =>
    p.categories.some((c) => c.toLowerCase().includes(lower) || lower.includes(c.toLowerCase()))
  );
}

export function getFeaturedProducts(type: 'new' | 'best' | 'spotlight' | 'deals'): Product[] {
  switch (type) {
    case 'new':
      return products.slice(0, 8);
    case 'best':
      return products.filter((p) => p.categories.includes('Best Sellers')).slice(0, 8);
    case 'spotlight':
      return products.filter((p) => p.categories.includes('IN THE SPOTLIGHT')).slice(0, 8);
    case 'deals':
      return products.filter((p) => p.discount >= 40 || p.categories.includes('Amazing Deals')).slice(0, 8);
    default:
      return products.slice(0, 8);
  }
}
