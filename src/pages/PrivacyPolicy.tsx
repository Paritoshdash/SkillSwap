import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8 text-center">
            Privacy Policy
          </h1>
          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                SkillSwap respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, profile photo (via sign-up)</li>
                <li>Skills you offer and skills you want to learn</li>
                <li>Messages exchanged on the platform</li>
                <li>Ratings and feedback</li>
                <li>Technical data (IP address, browser, device type)</li>
              </ul>
              <p className="mt-4 font-medium text-foreground">
                We do not collect payment information for skill exchanges.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use your data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Match users based on skills</li>
                <li>Enable communication between users</li>
                <li>Improve platform quality and safety</li>
                <li>Prevent fraud and misuse</li>
                <li>Send important updates (not spam)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">4. Data Sharing</h2>
              <p className="mb-4">We do not sell your data. Data may be shared only:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers (hosting, authentication)</li>
                <li>If required by law</li>
                <li>To protect user safety or platform integrity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p>
                We use standard security measures (HTTPS, secure authentication).
                However, no online platform is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p className="mb-4">You can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Edit or delete your profile</li>
                <li>Request data deletion</li>
                <li>Withdraw consent anytime</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">7. Changes</h2>
              <p>
                We may update this policy. Continued use means acceptance of changes.
              </p>
            </section>

            <section className="bg-secondary/50 p-6 rounded-2xl border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">8. Contact</h2>
              <p>
                For privacy concerns: <a href="mailto:support@skillswap.com" className="text-primary hover:underline font-medium">support@skillswap.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
