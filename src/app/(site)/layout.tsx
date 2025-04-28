import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import TopBanner from "@/components/layout/top-banner";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative z-10 bg-white">
      <TopBanner />
      <Nav />
      <main className="relative flex min-h-screen flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
