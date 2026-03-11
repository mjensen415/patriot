import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Left */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-patriot-navy uppercase tracking-tight mb-6">
              Built by Americans, <br className="hidden lg:inline" />
              For Americans
            </h2>
            <p className="font-body text-lg text-gray-700 mb-8 leading-relaxed">
              Patriot Stuff was built for the Americans who aren&apos;t afraid to show their colors. 
              Every design, every product, every pick on this site is chosen with one thing in mind: 
              pride in this country and the people who built it. Whether you&apos;re shopping for yourself 
              or looking for the perfect patriot gift — you&apos;re in the right place.
            </p>
            <Link 
              href="#"
              className="px-8 py-3 bg-transparent border-2 border-patriot-navy text-patriot-navy hover:bg-patriot-navy hover:text-white font-heading font-bold text-lg uppercase tracking-wider transition-colors rounded-sm"
            >
              See Our Story
            </Link>
          </div>

          {/* Decorative Right */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="text-[8rem] md:text-[12rem] select-none hover:scale-110 transition-transform duration-500 hover:-rotate-3">
              🇺🇸
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
