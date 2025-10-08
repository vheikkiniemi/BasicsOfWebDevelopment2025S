> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🌐 Introduction to JavaScript

## 🧠 What is JavaScript?

JavaScript (often abbreviated as JS) is a high-level, interpreted programming language primarily used to make web pages interactive. While HTML structures the page and CSS defines its style, JavaScript adds behavior and dynamic features.

Today, JavaScript is one of the most widely used languages in the world, not only in web browsers but also on servers, mobile apps, and even IoT devices.

---

## 🕰️ A Short History

* **1995**: Created by **Brendan Eich** at Netscape in just 10 days. Initially called *Mocha*, then *LiveScript*, and finally *JavaScript* (to benefit from Java’s popularity at the time).
* **Late 1990s**: Browser wars (Netscape vs. Internet Explorer) caused fragmentation.
* **1997**: Standardized as **ECMAScript (ES)** to ensure compatibility across browsers.
* **2009**: **Node.js** introduced – allowing JavaScript to run on servers.
* **2015 (ES6/ES2015)**: Major update with modern features like classes, arrow functions, `let`/`const`, promises, and modules.
* **Today**: Continues to evolve with yearly ECMAScript updates.

---

## 🎯 Purpose of JavaScript

JavaScript was originally designed to make static web pages more dynamic. Its main purposes are:

* **Manipulating HTML and CSS**: Change content, structure, or styling dynamically.
* **User Interactions**: Respond to clicks, key presses, and form submissions.
* **Asynchronous Communication**: Fetch data without reloading the page (AJAX, Fetch API).
* **Control of Multimedia & Animations**: Play videos, create 2D/3D graphics, build interactive games.
* **Full-stack Development**: With Node.js, JS powers both client and server sides.

---

## 🧩 The Document Object Model (DOM)

The **DOM** is a programming interface for web documents. It represents the page as a **tree of objects**, where each element (like `<h1>`, `<p>`, `<img>`) is a node in the tree.

With JavaScript, developers can:

* Access elements (`document.getElementById`, `querySelector`).
* Modify text and attributes (`element.textContent`, `element.setAttribute`).
* Change styles (`element.style.color = "blue"`).
* Add or remove elements (`appendChild`, `removeChild`).
* Handle events (`element.addEventListener("click", ...)`).

👉 In short: the DOM is the bridge between JavaScript and the HTML/CSS structure of a page.

---

## 🧬 Relationship with HTML and CSS

* **HTML** provides the **structure** (the skeleton).
* **CSS** provides the **style** (the skin and appearance).
* **JavaScript** provides the **behavior** (the brain).

Example:

```html
<button id="myBtn">Click me</button>
<p id="output"></p>

<script>
  document.getElementById("myBtn").onclick = function() {
    document.getElementById("output").textContent = "Hello from JavaScript!";
  }
</script>
```

Here, HTML defines the button and text, CSS could style it, and JavaScript makes it interactive.

---

## 🚀 Rendering Process in the Browser

When a browser loads a web page:

1. **HTML is parsed** → creates the DOM tree.
2. **CSS is parsed** → creates the CSSOM (CSS Object Model).
3. **DOM + CSSOM** combine into a **Render Tree**.
4. The browser calculates layout and **paints pixels on screen**.
5. **JavaScript execution** can modify the DOM or CSSOM, forcing reflow or repaint (which may impact performance).

👉 That’s why efficient JavaScript is important for smooth performance.

---

## 🧩 JavaScript Frameworks and Libraries

As web applications grew larger, developers needed structured solutions. Frameworks and libraries provide reusable code, patterns, and abstractions.

* **Libraries**: Smaller, focus on specific tasks.

  * **jQuery** (simplified DOM manipulation, very popular in 2000s).
  * **D3.js** (data visualization).

* **Frameworks**: Provide full application structure.

  * **React** (library often treated as a framework – component-based, by Facebook).
  * **Angular** (full-featured framework by Google).
  * **Vue.js** (progressive framework, simpler learning curve).
  * **Svelte** (compiles to minimal JavaScript, focuses on performance).

* **Server-Side**:

  * **Node.js** with frameworks like **Express.js**.

These tools make it easier to build complex single-page applications (SPAs), manage state, and interact with APIs.

---

## 🧱 Summary

* JavaScript was born in the mid-1990s and is now essential for the web.
* It brings interactivity by manipulating the DOM.
* It works together with HTML and CSS as the “third pillar” of web technologies.
* Understanding the rendering pipeline helps write efficient code.
* Frameworks like React, Angular, and Vue dominate modern web development.

