import Hero from "../components/Hero";


import CurrencyWidget from "@/app/components/CurrencyWidget";
import NewsletterSignup from "@/app/components/Newsletter";
import AffiliateDisclosure from "@/app/components/AffiliateDisclosure";
import Image from "next/image";
import SavingsCalculator from "@/app/components/SavingsCalculator";

import ProductCard from "@/app/components/ProductCard";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Navbar from "../ui/nav-bar";
import Footer from "../components/Footer";

import Link from "next/link"


export default function HomePage() {
  const products = [
    {
      title: "Wealth Tracker",
      description: "Monitor your income, expenses, and net worth.",
      price: "$9.99",
      image: "/images/wealth-tracker.png",
      link: "/products/wealth-tracker",
    },
    {
      title: "Debt Crusher Toolkit",
      description: "Strategies to reduce and manage debt effectively.",
      price: "$14.99",
      image: "/images/debt-crusher.png",
      link: "/products/debt-crusher-toolkit",
    },
    {
      title: "Savings Goal Tracker",
      description: "Stay on track with your savings goals easily.",
      price: "$7.99",
      image: "/images/savings-goal.png",
      link: "/products/savings-goal-tracker",
    },
  ];

  return (
    <div className="flex  min-h-screen flex-col p-6">
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
              <Link href="/products" className="bg-[#b3da67] mt-10 m-6 text-charcoal font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200">
                  Get Yours Now!
            
              </Link>
            </span>
          </div>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            <Image
              src="/hands-with-money.png"
              width={1000}
              height={760}
              className="hidden md:block"
              alt="illustration of Hands, one with piggybank and the other hand with money"
            />
            <Image
              src="/hands-with-money.png"
              width={560}
              height={620}
              className="block md:hidden"
              alt="illustration of Hands, one with piggybank and the other hand with money"
            />
          </div>
        </div>
      </section>
      <section className=" bg-[#0e563d]">
        <div className="flex shrink-0 items-center p-4 md:h-42">
          <span>
            <h1 className="text-6xl text-white font-bold">
              The Blueprint for Financial Success
            </h1>{" "}
            <br />{" "}
            <p className="text-l text-white">
              At Mint Mogul, we believe building wealth starts with having the
              right tools and insights at your fingertips.
              <br /> <span className="font-bold">Let our planner </span>chart
              your course to financial success.
            </p>{" "}
            <button className="bg-[#b3da67] m-6 text-charcoal font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200">
              Explore Our Free Tools Now!
            </button>
          </span>

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

      <section className=" bg-[#f7f3eb] py-16 px-4">
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
            <span>
              {" "}
              <h1 className="text-5xl text-[#0e563d] font-bold">
                Curated for Any Stage of Wealth Building
              </h1>{" "}
              <br />
              <p className="text-l text-[#0e563d]">
                Whether you're starting out or scaling up, Mint Mogul equips you
                with what you need to build real wealth and
                <br /> <span className="font-bold">meet your needs. </span>
              </p>{" "}
            </span>
          </div>
        </div>
        <div className="mt-12">
          <main className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                link={product.link}
              />
            ))}
          </main>
        </div>
      </section>
      <section className=" bg-[#0e563d] py-16 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <span>
            <h1 className="text-4xl mb-12 text-white font-bold items-center justify-center">
              Tools You Can Start Using Immediately
            </h1>{" "}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-left">
              {[
                {
                  title: "Tools/Resources",
                  text: "Expertly Vetted Tools to help you manage finances stress-free.",
                },
                {
                  title: "Goal-Based Saving Worksheets",
                  text: "Set, track, and smash savings goals with visual progress and clarity.",
                },
                {
                  title: "Wealth Snapshot",
                  text: "With Net Worth Tracker- Get a real-time view of your net worth and financial position.",
                },
                {
                  title: "Smarter Budgeting Templates",
                  text: "Track expenses and income effortlessly to stay in control of your money.",
                },
                {
                  title: "No Fluff, Just Results",
                  text: "Streamlined tools with zero overwhelm—focused on your next move.",
                },
                {
                  title: "Savings and Debt Snowball Calculator",
                  text: "Use it whether you’re starting out or scaling up your financial game.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className=" rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircleIcon className="h-6 w-6 text-[#f7f3eb]" />
                    <h3 className="text-xl font-semibold text-[#f7f3eb] mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white text-base">{item.text}</p>
                </div>
              ))}
            </div>
            <button className="bg-[#b3da67] m-6 text-charcoal font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200">
              Explore Our Free Tools Now!
            </button>
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
              <Image
                src="/tablet-screen.png"
                width={1000}
                height={760}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <Image
                src="/tablet-screen.png"
                width={560}
                height={620}
                className="block md:hidden"
                alt="Screenshots of the dashboard project showing mobile version"
              />
            </div>
          </span>
        </div>
      </section>
      <section className=" bg-[#f7f3eb]">
        <div className="flex h-[60vh] shrink-0 items-center p-4 md:h-42">
          <span>
            <h1 className="text-5xl text-[#0e563d] font-bold">
              Download Your Free Monthly Savings Template
            </h1>{" "}
            <br />
            <p className="text-l text-[#0e563d]">
              Take that bold step towards financial freedom today!
              <br /> <span className="font-bold">Let our planner </span>chart
              your course to financial success.
            </p>{" "}
            <button className="bg-[#b3da67] m-6 text-charcoal font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200">
              Explore Our Free Tools Now!
            </button>
          </span>

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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* <CurrencyWidget /> */}
        {/* <SavingsCalculator /> */}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* <InvestmentNews /> */}
        {/* <StockTicker /> */}
      </section>
      <Footer />
    </div>
  );

  //     <main className="max-w-7xl mx-auto px-6 py-10">
  //       <section className="text-center text-white">
  //         <h1 className="text-5xl font-bold mb-4">Welcome to Mint Mogul 🧠💸</h1>
  //         <p className="text-xl text-slate-400">
  //           Smart financial tools, exclusive digital products, and wealth tips for
  //           high-earning spenders.
  //         </p>
  //       </section>

  //       <section className="mt-12">
  //         <CurrencyWidget />
  //       </section>

  //       <section className="mt-12">
  //         <NewsletterSignup />
  //       </section>

  //       <AffiliateDisclosure />
  //       <Layout>
  //       <Hero />
  //       <Newsletter />
  //     </Layout>
  //     </main>
  //   );
}
