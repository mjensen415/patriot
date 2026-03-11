import Link from "next/link";

const picks = [
  {
    id: 1,
    emoji: "🥫",
    name: "MyPatriotSupply",
    description: "Emergency food storage kits for American families. Up to 25-year shelf life.",
  },
  {
    id: 2,
    emoji: "☕",
    name: "Black Rifle Coffee",
    description: "Veteran-owned coffee company. Bold roasts for bold Americans.",
  },
  {
    id: 3,
    emoji: "🏕️",
    name: "5.11 Tactical",
    description: "Tactical clothing and gear built for those who serve and protect.",
  },
  {
    id: 4,
    emoji: "📦",
    name: "Amazon Patriot Picks",
    description: "Flags, decor, and gear curated for patriots. Ships fast with Prime.",
  },
];

export default function AffiliatePicks() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-patriot-navy uppercase tracking-tight mb-4">
            ★ Patriot Picks
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Gear and supplies we actually use and recommend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {picks.map((pick) => (
            <div key={pick.id} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="text-6xl mb-6 sm:mb-0 sm:mr-8 flex-shrink-0">
                {pick.emoji}
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="font-heading text-2xl font-bold text-patriot-navy mb-2">
                  {pick.name}
                </h3>
                <p className="font-body text-gray-600 mb-6 flex-grow">
                  {pick.description}
                </p>
                <Link 
                  href="#" 
                  data-affiliate="true"
                  className="inline-flex items-center text-patriot-red hover:text-red-900 font-heading font-bold text-lg uppercase tracking-wide group"
                >
                  Shop Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
