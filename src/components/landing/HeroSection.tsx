import { Search, TrendingUp, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroIllustration from "@/assets/hero-illustration.png";

const popularSkills = ["Python", "Guitar", "UI/UX Design", "React", "Photography"];

export function HeroSection() {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden pt-24">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-20 h-20 rounded-2xl bg-primary/10 animate-float opacity-60" />
      <div className="absolute top-60 right-20 w-16 h-16 rounded-full bg-accent/20 animate-float-subtle opacity-60" />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 rounded-xl bg-success/20 animate-float opacity-40" />

      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                #1 Skill Exchange Platform
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Learn Skills Without{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">Paying Money</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -rotate-1" />
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Teach what you know, earn time credits, and learn anything you want. 
                Join thousands of learners exchanging skills every day.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <div className="flex items-center bg-card rounded-full shadow-card border border-border overflow-hidden p-2">
                <div className="flex-1 flex items-center pl-4">
                  <Search className="w-5 h-5 text-muted-foreground mr-3" />
                  <input
                    type="text"
                    placeholder="Search skills you want to learn..."
                    className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button variant="accent" className="rounded-full px-6">
                  Search
                </Button>
              </div>
            </div>

            {/* Popular Skills */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Popular Skills:</p>
              <div className="flex flex-wrap gap-2">
                {popularSkills.map((skill) => (
                  <Link
                    key={skill}
                    to={`/sessions?skill=${skill}`}
                    className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:bg-secondary transition-all duration-300"
                  >
                    {skill}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link to="/dashboard">
              <Button variant="hero" size="xl" className="group">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right - Illustration & Floating Cards */}
          <div className="relative lg:pl-12">
            {/* Main Illustration */}
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroIllustration}
                alt="Person learning on laptop"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute top-8 right-0 lg:right-8 glass-card p-4 animate-float z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Active Learners</p>
                  <p className="text-lg font-bold text-primary">12,500+</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 left-0 lg:left-4 glass-card p-4 animate-float-subtle z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Session Rating</p>
                  <p className="text-lg font-bold text-primary">4.9/5.0</p>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute top-1/2 -left-4 lg:-left-8 glass-card p-3 animate-float z-20" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-bold text-secondary-foreground"
                    >
                      {["A", "B", "C"][i - 1]}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">+2.5k joined this week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}