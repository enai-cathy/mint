"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { text } from "node:stream/consumers";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add email saving logic (API call, external service, etc.)
    console.log("Email submitted:", email);
    router.push("pages/free-budget");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">
        Download the Free Personal Monthly Budget Template
      </h2>
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
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="whitespace-nowrap bg-[#b3da67] m-3 text-charcoal font-semibold px-2 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200"
      >
        Get the Free Template
      </button>
    </form>
  );
}
