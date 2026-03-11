import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-patriot-navy text-white border-t-4 border-patriot-red pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 text-center md:text-left">
          
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="font-heading text-3xl font-bold tracking-wider mb-2 text-white hover:text-gray-200 transition-colors">
              ★ PATRIOT STUFF
            </Link>
            <p className="font-body text-patriot-gold font-semibold uppercase tracking-widest text-sm">
              American Made. Patriot Proud.
            </p>
          </div>

          {/* Center: Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading text-lg font-bold uppercase mb-4 text-gray-300">Quick Links</h4>
            <nav className="flex flex-col space-y-2 font-body font-semibold">
              <Link href="#" className="hover:text-patriot-red transition-colors">Home</Link>
              <Link href="#" className="hover:text-patriot-red transition-colors">Shop</Link>
              <Link href="#" className="hover:text-patriot-red transition-colors">Blog</Link>
              <Link href="#" className="hover:text-patriot-red transition-colors">About</Link>
              <Link href="#" className="hover:text-patriot-red transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Right: Social */}
          <div className="flex flex-col items-center md:items-end">
             <h4 className="font-heading text-lg font-bold uppercase mb-4 text-gray-300">Follow Us</h4>
            <div className="flex space-x-4 font-body font-semibold">
              <Link href="#" className="hover:text-patriot-gold transition-colors">X (Twitter)</Link>
              <Link href="#" className="hover:text-patriot-gold transition-colors">Pinterest</Link>
              <Link href="#" className="hover:text-patriot-gold transition-colors">Truth Social</Link>
              <Link href="#" className="hover:text-patriot-gold transition-colors">Facebook</Link>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8 mt-8 flex flex-col items-center text-center">
          <p className="font-body text-sm text-gray-400 mb-4">
            © {new Date().getFullYear()} Patriot-Stuff.com  |  support@patriot-stuff.com  |  All Rights Reserved
          </p>
          <p className="font-body text-[10px] text-gray-500 max-w-2xl leading-relaxed">
            This site contains affiliate links. We may earn a commission on qualifying purchases at no extra cost to you.
          </p>
        </div>

      </div>
    </footer>
  );
}
