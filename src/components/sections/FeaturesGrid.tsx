import React from "react";
import { ShieldCheck, Clock, Award, Compass } from "lucide-react";
import { featuresData } from "@/data/services";

export default function FeaturesGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-brand-500" />;
      case "Clock":
        return <Clock className="w-8 h-8 text-brand-500" />;
      case "Award":
        return <Award className="w-8 h-8 text-brand-500" />;
      case "Compass":
      default:
        return <Compass className="w-8 h-8 text-brand-500" />;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-slate-50/70 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Built on Quality, Trust & Precision
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Every project we undertake is governed by our strict standard of academic integrity and creative craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col text-left group"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {getIcon(feature.icon)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
