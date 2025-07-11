"use client";

import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { posthog } from "posthog-js";

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

      <section className="min-h-screen bg-white dark:bg-gray-950 py-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#536c32] dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Whether you have a question about our financial tools, want to
            partner with us, or simply want to say hello, we're here to help.
            Mint Mogul serves a global community.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md"
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
                className="mt-1 block w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
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
                className="mt-1 block w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
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
                className="mt-1 block w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
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
        </div>
      </section>
    </>
  );
}
