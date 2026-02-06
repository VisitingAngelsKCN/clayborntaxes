import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from "lucide-react"

const services = [
  { name: "Individual Tax Preparation", href: "/individual-tax" },
  { name: "Business Tax Preparation", href: "/business-tax" },
  { name: "Tax Planning", href: "/tax-planning" },
]

const company = [
  { name: "Why Choose Us", href: "/why-us" },
  { name: "Resources & FAQ", href: "/resources" },
  { name: "Contact Us", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="text-lg font-bold text-primary font-serif">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight font-serif">The Clayborn</span>
                <span className="text-sm font-bold leading-tight font-serif">Group</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Tax Preparation You Can Trust. Year-Round. Serving individuals and businesses in Alpharetta and North Atlanta.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Company</h3>
            <ul className="flex flex-col gap-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary-foreground/50">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                (770) 555-1234
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 shrink-0" />
                info@theclayborn.group
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Alpharetta, GA 30009</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Mon-Fri: 9am-6pm<br />Sat: By Appointment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} The Clayborn Group. All rights reserved. | Alpharetta, Georgia
          </p>
        </div>
      </div>
    </footer>
  )
}
