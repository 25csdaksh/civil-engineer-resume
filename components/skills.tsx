import { 
  Ruler, 
  Calculator, 
  ClipboardCheck, 
  HardHat, 
  FileSpreadsheet, 
  Building2,
  Users,
  MessageSquare,
  Clock
} from "lucide-react"

const technicalSkills = [
  { name: "AutoCAD", icon: Ruler, level: 95 },
  { name: "STAAD / ETABS", icon: Building2, level: 90 },
  { name: "MS Excel", icon: FileSpreadsheet, level: 92 },
  { name: "Quantity Surveying", icon: Calculator, level: 95 },
  { name: "Site Supervision", icon: HardHat, level: 98 },
  { name: "Estimation & Costing", icon: ClipboardCheck, level: 95 },
]

const softSkills = [
  { name: "Team Coordination", icon: Users, description: "Leading and coordinating construction teams effectively" },
  { name: "Communication", icon: MessageSquare, description: "Clear communication with clients and stakeholders" },
  { name: "Time Management", icon: Clock, description: "Efficient project scheduling and deadline management" },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Technical & Professional Skills
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive skill set developed over 27+ years in the civil engineering industry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <skill.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills Tags */}
            <div className="pt-6">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Additional Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Structural Analysis",
                  "Blueprint Reading",
                  "Quality Control",
                  "Safety Compliance",
                  "Material Testing",
                  "Contract Management",
                  "Budget Planning",
                  "RCC Design"
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
