# 👁️ Effective Use of Images and Videos in Websites

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

## 🌍 Overview of Common **Image File Types**

| Format          | Type                 | Typical Use                                  | Pros                                              | Cons                                                      |
| --------------- | -------------------- | -------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------- |
| **JPEG / JPG**  | Raster               | Photos, product images                       | Small file size, wide support                     | Loses quality on repeated saves, not good for sharp edges |
| **PNG**         | Raster               | Logos, UI elements, images with transparency | Supports transparency, lossless                   | Larger file sizes than JPEG                               |
| **GIF**         | Raster (8-bit)       | Simple animations, icons                     | Animated, tiny                                    | Limited colors (256), outdated for photos                 |
| **SVG**         | Vector               | Icons, logos, illustrations                  | Infinitely scalable, editable via CSS             | Not ideal for photos, larger if very detailed             |
| **WEBP**        | Raster               | General-purpose web images                   | Combines best of JPEG + PNG (small + transparent) | Slightly slower decoding on older browsers                |
| **AVIF**        | Raster (next-gen)    | High-quality photos, hero images             | Extremely small, high fidelity                    | Still limited browser support in some environments        |
| **HEIC / HEIF** | Raster (mobile, iOS) | Smartphone photos                            | Great compression and quality                     | Not widely supported by browsers                          |
| **TIFF**        | Raster               | Professional editing                         | Very high quality                                 | Not for web — huge files                                  |

### ✅ Recommended for Web

* **Use WebP or AVIF** for most modern browsers.
* **Fallback** to JPEG or PNG for older browsers.
* **SVG** for vector graphics and icons.

> 🧠 **Rule of thumb:** Photos → `WebP/JPEG/AVIF`;
> Logos & icons → `SVG`;
> Transparent overlays → `PNG`.

---

## 🎬 Overview of Common **Video File Types**

| Format                 | Container Type | Typical Use               | Pros                           | Cons                                       |
| ---------------------- | -------------- | ------------------------- | ------------------------------ | ------------------------------------------ |
| **MP4 (H.264)**        | Container      | General-purpose web video | High compatibility, small file | May require licensing for encoding         |
| **WEBM (VP8/VP9/AV1)** | Container      | Modern browsers           | Open format, great compression | Not supported by older Safari/iOS versions |
| **OGV (Theora)**       | Container      | Open source projects      | Patent-free                    | Outdated, poor compression                 |
| **MOV**                | Container      | Apple ecosystem           | High quality                   | Large size, poor web compatibility         |
| **AVI**                | Container      | Legacy format             | Supported in old software      | Inefficient compression                    |
| **MKV**                | Container      | Streaming and archiving   | Flexible and open              | Not natively supported in browsers         |

### ✅ Recommended for Web

* **Primary:** MP4 (H.264 codec)
* **Alternative:** WEBM (VP9/AV1 codec)
* Provide **both formats** for full browser compatibility.
* Use short clips (< 10 MB) for hero backgrounds or demos.

> 🧠 **Rule of thumb:** Always include a **poster image** and optionally captions via `<track>`.

---

## 💡 Best Practices for Images & Video on the Web

### 🖼️ Images

1. **Resize** before uploading (never full-resolution DSLR photos).
2. **Compress** using tools like TinyPNG, Squoosh, or ImageOptim.
3. **Use `srcset` & `sizes`** for responsive delivery.
4. **Lazy-load** below-the-fold images (`loading="lazy"`).
5. **Serve modern formats** (WebP/AVIF) with fallbacks.
6. **Optimize color profiles** (sRGB) and strip EXIF metadata.
7. **Provide alt text** for accessibility.

### 🎥 Videos

