// import React from "react";
// import EmailForm from "./EmailForm";


// export default function DownloadTemplate() {
//     return (
//       <>
//         <div className="mt-4 flex grow flex-col gap-4 md:flex-col">
//           <span>
//             <h1 className="text-5xl text-center text-[#0e563d] font-bold">
//               Download Your Free Monthly Savings Template
//             </h1>{" "}
//             <br />
//             <p className="text-l text-[#0e563d] whitespace-nowrap ">
//               Take that bold step towards financial freedom today!
//               <br /> <span className="font-bold">Let our planner </span>chart
//               your course to financial success.
//             </p>{" "}
//             <br />
//             <br />
//           </span>
//           <main className="p-6">
//             <EmailForm />
//           </main>
//           <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12"></div>
//         </div>
//       </>
//     );}

import React from "react";
import EmailForm from "./EmailForm";


export default function DownloadTemplate() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0e563d]/80 via-[#6bbf59]/90 to-[#b3da67]/50 py-16 px-4 sm:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          Let’s make money talk 
        </h2>

        <p className="text-lg sm:text-xl text-white/90 max-w-xl">
          Download your{" "}
          <span className="font-bold">free monthly savings template</span> and
          take that bold step toward financial freedom. Let our planner guide
          your path to smarter money moves.
        </p>

        <div className="w-full max-w-lg mt-6">
          <EmailForm />
        </div>

          <a
            href="#products"
            className="mt-6 inline-block bg-white text-[#0e563d] font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore Our Tools 🚀
          </a>
        
      </div>
    </section>
  );
}
