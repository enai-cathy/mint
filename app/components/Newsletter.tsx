
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
// components/NewsletterSignup.tsx
export default function NewsletterSignup() {
  return (
    <div className="mt-10 p-6 bg-blue-50 rounded-xl text-center">
      <h3 className="text-lg font-semibold">Stay Updated!</h3>
      <p className="text-sm text-gray-600">Get new posts delivered to your inbox.</p>
      <input className="mt-2 p-2 border rounded-md w-full" placeholder="Your email" />
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md">Subscribe</button>
    </div>
  );
}
