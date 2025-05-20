// components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link"



type ProductCardProps = {
  title: string;
  description: string;
  price: string;
  image: string;
  link: string;
};

export default function ProductCard({
  title,
  description,
  price,
  image,
  link,
}: ProductCardProps) {
  return (
    <Link
      href={link}
      className="block rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="text-sm font-bold text-sky-600">{price}</p>
    </Link>
  );
}
