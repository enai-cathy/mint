import CurrencyWidget from "@/app/components/CurrencyWidget";
import NewsletterSignup from "@/app/components/Newsletter";
import SavingsCalculator from "@/app/components/SavingsCalculator";
import HeroSection from "./components/HeroSection";
import ToolsTeaser from "./components/ToolsTeaser";
import ProductShowcase from "./components/ProductShowcase";
import FeaturesGrid from "./components/FeaturesGrid";
import DownloadTemplate from "./components/DownloadTemplateSection";
import Head from "next/head";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Mint Mogul – Build Your Financial Empire</title>
        <meta
          name="description"
          content="Wealth tools, savings templates, and debt-crushing kits to help you grow your money smarter."
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <div className="flex max-w-7xl min-h-screen mx-auto flex-col">
        <section className="bg-[#f9fafb] py-16 px-6 px-4 sm:px-6 lg:px-8">
          <HeroSection />
        </section>
        <section className=" bg-[#f9fafb] py-16 px-6 px-4 sm:px-6 lg:px-8">
          <ToolsTeaser />
        </section>
        <section className=" bg-[#f9fafb] py-16 px-4 px-4 sm:px-6 lg:px-8">
          <ProductShowcase />
        </section>
        <section className=" bg-[#f9fafb] py-16 px-6 px-4 sm:px-6 lg:px-8">
          <TestimonialsSection />
        </section>
        <section className=" bg-[#f9fafb] py-16 px-6 px-4 sm:px-6 lg:px-8">
          <FeaturesGrid />
        </section>

        {/* <section className=" py-16 px-6 px-4 sm:px-6 lg:px-8"> */}
        <DownloadTemplate />
        {/* </section> */}
        <FaqSection />
        {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* <CurrencyWidget /> */}
        {/* <SavingsCalculator /> */}
        {/* </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"> */}
        {/* <InvestmentNews /> */}
        {/* <StockTicker /> */}
        {/* </section> */}
      </div>
    </>
  );

  //       <section className="mt-12">
  //         <CurrencyWidget />
  //       </section>

  //       <section className="mt-12">
  //         <NewsletterSignup />
  //       </section>

  //       <Newsletter />
}
