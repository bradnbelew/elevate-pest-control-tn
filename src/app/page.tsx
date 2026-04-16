import type { Metadata } from "next";
import Link from "next/link";
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

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#16a34a]/20 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#16a34a]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 w-[600px] h-64 bg-[#16a34a]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#16a34a]/20 border border-[#16a34a]/40 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" />
                <span className="text-[#4ade80] text-sm font-semibold">Nashville&apos;s #1 Rated Pest Control</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                Take Your Home{" "}
                <span className="text-[#4ade80]">Back from Pests</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                Smart, safe, and eco-friendly pest control for Nashville families.
                100% guaranteed results — or we come back for free.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: "✅", text: "100% Guaranteed" },
                  { icon: "🐾", text: "Pet & Family Safe" },
                  { icon: "🌿", text: "Eco-Friendly IPM" },
                  { icon: "⚡", text: "24–72 Hr Service" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-1.5 text-sm text-slate-300">
                    <span>{item.icon}</span><span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#166534] text-white font-black text-lg py-4 px-8 rounded-xl transition-all btn-pulse shadow-lg shadow-green-900/30"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call (615) 671-6933
                </a>
                <Link href="/contact" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all">
                  Get Free Quote
                </Link>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 rounded-lg px-4 py-2">
                <span className="text-amber-400 text-sm font-bold">🎉 LIMITED TIME:</span>
                <span className="text-amber-100 text-sm">30% off your initial service with a treatment plan</span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { value: "4.8★", label: "Google Rating" },
                    { value: "2,400+", label: "Happy Customers" },
                    { value: "100%", label: "Guaranteed" },
                    { value: "15+", label: "Years Serving TN" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-black text-[#4ade80]">{stat.value}</div>
                      <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-slate-300 text-sm font-semibold mb-4 text-center">Certified &amp; Accredited</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      { label: "BBB A+", sub: "Accredited" },
                      { label: "QualityPro", sub: "NPMA Certified" },
                      { label: "GreenPro", sub: "Eco Certified" },
                      { label: "Licensed", sub: "State of TN" },
                    ].map((badge) => (
                      <div key={badge.label} className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-center">
                        <div className="text-white font-bold text-xs">{badge.label}</div>
                        <div className="text-slate-400 text-[10px]">{badge.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 max-w-[200px] hidden sm:block">
                <StarRating />
                <p className="text-slate-700 text-xs font-medium mt-1 leading-snug">&ldquo;Best pest control in Nashville — highly recommend!&rdquo;</p>
                <p className="text-slate-400 text-[10px] mt-1">— Google Review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#f0fdf4] border-y border-green-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 text-sm font-semibold text-slate-600">
            {[
              { icon: "🏆", text: "BBB A+ Rated" },
              { icon: "🌿", text: "GreenPro Certified" },
              { icon: "✅", text: "QualityPro Certified" },
              { icon: "👨‍👩‍👧", text: "Family-Owned Since 2008" },
              { icon: "🛡️", text: "Licensed & Insured" },
              { icon: "⭐", text: "4.8 Google Rating" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-xl">{item.icon}</span><span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#dcfce7] text-[#166534] text-sm font-bold px-4 py-1.5 rounded-full mb-4">Our Services</span>
            <h2 className="text-4xl font-black text-[#0f172a] mb-4">Complete Pest Control for Nashville Homes &amp; Businesses</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">From common household pests to specialized infestations, we have a customized solution for every situation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:border-[#16a34a]/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#16a34a] transition-colors">{service.name}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-1.5 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-[#16a34a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="inline-flex items-center gap-1 text-[#16a34a] font-semibold text-sm hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#166534] text-white font-bold py-3 px-8 rounded-xl transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ELEVATE */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#dcfce7] text-[#166534] text-sm font-bold px-4 py-1.5 rounded-full mb-4">Why Elevate?</span>
              <h2 className="text-4xl font-black text-[#0f172a] mb-6">Nashville Pest Control Done the Right Way</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">We combine national expertise with local Nashville knowledge. Every home is different, so every treatment plan is customized — no cookie-cutter approaches.</p>
              <div className="space-y-5">
                {[
                  { icon: "🌿", title: "Eco-Friendly IPM", desc: "Integrated Pest Management reduces pesticide use by ~90%. We use the least-toxic, most-effective solutions available." },
                  { icon: "🛡️", title: "100% Satisfaction Guarantee", desc: "If pests return between visits, we come back and re-treat at no charge. We don't quit until you're pest-free." },
                  { icon: "👨‍🔬", title: "Highly Trained Technicians", desc: "Our techs receive weekly training on pest biology, non-chemical methods, and the latest safe treatments." },
                  { icon: "📅", title: "Year-Round Protection", desc: "Seasonal adjustment plans keep your home protected through Tennessee's spring blooms to winter rodent season." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#dcfce7] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-[#0f172a] mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-lg">
              <h3 className="font-black text-[#0f172a] text-xl mb-6">Our 6-Point Service Process</h3>
              <div className="space-y-5">
                {[
                  { step: "01", title: "Full Property Inspection", desc: "Inside & outside assessment to identify pest entry points and activity." },
                  { step: "02", title: "Exterior Foundation Treatment", desc: "Barrier treatment around the perimeter of your home." },
                  { step: "03", title: "Aerial Defense", desc: "Eaves, spider webs, and wasp nests — we clear it all." },
                  { step: "04", title: "Interior Treatment", desc: "Crack & crevice treatment in kitchens, bathrooms, and hiding spots." },
                  { step: "05", title: "Ongoing Monitoring", desc: "Seasonal adjustments as pest pressures change throughout the year." },
                  { step: "06", title: "Free Callbacks", desc: "Any pest activity between visits? We come back — no charge." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-9 h-9 bg-[#16a34a] text-white rounded-full flex items-center justify-center font-black text-xs flex-shrink-0">{item.step}</div>
                    <div>
                      <p className="font-bold text-[#0f172a] text-sm">{item.title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEASONAL GUIDE */}
      <section className="py-16 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">Nashville Seasonal Pest Calendar</h2>
            <p className="text-slate-400">Tennessee&apos;s climate creates year-round pest pressure. Here&apos;s what to watch for.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { season: "Spring", icon: "🌸", color: "from-pink-900/40 to-rose-900/20", border: "border-pink-800/40", pests: ["Ants (colony expansion)", "Termite swarms", "Mosquitoes (first wave)", "Stinging insects"] },
              { season: "Summer", icon: "☀️", color: "from-amber-900/40 to-yellow-900/20", border: "border-amber-800/40", pests: ["Mosquitoes (peak)", "Wasps & bees", "Cockroaches", "Flies"] },
              { season: "Fall", icon: "🍂", color: "from-orange-900/40 to-amber-900/20", border: "border-orange-800/40", pests: ["Rodents (seeking warmth)", "Stink bugs", "Spiders", "Earwigs"] },
              { season: "Winter", icon: "❄️", color: "from-blue-900/40 to-slate-900/20", border: "border-blue-800/40", pests: ["Mice & rats", "Cockroaches", "Bed bugs", "Silverfish"] },
            ].map((item) => (
              <div key={item.season} className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-xl p-6`}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-black text-white text-lg mb-3">{item.season}</h3>
                <ul className="space-y-1.5">
                  {item.pests.map((pest) => (
                    <li key={pest} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full flex-shrink-0" />{pest}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-amber-100 text-amber-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4">⭐ 4.8 Stars on Google</span>
            <h2 className="text-4xl font-black text-[#0f172a] mb-4">What Tennessee Families Are Saying</h2>
            <p className="text-slate-500">Join thousands of satisfied customers across Nashville and Middle Tennessee.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <StarRating count={t.rating} />
                <p className="text-slate-600 text-sm leading-relaxed mt-3 mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 bg-[#16a34a] rounded-full flex items-center justify-center text-white font-bold text-sm">{t.name[0]}</div>
                  <div>
                    <p className="font-bold text-[#0f172a] text-xs">{t.name}</p>
                    <p className="text-slate-400 text-[10px]">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f8fafc]" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#dcfce7] text-[#166534] text-sm font-bold px-4 py-1.5 rounded-full mb-4">FAQ</span>
            <h2 className="text-4xl font-black text-[#0f172a] mb-4">Common Questions About Nashville Pest Control</h2>
            <p className="text-slate-500">Everything you need to know before booking your service.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-[#0f172a] hover:text-[#16a34a] transition-colors">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-[#16a34a] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS STRIP */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-[#0f172a]">Serving Nashville &amp; Middle Tennessee</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICE_AREAS.map((area) => (
              <Link key={area} href="/service-areas" className="bg-[#f0fdf4] text-[#166534] text-sm font-medium px-3 py-1.5 rounded-full border border-[#86efac] hover:bg-[#dcfce7] transition-colors">
                {area}
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/service-areas" className="text-[#16a34a] font-semibold text-sm hover:underline">View Full Service Area Map →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#166534] to-[#14532d] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-300 font-bold text-sm">🎉 Limited Offer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">30% Off Your First Treatment</h2>
          <p className="text-green-100 text-xl mb-3">With any recurring treatment plan. Satisfaction 100% guaranteed.</p>
          <p className="text-green-200 text-sm mb-10">Free home inspection · No hidden fees · Service within 24–72 hours</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMPANY.phoneHref} className="flex items-center justify-center gap-2 bg-white text-[#166534] font-black text-lg py-4 px-10 rounded-xl hover:bg-green-50 transition-all shadow-lg btn-pulse">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (615) 671-6933
            </a>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-lg py-4 px-10 rounded-xl transition-all">
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
