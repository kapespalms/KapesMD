import Header from "@/components/Header";
import kristenPortraitAsset from "@/assets/kristen-palmer.png.asset.json";
const kristenPortrait = kristenPortraitAsset.url;

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lead */}
        <section className="mb-20 grid md:grid-cols-5 gap-10 items-end">
          <div className="md:col-span-3 space-y-5">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">About</p>
            <h1 className="text-4xl md:text-6xl tracking-tight leading-[1.05]">
              Kristen Palmer, MD
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Psychiatrist and clinician-innovator working where clinical care, workforce design, and institutional systems meet.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-end">
            <div className="w-2/3 aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img src={kristenPortrait} alt="Kristen Palmer, MD" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Narrative Focus — Bento */}
        <section className="mb-20 border-t border-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
            {/* Practice */}
            <div className="group md:col-span-8 bg-card border border-border p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl tracking-tight mb-6">About</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl whitespace-pre-wrap">
                  <p>
                    I did not enter medicine through a straight line. As a first-generation college student, navigating higher education took curiosity, resilience, and courage. Each milestone enriched my sense of what it means to serve and care for others — a vantage point no medical school classroom or rotation could provide. It was built instead from lived experience: early childhood education, non-clinical patient care, healthcare administration, allied health, academic research, and the federally funded systems holding our underserved communities together.
                  </p>
                  <p>
                    That path shaped how I practice. I learned to value the people closest to the work, to notice what systems miss, and to look beyond the official record to understand what is actually happening. Taken together, they made psychiatry the natural choice — and the reason I practice at the intersection of clinical care and the systems that shape it.
                  </p>
                </div>
              </div>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs uppercase tracking-[0.18em] text-accent">MEET KRISTEN PALMER, MD</span>
              </div>
            </div>

            {/* Education & Teaching */}
            <div className="group md:col-span-4 bg-card border border-border p-8 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1 flex flex-col justify-between">
              <div className="h-12 w-12 rounded-full border border-accent/30 flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                <div className="w-2 h-2 bg-accent group-hover:bg-background rounded-full"></div>
              </div>
              <h2 className="text-2xl tracking-tight mb-4">Practice</h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  My clinical work is grounded in consultation-liaison and emergency psychiatry — hospital-based settings where diagnostic clarity, collateral, capacity, trauma, family dynamics, medical complexity, and risk formulation have to come together quickly.
                </p>
                <p>
                  My clinical passion has taken me into every corner of the hospital — every service, every workflow, every handoff. That vantage point sharpened how I see systems: not in the abstract, but in how care actually moves through an institution.
                </p>
              </div>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs uppercase tracking-[0.18em] text-accent">Consultation-Liaison &amp; Emergency Psychiatry</span>
              </div>
            </div>

            {/* Workforce & Systems */}
            <div className="group md:col-span-5 bg-card border border-border p-8 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full border border-accent/30 text-accent text-[10px] uppercase tracking-[0.18em]">FISCMAK: A SYSTEM IN PROGRESS</span>
              </div>
              <h2 className="text-2xl tracking-tight mb-4">Workforce &amp; Systems</h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Alongside clinical work, I focus on physician career and workforce strategy: development and evaluation of the physicians and the institutional design choices that shape care.
                </p>
                <p>
                  This work led me to develop&nbsp;FISCMAK, a physician career infrastructure platform for naming the work medicine often fails to capture — invisible labor, systems judgment, leadership, teaching, and longitudinal growth.
                </p>
              </div>
            </div>

            {/* Writing & Speaking */}
            <div className="group md:col-span-7 bg-card border border-border p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500"></div>
              <h2 className="text-3xl lg:text-4xl tracking-tight mb-6 relative">Writing &amp; Speaking</h2>
              <p className="text-muted-foreground leading-relaxed relative">
                I write and speak about emergency and consultation psychiatry, medical education, and the systems that decide what care gets delivered.&nbsp;
              </p>
              <div className="mt-8 relative">
                <div className="h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center opacity-40">
            <div className="h-12 w-px bg-gradient-to-b from-accent to-transparent mb-4"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Curriculum Vitae Below</span>
          </div>
        </section>

        {/* Training, Appointments & Education — Horizontal Timeline */}
        <section className="mb-20 border-t border-border pt-12">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">Training, Appointments &amp; Education</h2>

          <div className="relative overflow-x-auto pb-6 -mx-4 px-4">
            {/* Timeline rail */}
            <div className="relative min-w-[1200px]">
              <div className="absolute left-0 right-0 top-[88px] h-px bg-border"></div>

              <ol className="relative grid grid-cols-7 gap-6">
                {[
                  {
                    date: "2009",
                    org: "Bohecker College",
                    detail: "Certificate of Medical Assisting",
                  },
                  {
                    date: "2012",
                    org: "Columbus State Community College",
                    detail: "Associate of Science",
                  },
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




        {/* Healthcare Settings — card of hospitals */}
        <section className="mb-20 border-t border-border pt-12">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">Healthcare Settings I Know From the Inside</h2>
          <div className="group bg-card border border-border p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
            <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                I&rsquo;ve worked across outpatient clinics, emergency departments, Level I trauma settings, children&rsquo;s hospitals, VA systems, academic medical centers, community hospitals, state hospital care, correctional settings, street psychiatry, and behavioral health urgent care — first in support roles, and later as a physician.
              </p>
              <p>
                That range shapes how I understand care delivery: from the front desk to the consult service, from underserved outpatient care to inpatient psychiatry, from family medicine to emergency psychiatry, and from institutional constraints to the people quietly holding the system together.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm uppercase tracking-[0.18em] text-accent mb-4">Academic Medical Centers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">UH Cleveland Medical Center · MetroHealth · Cleveland Clinic Akron General · CWRU</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.18em] text-accent mb-4">Emergency &amp; Trauma Systems</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">OhioHealth Riverside · OhioHealth Grant · UH Emergency Psychiatry · Cleveland Clinic Akron General Emergency Medicine</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.18em] text-accent mb-4">Community &amp; Public Systems</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Northcoast Behavioral Healthcare · Summit County Jail · MetroHealth - Street Psychiatry · Portage Path PES · The Centers Behavioral Health Urgent Care · Coleman Health Services</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.18em] text-accent mb-4">Primary, Outpatient &amp; Research Settings</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Mount Carmel Primary Care · AIDS Healthcare Foundation · The Ohio State University - James Cancer Hospital</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership — Bento */}
        <section className="mb-20 border-t border-border pt-12">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">Program Building &amp; Physician Development</h2>
          <div className="group bg-card border border-border p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
            <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                My leadership work focuses on the hidden architecture of training: how residents are welcomed, mentored, supported, and helped to form a professional identity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm uppercase tracking-[0.18em] text-accent mb-4">Head of Mentorship</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Created the residency&rsquo;s first House System, a longitudinal mentorship and belonging structure aligned with a Hero&rsquo;s Story framework. The model used a custom House intake to help residents reflect on their values, strengths, challenges, interests, and growth across training.
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.18em] text-accent mb-4">Chair of Recruitment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Led candidate-facing strategy across multiple interview seasons, relaunched the in-person Second Look, created the program&rsquo;s first Meet the Program virtual series, and reviewed/interviewed more than 200 applicants.
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.18em] text-accent mb-4">Resident Representative to UH GME</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Brought frontline trainee perspective into institutional review conversations about program quality, learning environment, and resident experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition — wide rectangular card */}
        <section className="mb-20 border-t border-border pt-12">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-10">Recognition</h2>
          <div className="group bg-card border border-border p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-accent">2026</span>
                <h3 className="text-lg tracking-tight mt-3 mb-2">Psychiatry Resident Research Award</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Case Western Reserve University / University Hospitals Cleveland Medical Center</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-accent">2026</span>
                <h3 className="text-lg tracking-tight mt-3 mb-2">APA Annual Meeting Workshop Lead</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;Reimagining Psychiatry&rsquo;s Career Ladder: Lessons from Big 4 Consulting&rdquo;</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-accent">2025</span>
                <h3 className="text-lg tracking-tight mt-3 mb-2">AAEP NUBE Oral Presentation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;But They&rsquo;re a Doctor: When Professional Status Delays Psychiatric Care&rdquo;</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-accent">2025</span>
                <h3 className="text-lg tracking-tight mt-3 mb-2">ACLP Poster</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;The TPO Trap: Autoimmune Mania&rdquo;</p>
              </div>
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

export default About;
