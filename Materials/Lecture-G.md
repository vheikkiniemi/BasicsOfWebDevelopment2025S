> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

# 🧾 HTML Forms

## 💡 What is a form?

An **HTML form** is the web’s built-in way to collect user input and send it to a server (or handle it in the browser). Forms power everything from 🔍 **search bars** and 🔑 **login boxes** to 🛒 **checkout pages** and ⚙️ **admin dashboards**.

---

## 🕰️ A (very) short history

* **1994–1995:** Early forms appear in Mosaic/Netscape; standardized in **HTML 2.0 (RFC 1866, 1995)** with `<form>`, `method`, `enctype`, and server-side **CGI** handling.
* **1997–1999:** **HTML 4** adds semantics and accessibility with `<label>`, `<fieldset>`, and `<legend>`.
* **Mid-2000s:** **AJAX** brings dynamic forms and instant feedback ⚡.
* **2014–today:** **HTML5** introduces smarter input types (`email`, `date`, `number`), constraint validation (`required`, `pattern`), and APIs like **FormData** & **Fetch** 🚀.

---

## 🔄 How forms work (request/response flow)

1. User fills controls inside `<form>…</form>`.
2. On submit (button click or Enter), the browser builds a **name → value** list:

   * Uses each control’s `name` attribute (keys) and current value.
   * Includes only **successful controls** (e.g., unchecked checkboxes are omitted).
3. Browser sends the payload according to:

   * **action** (URL to send to; defaults to current page),
   * **method** (`GET` appends to query string; `POST` puts in request body),
   * **enctype** (`application/x-www-form-urlencoded` default; `multipart/form-data` for file uploads; `text/plain` rarely used).
4. Server responds (HTML/JSON/redirect). With JS, you can intercept submit and use `fetch()` instead.

---

## 🧱 Core elements & attributes

* **`<form>`**: `action`, `method`, `enctype`, `novalidate`, `target`, `autocomplete="on|off"`.
* **Inputs**:

  * Textual: `<input type="text|email|url|tel|search|password">`
  * Numeric & dates: `<input type="number|range|date|time|datetime-local|month|week">`
  * Choices: `<input type="checkbox|radio">`, `<select><option></option></select>`, `<datalist>` (suggestions)
  * File: `<input type="file" multiple>`
  * Misc: `<textarea>`, `<button type="submit|button|reset">`, `<output>`.
* **Semantics & a11y**: `<label for="id">`, `id`, `<fieldset>` & `<legend>` for groups, `aria-describedby` for help/error text.
* **Name/value is king**: Without a `name`, a control’s value won’t be submitted.

---

## ⚙️ Techniques & modern APIs

* **Progressive enhancement**: Make the form work with plain HTML first; then enhance with JS.
* **Built-in validation**: `required`, `min`, `max`, `maxlength`, `pattern`, and `type` (e.g., `type="email"`) trigger browser validation and native error messages.
* **JavaScript hooks**:

  * `form.addEventListener('submit', e => { ... })` to intercept submit.
  * **FormData**: build or read payloads (`new FormData(form)`).
  * **Fetch API**: async submit without page reload.
  * `reportValidity()` and `setCustomValidity()` for custom messages.
  * `formdata` event to tweak payload just before submission.
* **Client vs. server**: Always **re-validate on the server** even if you validate on the client.

---

## ♿ Accessibility best practices

* Pair inputs with **visible labels** (`<label for="...">`).
* Use **descriptive errors** linked via `aria-describedby`.
* Keep **focus order** logical; never trap focus.
* Provide **keyboard-accessible** controls and visible focus styles.
* Group related controls with `<fieldset>` and `<legend>`.

---

## 🔐 Security essentials

* **HTTPS** for all submissions (protects data in transit).
* **Server-side validation/sanitization** to prevent injection (XSS, SQLi).
* **CSRF protection** for state-changing POSTs (tokens, SameSite cookies).
* **Rate limiting / CAPTCHA** where abuse is likely.
* Don’t leak sensitive data in **GET** URLs (they end up in logs/history).

---

## 🧰 Common use cases

