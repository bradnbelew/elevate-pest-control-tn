import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pest Control Services Nashville TN | Residential, Commercial & More",
  description:
    "Comprehensive pest control services in Nashville TN — general pests, rodents, termites, mosquitoes, wasps, and lawn care. 100% guaranteed. Call (615) 671-6933.",
  alternates: { canonical: "/services" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Elevate Pest Control Services in Nashville TN",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    description: s.description,
    url: `https://elevate-pest-control-tn.vercel.app/services#${s.id}`,
  })),
};

const serviceImages: Record<string, string> = {
  "general-pest": "/images/pest-ant.png",
  "rodent": "/images/pest-rodent.png",
  "termite": "/images/pest-ant.png",
  "mosquito": "/images/mosquito-macro.jpg",
  "wasp": "/images/pest-wasp.png",
  "lawn": "/images/home-exterior.jpg",
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero with background photo */}
      <section className="relative bg-[#0f172a] py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tech-spraying.jpg"
            alt="Elevate Pest Control technician at work"
            fill
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#16a34a]/20 border border-[#16a34a]/40 text-[#4ade80] text-sm font-bold px-4 py-1.5 rounded-full mb-5">
              Full-Service Pest Control
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
              Every Pest.<br />
              Every Property.<br />
              <span className="text-[#4ade80]">One Solution.</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mb-8 leading-relaxed">
              From ants to termites, rodents to mosquitoes — customized treatment plans for any infestation in Nashville and Middle Tennessee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#166534] text-white font-black py-3.5 px-8 rounded-xl transition-all text-base">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call for Free Inspection
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white/30 text-white font-bold py-3.5 px-8 rounded-xl hover:border-white/60 hover:bg-white/5 transition-all text-base">
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick nav pills */}
      <section className="bg-white border-b border-slate-100 py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 px-4 py-1.5 bg-slate-100 hover:bg-[#dcfce7] hover:text-[#166534] text-slate-600 text-sm font-semibold rounded-full transition-all whitespace-nowrap"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, i) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                {/* Content */}
                <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <h2 className="text-3xl lg:text-4xl font-black text-[#0f172a] mb-4 leading-tight">
                    {service.name}
                    <span className="block text-[#16a34a] text-xl font-bold mt-1">Nashville, TN</span>
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6 text-base">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-slate-700">
                        <svg className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#166534] text-white font-bold py-3 px-6 rounded-lg transition-all text-sm">
                      Get Free Quote
                    </a>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-bold py-3 px-6 rounded-lg hover:border-[#16a34a] hover:text-[#16a34a] transition-all text-sm">
                      Schedule Inspection
                    </Link>
                  </div>
                </div>

                {/* Visual card */}
                <div className={`relative ${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative h-80 rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src={serviceImages[service.id] || serviceImages["general-pest"]}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
                        <svg className="w-5 h-5 text-[#4ade80] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white text-sm font-bold">100% Satisfaction Guaranteed</span>
                      </div>
                    </div>
                  </div>
                  {/* Local climate note */}
                  <div className="mt-4 bg-[#f0fdf4] border border-[#86efac] rounded-xl p-4">
                    <p className="text-[#166534] text-sm font-semibold mb-1">Why Nashville Needs This</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Tennessee&apos;s warm, humid climate creates year-round pest pressure. Our local technicians understand Nashville&apos;s specific pest patterns and seasonal activity cycles.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0f172a] mb-3">Residential &amp; Commercial Pest Control</h2>
            <p className="text-slate-500">Tailored programs for homes and businesses throughout Middle Tennessee.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image src="/images/home-exterior.jpg" alt="Residential pest control" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-[#16a34a] text-white text-xs font-black px-3 py-1 rounded-full">Residential</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#0f172a] mb-3">Home Pest Control</h3>
                <p className="text-slate-500 mb-6 leading-relaxed text-sm">Protect your family with comprehensive home pest control plans. We treat interior and exterior, with free callbacks between visits.</p>
                <ul className="space-y-2 mb-6">
                  {["Monthly, bi-monthly, or quarterly plans", "Pet and child-safe treatments", "Interior + exterior coverage", "Seasonal adjustments included", "Free callbacks guaranteed"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-[#16a34a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={COMPANY.phoneHref} className="block text-center bg-[#16a34a] hover:bg-[#166534] text-white font-bold py-3 px-6 rounded-xl transition-all text-sm">
                  Get Residential Quote
                </a>
              </div>
            </div>

            {/* Commercial */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/tech-spraying.jpg" alt="Commercial pest control" fill className="object-cover object-center opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-black px-3 py-1 rounded-full">Commercial</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-3">Business Pest Control</h3>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm">Protect your reputation with zero-tolerance pest programs tailored to your industry — restaurants, warehouses, retail, and more.</p>
                <ul className="space-y-2 mb-6">
                  {["6-point commercial service program", "EPA-compliant, zero-tolerance protocols", "Staff training & education", "Quality assurance monitoring", "Food safety compliance support"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-[#4ade80] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={COMPANY.phoneHref} className="block text-center bg-[#16a34a] hover:bg-[#166534] text-white font-bold py-3 px-6 rounded-xl transition-all text-sm">
                  Get Commercial Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/home-exterior.jpg" alt="Nashville home" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#166534]/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Don&apos;t Wait — Pests Don&apos;t Take Days Off</h2>
          <p className="text-green-100 mb-8 text-lg">Schedule within 24–72 hours. 30% off your first service with a treatment plan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 bg-white text-[#166534] font-black py-4 px-8 rounded-xl hover:bg-green-50 transition-all text-base">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all text-base">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
