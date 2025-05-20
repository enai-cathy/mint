import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import CurrencyWidget from "@/app/components/CurrencyWidget";
import NewsletterSignup from "@/app/components/Newsletter";
import AffiliateDisclosure from "@/app/components/AffiliateDisclosure";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <section className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Mint Mogul 🧠💸</h1>
        <p className="text-xl text-slate-400">
          Smart financial tools, exclusive digital products, and wealth tips for
          high-earning spenders.
        </p>
      </section>

      <section className="mt-12">
        <CurrencyWidget />
      </section>

      <section className="mt-12">
        <NewsletterSignup />
      </section>

      <AffiliateDisclosure />
      <Layout>
      <Hero />
      <Newsletter />
    </Layout>
    </main>
  );
}
