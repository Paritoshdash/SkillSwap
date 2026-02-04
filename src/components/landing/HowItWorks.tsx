import { BookOpen, Clock, GraduationCap, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Teach a Skill",
    description: "Share your expertise with others. Host sessions on anything you're passionate about.",
    color: "primary",
  },
  {
    icon: Clock,
    title: "Earn Time Credits",
    description: "Get rewarded in hours for every session you teach. Your time is valuable.",
    color: "accent",
  },
  {
    icon: GraduationCap,
    title: "Learn Any Skill",
    description: "Spend your credits to learn from others. Unlimited skills, zero cost.",
    color: "success",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How SkillSwap Works
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple 3-step process to start learning and teaching without spending money.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border">
                  <ArrowRight className="absolute -right-3 -top-2 w-5 h-5 text-muted-foreground" />
                </div>
              )}

              <div className="floating-card text-center relative z-10 bg-card">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                    step.color === "primary"
                      ? "bg-primary/10"
                      : step.color === "accent"
                      ? "bg-accent/10"
                      : "bg-success/10"
                  }`}
                >
                  <step.icon
                    className={`w-8 h-8 ${
                      step.color === "primary"
                        ? "text-primary"
                        : step.color === "accent"
                        ? "text-accent"
                        : "text-success"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}