| 🧩 Type              | 💬 Description                           |
| :------------------- | :--------------------------------------- |
| 🔍 Search            | Uses `GET`; results bookmarkable         |
| 🔑 Login/Register    | Uses `POST`; validated + CSRF token      |
| 📁 File upload       | Needs `multipart/form-data`              |
| 🪜 Multi-step wizard | Saves partial state or one form per step |
| 🧾 Inline edit       | AJAX + PATCH; instant updates            |

---

## 💻 Minimal examples

### 1️⃣ Basic form

```html
<form action="/subscribe" method="post" autocomplete="on">
  <label for="email">📧 Email</label>
  <input id="email" name="email" type="email" required>

  <label for="plan">💼 Plan</label>
  <select id="plan" name="plan" required>
    <option value="">Choose…</option>
    <option value="basic">Basic</option>
    <option value="pro">Pro</option>
  </select>

  <button type="submit">Subscribe ✅</button>
</form>
```

---

### 2️⃣ File upload

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <label for="photo">🖼️ Profile photo</label>
  <input id="photo" name="photo" type="file" accept="image/*" required>
  <button type="submit">Upload 🚀</button>
</form>
```

---

### 3️⃣ With Fetch + FormData (modern pattern)

```html
<form id="contact" action="/contact" method="post" novalidate>
  <label for="name">👤 Name</label>
  <input id="name" name="name" required minlength="2">

  <label for="msg">💬 Message</label>
  <textarea id="msg" name="message" required></textarea>

  <p id="help" class="hint">We reply within 24 h 📅</p>

  <button type="submit">Send</button>
  <output id="status" aria-live="polite"></output>
</form>

<script>
const form = document.getElementById('contact');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;

  const fd = new FormData(form);
  try {
    const res = await fetch(form.action, { method: 'POST', body: fd });
    if (!res.ok) throw new Error('Server error');
    status.value = '✅ Sent! Thanks for your message.';
  } catch (err) {
    status.value = '❌ Could not send. Please try again.';
  }
});
</script>
```

---

### 4️⃣ Declarative validation

```html
<form>
  <label for="age">🎂 Age (18–99)</label>
  <input id="age" name="age" type="number" min="18" max="99" required>

  <label for="phone">📞 Phone (+358…)</label>
  <input id="phone" name="phone" type="tel" 
         pattern="^\+358\d{7,12}$" placeholder="+358…" required>

  <button>Submit ✅</button>
</form>
```

---

## 🧭 Tips for production

* Make HTML forms work **without JS first**
* Use `autocomplete` tokens for better UX
* Show errors near fields, clearly and politely
* Log validation results on server for debugging
* Support multiple languages and formats

---

👉 HTML forms remain one of the **most fundamental** pieces of the web — simple, powerful, and endlessly adaptable. Whether used for classic submissions or API-driven apps, they connect users to the web’s core purpose: **communication and interaction**. 🌐💬

---

# ✅ Input Validation in Web Forms

## 💡 Why validation is needed

1. **Data integrity**

   * Ensures information stored in a database is correct, clean, and predictable.
   * Example: “Age” should be a number between 0–120, not “hello”.

2. **Security**

   * Prevents injection attacks such as **SQL Injection**, **XSS**, or **Command Injection**.
   * Example: A text field containing `<script>` could execute malicious code if not validated and escaped.

3. **User experience (UX)**

   * Gives instant feedback before submitting, saving time and frustration.
   * Example: Highlighting “Invalid email address” immediately.

4. **Performance and reliability**

   * Reduces invalid server requests, bandwidth, and error logs.
   * Prevents system crashes from unexpected input formats.

---

## 🧰 Validation types & where they happen

| 🔍 Type                    | ⚙️ Where it happens                                  | 💬 Description                   | ✅ Pros                            | ⚠️ Cons                             |
| :------------------------- | :--------------------------------------------------- | :------------------------------- | :-------------------------------- | :---------------------------------- |
| **Client-side validation** | In the **browser** using HTML5 or JavaScript         | Checks input before submission   | Fast feedback 💨, better UX       | Can be bypassed easily 🚫           |
| **Server-side validation** | On the **server** (e.g., Node.js, Deno, Python, PHP) | Validates again after submission | Secure & authoritative 🛡️        | Slower, requires full round trip 🌐 |
| **Hybrid validation**      | Both browser & server                                | Combine the strengths of both    | Balanced, user-friendly & safe ⚖️ | Requires duplication of rules 🧩    |

---

## 🏗️ Client-side validation — HTML5

HTML5 introduced built-in validation attributes that make basic checks easy without JavaScript.

### ✨ Example:

```html
<form>
  <input type="email" required placeholder="Enter your email">
  <input type="number" min="18" max="99" required>
  <button>Submit</button>
