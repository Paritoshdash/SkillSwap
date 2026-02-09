import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8 text-center">
            Terms of Use
          </h1>
          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By using SkillSwap, you agree to these Terms of Use. If you do not agree, do not use the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">2. Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be 13+ years old</li>
                <li>You are responsible for the accuracy of your profile</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">3. Platform Purpose</h2>
              <p>
                SkillSwap enables skill exchange without monetary transactions. We do not guarantee learning outcomes or skill quality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">4. User Responsibilities</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Teach skills honestly and responsibly</li>
                <li>Respect scheduled sessions</li>
                <li>Communicate respectfully</li>
                <li>Not misrepresent your abilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">5. Prohibited Activities</h2>
              <p className="mb-4">Users must NOT:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Demand money or paid services</li>
                <li>Share illegal, harmful, or offensive content</li>
                <li>Harass or exploit other users</li>
                <li>Record sessions without consent</li>
                <li>Spam or misuse the platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">6. Content Ownership</h2>
              <p>
                You own your content, but you grant SkillSwap a license to display it on the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">7. Termination</h2>
              <p>
                We may suspend or ban accounts that violate rules without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">SkillSwap is not responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Skill quality</li>
                <li>Personal disputes</li>
                <li>Losses from interactions between users</li>
              </ul>
            </section>

            <section className="bg-secondary/50 p-6 rounded-2xl border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">9. Governing Law</h2>
              <p>
                These terms are governed by the laws of India.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
