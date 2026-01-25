import { GraduationCap, Calendar, Award, Building } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Academic Background
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A strong educational foundation in civil engineering from a prestigious institution
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <GraduationCap className="h-3 w-3 text-primary-foreground" />
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-colors">
              <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-primary font-medium mt-1">Civil Engineering</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-bold text-foreground">CGPA: 8.90</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Institution</p>
                    <p className="font-medium text-foreground">MS University Vadodara</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Year of Passing</p>
                    <p className="font-medium text-foreground">1989</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Structural Engineering",
                    "Geotechnical Engineering",
                    "Construction Management",
                    "Surveying",
                    "Hydraulics",
                    "Transportation Engineering",
                    "Concrete Technology",
                    "Steel Structures"
                  ].map((course) => (
                    <span 
                      key={course}
                      className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full border border-border"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
