import React from "react";
import { Users, Calendar, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function StatsSection() {
  const getStatIcon = (iconName?: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-6 h-6 text-brand-500" />;
      case "Calendar":
        return <Calendar className="w-6 h-6 text-brand-500" />;
      case "CheckCircle2":
      default:
        return <CheckCircle2 className="w-6 h-6 text-brand-500" />;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-brand-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-brand-200/60 shadow-xl bg-white/80">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Empowering Students & Professionals Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className={`flex flex-col items-center justify-center p-4 ${idx > 0 ? "pt-8 md:pt-4" : ""}`}>
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                  {getStatIcon(stat.iconName)}
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                  <span className="gradient-text">{stat.value}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  {stat.label}
                </h3>
                {stat.description && (
                  <p className="text-xs text-slate-500 max-w-xs">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
