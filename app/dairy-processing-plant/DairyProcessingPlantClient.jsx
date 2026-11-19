"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Factory,
  Milk,
  Snowflake,
  Thermometer,
  Warehouse,
  Zap,
  Settings,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";
import Cta from "@/components/landingpage/Cta";
import Popup from "@/components/Popup";

const productRange = [
  { name: "Milk Processing Plant", href: "/products/milk-processing-plant" },
  { name: "Bulk Milk Cooler (BMC)", href: "/products/bulk-milk-cooler-1500-Ltr" },
  { name: "Milk Chilling Plant", href: "/products/milk-chilling-plant" },
  { name: "Milk Pasteurizer Machine", href: "/products/milk-pasteurizer-machine-1000lph" },
  { name: "Milk Storage Tank", href: "/products/milk-storage-tank" },
  { name: "Milk Homogenizer", href: "/products/high-pressure-milk-homogenizer" },
  { name: "Curd Making Machine", href: "/products/curd-making-machine" },
  { name: "Paneer Making Machine", href: "/products/paneer-making-machine" },
  { name: "Steam Boiler", href: "/products/steam-boiler-300kg" },
  { name: "Milk ATM Machine", href: "/products/milk-atm-machine" },
  { name: "Stainless Steel Mixing Tank", href: "/products/stainless-steel-chemical-liquid-mixing-tank" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Hygienic Stainless Steel Construction",
    text: "Manufactured using quality stainless steel materials, including SS304 and SS316 options, depending on equipment requirements.",
  },
  {
    icon: Settings,
    title: "Efficient Milk Processing",
    text: "Designed to support smooth milk processing operations with better operational control.",
  },
  {
    icon: Zap,
    title: "Energy-Efficient Performance",
    text: "Practical equipment designs support efficient energy consumption and reliable daily operations.",
  },
  {
    icon: Warehouse,
    title: "Easy Operation and Maintenance",
    text: "User-friendly operating systems and accessible arrangements simplify cleaning and maintenance.",
  },
  {
    icon: Factory,
    title: "Customized Dairy Solutions",
    text: "Plant configurations can be planned according to capacity, available space, and operational needs.",
  },
];

const equipment = [
  {
    title: "Milk Chilling Plant",
    text: "Used to reduce the temperature of freshly collected milk and support safe storage before further processing.",
    icon: Snowflake,
  },
  {
    title: "Milk Pasteurizer Machine",
    text: "Heats milk at a controlled temperature for a specified period and then cools it to help make milk safer.",
    icon: Thermometer,
  },
  {
    title: "Milk Storage Tank",
    text: "Used for hygienic milk storage during different stages of dairy processing, generally with food-grade stainless steel.",
    icon: Warehouse,
  },
  {
    title: "Milk Homogenizer",
    text: "Breaks down fat globules and distributes them evenly to improve consistency and prevent cream separation.",
    icon: Milk,
  },
  {
    title: "Cream Separator",
    text: "Separates cream from milk according to the required fat content for cream, butter, and dairy product manufacturing.",
    icon: PackageCheck,
  },
  {
    title: "Curd and Paneer Equipment",
    text: "Specialized machines help produce curd and paneer with improved processing efficiency and consistent production.",
    icon: Factory,
  },
];

const applications = [
  "Dairy Farms",
  "Milk Collection Centres",
  "Milk Cooperatives",
  "Commercial Dairy Industries",
  "Mini Dairy Plants",
  "Food Processing Industries",
];

const benefits = [
  "Improved Milk Quality",
  "Better Hygiene",
  "Higher Productivity",
  "Reduced Manual Work",
  "Consistent Processing",
  "Business Expansion",
  "Multiple Dairy Products",
];

