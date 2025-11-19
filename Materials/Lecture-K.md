# 💻 Building Accessible Forms with Tailwind CSS

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

## 🎯 Why use Tailwind for forms? 

Tailwind CSS is a utility-first framework: instead of writing custom CSS for each form, you compose ready-made classes directly in your HTML.

Benefits for forms:

* ✅ **Consistency** – same spacing, fonts, colors across inputs and buttons.
* ⚡ **Speed** – no need to jump between HTML and CSS files all the time.
* 📱 **Responsiveness** – mobile-friendly layouts with simple classes.
* 🎨 **Design system friendly** – you can define one “form style” and reuse it.

---

## 🧱 Basic setup for a Tailwind form 

A typical form structure with Tailwind:

```html
<form class="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4">
  <h1 class="text-2xl font-semibold mb-4">Sign up</h1>

  <!-- Single form control group -->
  <div class="flex flex-col space-y-1">
    <label for="email" class="text-sm font-medium text-gray-700">
      Email address
    </label>
    <input
      id="email"
      name="email"
      type="email"
      required
      class="border border-gray-300 rounded px-3 py-2 text-sm
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="you@example.com"
    />
    <p class="text-xs text-gray-500">
      We will never share your email.
    </p>
  </div>

  <button
    type="submit"
    class="w-full bg-blue-600 text-white font-semibold py-2 rounded
           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Create account
  </button>
</form>
```

Key Tailwind ideas here:

* Layout: `max-w-md mx-auto p-6` → centered, nice width.
* Card feel: `bg-white shadow rounded`.
* Vertical spacing between controls: `space-y-4` on `<form>`.

---

## 📐 Form layout and spacing with Tailwind 

Tailwind makes spacing and layout easy:

* Vertical space between fields → `space-y-3` / `space-y-4`.
* Multi-column layout for desktop, single column for mobile:

```html
<form class="max-w-2xl mx-auto p-6 bg-white shadow rounded space-y-6">
  <!-- Two columns on md+ screens -->
  <div class="grid gap-4 md:grid-cols-2">
    <div class="flex flex-col space-y-1">
      <label for="firstName" class="text-sm font-medium text-gray-700">First name</label>
      <input id="firstName" name="firstName"
             class="border border-gray-300 rounded px-3 py-2 text-sm" />
    </div>
    <div class="flex flex-col space-y-1">
      <label for="lastName" class="text-sm font-medium text-gray-700">Last name</label>
      <input id="lastName" name="lastName"
             class="border border-gray-300 rounded px-3 py-2 text-sm" />
    </div>
  </div>
</form>
```

Useful classes:

* Layout: `grid`, `gap-4`, `md:grid-cols-2`
* Grouping: `flex`, `flex-col`, `space-y-1`

---

## ✏️ Base Tailwind style for text inputs 

You usually want a **shared input style**:

```html
<input
  class="w-full border border-gray-300 rounded px-3 py-2 text-sm
         placeholder:text-gray-400
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
         disabled:bg-gray-100 disabled:cursor-not-allowed"
/>
```

Important classes:

* `w-full` → full width.
* `border border-gray-300 rounded` → basic border + radius.
* `placeholder:text-gray-400` → softer placeholder.
* `focus:ring-2 focus:ring-blue-500` → visible, accessible focus.
* `disabled:bg-gray-100` → disabled state looks different.

---

## ❗ Error states with Tailwind 

When there is an error (from HTML5 validation or JS), you can change styles:

```html
<div class="flex flex-col space-y-1">
  <label for="email" class="text-sm font-medium text-gray-700">
    Email address
  </label>
  <input
    id="email"
    name="email"
    type="email"
    aria-invalid="true"
    aria-describedby="email-error"
    class="w-full border border-red-500 rounded px-3 py-2 text-sm
           focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
  />
  <p id="email-error" class="text-xs text-red-600">
    Please enter a valid email address.
  </p>
</div>
```

Error-related classes:

* Border & ring: `border-red-500`, `focus:ring-red-500`, `focus:border-red-500`
* Error text: `text-red-600`, `text-xs`

Later we’ll see how to **toggle these classes with JavaScript**.

---

## ☑️ Checkboxes and radio buttons 

**Checkbox example:**

