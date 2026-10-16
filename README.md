# Bubona Storefront

Headless Next.js storefront for the Bubona clothing brand.

Funded and developed on Solana via Bags.fm. Physical products sold through Shopify + Solana Pay.

## Features (v1)
- Brand landing page with "Wear Your Story" hero
- Shop page with product cards and color variants (Off White, Black, Teal, Sand, etc.)
- Product detail pages
- About & Token pages
- Prepared for Shopify Storefront API + Solana Pay checkout

## Quick Start
```bash
npm install
npm run dev
```

## Shopify Setup
1. Create a Shopify store
2. Generate a Storefront API access token
3. Add to `.env.local`:
   ```
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
   ```
4. Install the Solana Pay Shopify app for USDC payments on Solana.

## Deploy to Vercel
Import this repo on Vercel, add the env vars, and deploy. Site will be live.

Next: Connect real product data from Shopify and add real images.