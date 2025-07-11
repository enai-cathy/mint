"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    posthog.capture("download_template_clicked", {
      email,
      name,
    });

    console.log("Submitted:", { email, name });

    // redirect to thank-you or download page
    router.push("/free-budget");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      {/* <h2 className="text-2xl text-[#0e563d] font-bold mb-4">
        Download the Free Personal Monthly Budget Template
      </h2> */}
      <p className="mb-4 text-gray-600">Enter your email to get access:</p>

      <input
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <input
        type="text"
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <button
        type="submit"
        className="whitespace-nowrap bg-[#b3da67] m-3 text-charcoal font-semibold px-4 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200"
      >
        Get the Free Template
      </button>
    </form>
  );
}
