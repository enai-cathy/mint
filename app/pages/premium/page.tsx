import fs from "fs";
import path from "path";
import ProductCard from "@/app/components/ProductCard";

const products = [
  {
    id: "ebook-smart-investing",
    title: "Smart Investing Playbook",
    description:
      "Your 40-page guide to growing long-term wealth with smart, proven strategies.",
    price: "$12",
    gumroadUrl: "https://yourstore.gumroad.com/l/smart-investing",
    imageUrl: "/products/smart-investing.jpg",
    locked: false,
  },
  {
    id: "exclusive-fintech-guide",
    title: "Exclusive Fintech Toolkit",
    description:
      "Download our premium list of fintech tools for budgeting, investing & wealth tracking.",
    price: "FREE for subscribers",
    gumroadUrl: "",
    imageUrl: "/products/fintech-guide.jpg",
    locked: true,
  },
];

export default function PremiumPage({ products }: { products: any[] }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">📚 Premium Downloads</h1>
      <p className="text-gray-600 mb-8">
        Curated digital tools and guides to help you master your money and make
        smarter financial moves.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "data/products.json");
//   const fileData = fs.readFileSync(filePath, "utf8");
//   const products = JSON.parse(fileData);

//   return {
//     props: {
//       products,
//     },
//   };
// }
