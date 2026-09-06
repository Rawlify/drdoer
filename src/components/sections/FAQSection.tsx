"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { faqsData } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 relative" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column Heading */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold">
              <HelpCircle className="w-4 h-4 text-brand-500" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Everything you need to know about our assignment services, delivery workflows, revision policies, and turnaround times.
            </p>

            <div className="p-6 rounded-2xl bg-brand-50/70 border border-brand-200/70 text-left space-y-3">
              <h3 className="text-sm font-bold text-slate-900">
                Have a question not listed here?
              </h3>
              <p className="text-xs text-slate-600">
                Our support team is available directly via WhatsApp for fast responses to your inquiries.
              </p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200/80 px-4 py-2.5 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat with Support</span>
              </a>
            </div>
          </div>

          {/* Right Column Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqsData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`glass-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-brand-300 shadow-md bg-white"
                      : "border-slate-200/70 hover:border-slate-300 bg-white/70"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-brand-500 text-white rotate-180"
                          : "bg-slate-100 text-slate-500 hover:bg-brand-50 hover:text-brand-600"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
