# AI Look Generator

> **Better drip. Less overthinking.**

AI Look Generator is an AI-powered fashion recommendation system that generates personalized outfit ideas based on your style, mood, color preferences, fashion trends, and keywords.

The project combines **Generative AI, fashion intelligence, and modern frontend design** to turn a simple style preference into a complete outfit concept and visual moodboard.

---

## Overview

Choosing an outfit can be surprisingly difficult.

AI Look Generator solves this by allowing users to describe the kind of look they want and generating a complete fashion recommendation around it.

Users can select:

- Fashion trend
- Gender
- Color palette
- Vibe
- Style modifiers
- Keywords

The system then generates a personalized look containing outfit recommendations, styling details, and visual inspiration.

### Example

**Input**

```text
Trend: Streetwear
Vibe: Edgy + Minimal
Palette: Black & Grey
Keywords: Oversized, sneakers, layered
```

**Output**

```text
Oversized charcoal bomber jacket
+
Boxy black graphic tee
+
Relaxed-fit cargo trousers
+
Chunky monochrome sneakers
+
Minimal silver accessories
```

---

## Features

### AI Outfit Generation

Generate personalized outfits using an AI-powered recommendation pipeline.

### Trend-Based Styling

Choose from multiple contemporary fashion aesthetics:

- Streetwear
- Y2K Revival
- Quiet Luxury
- Model Off-Duty
- 90s Minimalism
- Indie Sleaze
- Grunge
- Gorpcore
- Office Siren
- Mob Wife
- Athleisure
- Workwear

### Custom Style Controls

Customize the generated look using:

- Gender
- Color palette
- Vibe
- Fashion keywords
- Trend presets

### Visual Moodboards

Generate a visual representation of the recommended aesthetic using fashion imagery.

### Save Looks

Save generated outfits so they can be revisited later.

### Responsive Interface

Designed for desktop and mobile experiences with a modern dark-themed interface.

### Motion & Interaction

Uses animation and micro-interactions to make the generation experience feel dynamic rather than like a traditional form.

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM

### Backend

- Node.js
- Express.js
- TypeScript
- Zod
- dotenv

### AI / Data

- LLM-based outfit generation
- Prompt engineering
- Fashion trend presets
- Image/moodboard retrieval

### APIs

- AI/LLM API
- Unsplash API for fashion imagery

### Development Tools

- Git
- GitHub
- VS Code
- Postman
- npm

---

## System Architecture

```text
                    ┌──────────────────────┐
                    │       User           │
                    │ Style Preferences    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React Frontend     │
                    │                      │
                    │ Trend Selection       │
                    │ Vibe Selection        │
                    │ Color Palette         │
                    │ Keywords              │
                    └──────────┬───────────┘
                               │
                         HTTP / REST
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Express Backend    │
                    │                      │
                    │ Request Validation   │
                    │ Prompt Builder       │
                    │ API Controller       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   AI / LLM Layer     │
                    │                      │
                    │ Fashion Reasoning    │
                    │ Outfit Generation    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │  Generated Look      │
                    │                      │
                    │ Outfit Description   │
                    │ Styling Details      │
                    │ Accessories          │
                    └──────────┬───────────┘
                               │
                     ┌─────────┴─────────┐
                     ▼                   ▼
             ┌───────────────┐   ┌───────────────┐
             │ Image Search  │   │ Saved Looks   │
             │ / Moodboard   │   │   Storage     │
             └───────────────┘   └───────────────┘
```

---

## Project Structure

```text
ai-look-generator/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── VibeSelector.tsx
│   │   │   └── LookCard.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Generator.tsx
│   │   │   └── Results.tsx
│   │   │
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── prompt-builder/
│   │   └── server.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

---

# Getting Started

## Prerequisites

Make sure you have the following installed:

```bash
Node.js >= 18
npm >= 9
Git
```

You will also need API credentials for the services used by the application.

---

## Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-look-generator.git

cd ai-look-generator
```

---

# Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
.env
```

Add the required environment variables:

```env
VITE_API_URL=http://localhost:5000
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_key
```

Start the development server:

```bash
npm run dev
```

The frontend should now be available at:

```text
http://localhost:5173
```

---

# Backend Setup

Open another terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create:

```text
.env
```

Add your environment variables:

```env
PORT=5000

OPENAI_API_KEY=your_api_key

UNSPLASH_ACCESS_KEY=your_unsplash_key
```

Start the backend:

```bash
npm run dev
```

The API should now be running on:

```text
http://localhost:5000
```

---

# API

## Generate Look

```http
POST /api/generate-look
```

### Request

```json
{
  "trend": "Streetwear",
  "gender": "Unisex",
  "palette": "Black & Grey",
  "vibe": [
    "Edgy",
    "Minimal"
  ],
  "keywords": [
    "Oversized",
    "Layered",
    "Sneakers"
  ]
}
```

### Response

```json
{
  "success": true,
  "look": {
    "title": "Urban Monochrome",
    "description": "A minimal streetwear look...",
    "items": [
      "Oversized charcoal bomber",
      "Black boxy t-shirt",
      "Relaxed cargo trousers",
      "Chunky sneakers"
    ],
    "accessories": [
      "Silver chain",
      "Minimal watch"
    ]
  }
}
```

---

# Prompt Engineering

The backend uses a dedicated prompt-building layer to transform structured user preferences into an AI-ready prompt.

Conceptually:

```text
User Preferences
       │
       ▼
