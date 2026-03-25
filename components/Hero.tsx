import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) brightness(0.4) contrast(1.25)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ps-surface via-transparent to-ps-surface/40 opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 flex justify-center">
          <span className="bg-ps-gold-dark text-ps-gold font-headline font-black px-4 py-1 text-sm tracking-[0.2em] uppercase">
            EST. 1776
          </span>
        </div>

        <h1 className="text-6xl md:text-9xl font-headline font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
          BUILT FOR PATRIOTS.<br />
          <span className="text-ps-red not-italic">MADE IN AMERICA.</span>
        </h1>

        <p className="text-lg md:text-2xl text-ps-muted font-medium max-w-2xl mx-auto mb-12 uppercase tracking-wide">
          Gear, coffee, and lifestyle for those who never stopped believing in the mission.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            href="#shop"
            className="bg-ps-red hover:bg-ps-red/80 text-white font-headline font-black text-xl px-12 py-5 uppercase tracking-tight transition-all active:scale-95"
          >
            SHOP THE STORE
          </Link>
          <Link
            href="#signup"
            className="border-2 border-white/30 hover:border-white text-white font-headline font-black text-xl px-12 py-5 uppercase tracking-tight transition-all active:scale-95 bg-white/5 backdrop-blur-sm"
          >
            EXPLORE THE BRAND
          </Link>
        </div>
      </div>
    </section>
  );
}
