# Task J: Build a Rental Catalog Page

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

---

> 💡This assignment extends **Task I.** You will add a dedicated **Catalog** page and keep the same visual identity as your landing page (colors, typography, layout rhythm). The landing page now includes a clear link/button to the catalog.

---

## 🎯 Objective

Create a **catalog page** that lists your rentable items with:

* **Image** (optimized, correct aspect ratio, `alt` text)
* **Name + short description** (2–3 lines)
* **Price** (e.g., `39 €/d`, `120 €/wk`)
* **One video** relevant to the catalog (e.g., product tour, safety/usage tutorial, or brand intro)

The landing page (from Task I) must contain a **prominent link** (for example “View Catalog”) that navigates to your catalog page.

---

## 📚 Learning Goals

After completing this task, you can:

* Maintain a **consistent design system** across multiple pages
* Build a **responsive product grid** with semantic HTML
* Integrate **images + video** accessibly and efficiently

---

## ✅ Requirements

> [!NOTE]
> 🖼️ **Important:** The page must include the following example image somewhere on the page: [example.jpg](https://github.com/vheikkiniemi/BasicsOfWebDevelopment2025S/blob/main/Assignments/example.jpg)

### 1️⃣ Information Architecture

* **Landing page** (from Task I) → adds a **link/button** to the catalog
* **Catalog page** (new):

  * **Header + nav** matching your landing page
  * **Intro section** (1–2 sentences about what’s available)
  * **Product grid** (min. **6 items**) with image, name, short text, **price** (in Finnish format — e.g., `39 €/d`, `199 €/wk`)
  * **Video section** (one embedded `<video>` with `controls`, `poster`, and a `<track>` captions file if speech)
  * **Footer** identical/similar to landing

### 2️⃣ Visual Consistency

* **Same color palette and typography** as the landing page
* Reuse spacing scale, buttons, card corners/shadows, etc.

### 3️⃣ Media & Performance

* Use **responsive images** (`width`/`height` or `aspect-*` utilities) to avoid layout shift
* **Compress** images (e.g., WebP/AVIF + fallback)
* **`loading="lazy"`** for below-the-fold images
* Provide a **poster** image for the video; keep duration/size reasonable
* If using Tailwind, prefer `object-cover`, `aspect-video`, `grid`, `gap`, etc.

### 4️⃣ Semantics & Accessibility

* Proper headings (`<h1>`, `<h2>`, etc.)
* Meaningful `alt` text on images; empty `alt` only for decorative elements
* Sufficient color contrast; visible focus states
* Captions (`<track>`) if the video includes spoken content

### 5️⃣ Tech Choices

* **CSS or Tailwind** (your choice).
* Keep code **clean** and **valid** → use the W3C HTML Validator before submission.

---

## 🛠️ Suggested Steps

1. **Duplicate your visual shell**

   * Create `catalog.html` (or `/catalog/index.html`)
   * Copy header/nav/footer from the landing page
2. **Build the grid**

   * 2–4 columns depending on viewport
   * Each product card: image (fixed aspect), name, 2–3 lines of copy, **price** (`39 €/d`, `120 €/wk`, etc.)
3. **Add the video section**

   * `<video controls preload="metadata" poster="...">`
   * Provide MP4 + WEBM sources
   * Add `<track kind="captions" …>` if speech
4. **Optimize**

   * Compress/convert images; add `loading="lazy"`
   * Reserve space to prevent CLS
5. **Validate & publish**

   * Validate HTML and check contrast
   * Deploy on GitHub Pages and verify navigation works end-to-end

---

## 🧮 Grading Criteria (0–2 points)

> [!NOTE]
> 🖼️ **Important:** The page must include the following example image somewhere on the page: [example.jpg](https://github.com/vheikkiniemi/BasicsOfWebDevelopment2025S/blob/main/Assignments/example.jpg)

| Points | Description                                                                                                                                                                          |
| :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  **0** | The page does not meet layout expectations. Design is incomplete, unreadable, or does not work.                                                                                                               |
|  **1** | Layout or/and responsiveness is weak, and visual quality is inconsistent.                                                                                 |
|  **2** | The page looks and feels polished and professional. It is responsive, semantic, and HTML-valid. |

---

## 📤 Submission

* Public **GitHub Pages link**
* **GitHub repository** link

---