---

# 🖥️ Client-Side vs Server-Side Rendering

## 🧭 Server-Side Rendering (SSR)

* **Definition**: The HTML for a page is fully generated on the **server** and sent to the browser.
* **Process**:

  1. User requests a page.
  2. Server runs backend logic (e.g., Node.js, PHP, Python, Java) and produces complete HTML.
  3. Browser displays the ready HTML.
* **Advantages**:

  * Faster **first load** (user sees content immediately).
  * Better for SEO (search engines can easily crawl static HTML).
* **Disadvantages**:

  * Every interaction that changes content requires a new request to the server.
  * More server load.

**Example (Node.js + Express SSR):**

```javascript
// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = "Ville";
  res.send(`<html><body><h1>Hello, ${name}</h1></body></html>`);
});

app.listen(3000, () => console.log("SSR server running on http://localhost:3000"));
```

---

## 🧩 Client-Side Rendering (CSR)

* **Definition**: The server sends a bare HTML skeleton with JavaScript. The **browser executes JS**, fetches data, and builds the DOM dynamically.
* **Process**:

  1. User requests page.
  2. Server sends mostly empty HTML + JS bundle.
  3. JavaScript fetches data (e.g., via APIs) and updates the DOM.
* **Advantages**:

  * Rich interactivity and smoother transitions between views.
  * Less server load after initial load (API calls are lightweight).
* **Disadvantages**:

  * Slower first load (browser must fetch JS and run it).
  * SEO challenges (search engines might not see the fully rendered content).

**Example (CSR with Fetch API):**

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSR Example</title>
</head>
<body>
  <h1 id="title">Loading...</h1>
  <script>
    // Simulate fetching data from API
    setTimeout(() => {
      document.getElementById("title").textContent = "Hello, Ville (CSR)";
    }, 1000);
  </script>
</body>
</html>
```

---

## 🧬 Hybrid Rendering (SSR + CSR = Universal / Isomorphic Rendering)

* Many modern frameworks (e.g., **Next.js**, **Nuxt.js**, **Remix**) combine SSR and CSR:

  * **SSR for the initial page load** → quick and SEO-friendly.
  * **CSR for interactivity** → the page becomes dynamic after hydration (JavaScript takes over).

**Example (Pseudo Next.js style):**

```javascript
// pages/index.js
export async function getServerSideProps() {
  return { props: { name: "Ville" } }; // SSR data
}

export default function Home({ name }) {
  return (
    <div>
      <h1>Hello {name} (SSR + CSR)</h1>
      <button onClick={() => alert("Hello from CSR!")}>Click Me</button>
    </div>
  );
}
```

---

## 🚀 Practical Use Cases

* **SSR Use Case**:

  * **News websites** (e.g., BBC, CNN).
  * Users must see content instantly and SEO visibility is critical.

* **CSR Use Case**:

  * **Web applications** like Gmail, Trello, or Google Docs.
  * After initial load, interactions must be fluid and fast, without constant full-page reloads.

* **Hybrid Use Case (SSR + CSR)**:

  * **E-commerce sites** (e.g., Amazon, Zalando).
  * Need **fast initial rendering** (product page must load instantly for SEO and user experience).
  * Then **CSR takes over** for cart updates, recommendations, filtering without reloads.

---

## 🧱 Summary

* **SSR** → Good for SEO, fast first page load.
* **CSR** → Good for rich, app-like interactivity.
* **Hybrid (SSR + CSR)** → Best of both worlds, widely used in modern web apps.

---

# 📦 Introduction to HTML inputs

## 🧩 What is `<input>`?

`<input>` is the core HTML control for collecting **single-value** user input in forms. It’s polymorphic: one tag with a `type` attribute that changes behavior, validation, and UI. Inputs submit their value via their `name` when inside (or associated to) a `<form>`.

```html
<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required>
  <button type="submit">Send</button>
