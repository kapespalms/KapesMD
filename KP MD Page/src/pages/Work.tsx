import Header from "@/components/Header";
import { Link } from "react-router-dom";
import fiscmakHeroAsset from "@/assets/fiscmak-hero.png.asset.json";
import psychdispoScreenshotAsset from "@/assets/psychdispo-screenshot.png.asset.json";
import mentorshipScreenshotAsset from "@/assets/mentorship-screenshot.png.asset.json";

const fiscmakHero = fiscmakHeroAsset.url;
const psychdispoScreenshot = psychdispoScreenshotAsset.url;
const mentorshipScreenshot = mentorshipScreenshotAsset.url;

const Work = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-accent mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">Selected work.</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Platforms, clinical tools, programs, and engagements — where clinical stories and institutional systems meet.
          </p>
        </header>

        {/* Magazine layout — featured + grid */}
        <section className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(220px,auto)] gap-5">
          {/* Featured: FISCMAK */}
          <Link
            to="/in-development"
            className="col-span-1 md:col-span-4 md:row-span-2 rounded-2xl bg-card overflow-hidden card-hover group flex flex-col"
          >
            <div className="aspect-[16/10] overflow-hidden bg-muted flex items-center justify-center p-8">
              <img
                src={fiscmakHero}
                alt="FISCMAK"
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-xs uppercase tracking-[0.18em] text-accent mb-3">In Development · Platform</p>
              <h2 className="text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-accent transition-colors">
                FISCMAK
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                A physician career infrastructure platform — borrowing from the playbook of modern professional firms to build durable career architecture for physicians.
              </p>
            </div>
          </Link>

          {/* Right column: PsychDispo */}
          <Link
            to="/systems"
            className="col-span-1 md:col-span-2 rounded-2xl bg-card overflow-hidden card-hover group flex flex-col"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center p-5">
              <img
                src={psychdispoScreenshot}
                alt="PsychDispo"
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <p className="text-xs uppercase tracking-[0.18em] text-accent mb-2">Systems · Clinical tool</p>
              <h2 className="text-lg tracking-tight mb-2 group-hover:text-accent transition-colors">PsychDispo</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Evidence-based psychiatric disposition and resource navigation — built for the realities of emergency and consult work.
              </p>
            </div>
          </Link>

          {/* Right column: House System */}
          <Link
            to="/education"
            className="col-span-1 md:col-span-2 rounded-2xl bg-card overflow-hidden card-hover group flex flex-col"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center p-5">
              <img
                src={mentorshipScreenshot}
                alt="House System"
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <p className="text-xs uppercase tracking-[0.18em] text-accent mb-2">Program · Mentorship</p>
              <h2 className="text-lg tracking-tight mb-2 group-hover:text-accent transition-colors">House System</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The UH Adult Psychiatry Residency's first longitudinal mentorship and belonging structure, built on a Hero's Story framework.
              </p>
            </div>
          </Link>

          {/* Bottom wide: Speaking */}
          <Link
            to="/speaking"
            className="col-span-1 md:col-span-4 rounded-2xl bg-muted p-6 flex flex-col card-hover group gap-4"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Speaking</p>
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-4 flex-1">
              <div className="flex-1">
                <p className="text-base font-semibold tracking-tight text-speaking-navy">American Association For Emergency Psychiatry</p>
                <p className="text-xs uppercase tracking-[0.14em] text-speaking-navy/70 mt-2">2025 – Podium Speaker</p>
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold tracking-tight text-speaking-green">Academy of Consultation-Liaison Psychiatry</p>
                <p className="text-xs uppercase tracking-[0.14em] text-speaking-green/70 mt-2">2025 – Poster</p>
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold tracking-tight text-speaking-navy">American <span className="text-speaking-blue">Psychiatric</span> Association</p>
                <p className="text-xs uppercase tracking-[0.14em] text-speaking-navy/70 mt-2">2026 – Workshop Lead</p>
              </div>
            </div>
            <h3 className="text-lg md:text-xl tracking-tight mt-auto group-hover:text-accent transition-colors">
              Talks, panels, and engagements
            </h3>
          </Link>

          {/* Bottom right: Awards */}
          <Link
            to="/awards"
            className="col-span-1 md:col-span-2 rounded-2xl bg-card p-6 flex flex-col justify-between card-hover group"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Awards</p>
            <div className="flex-1 flex flex-col justify-center gap-2">
              <h3 className="text-lg md:text-xl tracking-tight group-hover:text-accent transition-colors">
                Awards &amp; Recognition
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Resident Research Award, 2026<br />
                University Hospitals / CWRU<br />
                Psychiatry Department
              </p>
            </div>
          </Link>
        </section>

        <div className="mt-16 rounded-2xl bg-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-lg">
            <h2 className="text-2xl tracking-tight mb-2">Working together</h2>
            <p className="text-muted-foreground">
              Open to consulting, advisory, speaking, and teaching engagements at the intersection of clinical care and systems design.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </Link>
        </div>

        {/* Training, Appointments & Education Timeline */}
        <section className="mt-20 border-t border-border pt-12">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">Training, Appointments &amp; Education</h2>

          <div className="relative overflow-x-auto pb-6 -mx-4 px-4">
            <div className="relative min-w-[860px]">
              <div className="absolute left-0 right-0 top-[88px] h-px bg-border"></div>

              <ol className="relative grid grid-cols-5 gap-6">
                {[
                  {
                    date: "2016",
                    org: "The Ohio State University",
                    detail: "B.S., Biology; Minor, History of Art",
                  },
                  {
                    date: "2018",
                    org: "Cleveland State University",
                    detail: "B.S., Health Science — NEOMED–CSU Urban Health Partnership",
                  },
                  {
                    date: "2022",
                    org: "Northeast Ohio Medical University",
                    detail: "Doctor of Medicine — Urban Health Pathway",
                  },
                  {
                    date: "2022–2026",
                    org: "University Hospitals Cleveland Medical Center / CWRU",
                    detail: "Adult Psychiatry Resident (PGY-1–4)",
                  },
                  {
                    date: "Fall 2026",
                    org: "OhioHealth Riverside Methodist Hospital — Columbus, OH",
                    detail: "Consultation-Liaison & Emergency Psychiatrist (Attending, incoming)",
                  },
                ].map((item, i) => (
                  <li key={i} className="relative flex flex-col">
                    <div className="h-[64px] flex items-start">
                      <span className="text-xs uppercase tracking-[0.18em] text-accent">{item.date}</span>
                    </div>
                    <div className="relative flex justify-center h-12">
                      <span className="w-3 h-3 rounded-full bg-accent ring-4 ring-background mt-[18px]"></span>
                    </div>
                    <div className="pt-2">
                      <p className="text-foreground text-sm leading-snug mb-2">{item.org}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Scholarship & Presentations */}
        <section className="mt-20 border-t border-border pt-12">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">Scholarship &amp; Presentations</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
            <div className="group md:col-span-7 bg-card border border-border p-8 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
              <span className="text-xs uppercase tracking-[0.18em] text-accent">May 2026</span>
              <h3 className="text-lg tracking-tight mt-3 mb-2">&ldquo;Reimagining Psychiatry&rsquo;s Career Ladder: Lessons from Big 4 Consulting&rdquo;</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Workshop (Chair) — APA Annual Meeting, San Francisco, CA · Palmer K (Chair), Wobbe H, Phillips D, Giakas S</p>
            </div>
            <div className="group md:col-span-5 bg-card border border-border p-8 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
              <span className="text-xs uppercase tracking-[0.18em] text-accent">Dec 2025</span>
              <h3 className="text-lg tracking-tight mt-3 mb-2">&ldquo;But They&rsquo;re a Doctor: When Professional Status Delays Psychiatric Care&rdquo;</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Oral — AAEP NUBE Conference, New Orleans, LA</p>
            </div>
            <div className="group md:col-span-5 bg-card border border-border p-8 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
              <span className="text-xs uppercase tracking-[0.18em] text-accent">Nov 2025</span>
              <h3 className="text-lg tracking-tight mt-3 mb-2">&ldquo;The TPO Trap: Autoimmune Mania&rdquo;</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Poster — ACLP Annual Meeting, San Antonio, TX</p>
            </div>
            <div className="group md:col-span-7 bg-card border border-border p-8 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
              <span className="text-xs uppercase tracking-[0.18em] text-accent">2025</span>
              <h3 className="text-lg tracking-tight mt-3 mb-3">AAEP Educational Activities</h3>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li>– Invited lecture: &ldquo;Recognizing Catatonia in the ED&rdquo; — multidisciplinary ED audience</li>
                <li>– Journal club lead: ED presentations of catatonia, Luccarelli et al.</li>
              </ul>
            </div>
            <div className="group md:col-span-12 bg-card border border-border p-8 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
              <span className="text-xs uppercase tracking-[0.18em] text-accent">2023</span>
              <h3 className="text-lg tracking-tight mt-3 mb-2">Publication</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Palmer KN. &ldquo;Euphoria: A Review.&rdquo; <em>Insight Matters</em>, Ohio Psychiatric Physicians Association</p>
            </div>
          </div>
        </section>

        {/* Leadership & Program Building */}
        <section className="mt-20 border-t border-border pt-12">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">Leadership &amp; Program Building</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
            <div className="group md:col-span-6 bg-card border border-border p-8 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
              <span className="text-xs uppercase tracking-[0.18em] text-accent">2025–2026</span>
              <h3 className="text-lg tracking-tight mt-3 mb-2">Head of Mentorship, UH Adult Psychiatry Residency</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Created the residency&rsquo;s first House System and a professional-identity development curriculum.</p>
            </div>
            <div className="group md:col-span-6 bg-card border border-border p-8 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
              <span className="text-xs uppercase tracking-[0.18em] text-accent">2023–2026</span>
              <h3 className="text-lg tracking-tight mt-3 mb-2">Chair of Recruitment, UH Adult Psychiatry Residency</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Conceived and relaunched the residency&rsquo;s in-person Second Look and created its first &ldquo;Meet the Program&rdquo; virtual series; reviewed and interviewed 200+ applicants.</p>
            </div>
          </div>
        </section>

        {/* Contact strip */}
        <section id="contact" className="my-12 md:my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="h-px w-12 bg-accent mx-auto" />
            <h2 className="text-4xl md:text-5xl tracking-tight">Get in touch.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For collaborations, mentorship, speaking, and consulting inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="mailto:kristen.palmer.md@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Contact
              </a>
              <a
                href="https://www.linkedin.com/in/kristen-palmer-8865b630b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;