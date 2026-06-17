import Header from "@/components/Header";
import { Mic, Briefcase, GraduationCap, Newspaper, Mail, Linkedin } from "lucide-react";

const cards = [
  {
    icon: Mic,
    title: "Speaking",
    blurb: "Talks, grand rounds, panels, and keynote sessions on consultation psychiatry, workforce, and systems design.",
    subject: "Speaking inquiry",
  },
  {
    icon: Briefcase,
    title: "Consulting & Advisory",
    blurb: "Workforce strategy, clinical operations, and program design — short engagements or ongoing advisory.",
    subject: "Consulting inquiry",
  },
  {
    icon: GraduationCap,
    title: "Mentorship & Teaching",
    blurb: "Residents, fellows, and early-career physicians navigating consultation or career transitions.",
    subject: "Mentorship",
  },
  {
    icon: Newspaper,
    title: "Media & Press",
    blurb: "Interviews and background on emergency psychiatry, hospital systems, and physician workforce issues.",
    subject: "Media inquiry",
  },
];

const EMAIL = "kristenpalmermd@gmail.com";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-accent mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">Get in touch.</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the path that fits — every inquiry comes straight to my inbox.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mb-16">
          {cards.map(({ icon: Icon, title, blurb, subject }) => (
            <a
              key={title}
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`}
              className="group rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-accent transition-colors flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="text-xl tracking-tight mb-2">{title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{blurb}</p>
              <span className="text-sm text-accent group-hover:underline">
                Contact about {title.toLowerCase()} →
              </span>
            </a>
          ))}
        </div>

        <div className="rounded-2xl bg-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Or reach me directly</p>
            <p className="text-2xl tracking-tight">{EMAIL}</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" /> Contact
            </a>
            <a
              href="https://www.linkedin.com/in/kristen-palmer-8865b630b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;