import Footer from "@/app/components/Footer";
import ToolCard from "@/app/components/ToolCard";
import {
  CheckIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";


const tools = [
  {
    title: "TradingView – Chart Your Wealth Journey",
    description:
      "Access beautiful financial charts, set investment alerts, and track market trends. Ideal for investors and data-driven savers.",
    link: "https://www.tradingview.com/affiliate-program/",
    cta: "Try TradingView",
    type: "Investment Tools",
  },
  {
    title: "Payoneer – Get Paid Internationally",
    description:
      "Receive payments from global companies and freelance platforms in USD, EUR, GBP. Withdraw to your Nigerian bank account.",
    link: "https://www.payoneer.com/partners/",
    cta: "Register Now",
    type: "Cross-Border Payments",
  },
  {
    title: "The Monthly Budget Tracker (Template)",
    description:
      "Ditch spreadsheets forever. Our plug-and-play Notion budget template helps you track income, expenses, and financial goals in minutes.",
    type: "Digital Product",
    link: "/products/monthly-budget-tracker",
    cta: "View Template",
  },
  {
    title: "Savings Goal Tracker Pack",
    description:
      "Gamify your saving habits. Use our printable and digital savings charts to stay on track and motivated — from emergency funds to big life goals.",
    type: "Digital Product",
    link: "/products/savings-goal-tracker",
    cta: "Start Saving",
  },
  {
    title: "Gumroad – Sell Digital Products Fast",
    description:
      "Sell eBooks, courses, or financial tools? Gumroad is a no-fuss platform for creators that gets you paid quickly. Perfect for side hustlers.",
    type: "creator platform",
    link: "https://gumroad.com?ref=your_affiliate_id",
    cta: "Try Gumroad",
    external: true,
  },
  {
    title: "Payhip – Sell eBooks & Templates Easily",
    description:
      "Upload your products, set your prices, and let Payhip handle VAT, hosting, and payments—even in Nigeria. Perfect for budget trackers & planners.",
    link: "https://payhip.com/affiliates",
    cta: "Join Payhip",
    type: "Digital Product Platform",
  },
  {
    title: "ConvertKit – Build a Wealthy Email List",
    description:
      "If you sell anything online, ConvertKit helps you capture leads, automate emails, and boost your revenue while you sleep.",
    type: "Email Marketing",
    link: "https://convertkit.com?ref=your_affiliate_id",
    cta: "Grow With ConvertKit",
    external: true,
  },
  {
    title: "Lemon Squeezy – Sell Digital Goods Globally",
    description:
      "The easiest platform to sell Notion templates, finance courses, or digital downloads with built-in tax & payment support.",
    link: "https://www.lemonsqueezy.com/affiliates",
    cta: "Become a Partner",
    type: "Creator Platform",
  },
  {
    title: "Wise – Save Money on Global Transfers",
    description:
      "Send and receive money globally at real exchange rates. Perfect for freelancers and online entrepreneurs in Nigeria.",
    link: "https://wise.com/partners",
    cta: "Sign Up Free",
    type: "Banking & Payments",
  },
  {
    title: "NordVPN – Secure Your Digital Wallet",
    description:
      "Protect your browsing, avoid price discrimination, and stay anonymous while managing your finances online.",
    link: "https://nordvpn.com/affiliates/",
    cta: "Protect Yourself",
    type: "Privacy Tool",
  },
];

export default function ToolsPage() {
  return (
    // <div className="max-w-6xl mx-auto py-10 px-6">
    //   <h1 className="text-3xl font-bold mb-6">Top Financial Tools 💼</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //     {tools.map((tool) => (
    //       <ToolCard key={tool.name} {...tool} />
    //     ))}
    //   </div>
    // </div>
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-[#536c32]">
        Tools & Templates for Money Moguls
      </h1>
      <p className="text-lg mb-10 text-gray-700">
        Whether you're budgeting like a boss or scaling a side hustle, these are
        the tools that get you closer to wealth. Everything listed here is
        either made by us or handpicked for its value and credibility.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100"
          >
            <p className="text-sm text-gray-500 uppercase mb-2">{tool.type}</p>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {tool.title}
            </h2>
            <p className="text-gray-600 mb-4">{tool.description}</p>
            {tool.external ? (
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#b3da67] font-medium hover:underline"
              >
                {tool.cta}{" "}
                <ArrowRightIcon className="w-4 h-4 ml-1 text-[#b3da67]" />
              </a>
            ) : (
              <Link
                href={tool.link ?? "/"}
                className="inline-flex items-center text-[#b3da67] font-medium hover:underline"
              >
                {tool.cta} <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 bg-[#536c32] rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Want Exclusive Tools & Drops?
        </h3>
        <p className="text-white mb-4">
          Get early access to premium planners, financial tech hacks, and smart
          money deals — straight to your inbox.
        </p>
        <Link href="/newsletter">
          <button className="bg-[#b3da67] text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition text-lg">
            Join the Mogul List
          </button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}

