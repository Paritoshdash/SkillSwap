import { Star, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const skills = [
  {
    name: "Python Programming",
    category: "Technology",
    sessions: 0,
    rating: 0,
    icon: "🐍",
  },
  {
    name: "Guitar Basics",
    category: "Music",
    sessions: 0,
    rating: 0,
    icon: "🎸",
  },
  {
    name: "UI/UX Design",
    category: "Design",
    sessions: 0,
    rating: 0,
    icon: "🎨",
  },
  {
    name: "React Development",
    category: "Technology",
    sessions: 0,
    rating: 0,
    icon: "⚛️",
  },
  {
    name: "Photography",
    category: "Creative",
    sessions: 0,
    rating: 0,
    icon: "📷",
  },
  {
    name: "Spanish Language",
    category: "Language",
    sessions: 0,
    rating: 0,
    icon: "🇪🇸",
  },
];

export function FeaturedSkills() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-card text-foreground text-sm font-medium mb-4 shadow-card">
              Popular Categories
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Featured Skills
            </h2>
          </div>
          <Link to="/sessions">
            <Button variant="outline" className="group">
              View All Skills
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Link
              key={skill.name}
              to={`/sessions?skill=${skill.name}`}
              className="floating-card group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {skill.category}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {skill.sessions} sessions
                    </span>
                    <span className="flex items-center gap-1 text-accent">
                      <Star className="w-4 h-4 fill-accent" />
                      {skill.rating}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}