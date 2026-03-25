import Link from "next/link";

const downloads = [
  {
    id: 1,
    icon: "📋",
    title: "Patriot Starter Pack",
    description: "Everything you need to get started — founding docs, rights card, and prep checklist in one bundle.",
    tag: "PDF BUNDLE",
  },
  {
    id: 2,
    icon: "🎒",
    title: "72-Hour Bug-Out Checklist",
    description: "Comprehensive go-bag list built for American families. Print it, laminate it, live it.",
    tag: "PRINTABLE PDF",
  },
  {
    id: 3,
    icon: "⚖️",
    title: "Know Your Rights Card",
    description: "Wallet-sized card covering your 1st, 2nd, 4th, and 5th Amendment rights in plain English.",
    tag: "PRINTABLE CARD",
  },
  {
    id: 4,
    icon: "🏴",
    title: "Betsy Ross Flag Art Print",
    description: "High-resolution 18×24\" print-ready file. Frame it, hang it, fly it.",
    tag: "PRINT ART · 300 DPI",
  },
  {
    id: 5,
    icon: "📜",
    title: "1776 Declaration Poster",
    description: "Parchment-styled declaration poster — the words that changed the world, ready for your wall.",
    tag: "PRINT ART · 300 DPI",
  },
  {
    id: 6,
    icon: "🛡️",
    title: "Emergency Prep Guide",
    description: "30-day home preparedness roadmap with supply lists, communication plans, and evac routes.",
    tag: "PDF GUIDE",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="shop" className="py-24 bg-ps-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <span className="text-ps-gold font-headline font-black text-xs tracking-[0.25em] uppercase mb-4 block">
            FREE DOWNLOADS
          </span>
          <h2 className="font-headline font-black text-4xl md:text-6xl text-white uppercase tracking-tight leading-[0.9] mb-6">
            WEAR YOUR<br />
            <span className="text-ps-red">VALUES.</span>
          </h2>
          <p className="text-ps-muted text-lg max-w-2xl font-medium">
            Drop your email and get instant access to our full patriot resource library — printables, checklists, posters, and more. No cost. No catch.
          </p>
        </div>

        {/* Download Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="bg-ps-container p-8 flex flex-col gap-4 hover:bg-ps-container-hi transition-colors group"
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl">{item.icon}</span>
                <span className="text-[10px] font-headline font-black tracking-[0.15em] text-ps-gold/70 uppercase border border-ps-gold/20 px-2 py-0.5">
                  {item.tag}
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="font-headline font-black text-xl text-white uppercase tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-ps-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <Link
                href="#signup"
                className="text-ps-red font-headline font-black text-sm uppercase tracking-widest group-hover:text-white transition-colors flex items-center gap-2"
              >
                FREE DOWNLOAD
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#signup"
            className="inline-block bg-ps-red hover:bg-ps-red/80 text-white font-headline font-black text-lg px-12 py-5 uppercase tracking-tight transition-all active:scale-95"
          >
            GET THE FULL PACK — FREE
          </Link>
        </div>
      </div>
    </section>
  );
}
