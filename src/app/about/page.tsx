import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Elevate Pest Control Nashville TN | Family-Owned Since 2008",
  description:
    "Learn about Elevate Pest Control — Nashville's family-owned pest control company since 2008. Our mission: eco-friendly, effective pest control backed by a 100% guarantee.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero with background photo */}
      <section className="relative bg-[#0f172a] py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home-exterior.jpg"
            alt="Nashville home protected by Elevate Pest Control"
            fill
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#16a34a]/20 border border-[#16a34a]/40 text-[#4ade80] text-sm font-bold px-4 py-1.5 rounded-full mb-5">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
              Family-Owned.<br />
              Nashville-Focused.<br />
              <span className="text-[#4ade80]">Results Guaranteed.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Protecting families and businesses from pests since 2008 — built on hard work, honesty, and a commitment to continual improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#dcfce7] text-[#166534] text-sm font-bold px-4 py-1.5 rounded-full mb-5">Who We Are</span>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0f172a] mb-6 leading-tight">
                From East Coast Roots to Nashville&apos;s Most Trusted Pest Control
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Elevate Pest Control is a family-owned company founded in 2008. We began as <strong className="text-[#0f172a]">Pointe Pest Control</strong> on the East Coast and still operate under that name today — same ownership, same principles, same unwavering commitment to excellence.
                </p>
                <p>
                  Today, we proudly serve homeowners and businesses across Utah, Idaho, Colorado, Alabama, and Tennessee — with our <strong className="text-[#0f172a]">Nashville office</strong> at 715 Poplar Ave serving as the hub for all of Middle Tennessee.
                </p>
                <p>
                  What hasn&apos;t changed in 15+ years? Our belief that <strong className="text-[#0f172a]">every customer deserves honest communication, thorough service, and guaranteed results</strong>.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { number: "15+", label: "Years in Business" },
                  { number: "2,400+", label: "Tennessee Customers" },
                  { number: "100%", label: "Satisfaction Rate" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-[#f8fafc] rounded-xl p-4">
                    <div className="text-2xl font-black text-[#16a34a]">{stat.number}</div>
                    <div className="text-slate-500 text-xs mt-1 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/tech-spraying.jpg"
                  alt="Elevate Pest Control technician at Nashville home"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />
              </div>

              {/* Purpose overlay card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-100 max-w-xs">
                <p className="font-black text-[#0f172a] text-sm mb-3">Our Purpose: Serve. Build. Create.</p>
                <div className="space-y-2.5">
                  {[
                    { title: "Serve our clients", desc: "Protecting homes and businesses — safely, effectively, with care." },
                    { title: "Build our team", desc: "Helping employees build meaningful lives and grow professionally." },
                    { title: "Create opportunity", desc: "One customer at a time, growing our community." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-[#0f172a]">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#dcfce7] text-[#166534] text-sm font-bold px-4 py-1.5 rounded-full mb-4">Core Values</span>
            <h2 className="text-3xl font-black text-[#0f172a]">The Principles Behind Every Service Call</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Hard Work",
                desc: "100% effort on every job — no shortcuts. We show up, we follow through, and we do it right.",
                icon: (
                  <svg className="w-7 h-7 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                number: "02",
                title: "Trust & Honesty",
                desc: "Transparent pricing, clear communication, honest advice — always. No upsells you don't need.",
                icon: (
                  <svg className="w-7 h-7 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Continual Improvement",
                desc: "Weekly training keeps our techs ahead of new pests, treatments, and eco-friendly methods.",
                icon: (
                  <svg className="w-7 h-7 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
              },
              {
                number: "04",
                title: "Customer Care",
                desc: "We treat every person and every home with the same respect we'd want for our own families.",
                icon: (
                  <svg className="w-7 h-7 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div key={value.number} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#f0fdf4] rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <div className="text-[#16a34a] font-black text-xs mb-1">{value.number}</div>
                <h3 className="font-black text-[#0f172a] text-lg mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IPM Commitment with real badge images */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#16a34a]/20 border border-[#16a34a]/40 text-[#4ade80] text-sm font-bold px-4 py-1.5 rounded-full mb-5">Eco-Friendly IPM</span>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
                Committed to the Environment — and Your Family
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Our Integrated Pest Management (IPM) approach focuses on <strong className="text-white">prevention first, treatment second</strong>. By targeting root causes rather than just symptoms, we reduce pesticide use by up to <strong className="text-[#4ade80]">90%</strong> compared to traditional pest control.
              </p>
              <ul className="space-y-3">
                {[
                  "100% organic treatment options available",
                  "Strictly pet and child-safe formulations",
                  "GreenPro certified by the NPMA",
                  "Non-chemical methods prioritized whenever possible",
                  "EPA-compliant treatments for all commercial accounts",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-[#4ade80] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Real badge images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3">
                <Image src="/images/badge-bbb.png" alt="BBB A+ Rated" width={80} height={80} className="object-contain h-20 w-auto" />
                <p className="text-[#0f172a] font-black text-sm text-center">BBB A+ Rated</p>
              </div>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3">
                <Image src="/images/badge-google.webp" alt="Google Guaranteed" width={80} height={80} className="object-contain h-20 w-auto" />
                <p className="text-[#0f172a] font-black text-sm text-center">Google Guaranteed</p>
              </div>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 col-span-2">
                <Image src="/images/badge-green.png" alt="GreenPro Certified" width={100} height={80} className="object-contain h-20 w-auto" />
                <p className="text-[#0f172a] font-black text-sm text-center">GreenPro Certified — NPMA</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <svg className="w-10 h-10 text-[#4ade80] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="font-black text-white text-sm">State Licensed</p>
                <p className="text-slate-400 text-xs mt-1">Tennessee</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <svg className="w-10 h-10 text-[#4ade80] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="font-black text-white text-sm">QualityPro</p>
                <p className="text-slate-400 text-xs mt-1">NPMA Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0f172a] mb-3">Serving Families Across the Country</h2>
            <p className="text-slate-500">Nashville is our Tennessee home. But Elevate serves families in 5 states.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { state: "Tennessee", city: "Nashville", address: "715 Poplar Ave, Suite 101", phone: "(615) 671-6933", primary: true },
              { state: "Utah", city: "Logan", address: "60 W 1000 N", phone: "(435) 753-3825", primary: false },
              { state: "Colorado", city: "Arvada", address: "5255 Marshall St Suite 206", phone: "(720) 662-7866", primary: false },
              { state: "Alabama", city: "Mobile", address: "328 South Sage Ave Suite 200", phone: "(251) 202-6010", primary: false },
              { state: "Idaho", city: "Idaho Falls", address: "550 2nd Street Suite 213", phone: "(208) 416-6500", primary: false },
            ].map((loc) => (
              <div key={loc.state} className={`rounded-xl p-5 border ${loc.primary ? "bg-[#f0fdf4] border-[#86efac]" : "bg-slate-50 border-slate-200"}`}>
                {loc.primary && <span className="inline-block bg-[#16a34a] text-white text-xs font-bold px-2 py-0.5 rounded-full mb-2">Primary TN Office</span>}
                <h3 className="font-bold text-[#0f172a]">{loc.city}, {loc.state}</h3>
                <p className="text-slate-500 text-sm mt-1">{loc.address}</p>
                <a href={`tel:+1${loc.phone.replace(/\D/g, "")}`} className={`text-sm font-bold mt-1 block hover:underline ${loc.primary ? "text-[#16a34a]" : "text-slate-600"}`}>{loc.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/tech-spraying.jpg" alt="Elevate Pest Control tech" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#166534]/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Live Pest-Free?</h2>
          <p className="text-green-100 mb-8 text-lg">Join thousands of Nashville families who trust Elevate for their pest control needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 bg-white text-[#166534] font-black py-4 px-8 rounded-xl hover:bg-green-50 transition-all text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all text-base">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
