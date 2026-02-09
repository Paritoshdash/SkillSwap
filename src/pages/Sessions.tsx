import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Search, Filter, Star, Clock, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const sessions = [
  {
    id: "1",
    skill: "Python Programming",
    topic: "Data Structures Deep Dive",
    teacher: "Alex M.",
    avatar: "AM",
    rating: 0,
    duration: "1 hour",
    level: "Intermediate",
    available: 3,
    category: "Technology",
  },
  {
    id: "2",
    skill: "Guitar",
    topic: "Fingerpicking Techniques",
    teacher: "Sarah K.",
    avatar: "SK",
    rating: 0,
    duration: "45 min",
    level: "Beginner",
    available: 5,
    category: "Music",
  },
  {
    id: "3",
    skill: "UI/UX Design",
    topic: "Creating Design Systems",
    teacher: "Mike R.",
    avatar: "MR",
    rating: 0,
    duration: "1.5 hours",
    level: "Advanced",
    available: 2,
    category: "Design",
  },
  {
    id: "4",
    skill: "Spanish",
    topic: "Conversational Practice",
    teacher: "Maria L.",
    avatar: "ML",
    rating: 0,
    duration: "30 min",
    level: "Beginner",
    available: 8,
    category: "Language",
  },
  {
    id: "5",
    skill: "Photography",
    topic: "Portrait Lighting",
    teacher: "David C.",
    avatar: "DC",
    rating: 0,
    duration: "1 hour",
    level: "Intermediate",
    available: 4,
    category: "Creative",
  },
  {
    id: "6",
    skill: "React",
    topic: "Hooks & State Management",
    teacher: "Emma W.",
    avatar: "EW",
    rating: 0,
    duration: "1 hour",
    level: "Intermediate",
    available: 6,
    category: "Technology",
  },
];

const categories = ["All", "Technology", "Music", "Design", "Language", "Creative"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const Sessions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredSessions = sessions.filter((session) => {
    const matchesSearch =
      session.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || session.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All Levels" || session.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse Sessions
            </h1>
            <p className="text-muted-foreground text-lg">
              Find the perfect skill session and start learning today.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* Search Bar */}
            <div className="relative mb-6">
              <div className="flex items-center bg-card rounded-full shadow-card border border-border overflow-hidden p-2">
                <div className="flex-1 flex items-center pl-4">
                  <Search className="w-5 h-5 text-muted-foreground mr-3" />
                  <input
                    type="text"
                    placeholder="Search skills or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button variant="accent" className="rounded-full px-6">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filters:</span>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-foreground hover:border-primary/40"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Level Filter */}
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border text-foreground outline-none focus:border-primary/40"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <p className="text-muted-foreground text-sm">
              Showing {filteredSessions.length} sessions
            </p>
          </div>

          {/* Sessions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSessions.map((session) => (
              <div key={session.id} className="floating-card group">
                <div className="flex items-start gap-4 mb-4">
                  {/* Teacher Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {session.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {session.skill}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      by {session.teacher}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="w-4 h-4 fill-accent" />
                    <span className="text-sm font-medium">{session.rating}</span>
                  </div>
                </div>

                <p className="text-foreground font-medium mb-4">{session.topic}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    {session.level}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {session.duration}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {session.available} spots
                  </span>
                </div>

                <Link to={`/sessions/${session.id}`}>
                  <Button variant="outline" className="w-full group/btn">
                    Book Session
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {filteredSessions.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No sessions found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedLevel("All Levels");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sessions;