"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import { CheckCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { handleWhatsappClick } from "@/track";


const Image = lazy(() => import("next/image"));

const products = [
  {
    id: 1,
    href:"/products/bulk-milk-cooler-500-ltr",
    badge: "Best Seller",
    name: "Bulk Milk Cooler (BMC)",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389097/Bulk_Milk_Cooler_1500_Liter_kpoi2o.webp",
    details: {
      Capacity: "500 Litres",
      "Tank Orientation": "Horizontal",
      "Cooling Temperature": "0–4°C",
      "Chilling Time": "4 Hours",
      "Steel Grade": "SS304 Food Grade",
      Application: "Dairy farms & Milk collection centres",
    },
  },

  {
    id: 2,
    badge: "New",
        href:"/products/milk-atm-machine",

    name: "Milk ATM Vending Machine",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389098/Milk_ATM_Machine_uvb64m.webp",
    details: {
      "Storage Capacity": "100 Litres",
      Material: "Stainless Steel (SS)",
      "Automation Grade": "Fully Automatic",
      "Power Source": "Electric",
      "Type of Beverage": "Milk",
      Usage: "Milk vending for shops & dairy centres",
    },
  },

  {
    id: 3,
    badge: "Hot",
        href:"/products/milk-pasteurizer-machine-1000lph",

    name: "Milk Pasteurizer Machine",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389100/Stainless_Steel_Milk_Pasteurizer_Plate_txqdd4.webp",
    details: {
      Capacity: "1000 Litres / Hour",
      Material: "MS (Mild Steel)",
      "Automation Grade": "Semi-Automatic",
      Power: "20 HP",
      "Equipment Type": "Milk Pasteurizer",
      Application: "Industrial dairy processing",
    },
  },

  {
    id: 4,
    badge: "Top Rated",
        href:"/products/milk-processing-plant",

    name: "Milk Processing Plant",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389099/Milk_Processing_Plant_rptgnh.webp",
    details: {
      "Tank Orientation": "Horizontal",
      Material: "Stainless Steel (SS)",
      Voltage: "220V",
      Frequency: "50Hz",
      "Storage Material": "Milk / Dairy",
      Application: "Large-scale milk processing plants",
    },
  },
];

export default function ProductSectionPremium() {
  const [active, setActive] = useState(0);

  /* 🔁 AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const product = products[active];

  return (
    <section className="w-full mx-auto px-4 sm:px-6 md:px-10 mt-10">
      {/* Heading */}
      <div className="text-center mb-7">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight capilalize">
          Our <span className="text-blue-700">Bestsellers</span>
        </h2>
        <p className="mt-4 sm:mt-5 text-black max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
          Engineered construction machinery delivering unmatched durability,
          productivity, and performance on-site.
        </p>
      </div>

      <div className="grid min-w-0 gap-5 md:grid-cols-[340px_1fr] md:gap-12">
        {/* LEFT SELECTOR */}
        <div className="flex min-w-0 gap-3 overflow-x-auto pb-2 md:flex-col md:gap-4 md:overflow-visible md:pb-0">
          {products.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              className={`relative min-w-[190px] flex-1 text-left rounded-2xl p-4 sm:p-5 transition-all duration-300 md:min-w-0 md:w-full md:flex-none
                ${
                  active === index
                    ? "bg-gradient-to-r from-blue-500/20 to-transparent shadow-lg border border-blue-500"
                    : "bg-white border border-gray-200 hover:shadow-md"
                }`}
            >
              {active === index && (
                <span className="absolute left-0 top-4 h-[70%] w-[4px] bg-blue-500 rounded-full" />
              )}

              <p className="text-xs uppercase tracking-wide text-gray-500">
                {item.badge}
              </p>
              <h4 className="mt-1 font-semibold text-base sm:text-lg leading-snug">
                {item.name}
              </h4>
            </button>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="relative min-w-0 rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-blue-200 p-4 sm:p-7 md:p-10">
          <div className="grid min-w-0 items-center gap-6 sm:gap-10 md:grid-cols-2">
            {/* IMAGE */}
            <div className="relative flex min-w-0 justify-center">
              <div className="absolute -bottom-6 w-[70%] h-6 bg-black/10 blur-xl rounded-full" />

              <Suspense
                fallback={
                  <div className="h-[220px] w-[220px] rounded-2xl bg-gray-200 animate-pulse sm:h-[320px] sm:w-[320px]" />
                }
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={420}
                  height={420}
                  className="relative z-10 h-auto w-[220px] max-w-full object-contain sm:w-[320px] md:w-[420px]"
                />
              </Suspense>

              <span className="absolute right-0 top-2 z-10 rounded-full bg-[#FAAC18] px-3 py-1 text-xs text-white sm:top-4 sm:px-4">
                {product.badge}
              </span>
            </div>

            {/* DETAILS */}
            <div className="w-full min-w-0">
              <h3 className="mb-5 text-xl font-bold sm:mb-6 sm:text-3xl">
                {product.name}
              </h3>

              <div className="space-y-3 text-sm sm:space-y-4">
                {Object.entries(product.details).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <span className="flex min-w-0 items-center gap-2 text-black">
                      <CheckCheck className="text-blue-600 shrink-0" />
                      {key}
                    </span>
                    <span className="break-words font-medium text-black sm:text-right">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
                <div className="flex flex-col gap-2 sm:flex-row">
              <a
                onClick={() => handleWhatsappClick({ source: "Website BestSeller", obj:product.name })}
                href={`https://wa.me/9560156328?text=I want to enquire about ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#7ccf00] px-4 py-3 font-semibold text-white transition hover:bg-green-600 hover:shadow-lg sm:mt-8 sm:w-auto sm:px-6 sm:py-4"
              >
                Whatsapp Now
                <span className="text-xl">
                  <FaWhatsapp size={25} />
                </span>
              </a>
              <Link
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-blue-500 px-4 py-3 font-semibold text-white transition hover:bg-blue-600 hover:shadow-lg sm:mt-8 sm:w-auto sm:px-6 sm:py-4"
              >
                View product
                <span className="text-xl">
                  <AiFillProduct size={25} />
                </span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
