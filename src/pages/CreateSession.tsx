import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, BookOpen, Users, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const skillOptions = [
  "Python", "JavaScript", "React", "Node.js", "UI/UX Design",
  "Guitar", "Piano", "Photography", "Spanish", "French",
  "Writing", "Marketing", "Public Speaking", "Fitness", "Cooking",
];

const levelOptions = ["Beginner", "Intermediate", "Advanced"];
const durationOptions = ["30 min", "45 min", "1 hour", "1.5 hours", "2 hours"];

const CreateSession = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    skill: "",
    topic: "",
    description: "",
    level: "",
    duration: "",
    date: "",
    time: "",
    maxParticipants: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.skill || !formData.topic || !formData.level || !formData.duration) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Session Created! 🎉",
      description: "Your session has been published successfully.",
    });

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-2xl">
          {/* Back Button */}
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              Create a Session
            </h1>
            <p className="text-muted-foreground">
              Share your expertise and earn time credits.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Skill Selection */}
            <div className="floating-card">
              <label className="flex items-center gap-2 font-semibold text-foreground mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                What skill will you teach?
              </label>
              <div className="flex flex-wrap gap-2">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => setFormData({ ...formData, skill })}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      formData.skill === skill
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {formData.skill === skill && <Check className="w-3 h-3 inline mr-1" />}
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic & Description */}
            <div className="floating-card space-y-4">
              <div>
                <label className="block font-semibold text-foreground mb-2">
                  Session Topic *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Introduction to Python Functions"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/40 transition-colors"
                />
              </div>

              <div>
                <label className="block font-semibold text-foreground mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Describe what learners will gain from this session..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/40 transition-colors resize-none"
                />
              </div>
            </div>

            {/* Level & Duration */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="floating-card">
                <label className="flex items-center gap-2 font-semibold text-foreground mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  Skill Level
                </label>
                <div className="space-y-2">
                  {levelOptions.map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData({ ...formData, level })}
                      className={`w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                        formData.level === level
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {formData.level === level && <Check className="w-4 h-4 inline mr-2" />}
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="floating-card">
                <label className="flex items-center gap-2 font-semibold text-foreground mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  Duration
                </label>
                <div className="space-y-2">
                  {durationOptions.map((duration) => (
                    <button
                      key={duration}
                      type="button"
                      onClick={() => setFormData({ ...formData, duration })}
                      className={`w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                        formData.duration === duration
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {formData.duration === duration && <Check className="w-4 h-4 inline mr-2" />}
                      {duration}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="floating-card">
              <label className="flex items-center gap-2 font-semibold text-foreground mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                Schedule
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground outline-none focus:border-primary/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Time</label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground outline-none focus:border-primary/40 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4">
              <Button type="submit" variant="accent" size="xl" className="flex-1">
                Publish Session
              </Button>
              <Link to="/dashboard">
                <Button type="button" variant="outline" size="xl">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateSession;