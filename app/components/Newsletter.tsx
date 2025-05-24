

export default function NewsletterSignup() {
  return (
    <div className="mt-10 p-6 rounded-xl text-center">
      <h3 className="text-lg font-semibold">Stay Updated!</h3>
      <p className="text-sm text-gray-600">
        Get new blog posts, insights and expert tools delivered to your inbox.
      </p>
      <input
        className="mt-2 p-2 border rounded-md w-full"
        placeholder="Your email"
      />
      <button className="mt-2 bg-[#b3da67] text-white px-4 py-2 rounded-md">
        Subscribe
      </button>
    </div>
  );
}
