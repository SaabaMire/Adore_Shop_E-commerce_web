# Adora E-commerce

A React storefront for browsing fashion, beauty, and accessory products. The interface includes product pages, a persistent shopping cart, and a demo checkout flow.

## Getting started

### Requirements

- Node.js and npm

### Install and run

From the project folder, install the locked dependencies and start the Vite development server:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot reload. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. Run the build first. |
| `npm run lint` | Check the project with ESLint. |

## Features

- Home, Shop, About, Contact, product detail, and Cart pages.
- Add products to the cart, remove them, and review the total.
- Cart contents persist in the browser using `localStorage`.
- Responsive product layouts and a product carousel powered by Swiper.
- Tailwind CSS styling through the Tailwind Vite plugin.
- Demo checkout that displays a sample order confirmation.

## Project structure

```text
src/
  Components/     Shared header, footer, and cart UI
  Pages/          Home, Shop, About, Contact, and product detail pages
  context/        Shared shopping cart state
  assets/images/  Store and product images
  App.jsx         Routes and shared page layout
  main.jsx        React entry point and providers
```

## Current limitations

- Checkout is a front-end demo. It does not charge a payment method or submit an order to a server.
- The contact form displays a confirmation in the page, but it does not send email or save messages.
- Product listings and prices are currently maintained in the front end; there is no product database or backend.

## Tech stack

- React
- Vite
- React Router
- Tailwind CSS
- Swiper
