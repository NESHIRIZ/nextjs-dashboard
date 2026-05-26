## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Deployment

1. Push this repository to your GitHub account (this project already includes a remote if you used the starter).
2. Create a Vercel account and import the repository from GitHub.
3. In the Vercel dashboard, create or add a Postgres database from the Storage tab (Neon, Supabase, etc.) and copy the connection string.
4. In your Vercel Project Settings -> Environment Variables, add the values from the database and a generated auth secret:

	- `POSTGRES_URL` (the full connection string)
	- `AUTH_SECRET` (generate with: `openssl rand -base64 32` or use https://generate-secret.vercel.app/32)

5. Deploy the project on Vercel. When the deployment completes, visit `https://<your-deployment>/seed` to run the seed script which populates the database.

## Local development

1. Copy `.env.example` to `.env.local` and fill in `POSTGRES_URL` and `AUTH_SECRET` if you want to connect to a remote/local Postgres instance.

```bash
pnpm install
pnpm dev
```

2. With the dev server running, visit `http://localhost:3000/seed` to seed the database locally (if connected to Postgres).

## Notes

- Do NOT commit `.env.local`.
- After seeding and deploying, your live site should be reachable at the Vercel assigned domain. Use that URL for the assignment submission.
