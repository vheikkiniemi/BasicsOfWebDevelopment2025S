# Task E: Weekly Timetable — Fetch, Personalize & Make Responsive

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

## 🎯 Objectives

* Fetch the **base page source** from: `https://ashy-island-0d2a8c803.1.azurestaticapps.net/task-e`
* Change **Student** name and **Group**
* Add a **Friday (Fri)** column to the table (header + all rows)
* Add your **own courses** as rows
* Add your **own timetable** using ✅ (when you have course lectures) or ❌ (when you don't have course lectures).
* Implement responsive behavior:

  * **≤ 768px:** left/right margins = **5%**, and **only** `.student-info` and the **table** are visible
  * **≤ 640px:** left/right margins = **1%**, and **only** the **table** is visible

## 🧰 Required Tools

* [Visual Studio Code](https://code.visualstudio.com/)
* [GitHub](https://github.com/)
* [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/overview)

## 🧪 Instructions

> Keep your page neat and readable—consistent spacing, alignment, and colors go a long way. 

1. **Create a folder** named `task-e` in your course repository.
2. **Fetch the base code**:

   * Open `https://ashy-island-0d2a8c803.1.azurestaticapps.net/task-e` in your browser.
   * View Page Source and copy the HTML into `index.html`.
   * Save the referenced `style.css` (use “Open link in new tab” on the stylesheet link or devtools → Network) into the same `task-e` folder.
3. **Personalize**:

   * In `index.html`, locate the **Student info** block and replace `Your Name` and `Group A` with **your real name** and **your group**.
   * Also notice the **author and date** comments in the html and css files
4. **Extend the table to Friday**:

   * Add `<th>Fri</th>` in the header row after Thu.
   * Add to **every existing row** (use ✅ or ❌).
5. **Add your courses**:
   * In `<tbody>`, add **new rows** for your own courses (keep the same column order: Course, Mon, Tue, Wed, Thu, Fri).
6. **Responsive rules**:

   * Add **two media queries** with the exact behavior below:

   ```css
   /* ≤ 768px: margins 5%, show only student-info + table */
   @media (max-width: 768px) {
     .content { margin-left: 5%; margin-right: 5%; }
     .site-header,
     .intro,
     .other-content { display: none; }
     .student-info,
     .table-wrap { display: block; }
   }

   /* ≤ 640px: margins 1%, show only the table */
   @media (max-width: 640px) {
     .content { margin-left: 1%; margin-right: 1%; }
     .student-info { display: none; }
   }
   ```
   * Tip: the base page already uses `.student-info`, `.table-wrap`, `.site-header`, `.intro`, `.other-content`, and `.content`. Target those classes exactly as above.

7. **Publish** your `task-e` folder as part of your existing Azure Static Web App (don’t remove previous tasks).
8. **Validate** with the W3C HTML Validator and fix issues.
9. **Submit** the public URL to the Task E assignment in itslearning.

> [!IMPORTANT] 
> The deadline is specified in itslearning and the submission will close automatically when the deadline is reached. No late submissions will be accepted.

---

## ✅ Automatic Validation Criteria

Your published site must:

* Be accessible at the submitted URL (HTTP 200 OK)
* **Personalization**

  * Text content shows **Student:** *your real name* and **Group:** *your group* (not the defaults)
* **Table changes**

  * Header includes **Fri**
  * Every Mon-Fri row contains (✅ or ❌)
  * At least **two** course rows exist (as many lines as you have courses)
* **Responsiveness**

  * At **≤ 768px** viewport width:

    * `.content` margins are **5%**
    * **Only** `.student-info` and `.table-wrap` are visible (header/intro/other sections hidden)
  * At **≤ 640px**:

    * `.content` margins are **1%**
    * **Only** `.table-wrap` (the table) is visible; `.student-info` is hidden
* Folder is published via **Azure Static Web Apps**
* Link is submitted on time in **itslearning**

---

## 🌱 Professional look & feel (applies to all tasks)

Keep spacing, alignment, and color usage consistent. Avoid low-contrast text, inconsistent fonts/sizes, and visual clutter. The instructor may reject a page that looks non-professional even if it technically meets minimum checks.