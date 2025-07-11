"use client"
import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import {motion} from "framer-motion"

export default function ToolsTeaser(){
  return (
    <div className="mt-2 w-full flex grow flex-col gap-8 md:flex-row items-center px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative md:w-3/5 flex items-center justify-center"
      >
        {/* Lottie animation */}
        <div className="w-full max-w-[480px] md:max-w-[600px]">
          <Lottie
            animationData={require("@/public/animation/Financial-Reports.json")} // or use a remote JSON
            loop
            autoplay
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      {/* <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <div className="w-full max-w-[480px] md:max-w-[600px]">
            <Lottie
              animationData={require("@/public/animation/Retail-Trading-App.json")} // or use a remote JSON
              loop
              autoplay
              className="w-full h-auto"
            />
          </div>
         
        </div> */}
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center gap-6 rounded-lg px-4 py-8 md:w-2/5 md:px-5"
      >
        <div className=" max-w-7xl mx-auto px-4">
          <span>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0e563d] to-[#84cc16] text-transparent bg-clip-text">
              The Blueprint for Financial Success
            </h1>
            <br />{" "}
            <p className="text-lg ">
              At Mint Mogul, we believe building wealth starts with having the
              right tools and insights at your fingertips.
              <br /> <span className="font-bold">Let our planner </span>chart
              your course to financial success.
            </p>{" "}
            <br />
            <Link
              href={"/tools"}
              className="bg-[#b3da67] whitespace-nowrap rounded-full px-2 py-1 hover:bg-[#fcd34d] active:scale-95 transition-transform duration-200 shadow-lg"
            >
              Explore Our Free Tools Now!
            </Link>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
