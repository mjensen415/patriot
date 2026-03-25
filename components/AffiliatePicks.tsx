import Link from "next/link";

const picks = [
  {
    id: 1,
    category: "PREPAREDNESS",
    name: "My Patriot Supply",
    description: "Emergency food storage built for American families. Up to 25-year shelf life. Real calories for real emergencies.",
    href: "#",
  },
  {
    id: 2,
    category: "TACTICAL GEAR",
    name: "5.11 Tactical",
    description: "Gear built for those who serve and protect. Trusted by military, law enforcement, and prepared civilians.",
    href: "#",
  },
  {
    id: 3,
    category: "FIREARMS & ACCESSORIES",
    name: "Palmetto State Armory",
    description: "American-made rifles, pistols, and accessories. PSA builds quality you can count on at a price that respects your wallet.",
    href: "#",
  },
  {
    id: 4,
    category: "HEALTH & FITNESS",
    name: "Jocko Fuel",
    description: "Discipline-driven supplements from retired Navy SEAL Jocko Willink. Pre-workout, protein, and recovery built for warriors.",
    href: "#",
  },
  {
    id: 5,
    category: "OUTDOORS & SURVIVAL",
    name: "Barebones Living",
    description: "Rugged outdoor tools, lanterns, and cast iron cookware. Made to work hard in the field and look great at camp.",
    href: "#",
  },
  {
    id: 6,
    category: "EDUCATION & MEDIA",
    name: "Hillsdale College",
    description: "Free online courses in American history, the Constitution, and Western heritage. Knowledge is the ultimate patriot weapon.",
    href: "#",
  },
];

export default function AffiliatePicks() {
  return (
    <section id="partners" className="py-24 bg-ps-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-ps-red font-headline font-black text-xs tracking-[0.25em] uppercase mb-4 block">
              AFFILIATE PARTNERS
            </span>
            <h2 className="font-headline font-black text-4xl md:text-6xl text-white uppercase tracking-tight leading-[0.9]">
              PATRIOT-APPROVED<br />
              <span className="text-ps-muted">BRANDS.</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-xs leading-relaxed md:text-right">
            We only partner with brands we believe in. Some links earn us a commission — at no cost to you.
          </p>
        </div>

        {/* Picks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {picks.map((pick) => (
            <div
              key={pick.id}
              className="bg-ps-container p-8 flex flex-col gap-4 hover:bg-ps-container-hi transition-colors group border-l-2 border-transparent hover:border-ps-red"
            >
              <span className="text-[10px] font-headline font-black tracking-[0.2em] text-ps-gold/60 uppercase">
                {pick.category}
              </span>
              <div className="flex-grow">
                <h3 className="font-headline font-black text-xl text-white uppercase tracking-tight mb-3">
                  {pick.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {pick.description}
                </p>
              </div>
              <Link
                href={pick.href}
                data-affiliate="true"
                className="text-white/40 font-headline font-black text-xs uppercase tracking-widest group-hover:text-ps-red transition-colors flex items-center gap-2 mt-2"
              >
                SHOP NOW
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/30 text-xs font-medium mt-8 uppercase tracking-widest">
          Affiliate disclosure: We may earn a small commission on qualifying purchases at no extra cost to you.
        </p>
      </div>
    </section>
  );
}
