import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, SERVICES, TESTIMONIALS, FAQS, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Elevate Pest Control Nashville TN | #1 Exterminator | 30% Off",
  description:
    "Nashville's #1 rated pest control company. 100% guaranteed results, eco-friendly & pet-safe. Call (615) 671-6933 — Get 30% off your first treatment today!",
  alternates: { canonical: "/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PestControlService",
  name: "Elevate Pest Control",
  url: "https://elevate-pest-control-tn.vercel.app",
  telephone: "+16156716933",
  address: {
    "@type": "PostalAddress",
    streetAddress: "715 Poplar Ave, Suite 101",
    addressLocality: "Nashville",
    addressRegion: "TN",
    postalCode: "37210",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 36.1627, longitude: -86.7816 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "16:00" },
  ],
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "2400" },
  areaServed: { "@type": "City", name: "Nashville, Tennessee" },
  description: "Nashville's trusted pest control experts. Family-owned, eco-friendly IPM, 100% guaranteed results since 2008.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const serviceImages: Record<string, string> = {
  "general-pest": "/images/pest-ant.png",
  "rodent": "/images/pest-rodent.png",
  "wasp-bee": "/images/pest-wasp.png",
  "mosquito": "/images/mosquito-macro.jpg",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/tech-spraying.jpg"
            alt="Elevate Pest Control technician treating a Nashville home"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Gradient overlay — dark left, lighter right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/92 via-[#0a1628]/75 to-[#0a1628]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="max-w-2xl">
            {/* Rating pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <Stars count={5} />
              <span className="text-white text-sm font-semibold">4.8 · 2,400+ Reviews · Nashville&apos;s #1 Choice</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] mb-6 tracking-tight">
              Pest-Free<br />
              <span className="text-[#4ade80]">Nashville</span><br />
              Starts Here.
            </h1>

            <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-xl">
              Family-owned since 2008. Eco-friendly treatments.
              100% guaranteed — or we come back for free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center justify-center gap-3 bg-[#16a34a] hover:bg-[#15803d] text-white font-black text-lg py-4 px-8 rounded-xl transition-all shadow-2xl shadow-green-900/40"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (615) 671-6933
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-white text-[#0f172a] font-bold text-lg py-4 px-8 rounded-xl hover:bg-slate-100 transition-all shadow-lg"
              >
                Get Free Inspection
              </Link>
            </div>

            {/* Inline trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { icon: "✓", text: "100% Satisfaction Guaranteed" },
                { icon: "✓", text: "Pet & Child Safe" },
                { icon: "✓", text: "Service in 24–72 hrs" },
                { icon: "✓", text: "Free Re-treatments" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-[#4ade80] font-bold">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Promo ribbon */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#16a34a]/95 backdrop-blur-sm py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-white font-bold text-sm">
              Limited Time: <span className="text-[#bbf7d0]">30% off your first service</span> with any recurring treatment plan
            </p>
            <a href={COMPANY.phoneHref} className="text-white font-black text-sm underline underline-offset-2 hover:text-green-100 whitespace-nowrap">
              Claim Offer →
            </a>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-3">
              <Image src="/images/badge-bbb.png" alt="BBB A+ Accredited" width={80} height={34} className="h-9 w-auto object-contain" />
            </div>
            <div className="flex items-center gap-3">
              <Image src="/images/badge-google.webp" alt="Google Guarantee" width={100} height={39} className="h-9 w-auto object-contain" />
            </div>
            <div className="flex items-center gap-3">
              <Image src="/images/badge-green.png" alt="Green Company Certified" width={64} height={64} className="h-12 w-auto object-contain" />
            </div>
            <div className="h-10 w-px bg-slate-200 hidden lg:block" />
            <div className="text-center">
              <div className="text-2xl font-black text-[#16a34a]">4.8★</div>
              <div className="text-xs text-slate-500 mt-0.5">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-[#0f172a]">2,400+</div>
              <div className="text-xs text-slate-500 mt-0.5">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-[#0f172a]">15+</div>
              <div className="text-xs text-slate-500 mt-0.5">Years in Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-end mb-14">
            <div>
              <p className="text-[#16a34a] font-bold text-sm uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="text-4xl font-black text-[#0f172a] leading-tight">
                Complete Pest Control for<br />Nashville Homes &amp; Businesses
              </h2>
            </div>
            <div>
              <p className="text-slate-500 text-lg leading-relaxed">
                From ants to termites, rodents to mosquitoes — every treatment plan is customized for your home, your family, and Tennessee&apos;s unique pest pressures.
              </p>
            </div>
          </div>

          {/* Featured service cards — photo-driven */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => {
              const img = serviceImages[service.id];
              const isLarge = i === 0;
              return (
                <Link
                  key={service.id}
                  href="/services"
                  className={`group relative overflow-hidden rounded-2xl bg-[#0f172a] ${isLarge ? "md:col-span-2 lg:col-span-1" : ""} min-h-[300px] flex flex-col justify-end`}
                >
                  {/* Background */}
                  {img ? (
                    <Image
                      src={img}
                      alt={service.name}
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                        img.endsWith('.png') ? 'object-contain p-8 scale-75 group-hover:scale-80' : 'object-cover'
                      }`}
                    />
                  ) : null}
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent" />
                  {/* Content */}
                  <div className="relative p-6 z-10">
                    <p className="text-[#4ade80] text-xs font-bold uppercase tracking-widest mb-1">Nashville, TN</p>
                    <h3 className="text-white text-xl font-black mb-2">{service.name}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#4ade80] text-sm font-bold">
                      Learn More
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 border-2 border-[#0f172a] text-[#0f172a] font-bold py-3 px-8 rounded-xl hover:bg-[#0f172a] hover:text-white transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SPLIT: WHY ELEVATE + PHOTO ────────────────────────────────── */}
      <section className="py-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[560px]">
            {/* Photo side */}
            <div className="relative min-h-[400px] lg:min-h-auto">
              <Image
                src="/images/tech-spraying.jpg"
                alt="Elevate Pest Control technician at work in Nashville"
                fill
                className="object-cover object-left-center"
              />
              {/* Stats overlay card */}
              <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-2xl p-5 max-w-[200px]">
                <div className="flex items-center gap-2 mb-3">
                  <Image src="/images/elevate-logo-white.png" alt="Elevate" width={100} height={28} className="h-6 w-auto object-contain bg-[#0f172a] px-2 py-0.5 rounded" />
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="text-xl font-black text-[#16a34a]">100%</div>
                    <div className="text-xs text-slate-500">Satisfaction Guarantee</div>
                  </div>
                  <div className="border-t border-slate-100 pt-2">
                    <div className="text-xl font-black text-[#0f172a]">~90%</div>
                    <div className="text-xs text-slate-500">Pesticide reduction via IPM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0">
              <p className="text-[#16a34a] font-bold text-sm uppercase tracking-widest mb-4">Why Elevate</p>
              <h2 className="text-4xl font-black text-[#0f172a] leading-tight mb-6">
                Nashville Pest Control Done the Right Way
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We&apos;re not just another franchise. Elevate is family-owned, locally operated from Nashville, and built on 15+ years of doing pest control the honest way — eco-first, guaranteed results, no runaround.
              </p>

              <div className="space-y-5">
                {[
                  { title: "Integrated Pest Management", desc: "We reduce pesticide use by up to 90% by targeting root causes, not just symptoms." },
                  { title: "100% Satisfaction Guarantee", desc: "Pests return between visits? So do we — at no extra charge, every time." },
                  { title: "Weekly-Trained Technicians", desc: "Our techs train every week on pest biology, safe methods, and new treatments." },
                  { title: "Transparent Pricing", desc: "No surprise fees. No upsells you don't need. Just honest quotes upfront." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#dcfce7] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#16a34a]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-[#0f172a] text-sm">{item.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center gap-2 text-[#16a34a] font-bold hover:underline underline-offset-4">
                  Our Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS FULL WIDTH ─────────────────────────────────── */}
      <section className="bg-[#0f172a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-10">Certified, Licensed &amp; Accredited</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { img: "/images/badge-bbb.png", alt: "BBB A+ Accredited", label: "A+ BBB Rating", sub: "Highest consumer trust rating" },
              { img: "/images/badge-google.webp", alt: "Google Guarantee", label: "Google Guarantee", sub: "Backed by Google's guarantee program" },
              { img: "/images/badge-green.png", alt: "Green Company", label: "GreenPro Certified", sub: "NPMA eco-friendly standard" },
              { img: null, alt: "Licensed Tennessee", label: "State Licensed", sub: "All technicians licensed in TN" },
            ].map((badge) => (
              <div key={badge.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                {badge.img ? (
                  <Image src={badge.img} alt={badge.alt} width={100} height={50} className="h-10 w-auto object-contain" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#16a34a] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <div>
                  <p className="text-white font-bold text-sm">{badge.label}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-[#16a34a] font-bold text-sm uppercase tracking-widest mb-3">Customer Reviews</p>
              <h2 className="text-4xl font-black text-[#0f172a]">What Nashville Says</h2>
            </div>
            <div className="flex items-center gap-3 bg-[#f0fdf4] border border-[#86efac] rounded-xl px-5 py-3">
              <Stars count={5} />
              <div>
                <p className="font-black text-[#0f172a] text-lg leading-none">4.8 / 5.0</p>
                <p className="text-slate-500 text-xs">Based on 2,400+ reviews</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex flex-col bg-[#f8fafc] border border-slate-100 rounded-2xl p-6">
                <Stars count={t.rating} />
                <p className="text-slate-700 text-sm leading-relaxed mt-4 flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-200">
                  <div className="w-9 h-9 rounded-full bg-[#0f172a] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-[#0f172a] text-sm leading-none">{t.name}</p>
                    <p className="text-slate-400 text-xs mt-1">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MOSQUITO MACRO PHOTO BREAK ────────────────────────────────── */}
      <section className="relative h-[380px] overflow-hidden">
        <Image
          src="/images/mosquito-macro.jpg"
          alt="Mosquito pest control Nashville Tennessee"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-[#0f172a]/40" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              <p className="text-[#4ade80] font-bold text-sm uppercase tracking-widest mb-3">Nashville Seasonal Pest Pressure</p>
              <h2 className="text-4xl font-black text-white mb-4">
                Tennessee Pests Are Active Year-Round
              </h2>
              <p className="text-slate-300 mb-6">
                From spring mosquito season through winter rodent invasions — our year-round treatment plans adapt to keep your home protected every month.
              </p>
              <Link href="/pest-library" className="inline-flex items-center gap-2 bg-white text-[#0f172a] font-bold py-3 px-6 rounded-xl hover:bg-slate-100 transition-all text-sm">
                View the Pest Library
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8fafc]" id="faq">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <p className="text-[#16a34a] font-bold text-sm uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-3xl font-black text-[#0f172a] mb-4">Common Questions</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Everything you need to know before booking — and if we missed something, just call us.
              </p>
              <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#166534] text-white font-bold text-sm py-3 px-5 rounded-xl transition-all">
                Call {COMPANY.phone}
              </a>
            </div>
            <div className="lg:col-span-3 space-y-3">
              {FAQS.map((faq, i) => (
                <details key={i} className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-[#0f172a] hover:text-[#16a34a] transition-colors text-sm">
                    <span>{faq.question}</span>
                    <svg className="w-4 h-4 text-[#16a34a] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS STRIP ───────────────────────────────────────── */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <h2 className="font-bold text-[#0f172a]">Serving Nashville &amp; Middle Tennessee</h2>
            <Link href="/service-areas" className="text-[#16a34a] font-semibold text-sm hover:underline underline-offset-4">
              View full coverage map →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.map((area) => (
              <Link key={area} href="/service-areas" className="bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full hover:border-[#16a34a] hover:text-[#16a34a] transition-colors">
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0">
          <Image
            src="/images/home-exterior.jpg"
            alt="Nashville home pest control"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/elevate-logo-white.png"
            alt="Elevate Pest Control"
            width={200}
            height={56}
            className="h-12 w-auto object-contain mx-auto mb-8 opacity-90"
          />
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Ready for a Pest-Free Home?
          </h2>
          <p className="text-slate-400 text-lg mb-3">
            Call Nashville&apos;s most trusted pest control team today.
          </p>
          <p className="text-[#4ade80] font-semibold text-sm mb-10">
            30% off first service · Free inspection · 100% guaranteed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMPANY.phoneHref} className="flex items-center justify-center gap-3 bg-[#16a34a] hover:bg-[#15803d] text-white font-black text-xl py-5 px-12 rounded-xl transition-all shadow-2xl shadow-green-900/30">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (615) 671-6933
            </a>
            <Link href="/contact" className="flex items-center justify-center bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold text-xl py-5 px-12 rounded-xl transition-all">
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
