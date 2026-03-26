import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const socials = [
  {
    platform: "Facebook",
    handle: "@patriotstuffofficial",
    description: "Daily patriotic content, product drops, and community discussion. Join thousands of like-minded Americans.",
    url: "https://www.facebook.com/patriotstuffofficial",
    icon: "f",
    color: "bg-[#1877F2]",
  },
  {
    platform: "Instagram",
    handle: "@patriotstuffofficial",
    description: "Behind-the-scenes, new design previews, and the best patriotic moments. Follow for daily inspiration.",
    url: "https://www.instagram.com/patriotstuffofficial",
    icon: "IG",
    color: "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]",
  },
  {
    platform: "TikTok",
    handle: "@patriotstuffofficial",
    description: "Short-form patriotic content, product reveals, and American history clips. Follow for the algorithm boost.",
    url: "https://www.tiktok.com/@patriotstuffofficial",
    icon: "TT",
    color: "bg-[#010101]",
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen flex flex-col bg-ps-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-ps-gold font-headline font-black text-xs tracking-[0.25em] uppercase mb-6 block">
            THE PATRIOT INNER CIRCLE
          </span>
          <h1 className="font-headline font-black text-5xl md:text-7xl text-white uppercase tracking-tight leading-[0.9] mb-6">
            JOIN THE<br />
            <span className="text-ps-red">COMMUNITY.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Follow us across every platform. Get first access to new designs, coffee drops, free downloads, and real talk from real Americans.
          </p>
        </div>
      </section>

      {/* Social Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {socials.map((social) => (
            <div key={social.platform} className="bg-ps-container p-10 flex flex-col gap-6 hover:bg-ps-container-hi transition-colors group">
              {/* Icon */}
              <div className={`w-14 h-14 ${social.color} flex items-center justify-center font-headline font-black text-white text-lg`}>
                {social.icon}
              </div>

              <div className="flex-grow">
                <h2 className="font-headline font-black text-2xl text-white uppercase tracking-tight mb-1">
                  {social.platform}
                </h2>
                <p className="text-ps-gold font-headline font-bold text-xs tracking-widest uppercase mb-4">
                  {social.handle}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  {social.description}
                </p>
              </div>

              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ps-red hover:bg-ps-red/80 text-white font-headline font-black text-sm uppercase tracking-widest px-6 py-3 transition-all active:scale-95"
              >
                FOLLOW →
              </Link>
            </div>
          ))}
        </div>

        {/* Email CTA */}
        <div className="max-w-5xl mx-auto mt-px bg-ps-container-hi p-12 text-center">
          <span className="text-ps-gold font-headline font-black text-xs tracking-[0.25em] uppercase mb-4 block">
            MOST IMPORTANT
          </span>
          <h3 className="font-headline font-black text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
            JOIN THE EMAIL LIST.
          </h3>
          <p className="text-white/50 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Social platforms come and go. Your email list is the one thing no algorithm can take from you. Sign up and get free downloads instantly.
          </p>
          <Link
            href="/#signup"
            className="inline-block bg-ps-red hover:bg-ps-red/80 text-white font-headline font-black text-base px-10 py-4 uppercase tracking-tight transition-all active:scale-95"
          >
            GET FREE DOWNLOADS →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
