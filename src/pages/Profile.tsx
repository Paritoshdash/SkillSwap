import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Star, MapPin, Calendar, Clock, Edit, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const userProfile = {
  name: "Alex Martinez",
  bio: "Full-stack developer with 5+ years of experience. Love teaching Python and web development. Always excited to learn new creative skills!",
  location: "San Francisco, CA",
  joinedDate: "March 2024",
  teachingSkills: ["Python", "JavaScript", "React", "Node.js"],
  learningSkills: ["Guitar", "Photography", "Spanish", "UI/UX Design"],
  stats: {
    sessionsCompleted: 0,
    hoursEarned: 0,
    avgRating: 0,
    reviewsCount: 0,
  },
};

const reviews = [];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="floating-card text-center">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary mb-4">
                  AM
                </div>

                <h1 className="font-display text-2xl font-bold text-foreground mb-2">
                  {userProfile.name}
                </h1>

                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {userProfile.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Joined {userProfile.joinedDate}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {userProfile.bio}
                </p>

                <Button variant="outline" className="w-full">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              {/* Stats Card */}
              <div className="floating-card mt-6">
                <h3 className="font-display font-bold text-foreground mb-4">Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-xl bg-secondary">
                    <p className="text-2xl font-bold text-foreground">{userProfile.stats.sessionsCompleted}</p>
                    <p className="text-xs text-muted-foreground">Sessions</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-secondary">
                    <p className="text-2xl font-bold text-foreground">{userProfile.stats.hoursEarned}</p>
                    <p className="text-xs text-muted-foreground">Hours Earned</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-secondary">
                    <p className="text-2xl font-bold text-foreground flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      {userProfile.stats.avgRating}
                    </p>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-secondary">
                    <p className="text-2xl font-bold text-foreground">{userProfile.stats.reviewsCount}</p>
                    <p className="text-xs text-muted-foreground">Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Skills Section */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Teaching Skills */}
                <div className="floating-card">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-accent" />
                    <h3 className="font-display font-bold text-foreground">Skills I Teach</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.teachingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learning Skills */}
                <div className="floating-card">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-success" />
                    <h3 className="font-display font-bold text-foreground">Skills I Want to Learn</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.learningSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="floating-card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Reviews & Feedback
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {userProfile.stats.reviewsCount} reviews
                  </span>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="pb-6 border-b border-border last:border-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-foreground">{review.author}</p>
                          <p className="text-sm text-muted-foreground">{review.skill}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-accent fill-accent"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">
                        {review.comment}
                      </p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="floating-card bg-primary/5 border border-primary/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">
                      Ready to teach or learn?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Create a new session or browse available skills.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="/sessions/create">
                      <Button variant="accent">Create Session</Button>
                    </Link>
                    <Link to="/sessions">
                      <Button variant="outline">Browse Skills</Button>
                    </Link>
                  </div>
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

export default Profile;