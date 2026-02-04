import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Clock, BookOpen, GraduationCap, Calendar, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Time Credits", value: "2.0 hrs", icon: Clock, color: "primary" },
  { label: "Teaching", value: "3 Sessions", icon: BookOpen, color: "accent" },
  { label: "Learning", value: "1 Session", icon: GraduationCap, color: "success" },
];

const upcomingSessions = [
  {
    id: "1",
    skill: "Python Basics",
    topic: "Functions & Loops",
    time: "Today, 6:00 PM",
    type: "learning",
    teacher: "Alex M.",
  },
  {
    id: "2",
    skill: "Guitar Chords",
    topic: "Beginner Strumming",
    time: "Tomorrow, 4:00 PM",
    type: "teaching",
    student: "Sarah K.",
  },
  {
    id: "3",
    skill: "UI/UX Design",
    topic: "Figma Basics",
    time: "Wed, 3:00 PM",
    type: "learning",
    teacher: "Mike R.",
  },
];

const recentActivity = [
  { action: "Completed session", skill: "React Hooks", time: "2 hours ago" },
  { action: "Earned 1.5 credits", skill: "Teaching JavaScript", time: "Yesterday" },
  { action: "Booked session", skill: "Photography", time: "2 days ago" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Welcome back, Alex! 👋
              </h1>
              <p className="text-muted-foreground">
                Ready to learn something new today?
              </p>
            </div>
            <Link to="/sessions/create">
              <Button variant="accent" className="group">
                <Plus className="w-4 h-4" />
                Create Session
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="floating-card">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      stat.color === "primary"
                        ? "bg-primary/10"
                        : stat.color === "accent"
                        ? "bg-accent/10"
                        : "bg-success/10"
                    }`}
                  >
                    <stat.icon
                      className={`w-7 h-7 ${
                        stat.color === "primary"
                          ? "text-primary"
                          : stat.color === "accent"
                          ? "text-accent"
                          : "text-success"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Upcoming Sessions */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Upcoming Sessions
                </h2>
                <Link to="/sessions" className="text-sm text-primary hover:underline">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="floating-card">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg ${
                            session.type === "learning"
                              ? "bg-success/10"
                              : "bg-accent/10"
                          }`}
                        >
                          {session.type === "learning" ? "📚" : "🎓"}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {session.skill}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            {session.topic}
                          </p>
                          <div className="flex items-center gap-2 text-xs">
                            <span
                              className={`px-2 py-1 rounded-full ${
                                session.type === "learning"
                                  ? "bg-success/10 text-success"
                                  : "bg-accent/10 text-accent"
                              }`}
                            >
                              {session.type === "learning" ? "Learning" : "Teaching"}
                            </span>
                            <span className="text-muted-foreground">
                              with {session.type === "learning" ? session.teacher : session.student}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium text-foreground">
                          {session.time}
                        </p>
                        <Link to={`/sessions/${session.id}`}>
                          <Button variant="outline" size="sm" className="group">
                            View
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-6">
                Recent Activity
              </h2>
              <div className="floating-card">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className={`pb-4 ${
                        index < recentActivity.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <p className="text-sm font-medium text-foreground">
                        {activity.action}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.skill}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link to="/sessions" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Browse Skills
                    </Button>
                  </Link>
                  <Link to="/sessions/create" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Session
                    </Button>
                  </Link>
                  <Link to="/profile" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Update Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;