import { Building2, MapPin, Wrench, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Shree Vardhman Trust Amilshala",
    location: "Yamunawadi",
    type: "Commercial",
    role: "Construction Engineer",
    description: "Led the complete construction engineering for this commercial educational facility, ensuring structural integrity and quality standards were maintained throughout the project lifecycle.",
    tools: ["AutoCAD", "STAAD Pro", "MS Excel", "Site Management"],
  },
  {
    title: "Residential Complex Development",
    location: "Patan, Gujarat",
    type: "Residential",
    role: "Project Manager",
    description: "Managed the development of a multi-story residential complex from foundation to finishing, coordinating with contractors and ensuring timely delivery.",
    tools: ["Quantity Surveying", "Cost Estimation", "Quality Control"],
  },
  {
    title: "Industrial Warehouse Facility",
    location: "Gujarat",
    type: "Industrial",
    role: "Structural Consultant",
    description: "Provided structural consultation for a large-scale industrial warehouse, focusing on load-bearing capacity and safety compliance.",
    tools: ["ETABS", "Structural Analysis", "Safety Compliance"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of significant projects demonstrating expertise in construction engineering and project management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.type}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg text-foreground mt-4 text-balance">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Wrench className="h-4 w-4 text-primary" />
                  <span>{project.role}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="px-2 py-1 text-xs bg-secondary text-foreground rounded-md border border-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <Calendar className="inline-block h-4 w-4 mr-2 text-primary" />
            Over 100+ projects completed across commercial, residential, and industrial sectors
          </p>
        </div>
      </div>
    </section>
  )
}
