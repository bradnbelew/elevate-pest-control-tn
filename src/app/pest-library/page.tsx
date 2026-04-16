import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, PESTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nashville Pest Library | Identify Common Tennessee Pests | Elevate",
  description:
    "Identify pests common to Nashville and Middle Tennessee. Learn about ants, spiders, rodents, termites, mosquitoes, and more. Elevate Pest Control — (615) 671-6933.",
  alternates: { canonical: "/pest-library" },
};

const pestDetails: Record<string, { biology: string; signs: string[]; treatment: string }> = {
  Ants: {
    biology: "Ants are social insects that live in colonies ranging from a few dozen to millions. In Tennessee, fire ants, carpenter ants, and pavement ants are the most common home invaders.",
    signs: ["Visible trails along walls and baseboards", "Soil mounds near foundation", "Sawdust-like frass (carpenter ants)", "Food contamination in kitchen areas"],
    treatment: "Targeted baiting, exterior perimeter spray, and nest elimination. Carpenter ant infestations may require additional structural inspection.",
  },
  Spiders: {
    biology: "Most Tennessee spiders are harmless, but the Brown Recluse and Black Widow are medically significant. Spiders typically enter homes seeking prey insects, moisture, or shelter.",
    signs: ["Webs in corners, eaves, and basements", "Egg sacs in hidden areas", "Shed skin near webs", "Actual spider sightings, especially at night"],
    treatment: "Web removal, perimeter treatment, and interior crack & crevice application. Eliminating prey insects reduces spider pressure significantly.",
  },
  Cockroaches: {
    biology: "German and American cockroaches are the most common in Nashville. They thrive in warm, humid environments and multiply rapidly — one female can produce hundreds of offspring.",
    signs: ["Dark droppings resembling coffee grounds", "Musty odor in cabinets or under sinks", "Egg cases (oothecae) in hidden areas", "Sightings at night in kitchen or bathroom"],
    treatment: "Gel baiting, growth regulators, and perimeter exclusion. German cockroaches require interior-focused treatment; American cockroaches are treated at entry points.",
  },
  Rodents: {
    biology: "House mice and Norway rats are the primary rodent concerns in Nashville. Rodents gnaw on wiring (fire hazard), contaminate food, and carry diseases like Hantavirus and Salmonella.",
    signs: ["Droppings along walls and in cabinets", "Gnaw marks on food packaging or wiring", "Nesting material (shredded paper, fabric)", "Scratching sounds in walls at night"],
    treatment: "Multi-point trapping, exclusion (sealing entry points), and UV detection for urine deposits. Sanitation guidance to remove attractants.",
  },
  Mosquitoes: {
    biology: "Nashville's warm, wet summers create ideal breeding conditions. Mosquitoes breed in as little as a bottle cap of standing water and are active from April through October in Middle TN.",
    signs: ["Bites during outdoor activity", "Humming sound near standing water", "High activity at dusk and dawn", "Larvae in bird baths, gutters, or pots"],
    treatment: "Barrier spray treatments to vegetation, standing water elimination, and breeding site inspection. Monthly programs maintain protection through peak season.",
  },
  "Wasps & Bees": {
    biology: "Yellow jackets, paper wasps, and mud daubers are common in Tennessee. They build nests in eaves, attics, ground burrows, and shrubs — and become especially aggressive in late summer.",
    signs: ["Active nest in eaves, roof lines, or ground", "Increased wasp activity near structure", "Chewing sounds in walls (yellow jackets)", "Paper or mud nest structure visible"],
    treatment: "Professional nest removal with protective equipment. Residual treatment of nesting sites prevents re-colonization. Same-day service often available.",
  },
  Termites: {
    biology: "Subterranean termites are the primary species in Tennessee, causing over $5 billion in U.S. property damage annually. They can silently destroy a home's structure for years undetected.",
    signs: ["Mud tubes on foundation walls", "Hollow-sounding wood when tapped", "Discarded wings near windows/doors (swarmer season)", "Blistered or sagging wood floors"],
    treatment: "Liquid barrier treatment (Termidor), bait station systems, and annual monitoring. Early detection saves thousands in structural repair costs.",
  },
  "Bed Bugs": {
    biology: "Bed bugs are expert hitchhikers — entering homes via luggage, used furniture, and clothing. They hide in mattress seams, box springs, and baseboards, feeding at night.",
    signs: ["Small rust-colored stains on bedding", "Itchy bite clusters, often in lines or rows", "Shed skins in mattress seams", "Musty odor in heavily infested rooms"],
    treatment: "Heat treatment and/or chemical treatment depending on severity. Pre-treatment preparation instructions provided. Follow-up inspection included.",
  },
  "Fleas & Ticks": {
    biology: "Fleas thrive on pets and in carpet fibers; ticks lurk in tall grass and wooded areas. Both transmit diseases — fleas carry tapeworms, ticks carry Lyme disease and Rocky Mountain Spotted Fever.",
    signs: ["Pets scratching excessively", "Red bite marks on ankles and lower legs", "Flea dirt (tiny black specks) on pet fur", "Ticks found crawling on skin or clothing"],
    treatment: "Interior carpet treatment, exterior yard spray, and pet coordination with your veterinarian for maximum effectiveness.",
  },
  Silverfish: {
    biology: "Silverfish prefer high humidity and are commonly found in bathrooms, basements, and attics. They damage paper, books, wallpaper, and clothing fabrics.",
    signs: ["Yellowish stains or scales on paper/fabric", "Irregular holes in books or wallpaper", "Sightings in bathtubs or sinks (trapped)", "Shed scales near hiding areas"],
    treatment: "Moisture reduction, desiccant dusts in attics and crawl spaces, and perimeter treatment to intercept entry.",
  },
  Earwigs: {
    biology: "Earwigs seek moist environments and are common in Nashville's humid summers. They gather under mulch, rocks, and debris near the foundation.",
    signs: ["Clusters near exterior lighting at night", "Damage to tender garden plants", "Sightings in basement or bathroom", "Presence under outdoor mats or debris"],
    treatment: "Perimeter barrier spray, mulch and moisture management, and exterior lighting adjustments to reduce attractants.",
  },
  "Pantry Pests": {
    biology: "Indian meal moths, grain beetles, and weevils infest stored dry goods — flour, cereal, spices, pasta, and pet food. They're often introduced via infested products at the store.",
    signs: ["Webbing or larvae inside food packaging", "Tiny moths flying near kitchen cabinets", "Larvae in dry goods", "Clumping or off-smell in stored products"],
    treatment: "Inspection and disposal of infested products, pheromone traps, and targeted treatment of cabinets. Sealed storage containers prevent re-infestation.",
  },
};

