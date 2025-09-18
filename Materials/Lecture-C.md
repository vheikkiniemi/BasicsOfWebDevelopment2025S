# 🌐 Multimedia and Copyright Awareness

> [!NOTE]
> The material was created with the help of ChatGPT and Copilot.

## 🎬 Why Multimedia?

Modern websites are not just text. By adding images, audio, and video you can:

* Enrich your content and make it easier to understand
* Improve the user experience and engagement
* Support different learning styles (visual, auditory, etc.)
* Make your site more professional and appealing

---

### 🕰️ Early Web (1990s)

When the web was first created (HTML 1.0 / 2.0):

* Pages were **mostly text** with some simple images (`<img>`).
* There were **no native tags** for audio or video.
* Multimedia had to be opened separately (e.g., with external players like RealPlayer or Windows Media Player).

👉 This limited interactivity — websites looked static and plain.

---

### 💿 The Rise of Plugins (Late 1990s – 2000s)

Since HTML lacked native multimedia support, developers relied on **browser plugins**:

* **Flash (Adobe/Macromedia)**

  * Allowed animations, interactive menus, audio, and video.
  * Used `.swf` files embedded with `<object>` or `<embed>`.
  * Became the standard for online games, ads, and streaming (e.g., **YouTube originally ran on Flash**).

* Other plugins: **QuickTime, RealPlayer, Windows Media**.

⚠️ Problems with Flash and plugins:

* Required constant updates → security vulnerabilities.
* Heavy CPU/memory usage → slowed devices.
* Not accessible on mobile devices (Apple’s iOS blocked Flash).

---

### 🌐 HTML5 Revolution (2010s)

To replace plugins, **HTML5 introduced native multimedia elements**:

* `<audio>` – embed audio files directly in the page.
* `<video>` – embed video files directly without plugins.
* `<canvas>` – draw graphics, animations, and even games using JavaScript.

Benefits:

* Works across modern browsers without plugins.
* Mobile-friendly and more secure.
* Integrated with **CSS** for styling (e.g., controlling size, adding responsive layouts).

Example:

```html
<video controls width="500">
  <source src="example.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

---

### 🎨 Role of CSS in Multimedia

CSS has gradually improved **how multimedia is presented**:

* Responsive design → images/videos adapt to screen size.
* Centering and spacing with `flexbox` and `grid`.
* Filters and effects (`filter: grayscale(100%)` for images).
* Animations and transitions instead of Flash.

---

### 📱 Today and the Future

* **Flash officially ended in 2020** – browsers no longer support it.
* Multimedia is now built directly into the **web standards** (HTML5 + CSS + JavaScript).
* Modern sites use:

  * `<img>` + `<picture>` for responsive images
  * `<audio>` / `<video>` for playback
  * **Streaming services** (HLS, DASH) for large-scale video
  * **CSS + JS libraries** for animations (instead of Flash)

---

### 🔑 Why This Shift Happened

1. **Security** – Flash was a major attack vector.
2. **Performance** – Native HTML5 is faster and lighter.
3. **Accessibility** – Easier to add captions, `alt` text, ARIA labels.
4. **Mobile compatibility** – Works seamlessly on smartphones and tablets.
5. **Open standards** – No need for proprietary plugins.

---

👉 **Summary**:

* Early web = static text + images only.
* Plugins like **Flash** filled the gap for multimedia, but came with big problems.
* **HTML5 replaced Flash** with `<audio>`, `<video>`, `<canvas>`.
* CSS made multimedia **responsive, styled, and accessible**.
* Today, multimedia is **native, secure, mobile-friendly, and plugin-free**.

---

## ⚖️ Copyright and Creative Commons

* **Copyright** protects every creative work by default. You cannot simply use someone else’s image, music, or video without permission.
* **Creative Commons (CC) licenses** make it easier to share and use content legally.

Examples of common CC licenses:

* **CC BY** – You can use the work as long as you credit the author.
* **CC BY-SA** – Same as CC BY, but any derivative works must be shared with the same license.
* **CC BY-NC** – Non-commercial use only.
* **CC0** – The creator has waived rights → completely free to use.

👉 Recommended sources for CC-licensed media:

* [Unsplash](https://unsplash.com/) – free high-quality images
* [Pixabay](https://pixabay.com/) – images, videos, and music
* [Free Music Archive](https://freemusicarchive.org/) – audio tracks under CC licenses

---

## 🧱 Good Practices for Multimedia in HTML

When embedding multimedia:

* Always add **`alt` text** for images (accessibility + SEO).
* Use the **`controls` attribute** for audio and video so users can play/pause easily.
* Keep file sizes reasonable to avoid slow loading times.
* Clearly state the **source and license** of each media item on your page.

---

# **🧰 Video Streaming and Server Load**

The way you deliver video has a huge impact on both server load and user experience. Below are concrete approaches from the simplest to the most advanced, with practical tips (including ffmpeg commands and embedding examples). This connects to your material where you mentioned HLS/DASH streaming.

---

## **1. Plain MP4 + Progressive Download (lightweight, very simple)**

**When:** short clips, small groups, static hosting (e.g., Azure Static Web Apps).
**What to do:**

* Encode MP4 with H.264 + AAC, and **move the moov atom to the beginning** for fast playback start:

  ```bash
  ffmpeg -i input.mp4 -c:v libx264 -preset veryfast -movflags +faststart -c:a aac -b:a 128k output.mp4
  ```
* Ensure HTTP Range requests are enabled (browsers already use them). This reduces wasted transfers.
* Browsers can play this directly with the `<video>` element.

✅ Pros: very easy, no extra libraries.
❌ Cons: no adaptive quality, large files can overwhelm slow networks.

---

## **2. Pseudo-streaming / Byte-range Delivery**

This is basically the same as above but emphasizes **byte-range requests**. It allows seeking without downloading the entire file. Already supported by modern browsers.

---

## **3. Adaptive Streaming: **HLS** or **MPEG-DASH** (scalable, best for load)**

**Idea:** split the video into small segments (2–6s) and provide multiple qualities (bitrate ladder). The player automatically switches quality depending on the user’s network → **less buffering, less waste**.

* **HLS (HTTP Live Streaming):** Apple’s protocol, widely supported (native in Safari/iOS/macOS). Other browsers need **hls.js**.
* **MPEG-DASH:** ISO standard, widely supported in players like Shaka or dash.js.
* Both rely on **MSE (Media Source Extensions)** in the browser for buffering and adaptive switching.
* **Static hosting works fine:** Segments (`.ts` or fMP4) + a playlist (`.m3u8` for HLS or `.mpd` for DASH) can live on any static host or CDN. This reduces server load because CDNs cache segments efficiently.

### **Example: HLS Production with ffmpeg**

Create multiple quality levels (e.g., 1080p/720p/480p):

```bash
# 1080p
ffmpeg -i input.mp4 -vf scale=-2:1080 -c:v libx264 -b:v 5000k -c:a aac -ac 2 -ar 48000 \
  -hls_time 4 -hls_playlist_type vod -hls_segment_filename 1080p_%03d.ts 1080p.m3u8

