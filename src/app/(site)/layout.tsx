import Nav from "@/components/layout/nav";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative z-10 bg-white">
      <Nav />
      <main className="relative flex min-h-screen flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
