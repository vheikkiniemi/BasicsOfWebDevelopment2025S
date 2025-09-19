# Task D: Practicing CSS Selectors

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

## 🎯 Objectives

* Understand and apply different types of CSS selectors
* Practice targeting elements with element, class, id, group, descendant, and attribute selectors
* Strengthen CSS structure and maintainability through clean, organized rules

---

## 🧰 Required Tools

* [Visual Studio Code](https://code.visualstudio.com/)
* [GitHub](https://github.com/)
* [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/overview)

---

## 🧪 CSS Selector Playground

### 🔧 Instructions

> [!TIP]
> Always aim to keep your site visually clear and well-structured. Proper spacing, alignment, and consistent styles help make your content more readable and professional.
> **[Check this out!](../Materials/principles.md)**

1. Inside your course repository, **create a new folder named `task-d`**.

2. In that folder, create `index.html` and `style.css`.

3. In your `index.html`, add multiple HTML elements so you can test different CSS selectors. Include:

   * At least one element with a unique `id`, for example:

     ```html
     <p id="special-message">This paragraph uses an ID selector.</p>
     ```
   * At least 2 different headings (e.g., `<h1>`, `<h2>`, `<h3>`)
   * At least 2 `<div>` elements with different `class` attributes
   * A list (`<ul>` or `<ol>`) with at least 3 list items
   * At least one `<a>` tag with an `href` attribute
   * A short section containing elements with attributes, such as:

     ```html
     <a href="https://example.com" target="_blank">Visit Example</a>
     <img src="image.jpg" alt="Example image">
     ```

     These will allow you to test attribute selectors like `a[target]` or `img[alt]`

4. In `style.css`, use the following types of selectors to style your content:

   * **Element selectors** (e.g., `h1`, `p`)
   * **Class selectors** (e.g., `.box`, `.highlight`)
   * **ID selector** (e.g., `#special-message`)
   * **Group selectors** (e.g., `h1, h2, h3`)
   * **Descendant selectors** (e.g., `section ul li`)
   * **Attribute selectors** (e.g., `a[target="_blank"]`, `img[alt]`)


5. **Link the CSS file** in the HTML `<head>` section:

   ```html
   <link rel="stylesheet" href="style.css">
   ```

6. Add **a personalized comment** at the top of both files:

   `index.html`:

   ```html
   <!--
   Author: Ville Heikkiniemi (CHANGE THIS)
   Date: 2025-09-01 (CHANGE THIS)
   -->
   ```

   `style.css`:

   ```css
   /*
   Author: Ville Heikkiniemi (CHANGE THIS)
   Date: 2025-09-01 (CHANGE THIS)
   */
   ```

7. **Push your code to GitHub**, ensuring all files are inside the `task-d` folder.

7. **Ensure the `task-d` folder is correctly included in your existing Azure Static Web App**. Your Static Web App should serve all weekly tasks from a shared root folder. Do not delete previous tasks—each task should be placed in its own subfolder.

8. **Validate your HTML code** using the [W3C HTML Validator](https://validator.w3.org/). Fix any major issues and ensure your code follows good structure.

9. **Submit the public URL** to the corresponding Task D assignment in **itslearning**.

> [!IMPORTANT] 
> The deadline is specified in itslearning and the submission will close automatically when the deadline is reached. No late submissions will be accepted.

---

## 🌱 Professionalism Clause (expectations rise as we go)

> **Always aim to keep your site visually clear and well-structured. Proper spacing, alignment, and consistent styles help make your content more readable and professional.**

As the course progresses, **the bar for “professional look & feel” gets higher**. With a friendly wink 😉 the teacher reserves the right to **reject** a submission if the page looks **non-professional**.

**Non-professional red flags include (but aren’t limited to):**

* Chaotic layout: elements misaligned, random centering, uneven spacing, no visual rhythm
* Inconsistent styles: too many fonts/sizes/colors, inconsistent headings or link styles
* Poor color use: low contrast text, hard-to-read foreground/background combos
* Visual noise: unnecessary borders/shadows/animations, flashing or clashing colors
* Sloppy typography: very long line lengths, cramped line height, tiny or giant fonts
* Accessibility neglect: missing alt texts, illegible contrast, focus states ignored
* “Placeholder-feel”: lorem ipsum left in, broken image links, default boilerplate with no care

**What “professional” looks like here:**

* Clear grid/alignment, consistent spacing (margins/padding), predictable structure
* 1–2 fonts, 2–3 colors used purposefully (primary/secondary/accent)
* Good contrast (WCAG-aware), semantic HTML, readable line length (45–80 chars)
* Thoughtful hierarchy (H1 → H2 → body), balanced whitespace, tidy components

> 💡 If you’re unsure, compare your page to the **[principles.md](../Materials/principles.md)** file and run a quick check with a contrast tool before publishing.

---

## ✅ Automatic Validation Criteria

* Be accessible at the submitted URL (HTTP 200 OK)
* The page includes:

  * At least one `<h1>` element
  * At least one `<p>` with 3 sentences
  * A list (`<ul>` or `<ol>`) with at least 3 items
  * One `<a>` link to an external site using the `target` attribute
  * An `<img>` with an `alt` attribute
* An external `style.css` is linked and it applies:

  * Element selector styling (e.g., `h1`, `p`)
  * Class selector styling (e.g., `.box`, `.highlight`)
  * ID selector styling (e.g., `#special-message`)
  * Group selector styling (e.g., `h1, h2, h3`)
  * Descendant selector styling (e.g., `section ul li`)
  * Attribute selector styling (e.g., `a[target]`, `img[alt]`)
* Personalized comments are present in both files
* Folder published via Azure Static Web Apps
* Link submitted through itslearning on time

> 🧭 **Teacher’s prerogative:** Even if the automatic checks pass, a submission may be **rejected** for a **non-professional appearance** per the *Professionalism Clause* above.