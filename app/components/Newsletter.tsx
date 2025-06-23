'use client'
import posthog, { PostHog } from "posthog-js";
import { useState} from "react";
import {toast} from "react-hot-toast";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setSubmitting(true);
      // Simulate success delay
      await new Promise((res) => setTimeout(res, 800));

      posthog.capture("subscribed_newsletter", { email });
      toast.success("You're subscribed!");

      setEmail("");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-5 p-5 rounded-xl text-center">
      <h3 className="text-lg font-semibold mb-1">Stay Updated!</h3>
      <p className="text-sm text-gray-600 mb-1">
        Get new blog posts, financial tips, insights and expert tools delivered
        to your inbox weekly.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          aria-label="Your email"
          className="p-2 border border-gray-300 rounded-md w-full sm:max-w-2xl mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          disabled={submitting}
          className="bg-[#b3da67] hover:bg-[#a4c95f] text-white px-4 py-2 rounded-md font-medium transition-all disabled:opacity-50"
        >
          {submitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}