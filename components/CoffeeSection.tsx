import Link from "next/link";

export default function CoffeeSection() {
  return (
    <section id="coffee" className="py-24 bg-ps-container-lo border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Coffee bag visual */}
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            <div className="w-full max-w-md aspect-[3/4] bg-ps-container border border-white/10 flex flex-col items-center justify-center p-12 relative overflow-hidden">
              {/* Background texture layer */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, #e6c364 0, #e6c364 1px, transparent 0, transparent 50%)",
                  backgroundSize: "12px 12px",
                }} />

              {/* Badge */}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 border-2 border-ps-gold flex items-center justify-center mb-6 mx-auto">
                  <span className="text-5xl">☕</span>
                </div>
                <p className="font-headline font-black text-ps-gold text-xs tracking-[0.3em] uppercase mb-2">
                  SMALL BATCH · FRESH ROASTED
                </p>
                <h3 className="font-headline font-black text-white text-3xl uppercase tracking-tight leading-tight">
                  PATRIOT<br />BLEND
                </h3>
                <div className="mt-4 border-t border-ps-gold/30 pt-4">
                  <p className="text-ps-muted text-xs font-medium uppercase tracking-widest">
                    Medium · Dark · Espresso
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-ps-red px-4 py-2 rotate-3">
              <p className="font-headline font-black text-white text-xs uppercase tracking-wider">
                10% TO VETERANS
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-ps-gold font-headline font-black text-xs tracking-[0.25em] uppercase mb-4 block">
              PATRIOT STUFF COFFEE CO.
            </span>

            <h2 className="font-headline font-black text-5xl md:text-7xl text-white uppercase tracking-tight leading-[0.9] mb-8">
              ROASTED<br />
              FOR THE<br />
              <span className="text-ps-gold">BOLD.</span>
            </h2>

            <p className="text-ps-muted text-lg leading-relaxed mb-6 font-medium">
              Small-batch, premium roasts crafted for those who take their country as seriously as their coffee. No fluff. No filler. Just bold flavor with a mission behind every bag.
            </p>

            <p className="text-white/60 text-sm leading-relaxed mb-10 border-l-2 border-ps-red pl-4">
              10% of every purchase goes directly to veteran nonprofits providing mental health support, job training, and transition assistance for those who served.
            </p>

            {/* Roast options */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["PATRIOT BLEND", "DARK ROAST", "ESPRESSO GRIND", "SINGLE ORIGIN"].map((roast) => (
                <span
                  key={roast}
                  className="border border-white/20 text-white/60 font-headline font-bold text-xs uppercase tracking-widest px-3 py-1.5"
                >
                  {roast}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="bg-ps-gold hover:bg-ps-gold/80 text-ps-container-lo font-headline font-black text-lg px-10 py-4 uppercase tracking-tight transition-all active:scale-95 text-center"
              >
                SHOP COFFEE
              </Link>
              <Link
                href="#signup"
                className="border border-white/20 hover:border-white/50 text-white font-headline font-black text-lg px-10 py-4 uppercase tracking-tight transition-all text-center"
              >
                JOIN FOR 10% OFF
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
