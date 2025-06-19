import Link from "next/link"
import posthog from "posthog-js"

export default function CTASection() {
  return ( 
<section className="text-center mt-16">
  <h2 className="text-3xl font-bold text-[#536c32] mb-4">
    Ready to Upgrade Your Money Game?
  </h2>
  <p className="text-base text-gray-600 leading-relaxed mb-6">
    Join thousands of modern moguls using Mint Mogul to work smarter, spend
    sharper, and build lasting wealth.
  </p>

  <Link href="./products">
    <button
      onClick={() => posthog.capture("cta_clicked")}
      aria-label="Explore tools and templates"
      className="bg-[#b3da67] m-6 text-charcoal font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-yellow-400 transition-all duration-200"
    >
      Explore Our Money Tools & Templates
    </button>
  </Link>
</section>

  )
}