</form>
```

### ✅ Common HTML5 validation attributes

| Attribute     | Example                            | Purpose                               |
| :------------ | :--------------------------------- | :------------------------------------ |
| `required`    | `<input required>`                 | Field must be filled                  |
| `min` / `max` | `<input min="1" max="10">`         | Numeric or date range                 |
| `pattern`     | `<input pattern="[A-Za-z]{3,10}">` | Regex-based rule                      |
| `maxlength`   | `<input maxlength="50">`           | Restrict input length                 |
| `type`        | `<input type="email">`             | Checks for valid format automatically |

💡 *Browsers display native error messages and prevent submission until all conditions are met.*

---

## 🧠 Client-side validation — JavaScript

For more control, developers often add JavaScript validation.

### Example:

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const email = form.querySelector('#email').value;
  if (!email.includes('@')) {
    alert('❌ Invalid email');
    e.preventDefault(); // stop form submission
  }
});
```

### ✅ Advantages:

* Fully customizable messages
* Can check relationships between fields (e.g., password == confirm password)
* Enables **real-time** validation while typing

### ⚠️ Limitations:

* Relies on JavaScript; can be disabled in browser
* Should never replace server-side checks

---

## 🖥️ Server-side validation

Server validation happens **after** submission, in the backend code.
It is **non-optional** — browsers can be bypassed, so this is the **true defense line**.

### Example (Node.js/Express):

```js
app.post("/register", (req, res) => {
  const { username, age } = req.body;

  if (!username || username.length > 50) {
    return res.status(400).send("Invalid username");
  }
  if (isNaN(age) || age < 15) {
    return res.status(400).send("Invalid age");
  }

  // Save to database if valid
});
```

### ✅ Advantages:

* Secure and reliable
* Can use complex business rules or database lookups
* Centralized logic, independent of user’s browser

### ⚠️ Limitations:

* Slower feedback (requires round-trip)
* Can overload the server with repeated bad requests

---

## ⚖️ Comparison summary

| Aspect         | Client-side        | Server-side         | Hybrid          |
| :------------- | :----------------- | :------------------ | :-------------- |
| Speed          | ⚡ Instant          | 🐢 Requires request | ⚡ Fast + Secure |
| UX             | Excellent          | Basic               | Excellent       |
| Security       | Weak               | Strong              | Strong          |
| Reliance on JS | Yes                | No                  | Partial         |
| Example use    | Email format check | Password policy     | Combined        |

---

## 🧩 Modern validation tools & frameworks

| Tool / Library             | Language             | Highlights                       |
| :------------------------- | :------------------- | :------------------------------- |
| **HTML5 API**              | Browser              | Built-in, simple, declarative    |
| **Yup / Joi**              | JavaScript / Node.js | Schema-based validation          |
| **Express Validator**      | Node.js              | Middleware validation for routes |
| **Validator.js**           | JS                   | Rich set of validation functions |
| **WTForms / Django Forms** | Python               | Server-side schema enforcement   |
| **Flask-WTF**              | Python               | Secure, CSRF-protected forms     |
| **Zod**                    | TypeScript           | Type-safe schema validation      |

---

## 🚀 Best practice summary

1. **Always validate on both sides** (client + server).
2. Use **clear error messages** near the fields.
3. Use **HTML5 attributes** for simple rules; **JS or server code** for logic-based ones.
4. Never trust client data — re-check everything server-side.
5. Keep validation messages accessible (`aria-describedby`).

---

## 🧭 Example: Hybrid validation pattern

