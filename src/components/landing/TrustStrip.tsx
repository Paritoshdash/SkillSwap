const logos = [
  { name: "Luminous", icon: "✦" },
  { name: "Lightbox", icon: "◎" },
  { name: "FocalPoint", icon: "◉" },
  { name: "Polymath", icon: "⬡" },
  { name: "Alt+Shift", icon: "⌘" },
  { name: "Nietzsche", icon: "✧" },
];

export function TrustStrip() {
  return (
    <section className="bg-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">Trusted By</p>
            <p className="text-background font-semibold">1M+ Learners</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 text-muted-foreground hover:text-background transition-colors cursor-default"
              >
                <span className="text-xl">{logo.icon}</span>
                <span className="font-semibold">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}