const faqs = [
  {
    question: "What is a Dairy Processing Plant?",
    answer:
      "A Dairy Processing Plant is a facility equipped with specialized machinery used for chilling, pasteurizing, homogenizing, storing, and processing raw milk into different dairy products.",
  },
  {
    question: "Which machines are required for a Dairy Processing Plant?",
    answer:
      "Common equipment includes Bulk Milk Coolers, Milk Chilling Plants, Milk Pasteurizers, Milk Storage Tanks, Homogenizers, Cream Separators, and packaging machines. The exact equipment depends on the products and production capacity.",
  },
  {
    question: "What products can be manufactured in a Dairy Processing Plant?",
    answer:
      "A dairy processing plant can be configured to manufacture milk, curd, paneer, butter, ghee, cream, cheese, and other dairy products.",
  },
  {
    question: "What materials are used in dairy processing equipment?",
    answer:
      "Food-grade stainless steel, particularly SS304 and SS316, is commonly used because of its durability, corrosion resistance, and hygienic properties.",
  },
  {
    question: "Does Bhagyalaxmi Industries manufacture dairy processing equipment?",
    answer:
      "Yes. Bhagyalaxmi Industries offers Milk Processing Plants, Bulk Milk Coolers, Milk Pasteurizers, Milk Storage Tanks, Milk Chilling Plants, and other dairy machinery.",
  },
  {
    question: "Can I get a dairy plant according to my production capacity?",
    answer:
      "Yes. Equipment selection and plant configuration can be planned according to your milk processing volume, available space, and operational requirements.",
  },
];

