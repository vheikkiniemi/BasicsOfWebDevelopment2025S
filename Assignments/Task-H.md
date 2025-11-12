# Task H: Modernize Your Page with Tailwind CSS

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

## 🎯 Objective

* In this task, you will **redesign your previous Task G submission** using **Tailwind CSS**.
* Your new page should **look and feel similar** to your original one, but it must now be styled **entirely with Tailwind utility classes** instead of custom CSS.
* You are free to be creative — as long as the result remains clear, functional, and visually balanced.

---

## 🧠 Learning Goals

After completing this task, you will be able to:

* Apply Tailwind CSS for layout, typography, and colors
* Build a responsive web page using utility classes
* Validate form inputs with custom error messages
* Ensure semantic and valid HTML5 structure

---

## ⚙️ Steps

### 1️⃣ Start from your previous Task G

Use your own Task G files as a base. Copy your existing HTML, CSS, and JS to a new folder for Task H.

### 2️⃣ Add Tailwind CSS

You can use the CDN version for simplicity.
Add the following line inside the `<head>` of your HTML:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

### 3️⃣ Replace your CSS

Remove your old style rules and start using **Tailwind classes** for:

* Layout (`flex`, `grid`, `gap`, `justify-center`, `items-start`, etc.)
* Colors (`bg-slate-100`, `text-slate-800`, `border-slate-300`, etc.)
* Spacing (`p-4`, `m-2`, `mt-8`, etc.)
* Typography (`font-bold`, `text-xl`, `leading-relaxed`, etc.)

You may keep minimal inline styles only if necessary.

### 4️⃣ Preserve logic and usability

Your page must still include a **working form** that validates inputs.
Validation messages must be **clearly visible** and styled with Tailwind CSS (for example, red text for errors).

### 5️⃣ Make it responsive

Use Tailwind responsive utilities such as `md:`, `lg:`, and `xl:` to ensure your layout adapts nicely to mobile and desktop screens.

### 6️⃣ Validate your HTML

Use the [W3C Validator](https://validator.w3.org/) to check that your code is valid HTML5.

### 7️⃣ Publish your site

Deploy your updated Tailwind version on **GitHub Pages** as before.

---

## 🧮 Grading Criteria (0 – 2 points)

|   Points  | Description                                                                                                                                                                               |
| :-------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0 pts** | The page does not meet layout or functionality expectations. Design is incomplete, unreadable, or validation does not work.                                                               |
|  **1 pt** | Tailwind CSS is used superficially. Layout or responsiveness is weak, validation messages are unclear or missing, and visual quality is inconsistent.                                     |
| **2 pts** | The page looks and feels polished and professional. It is fully styled with Tailwind, responsive, HTML-valid, and includes clear, accessible validation messages.                         |

---

## 📤 Submission

* Submit the **public link (Github pages)** to your deployed Tailwind version.

---

## 🪄 Example Deliverables

* `index.html` — uses Tailwind CSS classes
* `form.js` — handles form validation and error messages
* *(optional)* `darkmode.js` — adds light/dark mode toggle