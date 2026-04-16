import Link from "next/link";
import Image from "next/image";
import { COMPANY, OTHER_LOCATIONS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/elevate-logo-white.png"
                alt="Elevate Pest Control"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              Nashville&apos;s trusted pest control experts since 2008. Family-owned, eco-friendly, and 100% guaranteed.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-400">{COMPANY.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href={COMPANY.phoneHref} className="text-[#4ade80] font-bold hover:text-green-300 transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-slate-400">{COMPANY.rating} Stars · {COMPANY.reviewCount} Reviews</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["General Pest Control", "/services"],
                ["Rodent Control", "/services"],
                ["Termite Control", "/services"],
                ["Mosquito Control", "/services"],
                ["Wasp & Bee Control", "/services"],
                ["Lawn Care", "/services"],
                ["Commercial Pest Control", "/services"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-[#4ade80] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Pest Library", "/pest-library"],
                ["Service Areas", "/service-areas"],
                ["Contact Us", "/contact"],
                ["Get Free Quote", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-[#4ade80] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Promo */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Office Hours</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>{COMPANY.hours.weekdays}</li>
              <li>{COMPANY.hours.saturday}</li>
              <li className="text-slate-500">{COMPANY.hours.sunday}</li>
            </ul>
            <div className="bg-[#16a34a]/20 border border-[#16a34a]/40 rounded-xl p-4">
              <p className="text-[#4ade80] font-bold text-sm">Limited Time Offer</p>
              <p className="text-white font-black text-lg leading-tight mt-1">30% Off</p>
              <p className="text-slate-300 text-xs mt-1">Initial service with a treatment plan</p>
              <a
                href={COMPANY.phoneHref}
                className="mt-3 block text-center bg-[#16a34a] hover:bg-[#166534] text-white font-bold text-sm py-2 px-4 rounded-lg transition-colors"
              >
                Claim Now
              </a>
            </div>
          </div>
        </div>

        {/* Other Locations */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
            Also Serving
          </h3>
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            {OTHER_LOCATIONS.map((loc) => (
              <span key={loc.state}>
                {loc.state} — {loc.city} · {loc.phone}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>© 2007–{year} Elevate Pest Control, LLC. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
