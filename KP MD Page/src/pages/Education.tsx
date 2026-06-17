import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-[0.18em] text-accent mb-3">Education</p>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">Teaching & training.</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Resident and student teaching grounded in real cases — formulation, communication, and the unwritten rules of consult work.
          </p>
        </section>

        {/* Teaching Philosophy */}
        <section className="mb-20 border-t border-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
            <div className="group md:col-span-8 bg-card border border-border p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
              <h2 className="text-2xl lg:text-3xl tracking-tight mb-6">Teaching Philosophy</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  I teach residents and medical students in consultation and emergency settings, where formulation,
                  communication, and humility under uncertainty matter as much as the differential.
                </p>
                <p>
                  The aim: a framework for thinking about complex cases — and the confidence to say what trainees
                  actually see, even when the chart says something different.
                </p>
              </div>
            </div>
            <div className="group md:col-span-4 bg-card border border-border p-8 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
              <h2 className="text-xl tracking-tight mb-5">Focus Areas</h2>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li>– Consultation psychiatry & formulation</li>
                <li>– Emergency psychiatry & risk assessment</li>
                <li>– Medical complexity & systems thinking</li>
                <li>– Professional identity development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* House System */}
        <section className="mb-20 border-t border-border pt-12">
          <div className="group bg-card border border-border p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
            <p className="text-xs uppercase tracking-[0.18em] text-accent mb-3">Program Building</p>
            <h2 className="text-2xl lg:text-3xl tracking-tight mb-6">Psychiatry House System</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                At University Hospitals / Case Western Reserve University, I designed and launched the psychiatry
                residency&rsquo;s first House System — a professional-identity framework built around foundational
                career interests: wellness, advocacy, scholarship, and leadership.
              </p>
              <p>
                Rather than a standard personality test, intake uses an immersive, quiz-inspired sorting experience
                that feels playful and innovative. The result is cross-cohort community, peer-to-peer mentorship,
                and coaching relationships that persist across training years.
              </p>
              <p>
                The houses provide a systemic structure for grouping residents and anchor events, collaborations,
                and professional development throughout the academic year.
              </p>
            </div>
            <a
              href="https://form.typeform.com/to/T1YPwWoA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-accent hover:underline mt-6"
            >
              Explore the House System intake
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Typeform Embed */}
        <section className="mb-12 border-t border-border pt-12">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border bg-card" style={{ height: '600px' }}>
              <iframe
                src="https://form.typeform.com/to/T1YPwWoA"
                title="Contact Form"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="camera; microphone; autoplay; encrypted-media;"
              />
            </div>
            <div className="text-center mt-10">
              <p className="text-xs uppercase tracking-[0.18em] text-accent mb-2">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl tracking-tight">Interested in collaboration?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mt-3">
                Open to teaching, speaking, and advisory engagements.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Education;
