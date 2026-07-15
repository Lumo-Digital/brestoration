# Cookie Consent Implementation

This document explains how cookie tracking works for Blue Restoration. The
site serves a US-only audience, so it uses a **CCPA-style opt-out model**
rather than GDPR-style prior opt-in.

## Overview

- ✅ Google Tag Manager and Meta Pixel load by default on every visit
- ✅ The visible cookie notice is a **Custom HTML tag configured directly in
  the Google Tag Manager container** (`GTM-MJ7NRD8D`), not part of this
  codebase. It renders a banner with an "Accept & Continue" button that
  updates Google Consent Mode via `dataLayer.push(["consent", "update", ...])`.
  To change its copy, styling, or behavior, edit that tag in
  [tagmanager.google.com](https://tagmanager.google.com/).
- ⚠️ That GTM-managed banner only has an accept action — it does not give
  visitors a functional way to decline/opt out of tracking. If a real
  opt-out mechanism is needed for compliance, it has to be rebuilt either as
  a GTM tag that also offers a decline action, or as an app-level component
  again (see "History" below).

## Components

### TrackingScripts (`src/components/TrackingScripts.tsx`)

Loads Google Tag Manager and Meta Pixel by default. On mount, it checks the
legacy `blue-restoration-cookie-consent` cookie via `getCookieConsentValue()`;
if its value is `"false"`, it renders nothing instead of inserting the
tracking `<Script>` tags. This check runs client-side (a lazy `useState`
initializer, not a `useEffect` — see the comment in the file for why) so
pages can stay statically generated.

This cookie is no longer set by anything in the app (see "History"), so this
check is now dormant for new visitors. It only still matters for visitors who
opted out before the in-app banner was removed and still have that cookie
(it lasts 365 days from when it was set).

## Environment Variables

```env
# Google Tag Manager container ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX

# Meta/Facebook Pixel ID
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

**Note:** These are optional. If you don't provide them, those services won't load.

#### Google Tag Manager:

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container or select an existing one
3. Copy your container ID (format: `GTM-XXXXXXXX`)

#### Meta Pixel:

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Create a new pixel or select existing one
3. Copy your Pixel ID (numeric, e.g., `123456789012345`)

## Legal Compliance

### CCPA (California):

⚠️ The current GTM-managed banner is a notice, not a functional opt-out — it
has no decline action. If CCPA opt-out compliance is required, this needs to
be addressed either in the GTM tag or with a new in-app mechanism.

### Not GDPR-compliant:

GDPR (EU) requires explicit opt-in **before** non-essential cookies load.
This implementation loads tracking by default, so it should not be used
as-is for EU visitors.

## Add More Tracking Services

Edit [src/components/TrackingScripts.tsx](src/components/TrackingScripts.tsx) and add additional `<Script>` tags for other services.

## Privacy Policy & Cookie Policy

These pages explain what cookies are used, why, and how to manage them:

- `/privacy-policy`
- `/cookie-policy`

Keep them in sync with whatever consent mechanism is actually live (currently
the GTM-managed banner) — don't reference an in-app "Opt Out" button unless
one exists again.

## History

An in-app banner (`CookieConsentBanner.tsx`, using `react-cookie-consent`)
used to render alongside the GTM-managed banner, showing two cookie notices
at once on every page. It was removed in favor of relying solely on the
GTM-managed banner. Its old functional opt-out (a "Opt Out" button that set
`blue-restoration-cookie-consent=false` and cleared analytics cookies) is
gone; only the `TrackingScripts` read-side check described above remains, for
backward compatibility with visitors who already had that cookie set.

## Troubleshooting

### Analytics not loading:

- Verify `NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_META_PIXEL_ID` are set correctly
- Check browser console for script loading errors
- Check whether the visitor has a leftover `blue-restoration-cookie-consent=false` cookie

## Resources

- [Google Consent Mode](https://developers.google.com/tag-platform/security/guides/consent)
- [Google Analytics Cookie Usage](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage)
- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
