
// export default function Newsletter() {
//     return (
//       <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:bg-slate-700 transition">
//         <h3 className="text-xl font-semibold text-gold">
//           Your Financial Edge Starts Here
//         </h3>
//         <p className="text-slate-300 mt-2">
//           “Get exclusive tips, elite tools, and premium insights. Weekly. No
//           fluff.”
//         </p>
//         Explore Smart Tools→
//       </div>
//     );
//   }
// components/NewsletterSignup.tsx (updated)
export default function NewsletterSignup() {
  return (
    
    <form
      action="https://your-convertkit-form-url"
      method="post"
      className="bg-skyblue p-6 rounded-xl text-center mt-12"
    >
      <h2 className="text-xl font-bold mb-2">Subscribe to Mint Mogul 💌</h2>
      <input
        type="email"
        name="email_address"
        placeholder="Enter your email"
        required
        className="px-4 py-2 rounded-lg w-full md:w-80"
      />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg mt-4">
        Subscribe
      </button>
    </form>
    
  )
}
