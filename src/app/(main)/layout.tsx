import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScrolling from "@/components/SmoothScrolling";
import StructuredData from "@/components/StructuredData";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import TrackingScripts from "@/components/TrackingScripts";
import GTMNoscript from "@/components/GTMNoscript";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GTMNoscript />
      <StructuredData />
      <TrackingScripts />
      <SmoothScrolling>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </SmoothScrolling>
      <CookieConsentBanner />
    </>
  );
}