```html
<div class="flex items-start space-x-2">
  <input
    id="terms"
    name="terms"
    type="checkbox"
    required
    class="mt-1 h-4 w-4 rounded border-gray-300
           text-blue-600 focus:ring-blue-500"
  />
  <label for="terms" class="text-sm text-gray-700">
    I agree to the terms and conditions.
  </label>
</div>
```

**Radio buttons group:**

```html
<fieldset class="space-y-2">
  <legend class="text-sm font-medium text-gray-700 mb-1">
    Choose a plan
  </legend>

  <div class="flex items-center space-x-2">
    <input
      id="basic"
      name="plan"
      type="radio"
      value="basic"
      class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
      required
    />
    <label for="basic" class="text-sm text-gray-700">Basic</label>
  </div>

  <div class="flex items-center space-x-2">
    <input
      id="pro"
      name="plan"
      type="radio"
      value="pro"
      class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
    />
    <label for="pro" class="text-sm text-gray-700">Pro</label>
  </div>
</fieldset>
```

---

## 📝 Selects and textareas 

**Select dropdown:**

```html
<div class="flex flex-col space-y-1">
  <label for="country" class="text-sm font-medium text-gray-700">Country</label>
  <select
    id="country"
    name="country"
    required
    class="w-full border border-gray-300 rounded px-3 py-2 text-sm
           bg-white
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  >
    <option value="">Select your country</option>
    <option value="fi">Finland</option>
    <option value="se">Sweden</option>
    <option value="no">Norway</option>
  </select>
</div>
```

**Textarea:**

```html
<div class="flex flex-col space-y-1">
  <label for="message" class="text-sm font-medium text-gray-700">
    Message
  </label>
  <textarea
    id="message"
    name="message"
    rows="4"
    class="w-full border border-gray-300 rounded px-3 py-2 text-sm
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    placeholder="Tell us more..."
  ></textarea>
</div>
```

---

## 🔘 Buttons and primary actions 

**Primary submit button:**

```html
<button
  type="submit"
  class="inline-flex items-center justify-center
         px-4 py-2 rounded-md text-sm font-semibold
         bg-blue-600 text-white
         hover:bg-blue-700
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
         disabled:bg-blue-300 disabled:cursor-not-allowed"
>
  Submit
</button>
```

**Secondary button:**

```html
<button
  type="button"
  class="inline-flex items-center justify-center
         px-4 py-2 rounded-md text-sm font-semibold
         border border-gray-300 text-gray-700 bg-white
         hover:bg-gray-50
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
>
  Cancel
</button>
```

---

## ✅ HTML5 validation basics + Tailwind 

HTML5 already provides powerful built-in validation. Tailwind does **not** change validation logic; it only changes how elements look.

Common attributes:

* `required` – field cannot be empty.
* `type="email"`, `type="url"`, `type="number"` – basic format checks.
* `min`, `max`, `step` – numeric ranges.
* `minlength`, `maxlength` – text length.
* `pattern="regex"` – custom format.

**Example with HTML5 validation + Tailwind:**

```html
<form
  id="signupForm"
  class="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4"
>
  <div class="flex flex-col space-y-1">
    <label for="email" class="text-sm font-medium text-gray-700">
      Email
    </label>
    <input
      id="email"
      name="email"
      type="email"
      required
      class="w-full border border-gray-300 rounded px-3 py-2 text-sm
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="you@example.com"
    />
    <p id="email-error" class="hidden text-xs text-red-600">
      <!-- JS will fill this -->
    </p>
  </div>

  <div class="flex flex-col space-y-1">
    <label for="password" class="text-sm font-medium text-gray-700">
      Password (min 8 characters)
    </label>
    <input
      id="password"
      name="password"
      type="password"
      required
      minlength="8"
      class="w-full border border-gray-300 rounded px-3 py-2 text-sm
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <p id="password-error" class="hidden text-xs text-red-600"></p>
  </div>

  <button
    type="submit"
    class="w-full bg-blue-600 text-white font-semibold py-2 rounded
           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Create account
  </button>
</form>
```

If you don’t add any JavaScript, the **browser** will show default messages and block submission when fields are invalid.

If you want **fully custom error messages**, you typically:

* Add `novalidate` to the `<form>` (to disable browser UI), and
* Handle validation with JavaScript.

---

## 🧪 JavaScript + Tailwind classes for error styling 

Here’s a simple pattern:

