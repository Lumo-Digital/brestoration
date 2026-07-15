# Cookie Consent Implementation

This document explains the cookie consent system implemented for Blue Restoration. The site serves a US-only audience, so it uses a **CCPA-style opt-out model** rather than GDPR-style prior opt-in.

## Overview

The cookie consent system uses `react-cookie-consent` to display a customizable banner that:

- ✅ Loads Google Tag Manager (Google Analytics) and Meta Pixel by default on every visit
- ✅ Complies with CCPA (California) opt-out requirements
- ✅ Lets users opt out of tracking cookies via the "Opt Out" button
- ✅ Stores user preference for 365 days
- ✅ Opt-out stops GTM/Meta Pixel from loading on the next page load and clears existing analytics cookies immediately

**Note:** This model is not GDPR-compliant. If the site ever targets EU visitors, it would need to switch back to an opt-in model (no tracking scripts until explicit consent).

## Components

### 1. CookieConsentBanner (`src/components/CookieConsentBanner.tsx`)

Displays the cookie notice at the bottom of the page with:

- Custom Blue Restoration branding
- "I Understand" (dismiss) and "Opt Out" buttons
- Links to Privacy Policy and Cookie Policy
- Responsive design for mobile and desktop
- Clears existing analytics cookies immediately when a user clicks "Opt Out"

### 2. TrackingScripts (`src/components/TrackingScripts.tsx`)

Loads Google Tag Manager and Meta Pixel by default. On mount, it checks the
`blue-restoration-cookie-consent` cookie via `getCookieConsentValue()`; if
its value is `"false"` (opted out), it renders nothing instead of inserting
the tracking `<Script>` tags. This check runs client-side so pages can stay
statically generated.

## Setup Instructions

### Step 1: Install Dependencies

The `react-cookie-consent` package should already be installed. If not, run:

```bash
npm install react-cookie-consent
```

### Step 2: Configure Environment Variables

Add your IDs to `.env.local` (or `.env`):

```env
# Google Tag Manager container ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX

# Meta/Facebook Pixel ID
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

**Note:** These are optional. If you don't provide them, those services won't load.

### Step 3: Get Your IDs

#### Google Tag Manager:

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container or select an existing one
3. Copy your container ID (format: `GTM-XXXXXXXX`)

#### Meta Pixel:

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Create a new pixel or select existing one
3. Copy your Pixel ID (numeric, e.g., `123456789012345`)

## How It Works

### User Flow:

1. **First Visit:**
   - User visits the website
   - GTM and Meta Pixel load immediately (opt-out model)
   - Cookie notice appears at the bottom

2. **User Dismisses ("I Understand"):**
   - Banner disappears
   - No cookie preference is stored — tracking continues as the default

3. **User Opts Out:**
   - Banner disappears
   - `blue-restoration-cookie-consent=false` stored for 365 days
   - Any existing `_ga`, `_gid`, `_gat`, `_fbp`, `_fbc` cookies are cleared immediately
   - `TrackingScripts` checks this cookie on mount (including on the next page load) and skips inserting GTM/Meta Pixel while it's `"false"`

4. **Returning Visitors:**
   - If no opt-out cookie is set: Tracking loads automatically, banner shown once per 365-day period
   - If opted out: No GTM/Meta Pixel, no banner
   - Cookie expires after 365 days, banner (and default tracking) resumes

### Technical Implementation:

```typescript
// Cookie name used
"blue-restoration-cookie-consent";

// Possible values
"true"; // User dismissed the banner without opting out
"false"; // User opted out
```

## Testing

### Test in Development:

1. **Start dev server:**

   ```bash
   npm run dev
   ```

2. **Visit http://localhost:3000**
   - You should see the cookie banner
   - Open DevTools → Application → Cookies
   - If GTM_ID/META_PIXEL_ID are set, you should already see `_ga`, `_gid`, `_fbp` cookies before interacting with the banner

3. **Click "Opt Out":**
   - Banner disappears
   - You should see `blue-restoration-cookie-consent=false`
   - Existing `_ga`, `_gid`, `_fbp` cookies are cleared immediately
   - Reload the page — GTM/Meta Pixel scripts should no longer be present in the page source

### Test Cookie Clearing:

1. Load the site (analytics cookies appear)
2. Click "Opt Out"
3. Verify analytics cookies are removed and don't reappear on reload

## Legal Compliance

### CCPA (California) Requirements:

✅ Notice of data collection
✅ Functional opt-out mechanism ("Opt Out" button, enforced on the next page load)
✅ Link to privacy policy

### Not GDPR-compliant:

GDPR (EU) requires explicit opt-in **before** non-essential cookies load. This
implementation loads tracking by default, so it should not be used as-is for
EU visitors.

### Best Practices:

✅ Consent/opt-out stored for a reasonable period (365 days)
✅ Clear, plain language
✅ Easy to understand and use

## Customization

### Change Banner Text:

Edit the banner copy in [src/components/CookieConsentBanner.tsx](src/components/CookieConsentBanner.tsx) (inside the `<CookieConsent>` children).

### Change Banner Colors:

Edit the `style`, `buttonStyle`, and `declineButtonStyle` props in [src/components/CookieConsentBanner.tsx](src/components/CookieConsentBanner.tsx)

### Add More Tracking Services:

Edit [src/components/TrackingScripts.tsx](src/components/TrackingScripts.tsx) and add additional `<Script>` tags for other services.

## Privacy Policy & Cookie Policy

Make sure your privacy policy and cookie policy pages explain:

- What cookies you use (analytics, marketing)
- Why you use them (improve service, understand user behavior)
- How users can manage their preferences
- How long cookies are stored
- Third parties that receive data (Google, Meta)

These pages are already set up at:

- `/privacy-policy`
- `/cookie-policy`

## Troubleshooting

### Banner doesn't appear:

- Check that `<CookieConsentBanner />` is in your layout
- Clear browser cache and cookies
- Check console for errors

### Analytics not loading:

- Verify environment variables are set correctly
- Check browser console for script loading errors
- Make sure IDs are in correct format
- Check whether `blue-restoration-cookie-consent=false` is set (opted out)

### Banner appears every time:

- Check if cookies are being blocked by browser
- Verify cookie is being set (DevTools → Application → Cookies)
- Check for conflicting cookie settings

## Resources

- [react-cookie-consent Documentation](https://www.npmjs.com/package/react-cookie-consent)
- [GDPR Cookie Compliance Guide](https://gdpr.eu/cookies/)
- [Google Analytics Cookie Usage](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage)
- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
