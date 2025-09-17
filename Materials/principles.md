# 🌐 Good and Basic Principles of Web Design

This page introduces timeless design principles that will help you build **clear, professional, and accessible websites**. The content will be updated and extended as the course progresses.

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

---

> [!TIP]
> Always aim to keep your site visually clear and well-structured. Proper spacing, alignment, and consistent styles help make your content more readable and professional.

## 1. Visual Clarity & Structure

**Tips:**

* Use **whitespace** (margins & padding) to separate elements.
* Keep **consistent alignment** for headings, text, and images.
* Apply **style consistency** (same fonts, sizes, and line spacing).
* Limit to **2–3 fonts** and **2–3 colors** for a professional look.
* Use **semantic HTML** (`<h1>`, `<p>`, `<figure>`, etc.) for better structure and accessibility.

---

## 2. Colors

**How to use colors wisely:**

* **Keep contrast high:** Text must be easy to read (dark text on light background or vice versa). Test with [Contrast Checker](https://webaim.org/resources/contrastchecker/).
* **Limit your palette:** 2–3 main colors (primary, secondary, accent) are usually enough.
* **Use colors with purpose:**

  * Primary → brand identity / main navigation
  * Secondary → support elements (headers, sidebars)
  * Accent → highlights (buttons, links, important notes)
* **Avoid overuse:** Too many bright colors can distract; use white/neutral space to balance.
* **Think accessibility:** About 8% of men have color vision deficiency. Avoid red/green-only contrasts.

### Example Palettes

**1. Calm & Professional (blue/gray)**

* Background: `#f4f6f8`
* Primary: `#1e3a8a` (deep blue)
* Secondary: `#64748b` (gray-blue)
* Accent: `#3b82f6` (bright blue)

**2. Energetic & Modern (orange/teal)**

* Background: `#ffffff`
* Primary: `#ea580c` (vivid orange)
* Secondary: `#0d9488` (teal)
* Accent: `#fbbf24` (warm yellow)

**3. Minimal & Elegant (black/white with accent)**

* Background: `#ffffff`
* Primary: `#000000`
* Secondary: `#6b7280` (neutral gray)
* Accent: `#e11d48` (strong pink-red)

---

## 3. Resources for Further Learning

* [W3C: Web Design Principles](https://www.w3.org/TR/design-principles/)
* [MDN: CSS Styling Basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)
* [Google Material Design](https://m3.material.io/)
* [Coolors – Palette Generator](https://coolors.co/)
* [Smashing Magazine – Design Articles](https://www.smashingmagazine.com/category/design)
* [Material Design Color Tool](https://m3.material.io/styles/color/system/overview)

---

✅ This document will evolve during the course. Treat it as a **living guide** for good practices in web design.

---

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Good & Basic Principles — Demo</title>

  <!-- Internal CSS -->
  <style>
    /* =========================
       1) Design Tokens (CSS vars)
       ========================= */
    :root {
      /* Choose one base palette for this page (Calm & Professional) */
      --bg: #f4f6f8;
      --text: #0f172a;       /* near-slate-900 for strong contrast */
      --muted: #475569;      /* slate-600 for secondary text */
      --primary: #1e3a8a;    /* deep blue */
      --secondary: #64748b;  /* gray-blue */
      --accent: #3b82f6;     /* brighter blue for CTAs/links */

      /* Layout */
      --container: 960px;
      --radius: 14px;

      /* Spacing scale (8px base) */
      --space-1: 8px;
      --space-2: 12px;
      --space-3: 16px;
      --space-4: 24px;
      --space-5: 32px;
      --space-6: 48px;

      /* Type scale */
      --fs-sm: 0.95rem;
      --fs-base: 1.05rem;
      --fs-lg: 1.25rem;
      --fs-xl: 1.6rem;
      --fs-2xl: 2.0rem;
      --lh: 1.6;
    }

    /* =========================
       2) Base Styles
       ========================= */
    html, body {
      background: var(--bg);
      color: var(--text);
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      line-height: var(--lh);
      margin: 0;
    }

    a {
      color: var(--accent);
      text-decoration: none;
    }
    a:hover, a:focus {
      text-decoration: underline;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: var(--radius);
      display: block;
    }

    /* =========================
       3) Layout & Whitespace
       ========================= */
    .container {
      max-width: var(--container);
      margin-inline: auto;
      padding: var(--space-5) var(--space-3);
    }

    header.site-header {
      padding: var(--space-4) 0 var(--space-3);
      border-bottom: 1px solid #e5e7eb; /* subtle divider */
      margin-bottom: var(--space-5);
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: var(--space-3);
      padding: 0;
      margin: var(--space-2) 0 0;
    }

    main {
      display: grid;
      gap: var(--space-5);
    }

    /* Card pattern for content sections */
    .card {
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: var(--radius);
      padding: var(--space-5);
      box-shadow: 0 1px 2px rgba(0,0,0,0.04);
    }

    /* =========================
       4) Typography & Alignment
       ========================= */
    h1, h2, h3 {
      line-height: 1.25;
      margin: 0 0 var(--space-3);
      letter-spacing: -0.01em;
    }
    h1 {
      font-size: var(--fs-2xl);
      font-weight: 800;
    }
    h2 {
      font-size: var(--fs-xl);
      font-weight: 750;
      margin-top: var(--space-1);
    }
    h3 {
      font-size: var(--fs-lg);
      font-weight: 700;
      color: var(--muted);
    }
    p, li {
      font-size: var(--fs-base);
      margin: 0 0 var(--space-3);
      color: var(--text);
    }

    .lead {
      font-size: var(--fs-lg);
      color: var(--muted);
      max-width: 60ch;      /* keep line length comfortable */
    }

    /* =========================
       5) Buttons & Links
       ========================= */
    .btn {
      display: inline-block;
      padding: 0.7rem 1rem;
      border-radius: 999px;
      font-weight: 700;
      border: 2px solid var(--primary);
      background: var(--primary);
      color: #fff;
    }
    .btn:hover, .btn:focus {
      background: #16306b; /* darker for hover */
      border-color: #16306b;
    }

    /* =========================
       6) Color Palettes (swatches)
       ========================= */
    .palettes {
      display: grid;
      gap: var(--space-4);
    }

    .palette {
      display: grid;
      gap: var(--space-2);
    }

    .swatches {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: var(--space-2);
    }

    .swatch {
      border-radius: var(--radius);
      height: 56px;
      border: 1px solid rgba(0,0,0,0.06);
      position: relative;
      overflow: hidden;
    }
    .swatch code {
      position: absolute;
      inset: auto var(--space-2) var(--space-2) var(--space-2);
      background: rgba(255,255,255,0.88);
      border-radius: 8px;
      font-size: var(--fs-sm);
      padding: 2px 6px;
    }

    /* =========================
       7) Example media block (alignment)
       ========================= */
    .media {
      display: grid;
      gap: var(--space-3);
    }

    @media (min-width: 720px) {
      .media {
        grid-template-columns: 2fr 3fr;
        align-items: start;
      }
    }

    .placeholder {
      background: linear-gradient(135deg, #e5e7eb, #f8fafc);
      border: 1px dashed #cbd5e1;
      height: 220px;
      border-radius: var(--radius);
      display: grid;
      place-items: center;
      color: #64748b;
      font-weight: 600;
    }

    /* =========================
       8) Helper lists
       ========================= */
    .checklist {
      display: grid;
      gap: var(--space-2);
      padding-left: 1.2rem;
    }
    .checklist li { list-style: "✔  "; }
    .muted { color: var(--muted); }
    footer {
      margin-top: var(--space-6);
      padding: var(--space-4) 0 var(--space-6);
      color: var(--muted);
      text-align: center;
    }
  </style>
</head>

<body>
  <header class="site-header">
    <div class="container">
      <h1>Good & Basic Principles — Demo</h1>
      <p class="lead">
        A minimal example that demonstrates visual clarity, spacing, alignment, consistent styles, semantic HTML, and accessible color use.
      </p>
      <nav aria-label="Main">
        <ul>
          <li><a href="#structure">Structure</a></li>
          <li><a href="#colors">Colors</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container">
    <!-- SECTION: Visual Clarity & Structure -->
    <section id="structure" class="card">
      <h2>1) Visual Clarity & Structure</h2>
      <p>
        Always aim to keep your site visually clear and well-structured. Proper spacing, alignment, and consistent styles help make your content more readable and professional.
      </p>

      <div class="media" style="margin-top: var(--space-4);">
        <div>
          <div class="placeholder" aria-hidden="true">Image / Figure</div>
          <p class="muted" style="margin-top: var(--space-2);">
            <strong>Alignment example:</strong> media block keeps text and image aligned with consistent gaps.
          </p>
        </div>
        <div>
          <h3>Practical Checklist</h3>
          <ul class="checklist">
            <li>Use whitespace: apply consistent margins and padding.</li>
            <li>Align content: headings, paragraphs, and media on the same grid.</li>
            <li>Keep styles consistent: same fonts, sizes, and line spacing.</li>
            <li>Limit visual noise: 2–3 fonts and 2–3 main colors.</li>
            <li>Use semantic HTML: <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;figure&gt;</code>.</li>
          </ul>

          <a class="btn" style="margin-top: var(--space-2);" href="#resources">
            View learning resources
          </a>
        </div>
      </div>
    </section>

    <!-- SECTION: Colors -->
    <section id="colors" class="card">
      <h2>2) Colors — Purposeful & Accessible</h2>
      <p>
        Ensure high contrast between text and background, keep a limited palette (primary, secondary, accent), and use colors with purpose.
        Test contrast with <a href="https://webaim.org/resources/contrastchecker/">WebAIM Contrast Checker</a>.
      </p>

      <div class="palettes" style="margin-top: var(--space-3);">
        <!-- Palette 1 -->
        <div class="palette">
          <h3>Calm &amp; Professional (blue/gray)</h3>
          <div class="swatches">
            <div class="swatch" style="background:#f4f6f8;"><code>#f4f6f8</code></div>
            <div class="swatch" style="background:#1e3a8a;"><code>#1e3a8a</code></div>
            <div class="swatch" style="background:#64748b;"><code>#64748b</code></div>
            <div class="swatch" style="background:#3b82f6;"><code>#3b82f6</code></div>
          </div>
        </div>

        <!-- Palette 2 -->
        <div class="palette">
          <h3>Energetic &amp; Modern (orange/teal)</h3>
          <div class="swatches">
            <div class="swatch" style="background:#ffffff;"><code>#ffffff</code></div>
            <div class="swatch" style="background:#ea580c;"><code>#ea580c</code></div>
            <div class="swatch" style="background:#0d9488;"><code>#0d9488</code></div>
            <div class="swatch" style="background:#fbbf24;"><code>#fbbf24</code></div>
          </div>
        </div>

        <!-- Palette 3 -->
        <div class="palette">
          <h3>Minimal &amp; Elegant (black/white + accent)</h3>
          <div class="swatches">
            <div class="swatch" style="background:#ffffff;"><code>#ffffff</code></div>
            <div class="swatch" style="background:#000000;"><code>#000000</code></div>
            <div class="swatch" style="background:#6b7280;"><code>#6b7280</code></div>
            <div class="swatch" style="background:#e11d48;"><code>#e11d48</code></div>
          </div>
        </div>
      </div>

      <p class="muted" style="margin-top: var(--space-3);">
        Tip: Use the primary for navigation and headings, secondary for supporting UI (cards, borders),
        and accent for buttons and links. Balance strong colors with neutral backgrounds.
      </p>
    </section>

    <!-- SECTION: Resources -->
    <section id="resources" class="card">
      <h2>3) Resources for Further Learning</h2>
      <ul>
        <li><a href="https://www.w3.org/standards/webdesign/">W3C — Web Design Principles</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">MDN — CSS Styling Basics</a></li>
        <li><a href="https://m3.material.io/foundations/layout/overview">Material Design — Layout</a></li>
        <li><a href="https://coolors.co/">Coolors — Palette Generator</a></li>
        <li><a href="https://www.smashingmagazine.com/category/design">Smashing Magazine — Design</a></li>
        <li><a href="https://webaim.org/resources/contrastchecker/">WebAIM — Contrast Checker</a></li>
      </ul>
    </section>
  </main>

  <footer>
    <p>© 2025 Good &amp; Basic Principles Demo • Built with semantic HTML, consistent spacing, and accessible colors.</p>
  </footer>
</body>
</html>
```