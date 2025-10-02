> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 📏 CSS Length Units — History, Purpose & Practical Use

## 🕰️ A Short History

* **CSS1 (1996)**: Early web used **px** and print-era units (**pt**, **cm**, **in**) on low-DPI screens—“pixel-perfect” reigned.
* **CSS2/2.1**: Relative sizing matured: **%** for fluid boxes, **em** for typography and spacing.
* **CSS3 → today**: Accessibility + multi-device design made **rem** and **viewport units** (**vw**, **vh**, **vmin**, **vmax**) mainstream. Fluid type with `clamp()` and newer dynamic viewport units (**dvh/svh/lvh**) address mobile browser chrome.
  💡 **Trend:** from fixed layouts → responsive, accessible, user-scalable UIs.

---

## 🎯 Purpose & Goals

* **Device independence**: Work across phones, desktops, TVs, print.
* **Accessibility**: Respect user zoom and OS text size. ♿
* **Consistency**: Predictable rhythm for type & spacing.
* **Maintainability**: Fewer, well-chosen units → cleaner CSS.
* **Responsiveness**: Adapt to viewport/container changes automatically.

---

## 🧰 Unit Families (with pros/cons)

### A) Absolute units

* **px** — CSS pixel (logical, not hardware).  
  ✅ Hairline borders, crisp 1px rules, icon edges  
  ❌ Base body text (hurts scaling)
* **pt, in, cm, mm, pc** — physical/print units.  
  ✅ Print stylesheets  
  ⚠️ Unreliable physical mapping on screens

### B) Font-relative units

* **em** — Relative to the **element’s computed font size**.  
  ✅ Component-local spacing that follows its text  
  ⚠️ Nests multiply (can “balloon” unexpectedly)
* **rem** — Relative to the **root (`html`) font size**.  
  ✅ Global typography & spacing scale, great for accessibility  
* **ch** — Width of “0” glyph.  
  ✅ Text measure (e.g., `max-width: 65ch`)  
  ⚠️ Varies by font; test your stack
* **ex** — x-height.  
  🤏 Rarely used due to font variation

### C) Viewport / Container-relative units

* **%** — Relative to the **containing block**.  
  ✅ Fluid widths, flexible layouts  
  ⚠️ Vertical `%` margins/padding are based on **container width**, not height
* **vw/vh/vmin/vmax** — Viewport-relative.  
  ✅ Full-bleed sections, heroes, fluid type (`clamp()` with `vw`)  
  ⚠️ Mobile address bars change `vh`; see below
* **dvh/svh/lvh** — Dynamic/small/large viewport height.  
  ✅ More accurate heights on mobile UI chrome changes

---

## 🔬 Choosing the Right Unit — Quick Comparison

| 🧩 Goal                 | ✅ Recommended         | 🤔 Why                          | 🧪 Example                                  |
| ----------------------- | --------------------- | ------------------------------- | ------------------------------------------- |
| Base font size          | `rem`                 | Respects user prefs; consistent | `html{font-size:100%} body{font-size:1rem}` |
| Global spacing rhythm   | `rem`                 | Cohesive, scalable rhythm       | `.section{padding:2rem}`                    |
| Component-local spacing | `em`                  | Follows component text size     | `.badge{padding:.25em .75em}`               |
| Borders / hairlines     | `px`                  | Crisp edges                     | `.btn{border:1px solid #ddd}`               |
| Fluid columns           | `%`                   | Scales with parent              | `.col{width:33.333%}`                       |
| Readable line length    | `ch`                  | Character-based measure         | `.article{max-width:65ch}`                  |
| Heroes / full viewport  | `vh` → `dvh`          | Better on mobile                | `.hero{min-height:100vh;min-height:100dvh}` |
| Fluid typography        | `clamp(rem, vw, rem)` | Smooth, bounded scaling         | `h1{font-size:clamp(1.5rem,2.8vw,2.4rem)}`  |

---

## ⚠️ Common Mistakes (and Fixes)

1. **Using `px` for body text**  
   ❌ Ignores user scaling → poor accessibility  
   ✅ Set base with `rem`:

   ```css
   html{font-size:100%} body{font-size:1rem; line-height:1.6}
   ```
2. **Runaway sizes from nested `em`**  
   ❌ `em` compounds at each nesting level  
   ✅ Use `rem` for global rhythm; reserve `em` for local tweaks
