import type { Metadata } from "next";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Elevate Pest Control Nashville TN | Free Quote",
  description:
    "Contact Elevate Pest Control Nashville. Get a free pest control quote, schedule inspection, or call (615) 671-6933. 30% off first service with treatment plan.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero with background photo */}
      <section className="relative bg-[#0f172a] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tech-spraying.jpg"
            alt="Elevate Pest Control technician"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#16a34a]/20 border border-[#16a34a]/40 text-[#4ade80] text-sm font-bold px-4 py-1.5 rounded-full mb-5">
            Free Inspection Available
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get Your Free Pest Control Quote
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Fill out the form below or call us directly. We typically respond within 1 business hour.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-bold px-3 py-1.5 rounded-full mb-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" /><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" /></svg>
                  30% Off First Service
                </div>
                <h2 className="text-2xl font-black text-[#0f172a]">Request Your Free Quote</h2>
                <p className="text-slate-500 text-sm mt-1">No obligation. No hidden fees. Just honest pest control.</p>
              </div>

              <form className="space-y-4" action="#" method="POST">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0f172a] mb-1.5">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#0f172a] mb-1.5">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(615) 555-0100"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0f172a] mb-1.5">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-[#0f172a] mb-1.5">Property Address *</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    placeholder="123 Main St, Nashville, TN 37201"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[#0f172a] mb-1.5">Service Type *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option>General Pest Control</option>
                    <option>Rodent Control</option>
                    <option>Termite Control</option>
                    <option>Mosquito Control</option>
                    <option>Wasp & Bee Removal</option>
                    <option>Bed Bug Treatment</option>
                    <option>Lawn Care</option>
                    <option>Commercial Pest Control</option>
                    <option>Not Sure — Need Inspection</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="property" className="block text-sm font-semibold text-[#0f172a] mb-1.5">Property Type</label>
                  <select
                    id="property"
                    name="property"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select property type...</option>
                    <option>Residential Home</option>
                    <option>Apartment / Condo</option>
                    <option>Commercial Building</option>
                    <option>Restaurant / Food Service</option>
                    <option>Warehouse / Industrial</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0f172a] mb-1.5">Tell Us About the Issue</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe what pests you're seeing, where, and how long it's been going on..."
                    className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#16a34a] hover:bg-[#166534] text-white font-black text-base py-4 rounded-xl transition-all btn-pulse shadow-lg shadow-green-200"
                >
                  Get My Free Quote — 30% Off
                </button>
                <p className="text-center text-xs text-slate-400">
                  By submitting, you agree to be contacted by Elevate Pest Control. We never share your information.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Direct contact */}
              <div className="bg-[#0f172a] rounded-2xl p-8 text-white">
                <h2 className="text-xl font-black mb-6">Prefer to Call?</h2>
                <a href={COMPANY.phoneHref} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-[#16a34a] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#166534] transition-colors">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Nashville Office</p>
                    <p className="text-2xl font-black text-[#4ade80] group-hover:text-green-300 transition-colors">{COMPANY.phone}</p>
                    <p className="text-slate-400 text-xs mt-0.5">Click to call — Mon–Sat available</p>
                  </div>
                </a>
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-sm">
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-slate-300">715 Poplar Ave, Suite 101, Nashville, TN 37210</span>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-slate-300">
                      <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                      <p>Saturday: 8:00 AM – 4:00 PM</p>
                      <p className="text-slate-500">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-black text-[#0f172a] mb-4">What Happens After You Contact Us</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "We call or email you within 1 business hour to confirm your inquiry." },
                    { step: "2", text: "We schedule a free inspection at your convenience — often same or next day." },
                    { step: "3", text: "A licensed technician inspects your property and provides a transparent quote." },
                    { step: "4", text: "We treat your home, back it with our 100% guarantee, and schedule follow-ups." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3 items-start">
                      <div className="w-7 h-7 bg-[#16a34a] text-white rounded-full flex items-center justify-center text-xs font-black flex-shrink-0">{item.step}</div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee box */}
              <div className="bg-[#f0fdf4] border border-[#86efac] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#16a34a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black text-[#0f172a]">100% Satisfaction Guarantee</p>
                    <p className="text-[#166534] text-sm font-semibold">No risk. No fine print.</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  If pests return between scheduled visits, we come back and re-treat at absolutely no charge.
                  We keep treating until you&apos;re 100% satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.1!2d-86.7752!3d36.1530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646692!2s715+Poplar+Ave%2C+Nashville%2C+TN+37210!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Elevate Pest Control Nashville Office Location"
        />
      </section>
    </>
  );
}
