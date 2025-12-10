# Deployment Guide - Blue Restoration

## Overview

This project uses **Netlify** for hosting and can be deployed either:

1. **Automatically via GitHub Actions** (recommended)
2. **Directly through Netlify** (connected to Git repository)

## Prerequisites

- Node.js 20.x
- pnpm 10.x
- Netlify account
- GitHub repository

---

## Option 1: GitHub Actions (Recommended)

### Setup

1. **Add GitHub Secrets**

   Go to your GitHub repository → Settings → Secrets and variables → Actions → New repository secret

   Add the following secrets:

   ```
   NETLIFY_AUTH_TOKEN     # Your Netlify personal access token
   NETLIFY_SITE_ID        # Your Netlify site ID
   GOOGLE_MAPS_API_KEY    # Google Maps API key
   NEXT_PUBLIC_MAPBOX_API_KEY  # Mapbox public token
   ```

   **How to get these values:**
   - **NETLIFY_AUTH_TOKEN**:
     - Go to Netlify → User settings → Applications → Personal access tokens
     - Create new access token

   - **NETLIFY_SITE_ID**:
     - Go to your site → Site settings → General → Site details
     - Copy the "Site ID"

2. **Workflow Configuration**

   The workflow file is located at `.github/workflows/deploy.yml`

   **Triggers:**
   - Push to `main` → Production deployment
   - Push to `dev` → Development preview
   - Pull Request to `main` → PR preview with comment

3. **Branch Structure**
   - `main` - Production environment
   - `dev` - Development/staging environment
   - Feature branches - Create PRs to see deploy previews

### Deployment Flow

```
┌─────────────┐
│  Push Code  │
└──────┬──────┘
       │
       v
┌──────────────┐
│ GitHub       │
│ Actions      │
│ Triggered    │
└──────┬───────┘
       │
       ├─→ Install dependencies (with cache)
       ├─→ Run linter
       ├─→ Build project
       └─→ Deploy to Netlify
           │
           ├─→ main branch → Production
           ├─→ dev branch → Dev preview
           └─→ PR → Comment with preview URL
```

### Features

- ✅ Automatic deployment on push
- ✅ Build caching for faster deploys
- ✅ Linting before deployment
- ✅ PR preview deployments with automatic comments
- ✅ GitHub deployment tracking
- ✅ Environment-specific deployments

---

## Option 2: Direct Netlify Deployment

### Setup

1. **Connect Repository**
   - Log in to Netlify
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

2. **Configure Build Settings**

   These settings are automatically read from `netlify.toml`:
   - **Build command:** `pnpm build`
   - **Publish directory:** `.next`
   - **Node version:** 20 (from `.nvmrc`)

3. **Add Environment Variables**

   Site settings → Environment variables → Add a variable

   ```
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   NEXT_PUBLIC_MAPBOX_API_KEY=your_mapbox_public_token
   ```

4. **Deploy**
   - Push to your repository
   - Netlify will automatically build and deploy

---

## Configuration Files

### netlify.toml

Main Netlify configuration:

- Build settings and plugin configuration
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- Cache headers for static assets
- Redirects configuration

### .nvmrc

Specifies Node.js version (20) for consistent builds.

### .env.example

Template for required environment variables. Copy to `.env` locally:

```bash
cp .env.example .env
# Edit .env with your actual API keys
```

### .github/workflows/deploy.yml

GitHub Actions workflow for automated deployments:

- Runs on push to `main` or `dev` branches
- Creates preview deployments for PRs
- Includes build caching and linting

---

## Environment Variables

### Required Variables

| Variable                     | Type   | Description                               |
| ---------------------------- | ------ | ----------------------------------------- |
| `GOOGLE_MAPS_API_KEY`        | Secret | Google Maps API key for map functionality |
| `NEXT_PUBLIC_MAPBOX_API_KEY` | Public | Mapbox public token (exposed to browser)  |

**Important:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

### Setting Variables

**For GitHub Actions:**

```
Repository Settings → Secrets and variables → Actions
```

