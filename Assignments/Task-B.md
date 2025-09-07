# Task B: HTML Structure – Headings, Paragraphs, Lists, and Links

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

## 🎯 Objectives

* Learn how to use common structural HTML elements
* Create semantically correct content using headings, paragraphs, lists, and links
* Deploy your work to Azure Static Web Apps using GitHub

---

## 🧰 Required Tools

* [Visual Studio Code](https://code.visualstudio.com/)
* [GitHub](https://github.com/)
* [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/overview)

---

## 🧪 Personal Introduction Page

### 🔧 Instructions

> [!TIP]
> Always aim to keep your site visually clear and well-structured. Proper spacing, alignment, and consistent styles help make your content more readable and professional.

1. Inside your course repository, **create a new folder named `task-b`**.

2. In that folder, create a file named `index.html` and another named `style.css`.

3. In your `index.html`, add the following content:

   * A `<h1>` heading with your full name
   * A `<p>` paragraph that includes a short introduction (minimum 3 sentences)
   * An unordered list (`<ul>`) with at least 3 hobbies or interests
   * A link (`<a>`) to an external site you like (e.g., news site, game, YouTube channel)
   * A second-level heading (`<h2>`) labeled "My Goals for This Course"
   * An ordered list (`<ol>`) with 3 personal learning goals

4. Style the content with your `style.css` file:

   * Change the background color of the page
   * Set the heading's color and font size
   * Change the paragraph text color
   * Apply some custom list styles (for both)
   * Apply some custom link styles

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

7. **Push your code to GitHub**, making sure all files are inside `task-b`.

8. **Ensure the `task-b` folder is correctly included in your existing Azure Static Web App**. Your Static Web App should serve all weekly tasks from a shared root folder. Do not delete previous tasks—each task should be placed in its own subfolder (e.g., `task-a`, `task-b`, `task-c`, etc.), and all should be accessible from the same deployed application.

9. **Validate your HTML code** using the [W3C HTML Validator](https://validator.w3.org/). Fix any major issues and ensure your code follows good structure.

10. **Submit the public URL** to the corresponding Task B assignment in **itslearning**.

> [!IMPORTANT] 
> The deadline is specified in itslearning and the submission will close automatically when the deadline is reached. No late submissions will be accepted.

---

## ✅ Automatic Validation Criteria

Your published site must:

* Be accessible at the submitted URL (HTTP 200 OK)
* The page includes:

  * `<h1>` with your name
  * At least one `<p>` with 3 sentences
  * `<ul>` with 3 items
  * One `<a>` link to an external site
  * `<h2>` and `<ol>` with 3 goals
* An external `style.css` is linked and it applies

  * the background color of the page
  * the heading's color and font size
  * the paragraph text color
  * custom list styles (for both)
  * custom link styles
* Personalized comments in both files
* Folder published via Azure Static Web Apps
* Link submitted through itslearning on time