import ToolCard from "@/app/components/ToolCard";

const tools = [
  {
    name: "Revolut",
    description: "All-in-one global finance app.",
    affiliateUrl: "https://revolut.pxf.io/mintmogul",
    image: "/tools/revolut.png",
  },
  {
    name: "YNAB",
    description: "Best app for budgeting like a pro.",
    affiliateUrl: "https://ynab.com/mintmogul",
    image: "/tools/ynab.png",
  },
  {
    name: "Betterment",
    description: "Smart investing, made simple.",
    affiliateUrl: "https://betterment.pxf.io/mintmogul",
    image: "/tools/betterment.png",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">Top Financial Tools 💼</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </div>
  );
}
