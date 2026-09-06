import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="glass-card rounded-3xl p-8 sm:p-12 text-center max-w-lg mx-auto border border-brand-200/80 shadow-2xl bg-white/90 space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
          Page Not Found
        </span>
        <h1 className="text-6xl sm:text-7xl font-extrabold gradient-text">
          404
        </h1>
        <h2 className="text-2xl font-bold text-slate-900">
          Oops! That page doesn&apos;t exist.
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-brand-400 to-brand-500 hover:from-brand-500 hover:to-brand-600 shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 font-semibold text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
