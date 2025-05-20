// app/products/page.tsx
import ProductCard from "@/app/components/ProductCard";

const products = [
  {
    title: "Ultimate Budgeting Blueprint",
    description:
      "A premium guide to help you master monthly cash flow and spending habits.",
    price: "$29",
    image: "/products/budget-blueprint.jpg",
    link: "https://gumroad.com/l/budgetblueprint",
  },
  {
    title: "Luxury Credit Card Secrets",
    description: "Ebook uncovering top-tier credit perks for high spenders.",
    price: "$49",
    image: "/products/credit-secrets.jpg",
    link: "https://gumroad.com/l/creditsecrets",
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Digital Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((p) => (
          <ProductCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}
