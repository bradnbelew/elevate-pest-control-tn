import type { Metadata } from "next";
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

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#16a34a]/20 border border-[#16a34a]/40 text-[#4ade80] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            Full-Service Pest Control
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Every Pest. Every Property.<br />
            <span className="text-[#4ade80]">One Guaranteed Solution.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            From ants to termites, rodents to mosquitoes — Elevate Pest Control has customized treatment plans for any infestation in Nashville and Middle Tennessee.
          </p>
          <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#166534] text-white font-black py-3 px-8 rounded-xl transition-all">
            Call for Free Inspection
          </a>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, i) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-black text-[#0f172a] mb-3">{service.name} in Nashville, TN</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-slate-700">
                        <svg className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#166534] text-white font-bold py-2.5 px-6 rounded-lg transition-all text-sm">
                      Get Free Quote
                    </a>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-[#16a34a] text-[#16a34a] font-bold py-2.5 px-6 rounded-lg hover:bg-[#f0fdf4] transition-all text-sm">
                      Schedule Inspection
                    </Link>
                  </div>
                </div>
                <div className={`bg-[#f8fafc] border border-slate-100 rounded-2xl p-8 ${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <h3 className="font-black text-[#0f172a] mb-4">Why Nashville Homes Need {service.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Tennessee&apos;s warm, humid climate makes it one of the most pest-active states in the Southeast.
                    Our local technicians understand Nashville&apos;s specific pest patterns and seasonal pressures.
                  </p>
                  <div className="bg-white border border-[#dcfce7] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#16a34a] font-bold text-sm">✅ 100% Guaranteed</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      If pests return between scheduled visits, we come back and re-treat at no additional charge.
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
            <h2 className="text-3xl font-black text-[#0f172a]">Residential &amp; Commercial Pest Control</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-black text-[#0f172a] mb-3">Residential Pest Control</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">Protect your family with our comprehensive home pest control plans. We treat the exterior and interior of your home, with free callbacks between visits.</p>
              <ul className="space-y-2 mb-6">
                {["Monthly, bi-monthly, or quarterly plans", "Pet and child-safe treatments", "Interior + exterior coverage", "Seasonal adjustments included", "Free callbacks guaranteed"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-[#16a34a]">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href={COMPANY.phoneHref} className="block text-center bg-[#16a34a] hover:bg-[#166534] text-white font-bold py-3 px-6 rounded-xl transition-all">
                Get Residential Quote
              </a>
            </div>
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-black text-white mb-3">Commercial Pest Control</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">Protect your reputation and employees with zero-tolerance pest programs tailored to your industry — restaurants, warehouses, retail, and more.</p>
              <ul className="space-y-2 mb-6">
                {["6-point commercial service program", "EPA-compliant, zero-tolerance protocols", "Staff training & education", "Quality assurance monitoring", "Food safety compliance support"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-[#4ade80]">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href={COMPANY.phoneHref} className="block text-center bg-[#16a34a] hover:bg-[#166534] text-white font-bold py-3 px-6 rounded-xl transition-all">
                Get Commercial Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#166534] to-[#15803d]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Don&apos;t Wait — Pests Don&apos;t Take Days Off</h2>
          <p className="text-green-100 mb-8">Schedule within 24–72 hours. 30% off your first service with a treatment plan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 bg-white text-[#166534] font-black py-3 px-8 rounded-xl hover:bg-green-50 transition-all">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-all">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
