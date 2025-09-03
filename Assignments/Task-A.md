# Task A: Getting started with tools, HTML, and CSS

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

## 🎯 Objectives

* Understand course structure and tools
* Install and configure: Visual Studio Code, GitHub, and Azure Static Web Apps
* Publish a basic HTML page to Azure
* Learn the basics of CSS and external stylesheets

---

## 🧰 Required Tools

* [Visual Studio Code](https://code.visualstudio.com/)
* [GitHub](https://github.com/)
* [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/overview)

---

## 🧪 Hello Web + CSS Basics

### 🔧 Instructions

> [!TIP]
> Always aim to keep your site visually clear and well-structured. Proper spacing, alignment, and consistent styles help make your content more readable and professional.

1. Inside your course repository, **create a new folder named `task-a`**.

2. In that folder, create a file named `index.html` and another named `style.css`.

3. In your `index.html`, add the following content:

   * A `<h1>` heading with text `Hello Web`
   * A paragraph (`<p>`) with any text
   * A link (`<a>`) to any website

4. Style the content with your `style.css` file:

   * Change the background color of the page
   * Set the heading's color and font size
   * Change the paragraph text color

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

7. **Push your code to GitHub**, making sure all files are inside `task-a`.

8. **Ensure the `task-a` folder is correctly included in your existing Azure Static Web App**. Your Static Web App should serve all weekly tasks from a shared root folder. Do not delete previous tasks—each task should be placed in its own subfolder (e.g., `task-a`, `task-b`, `task-c`, etc.), and all should be accessible from the same deployed application.

9. **Validate your HTML code** using the [W3C HTML Validator](https://validator.w3.org/). Fix any major issues and ensure your code follows good structure.

10. **Submit the public URL** to the corresponding Task A assignment in **itslearning**.

> [!IMPORTANT] 
> The deadline is specified in itslearning and the submission will close automatically when the deadline is reached. No late submissions will be accepted.

---

## ✅ Automatic Validation Criteria

Your published site must:

* Be accessible at the submitted URL (HTTP 200 OK)
* The page includes:

  * `<h1></h1>` element with text `Hello Web`
  * `<p></p>` element
  * `<a></a>` element
* An external `style.css` is linked and it applies

  * the background color of the page
  * the heading's color and font size
  * the paragraph text color
* Personalized comments in both files
* Folder published via Azure Static Web Apps
* Link submitted through itslearning on time