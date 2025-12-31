# Project Name: Empire Industrial Corp. Official Website
**Version:** 1.0
**Status:** Approved for Development
**Target Audience:** Industrial B2B clients in North America and Asia (Fertilizer, Mining, Metallurgy sectors).

---

## 1. Project Overview & Context
**Empire Industrial Corp.** is an industrial chemical and material supplier bridging North American and Asian markets. Unlike a standard trading company, they emphasize their **engineering/technical foundation** and **end-to-end logistics**.

**Objective:** Build a professional, static, responsive official website that establishes trust, showcases product specifications, and facilitates B2B quote requests.

**Key Narrative Logic:**
1.  **Identity:** Engineering-backed supply chain experts.
2.  **Scope:** Serving 5 key industries with 4 product pillars.
3.  **Trust:** Sustainability as an operational requirement, not a buzzword.
4.  **Action:** Direct contact/quote requests.

---

## 2. Design System & Visual Identity
*   **Color Palette:**
    *   **Primary:** Deep Industrial Green (Symbolizing sustainability & agriculture).
    *   **Secondary:** Premium Grey (Symbolizing engineering, steel, concrete reliability).
    *   **Accent:** Clean White (For content readability).
    *   **Vibe:** Corporate, Clean, Industrial, "High-end B2B".
*   **Typography:** Sans-serif, modern, legible (e.g., Inter, Roboto, or Helvetica Neue).
*   **Imagery Style:**
    *   Real-world industrial scenes: Ports/Containers, Chemical plants, Bulk piles, Mining operations, Green fields (for fertilizer).
    *   *Avoid:* Generic "business people shaking hands."
*   **UI Components:** Card layouts for products, clean data tables for specifications, high-contrast CTA buttons.

---

## 3. Sitemap Structure
1.  **Home**
2.  **About Us**
3.  **Industries**
4.  **Products** (Overview + 4 Sub-categories)
5.  **Services** (Logistics)
6.  **Sustainability**
7.  **Contact Us**

---

## 4. Detailed Page Specifications

### 4.1. Home Page
*   **Hero Section:** High-impact industrial background image.
    *   *Headline:* "Beyond Logistics: Delivering Industrial Solutions Across North America & Asia."
    *   *Sub-headline:* "Bridging the gap between raw material supply and industrial application with engineering precision and reliable execution."
    *   *Primary CTA:* "View Products"
    *   *Secondary CTA:* "Request a Quote"
*   **Value Proposition Bar:** Engineering Foundation | Regulatory Compliance | End-to-End Execution.

### 4.2. About Us
*   **Content:**
    *   Empire Industrial Corp. specializes in industrial chemicals & materials.
    *   **Key Differentiator:** A solid engineering and chemical-technical foundation underpins all operations (Spec review, QC, Safety).
    *   **Commitment:** Providing practical, verifiable, and sustainable industrial support.

### 4.3. Industries (Application Scenarios)
*   *Layout:* 5 distinct blocks/cards with icons or background images.
1.  **Fertilizers:** Nitrogen/Phosphate supply, seasonal demand support.
2.  **Mining & Mineral Processing:** Reagents for extraction/flotation.
3.  **Metallurgy & Metals:** Smelting/Refining chemicals.
4.  **Water Treatment:** Municipal/Industrial systems (pH control, disinfection).
5.  **Manufacturing:** Process chemicals with strict quality controls.

### 4.4. Products (The Core Section)
*   *Structure:* Main overview listing 4 categories, linking to details.
*   *Global CTA:* Every product section must have a "Request a Quote" button.

#### Category A: Fertilizers
*   **Nitrogen:**
    *   *Urea (46-0-0):* Prilled/Granular. (Specs: N content, moisture).
    *   *UAN Solution (28/32):* Liquid.
    *   *Ammonium Sulphate (21-0-0-24S):* N+S source.
