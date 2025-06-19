import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection(){
    return( 
<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
  <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
    <span>
      <h1 className="text-4xl text-[#0e563d] font-bold">
        Build Your Financial Empire
      </h1>{" "}
      <br /> <p className="text-2xl">with Our Wealth Builder's Toolkit</p>{" "}
      <br />
      Equip yourself with expert-backed tools and strategies to grow wealth and
      reach your money goals—smarter.
      <br /> <br />
      <Link
        href={"/products"}
        className="bg-[#b3da67] mt-10 text-charcoal font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200"
      >
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
    )
}
