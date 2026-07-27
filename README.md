# Hug Your Soul Brand Site

Static brand website framework for a crystal and mineral small business.

## Pages

- `/` - home
- `/about` - brand story
- `/collections` - collection entrances
- `/guides` - crystal care and knowledge
- `/contact` - buying and contact notes

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The site is intentionally static. Product inventory, checkout, payments, and order management should live on the chosen commerce platform.

## Commerce Routing Model

The site should not become a second product backend.

- Update product listings, categories, prices, stock, specs, checkout, payments, and shipping in the external store platform.
- Use FamilyMart FamiStore / 好賣+ as the primary product and order backend when available.
- Use 7-ELEVEN MyShip / 賣貨便 as a backup or quick-checkout channel when useful.
- Keep the website focused on brand story, stable collection entrances, buying notes, and links to external store pages.
- When official store URLs are ready, set them in `src/siteContent.ts` under `commerceChannels`.
