"use client";

import posthog from "posthog-js";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setSubmitting(true);
      await new Promise((res) => setTimeout(res, 800)); // Simulate request delay
      posthog.capture("subscribed_newsletter", { email });
      toast.success("You're subscribed! 🎉");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto mt-10 p-8 rounded-2xl shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Magic Beans blob */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#b3da67]/30 rounded-full blur-2xl animate-pulse -z-10" />
      <div className="absolute bottom-0 -right-10 w-28 h-28 bg-[#84cc16]/20 rounded-full blur-xl animate-spin-slow -z-10" />

      <h3 className="text-2xl font-bold mb-2 text-[#0e563d]">Stay Updated</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
        Weekly money tips, free tools, and new drops straight to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-3"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Your email"
          className="flex-1 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-[#b3da67] focus:border-[#b3da67] bg-white dark:bg-gray-800 dark:text-white transition"
        />

        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          disabled={submitting}
          className="bg-[#b3da67] hover:bg-[#0e563d] text-white px-6 py-2 rounded-md font-medium transition-all disabled:opacity-60"
        >
          {submitting ? "Subscribing..." : "Subscribe"}
        </motion.button>
      </form>

      <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
