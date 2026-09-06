"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Direct WhatsApp Inquiry"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-7 h-7" />
      </a>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center">
        <span className="bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
          Quick Quote via WhatsApp
        </span>
      </div>
    </div>
  );
}
