
import Image from "next/image";
import SavingsCalculator from "@/app/components/SavingsCalculator";
// import CurrencyWidget from "@/app/components/CurrencyWidget";
// import InvestmentNews from "@/app/components/InvestmentNews";
// import StockTicker from "@/app/components/StockTicker";
import Navbar from "./ui/nav-bar";
import ProductCard from "@/app/components/ProductCard";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import ToolsTeaser from "./components/ToolsTeaser";
import DownloadTemplate from "./components/DownloadTemplateSection";
import FeaturesGrid from "./components/FeaturesGrid";
import ProductShowcase from "./components/ProductShowcase";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {

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
      <section className=" bg-[#f7f3eb]">
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
            <span>
              <h1 className="text-7xl text-[#0e563d] font-bold">
                Build Your Financial Empire
              </h1>{" "}
              <br />{" "}
              <p className="text-3xl">with Our Wealth Builder's Toolkit</p>{" "}
              <br />
              Equip yourself with expert-backed tools and strategies to grow
              wealth and reach your money goals—smarter.
              <br />{" "}
              <button className="bg-[#b3da67] m-6 text-charcoal font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200">
                Get Yours Now!
              </button>
            </span>
          </div>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            <Image
              src="/mint-mogul.png"
              width={1000}
              height={760}
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
              src="/mint-mogul.png"
              width={560}
              height={620}
              className="block md:hidden"
              alt="Screenshots of the dashboard project showing mobile version"
            />
          </div>
        </div>
      </section>
     <section className=" bg-[#0e563d] py-16 px-6 px-4 sm:px-6 lg:px-8">
               <ToolsTeaser />
             </section>
             <section className=" bg-[#f7f3eb] py-16 px-4 px-4 sm:px-6 lg:px-8">
               <ProductShowcase />
             </section>
             <section className=" bg-[#0e563d] py-16 px-6 px-4 sm:px-6 lg:px-8">
               <TestimonialsSection />
             </section>
             <section className=" bg-[#0e563d] py-16 px-6 px-4 sm:px-6 lg:px-8">
               <FeaturesGrid />
             </section>
     
             <section className=" bg-[#f7f3eb] py-16 px-6 px-4 sm:px-6 lg:px-8">
               <DownloadTemplate />
             </section>
        
    </div>
    </>
  );
}
