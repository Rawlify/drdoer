"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website & Software Development (from 20,000 LKR / $70 USD)",
    urgency: "Standard (3-5 days)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct formatted message for WhatsApp
    const waText = encodeURIComponent(
      `*New Project Inquiry via DrDoer Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone/WhatsApp:* ${formData.phone || "Not provided"}\n` +
      `*Selected Service:* ${formData.service}\n` +
      `*Target Timeline:* ${formData.urgency}\n\n` +
      `*Project Details:* \n${formData.message}`
    );

    // Open WhatsApp with pre-populated message
    window.open(`https://wa.me/94782536291?text=${waText}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-200/80 shadow-xl bg-white/90">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            Thank You for Reaching Out!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Your inquiry has been opened in WhatsApp for instant review. If you need any immediate revisions or have extra files, message us directly!
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
            >
              Submit Another Inquiry
            </button>
            <a
              href={`mailto:${siteConfig.email}?subject=Project%20Inquiry%20from%20${encodeURIComponent(formData.name)}`}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600"
            >
              Send via Email Instead
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Emily Silva"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. yourname@gmail.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="078 253 6291 / +94..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Service Needed <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
              >
                <option value="Website & Software Development (from 20,000 LKR / $70 USD)">
                  Website & Software Dev (from 20,000 LKR / $70 USD)
                </option>
                <option value="Assignment Services">Assignment Services</option>
                <option value="Professional CV & Cover Letters">Professional CV & Cover Letters</option>
                <option value="Graphic Design Services">Graphic Design Services</option>
                <option value="Sinhala Typing and Translation">Sinhala Typing and Translation</option>
                <option value="Other Inquiries">Other Inquiries</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="urgency" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Deadline / Target Timeline
            </label>
            <select
              id="urgency"
              value={formData.urgency}
              onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
            >
              <option value="Urgent (Within 24-48 hours)">Urgent (Within 24-48 hours)</option>
              <option value="Standard (3-5 days)">Standard (3-5 days)</option>
              <option value="Flexible (1-2 weeks)">Flexible (1-2 weeks)</option>
              <option value="Just inquiring for quote">Just inquiring for quote</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Project Details & Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about the website requirements (static/backend/admin panel/domain) or assignment subject & word count..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold bg-gradient-to-r from-brand-400 to-brand-500 hover:from-brand-500 hover:to-brand-600 shadow-md shadow-brand-400/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Submit & Connect on WhatsApp for Instant Quote</span>
            </button>
            <p className="text-center text-xs text-slate-500 mt-2.5 flex items-center justify-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>We respect your privacy. All details are kept 100% strictly confidential.</span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