</form>
```

---

## ⚙️ Common attributes (work across many types)

* **type**: control kind (e.g., `text`, `email`, `date`).
* **name**: key used in form submission (`name=value`).
* **value**: initial value.
* **id** + **<label for>**: accessible labeling (recommended).
* **placeholder**: hint text (not a label).
* **required**, **min**, **max**, **step**, **minlength**, **maxlength**, **pattern**: built-in constraints.
* **autocomplete**: hints to the browser (`on`, `off`, `email`, `username`, `new-password`, etc.).
* **disabled**, **readonly**: non-editable states (disabled is not submitted).
* **list** + `<datalist>`: dropdown suggestions without restricting input.
* **inputmode** / **enterkeyhint**: mobile keyboard and submit key hints.

---

## 🧮 Core types

**Textual**

* `text`, `search`, `password` (masked), `email`, `url`, `tel`
  – `email`/`url` add semantic validation and mobile keyboard hints.

**Numbers & ranges**

* `number` (spinbox, `min/max/step`), `range` (slider).

**Dates & time**

* `date`, `time`, `datetime-local`, `month`, `week`
  – UI varies by browser/OS; values are ISO-like strings.

**Choice controls**

* `checkbox` (boolean, use `checked`)
* `radio` (exclusive in same `name` group; each needs its own `value`)
* `color` (color picker).

**File uploads**

* `file` (use `accept`, `multiple`; read via JS `input.files`).

**Buttons & hidden**

* `submit`, `reset`, `button` (custom JS), `image` (submit with coordinates), `hidden` (non-visible data).

---

## 🧠 Constraint validation (built-in)

Browsers validate inputs before form submission unless `novalidate` (on form) or `formnovalidate` (on submit button) is set.

* Pseudo-classes: `:valid`, `:invalid`, `:required`, `:optional`, `:in-range`, `:out-of-range`.
* JS API: `checkValidity()`, `reportValidity()`, `setCustomValidity(msg)`.
* Type-aware value accessors: `valueAsNumber`, `valueAsDate` (date/time types).

```js
const email = document.querySelector('#email');
if (!email.checkValidity()) {
  email.setCustomValidity('Please provide a valid email address.');
  email.reportValidity();
}
```

---

## 🖱️ Events you’ll use

* **input**: fires on each change (typing).
* **change**: fires when the control commits (e.g., blur or Enter).
* **invalid**: fires when constraint validation fails.
* **beforeinput**: low-level edit intent (where supported).

---

## 🎨 Styling & accessibility

* Associate labels: wrap or use `for`/`id`. Screen readers need them.
* Group related controls with `<fieldset><legend>…</legend>`.
* Useful CSS hooks: `:focus`, `:focus-visible`, `:placeholder-shown`, `::placeholder`.
* Don’t rely on color alone; keep sufficient contrast and clear error messages.

---

## 📨 Forms & submission details

* Unchecked checkboxes/radios **don’t submit a name/value**; include a hidden field if you need an explicit “false”.
* Buttons:

  * `<button type="submit">` submits.
  * `<button type="button">` does nothing without JS.
* Form-scoped attributes on inputs/buttons: `form`, `formaction`, `formmethod`, `formenctype`, `formnovalidate`, `formtarget` let controls submit to a different endpoint/verb than the owning form.

---

## 🛡️ Security & privacy tips

* Client-side validation improves UX but **never** replaces server-side validation/sanitization.
* Prefer `type="email"`, `type="url"`, etc. for semantic validation and mobile keyboards.
* Use `autocomplete` wisely (`autocomplete="new-password"` for sign-ups, etc.).
* For files, validate **MIME type and size** server-side; never trust `accept` alone.

---

## 🧰 Practical patterns

**Datalist suggestions**

```html
<label for="city">City</label>
<input id="city" name="city" list="cities">
<datalist id="cities">
  <option value="Helsinki"><option value="Oulu"><option value="Tampere">
</datalist>
```

**Numeric input with bounds**

```html
<label for="qty">Quantity (1–10)</label>
<input id="qty" name="qty" type="number" min="1" max="10" step="1" required>
```

**File upload (images only, multiple)**

```html
<label for="photos">Photos</label>
<input id="photos" name="photos" type="file" accept="image/*" multiple>
```

**Radio group**

```html
<fieldset>
  <legend>Plan</legend>
  <label><input type="radio" name="plan" value="basic" checked> Basic</label>
  <label><input type="radio" name="plan" value="pro"> Pro</label>
</fieldset>
```

---

## ⚠️ Common pitfalls

* Missing `<label>`: harms accessibility and tap targets.
* Using `placeholder` as a label: disappears on input; harms usability.
* Forgetting `name`: the value won’t be submitted.
* Handling numbers as strings; prefer `valueAsNumber` or server parsing.
* Relying solely on `pattern` for security; **always** validate server-side.

---

## 🧱 One-page checklist (quick memory aid)

* Pick the **right `type`** (gets you validation + mobile keyboard).
* Always **label** inputs and use `name`.
* Add **constraints** (`required`, `min/max/step`, `pattern`) where meaningful.
* Style with **`:valid/:invalid`** and show clear error messages.
* Progressive enhancement: graceful without JS; enrich with JS as needed.