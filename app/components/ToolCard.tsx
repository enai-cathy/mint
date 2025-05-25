import Image from "next/image";

interface ToolCardProps {
  name: string;
  description: string;
  affiliateUrl: string;
  image: string;
}

export default function ToolCard({
  name,
  description,
  affiliateUrl,
  image,
}: ToolCardProps) {
  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name} via affiliate link`}
      className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-105 overflow-hidden"
    >
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </a>
  );
}