**For Netlify:**

```
Site settings → Environment variables → Add a variable
```

---

## Deployment Environments

### Production (main branch)

- **URL:** Your primary Netlify domain
- **Trigger:** Push to `main` branch
- **Auto-deploy:** Yes
- **Preview:** No

### Development (dev branch)

- **URL:** Netlify preview URL
- **Trigger:** Push to `dev` branch
- **Auto-deploy:** Yes
- **Preview:** Yes

### Pull Request Previews

- **URL:** Unique Netlify preview URL per PR
- **Trigger:** Opening/updating a PR to `main`
- **Auto-comment:** Yes (GitHub Actions adds comment with URL)
- **Preview:** Yes

---

## Manual Deployment

### Using Netlify CLI

1. Install Netlify CLI:

   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:

   ```bash
   netlify login
   ```

3. Build and deploy:
   ```bash
   pnpm build
   netlify deploy --prod
   ```

### Local Testing

Test the production build locally:

```bash
pnpm build
pnpm start
```

Visit `http://localhost:3000`

---

## Performance & Security

### Security Headers

Automatically configured via `netlify.toml`:

- **X-Frame-Options:** DENY
- **X-XSS-Protection:** 1; mode=block
- **X-Content-Type-Options:** nosniff
- **Referrer-Policy:** strict-origin-when-cross-origin

### Cache Configuration

- **Static assets:** Cached for 1 year, immutable
- **JS/CSS files:** Cached for 1 year, immutable
- **Images:** Cached for 1 year, immutable

### Next.js Optimizations

Using `@netlify/plugin-nextjs` for:

- API routes handling
- Middleware support
- Image optimization
- Incremental Static Regeneration (ISR)
- Edge functions support

---

## Troubleshooting

### Build Fails

**Check:**

1. All environment variables are set correctly
2. Node version matches `.nvmrc` (20)
3. Dependencies are up to date
4. No TypeScript or ESLint errors locally

**Solutions:**

```bash
# Clear build cache (Netlify dashboard)
Site settings → Build & deploy → Clear cache and retry deploy

# Or using CLI
netlify build --clear-cache
```

### GitHub Actions Fails

**Check:**

1. All GitHub secrets are configured
2. Workflow has correct permissions
3. Branch protection rules don't block deployment

**View logs:**

```
Repository → Actions → Select workflow run
```

### Environment Variables Not Working

**Issues:**

- Missing `NEXT_PUBLIC_` prefix for client-side variables
- Variables not set in correct environment (GitHub vs Netlify)
- Need to rebuild after changing variables

**Solutions:**

1. Verify variable names match exactly
2. Check if variable needs `NEXT_PUBLIC_` prefix
3. Trigger new deployment after adding variables

### Deployment Takes Too Long

**Optimizations:**

1. Use GitHub Actions with caching (already configured)
2. Optimize image sizes before committing
3. Review and remove unused dependencies

---

## Monitoring & Logs

### GitHub Actions

- **Status:** Repository → Actions tab
- **Logs:** Click on any workflow run
- **Notifications:** Configure in repository settings

### Netlify

- **Deploys:** Site overview → Deploys tab
- **Build logs:** Click on any deploy
- **Functions logs:** Functions tab
- **Analytics:** Analytics tab (if enabled)

---

## CI/CD Workflow Summary

```
Developer Workflow:
1. Create feature branch from dev
2. Make changes and commit
3. Push to GitHub
4. Create PR to main
5. GitHub Actions runs automatically:
   - Installs dependencies
   - Runs linter
   - Builds project
   - Deploys preview to Netlify
   - Comments on PR with preview URL
6. Review changes in preview
7. Merge PR
8. Production deploy triggered automatically
```

---

## Support & Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js on Netlify](https://docs.netlify.com/frameworks/next-js/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Next.js Documentation](https://nextjs.org/docs)

For deployment issues:

1. Check build logs in Netlify dashboard
2. Review GitHub Actions logs
3. Verify all environment variables
4. Test build locally first
