# riff.fm 🎸

> **The ultimate Spotify taste analysis and comparison platform.**

riff.fm is a premium web application designed for high-fidelity music analytics. It allows users to dive deep into their Spotify listening history, visualize their habits, and compare their musical "soul" with friends through a professional-grade "Taste Match" engine.

![riff.fm Dashboard Mockup](https://raw.githubusercontent.com/Paranjayy/riff.fm/main/public/dashboard-preview.png)

## ✨ Features

### 📊 Professional Analytics
- **Top Artists & Tracks**: Explore your most-played content across different time ranges.
- **Listening Habits**: Visualized hour-by-hour breakdown of when you are most active.
- **Genre Distribution**: Breakdown of your musical preferences by sub-genre.

### 🤝 Taste Match
- **Compatibility Engine**: Compare your profile with any other user.
- **Soul Match Score**: A unique algorithm-based percentage showing how well your tastes align.
- **Shared Passions**: Highlights specific artists and genres you both love.

### 💎 Premium Experience
- **Glassmorphic Design**: Modern, sleek UI with vibrant Spotify-inspired accents.
- **Smooth Motion**: Powered by Framer Motion for a fluid, high-end feel.
- **Responsive**: Fully optimized for both desktop and mobile viewing.

## 🛠 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **CI/CD**: GitHub Actions + Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+)
- npm

### Installation
```bash
git clone https://github.com/Paranjayy/riff.fm.git
cd riff.fm
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

## 📦 Deployment

This project is configured for seamless deployment:
1. **GitHub Actions**: Every push to `main` triggers an automated build and lint check.
2. **Vercel**: Optimized `vercel.json` for static hosting and SPA routing.

To deploy manually via CLI:
```bash
vercel --prod
```

## 📝 Developer Notes
- **Data Source**: Initial data is extracted from local Spotify DOM snapshots for maximum privacy and detail.
- **Customization**: The design system is centralized in `src/index.css` using CSS tokens.

## 📄 License
MIT © 2026 riff.fm. Built with Antigravity.
