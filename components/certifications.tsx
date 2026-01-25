import { Award, Shield, FileCheck, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    title: "AutoCAD Professional Certification",
    category: "Software",
    icon: FileCheck,
    description: "Advanced proficiency in AutoCAD for civil engineering drawings and designs",
  },
  {
    title: "Construction Safety Training",
    category: "Safety",
    icon: Shield,
    description: "Comprehensive training in construction site safety protocols and compliance",
  },
  {
    title: "Project Management Professional",
    category: "Management",
    icon: Star,
    description: "Expertise in managing complex construction projects from inception to completion",
  },
  {
    title: "Quality Control & Assurance",
    category: "Quality",
    icon: Award,
    description: "Certified in construction quality standards and assurance protocols",
  },
]

const achievements = [
  "Successfully completed 100+ construction projects",
  "27+ years of unblemished professional record",
  "Recognized for quality-focused engineering solutions",
  "Led teams of 50+ construction workers on major projects",
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Certifications & Achievements
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Professional Recognition
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuous professional development and notable achievements throughout my career
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <Card key={cert.title} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-5">
                    <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                      <cert.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs text-primary font-medium uppercase tracking-wide">
                      {cert.category}
                    </span>
                    <h4 className="font-semibold text-foreground mt-1 mb-2 text-sm">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Key Achievements
            </h3>
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-foreground pt-1">{achievement}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="bg-card border border-border rounded-xl p-6">
              <p className="text-muted-foreground italic leading-relaxed">
                {'"Quality is not just a goal for me—it is a guiding principle that influences every aspect of my work. I believe in delivering projects that stand the test of time."'}
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">RS</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Er. Rakeshbhai Soni</p>
                  <p className="text-xs text-muted-foreground">Civil Engineer</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
