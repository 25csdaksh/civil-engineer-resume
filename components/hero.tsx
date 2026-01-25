import { Button } from "@/components/ui/button"
import { Download, Mail, MapPin, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Civil Engineer
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Er. Rakeshbhai Soni
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Professional civil engineer with over 27 years of experience. 
              Committed to professional work with quality as my primary goal. 
              Specialized in project management and construction engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Patan, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 09825750781</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="gap-2">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-secondary/50 border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-5xl font-bold text-primary">RS</span>
                  </div>
                  <p className="text-muted-foreground text-sm">27+ Years Experience</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary">27+</p>
            <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary">100+</p>
            <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary">B.Tech</p>
            <p className="text-sm text-muted-foreground mt-1">MS University</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary">8.90</p>
            <p className="text-sm text-muted-foreground mt-1">CGPA Score</p>
          </div>
        </div>
      </div>
    </section>
  )
}