1. Use HTML5 validation APIs (`checkValidity()`, `validity`, `setCustomValidity()`).
2. Use JavaScript to **add/remove Tailwind classes** for error/success states.
3. Show/hide error messages in `<p>` elements.

### Helper functions for styling

```html
<script>
  function setError(input, message) {
    const errorElement = document.getElementById(input.id + "-error");

    // Remove "normal" border + focus styles
    input.classList.remove(
      "border-gray-300",
      "focus:ring-blue-500",
      "focus:border-blue-500"
    );

    // Add error styles
    input.classList.add(
      "border-red-500",
      "focus:ring-red-500",
      "focus:border-red-500"
    );

    // Set message
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.remove("hidden");
    }

    // For screen readers
    input.setAttribute("aria-invalid", "true");
  }

  function clearError(input) {
    const errorElement = document.getElementById(input.id + "-error");

    input.classList.remove(
      "border-red-500",
      "focus:ring-red-500",
      "focus:border-red-500"
    );
    input.classList.add(
      "border-gray-300",
      "focus:ring-blue-500",
      "focus:border-blue-500"
    );

    if (errorElement) {
      errorElement.textContent = "";
      errorElement.classList.add("hidden");
    }

    input.removeAttribute("aria-invalid");
  }
</script>
```

### Form validation on submit (HTML5 + JS + Tailwind)

```html
<form
  id="signupForm"
  novalidate
  class="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4"
>
  <!-- (same fields as above) -->
</form>

<script>
  const form = document.getElementById("signupForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  form.addEventListener("submit", (event) => {
    let valid = true;

    // Reset previous errors
    clearError(email);
    clearError(password);

    // HTML5 validity checks + custom messages
    if (!email.value || !email.checkValidity()) {
      setError(email, "Please enter a valid email address.");
      valid = false;
    }

    if (!password.value) {
      setError(password, "Password is required.");
      valid = false;
    } else if (password.value.length < 8) {
      setError(password, "Password must be at least 8 characters long.");
      valid = false;
    }

    if (!valid) {
      event.preventDefault(); // stop form submission
    }
  });
</script>
```

What happens here:

* `novalidate` disables the browser’s default popup messages.
* We still **reuse HTML5 checks** (`checkValidity`, `type="email"`, `minlength`).
* Errors are shown using Tailwind classes (`border-red-500`, `text-red-600`).
* When valid, normal Tailwind styles are restored.

### 10.3 Live validation (on input) 🎧

You can also validate while the user types:

```html
<script>
  email.addEventListener("input", () => {
    if (email.checkValidity()) {
      clearError(email);
    }
  });

  password.addEventListener("input", () => {
    if (password.value.length >= 8) {
      clearError(password);
    }
  });
</script>
```

This gives a nicer UX: errors disappear when the input becomes valid.

---

## ♿ Accessibility & usability tips

When designing forms with Tailwind + HTML5 + JS:

* Use `<label for="id">` and matching `id` on the input.
* Use `aria-invalid="true"` and `aria-describedby="error-id"` for error messages.
* Keep focus styles (e.g. `focus:ring-2`) – don’t remove them.
* Group related fields with `<fieldset>` and `<legend>`.
* Show clear error text (not only red color).

Example group:

```html
<section aria-labelledby="contact-info-heading" class="space-y-4">
  <h2 id="contact-info-heading" class="text-lg font-semibold text-gray-800">
    Contact information
  </h2>
  <!-- fields -->
</section>
```

---

# 💻 Step-by-step: Contact Form with Tailwind + Validation

---

## 🏁 Step 0 → Starter HTML file 

Create a file called **`index.html`** and add a basic HTML5 skeleton + Tailwind CDN.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Contact Form with Tailwind</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Tailwind via CDN (for learning/demo projects) -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gray-100 flex items-center justify-center">
  <!-- We will add the form here in the next steps -->

  <script src="script.js"></script>
</body>
</html>
```

Also create an **empty** file `script.js` in the same folder.

---

## 🧱 Step 1 → Add a centered card for the form 

Inside `<body>`, add a container with a “card” look:

```html
<body class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">
      Contact us
    </h1>

    <!-- Form will go here -->
  </div>

  <script src="script.js"></script>
