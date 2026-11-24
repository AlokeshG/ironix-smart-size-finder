
# IRONIX – Smart Size Finder

A responsive sportswear e-commerce prototype developed as part of the IRONIX Round 02 Web Development Technical Assessment.

## Project Overview

The project demonstrates a Smart Size Finder experience that helps customers explore an illustrative clothing-size recommendation based on height, weight and preferred fit.

It also includes a sample product collection and interactive shopping cart.

## Features

- Responsive sportswear storefront.
- Product collection with sample product data.
- Smart Size Finder.
- Height and weight validation.
- Tight, Regular and Loose fit selection.
- Automatic product size selection from recommendations.
- Add-to-cart functionality.
- Product size selection.
- Cart quantity management.
- Remove products from cart.
- Automatic subtotal calculation.
- Cart persistence using browser localStorage.

## Second Proposed Feature

Smart Product Bundle Builder.

This feature is proposed in the assessment documentation but is not implemented in the current prototype.

## Technology Stack

- React.js
- Vite
- JavaScript
- Tailwind CSS
- Custom CSS
- Lucide React
- Browser localStorage

## Project Structure

```text
src/
  components/
    SizeFinder.jsx
  data/
    products.js
  App.jsx
  App.css
  index.css
  main.jsx

docs/
  FEATURE_PROPOSALS.md
  SHOPIFY_INTEGRATION.md
```

## Installation and Setup

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd ironix-smart-size-finder
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Size Recommendation Logic

The prototype uses illustrative BMI-based thresholds and preferred-fit adjustments to recommend S, M, L or XL.

These rules are demonstration logic, not an official IRONIX sizing chart. Production use requires validation against actual garment measurements.

## Shopify Integration

The current application is a standalone React prototype using sample product data.

The integration documentation explains how it could be adapted into Shopify using:

- Shopify Liquid.
- Product variants and metafields.
- JavaScript and CSS assets.
- Shopify Ajax Cart API.

The live IRONIX store and checkout are not connected.

## Assessment Documentation

- SEO + AI Search Optimization Report: prepared separately.
- Feature Proposals: `docs/FEATURE_PROPOSALS.md`
- Shopify Integration: `docs/SHOPIFY_INTEGRATION.md`

## Limitations

- Sample product data and imagery are used.
- No live payment processing.
- No live Shopify inventory connection.
- Size recommendations are illustrative.

## Developed By

Alokesh Ghosh

IRONIX – Round 02 Web Development Technical Assessment
