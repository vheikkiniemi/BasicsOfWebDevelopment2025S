# 🌐 Publishing Web Pages with Azure Static Web Apps

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

## 1. From Local Files to the Cloud

In the early days of the web, creating a website often meant writing plain HTML files, saving them on your computer, and opening them in a browser. If you wanted to publish your site, you had to rent server space, upload files manually (e.g., via FTP), and manage server settings.

Today, web development is simpler and more automated. Tools like **Visual Studio Code**, **GitHub**, and **Azure Static Web Apps** allow you to build, version, and publish websites in a modern workflow with only a few steps.

### 1.1. Local Servers in Companies (1990s–2000s)

* Companies often hosted websites **on their own physical servers** located in offices or data centers.
* IT staff had to install and maintain both the hardware and the software (operating system, web server software like Apache or IIS).
* Pros: Full control over data and configuration.
* Cons: Expensive, high maintenance, limited scalability. If traffic suddenly increased, servers often crashed.

---

### 1.2. Web Hosting Services (“Webhotel”)

* As the internet grew, specialized companies started offering **shared hosting**: one physical server divided into small spaces for many customers.
* Customers could upload their HTML and images via FTP.
* Pros: Cheap, no need to maintain hardware, easy for personal and small business websites.
* Cons: Limited flexibility, performance depends on other users (“noisy neighbors”), and scaling is difficult.

---

### 1.3. Cloud Services (2010s–present)

* Cloud providers (Microsoft Azure, Amazon Web Services, Google Cloud) offer **on-demand hosting**.
* Instead of one physical server, resources are pooled across huge data centers.
* Features:

  * **Scalability**: resources adjust automatically when traffic grows.
  * **Global reach**: websites served quickly worldwide via Content Delivery Networks (CDNs).
  * **Automation**: integration with tools like GitHub enables continuous deployment.
* Pros: Flexible, reliable, cost-efficient, secure by default.
* Cons: Requires learning modern workflows, sometimes monthly costs instead of fixed price.

---

> [!IMPORTANT] 
> In this course, **Azure Static Web Apps** represents the cloud era: no need to configure your own server or buy “webhotel” space. Instead, you simply push code to GitHub, and the cloud does the rest.

---

## 2. HTML as the Foundation

**HTML (HyperText Markup Language)** is the standard for structuring web pages. In Task B, you’ll work with some of the most common elements:

* `<h1>`, `<h2>` → headings for structure and readability
* `<p>` → paragraphs for text content
* `<ul>` / `<ol>` → unordered and ordered lists
* `<a>` → links to external resources

These elements make your page **semantically correct** (easy to read for both humans and machines).

**Below is an example page that demonstrates the use of different HTML elements**