</body>
```

What the classes do:

* `min-h-screen` → full viewport height
* `flex items-center justify-center` → center the card
* `max-w-md` + `p-6` + `shadow-lg` + `rounded-lg` → nice panel

---

## 📝 Step 2 → Add the basic form structure 

Inside the `<div>`, add a `<form>`:

```html
<form id="contactForm" novalidate class="space-y-4">
  <!-- we will add fields here -->
</form>
```

Notes:

* `id="contactForm"` → we’ll use this in JavaScript.
* `novalidate` → disables browser’s default popups so we can show our own error messages.
* `space-y-4` → vertical spacing between form sections.

Now your card looks like:

```html
<div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
  <h1 class="text-2xl font-bold text-gray-800 mb-4">
    Contact us
  </h1>

  <form id="contactForm" novalidate class="space-y-4">
    <!-- fields will come next -->
  </form>
</div>
```

---

## ✏️ Step 3 → Add form fields (no validation yet) 

We’ll add three fields:

1. Full name (text)
2. Email (email)
3. Message (textarea)
4. Terms checkbox

### 3.1 Full name

```html
<div class="flex flex-col space-y-1">
  <label for="name" class="text-sm font-medium text-gray-700">
    Full name
  </label>
  <input
    id="name"
    name="name"
    type="text"
    class="w-full border border-gray-300 rounded px-3 py-2 text-sm
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    placeholder="Your name"
  />
  <p id="name-error" class="hidden text-xs text-red-600"></p>
</div>
```

### 3.2 Email

```html
<div class="flex flex-col space-y-1">
  <label for="email" class="text-sm font-medium text-gray-700">
    Email
  </label>
  <input
    id="email"
    name="email"
    type="email"
    class="w-full border border-gray-300 rounded px-3 py-2 text-sm
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    placeholder="you@example.com"
  />
  <p id="email-error" class="hidden text-xs text-red-600"></p>
</div>
```

### 3.3 Message

```html
<div class="flex flex-col space-y-1">
  <label for="message" class="text-sm font-medium text-gray-700">
    Message
  </label>
  <textarea
    id="message"
    name="message"
    rows="4"
    class="w-full border border-gray-300 rounded px-3 py-2 text-sm
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    placeholder="How can we help you?"
  ></textarea>
  <p id="message-error" class="hidden text-xs text-red-600"></p>
</div>
```

### 3.4 Terms checkbox

```html
<div class="flex items-start space-x-2">
  <input
    id="agree"
    name="agree"
    type="checkbox"
    class="mt-1 h-4 w-4 rounded border-gray-300
           text-blue-600 focus:ring-blue-500"
  />
  <label for="agree" class="text-sm text-gray-700">
    I agree to the processing of my personal data.
  </label>
</div>
<p id="agree-error" class="hidden text-xs text-red-600"></p>
```

### 3.5 Submit button

```html
<button
  type="submit"
  class="w-full bg-blue-600 text-white font-semibold py-2 rounded
         hover:bg-blue-700
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
>
  Send message
</button>
```

Now your `<form>` looks like:

```html
<form id="contactForm" novalidate class="space-y-4">
  <!-- Name -->
  ...name block...

  <!-- Email -->
  ...email block...

  <!-- Message -->
  ...message block...

  <!-- Terms + error -->
  ...terms block...

  <!-- Submit -->
  ...button...
</form>
```

---

## ✅ Step 4 → Add HTML5 validation attributes 

Now we make the fields **required** and add some simple rules.

Update the inputs like this:

```html
<input
  id="name"
  name="name"
  type="text"
  required
  minlength="2"
  ...
/>

<input
  id="email"
  name="email"
  type="email"
  required
  ...
/>

<textarea
  id="message"
  name="message"
  rows="4"
  required
  minlength="10"
  ...
></textarea>

<input
  id="agree"
  name="agree"
  type="checkbox"
  required
  ...
/>
```

Now the browser knows:

* name → must not be empty, min length 2
* email → must be a valid email
* message → at least 10 characters
* checkbox → must be checked

We still use `novalidate` on the form, because we want to show our own error messages with Tailwind.

---

## 🎨 Step 5 → JavaScript helpers for error styling

Open **`script.js`** and add functions to show and clear errors.

```js
// Helper: show error for an input
function setError(input, message) {
  const errorElement = document.getElementById(input.id + "-error");

  // Remove "normal" styling
  input.classList.remove(
    "border-gray-300",
    "focus:ring-blue-500",
    "focus:border-blue-500"
  );

  // Add error styling
  input.classList.add(
    "border-red-500",
    "focus:ring-red-500",
    "focus:border-red-500"
  );

  // Show error text
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.remove("hidden");
  }

  // Accessibility
  input.setAttribute("aria-invalid", "true");
}

