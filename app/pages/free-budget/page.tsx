import ToolCard from "@/app/components/ToolCard";
import Link from "next/link";

export default function FreeMonthlyBudget() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Your Free Monthly Budget Template
      </h1>
      <p className="mb-6 text-gray-700">
        🎉 Thanks for signing up! Below is your Monthly Budget Planner to help
        you track income, expenses, and savings goals. Start using it today to
        take control of your finances! Note that this is an excel sheet. <br />
        Check out our products for PDF- editable/Printable templates or more
        excel sheets!!
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold">Monthly Budget Planner</h2>
        <p className="mt-2 text-gray-600">
          This template includes sections for:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Income Tracking</li>
          <li>Fixed & Variable Expenses</li>
          <li>Savings Goals Calculator</li>
          <li>Credit Card Tracker</li>
          <li>Monthly Summary</li>
          
        </ul>
        <a
          href="/downloads/monthly-budget-template.pdf"
          download
          className="inline-block mt-4 px-4 py-2 bg-[#b3da67] text-white rounded hover:bg-green-700 transition"
        >
          Download the Template
        </a>
        <p className="text-[10px] text-gray-300">
          this template was inspired by *Personal Budget 2022- Reddit*
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Other Tools You Might Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
     
          <ToolCard
            name="Savings Goal Tracker"
            description="Track and crush your savings targets."
            affiliateUrl="#"
            image="/images/savings-tracker.png"
          />
        <ToolCard
          name="Debt Crusher Toolkit"
          description="Your guide to eliminating debt faster."
          affiliateUrl="#"
          image="/images/debt-crusher.png"
        />
        {/* Add more ToolCards as needed */}
      </div>
    </main>
  );
}
