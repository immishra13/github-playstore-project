# GitHub Play Store

An interactive, premium presentation website built for the **GitHub Play Store** Final Year Project. 

This presentation is designed to emulate high-end product showcases like Apple WWDC keynotes, GitHub Universe product launches, and Linear presentation styles.

## 🚀 Vision
**GitHub Play Store** resolves a common developer bottleneck: wasting time cloning repositories, installing dependencies, matching Node versions, setting environment variables, and compiling packages, only to discover the application fails to run. 

This platform allows users to paste any public GitHub repository URL, automatically analyze its framework and build tools, compile it in an isolated secure Docker sandbox, and generate a live, shareable, interactive preview URL in seconds.

---

## 🛠️ Technology Stack
* **Frontend**: React, Vite, Framer Motion, HTML5 Canvas Particle Network
* **Styling**: Custom CSS design variables, modern Typography (Outfit & Plus Jakarta Sans), and responsive glassmorphism containers
* **Icons**: Lucide React and custom vector SVGs

---

## 💻 Local Development Setup

To run the presentation website locally on your computer:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/immishra13/github-playstore-project.git
   cd github-playstore-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Compile production build**:
   ```bash
   npm run build
   ```

---

## 🖥️ Presentation Navigation
- **Next Slide**: Right Arrow key / Spacebar / Next control arrow
- **Previous Slide**: Left Arrow key / Backspace / Prev control arrow
- **Jump to Slide**: Click the slide list icon on the bottom controls bubble to view a slide index dropdown
- **Fullscreen Mode**: Toggle the zoom-out/zoom-in arrows icon in the controls capsule (or press Escape key to exit)
