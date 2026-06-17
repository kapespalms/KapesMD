const IntroSection = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 md:py-24 px-4 animate-fade-in">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
        <div className="space-y-4 animate-slide-up">
          <div className="h-px w-12 bg-accent" />
          <h2 className="text-2xl md:text-3xl leading-tight tracking-tight">
            Clinical practice
          </h2>
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
            High-acuity consultation psychiatry
          </p>
        </div>
        <div className="space-y-6 animate-slide-up stagger-1">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            My clinical work is grounded in high-acuity consultation psychiatry — emergency and hospital-based settings where diagnostic clarity, collateral, systems coordination, and risk formulation have to happen quickly.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I take a direct, practical, and systems-minded approach: not only diagnosis and disposition, but the broader context — medical complexity, trauma, capacity, family dynamics, institutional pressures, and the gaps between what is documented and what is actually happening.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
