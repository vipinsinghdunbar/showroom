# Showroom Setup Guide

## Step 1: Create the Repository on GitHub

1. Go to [github.com/new](https://github.com/new).
2. **Repository name:** `showroom`.
3. **Description:** "A live catalog of my projects with interactive demos."
4. **Public** (so demos are accessible).
5. Click **Create repository**.

## Step 2: Initialize and Push to GitHub

In your terminal:

```bash
# Navigate to the showroom directory
cd ~/path/to/showroom

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial Showroom setup"

# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR-USERNAME/showroom.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repo: `https://github.com/YOUR-USERNAME/showroom`.
2. Click **Settings** (top right).
3. In the left menu, click **Pages**.
4. Under "Build and deployment":
   - **Source:** Select "Deploy from a branch".
   - **Branch:** Select `main`, `/root` folder.
   - Click **Save**.

GitHub Actions will automatically trigger. Wait ~2 minutes.

✓ Your catalog is now live at: `https://YOUR-USERNAME.github.io/showroom`

## Step 4: Verify the Catalog Works

1. Open `https://YOUR-USERNAME.github.io/showroom` in your browser.
2. You should see the Showroom catalog with three projects.
3. (Demo URLs will show placeholder links for now.)

## Step 5: Update Project URLs

Once your project demos are deployed (on Render, Vercel, etc.), update `projects.yaml`:

```yaml
projects:
  - id: hyrox-40
    demoUrl: "https://your-hyrox-demo.example.com"
    repoUrl: "https://github.com/YOUR-USERNAME/hyrox-40"
  # ... etc
```

Then push:
```bash
git add projects.yaml
git commit -m "Update project demo URLs"
git push
```

GitHub Actions will auto-deploy within seconds.

## Step 6: Test on Mobile

1. Open `https://YOUR-USERNAME.github.io/showroom` on your iPhone.
2. Verify the layout is responsive.
3. Test clicking on project cards.

## Step 7: Add a Custom Domain (Optional)

If you want `showroom.yourdomain.com` instead of the GitHub URL:

1. Buy a domain (Namecheap, GoDaddy, etc.).
2. In your repo **Settings → Pages → Custom domain**, enter `showroom.yourdomain.com`.
3. GitHub will show you the DNS records to add.
4. In your domain registrar's DNS settings, add:
   - Type: `CNAME`
   - Name: `showroom`
   - Value: `YOUR-USERNAME.github.io`
   - Save and wait ~5–10 minutes for DNS to propagate.

✓ Your catalog is now at `https://showroom.yourdomain.com`.

## What's Deployed

```
https://YOUR-USERNAME.github.io/showroom/
├── index.html          # Catalog page
├── projects.yaml       # Project data
├── demo-template.html  # Demo page template
├── README.md           # Documentation
└── .github/workflows/deploy.yml  # Auto-deploy config
```

## Next Steps

1. **Deploy your project demos:**
   - HYROX 40 → Host on Render/Vercel
   - Network Desk → Host on Render/Vercel
   - Danish Learning → Host on Render/Vercel

2. **Update `projects.yaml`** with live demo URLs.

3. **Push to main** — GitHub Pages auto-deploys.

4. **Share your Showroom:**
   - Link in CV
   - Link in LinkedIn profile
   - Link in email signature

## Troubleshooting

**GitHub Pages not updating?**
- Wait 2–3 minutes after pushing.
- Check the **Actions** tab in your repo to see deployment status.
- Clear your browser cache and refresh.

**Demo URLs showing as placeholders?**
- Make sure `projects.yaml` has correct URLs.
- Push the changes to `main` branch.

**Mobile layout broken?**
- Check the CSS in `index.html` — media queries should handle mobile.
- Test in Chrome DevTools with device emulation.

## Questions?

Refer to `README.md` for more detailed documentation.
