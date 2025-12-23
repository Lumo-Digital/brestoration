# Cookie Consent Implementation

This document explains the cookie consent system implemented for Blue Restoration, ensuring compliance with GDPR, CCPA, and other privacy regulations.

## Overview

The cookie consent system uses `react-cookie-consent` to display a customizable banner that:

- ✅ Requests user consent before loading analytics cookies
- ✅ Complies with GDPR (Europe), CCPA (California), and other privacy laws
- ✅ Allows users to accept or decline tracking cookies
- ✅ Stores user preference for 365 days
- ✅ Only loads Google Analytics and Meta Pixel after consent

## Components

### 1. CookieConsentBanner (`src/components/CookieConsentBanner.tsx`)

Displays the cookie consent banner at the bottom of the page with:

- Custom Blue Restoration branding
- "Accept All" and "Decline" buttons
- Links to Privacy Policy and Cookie Policy
- Responsive design for mobile and desktop

### 2. Analytics (`src/components/Analytics.tsx`)

Conditionally loads analytics scripts based on user consent:

- **Google Analytics 4** - Only loads if user accepts cookies
- **Meta Pixel** - Only loads if user accepts cookies
- Listens for consent changes and updates tracking accordingly
- Clears analytics cookies when user declines

## Setup Instructions

### Step 1: Install Dependencies

The `react-cookie-consent` package should already be installed. If not, run:

```bash
npm install react-cookie-consent
```

### Step 2: Configure Environment Variables

Add your analytics IDs to `.env.local` (or `.env`):

```env
# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Meta/Facebook Pixel ID
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

**Note:** These are optional. If you don't provide them, those services won't load.

### Step 3: Get Your Analytics IDs

#### Google Analytics 4:

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property or select existing one
3. Go to Admin → Data Streams → Web
4. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

#### Meta Pixel:

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Create a new pixel or select existing one
3. Copy your Pixel ID (numeric, e.g., `123456789012345`)

## How It Works

### User Flow:

1. **First Visit:**
   - User visits the website
   - Cookie consent banner appears at bottom
   - No analytics scripts are loaded yet

2. **User Accepts:**
   - Banner disappears
   - Consent stored in cookie for 365 days
   - Google Analytics and Meta Pixel load immediately
   - Tracking begins

3. **User Declines:**
   - Banner disappears
   - Consent stored as "declined" for 365 days
   - No analytics scripts load
   - Any existing analytics cookies are cleared

4. **Returning Visitors:**
   - If consent was given: Analytics load automatically, no banner shown
   - If consent was declined: No analytics, no banner
   - Cookie expires after 365 days, banner shows again

### Technical Implementation:

```typescript
// Cookie name used
"blue-restoration-cookie-consent";

// Possible values
"true"; // User accepted
"false"; // User declined

// Events dispatched
"cookie-consent-accepted"; // When user clicks Accept
"cookie-consent-declined"; // When user clicks Decline
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
   - No analytics cookies should be present yet

3. **Click "Accept All":**
   - Banner disappears
   - Check DevTools → Application → Cookies
   - You should see `blue-restoration-cookie-consent=true`
   - If GA_ID is set, you should see `_ga`, `_gid` cookies
   - If META_PIXEL_ID is set, you should see `_fbp` cookies

4. **Clear cookies and test "Decline":**
   - Clear all cookies in DevTools
   - Refresh page
   - Click "Decline"
   - Only `blue-restoration-cookie-consent=false` should be set
   - No analytics cookies should appear

### Test Cookie Clearing:

1. Accept cookies (analytics cookies appear)
2. Clear cookies manually
3. Refresh page and decline
4. Verify analytics cookies are removed

## Legal Compliance

### GDPR (EU) Requirements:

✅ Explicit consent before setting non-essential cookies
✅ Clear information about what cookies are used
✅ Easy way to decline cookies
✅ Links to Privacy Policy and Cookie Policy
✅ Consent expires after reasonable period (365 days)

### CCPA (California) Requirements:

✅ Notice of data collection
✅ Opt-out mechanism (Decline button)
✅ Link to privacy policy

### Best Practices:

✅ No analytics cookies before consent
✅ Consent stored locally (not tracking users who decline)
✅ Clear, plain language
✅ No pre-checked boxes or dark patterns
✅ Easy to understand and use

## Customization

### Change Banner Text:

Edit [src/components/CookieConsentBanner.tsx:86-89](src/components/CookieConsentBanner.tsx#L86-L89):

```tsx
We use cookies to enhance your browsing experience...
```

### Change Banner Colors:

Edit the `style`, `buttonStyle`, and `declineButtonStyle` props in [src/components/CookieConsentBanner.tsx:58-84](src/components/CookieConsentBanner.tsx#L58-L84)

### Add More Analytics Services:

Edit [src/components/Analytics.tsx](src/components/Analytics.tsx) and add additional `<Script>` tags for other services.

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

### Analytics not loading after accept:

- Verify environment variables are set correctly
- Check browser console for script loading errors
- Make sure IDs are in correct format

### Banner appears every time:

- Check if cookies are being blocked by browser
- Verify cookie is being set (DevTools → Application → Cookies)
- Check for conflicting cookie settings

## Resources

- [react-cookie-consent Documentation](https://www.npmjs.com/package/react-cookie-consent)
- [GDPR Cookie Compliance Guide](https://gdpr.eu/cookies/)
- [Google Analytics Cookie Usage](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage)
- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
