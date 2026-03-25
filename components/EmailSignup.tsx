"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const website = formData.get("website");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="signup" className="py-24 bg-ps-container-lo border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <span className="inline-block bg-ps-red text-white font-headline font-black text-xs tracking-[0.25em] uppercase px-4 py-1.5 mb-8">
            MISSION: GET INFORMED
          </span>

          <h2 className="font-headline font-black text-5xl md:text-7xl text-white uppercase tracking-tight leading-[0.9] mb-6">
            JOIN THE<br />
            <span className="text-ps-gold">INNER CIRCLE.</span>
          </h2>

          <p className="text-white/60 text-lg font-medium max-w-xl mx-auto mb-12 leading-relaxed">
            Free downloads, new gear alerts, patriot intel, and exclusive drops — straight to your inbox. No spam. Unsubscribe anytime.
          </p>

          {/* What you get */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              "📋 Patriot Starter Pack",
              "🎒 Bug-Out Checklist",
              "⚖️ Know Your Rights Card",
              "📜 Declaration Poster",
            ].map((item) => (
              <span key={item} className="text-white/50 text-sm font-headline font-bold uppercase tracking-wider flex items-center gap-2">
                {item}
              </span>
            ))}
          </div>

          {/* Form */}
          {status === "success" ? (
            <div className="bg-ps-container border border-white/10 p-10">
              <p className="font-headline font-black text-4xl text-white uppercase tracking-tight mb-2">
                YOU&apos;RE IN, PATRIOT.
              </p>
              <p className="text-ps-gold font-headline font-bold text-sm uppercase tracking-[0.2em]">
                Check your inbox for your free downloads.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto">
              {/* Honeypot field */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL ADDRESS"
                className="flex-grow bg-ps-container border border-white/10 border-r-0 px-6 py-5 text-white font-headline font-bold text-sm uppercase tracking-widest placeholder-white/20 outline-none focus:border-ps-red transition-colors"
                disabled={status === "loading"}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-ps-red hover:bg-ps-red/80 text-white font-headline font-black text-sm uppercase tracking-widest px-8 py-5 transition-all active:scale-95 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed border border-ps-red"
              >
                {status === "loading" ? "LOADING..." : "GET ACCESS →"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm font-headline font-bold text-ps-red uppercase tracking-wider">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="text-white/20 text-xs uppercase tracking-widest mt-8 font-medium">
            No spam. No BS. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