3. **`vh` causing mobile clipping**  
   ❌ Address bar changes viewport height  
   ✅ Fallback to `vh`, prefer `dvh` where supported:

   ```css
   .hero{min-height:100vh; min-height:100dvh}
   ```
4. **Expecting vertical `%` to use height**  
   ❌ `%` vertical padding/margin is based on **width**  
   ✅ Use `rem` for vertical spacing for predictability
5. **Unit soup** (too many units without a scale)  
   ❌ Inconsistent spacing, hard to maintain  
   ✅ Define tokens:

   ```css
   :root{
     --space-1:.5rem;
     --space-2:1rem;
     --radius-1:4px;
     --radius-2:8px;
   }
   ```
6. **Print units on screens**  
   ❌ `cm`/`in`/`pt` aren’t physically accurate on displays  
   ✅ Reserve for `@media print`

---

## 🧪 Practical Snippets to Copy

**A) Accessible base + fluid headings**

```css
/* 1rem = browser default (often 16px); honors user settings */
html{font-size:100%}
body{font-size:1rem; line-height:1.6}

/* Fluid but bounded headings */
h1{font-size:clamp(1.5rem,2.8vw,2.4rem)}
h2{font-size:clamp(1.25rem,2vw,1.8rem)}
```

**B) Component spacing that scales sensibly**

```css
.card{
  padding:1rem;                 /* rem for global rhythm */
  border:1px solid #e5e7eb;     /* px hairline */
  border-radius:8px;            /* px corners */
}
.badge{
  font-size:.875rem;
  padding:.25em .75em;          /* em tied to badge text */
}
```

**C) Comfortable reading width**

```css
.article{
  max-width:65ch;               /* ~65 characters/line */
  margin-inline:auto;
  padding:1rem;
}
```

**D) Safer viewport height on mobile**

```css
.hero{
  min-height:100vh;             /* fallback */
  min-height:100dvh;            /* dynamic viewport height */
  display:grid; place-items:center;
}
```

---

## ✅ Key Takeaways

* Use **`rem`** for base typography + most spacing (accessible, consistent).
* Use **`em`** when a component’s spacing should follow **its own** text size.
* Use **`px`** for borders/hairlines and sharp edges.
* Use **`%`**, **`vw/vh`** (or **`dvh/svh`**) for fluid layouts and hero sections.
* Keep a small set of **design tokens** for spacing and radii—your CSS stays clean and predictable. ✨

---

# 📊 HTML Tables — History, Purpose, Essentials & Pitfalls

## 🕰️ A short history (why tables exist)

* **Early web (1990s):** Tables were used for **page layout** (before CSS layouts existed). This made pages heavy and inaccessible.
* **Modern web:** Tables are strictly for **data**—structured information that’s naturally **tabular** (rows/columns). Layout is done with CSS (Flexbox/Grid).
* **Accessibility era:** Proper table semantics (headers, scope, caption) enable **screen readers** to announce relationships between header and data cells.

---

## 🎯 Purpose (when to use a table)

Use a table when:

* Data is inherently **grid-like** (e.g., schedules, pricing matrices, comparison charts).
* You need **row/column headers** and users will benefit from scanning and sorting.
* You want assistive tech to read: *“In ‘Wed’, for ‘Data Structures’, the value is ‘✅’.”*

Avoid a table when:

* You’re making a **page layout** or a **form**. Use CSS layout & form elements instead.

---

## 🧩 Key elements & concepts

* **`<table>`**: The container for tabular data.
* **`<caption>`**: One-sentence title for the table (improves accessibility & comprehension).
* **`<thead>`, `<tbody>`, `<tfoot>`**: Logical grouping of header, body, and footer rows.

  * `tfoot` can appear **before** `tbody` in markup (historical rendering behavior), but commonly placed **after** for readability.
* **`<tr>`**: Table row.
* **`<th>`**: **Header cell** (use for column or row headers).

  * `scope="col" | "row" | "colgroup" | "rowgroup"` helps AT map headers → cells.
* **`<td>`**: **Data cell**.
* **`<colgroup>` & `<col>`**: Define column-level styling/widths (e.g., “make col 1 wider”).
* **Associations for complex tables**:

  * Prefer `scope` on `<th>`.
  * For very complex headers, use `id` on header cells and `headers="id1 id2"` on `<td>`.

---

## ✅ A solid, accessible starter