┌──────────────────┐
│ Prompt Builder   │
└────────┬─────────┘
         │
         ▼
 Fashion Context
 + Trend Context
 + User Preferences
 + Styling Constraints
         │
         ▼
      LLM API
         │
         ▼
 Structured Outfit
```

This separation makes it easier to modify the AI behavior without changing the frontend.

---

# Design Philosophy

AI Look Generator is intentionally designed around a **modern fashion-tech aesthetic**.

The interface focuses on:

- Dark visual language
- Strong typography
- High-contrast UI
- Minimal but expressive interactions
- Fashion-editorial visual hierarchy
- Motion-driven feedback
- Neo-brutalist influences without sacrificing usability

The goal is to make the product feel closer to a **fashion discovery platform** than a conventional AI chatbot.

---

# Screens

Add screenshots of your application here.

```text
screenshots/
├── home.png
├── generator.png
├── results.png
└── saved-looks.png
```

Example:

### Home

![Home Screen](screenshots/home.png)

### Look Generator

![Look Generator](screenshots/generator.png)

### Generated Look

![Generated Look](screenshots/results.png)

---

# Current Workflow

```text
1. User opens the application
              ↓
2. Selects fashion trend
              ↓
3. Selects gender / styling preference
              ↓
4. Chooses color palette
              ↓
5. Selects vibe modifiers
              ↓
6. Adds keywords
              ↓
7. Clicks "Generate Look"
              ↓
8. Backend validates request
              ↓
9. Prompt Builder creates AI prompt
              ↓
10. LLM generates outfit
              ↓
11. Image API retrieves visual references
              ↓
12. Frontend displays generated look
              ↓
13. User can save the look
```

---

# Roadmap

The project is being developed toward a more complete AI fashion intelligence platform.

### Phase 1 — Core Generator

- [x] Fashion trend presets
- [x] User preference selection
- [x] Outfit generation
- [x] Backend API
- [x] Prompt builder
- [x] Moodboard imagery
- [x] Save generated looks

### Phase 2 — AI Fashion Intelligence

- [ ] Fashion trend intelligence
- [ ] Outfit rating
- [ ] AI fashion roast
- [ ] Outfit compatibility scoring
- [ ] Personalized style profile
- [ ] Better recommendation ranking

### Phase 3 — Computer Vision

- [ ] Upload outfit image
- [ ] Clothing detection
- [ ] Color analysis
- [ ] Outfit classification
- [ ] Style similarity
- [ ] AI outfit evaluation

### Phase 4 — AI Try-On

- [ ] Virtual try-on
- [ ] User image processing
- [ ] Garment replacement
- [ ] Pose-aware generation
- [ ] Personalized visual previews

### Phase 5 — Fashion Intelligence Platform

```text
User
 │
 ├── Generate Look
 │
 ├── Analyze Outfit
 │
 ├── Discover Trends
 │
 ├── AI Try-On
 │
 └── Personal Style Profile
          │
          ▼
    Fashion AI Engine
          │
    ┌─────┼─────┐
    ▼     ▼     ▼
  LLM    CV   Trend Data
```

---

# Future Vision

AI Look Generator is intended to evolve from a simple outfit generator into a **personalized AI fashion intelligence system**.

The long-term vision is to combine:

```text
Generative AI
      +
Computer Vision
      +
Fashion Trends
      +
Recommendation Systems
      +
Personalization
      +
Visual Search
```

to create an AI stylist that understands not only what a user wants to wear, but also **why a particular style works for them**.

---

# What I Learned

This project explores practical implementation of:

- React application architecture
- REST API development
- TypeScript
- Prompt engineering
- LLM integration
- API integration
- Input validation
- Component-based UI design
- State management
- Responsive design
- AI product development
- Git/GitHub workflows

---

# Contributing

Contributions, suggestions, and improvements are welcome.

```bash
git checkout -b feature/your-feature

git add .

git commit -m "feat: add your feature"

git push origin feature/your-feature
```

Then open a Pull Request.

---

# License

This project is currently intended for educational and experimental purposes.

Add your preferred license here, such as MIT, if you decide to open-source the project.

---

# Author

**Your Name**

B.Tech CSE — Artificial Intelligence & Machine Learning

Interested in:

```text
AI/ML
Generative AI
Computer Vision
Agentic AI
Frontend Engineering
Creative Technology
Fashion Technology
```

---

## Project Status

**Currently in active development.**

AI Look Generator is being developed as an exploration of how **Generative AI + Computer Vision + Fashion Intelligence** can be combined to build a practical consumer-facing AI product.

> **AI Look Generator — Better drip. Less overthinking.**
