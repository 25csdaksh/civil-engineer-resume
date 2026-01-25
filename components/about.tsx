import { Briefcase, Target, Award, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Professional Biography
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am Er. Rakeshbhai Soni, a dedicated civil engineer with over 27 years 
                of professional experience in the construction industry. My career has 
                been built on a foundation of professional excellence and an unwavering 
                commitment to quality.
              </p>
              <p>
                Throughout my career, I have successfully managed numerous construction 
                projects, specializing in commercial and institutional buildings. My 
                approach combines technical expertise with strong project management 
                skills to deliver exceptional results.
              </p>
              <p>
                Quality is not just a goal for me—it is a guiding principle that 
                influences every aspect of my work. I believe in delivering projects 
                that stand the test of time, both structurally and aesthetically.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <span className="text-primary font-semibold">Core Interest:</span>
              <span className="text-foreground">Project Management</span>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <Briefcase className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Experience</h3>
              <p className="text-sm text-muted-foreground">
                27+ years in civil engineering and construction management
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Focus</h3>
              <p className="text-sm text-muted-foreground">
                Professional work with quality as the primary goal
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <Award className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                B.Tech from MS University Vadodara with 8.90 CGPA
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Leadership</h3>
              <p className="text-sm text-muted-foreground">
                Team coordination and project management expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
