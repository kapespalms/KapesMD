import Header from "@/components/Header";
import { Link } from "react-router-dom";
import psychdispoLogo from "@/assets/psychdispo-logo.png.asset.json";

const Systems = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <p className="text-xs uppercase tracking-[0.18em] text-accent mb-3">Systems</p>
          <img src={psychdispoLogo.url} alt="PsychDispo" className="h-16 md:h-20 w-auto mb-4" />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Evidence-based psychiatric disposition and resource navigation — built for the realities of emergency and consult work.
          </p>
        </section>

        <section className="mb-16 border-t border-border pt-12 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          <div className="md:col-span-8 bg-card border border-border p-8 lg:p-10 rounded-2xl">
            <h2 className="text-2xl lg:text-3xl tracking-tight mb-6">The Problem</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Psychiatric disposition decisions in the ED are made under time pressure, with fragmented
                information and inconsistent access to community resources. The result: avoidable admissions,
                missed levels of care, and patients cycling back through the same doors.
              </p>
              <p>
                PsychDispo brings clinical evidence and local resource intelligence into one place — so the
                team can match the patient to the right next step, not just the available one.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 bg-card border border-border p-8 rounded-2xl">
            <h2 className="text-xl tracking-tight mb-5">Focus</h2>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>– Disposition decision support</li>
              <li>– Levels-of-care frameworks</li>
              <li>– Community resource navigation</li>
              <li>– ED &amp; consult workflows</li>
            </ul>
          </div>
        </section>

        <section className="mb-20 border-t border-border pt-12">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-8">Live App</h2>
          <div className="w-full rounded-2xl border border-border overflow-hidden bg-card" style={{ height: '75vh', minHeight: '500px' }}>
            <iframe
              src="https://psychdispo.com/dispo"
              title="PsychDispo Live App"
              className="w-full h-full"
              style={{ border: 0 }}
              allow="clipboard-write"
              loading="lazy"
            />
          </div>
        </section>

        <section className="mb-20 border-t border-border pt-12">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-8">Status</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            PsychDispo is in active development. Reach out if you work in emergency or consult psychiatry and
            want to pilot, contribute clinical content, or shape the resource layer for your region.
          </p>
          <div className="mt-8">
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

export default Systems;