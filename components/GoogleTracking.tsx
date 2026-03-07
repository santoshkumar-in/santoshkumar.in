"use client";
import Script from "next/script";

interface GoogleProps {
  gtmId: string;
}

export function GoogleTagManager({ gtmId }: GoogleProps) {
  if (!gtmId) {
    console.warn("GTM ID not provided");
    return null;
  }

  return (
    <>
      {/* Google Tag Manager Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
    </>
  );
}

export function GoogleTagManagerNoScript({ gtmId }: GoogleProps) {
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}


export function GoogleAnalytics({ gtmId }: GoogleProps) {
  if (!gtmId) {
    console.warn("GA4 Measurement ID not provided");
    return null;
  }

  return (
    <>
      {/* Load the gtag.js library */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
        strategy="afterInteractive"
      />

      {/* Initialise GA4 */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtmId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}