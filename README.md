# Showroom

A live catalog of projects with interactive demos. Each project runs on sample data — no sign-ups, no real data, safe to explore on any device.

## Structure

```
showroom/
├── index.html           # Main catalog page
├── projects.yaml        # Project metadata and configuration
├── demo-template.html   # Template for demo pages
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions: auto-deploy to GitHub Pages
└── README.md            # This file
```

## Projects

1. **HYROX 40** — iPhone-first PWA for five-day HYROX training with nested timers and scoring.
2. **Network Desk** — Ranks LinkedIn connections for job search outreach; prioritizes contacts and surfaces best matches weekly.
3. **Danish Learning** — Generates daily lesson packets (læring, opgaver, facit) tailored to your level; scores homework to show gaps.

## How It Works

### Catalog (`index.html`)
- Static HTML page listing all projects.
- Pulls data from `projects.yaml` (via JavaScript).
- Mobile-responsive, no backend required.
- Live URL: `https://showroom.example.com` (GitHub Pages).

### Demo Pages
- Each project has its own demo page (e.g., `/hyrox-40/index.html`).
- Uses `demo-template.html` as a base.
- Runs on sample/synthetic data — no authentication, no personal data exposed.
- Full interactivity (where applicable).

### Deployment
- **Hosting:** GitHub Pages (free tier).
- **Auto-deploy:** GitHub Actions workflow (`deploy.yml`) pushes to production on every push to `main`.
- **Tech:** Static HTML + JavaScript. No backend server needed.

## Setup & Deployment

### 1. Create GitHub Repository
```bash
git clone https://github.com/YOUR-USERNAME/showroom.git
cd showroom
git remote set-url origin https://github.com/YOUR-USERNAME/showroom.git
```

### 2. Enable GitHub Pages
1. Go to your repo on GitHub.
2. Settings → Pages.
3. Select **Deploy from a branch**.
4. Choose `main` branch, `/root` folder.
5. Save.

GitHub Actions will automatically deploy on the next push.

### 3. Add Your Projects
Update `projects.yaml` with actual demo URLs and GitHub repo links:
```yaml
- id: hyrox-40
  name: "HYROX 40"
  demoUrl: "https://hyrox-40-demo.example.com"
  repoUrl: "https://github.com/YOUR-USERNAME/hyrox-40"
```

### 4. Create Demo Pages
For each project repo, create a demo page (or embed the live app):
- Use `demo-template.html` as a base.
- Update project name, description, inputs/outputs.
- Host on Render, Vercel, or your own server.
- Link the demo URL in `projects.yaml`.

### 5. Custom Domain (Optional)
1. Buy a domain (EUR 10–15/year from Namecheap, etc.).
2. In repo Settings → Pages → Custom domain.
3. Add CNAME record to your DNS provider.

Example: `showroom.yourdomain.com`

## Workflow for Adding a New Project

1. **Describe the project** in `projects.yaml`:
   - Name, description, inputs, outputs.
   - Demo URL and GitHub repo link.

2. **Create a demo page**:
   - Copy `demo-template.html`.
   - Customize with project details.
   - Host the demo (Render, Vercel, etc.).

3. **Push to main**:
   - GitHub Actions auto-deploys to `https://YOUR-USERNAME.github.io/showroom`.

4. **Test on mobile**:
   - Visit on your iPhone to ensure responsive design.

## Demo Data

All demos run on **synthetic, sample data**:
- **Network Desk:** Fake LinkedIn connections (no real people, no real messages).
- **Danish Learning:** Generated lessons (no real student data).
- **HYROX 40:** Pre-loaded baseline week (no personal training data).

This keeps the demos safe, fast, and exploration-friendly.

## Tech Stack

- **Frontend:** HTML, CSS (Grid, Flexbox), JavaScript (vanilla).
- **Hosting:** GitHub Pages (free).
- **CI/CD:** GitHub Actions (free, auto-deploy on push).
- **Optional backend:** Supabase free tier (if future projects need a database).
- **Payment (future):** Stripe Payment Links or Lemon Squeezy.

## Future Enhancements

- [ ] Add paid tiers per project (Stripe Payment Links).
- [ ] Database for storing demo results/scores (Supabase).
- [ ] Native iOS app (Apple App Store).
- [ ] Analytics dashboard (track demo usage).
- [ ] Comments/feedback on each project.

## Token & Security

**GitHub token** (fine-grained, read-only):
- Scope: Limited to three repos (Network Desk, Danish Learning, HYROX 40).
- Permissions: Contents (read-only), Metadata.
- Expiry: 90 days (rotate regularly).
- **Never commit tokens to the repo.** Use GitHub Secrets for CI/CD if needed.

## Questions?

For more info on each project, visit its repo or try the demo.