// Helper: clear error for an input
function clearError(input) {
  const errorElement = document.getElementById(input.id + "-error");

  input.classList.remove(
    "border-red-500",
    "focus:ring-red-500",
    "focus:border-red-500"
  );
  input.classList.add(
    "border-gray-300",
    "focus:ring-blue-500",
    "focus:border-blue-500"
  );

  if (errorElement) {
    errorElement.textContent = "";
    errorElement.classList.add("hidden");
  }

  input.removeAttribute("aria-invalid");
}
```

For the **checkbox**, we don’t change the border color, but we still show/hide a text error.

```js
function setCheckboxError(checkbox, message) {
  const errorElement = document.getElementById(checkbox.id + "-error");
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.remove("hidden");
  }
}

function clearCheckboxError(checkbox) {
  const errorElement = document.getElementById(checkbox.id + "-error");
  if (errorElement) {
    errorElement.textContent = "";
    errorElement.classList.add("hidden");
  }
}
```

---

## 🧪 Step 6 → Form submit handler

Now we connect everything: when the user hits **Submit**, we check the fields and either:

* show errors (and prevent submit), or
* log the values (simulate sending).

Add this to `script.js`:

```js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const agreeCheckbox = document.getElementById("agree");

  form.addEventListener("submit", (event) => {
    let valid = true;

    // Clear previous errors
    clearError(nameInput);
    clearError(emailInput);
    clearError(messageInput);
    clearCheckboxError(agreeCheckbox);

    // NAME: required + min length
    if (!nameInput.value.trim()) {
      setError(nameInput, "Name is required.");
      valid = false;
    } else if (nameInput.value.trim().length < 2) {
      setError(nameInput, "Name must be at least 2 characters.");
      valid = false;
    }

    // EMAIL: HTML5 email format
    if (!emailInput.value.trim() || !emailInput.checkValidity()) {
      setError(emailInput, "Please enter a valid email address.");
      valid = false;
    }

    // MESSAGE: required + min 10
    if (!messageInput.value.trim()) {
      setError(messageInput, "Message is required.");
      valid = false;
    } else if (messageInput.value.trim().length < 10) {
      setError(messageInput, "Message must be at least 10 characters.");
      valid = false;
    }

    // TERMS CHECKBOX
    if (!agreeCheckbox.checked) {
      setCheckboxError(
        agreeCheckbox,
        "You must agree before we can process your message."
      );
      valid = false;
    }

    if (!valid) {
      event.preventDefault(); // stop submission
      return;
    }

    // If valid: here you would send data to the server.
    // For now, we just log to console and prevent real submit.
    event.preventDefault();
    console.log("Form is valid!");
    console.log({
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
      agree: agreeCheckbox.checked,
    });

    alert("✅ Your message has been sent (simulated)!");
    form.reset();
  });
});
```

---

## 🎧 Step 7 → Live validation while typing 

Optional but nice UX: clear errors when the user starts fixing the field.

Add at the end of the `DOMContentLoaded` callback:

```js
  // Live validation: clear errors when user types
  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim().length >= 2) {
      clearError(nameInput);
    }
  });

  emailInput.addEventListener("input", () => {
    if (emailInput.checkValidity()) {
      clearError(emailInput);
    }
  });

  messageInput.addEventListener("input", () => {
    if (messageInput.value.trim().length >= 10) {
      clearError(messageInput);
    }
  });

  agreeCheckbox.addEventListener("change", () => {
    if (agreeCheckbox.checked) {
      clearCheckboxError(agreeCheckbox);
    }
  });
