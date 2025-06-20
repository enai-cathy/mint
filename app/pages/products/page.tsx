import Footer from "@/app/components/Footer";
import ProductCard from "@/app/components/ProductCard";
const products = [
  {
    id: "monthly-budget-tracker",
    title: "Monthly Budget Tracker",
    description:
      "Track your monthly income and expenses effortlessly with a simple, clear layout designed for everyone worldwide.",
    price: "Free",
    originalPrice: "USD $8",
    link: "https://cathyspark262.gumroad.com/l/rseip",
    image: "/free-template.png",
  },
  {
    id: "debt-crusher-toolkit",
    title: "Debt Crusher Toolkit",
    description:
      "Organize and eliminate your debt faster with this globally trusted set of tools and strategies.",
    price: "USD $20",
    link: "https://lemonsqueezy.com/products/debt-crusher-toolkit?ref=your_affiliate_id",
    image: "/debt.png",
  },
  {
    id: "savings-goal-planner",
    title: "Savings Goal Planner",
    description:
      "Set and track realistic savings goals, stay motivated, and watch your wealth grow — no matter where you live.",
    price: "USD $8",
    originalPrice: "USD $20",
    link: "https://gumroad.com/l/savings-goal-planner?ref=your_affiliate_id",
    image: "/savings-planner.png",
  },
  {
    id: "net-worth-builder",
    title: "Net Worth & Wealth Builder",
    description:
      "Monitor assets and liabilities in one place, helping you confidently build wealth across borders.",
    price: "USD $150",
    link: "https://gumroad.com/l/net-worth-builder?ref=your_affiliate_id",
    image: "/net-worth.png",
  },
  {
    id: "small-biz-bookkeeping-kit",
    title: "Small Business Bookkeeping Kit",
    description:
      "Ideal for entrepreneurs everywhere — track expenses, revenue, and taxes with ease.",
    price: "USD $40",
    link: "https://lemonsqueezy.com/products/small-biz-bookkeeping-kit?ref=your_affiliate_id",
    image: "/small-business.png",
  },
  {
    id: "subscription-tracker",
    title: "Subscription Tracker",
    description:
      "Manage recurring payments and subscriptions effortlessly to save money monthly, wherever you are.",
    price: "USD $10",
    originalPrice: "USD $15",
    link: "https://gumroad.com/l/subscription-tracker?ref=your_affiliate_id",
    image: "/subscription.png",
  },
];

export default function ProductsPage() {
  return (
    <>
    <main>
      {/* header & description */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
      
    </main>
    <Footer/>
    </>
  );
}
