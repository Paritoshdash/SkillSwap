import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Clock, Calendar, Video, AlertCircle, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const sessionData = {
  id: "1",
  skill: "Python Programming",
  topic: "Data Structures Deep Dive",
  description: "Learn about fundamental data structures in Python including lists, dictionaries, sets, and tuples. We'll cover when to use each one and best practices for efficient code.",
  teacher: {
    name: "Alex Martinez",
    avatar: "AM",
    rating: 4.9,
    sessionsCompleted: 28,
  },
  level: "Intermediate",
  duration: "1 hour",
  date: "Today",
  time: "6:00 PM",
  creditCost: 1,
  spotsLeft: 3,
};

const rules = [
  "First 5 minutes are a free trial period",
  "Credits are deducted after the trial",
  "Be respectful and engaged during the session",
  "Camera is optional but recommended",
];

const SessionDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <Link
            to="/sessions"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sessions
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Session Info Card */}
              <div className="floating-card">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                    🐍
                  </div>
                  <div className="flex-1">
                    <h1 className="font-display text-2xl font-bold text-foreground mb-1">
                      {sessionData.skill}
                    </h1>
                    <p className="text-muted-foreground">{sessionData.topic}</p>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed mb-6">
                  {sessionData.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    {sessionData.level}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {sessionData.duration}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {sessionData.date}, {sessionData.time}
                  </span>
                </div>
              </div>

              {/* Teacher Card */}
              <div className="floating-card">
                <h3 className="font-display font-bold text-foreground mb-4">Your Teacher</h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                    {sessionData.teacher.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{sessionData.teacher.name}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        {sessionData.teacher.rating} rating
                      </span>
                      <span>{sessionData.teacher.sessionsCompleted} sessions</span>
                    </div>
                  </div>
                  <Link to="/profile">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Rules Card */}
              <div className="floating-card bg-muted/50">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-bold text-foreground">Session Rules</h3>
                </div>
                <ul className="space-y-3">
                  {rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="floating-card sticky top-28">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Credit Cost</p>
                  <p className="text-4xl font-bold text-foreground">
                    {sessionData.creditCost}
                    <span className="text-lg text-muted-foreground ml-1">credit</span>
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium text-foreground">{sessionData.date}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-medium text-foreground">{sessionData.time}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium text-foreground">{sessionData.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Spots Left</span>
                    <span className="font-medium text-success">{sessionData.spotsLeft}</span>
                  </div>
                </div>

                <Button variant="accent" className="w-full mb-3" size="lg">
                  <Video className="w-4 h-4 mr-2" />
                  Book Session
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Free 5-minute trial included
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SessionDetail;