import Head from "next/head";
import PremiumCard from "@/app/components/Pre-ProductCard";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Footer from "@/app/components/Footer";

const premiumProducts = [
  {
    id: 1,
    title: "The Ultimate Budget Blueprint",
    description:
      "Master your monthly income, expenses, and goals with this actionable eBook.",
    price: "$250",
    originalPrice: "USD $450",
    coverImage: "/ebooks/budget-blueprint.jpg",
    link: "https://gumroad.com/l/budget-blueprint", // Replace with actual link
  },
  {
    id: 2,
    title: "Smart Savings Playbook",
    description:
      "Step-by-step savings strategy for real-life goals, big or small.",
    price: "$120",
    originalPrice: "USD $350",
    coverImage: "/ebooks/savings-playbook.png",
    link: "https://gumroad.com/l/savings-playbook",
  },
];

export default function PremiumPage() {
  return (
    <>
      <Head>
        <title>Premium Products | Mint Mogul</title>
        <meta
          name="description"
          content="Discover Mint Mogul's premium financial eBooks designed to help you budget smarter, save faster, and grow your wealth."
        />
      </Head>

      <section className="bg-[#fefcf7] text-[#1f2937] px-6 py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Premium Tools for Your Financial Empire
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Curated, expert-level eBooks to help you budget, save, and invest with
          clarity and confidence.
        </p>
        <div className="flex justify-center gap-4 mt-6 text-green-700">
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-green-700" />
            Secure checkout
          </div>
          <div className="flex items-center gap-2">
            <StarIcon className="w-5 h-5 text-yellow-500" />
            Trusted by 1,000+ users
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-6 py-12">
        {premiumProducts.map((product) => (
          <PremiumCard key={product.id} product={product} />
        ))}
      </section>

      <section className="bg-[#1f2937] text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to level up your finances?
        </h2>
        <p className="mb-6">
          Grab your copy and take the first step toward smarter money moves.
        </p>
        <Link
          href="/premium"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Explore Premium eBooks
        </Link>
        <Footer/>
      </section>
    </>
  );
}
