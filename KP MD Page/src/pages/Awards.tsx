import Header from "@/components/Header";

const Awards = () => {
  const awards = [
    {
      year: "2026",
      title: "Psychiatry Resident Research Award",
      organization: "Case Western Reserve University / University Hospitals Cleveland Medical Center",
      detail: "Received the 2026 Psychiatry Residency Research Award grounded in the UH/CWRU core value Discovery.",
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12 border-b border-border pb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-accent mb-4">Recognition</p>
          <h1 className="text-4xl md:text-6xl tracking-tight leading-[1.05] mb-6">
            Recent Awards
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Honors and presentations from academic, clinical, and professional communities.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, i) => (
            <div
              key={i}
              className="group bg-card border border-border p-8 rounded-2xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-1"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-accent">{award.year}</span>
              <h3 className="text-xl tracking-tight mt-4 mb-3">{award.title}</h3>
              {award.organization && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {award.organization}
                </p>
              )}
              {award.detail && (
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {award.detail}
                </p>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Awards;
