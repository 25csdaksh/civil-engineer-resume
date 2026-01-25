import { HardHat, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-foreground">
              <HardHat className="h-6 w-6 text-primary" />
              <span className="font-semibold text-lg">Er. Rakeshbhai Soni</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional Civil Engineer with 27+ years of experience. 
              Committed to quality and excellence in every project.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="tel:+919825750781" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 09825750781
              </a>
              <a 
                href="mailto:rakeshsoni05@yahoo.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                rakeshsoni05@yahoo.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Patan, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Er. Rakeshbhai Soni. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Civil Engineer | B.Tech, MS University Vadodara
          </p>
        </div>
      </div>
    </footer>
  )
}
