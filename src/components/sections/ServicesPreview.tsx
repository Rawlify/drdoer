import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Specialized Services Tailored For You
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            From comprehensive assignment solutions and career resumes to modern static & full-stack websites in collaboration with Rawlify.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border transition-all duration-300 ${
                service.id === "web-development"
                  ? "border-brand-400/80 shadow-lg shadow-brand-500/10 md:col-span-2 lg:col-span-1 bg-gradient-to-b from-brand-50/20 to-white"
                  : "border-slate-200/80 hover:border-brand-300"
              }`}
            >
              {/* Image preview */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-500 text-white shadow-sm">
                    {service.badge || `Service 0${index + 1}`}
                  </span>
                  {service.pricing && (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-600 text-white shadow-md">
                      {service.pricing}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  {service.partner && (
                    <div className="flex items-center gap-1.5 text-xs text-brand-300 font-medium mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-brand-300" />
                      <span>{service.partner}</span>
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white drop-shadow-sm leading-snug">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-colors shadow-sm"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-brand-400 to-brand-500 hover:from-brand-500 hover:to-brand-600 shadow-md shadow-brand-400/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore All 5 Services & Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
