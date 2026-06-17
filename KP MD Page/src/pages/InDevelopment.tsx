import Header from "@/components/Header";
import { Link } from "react-router-dom";
import fiscmakHeroAsset from "@/assets/fiscmak-hero.png.asset.json";

const fiscmakHero = fiscmakHeroAsset.url;

const InDevelopment = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <p className="text-xs uppercase tracking-[0.18em] text-accent mb-6">Physician Career Infrastructure</p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="md:col-span-5">
              <img src={fiscmakHero} alt="FISCMAK" className="w-full max-w-[14rem] rounded-lg" />
            </div>
            <div className="md:col-span-7">
              <h1 className="text-4xl md:text-5xl tracking-tight mb-5 font-semibold">FISCMAK</h1>
              <p className="text-lg md:text-xl text-foreground leading-snug">
                Career architecture for physicians — the structured ladders, sponsorship, and longitudinal development of modern professional firms, rebuilt for medicine.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 border-t border-border pt-12 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          <div className="md:col-span-8 bg-card border border-border p-8 lg:p-10 rounded-2xl">
            <h2 className="text-2xl lg:text-3xl tracking-tight mb-6">The Thesis</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Medicine has no real career infrastructure. Trainees navigate transitions, mentorship, and career design on hand-me-down advice and luck. FISCMAK names the work medicine fails to capture and gives it a structure that holds across training, the attending years, and the inflection points in between.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 bg-card border border-border p-8 rounded-2xl">
            <h2 className="text-xl tracking-tight mb-5">Areas</h2>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>– Career lattice &amp; ladder design</li>
              <li>– Mentorship &amp; sponsorship</li>
              <li>– Workforce strategy</li>
              <li>– Transitions: residency → attending</li>
            </ul>
          </div>
        </section>

        <section className="mb-20 border-t border-border pt-12">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
            The Career Lattice · Five Mutually Exclusive Domains
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { letter: "A", title: "Direct Clinical Care", color: "text-[#c0392b]" },
              { letter: "B", title: "Education & Development", color: "text-[#b88a2e]" },
              { letter: "C", title: "Organizational Leadership", color: "text-[#1f6b6f]" },
              { letter: "D", title: "Improvement & Systems", color: "text-[#2b5a8a]" },
              { letter: "E", title: "Research & Scholarship", color: "text-[#4a7c3a]" },
            ].map((d) => (
              <div key={d.letter} className="rounded-2xl bg-muted p-5 min-h-[140px] flex flex-col">
                <span className={`text-xs font-bold tracking-[0.18em] mb-3 ${d.color}`}>{d.letter}</span>
                <h3 className="text-base md:text-lg font-semibold tracking-tight leading-snug text-foreground">
                  {d.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm font-semibold">In active development</p>
            <p className="text-sm text-muted-foreground md:flex-1 md:px-6">
              Open to program pilots, collaboration, and workforce-design advising.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InDevelopment;