```html
<form id="signup" method="post" action="/signup">
  <label for="email">📧 Email</label>
  <input id="email" name="email" type="email" required>

  <label for="age">🎂 Age</label>
  <input id="age" name="age" type="number" min="18" required>

  <button type="submit">Sign up</button>
</form>

<script>
const form = document.getElementById('signup');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;

  const fd = new FormData(form);
  const res = await fetch(form.action, { method: 'POST', body: fd });
  const msg = await res.text();
  alert(msg);
});
</script>
```

* Browser checks inputs instantly
* Server confirms validity before saving
* User receives feedback either way

---

👉  **Client validation enhances usability — server validation ensures trust.** Together, they form the **foundation of secure, reliable web applications.**

---

# 🧩 HTML Input Types

Below you’ll find an overview of common input types, **their purpose**, and **recommended attributes and validation techniques**.

---

## 🧠 1. Text-based Inputs

### **`<input type="text">`**

Used for short, general-purpose text fields (e.g. names, city, comments).

**Common attributes:**

```html
<input type="text" name="username" required minlength="3" maxlength="20" pattern="[A-Za-z0-9_]+">
```

✅ **Best practices:**

* Use `maxlength` to prevent overflow.
* Add a **regex `pattern`** for format control.
* Combine with a `<label>` for clarity.

---

### **`<input type="password">`**

Hides typed characters for privacy.

**Example:**

```html
<input type="password" name="pwd" minlength="8" required>
```

🔒 **Tips:**

* Combine with a password confirmation field.
* Use `autocomplete="new-password"` or `current-password`.
* On the server, **hash passwords** (never store plain text!).

---

### **`<input type="email">`**

Validates email syntax automatically.

```html
<input type="email" name="email" required>
```

📧 **Tips:**

* Combine with `multiple` for multiple emails.
* Use pattern only for special corporate rules.
* Avoid over-restrictive regex patterns.

---

### **`<input type="url">`**

Ensures input starts with `http://` or `https://`.

```html
<input type="url" name="website" placeholder="https://example.com">
```

🌐 **Tip:** Combine with `pattern` for stricter validation if needed.

---

### **`<input type="tel">`**

Used for phone numbers.

```html
<input type="tel" name="phone" pattern="^\+358\d{7,12}$" placeholder="+358…">
```

📞 **Tip:**

* Use country-specific regex with `pattern`.
* Mobile browsers open numeric keypad automatically.

---

## 🔢 2. Number & Range Inputs

### **`<input type="number">`**

Allows numeric input with up/down controls.

```html
<input type="number" name="age" min="15" max="120" step="1" required>
```

⚙️ **Attributes:**

* `min`, `max`, `step` control range and increments.
* Ideal for age, quantity, rating, etc.

---

### **`<input type="range">`**

Slider control for choosing a numeric value.

```html
<input type="range" name="volume" min="0" max="100" step="10">
```

🎚️ **Tip:** Pair with `<output>` to show value dynamically:

```html
<input type="range" id="volume" min="0" max="100">
<output id="value">50</output>

<script>
const range = document.getElementById('volume');
const value = document.getElementById('value');
range.addEventListener('input', () => value.textContent = range.value);
</script>
```

---

## 📅 3. Date and Time Inputs

HTML5 introduced several date/time-related input types that open **native pickers** on browsers and mobile devices.

| Input type       | Example                         | Description                    |
| :--------------- | :------------------------------ | :----------------------------- |
| `date`           | `<input type="date">`           | Year–month–day                 |
| `time`           | `<input type="time">`           | Hour–minute (optional seconds) |
| `datetime-local` | `<input type="datetime-local">` | Local date + time              |
| `month`          | `<input type="month">`          | Year–month only                |
| `week`           | `<input type="week">`           | Year–week number               |

🗓️ **Tips:**

* Use `min` / `max` to restrict range.
* Validate on server since formats differ by locale.

Example:

```html
<input type="date" name="start" min="2025-01-01" max="2025-12-31" required>
```

---

## 🧩 4. Choice Inputs (Boolean or Multi-option)

### **`<input type="checkbox">`**

For yes/no or multiple selections.

