import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ps-container-lo border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-headline font-black text-2xl tracking-tight text-white block mb-3">
              PATRIOT STUFF
            </Link>
            <p className="text-ps-gold font-headline font-bold text-xs tracking-[0.2em] uppercase mb-4">
              EST. 1776
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              Gear, coffee, and resources for Americans who never stopped believing in the mission.
            </p>
          </div>

          {/* Command — nav links */}
          <div>
            <h4 className="font-headline font-black text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
              COMMAND
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Shop Gear", href: "#shop" },
                { label: "Coffee", href: "#coffee" },
                { label: "Partners", href: "#partners" },
                { label: "Free Downloads", href: "#signup" },
                { label: "Community", href: "#signup" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-headline font-bold text-sm text-white/50 hover:text-white uppercase tracking-tight transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-headline font-black text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
              RESOURCES
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Affiliate Disclosure", href: "#" },
                { label: "Contact Us", href: "mailto:support@patriot-stuff.com" },
                { label: "Submit Your Brand", href: "#" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-headline font-bold text-sm text-white/50 hover:text-white uppercase tracking-tight transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Intel — social */}
          <div>
            <h4 className="font-headline font-black text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
              INTEL
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Facebook", href: "https://www.facebook.com/patriotstuffofficial" },
                { label: "Instagram", href: "https://www.instagram.com/patriotstuffofficial" },
                { label: "TikTok", href: "https://www.tiktok.com/@patriotstuffofficial" },
                { label: "X / Twitter", href: "#" },
                { label: "Truth Social", href: "#" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headline font-bold text-sm text-white/50 hover:text-ps-gold uppercase tracking-tight transition-colors"
                >
                  {social.label} →
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} Patriot-Stuff.com · All Rights Reserved
          </p>
          <p className="text-white/20 text-[10px] uppercase tracking-wider text-center md:text-right max-w-md leading-relaxed">
            This site contains affiliate links. We may earn a commission on qualifying purchases at no extra cost to you.
          </p>
        </div>

      </div>
    </footer>
  );
}
