
import kristenPhoto from "@/assets/kristen-palmer.png.asset.json";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
          <img
            src={kristenPhoto.url}
            alt="Kristen Palmer, MD"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-accent font-medium animate-slide-down">
              <span className="h-px w-8 bg-accent" />
              Psychiatrist · Clinician-Innovator
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.05] tracking-tight animate-slide-down">
              Kristen Palmer, MD
            </h1>
            <p className="text-foreground/85 text-xl md:text-2xl leading-snug max-w-xl animate-slide-up stagger-1">
              Psychiatrist and clinician-innovator working where clinical stories and institutional systems meet.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl animate-slide-up stagger-2">
              Consultation-liaison and emergency psychiatry, medical education, and physician workforce strategy — with a focus on making invisible work visible and building systems that help people navigate care, careers, and institutions more clearly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-2 animate-slide-up stagger-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-4 text-base font-medium transition-all hover:scale-105 w-full sm:w-auto"
            >
              Get in touch
            </a>
            <a
              href="#articles"
              className="inline-flex items-center justify-center text-foreground/80 hover:text-accent text-base font-medium transition-colors"
            >
              Read recent writing →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
