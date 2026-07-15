import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadFormSection from "@/components/LeadFormSection";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScrolling from "@/components/SmoothScrolling";
import StructuredData from "@/components/StructuredData";
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
        <LeadFormSection />
        <Footer />
      </SmoothScrolling>
    </>
  );
}
