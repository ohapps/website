# ohapps.com

## Getting Started

Install dependencies

```bash
yarn install
```

Start application

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tasks

- implement Strapi headless CMS
- enable contact form
- Add analytics

## On-Demand Revalidation

This project uses Incremental Static Regeneration (ISR). You can manually trigger a site-wide revalidation using the following endpoint:

### Setup
1. Define `REVALIDATION_SECRET` in your `.env.local` or production environment variables.

### Usage
Send a POST request to:
`https://your-site.com/api/revalidate?secret=YOUR_SECRET_TOKEN`

Example using curl:
```bash
curl -X POST "http://localhost:3000/api/revalidate?secret=your_secret_token_here"
```

This can be used to set up a Webhook in Strapi so that the site updates automatically when content is published.