# 720p
ffmpeg -i input.mp4 -vf scale=-2:720 -c:v libx264 -b:v 3000k -c:a aac -ac 2 -ar 48000 \
  -hls_time 4 -hls_playlist_type vod -hls_segment_filename 720p_%03d.ts 720p.m3u8

# 480p
ffmpeg -i input.mp4 -vf scale=-2:480 -c:v libx264 -b:v 1200k -c:a aac -ac 2 -ar 48000 \
  -hls_time 4 -hls_playlist_type vod -hls_segment_filename 480p_%03d.ts 480p.m3u8
```

Create a **master.m3u8** that points to all:

```text
#EXTM3U
#EXT-X-STREAM-INF:BANDWIDTH=5500000,RESOLUTION=1920x1080
1080p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=3300000,RESOLUTION=1280x720
720p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1400000,RESOLUTION=854x480
480p.m3u8
```

### **Embedding in the Browser**

* **Safari (iOS/macOS):**

  ```html
  <video src="master.m3u8" controls></video>
  ```
* **Chrome/Firefox/Edge (using hls.js):**

  ```html
  <video id="player" controls playsinline></video>
  <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
  <script>
    const video = document.getElementById('player');
    const src = '/path/to/master.m3u8';
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src; // Safari
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else {
      video.src = '/path/to/fallback.mp4'; // fallback
    }
  </script>
  ```

---

## **4. Live Streaming or Ultra-Low Latency**

* **Live with standard latency (5–10s):** HLS/DASH is fine. CMAF (fMP4) with shorter segments can reduce delay.
* **Ultra-low latency (sub-2s):** Consider **Low-Latency HLS (LL-HLS)** or **WebRTC**. HLS scales better with CDNs, while WebRTC is best for interactive sessions (but harder to manage).

---

## **5. Codec Choices**

* **H.264 (AVC):** best compatibility.
* **H.265/HEVC, VP9, AV1:** smaller files at same quality, but slower to encode and less universally supported.
  For adaptive streaming, offer **several bitrate ladders** and let the player pick dynamically.

---

## **6. Reduce Load with CDN + Caching**

Segment-based HLS/DASH is extremely cache-friendly: many users share the same segment requests, so the CDN absorbs most of the load. This avoids I/O spikes on the origin server.
Also, limit `preload` on `<video>` and use `poster` images to reduce unnecessary downloads.

---

## **🛠️ Quick Decision Tree**

* **Small clip / demo / static hosting:** plain MP4 (`faststart`) is enough.
* **Longer videos / mixed networks / larger audience:** HLS (recommended).
* **Interactive or very low-latency live:** LL-HLS or WebRTC.

---