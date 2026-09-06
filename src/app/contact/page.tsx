import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import ContactForm from "@/components/sections/ContactForm";
import { assetPath } from "@/lib/utils";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Assignment & Website Quote - DrDoer",
  description:
    "Contact DrDoer for academic assignment solutions, CV creation, graphic design, and custom website development in partnership with Rawlify. Reach us via phone (078 253 6291), email (drdoer@proton.me), or WhatsApp.",
  openGraph: {
    title: "Contact DrDoer | Get a Free Quote",
    description:
      "Contact DrDoer for academic assignment solutions, CV creation, graphic design, and custom website development in partnership with Rawlify.",
    images: ["/assets/design.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="pt-6 pb-16">
      {/* Header */}
      <section className="relative py-12 md:py-16 text-center overflow-hidden">
        <div className="blob top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>We Are Here to Help</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto">
              Have a question about our services or need a quick quotation for your assignment or website project? Reach out to our dedicated team today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Business Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 bg-white/90 border border-brand-200/80 shadow-xl space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Direct Contact Information
                </h2>
                <p className="text-sm text-slate-600">
                  Choose the channel most convenient for you. We typically respond within minutes.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Phone Link */}
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-brand-50/80 border border-slate-200/80 hover:border-brand-300 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400 block">
                      Call Us Directly
                    </span>
                    <span className="text-base font-bold text-slate-900 group-hover:text-brand-600">
                      {siteConfig.phone} ({siteConfig.mobileLocal})
                    </span>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200/80 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-emerald-700 block">
                      Fastest Response
                    </span>
                    <span className="text-base font-bold text-slate-900 group-hover:text-emerald-700">
                      Chat on WhatsApp
                    </span>
                  </div>
                </a>

                {/* Email Link */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-brand-50/80 border border-slate-200/80 hover:border-brand-300 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 border border-brand-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400 block">
                      Email Inquiries
                    </span>
                    <span className="text-base font-bold text-slate-900 group-hover:text-brand-600">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                {/* Location Note */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400 block">
                      Operational Base
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-slate-200/70 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span>Rapid response within 15–30 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>100% confidential and secure project evaluation</span>
                </div>
              </div>
            </div>

            {/* Preserved Design Feature Visual */}
            <div className="glass-frame relative rounded-3xl overflow-hidden shadow-lg hidden sm:block">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden">
                <Image
                  src={assetPath("/assets/design.jpg")}
                  alt="DrDoer Graphic and Academic Support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
                Inquiry Form
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                Request a Custom Quote
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Fill out the form below to receive a personalized price quote and timeline estimate tailored to your project.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