export default function PestLibraryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#16a34a]/20 border border-[#16a34a]/40 text-[#4ade80] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            Pest Identification Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Nashville Pest Library
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Identify the pests common to Middle Tennessee, learn the warning signs, and find out how Elevate treats them.
          </p>
        </div>
      </section>

      {/* Pest Grid Navigation */}
      <section className="py-12 bg-[#f0fdf4] border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500 mb-6">Jump to a pest:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {PESTS.map((pest) => (
              <a key={pest.name} href={`#${pest.name.toLowerCase().replace(/\s+&?\s*/g, "-")}`} className="flex items-center gap-2 bg-white border border-[#86efac] text-[#166534] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#dcfce7] transition-colors">
                <span>{pest.icon}</span><span>{pest.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pest Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {PESTS.map((pest) => {
              const details = pestDetails[pest.name];
              const anchorId = pest.name.toLowerCase().replace(/\s+&?\s*/g, "-");
              return (
                <div key={pest.name} id={anchorId} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm scroll-mt-24">
                  <div className="bg-[#f8fafc] border-b border-slate-100 px-8 py-6 flex items-center gap-4">
                    <span className="text-4xl">{pest.icon}</span>
                    <div>
                      <h2 className="text-2xl font-black text-[#0f172a]">{pest.name}</h2>
                      <p className="text-slate-500 text-sm">{pest.description}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    {details ? (
                      <div className="grid md:grid-cols-3 gap-8">
                        <div>
                          <h3 className="font-bold text-[#0f172a] mb-3 flex items-center gap-2"><span>🔬</span> About This Pest</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{details.biology}</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0f172a] mb-3 flex items-center gap-2"><span>⚠️</span> Warning Signs</h3>
                          <ul className="space-y-2">
                            {details.signs.map((sign) => (
                              <li key={sign} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="text-amber-500 mt-0.5">•</span>{sign}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0f172a] mb-3 flex items-center gap-2"><span>✅</span> How We Treat It</h3>
                          <p className="text-slate-600 text-sm leading-relaxed mb-4">{details.treatment}</p>
                          <a href={COMPANY.phoneHref} className="inline-flex items-center gap-1 bg-[#16a34a] text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#166534] transition-colors">
                            Get Treatment Quote
                          </a>
                        </div>
                      </div>
                    ) : (
                      <p className="text-slate-500 text-sm">Contact us at {COMPANY.phone} for information about this pest.</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#166534] to-[#15803d]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Spotted a Pest? Don&apos;t Wait.</h2>
          <p className="text-green-100 mb-8">Early treatment prevents larger, costlier infestations. Call Elevate now for a free inspection.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 bg-white text-[#166534] font-black py-3 px-8 rounded-xl hover:bg-green-50 transition-all">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-all">
              Get Free Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