```

---

## 📂 Step 8 → Final files overview 

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Contact Form with Tailwind</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">
      Contact us
    </h1>

    <form id="contactForm" novalidate class="space-y-4">
      <!-- Name -->
      <div class="flex flex-col space-y-1">
        <label for="name" class="text-sm font-medium text-gray-700">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minlength="2"
          class="w-full border border-gray-300 rounded px-3 py-2 text-sm
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your name"
        />
        <p id="name-error" class="hidden text-xs text-red-600"></p>
      </div>

      <!-- Email -->
      <div class="flex flex-col space-y-1">
        <label for="email" class="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          class="w-full border border-gray-300 rounded px-3 py-2 text-sm
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="you@example.com"
        />
        <p id="email-error" class="hidden text-xs text-red-600"></p>
      </div>

      <!-- Message -->
      <div class="flex flex-col space-y-1">
        <label for="message" class="text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          minlength="10"
          class="w-full border border-gray-300 rounded px-3 py-2 text-sm
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="How can we help you?"
        ></textarea>
        <p id="message-error" class="hidden text-xs text-red-600"></p>
      </div>

      <!-- Terms -->
      <div>
        <div class="flex items-start space-x-2">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            required
            class="mt-1 h-4 w-4 rounded border-gray-300
                   text-blue-600 focus:ring-blue-500"
          />
          <label for="agree" class="text-sm text-gray-700">
            I agree to the processing of my personal data.
          </label>
        </div>
        <p id="agree-error" class="hidden text-xs text-red-600 mt-1"></p>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-semibold py-2 rounded
               hover:bg-blue-700
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Send message
      </button>
    </form>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### `script.js`

```js
// ===== Helper functions =====
function setError(input, message) {
  const errorElement = document.getElementById(input.id + "-error");

  input.classList.remove(
    "border-gray-300",
    "focus:ring-blue-500",
    "focus:border-blue-500"
  );

  input.classList.add(
    "border-red-500",
    "focus:ring-red-500",
    "focus:border-red-500"
  );

  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.remove("hidden");
  }

  input.setAttribute("aria-invalid", "true");
}

function clearError(input) {
  const errorElement = document.getElementById(input.id + "-error");

  input.classList.remove(
    "border-red-500",
    "focus:ring-red-500",
    "focus:border-red-500"
  );
  input.classList.add(
    "border-gray-300",
    "focus:ring-blue-500",
    "focus:border-blue-500"
  );

  if (errorElement) {
    errorElement.textContent = "";
    errorElement.classList.add("hidden");
  }

  input.removeAttribute("aria-invalid");
}

function setCheckboxError(checkbox, message) {
  const errorElement = document.getElementById(checkbox.id + "-error");
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.remove("hidden");
  }
}

function clearCheckboxError(checkbox) {
  const errorElement = document.getElementById(checkbox.id + "-error");
  if (errorElement) {
    errorElement.textContent = "";
    errorElement.classList.add("hidden");
  }
}

// ===== Main logic =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const agreeCheckbox = document.getElementById("agree");

  form.addEventListener("submit", (event) => {
    let valid = true;

    clearError(nameInput);
    clearError(emailInput);
    clearError(messageInput);
    clearCheckboxError(agreeCheckbox);

    if (!nameInput.value.trim()) {
      setError(nameInput, "Name is required.");
      valid = false;
    } else if (nameInput.value.trim().length < 2) {
      setError(nameInput, "Name must be at least 2 characters.");
      valid = false;
    }

    if (!emailInput.value.trim() || !emailInput.checkValidity()) {
      setError(emailInput, "Please enter a valid email address.");
      valid = false;
    }

    if (!messageInput.value.trim()) {
      setError(messageInput, "Message is required.");
      valid = false;
    } else if (messageInput.value.trim().length < 10) {
      setError(messageInput, "Message must be at least 10 characters.");
      valid = false;
    }

    if (!agreeCheckbox.checked) {
      setCheckboxError(
        agreeCheckbox,
        "You must agree before we can process your message."
      );
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
      return;
    }

    event.preventDefault(); // simulate submit
    console.log("Form is valid!");
    console.log({
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
      agree: agreeCheckbox.checked,
    });
    alert("✅ Your message has been sent (simulated)!");
    form.reset();
  });

  // Live validation
  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim().length >= 2) {
      clearError(nameInput);
    }
  });

  emailInput.addEventListener("input", () => {
    if (emailInput.checkValidity()) {
      clearError(emailInput);
    }
  });

  messageInput.addEventListener("input", () => {
    if (messageInput.value.trim().length >= 10) {
      clearError(messageInput);
    }
  });

  agreeCheckbox.addEventListener("change", () => {
    if (agreeCheckbox.checked) {
      clearCheckboxError(agreeCheckbox);
    }
  });
});
```

---