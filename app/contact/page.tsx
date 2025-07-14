"use client";

import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { posthog } from "posthog-js";
import { motion } from "framer-motion";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    posthog.capture("submitted_contact_form", formData);
    toast.success("Thanks! We'll get back to you soon.");

    // Optional: delay before redirect
    setTimeout(() => {
      router.push("/pages/products");
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Mint Mogul</title>
        <meta
          name="description"
          content="Have questions, feedback, or partnership opportunities? Get in touch with the Mint Mogul team today."
        />
      </Head>

      <section className="relative min-h-screen bg-white dark:bg-gray-950 py-20 px-6 md:px-10 overflow-hidden">
        {/* Floating blobs */}
        <div className="absolute top-0 left-10 w-40 h-40 bg-[#b3da67]/30 rounded-full blur-2xl animate-pulse -z-10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#84cc16]/25 rounded-full blur-2xl animate-spin-slow -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#536c32] dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Whether you have a question about our financial tools, want to
            partner with us, or simply want to say hello, we&apos;re here to help.
            Mint Mogul serves a global community.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-[#b3da67] focus:border-[#b3da67] outline-none transition"
                placeholder="Jane Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-[#b3da67] focus:border-[#b3da67] outline-none transition"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-[#b3da67] focus:border-[#b3da67] outline-none transition"
                placeholder="Type your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#b3da67] hover:bg-[#536c32] text-white font-semibold px-6 py-2 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Prefer email? Reach us directly at:{" "}
              <a
                href="mailto:mintmogul@gmail.com"
                className="text-green-700 dark:text-green-400 underline"
              >
                mintmogul@gmail.com
              </a>
            </p>
            <p className="mt-2">
              We respond to all inquiries Monday to Friday.
            </p>
            <p className="mt-2">
              Global support. English language only for now.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
