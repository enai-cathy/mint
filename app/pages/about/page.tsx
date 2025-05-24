import Navbar from "@/app/ui/nav-bar";
import {
  CheckCircleIcon,
  CogIcon,
  StarIcon,
} from "@heroicons/react/24/outline"; 
import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-[#536c32] font-serif ">
        Meet Mint Mogul
      </h1>
      <p className="text-lg mb-8 text-gray-700">
        We’re not just another Money blog. Mint Mogul is your all-in-one
        playground for financial domination — built for big dreamers, and smart
        savers who want more from their money <strong>now.</strong>
      </p>

      <div className="space-y-8">
        <Section
          icon={<CogIcon className="text-blue-500 w-6 h-6" />}
          title="Tools That Think (So You Don’t Have To)"
          content="From investment trackers to savings calculators and daily money hacks — our free Insight-powered tools do the heavy lifting so you can make moves like a mogul. All brain, no fluff."
        />
        <Section
          icon={<StarIcon className="text-yellow-500 w-6 h-6" />}
          title="Premium Products That Pay for Themselves"
          content="Digital planners, income-boosting templates, financial vision boards — crafted to turn your mindset (and wallet) into a wealth-building machine. Buy once, win forever."
        />
        <Section
          icon={<CheckCircleIcon className="text-green-600 w-6 h-6" />}
          title="Curated Picks You Can Actually Trust"
          content="We only recommend tools we’d use ourselves. Think top-tier software, finance hacks, and subscription-worthy deals — all designed to 10x your money life."
        />
      </div>

      <div className="bg-gray-100 rounded-2xl p-8 mt-12 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Why Our Users Stick Around (and Brag About Us)
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>🧠 Built on psychology & behavioral finance principles</li>
          <li>📊 Real-time insights, not outdated advice</li>
          <li>💼 Perfect for solopreneurs, side hustlers & money geeks</li>
          <li>🚀 Designed to turn browsers into moguls — fast</li>
        </ul>
      </div>

      <div className="text-center mt-16">
        <h3 className="text-3xl font-bold text-[#536c32] mb-4">
          Ready to Upgrade Your Money Game?
        </h3>
        <p className="text-gray-600 mb-6">
          Join thousands of modern moguls using Mint Mogul to work smarter,
          spend sharper, and build lasting wealth.
        </p>
        <Link href="./products">
          <button className="bg-[#b3da67] m-6 text-charcoal font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200">
            Explore the Tools & Templates
          </button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}

function Section({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}
