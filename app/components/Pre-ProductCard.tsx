type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  gumroadUrl: string;
  imageUrl: string;
  locked: boolean;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <p className="font-bold">{product.price}</p>

        {product.locked ? (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-2">
            🔒 Unlock with Email
          </button>
        ) : (
          <a
            href={product.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-600 text-white text-center px-4 py-2 rounded-lg mt-2"
          >
            Download Now
          </a>
        )}
      </div>
    </div>
  );
}
