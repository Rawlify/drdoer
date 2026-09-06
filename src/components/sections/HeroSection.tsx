import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Award, Sparkles, Code2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
      {/* Aesthetic glowing background blobs */}
      <div className="blob -top-20 -left-20" />
      <div className="blob-purple top-1/2 -right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content Left */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-500 animate-pulse" />
                <span>Academic & Career Support</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 text-accent-purple font-bold">
                <Code2 className="w-3.5 h-3.5" />
                <span>Web & Software by Rawlify</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Get It Done Like an{" "}
              <span className="gradient-text block sm:inline">Expert!</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Unlock excellence with our professional services. From top-tier academic assignments and CVs to modern static & full-stack websites with admin panels starting from <strong className="text-brand-600">20,000 LKR ($70 USD)</strong> in collaboration with <strong>Rawlify</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-brand-600 font-semibold border-2 border-brand-400 bg-white hover:bg-brand-50 shadow-sm hover:shadow-md hover:border-brand-500 transition-all duration-200"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 text-brand-500" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold bg-gradient-to-r from-brand-400 to-brand-500 hover:from-brand-500 hover:to-brand-600 shadow-md shadow-brand-400/25 hover:shadow-lg hover:shadow-brand-400/35 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-200/80 text-left">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0" />
                <span>500+ Clients</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                <span>4+ Years Service</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Award className="w-4 h-4 text-brand-500 shrink-0" />
                <span>500+ Projects</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Right */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative background glow frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-brand-300/40 to-accent-purple/20 blur-xl opacity-70 animate-pulse-soft" />

              {/* Glass frame holding the hero image */}
              <div className="glass-frame relative rounded-3xl overflow-hidden animate-float">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/LandingHome.jpg"
                    alt="DrDoer Professional Assignment and Software Development Services"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