*   **Phosphate:** DAP (18-46-0), MAP (11-52-0 / 12-61-0).
*   **Potash:** MOP (0-0-60/62), SOP (0-0-50-18S).
*   **Blends/NPK:** Custom formulations available.

#### Category B: Sulphur
*   **Forms:** Granular, Pastille, Prilled, Lump.
*   **Specs:** Purity, moisture, ash.
*   **Logistics:** Bulk vessel or Container.

#### Category C: Petroleum-chain Products
*   **Focus:** Petroleum Coke (for combustion/metallurgy).
*   **Others:** NGL/LPG, Refinery by-products.

#### Category D: Industrial Inorganics
*   **List:** Hydrochloric Acid, Sulfuric Acid, Caustic Soda (NaOH), Sodium Hypochlorite, Zinc Chloride, Zinc Oxide.
*   **Docs:** SDS, COA, Third-party inspection (SGS/Intertek).

### 4.5. Services (Logistics)
*   *Headline:* "Logistics Support for Every Shipment."
*   *4 Key Pillars (Icon Grid):*
    1.  **Truck:** Regional, Last-mile.
    2.  **Rail:** Long-haul bulk movements.
    3.  **Port & Terminal:** Staging, Loading/Unloading.
    4.  **Ocean Freight:** NA-Asia cross-border coordination.
*   *Value Add:* Documentation Readiness (SDS/COA) to prevent delays.

### 4.6. Sustainability
*   *Philosophy:* Sustainability is an **Operational Requirement**.
*   *Layout:* **Three-Card Layout** (Strict Requirement).
    *   **Card 1: Responsible Supply:** Supplier qualification & document verification.
    *   **Card 2: Quality & Traceability:** Lot-based tracking, COA/SDS integrity.
    *   **Card 3: HSE Practices:** Packaging & labeling aligned with transport rules.

### 4.7. Contact Us (Strict Data Requirement)
*   *Note:* **DO NOT** include Texas or Mexico addresses found in old data. Use ONLY the following three locations.

**Location 1: Canada (Headquarters)**
*   Address: 524 10th Ave SW, Calgary
*   Tel: +1 368 399 3191

**Location 2: United States (Sales)**
*   Address: 880 68th St, Brooklyn, NY 11220
*   Tel: +1 650 680 9055

**Location 3: China (Branch)**
*   Address: Unit 2, 3/F, Building B4, Science & Technology Complex, No. 8 Jialingjiang East Street, Jianye District, Nanjing, Jiangsu, 210000, China
*   Tel: +86-180 3059 1340

**Inquiry Form Fields:**
*   Name / Company
*   Email / Phone
*   Product of Interest
*   Quantity (MT)
*   Destination Port
*   Incoterms (FOB / CIF)
*   Message

---

## 5. Technical Recommendations for AI Generation
*   **Framework:** React (Next.js or Vite) or static HTML5/Tailwind CSS.
*   **Styling:** Tailwind CSS is preferred for rapid implementation of the "Green/Grey" theme.
*   **Responsiveness:** Mobile-first design is mandatory.
*   **Assets:** Use placeholders for images (e.g., Unsplash source URLs with industrial keywords) if real assets are not provided.

## 6. Prompt for AI Agent
*(Copy and paste this into your AI coding tool)*

> "Act as a Senior Frontend Developer and UI Designer. Build a corporate B2B website for 'Empire Industrial Corp' based on the attached PRD.
>
> **Core Constraints:**
> 1.  Use a 'Deep Green and Premium Grey' color scheme to reflect an industrial, eco-conscious brand.
> 2.  The 'Contact' page must strictly adhere to the 3 locations listed (Calgary, Brooklyn, Nanjing) and exclude any others.
> 3.  The 'Products' section should be structured clearly with the 4 categories listed.
> 4.  The 'Sustainability' page must feature the specific 3-card layout described.
> 5.  Ensure the tone is professional, engineering-focused, and reliable."