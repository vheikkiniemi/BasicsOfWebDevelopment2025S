# ⭐ **Summary of Tailwind Classes Used in the example page**

---

# 🎨 **1. Colour & Background Utilities**

### **Background colours**

* `bg-brand-dark` — main dark background (#1e1e1e)
* `bg-brand-primary` — main accent (#e10e49)
* `bg-brand-light` — white (#ffffff) for text/icons
* Transparent/surface layers:

  * `bg-black/40`
  * `bg-brand-blue/20`
  * `bg-brand-orange/15`
  * `bg-brand-green/30`
  * `bg-brand-rose/30`

### **Gradients and overlays**

* `bg-gradient-to-b`, `bg-gradient-to-br`
* `from-brand-blue/20`, `to-brand-orange/20`
* Overlay texture using custom CSS background

### **Text colours**

* `text-brand-light`, `text-brand-light/70`, `text-brand-light/60`
* `text-brand-primary` for interactive elements
* Support highlights:

  * `text-brand-orange`
  * `text-brand-blue`
  * `text-brand-green`
  * `text-brand-rose`

### **Border colours**

* `border-brand-light/10`
* `border-brand-blue/60`
* `border-brand-orange/60`
* `border-slate-800` / `border-slate-800/70`

---

# 📐 **2. Layout & Structure Utilities**

### **Flexbox**

* `flex`, `flex-col`, `flex-1`
* `items-center`, `justify-between`
* `justify-center`, `flex-wrap`

### **Grid**

* `grid`, `gap-6`
* `md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]`
  → Main content + sidebar on larger screens
* Mobile-first stacking defaults

### **Spacing**

* Padding: `p-3`, `p-5`, `p-6`, `px-4`, `py-3`, `py-6`
* Margins: `mt-1`, `mt-3`, `mt-4`, `mb-3`, `mx-auto`
* Gap: `gap-3`, `gap-4`, `gap-6`

### **Width & height**

* `max-w-6xl` (content width)
* `w-full`, `h-9`, `h-8`

---

# 🔳 **3. Borders, Radius & Shadows**

### **Borders**

* `border`, `border-b`, `border-t`
* Colour via extended brand palette

### **Rounded corners**

* `rounded-full`
* `rounded-xl`, `rounded-2xl`, `rounded-3xl`
  → Used on cards, buttons, and highlights

### **Shadows**

* `shadow-soft` (custom)
  → Soft, deep shadow for “glass” style elements

---

# ✨ **4. Typography Utilities**

### **Font weights**

* `font-semibold`, `font-medium`, `font-bold`

### **Text sizes**

* `text-xs`, `text-sm`, `text-lg`, `text-2xl`

### **Text style**

* `uppercase`
* `tracking-wide`, `tracking-[0.22em]`
  → Used for labels and section headers
* `text-brand-light/80`
  → Softened typography for readability

---

# 🧭 **5. Navigation & Interaction**

### **Links**

* `hover:text-brand-primary`
* `transition-colors`
  → Smooth colour transition on hover

### **Buttons**

* CTAs:

  * `rounded-full bg-brand-primary text-white px-4 py-1.5`
  * `hover:brightness-110`
* Sidebar tags:

  * `rounded-full px-2 py-0.5`

### **Mobile nav**

* `md:hidden` (show on mobile)
* `hidden md:flex` (desktop nav)

---

# 🧊 **6. Card & Container Components**

Common card structure uses:

* `rounded-2xl`
* `border border-brand-light/10`
* `bg-black/40`
* `p-5` or `p-6`
* `shadow-soft`

Sidebar cards use supporting colours:

* Blue card: `border-brand-blue/60 bg-brand-blue/20`
* Orange card: `border-brand-orange/60 bg-brand-orange/15`

---

# 🧪 **7. Responsive & Utility Classes**

* `md:px-6`, `md:py-8`, `md:grid-cols-[...]`
* `md:inline-flex`, `md:flex-row`, `md:hidden`
* `backdrop-blur` — adds modern glassmorphism
* `mix-blend-soft-light` — subtle background texture
* `pointer-events-none` — used on background layers only

---

# 📌 **8. Semantic Structure Combined With Tailwind**

The layout uses semantic HTML tags:

* `<header>`
* `<nav>`
* `<main>`
* `<article>`
* `<aside>`
* `<footer>`

…with Tailwind classes applied directly to each section, showing the **utility-first approach** while keeping HTML meaningful and SEO-friendly.

---

# 🧭 **High-level summary for teaching**

The layout demonstrates:

* A **dark theme** with bright brand colour accents
* A **2-column responsive structure** (content + aside)
* **Glass-like surfaces** using transparency + blur
* **Consistent spacing** with Tailwind utilities
* Clear application of **primary + supporting brand colours**

---