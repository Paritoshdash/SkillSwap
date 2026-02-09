import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, XCircle, Star, AlertTriangle, Leaf } from "lucide-react";

const CommunityGuidelines = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
            Community Guidelines
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Our Goal: To create a safe, respectful, and helpful learning community.
          </p>

          <div className="space-y-12">
            {/* What We Encourage */}
            <section className="bg-success/5 p-8 rounded-3xl border border-success/20">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-success" />
                <h2 className="text-2xl font-bold text-foreground">What We Encourage</h2>
              </div>
              <ul className="grid gap-4">
                {[
                  "Honest skill representation",
                  "Constructive feedback",
                  "Clear communication",
                  "Respect for time and effort",
                  "Inclusive and supportive behavior",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-success text-xl">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* What Is Not Allowed */}
            <section className="bg-destructive/5 p-8 rounded-3xl border border-destructive/20">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-6 h-6 text-destructive" />
                <h2 className="text-2xl font-bold text-foreground">What Is Not Allowed</h2>
              </div>
              <ul className="grid gap-4">
                {[
                  "Harassment, abuse, or discrimination",
                  "Fake skills or misleading claims",
                  "Asking for money or paid favors",
                  "Inappropriate or unsafe content",
                  "Poor conduct during sessions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-destructive text-xl">🚫</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Quality Standards */}
            <section className="bg-accent/5 p-8 rounded-3xl border border-accent/20">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-accent fill-accent" />
                <h2 className="text-2xl font-bold text-foreground">Quality Standards</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Ensure clear audio/video",
                  "Prepare before teaching",
                  "Be patient and respectful",
                  "Accept feedback gracefully",
                ].map((item) => (
                  <div key={item} className="p-4 rounded-xl bg-background border border-border flex items-center gap-3 text-sm font-medium text-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Reporting & Enforcement */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Reporting & Enforcement</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-foreground">Users can report:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Poor behavior</li>
                    <li>Misrepresentation</li>
                    <li>Safety concerns</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-foreground">Violations may result in:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Warnings</li>
                    <li>Temporary suspension</li>
                    <li>Permanent ban</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Community Culture */}
            <section className="text-center py-12 border-t border-border">
              <div className="flex justify-center mb-4">
                <Leaf className="w-10 h-10 text-success" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Community Culture</h2>
              <p className="text-lg text-primary font-display font-semibold tracking-wide">
                Trust · Learning · Mutual Growth
              </p>
            </section>

            {/* Important Note */}
            <section className="bg-muted p-6 rounded-2xl text-xs text-muted-foreground italic">
              <p className="mb-2 font-bold not-italic text-foreground flex items-center gap-2 uppercase tracking-wider">
                ✅ Important Note
              </p>
              These are MVP-safe policies. Once you add payments, certificates, or launch mobile apps, you should review with a legal template or lawyer.
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityGuidelines;