1. **Compress** with HandBrake, FFmpeg, or similar.
2. **Keep bitrate moderate** (2–4 Mbps for 1080p).
3. **Add multiple formats** (MP4 + WEBM).
4. **Mute and loop** only decorative videos.
5. **Use `<poster>`** to avoid black flash before playback.
6. **Avoid auto-play with sound** — breaks accessibility rules.
7. **Respect user preferences:**

   * Use `prefers-reduced-motion` media query.
   * Offer pause controls if looping.

---

## 🧰 Editing Image & Video Files for Web Use

### 🖼️ Image Editing

Common tools:

* **Online:** [Squoosh](https://squoosh.app), [Canva](https://canva.com), [Pixlr](https://pixlr.com)
* **Desktop:** Photoshop, GIMP, Affinity Photo

Steps:

1. **Crop** to focus area (e.g., 16:9 hero banner, 1:1 thumbnails).
2. **Resize** to target width (e.g., 1920 px for hero, 800 px for gallery).
3. **Adjust compression:**

   * JPEG/WebP at ~75–85 % quality.
   * PNG optimized with lossless compression.
4. **Remove metadata** (GPS, camera info).
5. **Export multiple resolutions** if needed (for `srcset`).

### 🎞️ Video Editing

Tools:

* **Online:** [Clideo](https://clideo.com), [Kapwing](https://www.kapwing.com)
* **Desktop:** DaVinci Resolve, Shotcut, Premiere Pro, FFmpeg

Steps:

1. **Trim** unnecessary parts to reduce size.
2. **Scale down resolution** (1080p → 720p for smaller sites).
3. **Compress** with FFmpeg:

   ```bash
   ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset veryslow -acodec aac -b:a 128k output.mp4
   ```
4. **Generate poster frame:**

   ```bash
   ffmpeg -i video.mp4 -ss 00:00:01.000 -vframes 1 poster.jpg
   ```
5. **Add subtitles** if speech is included:

   ```html
   <track kind="captions" src="captions/video.en.vtt" srclang="en" label="English">
   ```
6. **Export** both `.mp4` and `.webm` formats if possible.

---

## 🧭 Quick Summary — Modern Workflow

✅ **Preferred image formats:**
→ AVIF → WebP → JPEG/PNG fallback

✅ **Preferred video formats:**
→ MP4 (H.264) → WEBM (VP9/AV1 fallback)

✅ **Optimization pipeline example:**

1. Edit in desktop/online tool →
2. Compress with Squoosh or FFmpeg →
3. Generate responsive variants →
4. Upload →
5. Test in browser with DevTools →
6. Validate `alt`, `poster`, and performance (Lighthouse).

---

## ✨ Final Advice

> 🌈 Keep visuals light, responsive, and accessible.
> 🎯 The goal isn’t *maximum quality* — it’s *optimal quality for fast loading*.
> ⚡ A beautiful, fast, accessible experience always beats an uncompressed masterpiece that loads in 10 seconds.

---

# 🎬 Using Images & Video with Tailwind

## 🌟 Why Tailwind instead of plain HTML + CSS?

**The short answer:** Tailwind gives you a fast, consistent, and scalable way to style media without context-switching between HTML and multiple CSS files. You compose styles with small utility classes, which are easy to read, refactor, and keep consistent across a team.

### ⚖️ Quick comparison

|                | Plain HTML + CSS                                               | Tailwind CSS                                                                    |
| -------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| ⏱️ Speed       | Write HTML, then switch to CSS, name classes, manage selectors | Style inline with **composable utilities**—no naming overhead                   |
| 🧩 Consistency | Easy to drift (different devs, different spacing/colors)       | **Design tokens** enforced via config; same spacing/typography everywhere       |
| 🏗️ Scale      | CSS grows complex (specificity, dead code, regressions)        | **Purge/Content scanning** removes unused CSS; utilities avoid specificity wars |
| 📱 Responsive  | Custom media queries per component                             | **Breakpoint prefixes** (`sm: md: lg:`) on the element                          |
| ♿ A11y & UX    | Re-implement patterns repeatedly                               | **Battle-tested utilities** for focus rings, contrast, motion-reduction         |
| 🎛️ Variants   | Write custom rules for hover/dark/motion                       | **`hover:` `focus:` `dark:` `motion-reduce:`** built in                         |

**When Tailwind might not be ideal:**

* Tiny one-off page with minimal styling.
* You need a strict BEM or CSS-Modules setup for a legacy codebase.
* Heavy custom animations or art-directed layouts where bespoke CSS reads cleaner.

---

# 🖼️ Images & 🎞️ Video with Tailwind — A Practical Guide

## 🧰 Image essentials

```html
<img
  src="/images/cabin-640.jpg"
  alt="Lakeside cabin at sunset"
  class="w-full h-auto rounded-xl shadow"
/>
```

**Utilities you’ll use a lot**
`w-full`, `h-auto`, `max-w-sm`, `aspect-square`, `aspect-video`, `object-cover`, `object-contain`, `rounded-lg`, `shadow`, `ring-1 ring-black/10`, `transition`, `hover:opacity-90`, `md:grid-cols-2`.

**A11y tip:** Always meaningful `alt` (or `alt=""` if purely decorative). Respect motion with `motion-safe:`.

---

## 📶 Properly responsive images (`srcset` + `sizes`)

```html
<img
  src="/img/hero-1280.jpg"
  srcset="/img/hero-640.jpg 640w,
          /img/hero-960.jpg 960w,
          /img/hero-1280.jpg 1280w,
          /img/hero-1920.jpg 1920w"
  sizes="(min-width: 1024px) 960px, 100vw"
  alt="Drone flying above coast"
  class="w-full h-auto object-cover"
/>
```

Use when you have the **same** image in multiple resolutions; the browser picks the best match.

---

## 🖼️➡️📱 Art direction (`<picture>`)

```html
<picture>
  <source type="image/avif" srcset="/img/drone-wide.avif" media="(min-width:1024px)">
  <source type="image/webp" srcset="/img/drone-wide.webp" media="(min-width:1024px)">
  <img src="/img/drone-mobile.jpg" alt="Drone close-up in flight" class="w-full h-auto object-cover" />
</picture>
```

Different crops per breakpoint (tight mobile crop, wide desktop banner).

---

## 🔲 Aspect ratios (no hacks)

```html
<div class="aspect-video">
  <img src="/img/city.jpg" alt="City skyline" class="w-full h-full object-cover rounded-lg" />
</div>

<div class="aspect-[4/3]">
  <img src="/img/product.jpg" alt="Smart lock" class="w-full h-full object-contain" />
</div>

<div class="aspect-square">
  <img src="/img/avatar.png" alt="Profile photo" class="w-full h-full object-cover rounded-full" />
</div>
```

---

## 🧱 Background images

```html
<section class="bg-[url('/img/hero-gradient.jpg')] bg-cover bg-center md:bg-fixed">
  <div class="mx-auto max-w-6xl px-6 py-24 text-white">
    <h1 class="text-4xl font-bold drop-shadow">Rent Your Next Adventure</h1>
  </div>
</section>
```

Useful classes: `bg-cover`, `bg-contain`, `bg-center`, `bg-no-repeat`, `bg-fixed`.

---

## 💤 Lazy loading & decoding

```html
<img
  src="/img/gallery-01.jpg"
  alt="Interior of rental van"
  loading="lazy"
  decoding="async"
  class="w-full h-auto rounded-md"
/>
```

* `loading="lazy"` for below-the-fold images
* `decoding="async"` to avoid blocking painting
* For the **hero/LCP** image consider preloading and `fetchpriority="high"`.

---

## 🃏 Cards & overlays

```html
<article class="group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
  <img src="/img/drone-4k.jpg" alt="4K camera drone"
       class="w-full h-56 object-cover transition group-hover:scale-105" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
  <div class="absolute bottom-0 p-4 text-white">
    <h3 class="text-lg font-semibold">4K Drone</h3>
    <p class="text-sm opacity-90">Up to 45 min flight time</p>
  </div>
</article>
```

---

## 🧩 Gallery grids

```html
<section class="mx-auto max-w-6xl px-6">
  <h2 class="text-2xl font-semibold mb-4">Fleet Gallery</h2>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <img src="/img/van-1.jpg" alt="Campervan model A" class="w-full aspect-square object-cover rounded-lg" />
    <img src="/img/van-2.jpg" alt="Campervan model B" class="w-full aspect-square object-cover rounded-lg" />
  </div>
</section>
```

**Masonry?** Use `columns-2 md:columns-3 lg:columns-4 space-y-4` and `break-inside-avoid`.

---

## 🌙 Dark-mode images

```html
<img src="/img/logo-light.svg" alt="Logo" class="dark:hidden h-10 w-auto" />
<img src="/img/logo-dark.svg"  alt="Logo (dark)" class="hidden dark:block h-10 w-auto" />
```

Or switch via `<picture>` using `prefers-color-scheme`.

---

## 🎥 Video basics (`<video>`)

```html
<figure class="max-w-3xl mx-auto">
  <div class="aspect-video overflow-hidden rounded-xl shadow">
    <video controls preload="metadata" poster="/video/van-tour-poster.jpg" class="w-full h-full object-cover">
      <source src="/video/van-tour.webm" type="video/webm">
      <source src="/video/van-tour.mp4"  type="video/mp4">
      <track kind="captions" src="/captions/van-tour.en.vtt" srclang="en" label="English">
      Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
  <figcaption class="mt-2 text-sm text-gray-600">Full interior tour with specs and storage tips.</figcaption>
</figure>
```

**Common props:** `controls`, `muted autoplay loop playsinline`, `poster`, `preload="metadata"`, `track` for captions.

**Respect motion:** guard fancy effects with `motion-reduce:` variants.

---

## 🖼️ + 🎥 Background video hero

```html
<section class="relative isolate">
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div class="absolute inset-0 bg-black/40"></div>
    <video class="min-w-full min-h-full object-cover" autoplay muted loop playsinline poster="/video/hero-fallback.jpg">
      <source src="/video/hero.webm" type="video/webm">
      <source src="/video/hero.mp4"  type="video/mp4">
    </video>
  </div>

  <div class="mx-auto max-w-5xl px-6 py-28 text-white">
    <h1 class="text-4xl md:text-6xl font-bold drop-shadow">Your Weekend, Upgraded</h1>
    <p class="mt-4 max-w-prose text-white/90">Book vans, drones, and sports gear in minutes.</p>
    <div class="mt-8 flex gap-3">
      <a href="#catalog" class="inline-flex items-center rounded-xl bg-white/10 px-5 py-3 backdrop-blur ring-1 ring-white/20 hover:bg-white/20 transition">Browse catalog</a>
      <a href="#about"   class="inline-flex items-center rounded-xl bg-white px-5 py-3 text-gray-900 hover:bg-gray-100 transition">How it works</a>
    </div>
  </div>
</section>
```

Treat background video as decorative; ensure text remains readable without it.

---

## 🧱 Media + content components

### a) Media object

```html
<article class="grid gap-6 md:grid-cols-[1fr_2fr] items-center">
  <img src="/img/sup-board.jpg" alt="Inflatable SUP board" class="w-full aspect-[4/3] object-cover rounded-xl shadow" />
  <div>
    <h3 class="text-xl font-semibold">Inflatable SUP Board</h3>
    <p class="mt-2 text-gray-600">Stable, lightweight, and easy to transport. Perfect for beginners.</p>
    <ul class="mt-3 text-sm text-gray-500 space-y-1">
      <li>⏱️ Max rental: 48h</li>
      <li>⚖️ Weight limit: 120 kg</li>
      <li>🧰 Includes pump & paddle</li>
    </ul>
  </div>
</article>
```

### b) Video card

```html
<article class="group relative rounded-2xl overflow-hidden ring-1 ring-black/10">
  <div class="aspect-video">
    <video class="w-full h-full object-cover" preload="metadata" poster="/video/tent.jpg">
      <source src="/video/tent-setup.mp4" type="video/mp4">
    </video>
  </div>
  <div class="p-4">
    <div class="text-xs uppercase tracking-wide text-emerald-700/90">Tutorial</div>
    <h3 class="mt-1 font-semibold">Set up the Dome Tent (3 min)</h3>
    <button class="mt-3 inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition">
      Watch
    </button>
  </div>
</article>
```

---

## 🚀 Performance checklist

* 🖼️ Prefer **AVIF/WebP**, fallback to JPEG/PNG as needed
* 🧠 Use **`srcset` + `sizes`**; `<picture>` for art direction
* ✂️ Compress aggressively; reserve space via `aspect-*` or intrinsic `width`/`height` to avoid CLS
* 💤 Lazy-load non-critical images; **preload** the LCP image; consider `fetchpriority="high"`
* 🎞️ Provide multiple codecs (MP4/WebM/AV1 if available) and a **poster** frame
* 🌗 Support **dark mode** alternatives for logos/illustrations

---

## ♿ Accessibility & UX rules

* ✅ Meaningful `alt` text; decorative images `alt=""`
* 📝 Use `<figure>` + `<figcaption>` where helpful
* 🔤 Provide captions (`<track>`) and transcripts for important videos
* 🌀 Respect `prefers-reduced-motion`; provide static fallbacks
* 🌓 Maintain contrast (overlays like `bg-black/40` help)

---

## 🧯 Common pitfalls & quick fixes

* Stretched photos ➜ `object-cover` + `aspect-*`
* Layout shift ➜ reserve space with `aspect-*` or `width`/`height`
* Blurry on retina ➜ 2× assets in `srcset`
* Illegible hero text ➜ gradient overlay `from-black/60`
* Background-only info ➜ include semantic text too

---

## ⚡ Ready-to-paste snippets

**Hero image (mobile) → video (desktop)**

```html
<section class="relative">
  <picture>
    <source media="(min-width:1024px)" srcset="/video/hero-poster.jpg">
    <img src="/img/hero-mobile.jpg" alt="Couple by campervan" class="w-full h-[60vh] object-cover" />
  </picture>

  <div class="hidden lg:block absolute inset-0 -z-10">
    <video class="w-full h-full object-cover" autoplay muted loop playsinline poster="/video/hero-poster.jpg">
      <source src="/video/hero.webm" type="video/webm">
      <source src="/video/hero.mp4"  type="video/mp4">
    </video>
    <div class="absolute inset-0 bg-black/35"></div>
  </div>

  <div class="absolute inset-0 grid place-items-center p-6">
    <div class="text-center text-white drop-shadow">
      <h1 class="text-4xl md:text-6xl font-bold">Rent. Explore. Repeat.</h1>
      <p class="mt-3 text-white/90">Gear for every weekend plan.</p>
    </div>
  </div>
</section>
```

**Avatar stack**

```html
<ul class="flex -space-x-3">
  <li><img src="/img/u1.jpg" alt="Aisha" class="h-10 w-10 rounded-full ring-2 ring-white" /></li>
  <li><img src="/img/u2.jpg" alt="Luca"  class="h-10 w-10 rounded-full ring-2 ring-white" /></li>
  <li><img src="/img/u3.jpg" alt="Maya"  class="h-10 w-10 rounded-full ring-2 ring-white" /></li>
</ul>
```

**Hover zoom gallery item**

```html
<a class="group block overflow-hidden rounded-xl">
  <img src="/img/kayak.jpg" alt="Touring kayak"
       class="w-full h-64 object-cover transition group-hover:scale-105" />
</a>
```

---