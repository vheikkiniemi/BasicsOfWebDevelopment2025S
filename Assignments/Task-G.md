# Task G — Form with Custom Validation

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.


* Build **your own page** using **Starter page:** [https://vheikkiniemi.github.io/BasicsOfWeb2025SPages/task-g/](https://vheikkiniemi.github.io/BasicsOfWeb2025SPages/task-g/)  
* The page must collect data with a form and **append each submission as a new row** in an **HTML table**.
* You must implement **your own validation logic** and **personalized error messages** (not browser defaults).

---

## 🎯 Objectives

* Use the shared **starter page** and create your own page under `task-g/`. 

> [!NOTE]
> Do not change the style of the page! Change functionalities (form and table)

* Implement a form with the following inputs:

  1. **hidden** timestamp (filled automatically),
  2. **text** for full name,
  3. **email**,
  4. **tel** for phone number,
  5. **date** for birth date,
  6. **checkbox** to accept terms.
* On **Submit**, validate inputs with **your own rules** and show **custom error messages**.
* If valid, **append a new `<tr>`** to the table with the submitted values.
* Keep HTML, CSS, and JS in **separate files**.
* Publish via **GitHub Pages** and submit the **public URL**.

---

## 🧰 Required Tools

* VS Code, Git + GitHub (Pages enabled)
* Browser DevTools (Elements & Console)

---

## 📁 File structure

```
task-g/
  index.html
  style.css
  index.js
```

> Start by copying your shared **starter page** into `task-g/`

---

## ✅ Acceptance criteria

* Page uses the **shared base layout** (typography/spacing unchanged except light adjustments).
* Form includes **all required fields** (hidden timestamp, full name, email, phone, birth date, terms).
* **Custom validation** is implemented (your own logic), and **personalized messages** are shown near fields.
* **Terms checkbox** must be required to submit.
* Each valid submit **adds a row** at the **end** of the table `<tbody>`.
* No page reload is needed for adding rows.
* Page is **published** on GitHub Pages; the URL opens with HTTP 200.

---

## 🧪 Suggested validation rules (you can adjust, but be explicit)

* **Full name**: required, at least 2 words, each ≥ 2 chars.
* **Email**: valid format (type=email + extra checks if you want).
* **Phone**: your own rule (e.g., Finnish `+358` pattern); explain it in hint text.
* **Birth date**: not in the future; optionally enforce min age (e.g., ≥ 13).
* **Terms**: must be checked.

> Your error messages must be **your own text** (e.g., “Please enter your full name (first and last).” rather than the browser’s default message).

---

## 🔍 Self-check before submitting

* [ ] Hidden **timestamp** is auto-filled and included in each row.
* [ ] **Custom** validation messages appear **near the fields**.
* [ ] **Terms** must be checked or form won’t submit.
* [ ] A **new row** is appended to the **table body** on each valid submit.
* [ ] No page reload required.
* [ ] Page is published via **GitHub Pages** and opens correctly.

---

## 🌱 Professional look & feel (applies to all tasks)

Keep spacing, alignment, and color usage consistent. Avoid low contrast, inconsistent fonts/sizes, and clutter. The instructor may reject a page that looks non-professional even if it technically meets minimum checks. 