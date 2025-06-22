'use client'
import React from "react";
import ProductCard from "./ProductCard";
import {motion } from 'framer-motion'

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
        <div className="mt-4 flex grow flex-col gap-4">
         
            <span>
              {" "}
              <h1 className="text-4xl text-center text-[#0e563d] font-bold">
                Curated for Any Stage of Wealth Building
              </h1>{" "}
              <br />
              <p className="text-xl text-center text-[#0e563d]">
                Whether you're starting out or scaling up, Mint Mogul equips you
                with what you need to build real wealth and
                 <span className="font-bold"> meet your needs. </span>
              </p>{" "}
            </span>
          </div>
        
        <div className="mt-12 flex grow gap-4 md:flex-row">
          <main className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </main>
        </div>
      </>
    );
}