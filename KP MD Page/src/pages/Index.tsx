import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BrandMark from "@/components/BrandMark";

import kristenPortraitAsset from "@/assets/kristen-palmer.png.asset.json";
import fiscmakHeroAsset from "@/assets/fiscmak-hero.png.asset.json";
import psychdispoScreenshotAsset from "@/assets/psychdispo-screenshot.png.asset.json";

const kristenPortrait = kristenPortraitAsset.url;
import mentorshipScreenshotAsset from "@/assets/mentorship-screenshot.png.asset.json";
const mentorshipScreenshot = mentorshipScreenshotAsset.url;
const fiscmakHero = fiscmakHeroAsset.url;
const psychdispoScreenshot = psychdispoScreenshotAsset.url;

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Selected Work — Bento Grid Hero */}
        <section id="work" className="py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-5">
            {/* Hero card — portrait + name + bio */}
            <div className="col-span-1 md:col-span-4 md:col-start-1 md:row-span-2 md:row-start-1 rounded-2xl bg-card overflow-hidden card-hover group">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 min-h-[280px] md:min-h-0 bg-muted flex items-start justify-center overflow-hidden">
                  <img
                    src={kristenPortrait}
                    alt="Kristen Palmer, MD"
                    className="w-full object-contain"
                  />
                </div>
                <div className="md:col-span-7 p-6 flex flex-col justify-center space-y-5 animate-slide-up">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-accent font-medium">
                    <span className="h-px w-8 bg-accent" />
                    Clinician-Innovator
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.02]">
                    Kristen Palmer, <span className="italic text-accent">MD</span>
                  </h1>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    <span>Psychiatry</span>
                    <span>Consultation-Liaison</span>
                    <span>Emergency</span>
                    <span>Medical Education</span>
                    <span>Workforce Strategy</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 md:pt-0 space-y-5 animate-slide-up">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  A psychiatrist working at the seam between clinical stories and institutional
                  systems — high-acuity practice, teaching, and the redesign of how care actually gets delivered.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity w-full"
                  >
                    Read the bio
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity w-full"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column — FISCMAK */}
            <Link to="/in-development" className="col-span-1 md:col-span-2 md:col-start-5 md:row-start-1 md:row-span-2 rounded-2xl bg-card overflow-hidden card-hover group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center p-4">
                <img
                  src={fiscmakHero}
                  alt="FISCMAK"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.18em] text-accent mb-2">In Development · Platform</p>
                <h3 className="text-lg tracking-tight group-hover:text-accent transition-colors mb-2">
                  FISCMAK
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A physician career infrastructure platform — borrowing from the playbook of modern professional firms to build durable career architecture for physicians.
                </p>
              </div>
            </Link>

            {/* Bottom row — left side */}
            <Link to="/speaking" className="col-span-1 md:col-span-4 md:col-start-1 md:row-start-3 rounded-2xl bg-muted p-6 flex flex-col card-hover group gap-4">
              <p className="text-xs uppercase tracking-[0.18em] text-accent">Speaking</p>
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-4">
                <div className="flex-1">
                  <p className="text-base font-semibold tracking-tight text-[#0B1F3A]">American</p>
                  <p className="text-base font-semibold tracking-tight text-[#0B1F3A]">Association</p>
                  <p className="text-base font-semibold tracking-tight text-[#0B1F3A]">For Emergency</p>
                  <p className="text-base font-semibold tracking-tight text-[#0B1F3A]">Psychiatry</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#0B1F3A]/70 mt-2">2025 – Podium Speaker</p>
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold tracking-tight text-[#4A7C3A]">Academy of</p>
                  <p className="text-base font-semibold tracking-tight text-[#4A7C3A]">Consultation-Liaison</p>
                  <p className="text-base font-semibold tracking-tight text-[#4A7C3A]">Psychiatry</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#4A7C3A]/70 mt-2">2025 – Poster</p>
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold tracking-tight text-[#0B1F3A]">American</p>
                  <p className="text-base font-semibold tracking-tight text-[#2B5A8A]">Psychiatric</p>
                  <p className="text-base font-semibold tracking-tight text-[#0B1F3A]">Association</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#0B1F3A]/70 mt-2">2026 – Workshop Lead</p>
                </div>
              </div>
              <h3 className="text-lg md:text-xl tracking-tight mt-auto group-hover:text-accent transition-colors">
                Talks, panels, and engagements
              </h3>
            </Link>

            <Link to="/awards" className="col-span-1 md:col-span-2 md:col-start-5 md:row-start-3 rounded-2xl bg-card p-6 flex flex-col justify-between card-hover group">
              <p className="text-xs uppercase tracking-[0.18em] text-accent">Awards</p>
              <div className="flex-1 flex flex-col justify-center gap-2">
                <h3 className="text-lg md:text-xl tracking-tight group-hover:text-accent transition-colors">
                  Awards &amp; Recognition
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Resident Research Award, 2026<br/>
                  University Hospitals / CWRU<br/>
                  Psychiatry Department
                </p>
              </div>
            </Link>

            <Link to="/systems" className="col-span-1 md:col-span-3 md:col-start-1 md:row-start-4 rounded-2xl bg-card overflow-hidden card-hover group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center p-6">
                <img
                  src={psychdispoScreenshot}
                  alt="PsychDispo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.18em] text-accent mb-2">Systems · Clinical tool</p>
                <h3 className="text-lg tracking-tight group-hover:text-accent transition-colors mb-2">
                  PsychDispo
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Evidence-based psychiatric disposition and resource navigation — built for the realities of emergency and consult work.
                </p>
              </div>
            </Link>

            <Link to="/education" className="col-span-1 md:col-span-3 md:col-start-4 md:row-start-4 rounded-2xl bg-card overflow-hidden card-hover group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center p-6">
                <img
                  src={mentorshipScreenshot}
                  alt="House System"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.18em] text-accent mb-2">Program · Mentorship</p>
                <h3 className="text-lg tracking-tight group-hover:text-accent transition-colors mb-2">
                  House System
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The UH Adult Psychiatry Residency's first longitudinal mentorship and belonging structure, built on a Hero's Story framework.
                </p>
              </div>
            </Link>
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

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-3">
              <Link to="/" className="flex items-center gap-2">
                <BrandMark className="w-7 h-7" />
                <span className="text-base font-semibold tracking-tight">Kristen Palmer, MD</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Where clinical stories and institutional systems meet.
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Navigate</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
                <li><Link to="/work" className="hover:text-accent transition-colors">Portfolio</Link></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Elsewhere</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.linkedin.com/in/kristen-palmer-8865b630b" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:kristenpalmermd@gmail.com" className="hover:text-accent transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-sm text-muted-foreground">
            <p>© 2026 Kristen Palmer, MD</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
