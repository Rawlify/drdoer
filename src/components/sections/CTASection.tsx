import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function CTASection({
  title = "Unlock Your Success with Our Services",
  subtitle = "Are you ready to elevate your academic journey or secure your dream job? Our dedicated team is here to provide you with exceptional services tailored to your needs.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900 via-slate-900 to-navy-950 p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl border border-slate-800">
          {/* Subtle glowing radial gradient in the background */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-brand-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-accent-purple/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-300 bg-brand-950/80 px-4 py-1.5 rounded-full border border-brand-700/60">
              Ready to Get Started?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-navy-900 font-bold bg-white hover:bg-brand-50 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-brand-600" />
              </Link>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-white font-semibold bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-900/30 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
