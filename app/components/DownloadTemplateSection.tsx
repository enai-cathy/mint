import React from "react";
import Link from "next/link";
import Image from "next/image";
import EmailForm from "./EmailForm";


export default function DownloadTemplate() {
    return (
      <>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-col">
          <span>
            <h1 className="text-5xl text-center text-[#0e563d] font-bold">
              Download Your Free Monthly Savings Template
            </h1>{" "}
            <br />
            <p className="text-l text-[#0e563d] whitespace-nowrap ">
              Take that bold step towards financial freedom today!
              <br /> <span className="font-bold">Let our planner </span>chart
              your course to financial success.
            </p>{" "}
            <br />
            <br />
          </span>
          <main className="p-6">
            <EmailForm />
          </main>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12"></div>
        </div>
      </>
    );}