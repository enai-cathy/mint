import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ToolsTeaser(){
  return (
    <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
      <span>
        <h1 className="text-4xl text-white font-bold">
          The Blueprint for Financial Success
        </h1>{" "}
        <br />{" "}
        <p className="text-lg text-white">
          At Mint Mogul, we believe building wealth starts with having the right
          tools and insights at your fingertips.
          <br /> <span className="font-bold">Let our planner </span>chart your
          course to financial success.
        </p>{" "}
        <br />
        <Link
          href={"/pages/tools"}
          className="bg-[#b3da67] text-charcoal font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200"
        >
          Explore Our Free Tools Now!
        </Link>
      </span>

      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/mint-mogul.png"
          width={1000}
          height={760}
          className="hidden md:block"      
          loading="lazy"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <Image
          src="/mint-mogul.png"
          width={560}
          height={620}
          className="block md:hidden"
          loading="lazy"
          alt="Screenshots of the dashboard project showing mobile version"
        />
      </div>
    </div>
  );
}
