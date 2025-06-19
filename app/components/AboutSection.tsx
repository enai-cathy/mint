import React from "react";
import {
  CheckCircleIcon,
  CogIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function AboutSection(){ 
    return (
      <div>
        <h1 className="text-5xl font-bold text-[#536c32] font-serif mb-4">
          Meet Mint Mogul
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl leading-relaxed mb-8">
          We’re not just another Money blog. Mint Mogul is your all-in-one
          playground for financial domination — built for big dreamers, and
          smart savers who want more from their money <strong>now.</strong>
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