export default function DairyProcessingPlantClient() {
  const [openFaq, setOpenFaq] = useState(0);
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <>
      <Navbar />

      <section className="relative min-h-[520px] md:min-h-[620px] overflow-hidden bg-[#082d67]">
        <Image
          src="/milkflow4.webp"
          alt="Dairy processing plant by Bhagyalaxmi Industries"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071f4e]/95 via-[#082d67]/78 to-[#082d67]/20" />

        <div className="relative z-10 mx-auto flex min-h-[520px] md:min-h-[620px] max-w-[1320px] items-center px-5 md:px-10">
          <div className="max-w-3xl py-16 text-white">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-[#FAAC18]" />
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#FAAC18]">
                Dairy Processing Solutions
              </p>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-7xl">
              Dairy Processing Plant
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-xl">
              Reliable, hygienic, and efficient dairy processing solutions for
              modern dairy businesses in India.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setShowEnquiry(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#FAAC18] px-7 py-3.5 font-bold text-[#082d67] transition hover:bg-white"
              >
                Get in Touch <ArrowRight size={18} />
              </button>
              <Link
                href="/products"
                className="inline-flex items-center rounded-full border border-white/60 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#082d67]"
              >
                View Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-6 md:py-12">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-[#FAAC18]" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/tankerbgRemove.webp"
                alt="Milk storage and dairy processing equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <div className="absolute bottom-5 right-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-sm font-bold text-[#082d67]">Hygienic</p>
              <p className="text-xs text-gray-500">Efficient &amp; Durable</p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D99000]">
              Introduction
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-[#082d67] md:text-5xl">
              Complete dairy solutions from raw milk handling to processing
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-gray-700 md:text-base">
              <p>
                Bhagyalaxmi Industries is a trusted Dairy Processing Plant
                Manufacturer and Supplier in India, offering reliable and
                efficient dairy processing solutions for modern dairy businesses.
              </p>
              <p>
                A Dairy Processing Plant supports hygienic milk handling,
                chilling, filtration, pasteurization, homogenization, storage,
                and packaging.
              </p>
              <p>
                Our solutions are suitable for dairy farms, milk collection
                centres, milk cooperatives, and commercial dairy industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fc] py-6 md:py-12">
        <div className="mx-auto max-w-[1420px] px-5 md:px-10">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D99000]">
              Our Solutions
            </p>
            <h2 className="text-3xl font-extrabold text-[#082d67] md:text-4xl">
              Dairy equipment for every processing stage
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productRange.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group flex items-center justify-between rounded-2xl border border-[#dce7f2] bg-white px-5 py-5 text-[#082d67] shadow-sm transition hover:-translate-y-1 hover:border-[#FAAC18] hover:shadow-lg"
              >
                <span className="font-bold">{product.name}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef4fb] text-[#1447E6] transition group-hover:bg-[#FAAC18]">
                  <ArrowRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-6 md:py-12">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D99000]">
              Key Features
            </p>
            <h2 className="text-3xl font-extrabold text-[#082d67] md:text-5xl">
              Built for hygienic and efficient operations
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_12px_40px_rgba(8,45,103,.08)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf1fb] text-[#1447E6]">
                    <Icon size={25} />
                  </div>
                  <p className="mb-2 text-xs font-bold text-[#D99000]">
                    0{index + 1}
                  </p>
                  <h3 className="text-lg font-bold leading-snug text-[#082d67]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {feature.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#082d67] py-6 md:py-12">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#FAAC18]">
                Equipment
              </p>
              <h2 className="max-w-2xl text-3xl font-extrabold text-white md:text-5xl">
                Important equipment used in a dairy processing plant
              </h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-3xl bg-white p-7 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FAAC18]/20 text-[#082d67]">
                    <Icon size={27} />
                  </div>
                  <h3 className="text-xl font-bold text-[#082d67]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fc] py-6 md:py-12">
        <div className="mx-auto grid max-w-[1420px] gap-10 px-5 md:px-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 shadow-lg md:p-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D99000]">
              Applications
            </p>
            <h2 className="text-3xl font-extrabold text-[#082d67]">
              Where dairy processing plants are used
            </h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {applications.map((application) => (
                <div
                  key={application}
                  className="flex items-center gap-3 rounded-xl border border-[#e3ebf4] px-4 py-4"
                >
                  <CheckCircle2 size={20} className="shrink-0 text-[#1447E6]" />
                  <span className="font-semibold text-gray-800">{application}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#1447E6] p-7 text-white md:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[36px] border-white/5" />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#FAAC18]">
              Benefits
            </p>
            <h2 className="text-3xl font-extrabold">
              Benefits of installing a dairy processing plant
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-[#FAAC18]" />
                  <span className="font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-6 md:py-12">
        <div className="mx-auto grid max-w-[1420px] items-center gap-12 px-5 md:px-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D99000]">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-[#082d67] md:text-5xl">
              Your trusted partner for dairy processing
            </h2>
            <p className="mt-5 leading-7 text-gray-700">
              Bhagyalaxmi Industries is committed to dependable dairy equipment
              and milk processing solutions. We focus on hygiene, performance,
              durability, and operational efficiency.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Quality Equipment",
                "Wide Product Range",
                "Hygienic Design",
                "Flexible Solutions",
                "Reliable Performance",
                "Customer Support",
              ].map((reason) => (
                <li key={reason} className="flex items-center gap-3 font-bold text-[#082d67]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FAAC18]">
                    <CheckCircle2 size={16} className="text-[#082d67]" />
                  </span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-[#082d67]">
            <Image
              src="/formbg.webp"
              alt="Dairy processing machinery"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082d67]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
              <p className="font-bold">Dairy Processing and Milk Cooling Solutions</p>
              <p className="mt-1 text-sm text-white/80">
                Equipment selection for milk processing volume and operational requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta />

      <section className="bg-[#f4f8fc] py-6 md:py-12">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D99000]">
              FAQs
            </p>
            <h2 className="text-3xl font-extrabold text-[#082d67] md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-[#dfe8f2] bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold text-[#082d67] md:px-7"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#edf2f7] px-5 py-5 text-sm leading-7 text-gray-700 md:px-7">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#082d67] py-8 text-white">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center md:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FAAC18]">
              Contact Bhagyalaxmi Industries
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold md:text-4xl">
              Discuss your dairy equipment requirements
            </h2>
            <p className="mt-3 text-white/75">
              Contact us for product details, pricing, and suitable dairy processing machinery.
            </p>
          </div>
          <Link
           href="tel:+919560156328"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#FAAC18] px-7 py-4 font-bold text-[#082d67] transition hover:bg-white"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
      <Popup
        isOpen={showEnquiry}
        onClose={() => setShowEnquiry(false)}
      />
    </>
  );
}
