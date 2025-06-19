import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";


export default function FeaturesGrid() {
  return (
    <>
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
          <br />
          <br />
          <Link
            href={"pages/tools"}
            className="bg-[#b3da67] m-6 text-charcoal font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200"
          >
            Explore Our Free Tools Now!
          </Link>
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
    </>
  );
}
