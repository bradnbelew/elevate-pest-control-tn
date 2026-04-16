import type { Metadata } from "next";
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
      {/* Hero */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#16a34a]/20 border border-[#16a34a]/40 text-[#4ade80] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Family-Owned, Nashville-Focused,<br />
            <span className="text-[#4ade80]">Results-Guaranteed</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We&apos;ve been protecting families and businesses from pests since 2008 — built on hard work, honesty, and a commitment to continual improvement.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#dcfce7] text-[#166534] text-sm font-bold px-4 py-1.5 rounded-full mb-4">Who We Are</span>
              <h2 className="text-3xl font-black text-[#0f172a] mb-6">From East Coast Roots to Nashville&apos;s Most Trusted Pest Control</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Elevate Pest Control is a family-owned and operated company founded in 2008. We began as <strong>Pointe Pest Control</strong> on the East Coast and still operate under that name today. Both companies share the same ownership, principles, and unwavering commitment to excellence.
                </p>
                <p>
                  Today, we proudly serve homeowners and businesses across Utah, Idaho, Colorado, Alabama, and Tennessee — with our <strong>Nashville office</strong> at 715 Poplar Ave, Suite 101 serving as the hub for all of Middle Tennessee.
                </p>
                <p>
                  What hasn&apos;t changed in 15+ years? Our belief that <strong>every customer deserves honest communication, thorough service, and guaranteed results</strong>. We don&apos;t just treat pests — we protect the places you call home and work.
                </p>
              </div>
            </div>
            <div className="bg-[#f0fdf4] rounded-2xl p-8">
              <h3 className="font-black text-[#0f172a] text-xl mb-6">Our Purpose: Serve. Build. Create.</h3>
              <div className="space-y-5">
                {[
                  { icon: "🏡", title: "Serve our clients", desc: "By protecting their homes and businesses from pests — safely, effectively, and with care." },
                  { icon: "👷", title: "Serve our employees", desc: "By helping them build meaningful lives, grow professionally, and take pride in their work." },
                  { icon: "🌱", title: "Create opportunity", desc: "One customer at a time — growing our community and our impact throughout Tennessee." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <p className="font-bold text-[#0f172a] mb-1">{item.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
              { number: "01", icon: "💪", title: "Hard Work", desc: "100% effort on every job, no shortcuts. We show up, we follow through, and we do it right." },
              { number: "02", icon: "🤝", title: "Trust & Honesty", desc: "Transparent pricing, clear communication, and honest advice — always. No upsells you don't need." },
              { number: "03", icon: "🔬", title: "Continual Improvement", desc: "Weekly training keeps our techs ahead of new pests, treatments, and eco-friendly methods." },
              { number: "04", icon: "❤️", title: "Customer Care", desc: "We treat every person and every home with the same respect we'd want for our own families." },
            ].map((value) => (
              <div key={value.number} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center">
                <div className="text-3xl mb-3">{value.icon}</div>
                <div className="text-[#16a34a] font-black text-sm mb-1">{value.number}</div>
                <h3 className="font-black text-[#0f172a] text-lg mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IPM Commitment */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#16a34a]/20 border border-[#16a34a]/40 text-[#4ade80] text-sm font-bold px-4 py-1.5 rounded-full mb-4">Eco-Friendly IPM</span>
              <h2 className="text-3xl font-black text-white mb-6">We&apos;re Committed to the Environment — and Your Family</h2>
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
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏆", label: "BBB A+", sub: "Better Business Bureau" },
                { icon: "✅", label: "QualityPro", sub: "NPMA Certified" },
                { icon: "🌿", label: "GreenPro", sub: "Eco-Certified" },
                { icon: "🛡️", label: "State Licensed", sub: "Tennessee" },
              ].map((badge) => (
                <div key={badge.label} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <p className="font-black text-white text-sm">{badge.label}</p>
                  <p className="text-slate-400 text-xs mt-1">{badge.sub}</p>
                </div>
              ))}
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
                <p className={`text-sm font-bold mt-1 ${loc.primary ? "text-[#16a34a]" : "text-slate-600"}`}>{loc.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#166534] to-[#15803d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Live Pest-Free?</h2>
          <p className="text-green-100 mb-8">Join thousands of Nashville families who trust Elevate for their pest control needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 bg-white text-[#166534] font-black py-3 px-8 rounded-xl hover:bg-green-50 transition-all">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-all">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
