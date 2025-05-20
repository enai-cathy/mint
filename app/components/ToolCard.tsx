// components/ToolCard.tsx
import Link from "next/link";

// export default function ToolCard({
//   title,
//   description,
//   url,
// }: {
//   title: string;
//   description: string;
//   url: string;
// }) {
//   return (
//     <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:bg-slate-700 transition">
//       <h3 className="text-xl font-semibold text-gold">{title}</h3>
//       <p className="text-slate-300 mt-2">{description}</p>
//       <Link
//         href={url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-skyblue font-bold mt-4 block"
//       >
//         Try Now →
//       </Link>
//     </div>
//   );
// }
export default function ToolCard({ name, description, affiliateUrl, image }) {
  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:scale-105"
    >
      <img src={image} alt={name} className="w-full h-40 object-contain p-4" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </a>
  );
}
