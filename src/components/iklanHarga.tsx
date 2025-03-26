'use client';
import { useState } from "react";

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  
  const plans = {
    weekly: [
      { name: "Lite", price: "Rp 400rb", features: ["12.000 tayangan", "4.000 viewer", "Youtube Ads In-Stream", "30 kali tayang TVKU", "1 minggu tayang Jateng.news", "1 minggu tvku.tv"] },
      { name: "Umum", price: "Rp 500rb", features: ["15.000 tayangan", "5.000 viewer", "Ads In-Stream", "30 kali tayang TVKU", "1 minggu tayang Jateng.news", "1 minggu tvku.tv"], popular: true },
      { name: "Bisnis", price: "Rp 600rb", features: ["20.000 tayangan", "6.000 viewer", "Ads In-Stream", "30 kali tayang TVKU", "1 minggu tayang Jateng.news", "1 minggu tvku.tv"] }
    ],
monthly: [
  { name: "Lite", price: "Rp 1.5jt", features: ["12.000 tayangan", "4.000 viewer", "Youtube Ads In-Stream", "30 kali tayang TVKU", "1 minggu tayang Jateng.news", "1 minggu tvku.tv"] },
  { name: "Umum", price: "Rp 2jt", features: ["15.000 tayangan", "5.000 viewer", "Ads In-Stream", "30 kali tayang TVKU", "1 minggu tayang Jateng.news", "1 minggu tvku.tv"], popular: true },
  { name: "Bisnis", price: "Rp 2.5jt", features: ["20.000 tayangan", "6.000 viewer", "Ads In-Stream", "30 kali tayang TVKU", "1 minggu tayang Jateng.news", "1 minggu tvku.tv"] }
],
    quarterly: [
      { name: "Lite", price: "Rp 4.5jt", features: ["12.000 tayangan", "4.000 viewer", "Youtube Ads In-Stream", "30 kali tayang TVKU", "1 minggu tayang Jateng.news", "1 minggu tvku.tv"] },
      { name: "Umum", price: "Rp 6jt", features: ["15.000 tayangan", "5.000 viewer", "Ads In-Stream", "30 kali tayang TVKU", "1 minggu tayang Jateng.news", "1 minggu tvku.tv"], popular: true },
      { name: "Bisnis", price: "Rp 7.5jt", features: ["20.000 tayangan", "6.000 viewer", "Ads In-Stream", "30 kali tayang TVKU", "1 minggu tayang Jateng.news", "1 minggu tvku.tv"] }
    ], // Isi dengan data triwulanan
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex space-x-4 bg-gray-100 p-2 rounded-lg">
        {["weekly", "monthly", "quarterly"].map((cycle) => (
          <button
            key={cycle}
            className={`px-4 py-2 rounded-lg ${billingCycle === cycle ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}
            onClick={() => setBillingCycle(cycle)}
          >
            {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex justify-center space-x-6">
        {plans[billingCycle].map((plan) => (
          <div
            key={plan.name}
            className={`p-6 border rounded-lg shadow-md w-64 ${plan.popular ? "bg-blue-500 text-white" : "bg-white"}`}
          >
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="text-2xl font-bold">{plan.price} <span className="text-sm">/ minggu</span></p>
            <ul className="mt-4 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  ✅ <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`mt-4 px-4 py-2 rounded-lg w-full ${plan.popular ? "bg-white text-blue-500" : "bg-blue-500 text-white"}`}>Order</button>
          </div>
        ))}
      </div>
    </div>
);
return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex space-x-4 bg-gray-100 p-2 rounded-lg">
        {["weekly", "monthly", "quarterly"].map((cycle) => (
          <button
            key={cycle}
            className={`px-4 py-2 rounded-lg ${billingCycle === cycle ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}
            onClick={() => setBillingCycle(cycle)}
          >
            {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex justify-center space-x-6">
        {plans[billingCycle].map((plan) => (
          <div
            key={plan.name}
            className={`p-6 border rounded-lg shadow-md w-64 ${plan.popular ? "bg-blue-500 text-white" : "bg-white"}`}
          >
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="text-2xl font-bold">{plan.price} <span className="text-sm">/ minggu</span></p>
            <ul className="mt-4 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className={`mt-4 px-4 py-2 rounded-lg w-full ${plan.popular ? "bg-white text-blue-500" : "bg-blue-500 text-white"}`}>Order</button>
          </div>
        ))}
      </div>
    </div>
  );
}
