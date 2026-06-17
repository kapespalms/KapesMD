import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Speaking = () => {
  const engagements = [
    {
      institution: "American Association For Emergency Psychiatry",
      meta: "2025 – Podium Speaker",
      title: "But They're a Doctor: When Professional Status Delays Psychiatric Care",
      color: "text-speaking-navy",
      metaColor: "text-speaking-navy/70",
    },
    {
      institution: "Academy of Consultation-Liaison Psychiatry",
      meta: "2025 – Poster",
      title: "The TPO Trap: Autoimmune Mania",
      color: "text-speaking-green",
      metaColor: "text-speaking-green/70",
    },
    {
      institution: (
        <>
          American <span className="text-speaking-blue">Psychiatric</span> Association
        </>
      ),
      meta: "2026 – Workshop Lead",
      title: "Reimagining Psychiatry's Career Ladder: Lessons from Big 4 Consulting",
      color: "text-speaking-navy",
      metaColor: "text-speaking-navy/70",
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero */}
        <section className="mb-12 md:mb-16 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.18em] text-accent mb-4">
            Speaking
          </p>
          <h1 className="text-4xl md:text-6xl tracking-tight leading-[1.05] mb-6">
            Talks, panels, and engagements
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Presentations that reached national psychiatry conferences. Topics include&nbsp;clinical, systems, and the future of physician careers.&nbsp;
          </p>
        </section>

        {/* Main card — mirrors the Work page Speaking card */}
        <section className="rounded-2xl bg-muted p-6 md:p-8 flex flex-col gap-6 card-hover group">
          <p className="text-xs uppercase tracking-[0.18em] text-accent">2025 – 2026</p>
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-4 flex-1">
            {engagements.map((item, i) => (
              <div key={i} className="flex-1">
                <p className={`text-base font-semibold tracking-tight leading-snug ${item.color}`}>
                  {item.institution}
                </p>
                <p className={`text-xs uppercase tracking-[0.14em] mt-2 ${item.metaColor}`}>
                  {item.meta}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* CTA */}
        <section className="mt-20 md:mt-28 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="h-px w-12 bg-accent mx-auto" />
            <h2 className="text-3xl md:text-4xl tracking-tight">Invite Kristen to speak</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Available for keynotes, panels, workshops, and advisory engagements.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Speaking;
