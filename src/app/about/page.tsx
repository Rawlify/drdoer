import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import {
  Sparkles,
  Target,
  Compass,
  CheckCircle,
  Lock,
  Clock,
  HeartHandshake,
  Code2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | DrDoer - Academic Support & Software Solutions with Rawlify",
  description:
    "Learn about DrDoer's 4+ years of service, mission, 500+ satisfied clients, and official tech partnership with Rawlify for custom software and website development.",
  openGraph: {
    title: "About DrDoer | Academic & Software Solutions",
    description:
      "Learn about DrDoer's 4+ years of service, mission, 500+ satisfied clients, and official tech partnership with Rawlify.",
    images: ["/assets/notepad-laptop-concept.jpg"],
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "Academic & Tech Integrity",
      description:
        "Every assignment is researched from scratch (100% plagiarism-free), and every website is cleanly coded with modern standards.",
      icon: CheckCircle,
    },
    {
      title: "Strict Confidentiality",
      description:
        "Your private information, assignment briefs, and proprietary project data are treated with top-tier security and privacy.",
      icon: Lock,
    },
    {
      title: "Punctual Delivery",
      description:
        "We understand academic and corporate deadlines. Every project timeline is strictly met with buffer time for your review.",
      icon: Clock,
    },
    {
      title: "Client-Centric Dedication",
      description:
        "We provide personalized support, iterative revisions, and direct communication across Sri Lanka and globally.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="pt-6 pb-16">
      {/* Header Section */}
      <section className="relative py-14 md:py-20 text-center overflow-hidden">
        <div className="blob top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>Our Story & Partnerships</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              About <span className="gradient-text">DrDoer</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto">
              Dedicated to excellence in academic writing, career development, and web software development.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Cover Banner & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden h-72 sm:h-96 w-full shadow-xl">
          <Image
            src="/assets/notepad-laptop-concept.jpg"
            alt="DrDoer workspace and conceptual planning"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-white max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-300 bg-brand-950/70 px-3 py-1 rounded-md border border-brand-800">
              Based in Sri Lanka, Serving Globally
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              Empowering Students & Businesses
            </h2>
          </div>
        </div>

        {/* Company Overview & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-10 sm:-mt-14 relative z-10 px-4 sm:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-10 bg-white/95 border border-brand-200/80 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Company</h3>
            <div className="w-12 h-1 bg-brand-400 rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Dr Doer, we are dedicated to excellence in every service we offer. With 4+ years of passion for creativity and quality, we&apos;ve become a trusted partner for over 500+ satisfied clients. Our journey began with a vision to empower individuals and businesses to excel in academic writing, career progression, and modern web presence.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-10 bg-white/95 border border-brand-200/80 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <div className="w-12 h-1 bg-accent-purple rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our mission is simple yet impactful: to elevate your academic achievements, enhance your brand&apos;s digital identity, boost your career prospects, and build modern web applications that scale. With our dedicated experts and partners, your success becomes our success.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Stats Section (500+ Clients, 4+ Years, 500+ Projects) */}
      <div className="mt-20">
        <StatsSection />
      </div>

      {/* Strategic Collaboration with Rawlify */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="glass-card rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-brand-50/50 via-white to-accent-purple/10 border border-brand-300 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-white/90 rounded-2xl border border-brand-200 shadow-md">
              <div className="relative h-20 w-44 mb-3">
                <Image
                  src="/assets/rawlify-logo.png"
                  alt="Rawlify Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                Official Tech Partner
              </span>
            </div>

            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-accent-purple uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>Web & Software Engineering Collaboration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Powered by DrDoer & Rawlify
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We have partnered with <strong>Rawlify</strong> to bring top-tier, affordable website building and software engineering to our clients. From lightning-fast static landing pages to complex full-stack web applications with custom admin panels, database setups, and custom domain mapping—starting from just <strong>20,000 LKR ($70 USD)</strong>.
              </p>
              <div className="pt-2">
                <Link
                  href="/services#web-development"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-accent-purple hover:opacity-90 transition-opacity shadow-md"
                >
                  <span>Explore Software Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200/60 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              Our Core Commitments
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              The foundational pillars that guide every assignment, design project, website build, and client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 bg-white/90 border border-slate-200/80 hover:border-brand-300 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connect with DrDoer Social Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center border border-brand-200/60 bg-white/80">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Connect With Us On Social Channels
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto mb-8">
            Stay updated with academic tips, career advice, and special announcements across our social platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {/* Facebook */}
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </div>
              <span className="font-bold text-slate-900 group-hover:text-blue-600">
                Facebook
              </span>
              <span className="text-xs text-slate-500">@drdoer</span>
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/50 transition-all flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </div>
              <span className="font-bold text-slate-900 group-hover:text-sky-600">
                LinkedIn
              </span>
              <span className="text-xs text-slate-500">DrDoer Network</span>
            </a>

            {/* Twitter */}
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl border border-slate-200/80 hover:border-slate-400 hover:bg-slate-100/50 transition-all flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </div>
              <span className="font-bold text-slate-900 group-hover:text-slate-800">
                Twitter / X
              </span>
              <span className="text-xs text-slate-500">@drdoer</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
