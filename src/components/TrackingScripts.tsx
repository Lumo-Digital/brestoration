import Script from "next/script";

/**
 * Analytics Component
 *
 * Loads Google Tag Manager and Meta Pixel on every visit
 *
 * Environment Variables Required:
 * - NEXT_PUBLIC_GTM_ID: Google Tag Manager ID (e.g., GTM-XXXXXXXX)
 * - NEXT_PUBLIC_META_PIXEL_ID: Meta/Facebook Pixel ID
 *
 * Usage:
 * Add to your root layout.tsx inside <body>
 */
export default function Analytics() {
  // Get IDs from environment variables
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {/* Google Tag Manager */}
      {GTM_ID && (
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      )}

      {/* Meta Pixel */}
      {META_PIXEL_ID && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                if (!window._fbPixelInitialized) {
                  window._fbPixelInitialized = true;
                  fbq('init', '${META_PIXEL_ID}');
                  fbq('track', 'PageView');
                }
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.net/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}
