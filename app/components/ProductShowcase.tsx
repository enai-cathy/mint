import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";




export default function ProductShowcase(){
     const products = [
        {
          title: "Wealth Tracker",
          description: "Monitor your income, expenses, and net worth.",
          price: "$9.99",
          image: "/images/wealth-tracker.png",
          link: "/products/wealth-tracker",
        },
        {
          title: "Debt Crusher Toolkit",
          description: "Strategies to reduce and manage debt effectively.",
          price: "$14.99",
          image: "/images/debt-crusher.png",
          link: "/products/debt-crusher-toolkit",
        },
        {
          title: "Savings Goal Tracker",
          description: "Stay on track with your savings goals easily.",
          price: "$7.99",
          image: "/images/savings-goal.png",
          link: "/products/savings-goal-tracker",
        },
      ];
    
    return (
      <>
        <div className="mt-4 flex grow gap-4 md:flex-row">
          <div className="flex justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
            <span>
              {" "}
              <h1 className="text-5xl text-[#0e563d] font-bold">
                Curated for Any Stage of Wealth Building
              </h1>{" "}
              <br />
              <p className="text-l text-[#0e563d]">
                Whether you're starting out or scaling up, Mint Mogul equips you
                with what you need to build real wealth and
                <br /> <span className="font-bold">meet your needs. </span>
              </p>{" "}
            </span>
          </div>
        </div>
        <div className="mt-12">
          <main className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                link={product.link}
              />
            ))}
          </main>
        </div>
      </>
    );
}