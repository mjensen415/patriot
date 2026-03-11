import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-patriot-navy overflow-hidden">
      {/* Subtle Star Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B22222' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        aria-hidden="true"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold uppercase tracking-tight mb-6 drop-shadow-lg">
          American Made. <br className="hidden md:inline" />
          Patriot Proud.
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Shop patriot gear, gifts, and apparel built for real Americans.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <Link 
            href="#products" 
            className="w-full sm:w-auto px-8 py-4 bg-patriot-red hover:bg-red-800 text-white font-heading font-bold text-lg uppercase tracking-wider transition-colors shadow-md rounded-sm"
          >
            Shop the Store
          </Link>
          <Link 
            href="#email-signup" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-patriot-gold text-patriot-gold hover:bg-patriot-gold hover:text-patriot-navy font-heading font-bold text-lg uppercase tracking-wider transition-colors shadow-md rounded-sm"
          >
            Join the Patriots
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm md:text-base font-body text-gray-400 font-semibold uppercase tracking-widest">
          <span>★ 100% American Pride</span>
          <span className="hidden md:inline">|</span>
          <span>★ Ships Nationwide</span>
          <span className="hidden md:inline">|</span>
          <span>★ Veteran Owned</span>
        </div>
      </div>
    </section>
  );
}
