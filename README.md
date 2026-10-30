# Dhapuben Wellness – Frontend Clone (Demo)

A complete, high-fidelity frontend clone of [dhapubenwellness.com](https://dhapubenwellness.com/) built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and comprehensive **Mock Data**.

---

## 🌟 Key Features & Pages Cloned

### 1. **Pages & Dynamic Routes**
- **Home Page (`/`)**:
  - Live rotating Announcement Bar (Coupon codes, Free Shipping alerts).
  - Main Navigation & Mobile Drawer with categories and quick links.
  - Hero Banner Carousel with smooth transitions.
  - "Shop by Category" circular grid (Health Care, Juice, Skin Care).
  - Product Carousel & Grid Sections:
    - `NEW ARRIVALS`
    - `AMAZING DEALS` (40%+ OFF discounts)
    - `IN THE SPOTLIGHT`
    - `BEST SELLERS`
  - Promotional High-Altitude Himalayan Sea Buckthorn Banner.
  - Why Choose Us / Trust Badges (Lowest Price, Superior Quality, Free Shipping).
  - Footer with Brand Bio, WhatsApp support, Quick Links, and Safe Payment badges.
- **Product Detail Pages (`/[slug]/catalogue/[catId]/[skuId]`)**:
  - High-resolution multi-image gallery with thumbnail selector.
  - Price, MRP, and discount percentage badge.
  - Verified customer ratings and reviews breakdown (5-star distribution).
  - Interactive Size / Pack Variant Selector.
  - Quantity counter (`[-] [count] [+]`).
  - "ADD TO BAG" & "BUY NOW" buttons with instant toast feedback.
  - Special Offers strip with coupon `BUPMER10`.
  - Delivery & Trust Markers (Fast delivery, 100% Genuine, Easy Returns).
  - Product Specifications & Rich Nutritional description.
  - "You May Also Like" Related Products section.
  - Mobile bottom sticky CTA bar for quick checkout.
- **Collection & Category Pages**:
  - `/featured/all-products`
  - `/featured/new-arrivals`
  - `/featured/best-sellers`
  - `/[slug]/collection/[collectionId]` (e.g., `/HEALTH-CARE-PRODUCT/collection/o6R3aiM6`, `/JUICE/collection/Ui0vRNuY`, `/SKIN-CARE-PRODUCT/collection/N0q7mtDj`, `/Amazing-Deals/collection/a-FOpMt_`, etc.)
  - Sort by Price (Low to High, High to Low), Discount %, and Relevance.
  - Category filter pills.
- **Interactive Search (`/search`)**:
  - Real-time search across all 26 catalog products.
  - Instant price filter pills (< ₹300, ₹300–₹600, > ₹600).
- **Shopping Bag (`/bag`) & Slide-Over Drawer**:
  - Persistent cart state using `localStorage`.
  - Dynamic Free Delivery progress meter (Free shipping for orders ≥ ₹849).
  - Promo code input with instant validation and discount calculation (`BUPMER10` gives 10% off).
  - Item increment/decrement and removal.
  - Complete order summary & retail savings breakdown.
- **Checkout Process (`/checkout`)**:
  - Delivery address form with full Indian shipping fields.
  - Payment options: UPI (Instant ₹50 extra online discount), Cards, Cash on Delivery (COD).
  - "PLACE ORDER" button with celebratory confetti animation (`canvas-confetti`).
  - Order Confirmation screen displaying Order ID, estimated delivery, and address summary.
- **Order Tracking (`/orders`)**:
  - Visual 4-step progress timeline: Order Confirmed ➔ Processed ➔ In Transit ➔ Delivered.
  - Items breakdown, shipping address, and direct WhatsApp support button for the order.
- **Official Policy Pages**:
  - `/about-us` – Brand story, mission, WhatsApp & contact address in Indore, MP.
  - `/privacy-policy` – Confidentiality terms and data protection.
  - `/terms-and-conditions` – Store terms and service guidelines.
  - `/shipping-policy` – Pan-India dispatch timelines and free delivery thresholds.
  - `/return-policy` – Return, refund, and replacement eligibility.
- **Floating WhatsApp Support Widget**:
  - Accessible on every page linking directly to WhatsApp support chat.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Custom `#ff6f00` primary theme & `#0f4a73` navy accent)
- **Typography**: Google Font `Quicksand` (matching original website font)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: Canvas Confetti
- **State Management**: React Context (`CartContext`) with localStorage persistence

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Run for Production
```bash
npm run build
npm start
```

