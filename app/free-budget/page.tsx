'use client'
import Head from "next/head";
import { posthog } from "posthog-js";
import { toast } from "react-hot-toast";
import ProductCard from '@/app/components/ProductCard';
import { motion } from "framer-motion";
import CTABlock from "../components/CTABlock";



export default function FreeMonthlyBudget() {
  return (
    <main className="max-w-3xl mx-auto p-6 mt-20">
      <Head>
        <title>Download Your Free Budget Template | Mint Mogul</title>
        <meta
          name="description"
          content="Download your free monthly budget planner to start tracking income, expenses, and savings goals. Perfect for smarter money management."
        />
      </Head>

      <h1 className="text-3xl font-bold mb-4 text-[#536c32]">
        Your Free Monthly Budget Template
      </h1>
      <p className="mb-6 text-gray-700 text-lg">
        🎉 Thanks for signing up! Below is your Monthly Budget Planner to help
        you track income, expenses, and savings goals. Start using it today to
        take control of your finances! Note that this is an excel sheet. <br />
        Check out our products for PDF- editable/Printable templates or more
        excel sheets!!
      </p>

      <div className="text-center bg-gray-100 p-4 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-[#536c32]">
          Monthly Budget Planner
        </h2>
        <p className="mt-2 text-gray-600">
          This template includes sections for:
        </p>
        <ul className="list-disc list-inside text-gray-600 font-md">
          <li>Income Tracking</li>
          <li>Fixed & Variable Expenses</li>
          <li>Savings Goals Calculator</li>
          <li>Credit Card Tracker</li>
          <li>Monthly Summary</li>
        </ul>

        {/* Magic Bean Bounce Arrow */}
        <div className="flex flex-col items-center mb-2">
          <span className="text-2xl animate-bounce">🌱</span>
          <svg
            className="w-6 h-6 text-green-600 animate-bounce mt-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <a
          href="/downloads/monthly-budget-template.pdf"
          download
          onClick={() => {
            posthog.capture("downloaded_budget_template", {
              source: "freebie-page",
            });
            toast.success("Download starting...");
          }}
          className="inline-block mt-2 px-4 py-2 bg-[#b3da67] text-white rounded hover:bg-green-700 transition"
        >
          Download the Template
        </a>

        <p className="text-[10px] text-gray-300">
          This template was inspired by *Personal Budget 2022- Reddit*
        </p>
      </div>

      <h2 className="text-2xl font-bold">Other Products You Might Like</h2>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          onClick={() =>
            posthog.capture("clicked_product_from_freebie", {
              title: "Savings Goal Planner",
            })
          }
        >
          <ProductCard
            title="Savings Goal Planner"
            description="Set and track realistic savings goals, stay motivated, and watch your wealth grow — no matter where you live."
            price="USD $8"
            originalPrice="USD $20"
            link="https://gumroad.com/l/savings-goal-planner?ref=your_affiliate_id"
            image="/savings-planner.png"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() =>
            posthog.capture("clicked_product_from_freebie", {
              title: "Debt Crusher Toolkit",
            })
          }
        >
          <ProductCard
            title="Debt Crusher Toolkit"
            description="Organize and eliminate your debt faster with this globally trusted set of tools and strategies."
            price="USD $20"
            link="https://lemonsqueezy.com/products/debt-crusher-toolkit?ref=your_affiliate_id"
            image="/debt.png"
          />
        </motion.div>
      </div>

      <CTABlock
        heading="Want More Smart Money Tools?"
        subheading="Check out our full shop of planners, templates, and expert money tools — or explore the blog for free tips."
        primaryCta={{ href: "/pages/products", label: "Explore Products" }}
        secondaryCta={{ href: "/blog", label: "Visit Blog" }}
      />
    </main>
  );
}
