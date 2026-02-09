import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-foreground p-12 md:p-16 text-center">
          {/* Decorative elements */}
          <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Start Learning Today</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
              Ready to Exchange Skills?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Join our community of learners. Start teaching, earning credits, and learning new skills today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/sessions">
                <Button variant="pill-outline" size="xl" className="border-muted-foreground/30 text-background hover:bg-muted-foreground/10">
                  Browse Skills
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}