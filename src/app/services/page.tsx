import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import CTASection from "@/components/sections/CTASection";
import { assetPath } from "@/lib/utils";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  Send,
  FileCheck,
  MessageCircle,
  Tag,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Web Development, Assignments, CV Writing & Graphic Design",
  description:
    "Explore DrDoer's academic assignment support, professional ATS CV creation, graphic design, and custom website/software development in collaboration with Rawlify (from 20,000 LKR / $70 USD).",
  openGraph: {
    title: "Services Offered by DrDoer | Academic, Creative & Software Solutions",
    description:
      "Explore DrDoer's academic assignment support, professional ATS CV creation, graphic design, and custom website/software development in collaboration with Rawlify.",
    images: ["/assets/software-development.jpg"],
  },
};

export default function ServicesPage() {
  const steps = [
    {
      number: "01",
      title: "Share Your Requirements",
      description:
        "Send us your assignment brief, CV history, design notes, or website specifications via WhatsApp or our Contact form.",
      icon: Send,
    },
    {
      number: "02",
      title: "Custom Tailoring & Drafting",
      description:
        "Our subject experts and software engineers draft, write, design, or code from scratch, strictly adhering to your standards.",
      icon: BookOpen,
    },
    {
      number: "03",
      title: "Quality Review & Delivery",
      description:
        "We verify originality, test responsiveness and admin panels, and deliver the finalized project with complete setup and domain mapping.",
      icon: FileCheck,
    },
  ];

  return (
    <div className="pt-6 pb-16">
      {/* Services Header */}
      <section className="relative py-14 md:py-20 text-center overflow-hidden">
        <div className="blob top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>Academic, Creative & Tech Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto">
              Unlocking Words, Crafting Code, Accelerating Success!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-400 to-accent-purple mx-auto rounded-full mt-4" />
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-6 sm:p-8 lg:p-10 rounded-3xl ${
                service.id === "web-development"
                  ? "bg-gradient-to-br from-brand-50/40 via-white to-accent-purple/5 border-2 border-brand-300 shadow-xl"
                  : "glass-card border border-slate-200/80"
              }`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-brand-300/30 to-brand-500/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
                  <div className="glass-frame relative rounded-3xl overflow-hidden">
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                      <Image
                        src={assetPath(service.image)}
                        alt={service.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 550px"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text / Details Column */}
              <div
                className={`lg:col-span-6 space-y-5 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
                    {service.badge || `Service 0${index + 1}`}
                  </span>
                  {service.pricing && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold shadow-sm">
                      <Tag className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{service.pricing}</span>
                    </span>
                  )}
                  {service.partner && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-white text-xs font-bold">
                      <div className="relative w-3.5 h-3.5">
                        <Image
                          src={assetPath("/assets/rawlify-logo.png")}
                          alt="Rawlify Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span>{service.partner}</span>
                    </span>
                  )}
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  {service.title}
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Key Deliverables / Features */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    What We Deliver:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subject tags if available */}
                {service.subjects && (
                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Highlights & Tech Stack:
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {service.subjects.map((sub, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/contact?service=${encodeURIComponent(
                      service.title
                    )}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-brand-400 to-brand-500 hover:from-brand-500 hover:to-brand-600 shadow-md shadow-brand-400/20 hover:shadow-lg transition-all"
                  >
                    <span>Request Quote for {service.title.split(" ")[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`https://wa.me/94782536291?text=${encodeURIComponent(
                      `Hello DrDoer, I am interested in getting a quote for: ${service.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 font-semibold text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* How We Work Process Section */}
      <section className="py-20 bg-slate-50/80 border-y border-slate-200/60 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
              Simple 3-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              How Working With Us Works
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Streamlined, confidential, and completely transparent from initial consultation to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-7 bg-white/90 border border-slate-200/80 relative"
                >
                  <div className="text-4xl font-extrabold text-brand-200 mb-4 font-display">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Ready to Build Your Website or Assignment?"
        subtitle="Contact DrDoer and Rawlify today for a tailored quote. Starting from 20,000 LKR ($70 USD) for websites with admin panels."
      />
    </div>
  );
}
