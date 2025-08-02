# Airbnb Property Listing Web App

## 🏠 Overview

This is a modern, responsive web application inspired by Airbnb. It allows users to browse, filter, and view property listings around the world. The platform showcases popular listings with images, prices, ratings, and other key details.

## ✨ Features

- Hero section with background image and heading
- Filterable property categories (e.g., Top Villa, Self Checkin, etc.)
- Reusable Pill component for interactive filters
- Property listing cards displaying:
  - Image
  - Name
  - Price
  - Rating
  - Address
  - Offers (bed, shower, occupants)
- Responsive design for mobile and desktop
- Modular and scalable component architecture

## 🛠️ Tech Stack

- **Next.js** with **TypeScript**
- **React** functional components
- **Tailwind CSS** for styling
- **Next.js Image** optimization
- Interface-based props typing

## 📁 Folder Structure

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/onumaeleanyagift/alx-project-0x02-setup
