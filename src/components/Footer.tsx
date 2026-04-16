import Link from "next/link";
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
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#16a34a] flex items-center justify-center text-white font-black text-lg">
                E
              </div>
              <div className="leading-tight">
                <div className="font-black text-white text-base leading-none">Elevate</div>
                <div className="text-[10px] text-[#4ade80] font-semibold uppercase tracking-widest leading-none">
                  Pest Control
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Nashville's trusted pest control experts since 2008. Family-owned, eco-friendly, and 100% guaranteed.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span>📍</span>
                <span>{COMPANY.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href={COMPANY.phoneHref} className="text-[#4ade80] font-bold hover:text-green-300 transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>{COMPANY.rating} Stars · {COMPANY.reviewCount} Reviews</span>
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
              <p className="text-[#4ade80] font-bold text-sm">🎉 Current Offer</p>
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