```html
<table aria-describedby="schedule-desc">
  <caption id="schedule-desc">Weekly course attendance</caption>
  <thead>
    <tr>
      <th scope="col">Course</th>
      <th scope="col">Mon</th>
      <th scope="col">Tue</th>
      <th scope="col">Wed</th>
      <th scope="col">Thu</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Web Development Basics</th>
      <td>✅</td><td>❌</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <th scope="row">Data Structures</th>
      <td>❌</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
  </tbody>
</table>
```

**Why this is good:**

* `<caption>` explains the table quickly.
* Column headers (`scope="col"`) + row headers (`scope="row"`) create clear relationships.
* No layout misuse—purely data.

---

## 🛠️ Styling patterns that work

```css
.table-wrap { overflow-x: auto; }         /* responsive scroll on small screens */
table { width: 100%; border-collapse: collapse; }
caption { text-align: left; margin: .5rem 0; color: #52607a; }

th, td { padding: .6rem 1rem; border-bottom: 1px solid #d0d7e2; }
thead th { background: #273e73; color: #fff; position: sticky; top: 0; } /* sticky header */

tbody tr:nth-child(even) { background: #eef3ff; } /* zebra striping */

td.num { text-align: right; font-variant-numeric: tabular-nums; } /* align numbers */
```

**Tips**

* Wrap with a **scroll container** (`overflow-x: auto`) instead of reflowing the table into cards (keeps semantics intact).
* For long tables, **sticky headers** improve readability.
* Use `tabular-nums` to align digits neatly in numeric columns.

---

## 🧱 Wider/controlled columns (`<colgroup>`)

```html
<table>
  <colgroup>
    <col style="width:40%">    <!-- wider first column -->
    <col style="width:15%">
    <col style="width:15%">
    <col style="width:15%">
    <col style="width:15%">
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Course</th>
      <th scope="col">Mon</th>
      <th scope="col">Tue</th>
      <th scope="col">Wed</th>
      <th scope="col">Thu</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Algorithms</th>
      <td class="num">24</td><td class="num">12</td><td class="num">8</td><td class="num">16</td>
    </tr>
  </tbody>
</table>
```

**Why use it:** consistent column sizing/styling in one place.

---

## 🧠 Designing a “good” table

* **Start with the question**: What should the reader learn at a glance?

  * Order columns/rows by importance, not by data availability.
* **Label clearly**: Short, unambiguous headers. Use **units** in header labels (e.g., “Cost (EUR)”).
* **Keep it scannable**: Zebra striping, sticky header, adequate padding, numeric alignment.
* **Reduce noise**: Minimal borders; rely on whitespace and alignment.
* **Add context**: A concise `<caption>`; use a nearby paragraph for extra notes if needed.
* **Responsiveness**: Prefer **horizontal scroll** on small screens. If you truly must transform, ensure **screen-reader experience** remains correct (and test it).
* **Sorting/filtering** (optional): If you add JS, use `aria-sort` on headers and focus styles for keyboard users.

---

## ⚠️ Biggest mistakes to avoid

1. **Using tables for layout**

   * Breaks semantics and accessibility. Use CSS Grid/Flexbox instead.

2. **Missing headers**

   * Data without `<th>` or `scope` is hard for screen readers. Always provide proper headers.

3. **Overusing `rowspan`/`colspan`**

   * Complex spans can confuse AT and humans. Prefer simpler structures and calculate totals outside the grid when possible.

4. **No caption or context**

   * Users (and screen readers) need a **one-line summary**. Add `<caption>`.

5. **Forcing “card” layouts by breaking semantics**

   * Setting table elements to `display:block` for mobile can destroy header–cell relationships. Use scroll containers first.

6. **Poor numeric alignment**

   * Centered numbers are hard to compare. Right-align numeric columns and use `tabular-nums`.

7. **Tiny touch targets & cramped spacing**

   * Especially on mobile—add padding and spacing for comfort and clarity.

8. **Low contrast / color-only cues**

   * Ensure sufficient contrast; don’t rely on color alone to indicate meaning (e.g., ✅/❌ should also be understandable via header text).

---

## ✨ Quick checklist

* Has **`<caption>`** with a clear title.
* Uses **`<thead>/<tbody>`**, **`<th>`** with proper **`scope`**.
* Columns sized sensibly (consider **`<colgroup>`**).
* Readable spacing, zebra striping, sticky header where helpful.
* Numeric columns **right-aligned** and `tabular-nums`.
* **Responsive** via horizontal scroll container.
* Tested with **keyboard** and a **screen reader** for header announcements.