```html
<label><input type="checkbox" name="newsletter" checked> Subscribe</label>
```

**Techniques:**

* Use **unique `name`** for single checkboxes.
* Use **same `name`** for group of checkboxes to submit multiple values.

---

### **`<input type="radio">`**

For **exclusive** choice within a group.

```html
<label><input type="radio" name="plan" value="basic" required> Basic</label>
<label><input type="radio" name="plan" value="pro"> Pro</label>
```

📻 **Rules:**

* All options must share the same `name`.
* Use `required` to enforce a choice.

---

### **`<select>` + `<option>`**

Dropdown menu for pre-defined values.

```html
<select name="country" required>
  <option value="">Select country</option>
  <option value="fi">Finland</option>
  <option value="se">Sweden</option>
  <option value="no">Norway</option>
</select>
```

🌍 **Tips:**

* Add a default “empty” `<option>` for required fields.
* Use `<optgroup>` for logical grouping.

---

### **`<datalist>`**

Provides a dropdown of suggestions but allows free typing.

```html
<input list="browsers" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Edge">
</datalist>
```

🧠 **Tip:** Great for auto-suggest fields (e.g., cities, tags).

---

## 📁 5. File Upload Inputs

### **`<input type="file">`**

Lets users upload local files.

```html
<input type="file" name="photo" accept="image/*" required>
```

📂 **Attributes:**

* `accept="image/*"` → only images
* `multiple` → allow several files
* Requires form with `enctype="multipart/form-data"`

Example:

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="files" multiple>
  <button>Upload</button>
</form>
```

---

## 🎛️ 6. Buttons and Output

### **`<button>`**

Defines a clickable action.

```html
<button type="submit">Send</button>
<button type="reset">Reset</button>
<button type="button" onclick="doSomething()">Click</button>
```

⚙️ **Tip:** Always use explicit `type` attribute; default is `submit`.

---

### **`<output>`**

Displays results of calculations or scripts.

```html
<form oninput="sum.value=parseInt(a.value)+parseInt(b.value)">
  <input type="number" name="a" value="5"> +
  <input type="number" name="b" value="3"> =
  <output name="sum">8</output>
</form>
```

🧮 Perfect for interactive or dynamic calculations without extra JS logic.

---

## 🧾 7. Hidden Inputs

### **`<input type="hidden">`**

Stores data that users don’t see or change directly.

```html
<input type="hidden" name="csrf_token" value="xyz123">
```

🔒 Used for metadata like CSRF tokens, IDs, or session identifiers.

---

## ⚖️ Summary Table

| Category          | Common Types                                      | Typical Attributes                                | Key Techniques                  |
| :---------------- | :------------------------------------------------ | :------------------------------------------------ | :------------------------------ |
| 📝 Text inputs    | `text`, `email`, `password`, `url`, `tel`         | `required`, `pattern`, `maxlength`, `placeholder` | Regex validation, hints         |
| 🔢 Numeric inputs | `number`, `range`                                 | `min`, `max`, `step`                              | Dynamic display with `<output>` |
| 📅 Date/time      | `date`, `time`, `month`, `week`, `datetime-local` | `min`, `max`, `value`                             | Local vs. UTC awareness         |
| ☑️ Choices        | `checkbox`, `radio`, `select`, `datalist`         | `checked`, `selected`, `multiple`                 | Grouping, accessibility labels  |
| 📁 File uploads   | `file`                                            | `accept`, `multiple`                              | Requires `multipart/form-data`  |
| ⚙️ Buttons        | `submit`, `reset`, `button`                       | `type`, `disabled`                                | Form control                    |
| 🔒 Hidden         | `hidden`                                          | `value`                                           | Metadata or CSRF protection     |

---

## 🚀 Best Practices

* Use **the most specific input type** available (e.g., `email` instead of `text`).
* Add **`required`, `min`, `max`, and `pattern`** to improve data quality.
* Combine **HTML5 validation** with **server-side checks**.
* Ensure all inputs have **labels** and clear purpose.
* Use `autocomplete` wisely to improve UX (`autocomplete="email"`, `"given-name"`, etc.).
* Make forms keyboard- and screen-reader-friendly