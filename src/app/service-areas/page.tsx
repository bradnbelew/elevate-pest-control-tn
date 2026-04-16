import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pest Control Service Areas Nashville TN | Middle Tennessee",
  description:
    "Elevate Pest Control serves Nashville, Brentwood, Franklin, Murfreesboro, Hendersonville, Smyrna, and all of Middle Tennessee. Call (615) 671-6933.",
  alternates: { canonical: "/service-areas" },
};

const areaSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Elevate Pest Control",
  telephone: "+16156716933",
  address: {
    "@type": "PostalAddress",
    streetAddress: "715 Poplar Ave, Suite 101",
    addressLocality: "Nashville",
    addressRegion: "TN",
    postalCode: "37210",
    addressCountry: "US",
  },
  areaServed: SERVICE_AREAS.map((area) => ({
    "@type": "City",
    name: `${area}, Tennessee`,
  })),
};

const areaDetails = [
  { city: "Nashville", desc: "Our home base and primary service area. Full residential and commercial coverage across all Nashville zip codes.", zip: "37201–37250" },
  { city: "Brentwood", desc: "Premium residential pest control for one of Tennessee's most sought-after communities.", zip: "37027" },
  { city: "Franklin", desc: "Serving historic downtown Franklin and surrounding neighborhoods with expert pest management.", zip: "37064–37069" },
  { city: "Murfreesboro", desc: "Fast-growing Murfreesboro gets the same guaranteed service as Nashville proper.", zip: "37127–37132" },
  { city: "Hendersonville", desc: "Lake-side living brings unique pest pressures — our team knows what to watch for.", zip: "37075" },
  { city: "Smyrna", desc: "Residential and commercial pest control throughout Smyrna and Rutherford County.", zip: "37167" },
  { city: "La Vergne", desc: "Complete pest management services for homes and businesses in La Vergne.", zip: "37086" },
  { city: "Antioch", desc: "Serving the growing Antioch area with reliable, guaranteed pest control.", zip: "37013" },
  { city: "Nolensville", desc: "Family-focused pest control for one of Middle TN's fastest-growing communities.", zip: "37135" },
  { city: "Spring Hill", desc: "Comprehensive service for Spring Hill residents and businesses in Williamson and Maury counties.", zip: "37174" },
  { city: "Gallatin", desc: "Serving Gallatin and Sumner County with professional pest elimination.", zip: "37066" },
  { city: "Mount Juliet", desc: "Protecting Wilson County homes and businesses from Nashville's common pests.", zip: "37122" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }} />

      {/* Hero */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#16a34a]/20 border border-[#16a34a]/40 text-[#4ade80] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            Service Coverage
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Serving Nashville &amp;<br />
            <span className="text-[#4ade80]">All of Middle Tennessee</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            From downtown Nashville to surrounding counties — Elevate Pest Control covers Middle Tennessee with fast, guaranteed service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#166534] text-white font-black py-3 px-8 rounded-xl transition-all">
              Check Your Area
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border border-white/30 text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-all">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Area Pills */}
      <section className="py-10 bg-[#f0fdf4] border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-bold text-[#0f172a] mb-4">All Covered Service Areas:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICE_AREAS.map((area) => (
              <span key={area} className="bg-white border border-[#86efac] text-[#166534] text-sm font-medium px-3 py-1.5 rounded-full">
                ✓ {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Area Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0f172a]">Pest Control Near You</h2>
            <p className="text-slate-500 mt-2">Click your city to learn more about local pest pressures and our coverage.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areaDetails.map((area) => (
              <div key={area.city} className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#16a34a]/30 transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-black text-[#0f172a] text-lg group-hover:text-[#16a34a] transition-colors">{area.city}, TN</h3>
                  <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{area.zip}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{area.desc}</p>
                <a href={COMPANY.phoneHref} className="inline-flex items-center gap-1 text-[#16a34a] text-sm font-semibold hover:underline">
                  Get Service in {area.city} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-[#0f172a] mb-4">Find Us in Nashville</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our Nashville office serves as the hub for all Middle Tennessee operations. Walk-ins welcome during business hours, or call ahead for same-day service scheduling.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-xl">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-bold text-[#0f172a] text-sm">Office Address</p>
                    <p className="text-slate-500 text-sm">715 Poplar Ave, Suite 101<br />Nashville, TN 37210</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-xl">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-bold text-[#0f172a] text-sm">Phone</p>
                    <a href={COMPANY.phoneHref} className="text-[#16a34a] font-bold text-sm">{COMPANY.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-xl">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="font-bold text-[#0f172a] text-sm">Office Hours</p>
                    <p className="text-slate-500 text-sm">Mon–Fri: 8:00 AM – 6:00 PM<br />Sat: 8:00 AM – 4:00 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.1!2d-86.7752!3d36.1530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646692!2s715+Poplar+Ave%2C+Nashville%2C+TN+37210!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elevate Pest Control Nashville TN Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Not in the list? */}
      <section className="py-12 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Don&apos;t See Your City?</h2>
          <p className="text-slate-400 mb-6">We may still serve your area! Call us to confirm coverage at your address.</p>
          <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#166534] text-white font-bold py-3 px-8 rounded-xl transition-all">
            Call (615) 671-6933 to Check
          </a>
        </div>
      </section>
    </>
  );
}
