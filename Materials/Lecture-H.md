> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🌈 **Introduction to Tailwind CSS**

## 📜 1. History and Background

[Tailwind CSS](https://tailwindcss.com/) is a **utility-first CSS framework** created by **Adam Wathan**, **Jonathan Reinink**, **David Hemphill**, and **Steve Schoger**.
It was first released in **2017**, with the goal of giving developers **full control over styling** without forcing them into predefined UI components.

Traditional CSS frameworks like **Bootstrap** or **Foundation** offered ready-made buttons, cards, and layouts, but they often made websites look too similar.
Tailwind introduced a **new philosophy**: instead of providing UI components, it provides **low-level utility classes** (like `p-4`, `text-center`, `bg-blue-500`) that let developers **build any design directly in HTML**.

Tailwind grew rapidly because it offered:

* **Speed**: Style directly in HTML without switching between CSS files.
* **Flexibility**: No design lock-in; every project can look unique.
* **Performance**: Unused styles can be automatically removed using **PurgeCSS**, making the final CSS file tiny.
* **Customizability**: The `tailwind.config.js` file allows you to define your own colors, fonts, and responsive breakpoints.

Today, Tailwind is used by thousands of developers and companies — from startups to enterprises — and has become the **most popular CSS framework** on GitHub (⭐ more stars than Bootstrap!).

---

## 🧱 2. Philosophy: Utility-First Design

Tailwind’s **utility-first** approach means you style elements using **small, single-purpose classes** instead of writing long CSS rules.

Example:

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

Instead of writing custom CSS, you combine **utility classes** that describe how the element should look.
This gives immediate feedback in the browser and reduces context switching between HTML and CSS files.

---

## ⚙️ 3. Comparison with Other CSS Frameworks

| Feature                 | **Tailwind CSS**            | **Bootstrap**                            | **Bulma** | **Foundation**  |
| ----------------------- | --------------------------- | ---------------------------------------- | --------- | --------------- |
| **Philosophy**          | Utility-first               | Component-based                          | Semantic  | Component-based |
| **Customizability**     | Very high (via config file) | Moderate (theme variables)               | Moderate  | Moderate        |
| **Design freedom**      | 🎨 Any style possible       | 🧱 Predefined look                       | Balanced  | Predefined look |
| **Learning curve**      | Medium (new syntax)         | Easy (familiar components)               | Easy      | Medium          |
| **Default components**  | ❌ None (build your own)     | ✅ Many built-in (buttons, navbars, etc.) | ✅ Many    | ✅ Many          |
| **Performance**         | Very fast (purged build)    | Medium                                   | Medium    | Medium          |
| **Popularity (GitHub)** | ⭐ 80k+                      | ⭐ 160k+ (but older)                      | ⭐ 45k+    | ⭐ 30k+          |

## 💡 **Summary:**

* **Bootstrap** is great for quick prototypes with a consistent look.
* **Bulma** offers a modern, readable syntax.
* **Foundation** focuses on accessibility and responsive grids.
* **Tailwind** is ideal for **custom design systems**, rapid prototyping, and scaling projects without CSS bloat.

---

## 🪄 4. Advantages of Tailwind CSS

✅ **Custom design without writing CSS**  
✅ **Responsive and mobile-first** built-in   
✅ **Dark mode** and **theme switching** support  
✅ **Built-in pseudo-classes** (`hover:`, `focus:`, `active:`)  
✅ **Integration with frameworks** like React, Vue, Next.js, and Svelte  
✅ **Plugin ecosystem** (forms, typography, aspect-ratio, etc.)  
✅ **Fast build tools** like Tailwind CLI and PostCSS integration  

### 💡 4.1. Tailwind compared to plain HTML and CSS

Using **Tailwind CSS** instead of writing plain HTML and CSS by hand offers several clear advantages:

1. ⚡ **Faster development** – You don’t have to switch between HTML and CSS files. Styling happens directly in the markup using small, reusable utility classes like `bg-blue-500` or `text-center`.
2. 🧩 **Consistent design system** – Tailwind ensures spacing, colors, and typography stay consistent across the site because they come from one shared configuration file.
3. 🧱 **No CSS repetition** – Instead of creating new CSS rules for every component, you simply combine existing utilities. This reduces duplicated code and keeps stylesheets lightweight.
4. 🎨 **Full customization** – Unlike frameworks with fixed themes (e.g., Bootstrap), Tailwind doesn’t force a specific look. You can easily create a unique visual identity.
5. 📱 **Built-in responsiveness** – Tailwind includes mobile-first responsive classes (`sm:`, `md:`, `lg:`) that make adapting layouts for different screen sizes effortless.
6. 🧰 **Maintenance and scalability** – When projects grow, Tailwind scales smoothly without messy CSS overrides or “!important” conflicts.

In short:

> **Tailwind CSS lets you build custom, responsive, and maintainable designs faster — without fighting your own CSS.**

---

## ⚡ 5. Disadvantages and Criticism

🚫 **HTML clutter**: Many classes can make markup hard to read.  
🚫 **Learning curve**: Requires learning Tailwind’s class system.  
🚫 **Initial setup**: Needs a build process (PostCSS, Vite, or Webpack).  
🚫 **Non-semantic style**: Visual styles appear in HTML, not in CSS files.  

However, these are often outweighed by its productivity and flexibility benefits.

---

## 🚀 6. Typical Project Setup

Example project setup (using Node.js):

```bash
# 1. Create project
npm create vite@latest my-tailwind-app
cd my-tailwind-app

# 2. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Add to CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

# 4. Run development server
npm run dev
```

Your HTML can now use Tailwind utilities immediately 🎉

---

## 🎯 7. When to Use Tailwind CSS

Use Tailwind when:

* You want **unique, non-template** visual design.
* You build **component-based frontends** (React, Vue, Svelte).
* You want **rapid development** and responsive design.
* You plan to **reuse a consistent design system** across projects.

Avoid it if:

* You prefer **semantic CSS separation** or **ready-made components** (then use Bootstrap or Bulma).

---

## 🧩 8. Example: Simple Responsive Card

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
  <img class="w-full" src="https://placekitten.com/400/200" alt="Cute kitten">
  <div class="px-2 py-4">
    <h2 class="font-bold text-xl mb-2 text-gray-800">🐾 Adorable Kitten</h2>
    <p class="text-gray-600 text-base">Soft, fluffy, and looking for a loving home!</p>
  </div>
</div>
```

This entire design is created **without writing a single line of custom CSS**.

---

## 💡 **Summary:**

| Tailwind Strengths        | When to Use                 |
| ------------------------- | --------------------------- |
| Utility-first, flexible   | Building unique designs     |
| Responsive, mobile-first  | Modern web apps             |
| Integrates with React/Vue | Component-based development |
| Custom themes, plugins    | Scalable design systems     |

---

# 🌐 **Using Tailwind CSS with a CDN**

When you start learning Tailwind CSS, the easiest way to use it is by adding a **CDN link** directly into your HTML file — no installation or build tools needed.

---

## ⚙️ 1. What is a CDN?

**CDN (Content Delivery Network)** is a system of distributed servers that deliver content (like CSS or JavaScript files) quickly to users around the world.
Using a CDN means:

* You don’t have to **install** anything locally.
* Files are **cached globally**, so they load faster.
* Your page can start using Tailwind **instantly**.

---

## 🧩 2. How to Use Tailwind via CDN

Just add the following `<script>` tag in your HTML `<head>` section:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" >
  <meta name="viewport" content="width=device-width, initial-scale=1.0" >
  <title>Tailwind via CDN</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-center p-8">
  <h1 class="text-3xl font-bold text-blue-600">Hello Tailwind! 🌈</h1>
  <p class="mt-4 text-gray-700">This page uses Tailwind CSS loaded from a CDN.</p>
</body>
</html>
```

✅ **That’s it!**
Your page is now styled using Tailwind without any local setup.

---

## 🧠 3. Why Use CDN in the Beginning

* 🧱 **Perfect for learning and demos** – No need for Node.js or build tools.
* 🚀 **Instant setup** – Just one line of code and you’re ready to style.
* 💡 **Useful for prototypes** – Great for quickly testing layout ideas.
* 🧰 **Lightweight** – Works entirely in the browser.

---

## ⚠️ 4. Limitations

* ❌ **Not suitable for production** (the CSS file is large and not optimized).
* ❌ **Cannot customize** the default Tailwind config (`tailwind.config.js`).
* ❌ **No build-time optimization** (PurgeCSS, dark mode settings, etc.).

---

## 💡 **Summary:**

| Situation                             | Recommended Approach                   |
| ------------------------------------- | -------------------------------------- |
| Learning, small demo, prototype       | ✅ Use CDN                              |
| Full web app, custom design system    | ⚙️ Use Tailwind CLI or PostCSS         |
| Performance-optimized production site | 🚀 Use build setup with purge & config |

---

👉 **In short:**

> The CDN method is the easiest way to start using Tailwind CSS.

---

# 🌈 **Tailwind CSS — Class Categories and Common Utilities**

Tailwind CSS organizes its utility classes into **logical categories** that control layout, spacing, colors, typography, and more.
Each class has a **specific, single purpose** — you combine them to create full designs.

---

## 🧱 1. Layout & Display

These classes control the **structure** of the page — how elements are arranged or sized.

| Purpose  | Examples                                                         | Description                    |
| -------- | ---------------------------------------------------------------- | ------------------------------ |
| Display  | `block`, `inline-block`, `flex`, `grid`, `hidden`                | Sets element display type      |
| Flexbox  | `flex`, `flex-row`, `flex-col`, `justify-center`, `items-center` | Build flexible layouts         |
| Grid     | `grid`, `grid-cols-2`, `gap-4`                                   | Create grid-based layouts      |
| Position | `relative`, `absolute`, `fixed`, `top-0`, `left-0`               | Position elements              |
| Overflow | `overflow-hidden`, `overflow-scroll`                             | Handle content overflow        |
| Z-index  | `z-10`, `z-50`                                                   | Control element stacking order |

🧩 *Example:*

```html
<div class="flex justify-center items-center h-screen">
  <p class="text-xl">Centered text!</p>
</div>
```

---

## 📏 2. Spacing (Margin & Padding)

Tailwind uses a **scale system** (`0, 1, 2, 4, 8, 16...`) for consistent spacing.

| Type            | Examples                 | Meaning              |
| --------------- | ------------------------ | -------------------- |
| Margin          | `m-4`, `mt-2`, `mx-auto` | Adds outer space     |
| Padding         | `p-4`, `px-2`, `py-6`    | Adds inner space     |
| Negative margin | `-mt-2`                  | Moves element closer |

🧩 *Example:*

```html
<div class="p-6 m-4 bg-gray-100">Box with padding and margin</div>
```

---

## 🎨 3. Colors & Backgrounds

Tailwind includes an extensive **color palette** with shades from 50 to 900.

| Category         | Examples                                | Description          |
| ---------------- | --------------------------------------- | -------------------- |
| Text color       | `text-gray-700`, `text-blue-500`        | Font color           |
| Background color | `bg-red-100`, `bg-green-600`            | Element background   |
| Border color     | `border-gray-300`, `border-blue-500`    | Border tone          |
| Hover states     | `hover:bg-blue-700`, `hover:text-white` | Interactive feedback |

🧩 *Example:*

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
  Submit
</button>
```

---

## 🖋️ 4. Typography

Controls font size, weight, alignment, and spacing.

| Purpose        | Examples                                 |
| -------------- | ---------------------------------------- |
| Font size      | `text-sm`, `text-lg`, `text-2xl`         |
| Font weight    | `font-light`, `font-bold`, `font-black`  |
| Text alignment | `text-left`, `text-center`, `text-right` |
| Letter spacing | `tracking-tight`, `tracking-wide`        |
| Line height    | `leading-tight`, `leading-relaxed`       |
| Font family    | `font-sans`, `font-serif`, `font-mono`   |

🧩 *Example:*

```html
<h1 class="text-3xl font-bold text-center text-gray-800">Welcome!</h1>
```

---

## 🔲 5. Borders, Radius & Shadows

| Feature       | Examples                                | Description      |
| ------------- | --------------------------------------- | ---------------- |
| Border width  | `border`, `border-2`, `border-b`        | Add border sides |
| Border color  | `border-gray-400`                       | Color of border  |
| Border radius | `rounded`, `rounded-lg`, `rounded-full` | Corners          |
| Shadows       | `shadow`, `shadow-md`, `shadow-lg`      | Depth effect     |

🧩 *Example:*

```html
<div class="border border-gray-300 rounded-lg shadow-md p-4">Card</div>
```

---

## 📱 6. Responsiveness

Tailwind uses **breakpoint prefixes** to adapt styles for different screen sizes.

| Prefix | Screen size |
| ------ | ----------- |
| `sm:`  | ≥ 640px     |
| `md:`  | ≥ 768px     |
| `lg:`  | ≥ 1024px    |
| `xl:`  | ≥ 1280px    |
| `2xl:` | ≥ 1536px    |

🧩 *Example:*

```html
<div class="text-sm md:text-lg lg:text-xl">
  Responsive text size!
</div>
```

---

## 🌓 7. State Variants

Tailwind uses **pseudo-class prefixes** for interactive or conditional styling.

| State       | Example                           |
| ----------- | --------------------------------- |
| Hover       | `hover:bg-blue-600`               |
| Focus       | `focus:outline-none focus:ring-2` |
| Active      | `active:scale-95`                 |
| Dark mode   | `dark:bg-gray-800`                |
| Group hover | `group-hover:text-blue-500`       |

---

## 🔧 8. Other Useful Categories

| Category       | Examples                                    | Description      |
| -------------- | ------------------------------------------- | ---------------- |
| Width / Height | `w-full`, `w-1/2`, `h-screen`, `max-w-sm`   | Element size     |
| Opacity        | `opacity-50`, `opacity-100`                 | Transparency     |
| Cursor         | `cursor-pointer`, `cursor-not-allowed`      | Mouse cursor     |
| Transitions    | `transition`, `duration-300`, `ease-in-out` | Animations       |
| Transform      | `rotate-45`, `scale-110`, `translate-x-2`   | 2D/3D transforms |

---

## 🧠 9. Most Commonly Used Tailwind Classes

| Category       | Example Classes                                           |
| -------------- | --------------------------------------------------------- |
| Text & font    | `text-xl`, `font-bold`, `text-center`                     |
| Color          | `bg-blue-500`, `text-white`, `hover:bg-blue-700`          |
| Spacing        | `p-4`, `m-2`, `mt-4`, `mb-6`                              |
| Layout         | `flex`, `justify-center`, `items-center`, `grid`, `gap-4` |
| Borders        | `border`, `rounded`, `shadow`                             |
| Responsiveness | `sm:w-full`, `md:text-lg`                                 |

---

## 💡 **Summary:**

> Tailwind CSS groups its utilities by purpose — layout, spacing, color, typography, and more.
> The key idea is to **build custom designs quickly** by combining **small, descriptive classes**.

In practice, you’ll mostly use:

* **Layout:** `flex`, `grid`, `justify-center`, `items-center`
* **Spacing:** `p-*`, `m-*`
* **Color:** `bg-*`, `text-*`
* **Typography:** `text-*`, `font-*`
* **Responsive modifiers:** `sm:`, `md:`, `lg:`

---

# ⚙️ **Building the semantic Tailwind page →  step-by-step **

## 0) Project Setup

**Goal**: Start from a clean HTML file and load Tailwind via CDN.
**Add code** (`index.html`):

```html
<!DOCTYPE html>
<html lang="fi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Semantic Demo | Tailwind via CDN</title>
  <meta name="description" content="A minimal, semantic, and accessible HTML page using Tailwind CSS via CDN.">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800">
</body>
</html>
```

**Test**: Open `index.html` in the browser.
**Expected**: Blank page with light gray background (no errors in DevTools Console).

---

## 1) Global Accessibility: Skip Link

**Goal**: Enable keyboard users to skip straight to main content.
**Add code** inside `<body>` at the top:

```html
<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white border rounded px-3 py-2">
  Move to content
</a>
```

**Test**: Press `Tab` once on the page.
**Expected**: A small “Move to content” button appears top-left.

---

## 2) Header + Primary Navigation

**Goal**: Add semantic header with a nav list.
**Add code** below the link (tag `</a>`):

```html
<header class="border-b bg-white">
  <div class="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <img src="https://placehold.co/40x40" width="40" height="40" alt="Sivuston logo" class="rounded" >
      <a href="/" class="text-xl font-bold">Basics of Web Development</a>
    </div>

    <nav aria-label="Main menu">
      <ul class="flex gap-6">
        <li><a href="#" class="hover:underline" aria-current="page">Home</a></li>
        <li><a href="#topics" class="hover:underline">Topics</a></li>
        <li><a href="#about" class="hover:underline">About</a></li>
        <li><a href="#contact" class="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
```

**Test**:

* Refresh and verify the header renders with logo + links.
* Use `Tab` to navigate; focus should move across links in order.

**Expected**: Clean horizontal nav; hovering underlines links.

---

## 3) Main Landmark + Hero Section

**Goal**: Provide an `<main>` region and a strong page title.
**Add code** below the header (tag `</header>`):

```html
<main id="main" class="mx-auto max-w-5xl px-4 py-8">
  <section aria-labelledby="hero-title" class="mb-10">
    <h1 id="hero-title" class="text-3xl md:text-4xl font-extrabold tracking-tight">
      Learn Semantic HTML & Tailwind
    </h1>
    <p class="mt-3 max-w-prose">
      This page demonstrates a clean structure using semantic elements:
      <strong>header</strong>, <strong>nav</strong>, <strong>main</strong>, <strong>article</strong>, <strong>section</strong>, <strong>aside</strong>, and <strong>footer</strong>.
    </p>
  </section>
</main>
```

**Test**:

* Confirm the big heading is visible.
* Use the skip link (press `Tab` then `Enter` on “Move to content”): focus jumps to main.

**Expected**: Large title, paragraph under it, proper keyboard jump.

---

## 4) Content Grid: Article + Aside

**Goal**: Create a two-column layout (content + complementary info).
**Add code** inside `<main>` **after** the hero section (tag `</section>`):

```html
<div class="grid gap-8 md:grid-cols-[2fr_1fr]">
  <article aria-labelledby="article-title" class="bg-white border rounded-lg shadow-sm p-6">
    <header class="mb-4">
      <h2 id="article-title" class="text-2xl font-bold">Why Semantics Matter</h2>
      <p class="text-sm text-gray-600">Published <time datetime="2025-10-28">28 Oct 2025</time></p>
    </header>

    <p class="mb-4">
      Semantic elements provide meaning to both browsers and assistive technologies.
      They improve accessibility, SEO, and code maintainability.
    </p>

    <figure class="my-6">
      <img
        src="https://placehold.co/800x360"
        alt="Illustration of page regions: header, nav, main, aside, footer"
        class="w-full rounded"
        width="800" height="360" >
      <figcaption class="mt-2 text-sm text-gray-600">
        Figure: Landmark regions help users navigate quickly.
      </figcaption>
    </figure>

    <section id="topics" aria-labelledby="topics-title" class="mt-6">
      <h3 id="topics-title" class="text-xl font-semibold">Core Topics</h3>
      <ul class="list-disc pl-6 mt-3">
        <li>Landmark elements and document outline</li>
        <li>Accessible navigation and skip links</li>
        <li>Responsive design with utility classes</li>
      </ul>
    </section>

    <footer class="mt-6 pt-4 border-t">
      <p class="text-sm text-gray-600">Written by Course Staff</p>
    </footer>
  </article>

  <aside aria-labelledby="aside-title" class="bg-white border rounded-lg shadow-sm p-6">
    <h2 id="aside-title" class="text-xl font-semibold">Quick Facts</h2>
    <dl class="mt-4 space-y-2">
      <div class="flex gap-2">
        <dt class="min-w-28 text-gray-600">Approach</dt>
        <dd>Utility-first (Tailwind)</dd>
      </div>
      <div class="flex gap-2">
        <dt class="min-w-28 text-gray-600">Responsive</dt>
        <dd>Mobile-first breakpoints</dd>
      </div>
      <div class="flex gap-2">
        <dt class="min-w-28 text-gray-600">A11y</dt>
        <dd>Landmarks, labels, focus states</dd>
      </div>
    </dl>
  </aside>
</div>
```

**Test**:

* Resize the browser: single column on small screens, two columns on `md` and up.
* Check headings order: `h1` → `h2` → `h3`.

**Expected**: Responsive grid; article left, aside right (on wider screens).

---

## 5) Contact Form (Inside Aside)

**Goal**: Add a semantic, labeled, accessible form.
**Add code** **inside the `<aside>`** after the definition list  (tag `</dl>`):

```html
<section id="contact" aria-labelledby="contact-title" class="mt-8">
  <h3 id="contact-title" class="text-lg font-semibold">Contact us</h3>
  <form class="mt-4 space-y-4" action="#" method="post">
    <div>
      <label for="name" class="block text-sm font-medium">Name</label>
      <input id="name" name="name" type="text" required
             class="mt-1 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" >
    </div>
    <div>
      <label for="email" class="block text-sm font-medium">Email</label>
      <input id="email" name="email" type="email" required
             class="mt-1 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" >
    </div>
    <button type="submit"
            class="inline-flex items-center rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
      Send
    </button>
  </form>
</section>
```

**Test**:

* Click each label and verify focus moves to the correct input.
* Try submitting empty: browser should show native required-field validation.
* Use `Tab` to ensure logical focus order.

**Expected**: Clean form, visible focus ring, validation works.

---

## 6) Footer + Progressive Enhancement

**Goal**: Add semantic footer and auto year.
**Add code** below `</main>`:

```html
<footer class="mt-12 border-t bg-white">
  <div class="mx-auto max-w-5xl px-4 py-6">
    <address class="not-italic text-sm text-gray-600">
      Basics of Web Development · Centria UAS · Kokkola, Finland
    </address>
    <p class="text-sm text-gray-600 mt-2">
      © <span id="year"></span> Course Materials. All rights reserved.
    </p>
  </div>
</footer>

<script>
  // Non-critical enhancement
  document.getElementById('year').textContent = new Date().getFullYear();
</script>
```

**Test**:

* Refresh and confirm the year matches the current year.
* Verify `<address>` renders normally (not italic due to utility class).

**Expected**: Polished footer with current year.

---

## 7) Quick Quality Checks

**Goal**: Validate semantics, a11y, and responsiveness.

**Add nothing** — perform checks:

**1. Keyboard Navigation**

* `Tab` from top: Skip link → header links (in order) → main content → article → aside → form → footer.
* **Expected**: No keyboard traps; visible focus styles on interactive elements.

**2. Image Alt & Figure**

* Right-click → Inspect the image; confirm it has `alt` text and sits inside `figure/figcaption`.
* **Expected**: Screen readers can announce it meaningfully.

**3. Responsive**

* Open DevTools → Toggle device toolbar → test iPhone/Pixel widths.
* **Expected**: Stacks to one column on small screens; two columns from `md`.

**4. Heading Outline**

* Check headings: one `h1`, then `h2` (article/aside titles), then `h3` (section headings).
* **Expected**: Logical, nested structure.

**5. Basic Performance** (optional)

* Run Lighthouse (Chrome DevTools → Lighthouse → Accessibility + Best Practices).
* **Expected**: High a11y score (typically 95–100 for this structure).

---

## 8) What “Should Have Happened” After Each Step

* **Step 0**: Tailwind available, gray background visible.
* **Step 1**: Skip link appears when tabbing.
* **Step 2**: Header with logo + horizontal nav; hover underline; keyboard focus works.
* **Step 3**: Large hero title and paragraph; skip link jumps here.
* **Step 4**: Responsive two-column layout; semantic `article`/`aside`; image with caption.
* **Step 5**: Accessible form with labels, required validation, visible focus rings.
* **Step 6**: Footer with address and current year set via JS.
* **Step 7**: Keyboard navigation, semantics, and responsiveness verified.

---

### Next steps (optional)

* Extract repeated container classes into a small **layout component** (if/when you move to a build setup).
* Add **dark mode** using `class="dark"` on `<html>` and `dark:` utilities.
* Replace placeholder images and texts with course content.


# 🌙 **Dark mode and Tailwind**

---

## 🌗 1. How Dark Mode Works in Tailwind

Tailwind has two main dark mode strategies:

| Mode              | Behavior                                                                |
| ----------------- | ----------------------------------------------------------------------- |
| `media` (default) | Follows user’s OS setting (light/dark).                                 |
| `class`           | Controlled manually by adding the class `dark` to `<html>` or `<body>`. |

Since we’re using the **CDN version**, the easiest approach is the **class-based** method — you control dark mode manually.

---

## ⚙️ 2. Enabling Dark Mode via CDN

When using Tailwind via CDN, you can configure dark mode in a short inline script after the `<script src="https://cdn.tailwindcss.com"></script>` line:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>tailwind.config = { darkMode: 'class' };</script>
```

This tells Tailwind to activate dark mode when a `dark` class is present on the root element.

---

## 💡 3. Example HTML: Toggle Between Light and Dark Mode

Here’s a minimal demo you can test right away 👇

```html
<!DOCTYPE html>
<html lang="fi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tailwind Dark Mode — Fixed Toggle</title>

  <!-- 1) Early boot: decide theme BEFORE Tailwind loads -->
  <script>
    (function () {
      const KEY = 'color-scheme';
      const saved = localStorage.getItem(KEY);                 // 'dark' | 'light' | null
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const useDark = saved ? saved === 'dark' : prefersDark;  // default to OS if not saved
      document.documentElement.classList.toggle('dark', useDark);
      // optional: expose helper for debugging
      window.__theme = { KEY, get: () => localStorage.getItem(KEY) };
    })();
  </script>

  <!-- 2) Load CDN, then tell Tailwind to use class-based dark mode -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>tailwind.config = { darkMode: 'class' };</script>
</head>
<body class="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">

  <main class="p-8 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-colors duration-300">
    <h1 class="text-2xl font-bold mb-4">Dark Mode Toggle (Works ✅)</h1>
    <p class="mb-6">Click the button to switch between light and dark themes.</p>

    <button id="toggle"
            type="button"
            class="rounded border px-4 py-2 bg-gray-50 border-gray-300 hover:bg-gray-100
                   dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600">
      Toggle theme
    </button>
  </main>

  <!-- 3) Toggle logic: flip class on <html> + persist -->
  <script>
    (function () {
      const KEY = 'color-scheme';
      const root = document.documentElement;
      const btn = document.getElementById('toggle');

      function setTheme(isDark) {
        root.classList.toggle('dark', isDark);
        localStorage.setItem(KEY, isDark ? 'dark' : 'light');
      }

      btn.addEventListener('click', () => {
        const isDark = root.classList.contains('dark');
        setTheme(!isDark);
      });
    })();
  </script>
</body>
</html>
```

---

## 🧪 4. How to Test

1. Open the file in your browser.
2. Click the **“Toggle Dark Mode”** button.
3. The background, text, and card colors switch smoothly between light 🌞 and dark 🌙 themes.

---

## 🎨 5. Key Concepts Shown

| Feature                          | Example                         | Effect                                      |
| -------------------------------- | ------------------------------- | ------------------------------------------- |
| `dark:bg-gray-900`               | on `<body>`                     | Changes background when dark mode is active |
| `dark:text-gray-100`             | on text                         | Switches font color                         |
| `dark:bg-gray-800`               | on main card                    | Darkens container                           |
| `transition-colors duration-500` | on card                         | Smooth fade animation                       |
| JavaScript toggle                | `html.classList.toggle('dark')` | Manual control                              |

---

## 💡 **Summary:**

* Tailwind dark mode is **built-in** — you only define how it’s triggered (`media` or `class`).
* You can style both themes **in the same element** with `dark:` prefix.
* Ideal for modern sites and apps where users expect theme switching.

---

# 🚀 **JavaScript validation with custom error messages**

Validation uses the browser’s Constraint Validation API (`checkValidity`, `setCustomValidity`, `reportValidity`) plus **inline error text** with `aria-live` for accessibility.

---

## 🔧 HTML (replace your Contact section with this)

```html
<section id="contact" aria-labelledby="contact-title" class="mt-8">
  <h3 id="contact-title" class="text-lg font-semibold">Contact us</h3>

  <!-- Add novalidate to suppress default browser popups -->
  <form id="contactForm" class="mt-4 space-y-4" action="#" method="post" novalidate>
    <div>
      <label for="name" class="block text-sm font-medium">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        autocomplete="name"
        required
        minlength="2"
        pattern="^[A-Za-zÀ-ÖØ-öø-ÿ' \-]{2,}$"
        aria-describedby="nameError"
        data-error-target="nameError"
        class="mt-1 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <!-- Inline error region (initially hidden) -->
      <p id="nameError" class="mt-1 text-sm text-red-600 hidden" aria-live="polite"></p>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        required
        aria-describedby="emailError"
        data-error-target="emailError"
        class="mt-1 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <p id="emailError" class="mt-1 text-sm text-red-600 hidden" aria-live="polite"></p>
    </div>

    <button
      type="submit"
      class="inline-flex items-center rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
    >
      Send
    </button>

    <!-- Optional success message area -->
    <p id="formSuccess" class="mt-3 text-sm text-green-700 hidden" aria-live="polite"></p>
  </form>
</section>
```

---

## 🧠 JS (add near the end of the page, before `</body>`)

```html
<script>
  (function () {
    const form = document.getElementById('contactForm');
    const fields = ['name', 'email'].map(id => document.getElementById(id));

    // Utility to show/hide custom error text + style field
    function setError(input, message = '') {
      const errorId = input.getAttribute('data-error-target');
      const errorEl = errorId ? document.getElementById(errorId) : null;

      // Set browser's internal message (used by reportValidity)
      input.setCustomValidity(message);

      // Toggle inline error
      if (errorEl) {
        if (message) {
          errorEl.textContent = message;
          errorEl.classList.remove('hidden');
          // Add red ring/border via Tailwind utilities
          input.classList.add('ring-2', 'ring-red-500', 'border-red-500');
        } else {
          errorEl.textContent = '';
          errorEl.classList.add('hidden');
          input.classList.remove('ring-2', 'ring-red-500', 'border-red-500');
        }
      }
    }

    // Field-specific validators
    function validateName() {
      const input = document.getElementById('name');
      const value = input.value.trim();

      if (!value) return setError(input, 'Please enter your name.');
      if (value.length < 2) return setError(input, 'Name must be at least 2 characters.');
      // Pattern matches letters/spaces/hyphens/apostrophes; tweak to your locale as needed
      const re = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/;
      if (!re.test(value)) return setError(input, 'Only letters, spaces, hyphens, and apostrophes are allowed.');

      return setError(input, ''); // clear
    }

    function validateEmail() {
      const input = document.getElementById('email');
      const value = input.value.trim();
      setError(input, '');

      if (!value) return setError(input, 'Please enter your email address.');
      // type="email" already checks format; this gives a friendlier message
      if (!input.checkValidity()) return setError(input, 'Please provide a valid email, e.g., name@example.com.');

      return setError(input, '');
    }

    // Wire up live validation
    document.getElementById('name').addEventListener('input', validateName);
    document.getElementById('name').addEventListener('blur', validateName);

    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('email').addEventListener('blur', validateEmail);

    // On submit: validate all, focus first invalid, block submission if any invalid
    form.addEventListener('submit', (e) => {
      const validators = [validateName, validateEmail];
      validators.forEach(fn => fn());

      // If any field is invalid, prevent submission and show built-in bubble near the field
      const firstInvalid = fields.find(f => !f.checkValidity());
      if (firstInvalid) {
        e.preventDefault();
        firstInvalid.reportValidity();    // shows native tooltip near the field
        firstInvalid.focus({ preventScroll: false });
        return;
      }

      // Simulate success (since action="#" and we’re not posting anywhere)
      e.preventDefault();
      const ok = document.getElementById('formSuccess');
      ok.textContent = 'Thanks! Your message was validated and would be submitted now.';
      ok.classList.remove('hidden');
      form.reset();
      // Optional: remove error styles after reset
      fields.forEach(f => setError(f, ''));
    });
  })();
</script>
```

---

## 💬 What we get

* **Custom messages** (friendly and specific) shown inline + via `reportValidity()`.
* **Accessible feedback**: error `<p>` elements use `aria-live="polite"`.
* **Clear visuals**: invalid fields get a red ring/border using Tailwind utilities.
* **Progressive enhancement**: if JS fails, basic required/type checks still work when you remove `novalidate`.