Check this 👉 [W3schools: HTML Element Reference](https://www.w3schools.com/tags/default.asp)

```html
<!doctype html>
<html lang="en">
<head>
  <!-- [Function: Metadata for the document] -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>[Function: Title shown in browser tab] My Introduction Page</title>
  <link rel="stylesheet" href="style.css"> <!-- [Function: Link external CSS] -->
</head>

<body>
  <header>
    <h1>[Function: Main heading (h1)] Jane Doe</h1>
    <p>[Function: Introductory paragraph] Welcome! This page is my personal introduction for Task B.</p>
    <nav>
      <ul>
        <li><a href="#about">[Function: Navigation link → About Me]</a></li>
        <li><a href="#goals">[Function: Navigation link → My Goals]</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>[Function: Section heading (h2)] About Me</h2>
      <p>[Function: Paragraph] I am a student learning web development. I enjoy creating websites, solving problems, and learning new tools.</p>
      <ul>
        <li>[Function: Unordered list item] Hiking</li>
        <li>[Function: Unordered list item] Gaming</li>
        <li>[Function: Unordered list item] Reading</li>
      </ul>
      <p>[Function: External link] Visit my favorite site: <a href="https://www.bbc.com">BBC News</a></p>
    </section>

    <section id="goals">
      <h2>[Function: Section heading (h2)] My Goals for This Course</h2>
      <ol>
        <li>[Function: Ordered list item] Learn semantic HTML</li>
        <li>[Function: Ordered list item] Improve CSS styling</li>
        <li>[Function: Ordered list item] Deploy apps with Azure Static Web Apps</li>
      </ol>
    </section>
  </main>

  <footer>
    <p>[Function: Footer note] © 2025 Jane Doe</p>
  </footer>
</body>
</html>
```

---

## 3. Styling with CSS

HTML defines structure, but **CSS (Cascading Style Sheets)** controls the look. By separating design into a separate `style.css` file, you can:

* Change colors, fonts, and background
* Control spacing and alignment
* Create consistent styles across all tasks

This approach is also required in your assignments: every task folder will contain both an `index.html` and a `style.css`. In the course, you will also learn other ways of adding CSS, such as inline styles and internal `<style>` blocks, so you can see the different options available.

### 3.1. CSS Inclusion Methods (as a reminder)

| Method                                                 | Example                                          | Pros ✅                                                                                              | Cons ❌                                                                  |
| ------------------------------------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **External CSS** (separate `.css` file)                | `html <link rel="stylesheet" href="style.css"> ` | - Keeps HTML and CSS separate (clean code)<br>- One file can style many pages<br>- Easy to maintain | - Requires extra file<br>- Not applied until CSS file is loaded         |
| **Internal CSS** (inside `<style>` in `<head>`)        | `html <style> p { color: blue; } </style> `      | - Useful for quick tests<br>- Styles are in the same file<br>- No extra file needed                 | - Harder to reuse across pages<br>- Can clutter HTML head               |
| **Inline CSS** (inside an element’s `style` attribute) | `html <p style="color:red;">Hello</p> `          | - Quickest way to apply style<br>- Good for very small changes                                      | - Breaks separation of concerns<br>- Hard to maintain<br>- Not reusable |

---

### 3.2. Example stylesheet

**Below is an example stylesheet that demonstrates the use of different CSS rules.**

Check this 👉 [W3schools: CSS Reference](https://www.w3schools.com/cssref/index.php)

```css
/* [Function: Set background color for whole page] */
body {
  background-color: #f4f8fb;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

/* [Function: Style the main heading] */
h1 {
  color: #003366;
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
}

/* [Function: Style secondary headings] */
h2 {
  color: #0055a5;
  font-size: 1.5rem;
  margin-top: 1.5rem;
}

/* [Function: Paragraph text styling] */
p {
  color: #333333;
  max-width: 600px;
  margin: 0.5rem auto;
  padding: 0 1rem;
}

/* [Function: Unordered and ordered list styling] */
ul, ol {
  max-width: 600px;
  margin: 0.5rem auto 1rem auto;
  padding-left: 2rem;
}

ul li {
  list-style-type: square; /* [Function: Custom bullet style] */
  color: #444444;
}

ol li {
  list-style-type: decimal-leading-zero; /* [Function: Custom ordered list style] */
  color: #444444;
}

/* [Function: Style for links] */
a {
  color: #0066cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #004080;
}

/* [Function: Footer styling] */
footer {
  background-color: #003366;
  color: white;
  text-align: center;
  padding: 0.5rem;
  margin-top: 2rem;
}
```
---

## 4. GitHub as Your Version History

Every change you make in your project is stored in **GitHub**.

**Why should you learn GitHub, even for simple web pages?**

* 🕑 **History**: Mistakes can be rolled back. If your code breaks, you can easily return to a working version.
* 👥 **Collaboration**: Others (teachers, peers, or future colleagues) can view your work, give feedback, or contribute.
* 🚀 **Automation**: GitHub can trigger deployments to Azure automatically—this means your website is updated online whenever you push changes.
* 🌍 **Real-world skill**: Git and GitHub are `industry standards`. Almost every modern software and web project uses them. Learning GitHub now gives you a head start for future courses, projects, internships, and jobs.
* 📂 **Organization**: Instead of files scattered across your computer, everything is in one structured repository. You can always find your work, even from another machine.

For this course, each task (e.g., *task-a*, *task-b*, *task-c*) is pushed to GitHub inside your course repository. This way, GitHub acts both as your **backup system** and your **publishing pipeline**.

---

## 5. Azure Static Web Apps

**Azure Static Web Apps** is Microsoft’s modern hosting service for websites. Instead of renting servers or uploading files manually, Azure automatically publishes your site directly from `GitHub`.

**History & Concept**
Azure Static Web Apps was introduced by Microsoft in 2020 to simplify web publishing. Instead of configuring servers, Azure automatically hosts static files (HTML, CSS, JavaScript) in the cloud and delivers them worldwide through a **Content Delivery Network (CDN)**.

**Why should you learn Azure Static Web Apps, even for simple HTML pages?**

* 🚀 **Easy publishing**: No need to configure servers. You focus on writing HTML and CSS, and Azure takes care of hosting.
* 🔄 **Automatic updates**: Each time you push to GitHub, your website is rebuilt and redeployed automatically.
* ⚡ **Fast performance**: Your site is delivered globally through Microsoft’s Content Delivery Network (CDN), so it loads quickly anywhere.
* 🔒 **Secure by default**: Every site gets free HTTPS, which keeps connections encrypted and professional.
* 🎓 **Future-proof skill**: Cloud deployment is `the industry standard`. Whether you continue in web development, software engineering, or data projects, cloud skills are always in demand.
* 🌍 **Accessibility**: Having your tasks online makes them easy to share with teachers, peers, and eventually in your portfolio.

For this course, Azure Static Web Apps is where all your weekly tasks (*task-a*, *task-b*, *task-c*, …) will be published. Each subfolder in your repository becomes a part of one shared, always-available website.

---

## 6. Quality Check: Validation and Beyond

**Validation** is the first step:

* 🛠 **[W3C HTML Validator](https://validator.w3.org/)** checks that your HTML follows the official standard.
* 🎨 **[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)** ensures your CSS has no syntax errors.

But professional web development uses more than just validators:

* ♿ **Accessibility checks**

  * Use tools like [WAVE](https://wave.webaim.org/) or browser accessibility inspector.
  * Make sure headings are structured logically, links are descriptive, and color contrast is readable.

* 📱 **Responsive design tests**

  * Test your site on different screen sizes (desktop, tablet, mobile).
  * Check scaling and layout in browser developer tools.

* 🌍 **Cross-browser compatibility**

  * Open the site in at least two browsers (e.g., Chrome and Firefox).
  * Verify that fonts, colors, and layouts look consistent.

* ⚡ **Performance checks**

  * Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) (built into Chrome DevTools).
  * Review loading speed and best-practice suggestions.

* 🔒 **Basic security checks**

  * Ensure your deployed site uses HTTPS (Azure Static Web Apps provides this automatically).
  * Avoid putting sensitive data in your code.

---

### 6.1. Final Touches: Web Development Good Practices

1. **Validation**

   * [ ] Run HTML through W3C Validator → No major errors
   * [ ] Run CSS through W3C Validator → No syntax errors

2. **Visual Appearance**

   * [ ] Background, headings, and text colors are readable
   * [ ] Page layout is clear and well-spaced
   * [ ] Lists and links have custom styles (not just defaults)

3. **Functionality**

   * [ ] Navigation links and external links work correctly
   * [ ] CSS file is correctly linked and styles are applied
   * [ ] Each section (e.g., “About Me”, “My Goals”) is clearly visible

4. **Responsiveness & Usability**

   * [ ] Page looks good on desktop and mobile (check with browser tools)
   * [ ] Text is not too small on mobile view
   * [ ] Headings and paragraphs are easy to scan

5. **Professionalism**

   * [ ] Author comment block added in both HTML and CSS files
   * [ ] No placeholder text left (everything personalized)
---

