import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center bg-white text-[#1f2937]">
      <div className="text-6xl mb-4">💸</div>
      <h1 className="text-4xl font-bold text-[#536c32] mb-3">Page Not Found</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Oops! The page you&apos;re looking for doesn&apos;t exist or may have
        been moved. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="inline-block bg-[#b3da67] hover:bg-[#a0c75f] text-white font-medium px-6 py-3 rounded-full transition"
      >
        Return to Homepage
      </Link>
      <p className="text-xs text-gray-400 mt-6">
        Need help? Email us at{" "}
        <a
          href="mailto:mintmogul@gmail.com"
          className="underline text-green-700"
        >
          mintmogul@gmail.com
        </a>
      </p>
    </div>
  );
}
