# Task K: Build an Order Page

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

---

> 💡 This assignment extends **Task I** (landing page) and **Task J** (catalog page). You will now add a dedicated **Order page** that allows customers to request a rental. The **landing page must include a clear link/button to the Order page**.

---

## 🎯 Objective

Create an **Order page** that matches the look and feel of your existing site and contains a well-structured **rental order form**.

The page should:

- Reuse the **same layout, colors, and typography** as your landing and catalog pages.
- Contain a **clear, user-friendly form** for rental requests.
- Be **semantic, accessible, responsive**, and **HTML-valid**.

The landing page (from Task I) must contain a **prominent link** (`choose the right words for the link`) that navigates to your catalog page.

---

## 📚 Learning Goals

After completing this task, you can:

*  Extend a small website with **multiple, visually consistent pages**.  
*  Design and implement a **rental order form** using semantic HTML.  
*  **(Optional!)** Apply **HTML5 validation** (and optionally JavaScript) to improve UX.  
*  Maintain **consistent navigation** between landing, catalog, and order pages.

---

## ✅ Requirements

### 1️⃣ Information Architecture

- You now have **three pages**:
  - **Landing page** (Task I)
  - **Catalog page** (Task J)
  - **Order page** (Task K) — for example: `order.html`
- **Landing page**:
  - Must include a **prominent link/button** to the **Order page** (e.g., “Book now”, “Place an order”, “Request a rental”).
  - The navigation/menu should make it easy to move between **Landing → Catalog → Order**.
- **Order page**:
  - Uses the **same header + nav** as your other pages.
  - Includes:
    - A short **intro section** (1–3 sentences) explaining what the user can order and how the process works.
    - A **rental order form**.

---

### 2️⃣ Form Structure & Fields

The **order form** must be built using semantic HTML (`<form>`, `<label>`, etc.) and include at least the following fields:

1. **Customer information**
   - Full name (text)
   - Email address (type `email`)
   - Phone number (type `tel`)

2. **Rental details (the following are examples)**
   - Item to rent:
     - A **`<select>` dropdown** with options that match your catalog items (same or similar names).
   - Rental period:
     - Start date (type `date`)
     - End date (type `date`) **or** number of days (type `number`)
   - Quantity (type `number`, with sensible `min` and maybe `max`)

3. **Additional info & consent**
   - Free text area (type `textarea`) for message / special wishes.
   - Checkbox to **accept terms and conditions** (e.g., “I accept the rental terms and privacy policy”).
   - Optional: Another checkbox such as “Subscribe to newsletter”.

4. **Submit**
   - A clear **submit button**, e.g., “Send order request” or “Submit rental request”.

> You are **not** required to implement a backend.  
> The form can:
> - Either send data to a dummy URL (e.g. `action="thanks.html"`), **or**
> - Be used just for HTML/JS validation practice without real submission.

---

### 3️⃣ Validation & UX (Validation is optional!)

- Use **HTML5 validation** attributes:
  - `required` for fields that must be filled in.
  - `type="email"` for email.
  - `type="tel"` and/or `pattern` for phone number (if you want a specific format).
  - `min`, `max`, `step` for numeric values (e.g., quantity, number of days).
  - `min` on `type="date"` inputs to prevent past dates (optional).
- Make sure:
  - Each input has a **clear label** describing what is expected.
  - The error messages are **understandable** for normal users.
- **Optional (extra quality)**:
  - Use JavaScript to show **custom error messages** below the inputs.
  - Highlight invalid fields with a subtle border/background.

---

### 4️⃣ Visual Consistency

- Use the **same CSS/Tailwind setup** as your Landing and Catalog pages:
  - Same **color palette**.
  - Same **fonts** and general typography rules.
  - Same **button styles**, spacing, and card feel.
- The form should feel like a **natural extension** of your existing site:
  - Align content with the same **max width**, padding, and layout grid.
  - On small screens, the layout must be **responsive** (form should be easy to use on mobile).

---

### 5️⃣ Semantics & Accessibility

- Use **semantic HTML**:
  - `<main>` for main content.
  - `<section>` for different logical parts (intro, form, etc.).
  - `<h1>`, `<h2>`, … with a logical heading hierarchy.
- For the form:
  - Use `<label for="...">` paired with `id` on inputs.
  - Group related fields using `<fieldset>` and `<legend>` where appropriate (e.g., rental period, customer info).
- Make sure:
  - Focus states are visible (keyboard users can see where they are).
  - Contrast is sufficient between text and background.
  - Button text is descriptive (avoid “Click here”; prefer “Submit rental request”).

---

### 6️⃣ Tech Choices

- You may use:
  - **Plain CSS** (external stylesheet), **or**
  - **Tailwind CSS**, reusing your existing setup.
- The code must be:
  - **Cleanly formatted**.
  - **HTML-valid** — use the **W3C HTML Validator** before submission.

---

## ️ 🛠️ Suggested Steps

1. **Duplicate your shell**
   - Create `order.html` (or `/order/index.html`).
   - Copy the **header, nav, and footer** from your landing page.

2. **Add navigation from landing**
   - Add a **button/link** on the landing page like “Book now” or “Place order” that links to your new Order page.
   - Optionally, add a nav link from all pages to all other pages for easy testing.

3. **Build the form**
   - Add the customer info, rental details, and consent fields.
   - Add appropriate attributes: `id`, `name`, `type`, `required`, `min`, `max`, etc.

4. **Style the form**
   - Apply the same design rules as other pages (colors, fonts, spacing).
   - Make sure the form is **readable and easy to scan**.

5. **(Optional!) Add validation**
   - Test HTML5 validation in the browser.
   - Add JavaScript for custom messages or additional checks.

6. **Validate & publish**
   - [Validate HTML](https://validator.w3.org/)
   - Check responsiveness on different viewport sizes.
   - Ensure navigation works: **Landing → Catalog → Order → back**.
   - Deploy to GitHub Pages.

---

## 🧮 Grading Criteria (0–2 points)

| Points | Description |
| :----: | ----------- |
| **0** | The Order page is missing or does not meet basic layout and form requirements. Styling is broken or inconsistent with other pages. Navigation between pages does not work reliably. |
| **1** | The Order page exists and generally works, but layout, or responsiveness is weak. Visual identity is partially inconsistent with the landing/catalog pages, or some key fields/labels are unclear. |
| **2** | The Order page looks and feels **polished and professional**. It is responsive, visually consistent with Landing and Catalog, uses semantic HTML and accessible labels. Navigation between all three pages works smoothly. |

---

## 📤 Submission

* Public **GitHub Pages link**
* **GitHub repository** link

---
