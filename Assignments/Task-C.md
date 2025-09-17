# Task C: Multimedia and Copyright Awareness

## 🎯 Objectives

* Learn how to embed multimedia content in HTML
* Understand Creative Commons licensing and legal use of images, audio, and video
* Practice structuring content with semantic HTML
* Publish your project as an Azure Static Web App from a dedicated folder

---

## 🧰 Required Tools

* [Visual Studio Code](https://code.visualstudio.com/)
* [GitHub](https://github.com/)
* [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/overview)

---

## 🧪 Multimedia Showcase Page

### 🔧 Instructions

> [!TIP]
> Always aim to keep your site visually clear and well-structured. Proper spacing, alignment, and consistent styles help make your content more readable and professional.  
> **[Check this out!](principles.md)**

1. Inside your course repository, **create a new folder named `task-c`**.

2. In that folder, create a file named `index.html` and another named `style.css`.

3. In your `index.html`, add the following content:

   * A `<h1>` heading titled "My Multimedia Showcase"
   * A **Creative Commons licensed image** embedded using `<img>` with `alt` text
   * An embedded **audio clip** (e.g., MP3 or OGG) using `<audio controls>`
   * An embedded **video clip** (e.g., MP4 or web video) using `<video controls>`
   * A paragraph explaining where the media was sourced and its license

4. Style the content with your `style.css` file:

   * Limit the image width to `100%` with `max-width: 500px`
   * Center the media elements on the page
   * Add spacing between sections

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

7. **Push your code to GitHub**, making sure all files are inside `task-c`.

8. **Ensure the `task-c` folder is correctly included in your existing Azure Static Web App**. Your Static Web App should serve all weekly tasks from a shared root folder. Do not delete previous tasks—each task should be placed in its own subfolder (e.g., `task-a`, `task-b`, `task-c`, etc.), and all should be accessible from the same deployed application.

9. **Validate your HTML code** using the [W3C HTML Validator](https://validator.w3.org/). Fix any major issues and ensure your code follows good structure.

10. **Submit the public URL** to the corresponding Task C assignment in **itslearning**.

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

> 💡 If you’re unsure, compare your page to the **[principles.md](principles.md)** file and run a quick check with a contrast tool before publishing.

---

## ✅ Automatic Validation Criteria

Your published site must:

* Be accessible at the submitted URL (HTTP 200 OK)
* The page includes:

  * `<h1>` heading
  * `<img>` with `alt` and CC content
  * `<audio>` and `<video>` elements with `controls`
  * A paragraph describing the source and licensing
* An external `style.css` is linked and it applies (at least)

  * the image width to `100%` with `max-width: 500px`
  * center the media elements on the page
  * spacing between sections
* Personalized comments in both files
* Folder published via Azure Static Web Apps
* Link submitted through itslearning on time

> 🧭 **Teacher’s prerogative:** Even if the automatic checks pass, a submission may be **rejected** for a **non-professional appearance** per the *Professionalism Clause* above.