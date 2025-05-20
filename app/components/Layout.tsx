export default function Layout({ children }: any) {
  return (
    <div className="bg-charcoal text-white min-h-screen">
      <header className="p-4 text-2xl font-bold text-gold">Mint Mogul</header>
      <main>{children}</main>
      <footer className="p-4 text-center text-slate text-sm">
        © 2025 Mint Mogul. Affiliate Disclosure applies.
      </footer>
    </div>
  );
}
